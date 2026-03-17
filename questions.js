const QUESTIONS_DATA = [
  {
    "question": "Câu 1: Đối tượng nghiên cứu của môn học Giáo dục quốc phòng – an ninh :",
    "options": [
      "A. Đường lối quân sự của Đảng; công tác quốc phòng-an ninh; quân sự chung; kĩ thuật chiến đấu bộ binh và chiến thuật.",
      "B. Quan điểm đường lối quân sự của Đảng về xây dựng nền quốc phòng toàn dân, chiến tranh nhân dân bảo vệ Tổ quốc",
      "C. Quan điểm của chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh về công tác quốc phòng, an ninh; kĩ thuật chiến đấu bộ binh và chiến thuật.",
      "D. Quan điểm của Chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh về chiến tranh, quân đội và bảo vệ Tổ quốc xã hội chủ nghĩa."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2: Nghiên cứu những quan điểm cơ bản của Đảng về đường lối quân sự gồm:",
    "options": [
      "A. Học thuyết Mác-Lênin, tư tưởng HCM về chiến tranh, quân đội và bảo vệ Tổ Quốc.",
      "B. Xây dựng nền quốc phòng toàn dân, an ninh nhân dân",
      "C. Chiến tranh nhân dân bảo vệ Tổ Quốc, xây dựng lực lượng vũ trang nhân dân...",
      "D. Tất cả đều đúng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 3: Giáo dục quốc phòng – an ninh là môn học bao gồm những kiến thức khoa học:",
    "options": [
      "A. Xã hội, nhân văn, khoa học cơ bản và kỹ thuật quân sự",
      "B.  Xã hội nhân văn, khoa học công nghệ và khoa học quân sự",
      "C. Xã hội, nhân văn, khoa học tự nhiên và khoa học kỹ thuật quân sự.",
      "D. Xã hội nhân văn và kỹ thuật công nghệ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 4: Thực hiện tốt Giáo dục quốc phòng – an ninh cho sinh viên là góp phần:",
    "options": [
      "A. Xây dựng tinh thần trách nhiệm, ý thức tham gia bảo vệ Tổ quốc trong mọi tình huống.",
      "B. Xây dựng tình yêu quê hương đất nước sẵn sàng tham gia lực lượng vũ trang nhân dân.",
      "C. Đào tạo cán bộ có ý thức tổ chức kỷ luật và tình yêu quê hương đất nước .",
      "D. Đào tạo đội ngũ cán bộ khoa học kỹ thuật có ý thức, năng lực sẵn sàng tham gia bảo vệ Tổ quốc. 1 BÀI 2 ( 20 câu ) QUAN ĐIỂM CHỦ NGHĨA MÁC – LÊNIN, TƯ TƯỞNG HỒ CHÍ MINH VỀ CHIẾN TRANH QUÂN ĐỘI VÀ BẢO VỆ TỔ QUỐC"
    ],
    "answer": 3
  },
  {
    "question": "Câu 5: Theo quan điểm của chủ nghĩa Mác-Lênin về chiến tranh:",
    "options": [
      "A.  Chiến tranh là một hiện tượng chính trị xã hội có tính lịch sử",
      "B. Chiến tranh là những cuộc xung đột tự phát ngẫu nhiên",
      "C. Chiến tranh là một hiện tượng xã hội mang tính vĩnh viễn",
      "D. Chiến tranh là những xung đột do mâu thuẫn không mang tính xã hội"
    ],
    "answer": 0
  },
  {
    "question": "Câu 6: Vì sao nói chiến tranh là một hiện tượng chính trị - xã hội có tính lịch sử:",
    "options": [
      "A. Vì chiến tranh là một hành vi bạo lực để buộc đối phương phục tùng ý chí của mình.",
      "B. Vì chiến tranh chỉ gắn với những điều kiện lịch sử, xã hội nhất định.",
      "C. Vì chiến tranh là sự huy động sức mạnh đến tột cùng của các bên tham chiến.",
      "D. Vì chiến tranh được thể hiện dưới một công cụ đặc biệt đó là bạo lực vũ trang"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7: Theo quan điểm của chủ nghĩa Mác-Lênin về nguồn gốc của chiến tranh:",
    "options": [
      "A. Chiến tranh bắt nguồn ngay từ khi xuất hiện loài người",
      "B. Chiến tranh bắt nguồn từ khi xuất hiện chế độ tư hữu, có giai cấp và nhà nước",
      "C. Chiến tranh bắt nguồn từ sự phát triển tất yếu khách quan của loài người",
      "D. Chiến tranh bắt nguồn từ khi xuất hiện các hình thức tôn giáo."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8: Theo quan điểm của chủ nghĩa Mác-Lênin về bản chất của chiến tranh: A  Là sự tiếp tục mục tiêu kinh tế bằng thủ bạo lực",
    "options": [
      "B. Là thủ đoạn để đạt được chính trị của một giai cấp",
      "C. Là sự tiếp tục của chính trị bằng bạo lực",
      "D. Là thủ đoạn chính trị của một giai cấp"
    ],
    "answer": 2
  },
  {
    "question": "Câu 9: Theo quan điểm của CN Mác-Lênin về quan hệ giữa chiến tranh với chính trị:",
    "options": [
      "A. Chính trị là con đường, là phương tiện của chiến tranh",
      "B. Chính trị là một thời đoạn, một bộ phận của chiến tranh",
      "C. Chính trị chi phối và quyết định toàn bộ tiến trình và kết cục của chiến tranh",
      "D. Chính trị không thể sử dụng kết quả sau chiến tranh để đề ra nhiệm vụ cho giai cấp"
    ],
    "answer": 2
  },
  {
    "question": "Câu 10: Hồ Chí Minh đã chỉ rõ cuộc chiến tranh của dân ta chống thực dân Pháp xâm lược là nhằm:",
    "options": [
      "A. Bảo vệ nhân dân, bảo vệ chế độ, bảo vệ tổ quốc.",
      "B. Bảo vệ đất nước và chống ách đô hộ của thực dân, đế quốc",
      "C. Bảo vệ tính mạng, tài sản của nhân dân,của chế độ XHCN",
      "D. Bảo vệ độc lập, chủ quyền và thống nhất đất nước"
    ],
    "answer": 3
  },
  {
    "question": "Câu 11: Dựa trên cơ sở nào Hồ Chí Minh đã xác định tính chất xã hội của chiến tranh?",
    "options": [
      "A. Giai cấp lãnh đạo tiến hành chiến tranh.",
      "B. Chế độ xã hội tiến hành chiến tranh.",
      "C. Mục đích chính trị của chiến tranh.",
      "D. Bản chất  xã hội của chiến tranh. 2"
    ],
    "answer": 2
  },
  {
    "question": "Câu 12: Chủ tịch Hồ Chí Minh xác định thái độ của chúng ta đối với chiến tranh là:",
    "options": [
      "A. Phản đối tất cả các cuộc chiến tranh",
      "B. Ủng hộ các cuộc chiến tranh chống áp bức, nô dịch",
      "C. Phản đối các cuộc chiến tranh phản cách mạng",
      "D. Ủng hộ chiến tranh chính nghĩa, phản đối chiến tranh phi nghĩa."
    ],
    "answer": 3
  },
  {
    "question": "Câu 13: Theo tư tưởng Hồ Chí Minh nhất thiết phải sử dụng bạo lực cách mạng:",
    "options": [
      "A. Để lật đổ chế độ cũ, xây dựng chế độ mới XHCN",
      "B. Để xây dựng chế độ mới âm no, tự do, hạnh phúc.",
      "C. Để giành lấy chính quyền và bảo vệ chính quyền",
      "D. Để lật đổ chế độ cũ, xây dựng chính quyền."
    ],
    "answer": 2
  },
  {
    "question": "Câu 14: Bạo lực cách mạng theo tư tưởng Hồ Chí Minh được tạo bởi:",
    "options": [
      "A. Sức mạnh của toàn dân, bằng cả lực lượng chính trị và lực lượng vũ trang",
      "B. Sức mạnh của toàn dân, bằng cả lực lượng chính trị và kinh tế",
      "C. Kết hợp chặt chẽ giữa đấu tranh chính trị với đấu tranh kinh tế",
      "D.Tất cả đều đúng"
    ],
    "answer": 0
  },
  {
    "question": "Câu 15: Yếu tố nào có vai trò quyết định đến sức mạnh chiến đấu của quân đội.",
    "options": [
      "A. Khoa học công nghệ.",
      "B. Chính trị tinh thần.",
      "C. Biên chế, tổ chức.",
      "D. Trang bị kỹ thuật quân sự."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16: Một trong những nguyên tắc quan trọng nhất về xây dựng quân đội kiểu mới của Lênin là:",
    "options": [
      "A. Sự lãnh đạo của Đảng cộng sản đối với quân đội.",
      "B. Giữ vững quan điểm giai cấp trong xây dựng quân đội.",
      "C. Tính kỷ luật cao là yếu tố quyết định sức mạnh quân đội",
      "D. Quân đội chính quy, hiện đại, trung thành với giai cấp công nhân và nhân dân lao động"
    ],
    "answer": 0
  },
  {
    "question": "Câu 17: Theo tư tưởng Hồ Chí Minh, Quân đội nhân dân Việt Nam:",
    "options": [
      "A. Mang bản chất nông dân",
      "B. Mang bản chất giai cấp công – nông do Đảng lãnh đạo",
      "C. Mang bản chất giai cấp công nhân",
      "D. Mang bản chất nhân dân lao động Việt Nam"
    ],
    "answer": 2
  },
  {
    "question": "Câu 18: Theo tư tưởng Hồ Chí Minh, quân đội nhân dân Việt Nam có những chức năng:",
    "options": [
      "A. Chiến đấu, sẵn sàng chiến đấu",
      "B. Chiến đấu, lao động sản xuất, tuyên truyền",
      "C. Chiến đấu, công tác, lao động sản xuất",
      "D. Chiến đấu và tham gia giữ gìn hòa bình khu vực"
    ],
    "answer": 2
  },
  {
    "question": "Câu 19: Theo quan điểm CN Mác Lênin để bảo vệ tổ quốc Xã hội chủ nghĩa phải:",
    "options": [
      "A. Tăng cường quân thường trực gắn với phát triển kinh tế - xã hội",
      "B. Tăng cường thế trận gắn với thực hiện chính sách đãi ngộ",
      "C. Tăng cường tiềm lực quốc phòng gắn với phát triển kinh tế - xã hội 3",
      "D. Tăng cường tiềm lực an ninh gắn với hợp tác quốc tế"
    ],
    "answer": 2
  },
  {
    "question": "Câu 20: Vai trò lãnh đạo trong bảo vệ tổ quốc xã hội chủ nghĩa thuộc về:",
    "options": [
      "A. Các đoàn thể, các tổ chức chính trị xã hội",
      "B. Quần chúng nhân dân",
      "C. Đảng Cộng sản Việt Nam",
      "D. Hệ thống chính trị"
    ],
    "answer": 2
  },
  {
    "question": "Câu 21: Theo tư tưởng Hồ Chí Minh bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa là:",
    "options": [
      "A. Qui luật lịch sử",
      "B. Tất yếu khách quan",
      "C. Nhiệm vụ chiến lược",
      "D. Cả a và b"
    ],
    "answer": 1
  },
  {
    "question": "Câu 22: Theo tư tưởng Hồ Chí Minh mục tiêu bảo vệ Tổ quốc là gì?",
    "options": [
      "A. Độc lập dân tộc và thống nhất đất nước",
      "B. Độc lập dân tộc và xây dựng đất nước",
      "C. Độc lập dân tộc và Chủ nghĩa xã hội",
      "D. Độc lập dân tộc và toàn vẹn lãnh thổ"
    ],
    "answer": 2
  },
  {
    "question": "Câu 23: Chủ tịch Hồ Chí Minh xác định nghĩa vụ, trách nhiệm của công dân về bảo vệ Tổ quốc:",
    "options": [
      "A. Là nghĩa vụ số một, là trách nhiệm đầu tiên của mọi công dân",
      "B. Là sẵn sàng chiến đấu hy sinh vì Tổ quốc",
      "C. Là nghĩa vụ và trách nhiệm của mọi công dân",
      "D. Là nghĩa vụ của mọi công dân Việt Nam"
    ],
    "answer": 2
  },
  {
    "question": "Câu 24: Sức mạnh bảo vệ Tổ quốc theo tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "A. Là sức mạnh của cả dân tộc, sức mạnh quốc phòng , an ninh nhân dân.",
      "B. Là sức mạnh tổng hợp của cả dân tộc, cả nước, kết hợp với sức mạnh thời đại",
      "C. Là sức mạnh của toàn dân của các cấp, các ngành, các tổ chức đoàn thể.",
      "D. Là sức mạnh nền quốc phòng toàn dân do nhiều yếu tố, nhân tố tạo thành. BÀI 3 ( 20 câu ) XÂY DỰNG NỀN QUỐC PHÒNG TOÀN DÂN, AN NINH NHÂN DÂN"
    ],
    "answer": 1
  },
  {
    "question": "Câu 25: Một trong những quan điểm cơ bản xây dựng nền QPTD, ANND là :",
    "options": [
      "A. Tự lực tự cường và kết hợp với yếu tố nước ngoài.",
      "B. Toàn dân, toàn diện, độc lập, tự chủ, tự lực, tự cường.",
      "C. Dựa vào dân và sức mạnh truyền thống .",
      "D. Tự lực cánh sinh kết hợp với sức mạnh quốc phòng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 26: N ền quốc phòng toàn dân, an ninh nhân dân chỉ có mục đích duy nhất là:",
    "options": [
      "A. Tự vệ chính đáng",
      "B. Sẵn sàng chiến đấu",
      "C. Xây dựng vững mạnh.",
      "D. Chính quy, hiện đại. 4"
    ],
    "answer": 0
  },
  {
    "question": "Câu 27: Một trong những đặc trưng của nền quốc phòng toàn dân, an ninh nhân dân là:",
    "options": [
      "A. Vì dân, của dân và do toàn thể nhân dân tiến hành",
      "B. Nền Quốc phòng – An ninh mang tính giai cấp, nhân dân sâu sắc",
      "C. Nền Quốc phòng – An ninh bảo vệ quyền lợi của dân",
      "D. Do nhân dân xây dựng, mang tính nhân dân sâu sắc"
    ],
    "answer": 0
  },
  {
    "question": "Câu 28: Sức mạnh của nền quốc phòng toàn dân, an ninh nhân dân ở nước ta là:",
    "options": [
      "A. Sức mạnh do các yếu tố chính trị, kinh tế, văn hóa, khoa học",
      "B. Sức mạnh tổng hợp do thiên thời địa lợi nhân hòa tạo ra.",
      "C. Sức mạnh của lực lượng vũ trang nhân dân tạo ra",
      "D. Sức mạnh tổng hợp do nhiều yếu tố tạo thành"
    ],
    "answer": 3
  },
  {
    "question": "Câu 29: Một trong những đặc trưng của nền quốc phòng toàn dân, an ninh nhân dân là:",
    "options": [
      "A. Nền quốc phòng toàn dân gắn chặt với nền an ninh nhân dân",
      "B. Nền quốc phòng toàn dân gắn chặt với sư phát triển kinh tế chính trị.",
      "C. Nền quốc phòng toàn dân gắn chặt với chế độ chính trị-xã hội",
      "D. Tất cả đều đúng"
    ],
    "answer": 0
  },
  {
    "question": "Câu 30: Một trong những mục đích xây dựng nền quốc phòng toàn dân, an ninh nhân dân vững mạnh là:",
    "options": [
      "A. Tạo thế chủ động cho sự nghiệp xây dựng và bảo vệ Tổ quốc",
      "B. Tạo ra những cơ sở vật chất nâng cao mức sống cho lực lượng vũ trang",
      "C. Tạo ra tiềm lực quân sự để phòng thủ đất nước.",
      "D. Tạo ra môi trường hòa bình để phát triển đất nước theo định hướng XHCN"
    ],
    "answer": 0
  },
  {
    "question": "Câu 31: Lực lượng của nền quốc phòng toàn dân – an ninh nhân dân bao gồm:",
    "options": [
      "A. Lực lượng toàn dân và lực lượng vũ trang nhân dân",
      "B. Lực lượng quân đội nhân dân và công an nhân dân",
      "C. Lực lượng toàn dân và dân quân tự vệ",
      "D. Lực lượng vũ trang nhân dân do Đảng lãnh đạo"
    ],
    "answer": 0
  },
  {
    "question": "Câu 32: Xây dựng lực lượng quốc phòng - an ninh là:",
    "options": [
      "A. Xây dựng lực lượng quân đội nhân dân và công an nhân dân.",
      "B. Xây dựng lực lượng chính trị và lưc lượng vũ trang nhân dân.",
      "C. Xây dựng thế trân quốc phòng và thế trận an ninh nhân dân.",
      "D. Xây dựng lực lượng dự bị động viên vững mạnh bảo vệ Tổ quốc."
    ],
    "answer": 1
  },
  {
    "question": "Câu 33: Hai nhiệm vụ chiến lược của cách mạng Việt Nam hiện nay là:",
    "options": [
      "A. Xây dựng phát triển kinh tế và quốc phòng",
      "B. Xây dựng đất nước và bảo vệ tổ quốc",
      "C. Xây dựng CNXH và bảo vệ tổ quốc XHCN",
      "D. Xây dựng phát triển kinh tế và quốc phòng – an ninh nhân dân"
    ],
    "answer": 2
  },
  {
    "question": "Câu 34: Một trong các nội dung xây dựng nền quốc phòng toàn dân, an ninh nhân dân là:",
    "options": [
      "A. Xây dựng thế trận quốc phòng toàn dân và chiến tranh nhân dân.",
      "B. Xây dựng tiềm lực quốc phòng, an ninh ngày càng vững mạnh.",
      "C. Xây dựng thế bố trí lực lượng quốc phòng toàn dân. 5",
      "D. Xây dựng thế trận quốc phòng hiện đại của các quân binh chủng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 35: Tiềm lực quốc phòng, an ninh là:",
    "options": [
      "A. Khả năng vật chất và tinh thần của lực lượng vũ trang nhân dân để thực hiện nhiệm vụ QPAN.",
      "B.  Khả năng về nhân lực, vật lực, tài chính có thể huy động để thực hiện nhiệm vụ qp, an.",
      "C. Khả năng cung cấp cơ sở vật chất và khoa học công nghệ để thực hiện nhiệm vụ qp, an.",
      "D. Khả năng huy động sức người, sức của để thực hiện nhiệm vụ quốc phòng, an ninh."
    ],
    "answer": 1
  },
  {
    "question": "Câu 36: Tiềm lực chính trị, tinh thần là gì trong nội dung xây dựng nền QP – AN?",
    "options": [
      "A. Là khả năng về chính trị, tinh thần của xã hội để thực hiện nhiệm vụ quốc phòng",
      "B. Là khả năng về chính trị, tinh thần chiến đấu chống quân xâm lược của nhân dân",
      "C. Là khả năng về chính trị, tinh thần có thể huy động tạo nên sức mạnh để thực hiện nhiệm vụ quốc phòng, an ninh.",
      "D. Là khả năng về chính trị, tinh thần tiềm ẩn của nhân dân chưa được huy động để thực hiện nhiệm vụ quốc phòng, an ninh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 37: Biểu hiện của tiềm lực chính trị, tinh thần là gì?",
    "options": [
      "A. Trình độ giác ngộ chính trị, tư tưởng của nhân dân và lực lượng vũ trang.",
      "B. Là nhân tố cơ bản tạo nên sức mạnh quốc phòng, an ninh nhân dân",
      "C. Ý chí, quyết tâm của nhân dân, của các lực lượng vũ trang nhân dân.",
      "D. Trình độ nhận thức, lòng yêu nước của nhân dân và các lực lượng vũ trang ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 38: Tiềm lực kinh tế trong nội dung xây dựng nền quốc phòng toàn dân, an ninh nhân dân là:",
    "options": [
      "A. Khả năng về tài chính để phục vụ nhiệm vụ quốc phòng, an ninh",
      "B. Khả năng về khoa học kỹ thuật để phục vụ nhiệm vụ quốc phòng an ninh",
      "C. Khả năng về kinh tế của đất nước có thể khai thác, huy động nhằm phục vụ cho QP-AN",
      "D. Tất cả đều đúng"
    ],
    "answer": 2
  },
  {
    "question": "Câu 39: Nội dung xây dựng tiềm lực kinh tế cuả nền QPTD:",
    "options": [
      "A. Xây dựng nền  công nghiệp, nông nghiệp theo hướng hiện đại .",
      "B. Đẩy mạnh CNH, HĐH đất nước, xây dựng nền kinh tế độc lập tự chủ.",
      "C. Xây dựng nền công nghiệp, lấy công nghiệp nặng làm then chốt",
      "D. Xây dựng nền công nghiệp quốc phòng an ninh vững mạnh."
    ],
    "answer": 1
  },
  {
    "question": "Câu 40: Một trong những nội dung xây dựng tiềm lực quân sự, an ninh là:",
    "options": [
      "A. Xây dựng lực lượng Quân đội Công an vững mạnh .",
      "B. Xây dựng thế trận chiến tranh nhân dân vững chắc",
      "C. Xây dựng lực lượng dân quân tự vệ đảm bảo số lượng.",
      "D. Xây dựng lực lượng vũ trang nhân dân vững mạnh toàn diện"
    ],
    "answer": 3
  },
  {
    "question": "Câu 41: Một trong những nội dung xây dựng thế trận quốc phòng toàn dân - an ninh nhân dân là:",
    "options": [
      "A. Phân vùng chiến lược về quốc phòng, an ninh kết hợp với vùng kinh tế",
      "B. Phân vùng chiến lược về quốc phòng – an ninh kết hợp với quy hoạch dân cư",
      "C. Phân vùng chiến lược về quốc phòng – an ninh kết hợp xây dựng các phương án phòng thủ",
      "D. Phân vùng chiến lược về quốc phòng – an ninh kết hợp với bảo toàn lực lượng 6"
    ],
    "answer": 0
  },
  {
    "question": "Câu 42: Một trong những nội dung xây dựng thế trận quốc phòng, an ninh nhân dân là gì?",
    "options": [
      "A. tổ chức phòng thủ dân sự, kết hợp cải tạo địa hình với xây dựng hạ tầng và các công trình quốc phòng, an ninh.",
      "B. Tổ chức phòng thủ dân sự kết hợp xây dựng các công trình dân dụng bảo đảm an toàn cho người và trang thiết bị.",
      "C. Tổ chức phòng thủ dân sự, xây dựng các công trình ẩn nấp chủ động tiến công tiêu diệt địch.",
      "D. Tổ chức phòng thủ dân sự bảo đảm an toàn cho người và của cải vật chất."
    ],
    "answer": 0
  },
  {
    "question": "Câu 43: Biện pháp xây dựng nền quốc phòng toàn dân, an ninh nhân dân:",
    "options": [
      "A. Thường xuyên thực hiện giáo dục quốc phòng -  an ninh.",
      "B. Thường xuyên củng cố quốc phòng và hiện đại hoá lực lượng vũ trang.",
      "C. Thường xuyên chăm lo xây dựng lực lượng vũ trng nhân dân vững mạnh .",
      "D. Thường xuyên chăm lo xây dựng Công an nhân dân vững mạnh."
    ],
    "answer": 0
  },
  {
    "question": "Câu 44: Nội dung giáo dục quốc phòng, an ninh phải toàn diện nhưng phải coi trọng?",
    "options": [
      "A. Giáo dục nghị quyết, quan điểm chính sách của Đảng, Nhà nước.",
      "B. Giáo dục tình hình nhiệm vụ của cách mạng giai đoạn hiện nay.",
      "C. Giáo dục tình yêu quê hương, đất nước, chế độ xã hội chủ nghĩa.",
      "D. Gíao dục tình hình nhiệm vụ quân sự - an ninh nhân dân. BÀI 4 ( 20 câu ) CHIẾN TRANH NHÂN DÂN BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA"
    ],
    "answer": 2
  },
  {
    "question": "Câu 45: Một trong những mục đích của chiến tranh nhân dân Việt Nam là:",
    "options": [
      "A. Bảo vệ vững chắc độc lập, chủ quyền, thống nhất toàn vẹn lãnh thổ",
      "B. Giữ vững ổn định chính trị và môi trường hòa bình.",
      "C. Bảo vệ Đảng, nhà nước, nhân dân và chế độ xã hội chủ nghĩa",
      "D. Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 46: Đối tượng của chiến tranh nhân dân bảo vệ tổ quốc Việt Nam XHCN là:",
    "options": [
      "A. Chủ nghĩa đế quốc và chủ nghĩa ly khai",
      "B. Chủ nghĩa đế quốc và các thế lực phản động",
      "C. Các thế lực phản cách mạng trong và ngoài nước",
      "D. Chủ nghĩa khủng bố quốc tế"
    ],
    "answer": 1
  },
  {
    "question": "Câu 47: Một trong những âm mưu, thủ đoạn chủ yếu của kẻ thù khi xâm lược nước ta là:",
    "options": [
      "A. Đánh nhanh, thắng nhanh",
      "B. Đánh chắc, tiến chắc",
      "C. Đánh lâu dài",
      "D. Tiến công từng bước"
    ],
    "answer": 0
  },
  {
    "question": "Câu 48: Một trong những âm mưu, thủ đoạn chủ yếu của kẻ thù khi xâm lược nước ta là:",
    "options": [
      "A. Tiến công hỏa lực với mức độ cao, kết hợp tiến công quân sự từ bên ngoài",
      "B. Tiến công quân sự với quân số đông, kết hợp bạo loạn lật đổ từ bên trong",
      "C. Gây bạo loạn lật đổ với quy mô lớn, kết hợp tiến công quân sự từ bên ngoài",
      "D. Kết hợp tiến công quân sự từ bên ngoài vào với bạo loạn lật đổ từ bên trong 7"
    ],
    "answer": 3
  },
  {
    "question": "Câu 49: Điểm yếu cơ bản của kẻ thù khi tiến hành chiến tranh xâm lược:",
    "options": [
      "A. Không biết được đặc điểm, địa hình của ta",
      "B. Đây là cuộc chiến tranh phi nghĩa",
      "C. Phát huy được hiệu quả của số ít vũ khí trang bị",
      "D. Tất cả các câu đều đúng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 50: Tính chất của chiến tranh nhân dân bảo vệ Tổ quốc là gì?",
    "options": [
      "A. Là cuộc chiến tranh tự vệ, chính nghĩa.",
      "B. Là cuộc chiến tranh bảo vệ độc lập dân tộc.",
      "C. Là cuộc chiến tranh chính  nghĩa, tự vệ cách mạng.",
      "D. Là cuộc chiến tranh bảo vệ chế độ chủ nghĩa xã hội."
    ],
    "answer": 2
  },
  {
    "question": "Câu 51: Tính hiện đại trong chiến tranh nhân dân bảo vệ tổ quốc ở Việt Nam được thể hiện ở chỗ:",
    "options": [
      "A. Sử dụng vũ khí trang bị hiện đại để tiến hành chiến tranh",
      "B. Sử dụng vũ khí trang bị hiện đại để đánh bại kẻ thù có vũ khí hiện đại hơn",
      "C. Là cuộc chiến tranh hiện đại, bằng vũ khí công nghệ cao.",
      "D. Kết hợp sử dụng vũ khí tương đối hiện đại với hiện đại để tiến hành chiến tranh"
    ],
    "answer": 2
  },
  {
    "question": "Câu 52: Tiến hành chiến tranh nhân dân với tinh thần tự lực tự cường nhưng :",
    "options": [
      "A. Cần sự đồng tình ủng hộ, giúp đỡ của cả loài người tiến bộ trên thế giới,",
      "B. Cân phát huy nội lực của đất nước không cần giúp đỡ từ bên ngoài",
      "C. Chỉ cần một số nước Xã hội Chủ nghĩa giúp đỡ",
      "D. Chỉ cần huy động mọi tiềm năng sẳn có của đất nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 53: Đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc là gì?",
    "options": [
      "A. Diễn ra khẩn trương, quyết liệt phức tạp ngay từ đầu",
      "B. Diễn ra với tính chất phức tạp kéo dài trong suốt quá trình.",
      "C. Diễn ra trong bối cảnh quốc tế có nhiều thuận lợi cho chúng ta",
      "D. Diễn ra trong điều kiện đất nước còn gặp nhiều khó khăn"
    ],
    "answer": 0
  },
  {
    "question": "Câu 54: Quan điểm chủ đạo xuyên suốt trong quá trình tiến hành chiến tranh nhân dân là:",
    "options": [
      "A. Kết hợp vừa kháng chiến vừa kiến quốc.",
      "B. Kết hợp chặt chẽ giữa đấu tranh quân sự với chính trị, ngoại giao.",
      "C. Toàn dân đánh giặc lấy lực lượng vũ trang làm nòng cốt.",
      "D. Chuẩn bị mọi mặt trong cả nước để đánh lâu dài."
    ],
    "answer": 2
  },
  {
    "question": "Câu 55: Trong 4 mặt trận sau, mặt trận nào có ý nghĩa quyết định trong chiến tranh:",
    "options": [
      "A. Mặt trận kinh tế",
      "B. Mặt trận quân sự",
      "C. Mặt trận ngoại giao",
      "D. Mặt trận chính trị"
    ],
    "answer": 1
  },
  {
    "question": "Câu 56: Một trong những quan điểm của Đảng ta về chuẩn bị cho chiến tranh nhân dân bảo vệ Tổ quốc:",
    "options": [
      "A. Chuẩn bị mọi mặt ở các bộ, các ngành, các quân binh chủng để đánh lâu dài",
      "B. Chuẩn bị đầy đủ tiềm lực kinh tế, quân sự để đánh lâu dài",
      "C. Chuẩn bị mọi mặt trên cả nước, cũng như từng khu vực để đủ sức đánh lâu dài 8",
      "D. Chuẩn bị trên tất cả khu vực phòng thủ để đủ sức đánh lâu dài"
    ],
    "answer": 2
  },
  {
    "question": "Câu 57: Phải kết hợp kháng chiến với xây dựng, vừa chiến đấu vừa sản xuất vì một trong những lý do sau:",
    "options": [
      "A. Cuộc chiến tranh rất ác liệt, kẻ thù sử dụng vũ khí công nghệ hiện đại.",
      "B. Cuộc chiến diễn ra quyết liệt, thương vong, tiêu hao sẽ rất lớn.",
      "C. Cuộc chiến tranh sẽ mở rộng, không phân biệt tiền tuyến, hậu phương.",
      "D. Cuộc chiến tranh kẻ thù sử dụng một lượng bom đạn rất lớn để tàn phá."
    ],
    "answer": 1
  },
  {
    "question": "Câu 58: Trong chiến tranh nhân dân bảo vệ tổ quốc phải kết hợp chặt chẽ giữa:",
    "options": [
      "A. Kết hợp chống quân xâm lược từ bên ngoài với chống bọn khủng bố, bạo loạn bên trong",
      "B. Kết hợp đấu tranh quân sự với bảo đảm an ninh chính trị, giữ gìn trật tự an toàn xã hội",
      "C. Kết hợp chống bạo loạn với trấn áp bọn phản động",
      "D. Kết hợp chống bạo loạn lật đổ với các hoạt động phá hoại khác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 59: Một trong những nội dung chủ yếu của chiến tranh nhân dân bảo vệ Tổ quốc là gì?",
    "options": [
      "A. Tổ chức các lực lượng đánh giặc",
      "B. Tổ chức thế trận đánh giặc",
      "C. Tổ chức thế trận chiến tranh nhân dân",
      "D. Tổ chức thế trận phòng thủ của chiến tranh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 60: Trong chiến tranh nhân dân bảo vệ Tổ quốc, thế trận của chiến tranh được:",
    "options": [
      "A. Bố trí rộng trên cả nước, tập trung ở khu vực chủ yếu",
      "B. Bố trí rộng trên cả nước, nhưng phải có trọng tâm trọng điểm",
      "C. Bố trí rộng trên cả nước, tập trung ở các vùng kinh tế trọng điểm",
      "D. Bố trí rộng trên cả nước, tập trung ở các địa bàn trọng điểm"
    ],
    "answer": 1
  },
  {
    "question": "Câu 61: Lực lượng trong chiến tranh nhân dân bảo vệ Tổ quốc gồm:",
    "options": [
      "A. Lực lượng vũ trang ba thứ quân",
      "B. Lực lượng vũ trang nhân dân gồm ba thứ quân làm nòng cốt.",
      "C. Lực lượng vũ trang ba thứ quân kết hợp các lực lượng vũ trang khác",
      "D. Là sự phối hợp giữa các lực lượng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 62: Lực lượng vũ trang nhân dân 3 thứ quân của Việt Nam gồm:",
    "options": [
      "A. Quân đội, công an, dân quân tự vệ",
      "B. Bộ đội thường trực, lực lượng dự bị, dân quân tự vệ",
      "C. Bộ đội chủ lực, bộ đội địa phương, dân quân tự vệ",
      "D. Bộ đội chủ lực, bộ đội địa phương, bộ đội biên phòng"
    ],
    "answer": 2
  },
  {
    "question": "Câu 63: Theo quan điểm của Đảng ta, yếu tố quyết định thắng lợi trên chiến trường là:",
    "options": [
      "A. Vũ khí trang bị kỹ thuật hiện đại",
      "B. Vũ khí hiện đại, nghệ thuật tác chiến cao",
      "C. Con người và vũ khí, con người là quyết định",
      "D. Vũ khí hiện đại và người chỉ huy giỏi"
    ],
    "answer": 2
  },
  {
    "question": "Câu 64: Kết hợp sức mạnh dân tộc với sức mạnh thời đại nhằm:",
    "options": [
      "A. Tranh thủ sự giúp đỡ của nhân dân thế giới",
      "B. Tạo nên sức mạnh tổng hợp bao gồm cả nội lực và ngoại lực 9",
      "C. Nêu cao tinh thần đoàn kết quốc tế",
      "D. Tranh thủ sự ủng hộ mọi mặt của các nước XHCN BÀI 5 ( 20 câu ) XÂY DỰNG LƯC LƯỢNG VŨ TRANG NHÂN DÂN VIỆT NAM"
    ],
    "answer": 1
  },
  {
    "question": "Câu 65: Lực lượng vũ trang nhân dân Việt Nam là:",
    "options": [
      "A. Các tổ chức quốc phòng, an ninh",
      "B. Các tổ chức quân sự, an ninh trật tự",
      "C. Các tổ chức vũ trang, tổ chức quần chúng",
      "D. Các tổ chức vũ trang và bán vũ trang của nhân dân Việt Nam"
    ],
    "answer": 3
  },
  {
    "question": "Câu 66: Cơ quan nào quản lý lực lượng vũ trang nhân dân?",
    "options": [
      "A. Quân đội, Công an nhân dân.",
      "B. Nhà nước CHXHCNVN",
      "C. Đảng cộng sản Việt Nam",
      "D. Chính quyền địa phương các cấp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 67: Lực lượng vũ trang nhân dân trong bảo vệ Tổ quốc có vị trí như thế nào ?",
    "options": [
      "A. Là lực lượng xung kích trong các hoạt động quân sự",
      "B. Là lực lượng nòng cốt của quốc phòng toàn dân và chiến tranh nhân dân",
      "C. Là lực lượng chủ yếu của sự nghiệp bảo vệ tổ quốc",
      "D. Là lực lượng quyết định của sự nghiệp bảo vệ tổ quốc"
    ],
    "answer": 1
  },
  {
    "question": "Câu 68: Đặc điểm nào sau đây ảnh hưởng lớn nhất đến quá trình xây dựng lực lượng vũ trang?",
    "options": [
      "A. Cả nước đang thực hiện hai nhiệm vụ chiến lược, trong khi kẻ thù chống phá ta quyết liệt.",
      "B. Tình hình thế giới thay đổi, có nhiều diễn biến phức tạp, tiềm ẩn nhiều yếu tố mất ổn định.",
      "C. Lực lượng vũ trang nhân dân ta đã có bước trưởng thành lớn mạnh cả về bản lĩnh chính trị.",
      "D. Sự nghiệp công nghiệp hóa, hiện đại hóa đất nước đã, đang đạt được nhiều thành tựu to lớn."
    ],
    "answer": 0
  },
  {
    "question": "Câu 69: Xây dựng lực lượng vũ trang ND hiện nay có thuận lợi cơ bản:",
    "options": [
      "A. Đảng ta có bản lĩnh chính trị vững vàng",
      "B. Quân đội , công an ngày càng phát triển lớn mạnh hiện đại",
      "C. Nhà nước quan tâm đầu tư rất mạnh cho quốc phòng và an ninh",
      "D. Kinh tế, xã hội, quốc phòng an ninh ngày càng phát triển vững mạnh"
    ],
    "answer": 0
  },
  {
    "question": "Câu 70: Trong đầu tư cho quốc phòng an ninh, xây dựng LLVTND hiện nay còn một mâu thuẫn chủ yếu giữa:",
    "options": [
      "A. Nhu cầu về trang bị vũ khí hiện đại với khả năng kỹ thuật công nghệ còn hạn chế",
      "B. Nhu cầu về tăng cường chất lượng huấn luyện với khả năng cơ sở vật chất kỹ thuật còn có hạn",
      "C. Nhu cầu phải đầu tư cho quốc phòng an ninh...nhưng khả năng của nền kinh tế rất hạn hẹp",
      "D. Nhu cầu nâng cao chất lượng đội ngũ cán bộ với khả năng đào tạo huấn luyện"
    ],
    "answer": 2
  },
  {
    "question": "Câu 71: Quan điểm, nguyên tắc nào là cơ bản nhất trong xây dựng lực lượng vũ trang nhân dân ?",
    "options": [
      "A. Tự lực tự cường xây dựng lực lượng vũ trang",
      "B. Xây dựng LLVT lấy chất lượng là chính, lấy xây dựng chính trị làm cơ sở",
      "C. Giữ vững và tăng cường sự lãnh đạo của Đảng đối với llvt nhân dân.",
      "D. Bảo đảm cho lực lượng vũ trang luôn trong tư thế sẵn sàng chiến đấu. 10"
    ],
    "answer": 2
  },
  {
    "question": "Câu 72: Vấn đề quan trọng nhất trong xây dựng lực lượng vũ trang nhân dân là gì?",
    "options": [
      "A. Phát triển số lượng chất lượng Đảng viên trong lực lượng vũ trang",
      "B. Xây dựng đội ngũ cán bộ làm công tác chính trị trong lực lượng vũ trang",
      "C. Giáo dục chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh",
      "D. Giữ vững nguyên tắc Đảng Cộng sản lãnh đạo lực lượng vũ trang"
    ],
    "answer": 3
  },
  {
    "question": "Câu 73: Tại sao phải giữ vững và tăng cường sự lãnh đạo của Đảng đối với lực lượng vũ trang?",
    "options": [
      "A. Bảo đảm cho LLVT luôn trong tư thế sẵn sàng chiến đấu thắng lợi trong mọi tình huống.",
      "B. Bảo đảm cho LLVT luôn có tinh thần cảnh giác cách mạng trước thủ đoạn của kẻ thù.",
      "C. Bảo đảm cho LLVT giữ vững bản chất cách mạng, mục tiêu, phương hướng chiến đấu",
      "D. Bảo đảm cho LLVT được huấn luyện và rèn luyện tốt mọi lúc mọi nơi sẵn sàng chiến đấu."
    ],
    "answer": 2
  },
  {
    "question": "Câu 74: Đảng lãnh đạo lực lượng vũ trang nhân dân theo nguyên tắc:",
    "options": [
      "A. Tuyệt đối, trực tiếp và toàn diện",
      "B. Tuyệt đối, trực tiếp về mọi mặt",
      "C. Tuyệt đối, toàn diện, lãnh đạo chính trị là quyết định",
      "D. Tuyệt đối, toàn diện trên mọi lĩnh vực"
    ],
    "answer": 1
  },
  {
    "question": "Câu 75: Một trong những quan điểm của Đảng về xây dựng lực lượng vũ trang nhân dân là:",
    "options": [
      "A. Phát huy nội lực kết hợp với sức mạnh thời đại",
      "B. Độc lập, tự chủ để phát triển lực lượng vũ trang nhân dân",
      "C. Tự lực, tự cường xây dựng lực lượng vũ trang nhân dân",
      "D. Phát huy truyền thống dân tộc để xây dựng lực lượng vũ trang nhân dân"
    ],
    "answer": 2
  },
  {
    "question": "Câu 76: Xây dựng lực lượng vũ trang nhân dân phải tự lực tự cường vì sao?",
    "options": [
      "A. Để tạo nên sức mạnh của lực lượng vũ trang nhân dân",
      "B. Để giữ vững tính độc lập tự chủ, không bị chi phối ràng buộc",
      "C. Để nhằm khai thác sức mạnh quân sự vốn có của ta.",
      "D. Tất cả đều đúng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 77: Một trong những quan điểm trong xây dựng lực lượng vũ trang nhân dân là:",
    "options": [
      "A. Xây dựng LLVTND lấy chất lượng là trọng tâm, lấy chính trị làm chú yếu",
      "B. Xây dựng LLVTND lấy chất lượng là chính, lấy xây dựng chính trị làm cơ sở",
      "C. Xây dựng LLVTND toàn diện cả về số lượng và chất lượng",
      "D. Xây dựng LLVTND toàn diện, tập trung hiện đại quân đội"
    ],
    "answer": 1
  },
  {
    "question": "Câu 78: Vì sao xây dựng lực lượng vũ trang nhân dân phải luôn trong tư thế sẵn sàng chiến đấu?",
    "options": [
      "A. Ngày nay kẻ địch đang chống phá cách mạng nước ta trên mọi lĩnh vực",
      "B. Đó là nhiệm vụ chủ yếu, thường xuyên của lực lượng vũ trang nhân dân Việt Nam.",
      "C. Đó là chức năng, nhiệm vụ cơ bản, thường xuyên của lực lượng vũ trang nhân dân",
      "D. Đó là yêu cầu của sự nghiệp cách mạng bảo vệ Tổ quốc hiện nay đối với lực lượng vũ trang."
    ],
    "answer": 2
  },
  {
    "question": "Câu 79: Một trong những phương hướng xây dựng lực lượng vũ trang nhân dân là:",
    "options": [
      "A. Xây dựng lực lượng vũ trang 3 thứ quân theo hướng vững mạnh, đáp ứng tình hình mới.",
      "B. Xây dựng quân đội, công an nhân dân theo hướng chính qui, thống nhất, hiện đại",
      "C. Xây dựng quân đội, công an theo hướng cách mạng, chính qui, tinh nhuệ, từng bước hiện đại.",
      "D. Xây dựng quân đội nhân dân theo hướng chính qui, hiện đại sẵn sàng chiến đấu cao. 11"
    ],
    "answer": 2
  },
  {
    "question": "Câu 80: Chính quy trong quân đội thể hiện ở chỗ:",
    "options": [
      "A. Là sự thống nhất về huấn luyện tác chiến",
      "B. Là thực hiện thống nhất về mọi mặt",
      "C. Là sự thống nhất về tổ chức biên chế",
      "D. Là sự thống nhất về nghệ thuật tác chiến"
    ],
    "answer": 1
  },
  {
    "question": "Câu 81: Xây dựng quân đội, công an phải tinh nhuệ trên các lĩnh vực?",
    "options": [
      "A. Chính trị, tư tưởng, huấn luyện",
      "B. Chính trị, quân sự, hậu cần",
      "C. Chính trị, an ninh, kĩ thuật",
      "D. Chính trị, tổ chức, kĩ chiến thuật"
    ],
    "answer": 3
  },
  {
    "question": "Câu 82: Phương hướng xây dựng lực lượng dự bị động viên phải:",
    "options": [
      "A. Có số lượng đông, chất lượng cao, sẳn sàng động viên khi cần thiết",
      "B. Hùng hậu, huấn luyện và quản lý tốt, đảm bảo khi cần động viên nhanh theo kế hoạch",
      "C. Luôn trong tư thế sẵn sàng chiến đấu",
      "D. Phối hợp chặt chẽ với lực lượng thường trực và dân quân tự vệ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 83: Một trong những biện pháp chủ yếu trong xây dựng lực lượng vũ trang nhân dân là:",
    "options": [
      "A. Nâng cao huấn luyện, giáo dục, đẩy mạnh đối ngoại quốc phòng an ninh",
      "B. Nâng cao giáo dục chính trị, tư tưởng, phát triển khoa học công nghệ.",
      "C. Nâng cao huấn luyện, giáo dục, phối hợp hoạt động giữa các lực lượng vũ trang",
      "D. Nâng cao chất lượng huấn luyện, giáo dục, xây dựng và phát triển khoa học quân sự."
    ],
    "answer": 3
  },
  {
    "question": "Câu 84: Một trong những biện pháp chủ yếu trong xây dựng lực lượng vũ trang nhân dân là:",
    "options": [
      "A. Từng bước giải quyết yêu cầu về vũ khí cho lực lượng vũ trang nhân dân",
      "B. Từng bước trang bị vũ khí, phương tiện hiện đại cho lực lượng vũ trang nhân dân",
      "C. Từng bước giải quyết yêu cầu về vũ khí, trang bị kỹ thuật cho LLVTND",
      "D. Từng bước đổi mới bổ sung đầy đủ vũ khí hiện đại cho lực lượng vũ trang nhân dân BÀI 6 ( 20 câu ) KẾT HỢP PHÁT TRIỂN KINH TẾ - XÃ HỘI VỚI TĂNG CƯỜNG CỦNG CỐ QUỐC PHÒNG – AN NINH"
    ],
    "answer": 2
  },
  {
    "question": "Câu 85: Quốc phòng là gì?",
    "options": [
      "A. Là công việc của lực lượng vũ trang nhân dân để bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.",
      "B. Là công việc giữ nước của một quốc gia gồm tổng thể các hoạt động đối nội và đối ngoại.",
      "C. Là công việc của địa phương nhằm để huy động mọi tiềm lực đất nước bảo vệ tổ quốc",
      "D. Tất cả đều đúng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 86: Một trong những cơ sở lý luận của sự kết hợp kinh tế và quốc phòng - an ninh là:",
    "options": [
      "A. Quốc phòng an ninh tạo ra cơ sở vật chất xây dựng kinh tế",
      "B. Quốc phòng an ninh tạo ra những biến động kích thích kinh tế",
      "C. Quốc phòng an ninh và kinh tế có quan hệ, tác động qua lại lẫn nhau",
      "D. Quốc phòng an ninh tạo ra quá trình sự phát triển kinh tế, xã hội."
    ],
    "answer": 2
  },
  {
    "question": "Câu 87: Một trong những cơ sở lý luận của sự kết hợp kinh tế với quốc phòng - an ninh là:",
    "options": [
      "A. Kinh tế quyết định việc cung ứng vật chất cho quốc phòng – an ninh 12",
      "B. Kinh tế quyết định việc cung cấp trang thiết bị cho quốc phòng – an ninh",
      "C. Kinh tế quyết định đến nguồn gốc ra đời, sức mạnh của quốc phòng - an ninh",
      "D. Kinh tế quyết định việc cung cấp kỹ thuật, công nghệ cho quốc phòng - an ninh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 88: Khẳng định: “Thắng lợi hay thất bại của chiến tranh đều phụ thuộc vào kinh tế” là của?",
    "options": [
      "A. Hồ Chí Minh.",
      "B. Ph. Ăngghen",
      "C. V.I.Lênin",
      "D. C.Mác"
    ],
    "answer": 1
  },
  {
    "question": "Câu 89: “Dựng nước đi đôi với giữ nước” có ý nghĩa gì đối với nước ta ?",
    "options": [
      "A. Là quy luật tồn tại và phát triển của dân tộc ta.",
      "B. Là sự phản ánh quá trình phát triển của dân tộc ta.",
      "C. Là quy luật để phát triển và bảo vệ đất nước.",
      "D. Là quy luật để xây dựng và phát triển đất nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 90: “Động vi binh tĩnh vi dân” nghĩa là:",
    "options": [
      "A. Khi đất nước hoà bình làm người lính sẵn sàng chiến đấu và tham gia xây dựng kinh tế.",
      "B. Khi đất nước hòa bình tham gia xây dựng kinh tế, khi có chiến tranh cầm súng chiến đấu",
      "C. Khi đất nước có chiến tranh hoặc bình yên đều phải làm người dân xây dựng, phát triển kinh tế",
      "D. Khi đất nước có chiến tranh làm người lính, đất nước bình yên làm người dân phát triển xây dựng kinh tế."
    ],
    "answer": 3
  },
  {
    "question": "Câu 91: Kết hợp kinh tế với quốc phòng an ninh trong kháng chiến chống Pháp xâm lược Đảng ta đề ra chủ trương là:",
    "options": [
      "A. Vừa tiến hành chiến tranh, vừa củng cố tiềm lực kinh tế",
      "B. Vừa kháng chiến, vừa kiến quốc",
      "C. Vừa tăng gia sản xuất, vừa củng cố quốc phòng.",
      "D. Vừa xây dựng làng kháng chiến, vừa tăng gia lao động sản xuất"
    ],
    "answer": 1
  },
  {
    "question": "Câu 92: Một trong những nội dung kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng - an ninh là:",
    "options": [
      "A. Kết hợp trong chiến lược phát triển công nghiệp hóa hiện đại hóa.",
      "B. Kết hợp trong chiến lược phát triển nguồn nhân lực để hiện đại hóa đất nước",
      "C. Kết hợp trong xác định chiến lược phát triển kinh tế - xã hội",
      "D. Kết hợp trong xác định chiến lược về văn hóa tư tưởng"
    ],
    "answer": 2
  },
  {
    "question": "Câu 93: Kết hợp kinh tế với QPAN ninh trong phát triển các vùng lãnh thổ cần phải quan tâm vấn đề gì?",
    "options": [
      "A. Kết hợp chặt chẽ giữa phát triển kinh tế - xã hội với xây dựng lực lượng, thế trận QPAN",
      "B. Kết hợp giữa phát triển kinh tế với xây dựng lực lượng vũ trang, lực lượng quần chúng",
      "C. Kết hợp chặt chẽ giữa phát triển công nghiệp quốc phòng với xây dựng các thế trận phòng thủ",
      "D. Kết hợp chặt chẽ giữa phát triển kinh tế với xây dựng các tổ chức chính trị, đoàn thể xã hội 13"
    ],
    "answer": 0
  },
  {
    "question": "Câu 94: Hiện nay nước ta có mấy vùng kinh tế trọng điểm?",
    "options": [
      "A. 3 vùng",
      "B. 4 vùng",
      "C. 5 vùng",
      "D. 6 vùng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 95: Tại sao trong quy hoạch, kế hoach xây dựng các thành phố, các khu công nghiệp cần lựa chọn quy mô trung bình, phân tán, trải dài trên diện rộng ?",
    "options": [
      "A. Do trình độ khoa học kỹ thuật công nghệ ở nước ta còn hạn chế.",
      "B. Để hạn chế hậu quả tiến công hỏa lực của địch khi có chiến tranh.",
      "C. Do nước ta còn nghèo chưa đủ trình độ xây dựng các khu công nghiệp lớn.",
      "D. Để tận dụng tốt nguồn nhân lực tại chổ cho xây dựng thành phố,khu công nghiệp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 96: Một trong những nội dung kết hợp kinh tế với quốc phòng - an ninh ở vùng biển, đảo cần tập trung là:",
    "options": [
      "A. Có cơ chế chính sách thoả đáng để động viên khích lệ dân ra đảo bám trụ làm ăn lâu dài",
      "B. Có cơ chế chính sách thoả đáng để động viên dân đầu tư tàu thuyền đánh bắt xa bờ.",
      "C. Có cơ chế chính sách thoả đáng để động viên ngư dân thành lập các tổ chức tự vệ trên biển",
      "D. Có cơ chế chính sách thoả đáng để ngư dân xây dựng các trận địa phòng thủ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 97: Một trong những nội dung kết hợp KT với QP trong giai  đoạn hiện nay là :",
    "options": [
      "A. Kết hợp kinh tế với quốc phòng trong các ngành, các lĩnh vực kinh tế chủ yếu.",
      "B. Kết hợp kinh tế với quốc phòng trong phân chia các khu vực kinh tế - địa lý.",
      "C. Kết hợp kinh tế với quốc phòng giữa các vùng dân cư và vùng kinh tế mới.",
      "D. Kết hợp kinh tế với quốc phòng trong phân chia các khu vực kinh tế,"
    ],
    "answer": 0
  },
  {
    "question": "Câu 98: Một trong các nội dung kết hợp kinh tế với quốc phòng - an ninh trong công nghiệp là:",
    "options": [
      "A. Phải kết hợp ngay từ khi thực hiện xây dựng các khu công nghiệp",
      "B. Phải kết hợp ngay từ khâu quy hoạch, bố trí các đơn vị kinh tế của ngành công nghiệp",
      "C. Phải kết hợp ngay chiến lược đào tạo nhân lực của ngành công nghiệp.",
      "D. Phải kết hợp ngay trong ý đồ bố trí mạng lưới công nghiệp quốc phòng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 99: Về kết hợp kinh tế với quốc phòng - an ninh trong lâm nghiệp cần tập trung?",
    "options": [
      "A. Đẩy mạnh phát triển trồng rừng gắn với công tác định canh định cư xây dựng các cơ sở chính trị",
      "B. Đẩy mạnh khai thác, trồng rừng gắn với công tác định canh định cư xây dựng các tổ chức xã hội",
      "C. Đẩy mạnh khai thác lâm sản, phát triển hệ thống giao thông, xây dựng các đoàn thể.",
      "D. Đẩy mạnh xóa đói giảm nghèo gắn với công tác luân chuyển dân cư, xây dựng cơ sở chính trị"
    ],
    "answer": 0
  },
  {
    "question": "Câu 100: Kết hợp phát triển KT- XH với tăng cường, củng cố QP- AN trong giao thông vận tải cần phải làm gì?",
    "options": [
      "A. Xây dựng các công trình giao thông hoành tráng cho thời bình",
      "B. Xây dựng các con đường giao thông nông thôn cho thời chiến",
      "C. Xây dựng kế hoạch động viên giao thông vận tải cho thời chiến",
      "D. Xây dưng kế hoach động viên giao thông từng giai đoạn 14"
    ],
    "answer": 2
  },
  {
    "question": "Câu 101: Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh thì lĩnh vực nào đóng vai trò là động lực, là nền tảng cho sự phát triển?",
    "options": [
      "A. Công nghiệp và bưu chính viễn thông",
      "B. Khoa học, công nghệ và giáo dục",
      "C. Giao thông vận tải",
      "D. Tất cả đều đúng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 102: Một trong những giải pháp để thực hiện kết hợp kinh tế với quốc phòng - an ninh là phải tăng cường:",
    "options": [
      "A. Sự lãnh đạo của nhà nước, quản lý của Đảng trong thực hiện nhiệm vụ",
      "B. Sự giám sát của quần chúng nhân dân và điều hành của cơ quan chuyên môn",
      "C. Sự lãnh đạo của Đảng, hiệu lực quản lý nhà nước của chính quyền các cấp",
      "D. Sự điều hành quản lý của Nhà nước, giám sát  của nhân dân"
    ],
    "answer": 2
  },
  {
    "question": "Câu 103: Đối tượng bồi dưỡng kiến thức kết hợp phát triển kinh tế - xã hội với quốc phòng - an ninh cần tập trung:",
    "options": [
      "A. Cán bộ cấp tỉnh, Bộ, ngành từ trung ương đến địa phương",
      "B. Cán bộ các cấp từ xã phường trở lên",
      "C. Cán bộ chủ trì các cấp bộ, ngành, đoàn thể từ trung ương đến cơ sở",
      "D. Học sinh trung học phổ thông, sinh viên cao đẳng, đại học"
    ],
    "answer": 2
  },
  {
    "question": "Câu 104: Thực chất của việc kết hợp phát triển kinh tế với quốc phòng – an ninh là gì?",
    "options": [
      "A. Thực hiện xây dựng nền quốc phòng toàn dân.",
      "B. Thực hiện mục tiêu dân giàu, nước mạnh.",
      "C. Thực hiện tốt hai nhiệm vụ chiến lược.",
      "D. Phát triển kinh tế, quốc phòng vững mạnh. BÀI 7 ( 20 câu ) NGHỆ THUẬT QUÂN SỰ VIỆT NAM"
    ],
    "answer": 2
  },
  {
    "question": "Câu 105: Trong lịch sử, vì sao nước ta luôn bị nhiều kẻ thù nhòm ngó, đe dọa, tiến công xâm lược?",
    "options": [
      "A. Việt Nam có vị trí địa lý thuận lợi",
      "B. Việt Nam có nhiều tài nguyên khoáng sản",
      "C. Việt Nam có rừng vàng biển bạc",
      "D. Việt Nam có thị trường to lớn"
    ],
    "answer": 0
  },
  {
    "question": "Câu 106: Lý Thường Kiệt sử dụng biện pháp “Tiên phát chế nhân” nghĩa là:",
    "options": [
      "A. Chuẩn bị chu đáo, chặn đánh địch từ khi mới xâm lược",
      "B. Chuẩn bị thế trận phòng thủ, chống địch làm địch bị động",
      "C. Chuẩn bị đầy đủ vũ khí trang bị để giành thế chủ động đánh địch",
      "D. Chủ động tiến công trước để đẩy kẻ thù vào thế bị động 15"
    ],
    "answer": 3
  },
  {
    "question": "Câu 107: Một trong những lý do làm cho cuộc kháng chiến chống quân Minh của nhà Hồ thất bại là vì:",
    "options": [
      "A. Nhà Hồ tích cực chủ động tiến công quá mức",
      "B. Nhà Hồ đã tích cực tiến công nhưng quân Minh quá mạnh",
      "C. Nhà Hồ quá thiên về phòng thủ, coi đó là phương thức cơ bản",
      "D. Nhà Hồ đã quá thiên về phòng thủ, không chủ động phản công."
    ],
    "answer": 2
  },
  {
    "question": "Câu 108: Tư tưởng chỉ đạo tác chiến trong nghệ thuật đánh giặc của ông cha ta là gì?",
    "options": [
      "A. Tiến công liên tục mọi lúc, mọi nơi",
      "B. Tích cực phòng ngự chờ thời cơ tiến công",
      "C. Phòng ngự chắc chắn kết hợp tiến công",
      "D. Phòng ngự tạo thời cơ thuận lợi để phản công."
    ],
    "answer": 0
  },
  {
    "question": "Câu 109: Tư tưởng tích cực chủ động tiến công được xem là sợi chỉ đỏ:",
    "options": [
      "A. Xuyên suốt trong quá trình tiến hành và khắc phục hậu quả chiến tranh",
      "B. Xuyên suốt trong quá trình chuẩn bị và tiến hành chiến tranh giữ nước",
      "C. Xuyên suốt trong quá trình huấn luyện và đề ra các kế sách chiến tranh",
      "D. Xuyên suốt trong quá trình đánh giá nghiên cứu về kẻ thù"
    ],
    "answer": 1
  },
  {
    "question": "Câu 110: Một trong những nội dung nghệ thuật đánh giặc của ông cha ta là gì?",
    "options": [
      "A. Lấy nhỏ địch lớn, lấy ít địch nhiều, lấy yếu địch mạnh",
      "B. Lấy nhỏ đánh lớn, lấy ít đánh nhiều, lấy yếu đánh mạnh",
      "C. Lấy nhỏ đánh lớn, lấy ít địch nhiều, lấy yếu chống mạnh",
      "D. Lấy nhỏ thắng lớn, lấy ít thắng nhiều, lấy yếu thắng mạnh"
    ],
    "answer": 2
  },
  {
    "question": "Câu 111: Một trong những nội dung nghệ thuật đánh giặc của ông cha ta là:",
    "options": [
      "A. Kết hợp đấu tranh giữa các mặt trận quân sự, chính trị, ngoại giao và binh vận",
      "B. Kết hợp đấu tranh giữa các mặt trận quân sự, chính trị, ngoại giao, dân vận",
      "C. Kết hợp đấu tranh giữa các mặt trận chính trị, quân sự, ngoại thương, dân vận",
      "D. Kết hợp đấu tranh giữa các mặt trận quân sự, kinh tế, thương mại, binh vận"
    ],
    "answer": 0
  },
  {
    "question": "Câu 112: Trong nghệ thuật kết hợp đấu tranh giữa các mặt trận thì chính trị được xác định:",
    "options": [
      "A. Là mặt trận quan trọng nhất, chủ yếu nhất",
      "B. Là mặt trận quyết định thắng lợi trực tiếp .",
      "C. Là cơ sở để tạo ra sức mạnh quân sự.",
      "D. Là mặt trận chủ yếu để phân hóa, cô lập kẻ thù"
    ],
    "answer": 2
  },
  {
    "question": "Câu 113: Một trong những cơ sở hình thành nghệ thuật quân sự Việt Nam là gì?",
    "options": [
      "A. Từ truyền thống đánh giặc của tổ tiên",
      "B. Từ nghệ thuật quân sự của các nước",
      "C. Từ luận điểm về đấu tranh giai cấp của chủ nghĩa Mác-Lênin",
      "D. Tất cả đều đúng."
    ],
    "answer": 0
  },
  {
    "question": "Câu 114: Một trong những nội dung chiến lược quân sự của Đảng ta là:",
    "options": [
      "A. Xác định đúng kẻ thù, đúng đối tượng tác chiến",
      "B. Xác định đúng kẻ thù, đúng đối tác.",
      "C. Xác định đúng đối tượng, đúng đối tác 16",
      "D. Xác định đúng lực lượng và đối tác của ta."
    ],
    "answer": 0
  },
  {
    "question": "Câu 115: Sau cách mạng tháng 8 năm 1945 đối tượng tác chiến của quân và dân ta là:",
    "options": [
      "A. Quân đội Anh, quân đội Tưởng",
      "B. Quân đội Nhật, quân đội Pháp",
      "C. Quân đội Nhật,  quân đội Tưởng",
      "D. Quân đội Pháp xâm lược."
    ],
    "answer": 3
  },
  {
    "question": "Câu 116: Khi Mỹ xâm lược Việt Nam, Đảng ta nhận định:",
    "options": [
      "A. Mĩ rất giàu và rất mạnh",
      "B. Mĩ giàu nhưng không mạnh",
      "C. Mĩ không giàu nhưng rất mạnh",
      "D. Mĩ tuy giàu nhưng rất yếu"
    ],
    "answer": 1
  },
  {
    "question": "Câu 117: Đảng ta chỉ đạo phương châm tiến hành chiến tranh là gì?",
    "options": [
      "A. Tự lực cánh sinh tranh thủ sự giúp đỡ của các nước khác.",
      "B. Tự lực cánh sinh, đánh lâu dài, dựa vào sức mình là chính",
      "C. Tự lực cánh sinh, đánh nhanh, thắng nhanh, dựa vào sức mình là chính",
      "D. Tự lực cánh sinh, đánh lâu dài, dựa vào sức mạnh thời đại là chính."
    ],
    "answer": 1
  },
  {
    "question": "Câu 118: Một số loại hình chiến dịch cơ bản trong nghệ thuật quân sự Việt Nam:",
    "options": [
      "A. Chiến dịch tiến công, phản công, vận động, phục kích, tập kích",
      "B. Chiến dịch tiến công, phản công, phòng ngự, phòng không, tiến công tổng hợp",
      "C. Chiến dịch tiến công, phòng ngự, phục kích, tập kích",
      "D. Chiến dịch tiến công, phục kích, phòng không, tiến công tổng hợp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 119: Chiến dịch nào sau đây là chiến dịch phản công:",
    "options": [
      "A. Chiến dịch Điện Biên Phủ năm 1954",
      "B. Chiến dịch Việt Bắc năm 1947",
      "C. Chiến dịch Quảng Trị năm 1972",
      "D. Chiến dịch Hồ Chí Minh năm 1975"
    ],
    "answer": 1
  },
  {
    "question": "Câu 120: Trong chiến dịch Điện Biên Phủ chúng ta đã thay đổi phương châm tác chiến đó là:",
    "options": [
      "A. Từ đánh lâu dài sang đánh nhanh, thắng nhanh",
      "B. Từ đánh nhanh, thắng nhanh sang đánh lâu dài",
      "C. Từ đánh lâu dài sang đánh chắc, tiến chắc",
      "D. Từ đánh nhanh, thắng nhanh sang đánh chắc, tiến chắc"
    ],
    "answer": 3
  },
  {
    "question": "Câu 121: Chiến thuật thường vận dụng trong giai đoạn đầu kháng chiến chống Pháp và Mỹ là gì?",
    "options": [
      "A. Phản công, phòng ngự, tập kích",
      "B. Tập kích, phục kích, vận động tiến công",
      "C. Phục kích, đánh úp",
      "D. Phòng ngự, phục kích, phản kích"
    ],
    "answer": 1
  },
  {
    "question": "Câu 122: Nội dung quan trọng nhất của lý luận chiến thuật là gì?",
    "options": [
      "A. Phương thức tác chiến",
      "B. Phương châm tác chiến",
      "C. Quy mô lực lượng tham gia chiến đấu. 17",
      "D. Cách đánh"
    ],
    "answer": 3
  },
  {
    "question": "Câu 123: Một trong những bài học kinh nghiệm về nghệ thuật quân sự Việt Nam được vận dụng hiện nay là:",
    "options": [
      "A. Tích cực phòng thủ trong thế tiến công",
      "B. Tích cực tiến công và phòng ngự",
      "C. Tích cực phòng ngự và chủ động phản công",
      "D. Tích cực tiến công"
    ],
    "answer": 3
  },
  {
    "question": "Câu 124: Một trong những bài học kinh nghiệm về nghệ thuật quân sự cần quán triệt là:",
    "options": [
      "A. Nghệ thuật tạo sức mạnh tổng hợp bằng giáo dục truyền thống",
      "B. Nghệ thuật tạo sức mạnh tổng hợp bằng xây dựng phát triển kinh tế",
      "C. Nghệ thuật tạo sức mạnh tổng hợp bằng lực, thế, thời và mưu kế",
      "D. Nghệ thuật tạo sức mạnh tổng hợp bằng thiên thời, địa lợi, nhân hoà BÀI 8 ( 20 câu ) XÂY DỰNG VÀ BẢO VỆ CHỦ QUYỀN LÃNH THỔ, BIÊN GIỚI QUỐC GIA"
    ],
    "answer": 2
  },
  {
    "question": "Câu 125: L ãnh thổ quốc gia là ?",
    "options": [
      "A. Phạm vi không gian được giới hạn bởi biên giới quốc gia.",
      "B. Phạm vi không gian bao gồm vùng đất và vùng nước, vùng biển.",
      "C. Phạm vi không gian giới hạn bởi biên giới quốc gia thuộc chủ quyền hoàn toàn và đầy đủ.",
      "D. Một phần của trái đất bao gồm vùng đất và vùng trời của quốc gia."
    ],
    "answer": 2
  },
  {
    "question": "Câu 126: Việt Nam có đường biên giới dài bao nhiêu km?2",
    "options": [
      "A. 4550 km",
      "B. 4500 km",
      "C. 5450 km",
      "D. 4450 km"
    ],
    "answer": 0
  },
  {
    "question": "Câu 127: Lãnh thổ quốc gia được cấu thành bởi các bộ phận sau:3",
    "options": [
      "A. Vùng đất, vùng biển, vùng trời thuộc lãnh thổ quốc gia.",
      "B. Vùng đất, vùng biển, nội địa và vùng nội thuỷ.",
      "C. Vùng đất, vùng biển, vùng trời và lãnh thổ quốc gia đặc biệt.",
      "D. Vùng đất, vùng lãnh hải và vùng trời. Câu 128 Vùng nội thuỷ của lãnh thổ quốc gia:4",
      "A. Là vùng nước được giới hạn bởi một bên là bờ biển và một bên khác là lãnh hải.",
      "B. Là vùng biển nằm ở phía trong của đường cơ sở.",
      "C. Là vùng nước nằm ở bên ngoài đường cơ sở.",
      "D. Là vùng nước được giới hạn bởi đường cơ sở và đường biên giới trên biển."
    ],
    "answer": 2
  },
  {
    "question": "Câu 129: Vùng nước lãnh hải của lãnh thổ quốc gia:",
    "options": [
      "A. Là vùng biển nằm bên ngoài và tiếp liền với vùng tiếp giáp lãnh hải.",
      "B. Là vùng biển có chiều rộng 12 hải lý tính từ đường cơ sở.",
      "C. Là vùng biển có chiều rộng 12 hải lý tính từ đường cơ sở vào trong.",
      "D. Là vùng biển nằm bên ngoài vùng nội thuỷ có chiều rộng 24 hải lý. 18"
    ],
    "answer": 1
  },
  {
    "question": "Câu 130: Tàu thuyền của các quốc gia khác có được đi lại trong vùng lãnh hải của VN không?",
    "options": [
      "A. Không được phép đi lại",
      "B. Được phép đi lại tự do",
      "C. Được phép đi lại khi chính phủ Việt Nam cho phép",
      "D. Được phép đi lại không gây hại Câu131: Thế nào là chủ quyền quốc gia?",
      "A. Là quyền tối cao của một quốc gia trong phạm vi lãnh thổ của mình.",
      "B. Là quyền làm chủ một cách độc lập, toàn vẹn và đầy đủ về mọi mặt lập pháp, hành pháp và tư pháp.",
      "C. Là quyền thiêng liêng mọi vấn đề chính trị, kinh tế, văn hoá - xã hội do quốc gia quyết định.",
      "D. Là quyền tự quyết định mọi vấn đề đối nội, đối ngoại của quốc gia."
    ],
    "answer": 3
  },
  {
    "question": "Câu 132: Đặc trưng cơ bản, quan trọng nhất của một quốc gia là gì?",
    "options": [
      "A. Quyền lực công cộng nhà nước",
      "B. Chủ quyền lãnh thổ quốc gia",
      "C. Chủ quyền quốc gia",
      "D. Hoà bình, độc lập, tự chủ"
    ],
    "answer": 2
  },
  {
    "question": "Câu 133: Một trong những nội dung xây dựng và bảo vệ chủ quyền lãnh thổ quốc gia :",
    "options": [
      "A. Xây dựng và phát triển nền quốc phòng toàn dân, an ninh nhân dân.",
      "B. Xây dựng và phát triển nền kinh tế kết hợp với quốc phòng - an ninh.",
      "C. Xác lập và bảo vệ quyền lập pháp, hành pháp, tư pháp trên mọi mặt.",
      "D. Kết hợp chặt chẽ giữa đấu tranh quân sự với bảo đảm an ninh chính trị."
    ],
    "answer": 2
  },
  {
    "question": "Câu 134: Biên giới quốc gia của Việt Nam được xác định bằng yếu tố nào?",
    "options": [
      "A. Hệ thống các mốc quốc giới trên đất liền, các mốc quốc giới trên biển.",
      "B. Hệ thống các mốc quốc giới trên thực địa, các tọa độ trên hải đồ.",
      "C. Hệ thống các đường biên giới, các toạ độ trên hải đồ.",
      "D. Hệ thống các mốc quốc giới  trên đất liền bằng các tọa độ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 135: Biên giới quốc gia được cấu thành bởi bộ phận nào sau đây ?",
    "options": [
      "A. Biên giới quốc gia trên đất liền, biên giới quốc gia trên biển và trên không.",
      "B. Biên giới quốc gia trong lòng đất và biên giới quốc gia trên biển.",
      "C. Biên giới quốc gia trên không, biên giới quốc gia trên biển và trong lòng đất",
      "D. Biên giới quốc gia trên đất liền, trên biển, trên không và trong lòng đất."
    ],
    "answer": 3
  },
  {
    "question": "Câu 136: Tác dụng của đường biên giới quốc gia trên biển?",
    "options": [
      "A. Phân định lãnh thổ trên biển cho tất cả các quốc gia có biển.",
      "B. Là ranh giới phía ngoài của vùng đặc quyền kinh tế trên biển giữa các quốc gia.",
      "C. Là ranh giới phía ngoài của thềm lục địa, lãnh thổ trên biển giữa các quốc gia",
      "D. Phân định lãnh thổ trên biển giữa các quốc gia có bờ biển liền kề hay đối diện nhau"
    ],
    "answer": 3
  },
  {
    "question": "Câu 137: Quần đảo Hoàng Sa thuộc tỉnh, thành phố và biển nào của Việt Nam?",
    "options": [
      "A. Thành phố Đà Nẵng, Biển Đông",
      "B. Thành phố Vũng Tàu, Biển Đông",
      "C. Tỉnh Quảng Ninh, Vịnh Bắc Bộ",
      "D. Tỉnh Khánh Hoà, Biển Đông 19"
    ],
    "answer": 0
  },
  {
    "question": "Câu 138: Quần đảo Trường Sa thuộc tỉnh, thành phố nào của Việt Nam?",
    "options": [
      "A. Tỉnh Kiên Giang",
      "B. Tỉnh Khánh Hoà",
      "C. Tỉnh Bà Rịa – Vũng Tàu",
      "D. Tỉnh Bình Thuận"
    ],
    "answer": 1
  },
  {
    "question": "Câu 139: Một trong những nội dung xây dựng và bảo vệ biên giới quốc gia là:",
    "options": [
      "A. Tăng cường mở rộng quan hệ đối ngoại với các nước láng giềng và trên thế giới.",
      "B. Tăng cường hợp tác với các nước trên thế giới vì hoà bình, ổn định và phát triển lâu dài.",
      "C. Tăng cường hợp tác phát triển kinh tế, văn hoá, xây dựng lực lượng vũ trang bảo vệ Tổ quốc.",
      "D. Tăng cường hợp tác nhiều mặt nhằm xây dựng biên giới hoà bình, hữu nghị, ổn định lâu dài."
    ],
    "answer": 3
  },
  {
    "question": "Câu 140: Một trong những nội dung xây dựng và bảo vệ biên giới quốc gia:",
    "options": [
      "A. Phối hợp với các nước trong khu vực ngăn chặn mọi âm mưu gây bạo loạn lật đổ của kẻ thù.",
      "B. Phối hợp với các nước đấu tranh ngăn chặn mọi hành động phá hoại tình đoàn kết hữu nghị.",
      "C. Phối hợp chặt chẽ giữa chống giặc ngoài và dẹp thù trong để bảo vệ vững chắc Tổ quốc.",
      "D. Phối hợp đấu tranh quân sự với bảo đảm an ninh chính trị - trật tự an toàn xã hội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 141: Một trong những quan điểm của Đảng về xây dựng, bảo vệ chủ quyền lãnh thổ, biên giới quốc gia:",
    "options": [
      "A. Chủ quyền lãnh thổ, biên giới quốc gia là một bộ phận rất quan trọng của Nhà nước Việt Nam.",
      "B. Chủ quyền lãnh thổ, biên giới quốc gia là yếu tố cơ bản nhất cho sự phát triển kinh tế - xã hội.",
      "C. Chủ quyền lãnh thổ, biên giới quốc gia là thiêng liêng bất khả xâm phạm của dân tộc VN.",
      "D. Chủ quyền lãnh thổ, biên giới quốc gia là quan trọng trong sự nghiệp xây dựng và bảo vệ Tổ quốc."
    ],
    "answer": 2
  },
  {
    "question": "Câu 142: Quan điểm của Đảng, Nhà nước ta trong việc giải quyết các vấn đề tranh chấp lãnh thổ, biên giới:",
    "options": [
      "A. Vừa hợp tác vừa đấu tranh trong phạm vi lãnh thổ quốc gia của mình",
      "B. Thông qua đàm phán hoà bình, tôn trọng độc lập, chủ quyền toàn vẹn lãnh thổ của nhau",
      "C. Bằng con đường ngoại giao trên tinh thần bình đẳng đôi bên cùng có lợi.",
      "D. Kết hợp nhiều biện pháp kể cả biện pháp đe doạ sử dụng vũ lực để giải quyết tranh chấp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 143: Quan điểm xây dựng biên giới hoà bình hữu nghị, ổn định của Đảng và Nhà nước ta thể hiện:",
    "options": [
      "A. Là vấn đề quan trọng, cơ bản và lâu dài trong sự nghiệp cách mạng của Đảng ta.",
      "B. Là quan điểm nhất quán trong sự nghiệp công nghiệp hoá, hiện đại hoá đất nước.",
      "C. Là quan điểm nhất quán phù hợp với lợi ích, luật pháp của Việt Nam và công ước quốc tế.",
      "D. Là xây dựng biên giới hoà bình, hữu nghị, phù hợp với đường lối đối ngoại của nước ta."
    ],
    "answer": 2
  },
  {
    "question": "Câu 144: Để xây dựng và bảo vệ chủ quyền lãnh thổ, biên giới quốc gia. Mọi công dân Việt Nam phải:",
    "options": [
      "A. Có nghĩa vụ tham gia xây dựng và bảo vệ chủ quyền lãnh thổ, biên giới quốc gia.",
      "B. Có nghĩa vụ, trách nhiệm tham gia xây dựng và bảo vệ chủ quyền lãnh thổ, biên giới quốc gia.",
      "C. Có trách nhiệm tham gia xây dựng và bảo vệ chủ quyền lãnh thổ, biên giới quốc gia.",
      "D. Tất cả đều đúng. 20 BÀI 9 ( 20 câu ) XÂY DỰNG LƯC LƯỢNG DÂN QUÂN TỰ VỆ, LỰC LƯỢNG DỰ BỊ ĐỘNG VIÊN VÀ ĐỘNG VIÊN CÔNG NGHIỆP QUỐC PHÒNG"
    ],
    "answer": 1
  },
  {
    "question": "Câu 145: Dân quân tự vệ đặt dưới sự lãnh đạo tuyệt đối trực tiếp về mọi mặt của Đảng vì:",
    "options": [
      "A. Dân quân tự vệ là một bộ phận của lực lượng vũ trang nhân dân.",
      "B. Dân quân tự vệ là lực lượng vũ trang quần chúng nhân dân.",
      "C. Dân quân tự vệ là lưc lượng nòng cốt chiến đấu bảo vê địa phương .",
      "D. Dân quân tự vệ là lực lượng chiến lược bảo vệ Tổ quốc."
    ],
    "answer": 0
  },
  {
    "question": "Câu 146: Dân quân tự vệ có vai trò gì?",
    "options": [
      "A. Là một trong những công cụ chủ yếu để bảo vệ địa phương cơ sở.",
      "B. Trong thời bình DQTV là lực lượng đông đảo tham gia xây dựng kinh tế",
      "C. Trong thời chiến DQTV làm nòng cốt cho toàn dân đánh giặc.",
      "D. Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 147: Dân quân tự vệ được xác định là lực lượng như thế nào trong nền quốc phòng toàn dân:",
    "options": [
      "A. Dân quân tự vệ là lực lượng cơ bản trong xây dựng nền quốc phòng toàn dân",
      "B. Dân quân tự vệ là lực lượng nòng cốt trong xây dựng nền quốc phòng toàn dân",
      "C. Dân quân tự vệ là lực lượng xung kích trong xây dựng nền quốc phòng toàn dân",
      "D. Dân quân tự vệ là lực lượng xung kích trong xây dựng quốc phòng toàn dân, an ninh nhân dân."
    ],
    "answer": 1
  },
  {
    "question": "Câu 148: Luật dân quân tự vệ 2019 xác định dân quân tự vệ có mấy nhiệm vụ?",
    "options": [
      "A. có 5 nhiệm vụ",
      "B. có 6 nhiệm vụ",
      "C. có 7 nhiệm vụ",
      "D. có 8 nhiệm vụ"
    ],
    "answer": 2
  },
  {
    "question": "Câu 149: Xây dựng lực lượng dân quân tự vệ cần chú ý phương châm:",
    "options": [
      "A. Vững mạnh, rộng khắp, coi trọng chất lượng chính trị.",
      "B. Vững mạnh, rộng khắp, coi trọng chất lượng là chính.",
      "C. Xây dựng toàn diện sẳn sàng chiến đấu cao.",
      "D. Xây dựng toàn diện, coi trọng chất lượng chính trị là chính."
    ],
    "answer": 1
  },
  {
    "question": "Câu 150: Phương châm vững mạnh trong xây dựng lực lượng dân quân tự vệ là?",
    "options": [
      "A. Vững mạnh toàn diện về chính trị, tư tưởng, tổ chức",
      "B. Mỗi tổ chức dân quân tự vệ phải luôn vững mạnh.",
      "C. Xây dựng toàn diện sẳn sàng chiến đấu trong mọi tình huống.",
      "D. Xây dựng toàn diện, coi trọng chất lượng chính trị tư tưởng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 151: Một trong những nội dung của phương châm xây dựng lực lượng dân quân tự vệ là:",
    "options": [
      "A. Xây dựng lực lượng Dân quân tự vệ coi trọng chất lượng chính trị",
      "B. Xây dựng lực lượng Dân quân tự vệ toàn diện",
      "C. Xây dựng lực lượng Dân quân tự vệ toàn diện có sức chiến đấu cao",
      "D. Xây dựng lực lượng Dân quân tự vệ coi trọng chất lượng là chính. 21"
    ],
    "answer": 3
  },
  {
    "question": "Câu 152: Dân quân tự vệ được tổ chức thành 2 lực lượng là:",
    "options": [
      "A. Lực lượng cơ động và lực lượng rộng rãi.",
      "B. Lực lượng nòng cốt và lực lượng rộng rãi.",
      "C. Lực lượng quân sự và lực lượng an ninh nhân dân.",
      "D. Lực lượng cơ động tại chỗ đánh địch và lực lượng dự bị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 153: Độ tuổi của công dân Việt Nam tham gia lực lượng dân quân tự vệ là :",
    "options": [
      "A. Đủ 18 tuổi đến 42 tuổi cho nam công dân; đủ 18 tuổi đến 35 tuổi cho nữ công dân.",
      "B. Đủ 18 tuổi đến 42 tuổi cho nam công dân; đủ 18 tuổi đến hết 30 cho nữ công dân.",
      "C. Đủ 20 tuổi đến 45 tuổi cho nam công dân; đủ 20 tuổi đến hết 35 tuổi cho nữ công dân.",
      "D. Đủ 18 tuổi đến hết 45 tuổi cho nam công dân; đủ 18 tuổi đến hết 40 tuổi cho nữ công dân."
    ],
    "answer": 3
  },
  {
    "question": "Câu 154: Nội dung giáo dục chính trị đối với dân quân tự vệ là gì?",
    "options": [
      "A. Giáo dục truyền thống dân tộc, tinh thần yêu nước, âm mưu thủ đoạn của kẻ thù.",
      "B. Giáo dục âm mưu thủ đoạn của các thế lực thù địch chống phá nước ta.",
      "C. Giáo dục cho mọi người nâng cao tinh thần cảnh giác .",
      "D. Giáo dục âm mưu và ý chí đánh giặc giữ nước cho người dân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 155: Huấn luyện quân sự đối với dân quân tự vệ bao gồm những đối tượng nào ?",
    "options": [
      "A. Toàn thể cán bộ, công nhân viên các ngành, các cấp.",
      "B. Toàn thể cán bộ dân quân tự vệ.",
      "C. Toàn thể cán bộ, chiến sĩ dân quân tự vệ.",
      "D. Toàn thể cán bộ, Đảng viên, dân quân tự vệ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 156: Dân quân tự vệ được bảo đảm hậu cần như thế nào?",
    "options": [
      "A. Tự cung tự cấp về mọi mặt.",
      "B.  Được bảo đảm hậu cần tại chỗ",
      "C. Được địa phương bảo đảm về công tác chiến đấu.",
      "D. Được địa phương bảo đảm về mọi mặt công tác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 157: Một trong những quan điểm, nguyên tắc xây dựng lực lượng dự bị động viên là:",
    "options": [
      "A. Bảo đảm số lượng đủ, chất lượng cao toàn diện, rộng khắp, sẵn sàng chiến đấu cao.",
      "B. Bảo đảm toàn diện nhưng có trọng điểm chủ yếu xây dựng chất lượng.",
      "C. Bảo đảm số lượng đủ, chất lượng cao, xây dựng toàn diện nhưng có trọng tâm, trọng điểm.",
      "D. Bảo đảm số lượng đông, chất lượng cao cho những đơn vị sẵn sàng chiến đấu."
    ],
    "answer": 2
  },
  {
    "question": "Câu 158: Một trong những quan điểm, nguyên tắc xây dựng lực lượng dự bị động viên là phải:",
    "options": [
      "A. Phát huy sức mạnh của toàn dân tất cả các lĩnh vực hoạt động xã hội.",
      "B. Xây dựng lực lượng dự bị động viên hùng mạnh, trình độ kỹ chiến thuật tốt, sẵn sàng chiến đấu cao.",
      "C. Phát huy sức mạnh của bộ, ngành và địa phương.",
      "D. Phát huy sức mạnh tổng hợp của cả hệ thống chính trị."
    ],
    "answer": 3
  },
  {
    "question": "Câu 159: Xây dựng lực lượng dự bị động viên phải đặt dưới sự lãnh đạo của Đảng như thế nào?",
    "options": [
      "A. Trực tiếp, tuyệt đối về mọi mặt.",
      "B. Trực tiếp, toàn diện về mọi mặt.",
      "C. Tuyệt đối, toàn diện về mọi mặt.",
      "D. Toàn diện, tuyệt đối về mọi mặt. 22"
    ],
    "answer": 0
  },
  {
    "question": "Câu 160: Một trong những nội dung xây dựng LLDBĐV là:",
    "options": [
      "A. Tạo nguồn, đăng ký, quản lý lực lượng dự bị động viên.",
      "B. Tạo nguồn, đăng ký, biên chế lực lượng dự bị động viên.",
      "C. Tạo nguồn, đăng ký, tổ chức lực lượng dự bị động viên theo kế hoạch.",
      "D. Tạo nguồn, đăng ký, kiểm tra lực lượng dự bị động viên theo pháp lệnh qui định."
    ],
    "answer": 0
  },
  {
    "question": "Câu 161: Tổ chức, biên chế đơn vị dự bị động viên phải theo nguyên tắc:",
    "options": [
      "A. Theo mức độ sức khoẻ, theo tuổi đời và theo cư trú.",
      "B. Theo trình độ chuyên môn, theo hạng, theo cư trú.",
      "C. Theo quân hàm, theo chức vụ và theo sức khoẻ.",
      "D. Theo hạng, theo trình độ văn hoá và theo tuổi đời. Câu 162 Phương châm huấn luyện đối với lực lượng dự bị động viên :",
      "A. Chất lượng, thiết thực, hiệu quả tập trung vào khoa học quân sự hiện đại.",
      "B. Cơ bản, thống nhất coi trọng khâu kỹ thuật tác chiến, phối hợp giữa các lực lượng.",
      "C. Chất lượng, thiết thực, hiệu quả, sát thực tế chiến đấu tại địa bàn.",
      "D. Chất lượng, thiết thực, hiệu quả, tập trung có trọng tâm, trọng điểm."
    ],
    "answer": 1
  },
  {
    "question": "Câu 163: Thực hiện huấn luyện, diễn tập, kiểm tra đối với lực lượng dự bị động viên nhằm :",
    "options": [
      "A. Giúp nâng cao chất lượng đáp ứng yêu cầu sẵn sàng chiến đấu và chiến đấu.",
      "B. Giúp nâng cao chất lượng đáp ứng yêu cầu động viên tham gia mở rộng quân đội.",
      "C. Giúp nâng cao chất lượng đáp ứng yêu cầu động viên và tổng động viên khi có lệnh.",
      "D. Giúp lãnh đạo, chỉ huy nắm được thực trạng tổ chức, xây dựng LLDBĐV ."
    ],
    "answer": 3
  },
  {
    "question": "Câu 264: Thẩm quyền quyết định và thông báo quyết định động viên công nghiệp quốc phòng do cấp nào quy định ?",
    "options": [
      "A. Bộ Quốc phòng.",
      "B. Chủ tịch nước.",
      "C. Chủ tịch Quốc hội.",
      "D. Chính phủ. BÀI 10 ( 20 câu ) XÂY DỰNG PHONG TRÀO TOÀN DÂN BẢO VỆ AN NINH TỔ QUỐC"
    ],
    "answer": 3
  },
  {
    "question": "Câu 165: Quan điểm của CN Mác - Lênin về vai trò của quần chúng nhân dân ?",
    "options": [
      "A. Là người có vai trò to lớn .",
      "B. Là người làm nên lịch sử .",
      "C. Là một bộ phận quan trọng .",
      "D. Là lực lượng nòng cốt của phong trào."
    ],
    "answer": 1
  },
  {
    "question": "Câu 166: Câu nói “ Trong bầu trời không có gì quý bằng nhân dân “ là của ai ?",
    "options": [
      "A. Nguyễn Trải",
      "B. Chủ tịch Hồ Chí Minh.",
      "C. Lênin.",
      "D. Khổng Tử. 23"
    ],
    "answer": 1
  },
  {
    "question": "Câu 167: Hình thức hoạt động của phong trào toàn dân BV an ninh TQ như thế nào?",
    "options": [
      "A. Tự giác, có tổ chức của đông đảo quần chúng nhân dân.",
      "B. Tự giác của đông đảo quần chúng nhân dân.",
      "C. Có tổ chức của một số bộ phận quần chúng nhân dân .",
      "D. Tự phát ở một số bộ phận quần chúng nhân dân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 168: Vị trí của phong trào toàn dân bảo vệ an ninh Tổ quốc:",
    "options": [
      "A. Là nền tảng của sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và bảo vệ an ninh, trật tự",
      "B. Giữ vị trí quan trọng không thể thiếu được đối với toàn bộ sự nghiệp cách mạng của Đảng",
      "C. Có vị trí không thể thiếu được trong bảo vệ an ninh quốc gia, trật tự an toàn xã hội",
      "D. Là nền tảng của sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam XHCN"
    ],
    "answer": 0
  },
  {
    "question": "Câu 169: Tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc:",
    "options": [
      "A. Trực tiếp trong phòng ngừa đấu tranh chống tội phạm",
      "B. Giúp lực lượng công an có điều kiện tuyên truyền pháp luật về phòng chống tội phạm.",
      "C. Giúp lực lượng công an có điều kiện tuyên truyền chủ trương chính sách của Đảng.",
      "D. Giúp lực lượng công an nắm vững thủ đoạn hoạt động của các loại tội phạm"
    ],
    "answer": 0
  },
  {
    "question": "Câu 170: Phong trào toàn dân bảo vệ an ninh Tổ quốc có tác dụng:",
    "options": [
      "A. Giúp cho lực lượng công an có điều kiện để triển khai sâu rộng các mặt công tác nghiệp vụ.",
      "B. Giúp lực lượng công an có điều kiện tuyên truyền pháp luật về phòng chống tội phạm.",
      "C. Giúp lực lượng công an có điều kiện tuyên truyền chủ trương chính sách của Đảng.",
      "D. Giúp lực lượng công an nắm vững thủ đoạn hoạt động của các loại tội phạm ."
    ],
    "answer": 0
  },
  {
    "question": "Câu 171: Đặc điểm của phong trào toàn dân bảo vệ an ninh Tổ quốc?",
    "options": [
      "A. Đối tượng tham gia đa dạng, liên quan đến mọi người, mọi tầng lớp xã hội.",
      "B. Nội dung, hình thức, phương pháp xây dựng có sự khác nhau ở các địa bàn.",
      "C. Gắn liền với các cuộc vận động khác của Đảng và nhà nước.",
      "D. Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 172: Một trong những nội dung cơ bản của công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
    "options": [
      "A. Vận động toàn dân nâng cao tinh thần cảnh giác cách mạng trong nhiệm vụ bảo vệ Tổ quốc.",
      "B. Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm.",
      "C. Kết hợp chặt chẽ giữa quốc phòng với an ninh ở địa phương, đơn vị.",
      "D. Kết hợp chặt chẽ giữa phát triển kinh tế xã hội với bài trừ tệ nạn xã hội, hủ tục lạc hậu."
    ],
    "answer": 1
  },
  {
    "question": "Câu 173: Một trong những phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là :",
    "options": [
      "A. Xây dựng tổ chức Đảng, chính quyền, đoàn thể quần chúng tại cơ sở vững mạnh.",
      "B. Xây dựng mở rộng liên kết, phối hợp giữa các ban, ngành, đoàn thể.",
      "C. Nắm tình hình và xây dựng kế hoạch phát động phong trào toàn dân bảo vệ an ninh Tổ quốc.",
      "D. Nắm tình hình và vận động toàn dân tham gia phong trào bảo vệ an ninh trật tự, an toàn xã hội. 24"
    ],
    "answer": 2
  },
  {
    "question": "Câu 174: Một trong những nội dung nắm tình hình trong phát động phong trào toàn dân bảo vệ an ninh Tổ quốc:",
    "options": [
      "A. Vị trí địa lý, đặc điểm địa bàn, về phân bố dân cư, phong tục tập quán...có liên quan.",
      "B. Vị trí địa lý, địa hình, vùng dân cư, tình hình kinh tế, văn hoá, xã hội có liên quan.",
      "C. Đi sát cơ sở tiếp xúc, gặp gỡ, thu thập ý kiến nắm tình hình liên quan đến an ninh chính trị.",
      "D. Trực tiếp khảo sát điều tra của tổ chức Đảng, chính quyền, đoàn thể và quần chúng nhân dân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 175: Một trong những nội dung của kế hoạch phát động phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
    "options": [
      "A. Gửi văn bản dự thảo kế hoạch đến tổ chức, cá nhân có liên quan tham gia góp ý, bổ sung.",
      "B. Xác định mục đích, yêu cầu cụ thể phải đạt được của phong trào toàn dân bảo vệ an ninh Tổ quốc.",
      "C. Tiếp thu ý kiến của tập thể, tiến hành nghiên cứu bổ sung kế hoạch phát động toàn dân bảo vệ Tổ  quốc.",
      "D. Đảm bảo đủ nội dung, đúng quy tắc về thể thức văn bản quản lý Nhà nước."
    ],
    "answer": 1
  },
  {
    "question": "Câu 176: Một trong những phương pháp tuyên truyền giáo dục quần chúng nhân dân thực hiện nhiệm vụ bảo vệ an ninh Tổ quốc là :",
    "options": [
      "A. Triệt để khai thác sử dụng phương tiện thông tin đại chúng.",
      "B. Tuyên truyền giáo dục nhân dân xây dựng đời sống văn hoá.",
      "C. Vận động nhân dân chấp hành giao thông, trật tự công cộng.",
      "D. Xây dựng cụm dân cư có nếp sống văn hoá, thuần phong mỹ tục."
    ],
    "answer": 0
  },
  {
    "question": "Câu 177: Nội dung, yêu cầu xây dựng các tổ chức quần chúng làm nòng cốt phong trào toàn dân bảo vệ an ninh Tổ quốc?",
    "options": [
      "A. Lựa chọn đội ngũ cán bộ đương chức có quyền hành, có năng lực.",
      "B. Lựa chọn người có uy tín, năng lực được quần chúng tín nhiệm.",
      "C. Lựa chọn đội ngũ cán bộ là các cựu chiến binh, công an.",
      "D. Tất cả đều đúng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 178: Phương pháp xây dựng các tổ chức quần chúng nòng cốt trong phong trào bảo vệ an ninh Tổ quốc:",
    "options": [
      "A. Xác định chức năng, nhiệm vụ, quyền hạn của tổ chức quần chúng được xây dựng.",
      "B. Đề xuất cấp uỷ, chính quyền ra quyết định thành lập tổ chức quần chúng bảo vệ an ninh trật tự.",
      "C. Xác định hình thức tổ chức quần chúng cần xây dựng.",
      "D. Tất cả  đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 179: Vai trò của quần chúng trong bảo vệ an ninh Tổ quốc, được thể hiện:",
    "options": [
      "A. Khả năng phát hiện, quản lý, giáo dục, cải tạo các loại tội phạm",
      "B. Khả năng nắm bắt mọi hoạt động của các đối tượng phạm tội",
      "C. Khả năng trực tiếp phòng chống, tố giác tấn công tội phạm.",
      "D. Khả năng kiểm tra, kiểm soát các loại tội phạm trong khu vực họ sinh sống."
    ],
    "answer": 0
  },
  {
    "question": "Câu 180: Đối tượng tham gia phong trào toàn dân bảo vệ an ninh Tổ quốc?",
    "options": [
      "A. Công an, quân đội, sinh viên.",
      "B. Mọi người, mọi tầng lớp trong xã hội.",
      "C. Công an nhân dân, cảnh sát nhân dân",
      "D. Lực lượng dân quân ở địa phương. 25"
    ],
    "answer": 1
  },
  {
    "question": "Câu 181: Để nhân rộng điển hình tiên tiến trong phong trào bảo vệ an ninh Tổ quốc cần làm các công việc:",
    "options": [
      "A. Lựa chọn điển hình tiên tiến",
      "B. Tổ chức rút kinh nghiệm điển hình tiên tiến C . Phổ biến kinh nghiệm điển hình tiên tiến",
      "D. Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 182: Trách nhiệm của SV trong xây dựng phong trào bảo vệ an ninh Tổ quốc.",
    "options": [
      "A. Sinh viên hiểu biết và tự hào về phong trào toàn dân bảo vệ an ninh Tổ quốc.",
      "B. Sinh viên nắm chắc phong trào để áp dụng khi ra trường đi làm.",
      "C. Sinh viên phải có nhận thức đúng đắn đầy đủ về trách nhiệm công dân",
      "D. Sinh viên củng cố kiến thức về quốc phòng – an ninh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 183: Trách nhiệm của sinh viên trong xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc:",
    "options": [
      "A. Đây là một nhiệm vụ quan trọng sinh viên tự giác chấp hành.",
      "B. Đây là nhiệm vụ chủ yếu mà bắt buộc sinh viên phải tham gia..",
      "C. Đây là phong trào sinh viên không nhất thiết phải tham gia.",
      "D. Đây là phong trào sinh viên tổ chức tham gia."
    ],
    "answer": 0
  },
  {
    "question": "Câu 184: Trách nhiệm của sinh viên trong xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc:",
    "options": [
      "A. Tích cực tham gia vào các phong trào bảo vệ an ninh trật tự của địa phương.",
      "B. Sinh viên phải tham gia đầy đủ các hoạt động trong phòng chống tội phạm..",
      "C. Đây là phong trào quần chúng, sinh viên không nhất thiết phải tham gia.",
      "D. Đây là phong trào sinh viên nên tổ chức tham gia. BÀI 11 ( 16 câu ) NHỮNG VẤN ĐỀ CƠ BẢN VỀ BẢO VỆ AN NINH TRẬT TỰ, AN TOÀN XÃ HỘI"
    ],
    "answer": 0
  },
  {
    "question": "Câu 185: Bảo vệ an ninh quốc gia là gì?",
    "options": [
      "A. Phòng ngừa, phát hiện, ngăn chặn, đấu tranh làm thất bại các hoạt động xâm hại an ninh quốc gia.",
      "B. Phòng ngừa, phát hiện, ngăn chặn đấu tranh các hành động gây rối của kẻ thù.",
      "C. Bảo vệ bí mật Nhà nước và các mục tiêu quan trọng về an ninh quốc gia.",
      "D. Bảo vệ các công trình, cơ sở chính trị quốc gia, khoa học công nghệ của Nhà nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 186: Một trong những nhiệm vụ bảo vệ an ninh quốc gia là:",
    "options": [
      "A. Bảo vệ an ninh biên giới, văn hoá, thông tin, tôn giáo.",
      "B. Bảo vệ bí mật các tổ chức chính trị - xã hội và các công trình quốc phòng – an ninh.",
      "C. Bảo vệ an ninh kinh tế, quốc phòng, đối ngoại và các lợi ích khác của quốc gia.",
      "D. Bảo vệ bí mật các cấp chính quyền, sự nghiệp công nghiệp hoá, hiện đại hoá đất nước."
    ],
    "answer": 2
  },
  {
    "question": "Câu 187: Một trong những nhiệm vụ bảo vệ an ninh quốc gia là:",
    "options": [
      "A. Bảo vệ an ninh biên giới, văn hoá, thông tin, tôn giáo.",
      "B. Bảo vệ bí mật các tổ chức chính trị - xã hội và các công trình quốc phòng – an ninh.",
      "C. Bảo vệ bí mật của Nhà nước và các mục tiêu quan trọng về an ninh quốc gia.",
      "D. Bảo vệ bí mật các cấp chính quyền, sự nghiệp công nghiệp hoá, hiện đại hoá đất nước. 26"
    ],
    "answer": 2
  },
  {
    "question": "Câu 188: Một trong những n guyên tắc bảo vệ an ninh quốc gia là:",
    "options": [
      "A. Bảo vệ an ninh tư tưởng văn hoá, khối đại đoàn kết dân tộc, quyền lợi của nhân dân.",
      "B. Phòng ngừa phát hiện, ngăn chặn làm thất bại các hoạt động xâm phạm an ninh quốc gia.",
      "C. Đặt dưới sự lãnh đạo của Đảng CSVN, sự quản lý của Nhà nước.",
      "D. Bảo vệ bí mật của Nhà nước và các mục tiêu quan trọng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 189: Bảo vệ an ninh quốc gia cần tuân thủ những nguyên tắc là gì?",
    "options": [
      "A. Tuân thủ Hiến pháp, pháp luật, bảo đảm lợi ích của nhà nước, của các tổ chức và cá nhân.",
      "B. Kết hợp chặt chẽ nhiệm vụ bảo vệ ANQG với nhiệm vụ XD  phát triển KT - VH, XH",
      "C. Đặt dưới sự lãnh đạo của Đảng, sự quản lí thống nhất của nhà nước",
      "D. Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 190: Một trong những cơ quan chuyên trách bảo vệ an ninh quốc gia là:",
    "options": [
      "A. Công an, quân đội, biên phòng, dân quân tự vệ, dự bị động viên và các tổ chức chính trị.",
      "B. Công an, bộ đội chủ lực, bộ đội biên phòng, dân quân tự vệ và tình báo quân đội nhân dân.",
      "C. Cơ quan chỉ đạo, chỉ huy và các đơn vị bảo vệ an ninh quân đội, tình báo quân đội nhân dân.",
      "D. Cơ quan chỉ đạo, chỉ huy công an, bộ đội hải quân, cảnh sát biển."
    ],
    "answer": 2
  },
  {
    "question": "Câu 191: Cơ quan chuyên trách bảo vệ an ninh quốc gia khu vực biên giới trên đất liền và trên biển:",
    "options": [
      "A. Bộ đội biên giới, Cảnh sát biển",
      "B. Bộ đội Biên phòng, Cảnh sát nhân dân",
      "C. Bộ đội Biên phòng, Cảnh sát biển",
      "D. Lực lượng kiểm ngư, lực lượng biên phòng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 192: Các biện pháp bảo vệ an ninh quốc gia là gì?",
    "options": [
      "A. Vận động quần chúng.",
      "B. Kinh tế, vũ trang",
      "C. Ngoại giao, nghiệp vụ, pháp luật.",
      "D. Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 193: Bảo vệ trật tự an toàn xã hội là nhiệm vụ của ai?",
    "options": [
      "A. Toàn Đảng, toàn dân,toàn quân lực lượng Công an nhân dân giữ vai trò nòng cốt.",
      "B. Toàn Đảng, toàn dân, lực lượng Công an nhân dân giữ vai trò nòng cốt",
      "C. Toàn dân, lực lượng Công an nhân dân giữ vai trò nòng cốt",
      "D. Công an, an ninh và lực lượng vũ trang nhân dân"
    ],
    "answer": 3
  },
  {
    "question": "Câu 194: Lĩnh vực nào sau đây được coi là cốt lõi trong bảo vệ an ninh quốc gia?",
    "options": [
      "A. An ninh biên giới.",
      "B. An ninh chính trị nội bộ.",
      "C. An ninh kinh tế.",
      "D. An ninh tư tưởng, văn hoá. 27"
    ],
    "answer": 1
  },
  {
    "question": "Câu 195: Hiện nay Việt Nam ta khẳng định đối tác là :",
    "options": [
      "A. Những quốc gia, vùng lãnh thổ, tổ chức phi Chính phủ tạo điều kiện thuận lợi cho Việt Nam",
      "B. Những nước xã hội chủ nghĩa và các nước đang phát triển giúp đỡ Việt Nam.",
      "C. Những ai chủ trương tôn trọng độc lập, chủ quyền và hợp tác bình đẳng cùng có lợi với Việt Nam.",
      "D. Những tổ chức, cá nhân tôn trọng giúp đỡ Việt Nam."
    ],
    "answer": 2
  },
  {
    "question": "Câu 196: Đối tượng xâm phạm đến an ninh quốc gia trong tình hình hiện nay là :",
    "options": [
      "A. Bọn tội phạm kinh tế, hình sự.",
      "B. Bọn gián điệp, bọn phản động.",
      "C. Các đối tượng xâm phạm về trật tự an toàn xã hội.",
      "D. Các phần tử có tư tưởng sai trái, bất mãn, chống chủ nghĩa xã hội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 197: Một trong những quan điểm của Đảng, Nhà nước ta về bảo vệ an ninh quốc gia, trật tự an toàn xã hội ?",
    "options": [
      "A. Đảng lãnh đạo trực tiếp, tuyệt đối về mọi mặt bảo vệ an ninh quốc gia.",
      "B. Công an là lực lượng nòng cốt, tăng cường hiệu lực quản lý của Nhà nước.",
      "C. Kết hợp chặt chẽ nhiệm vụ xây dựng với nhiệm vụ bảo vệ Tổ quốc.",
      "D. Phát huy quyền làm chủ của nhân dân trên tất cả các lĩnh vực..."
    ],
    "answer": 2
  },
  {
    "question": "Câu 198: “Ngăn chặn các hoạt động truyền bá văn hóa phẩm phản động, đồi trụy...” thuộc nội dung nào trong bảo vệ an ninh quốc gia?",
    "options": [
      "A. Bảo vệ an ninh dân tộc",
      "B. Bảo vệ an ninh thông tin",
      "C. Bảo vệ an ninh văn hóa, tư tưởng.",
      "D. Bảo vệ an ninh chính trị nội bộ trong Câu 199: Trách nhiệm của sinh viên bảo vệ an ninh quốc gia, trật tự an toàn xã hội ?",
      "A. Sinh viên phải nhận thức đây là một bộ phận của cuộc đấu tranh giai cấp",
      "B. Đây là nhiệm vụ rất khó khăn và phức tạp bắt buộc sinh viên phải tham gia..",
      "C. Sinh viên phải nhận thức đây là một nhiệm vụ quan trọng phải tự giác tham gia",
      "D. Sinh viên phải nhận thức đây là phong trào không chỉ sinh viên mà mọi tổ chức tham gia."
    ],
    "answer": 2
  },
  {
    "question": "Câu 200: Bảo vệ các cơ quan đại diện, cán bộ, sinh viên và người lao động Việt Nam ở nước ngoài, thuộc nội dung nào trong bảo vệ an ninh quốc gia?",
    "options": [
      "A. Bảo vệ an ninh kinh tế",
      "B. Bảo vệ an ninh dân tộc",
      "C. Bảo vệ an ninh chính trị nội bộ",
      "D. Bảo vệ an ninh văn hoá, tư tưởng Tp. HCM, ngày 23 tháng 8 năm 2023 TTGD QUỐC PHÒNG,AN NINH. 28"
    ],
    "answer": 2
  }
]