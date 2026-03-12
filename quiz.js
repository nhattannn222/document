let allQuestions = [];
let selectedQuestions = [];
let currentIdx = 0;
let userAnswers = {}; // idx: choiceIdx
let startTime = Date.now();
let isReviewMode = false;

const qText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const qNum = document.getElementById('current-q-num');
const progressFill = document.getElementById('progress-fill');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');
const timerDisplay = document.getElementById('timer');
const qNavGrid = document.getElementById('q-nav-grid');

// Load Questions
function initQuiz() {
    try {
        if (typeof QUESTIONS_DATA === 'undefined') {
            throw new Error("Không tìm thấy dữ liệu câu hỏi.");
        }
        allQuestions = QUESTIONS_DATA;

        // Filter only those with answer
        const answeredQs = allQuestions.filter(q => q.answer !== null);

        // Randomly pick 20
        selectedQuestions = [...answeredQs]
            .sort(() => 0.5 - Math.random())
            .slice(0, 20);

        initNavGrid();
        renderQuestion();
        startTimer();
    } catch (err) {
        console.error("Lỗi load câu hỏi:", err);
        qText.innerText = "Không thể tải câu hỏi. Vui lòng kiểm tra file questions.js.";
    }
}

function initNavGrid() {
    qNavGrid.innerHTML = '';
    selectedQuestions.forEach((_, i) => {
        const item = document.createElement('button');
        item.className = 'q-nav-item';
        item.id = `nav-item-${i}`;
        item.innerText = i + 1;
        item.onclick = () => jumpToQuestion(i);
        qNavGrid.appendChild(item);
    });
}

function updateNavGrid() {
    selectedQuestions.forEach((_, i) => {
        const item = document.getElementById(`nav-item-${i}`);
        item.classList.toggle('active', i === currentIdx);

        if (isReviewMode) {
            const isCorrect = userAnswers[i] === selectedQuestions[i].answer;
            item.classList.toggle('correct', isCorrect);
            item.classList.toggle('wrong', !isCorrect);
        } else {
            item.classList.toggle('answered', userAnswers[i] !== undefined);
        }
    });
}

function jumpToQuestion(idx) {
    currentIdx = idx;
    renderQuestion();
}

function renderQuestion() {
    const q = selectedQuestions[currentIdx];
    qNum.innerText = `Câu ${currentIdx + 1}/${selectedQuestions.length}`;

    // Header status in review mode
    if (isReviewMode) {
        const isCorrect = userAnswers[currentIdx] === q.answer;
        const statusHtml = isCorrect
            ? '<span class="q-status-badge badge-correct">Đúng</span>'
            : '<span class="q-status-badge badge-wrong">Sai</span>';
        qNum.innerHTML = `Câu ${currentIdx + 1}/${selectedQuestions.length} ${statusHtml}`;
    }

    qText.innerText = q.question;

    // Progress
    progressFill.style.width = `${((currentIdx + 1) / selectedQuestions.length) * 100}%`;

    // Options
    optionsGrid.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[currentIdx] === i) btn.classList.add('selected');

        if (isReviewMode) {
            // Highlight correct one
            if (i === q.answer) btn.classList.add('correct-ans');
            // If user picked wrong one, highlight it red
            if (userAnswers[currentIdx] === i && i !== q.answer) btn.classList.add('wrong-ans');
            btn.onclick = null; // Disable clicking in review
        } else {
            btn.onclick = () => selectOption(i);
        }

        btn.innerText = opt;
        optionsGrid.appendChild(btn);
    });

    // Nav Buttons
    btnPrev.disabled = currentIdx === 0;
    if (currentIdx === selectedQuestions.length - 1) {
        btnNext.style.display = 'none';
        if (!isReviewMode) btnSubmit.style.display = 'block';
    } else {
        btnNext.style.display = 'block';
        if (!isReviewMode) btnSubmit.style.display = 'none';
    }

    updateNavGrid();
}

function selectOption(i) {
    if (isReviewMode) return;
    userAnswers[currentIdx] = i;
    const btns = optionsGrid.querySelectorAll('.option-btn');
    btns.forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === i);
    });
    updateNavGrid();
}

function nextQuestion() {
    if (currentIdx < selectedQuestions.length - 1) {
        currentIdx++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        currentIdx--;
        renderQuestion();
    }
}

let timerInterval;
function startTimer() {
    timerInterval = setInterval(() => {
        const diff = Math.floor((Date.now() - startTime) / 1000);
        const m = Math.floor(diff / 60).toString().padStart(2, '0');
        const s = (diff % 60).toString().padStart(2, '0');
        timerDisplay.innerText = `${m}:${s}`;
    }, 1000);
}

function submitQuiz() {
    if (confirm("Bạn có chắc chắn muốn nộp bài?")) {
        clearInterval(timerInterval);
        let score = 0;
        selectedQuestions.forEach((q, i) => {
            if (q.answer !== null && userAnswers[i] === q.answer) {
                score++;
            }
        });

        document.getElementById('quiz-wrapper').style.display = 'none';
        const resultWrapper = document.getElementById('result-wrapper');
        resultWrapper.style.display = 'block';
        document.getElementById('score-text').innerText = `${score}/${selectedQuestions.length}`;

        if (score >= 10) {
            resultWrapper.querySelector('h2').innerText = "Chúc mừng! Bạn đã đạt.";
            document.getElementById('result-message').innerText = "Bạn đã hoàn thành bài thi với kết quả tốt.";
        } else {
            resultWrapper.querySelector('h2').innerText = "Cố gắng lên!";
            document.getElementById('result-message').innerText = "Bạn cần ôn tập thêm để có kết quả cao hơn.";
        }

        // Add Review Button
        const reviewBtn = document.createElement('button');
        reviewBtn.className = 'btn-nav btn-prev';
        reviewBtn.style.marginTop = '1rem';
        reviewBtn.innerText = "Xem lại bài làm";
        reviewBtn.onclick = startReview;
        resultWrapper.appendChild(reviewBtn);
    }
}

function startReview() {
    isReviewMode = true;
    currentIdx = 0;
    document.getElementById('result-wrapper').style.display = 'none';
    document.getElementById('quiz-wrapper').style.display = 'block';
    btnSubmit.style.display = 'none';
    renderQuestion();
}

btnNext.onclick = nextQuestion;
btnPrev.onclick = prevQuestion;
btnSubmit.onclick = submitQuiz;

initQuiz();
