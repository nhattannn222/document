import json
import re

file_path = "questions.js"


def load_js_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    content = re.sub(r"export\s+default", "", content)
    content = re.sub(r"const\s+\w+\s*=\s*", "", content)
    content = content.strip().rstrip(";")

    return json.loads(content)


def extract_question_number(question):
    match = re.search(r"Câu\s*(\d+)", question)
    if match:
        return int(match.group(1))
    return None


def validate_questions(data):
    errors = []
    questions_set = set()
    question_numbers = []

    if not isinstance(data, list):
        errors.append("Root không phải list")
        return errors

    for item in data:

        question = item.get("question", "❌ Không có question")
        options = item.get("options")
        answer = item.get("answer")

        # check key
        for key in ["question", "options", "answer"]:
            if key not in item:
                errors.append(f"Câu: '{question}' -> thiếu key: {key}")

        # check trùng question
        if isinstance(question, str):
            if question in questions_set:
                errors.append(f"Câu bị trùng: '{question}'")
            questions_set.add(question)
        else:
            errors.append(f"Câu không phải string: {question}")

        # check options
        if not isinstance(options, list):
            errors.append(f"Câu: '{question}' -> options không phải list")
        else:
            if len(options) != 4:
                errors.append(f"Câu: '{question}' -> options không đủ 4 đáp án")

        # check answer
        if not isinstance(answer, int):
            errors.append(f"Câu: '{question}' -> answer không phải int")
        else:
            if answer < 0 or answer > 3:
                errors.append(f"Câu: '{question}' -> answer ngoài phạm vi 0-3")

        # lấy số câu
        number = extract_question_number(question)
        if number is None:
            errors.append(f"Câu: '{question}' -> không đọc được số thứ tự")
        else:
            question_numbers.append(number)

    # ===== kiểm tra thứ tự câu =====
    if question_numbers:
        expected = set(range(1, 201))  # từ 1 → 200
        actual = set(question_numbers)

        missing = expected - actual
        duplicate = [x for x in question_numbers if question_numbers.count(x) > 1]

        if missing:
            errors.append(f"Thiếu câu: {sorted(missing)}")

        if duplicate:
            errors.append(f"Câu bị trùng số: {sorted(set(duplicate))}")

    return errors


def main():
    try:
        data = load_js_file(file_path)
    except Exception as e:
        print("❌ File JS không parse được:", e)
        return

    errors = validate_questions(data)

    print(f"Tổng số câu hỏi: {len(data)}")

    if not errors:
        print("✅ File hợp lệ (đủ 200 câu và đúng format)")
    else:
        print(f"\n❌ Có {len(errors)} lỗi:\n")
        for err in errors:
            print("-", err)


if __name__ == "__main__":
    main()