// Bước 1: Khai báo dữ liệu 117 câu hỏi mới
const quizData = [
  // Phần 1: Đại cương Ký sinh trùng & Nấm
  {
      question: "Câu 1: Nhận định nào sau đây đúng về đặc điểm chung của bệnh do Ký sinh trùng (KST)?",
      options: [
          "Thường diễn ra ồ ạt, cấp tính.",
          "Thường diễn ra thầm lặng, kéo dài (mạn tính).",
          "Luôn có triệu chứng rõ ràng ngay từ đầu.",
          "Chỉ kéo dài vài ngày rồi tự khỏi."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 2: Đặc điểm chung của các bệnh do nấm (như nấm hệ bì, nấm nội tạng) là gì?",
      options: [
          "Thường mạn tính.",
          "Luôn cấp tính.",
          "Chỉ xảy ra ở trẻ em.",
          "Miễn dịch dịch thể đóng vai trò chính."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 3: Tác hại chính nào sau đây là đặc trưng của KST đường ruột?",
      options: [
          "Gây đột biến gen.",
          "Chiếm sinh chất (chất dinh dưỡng) của vật chủ.",
          "Gây bệnh tự miễn.",
          "Gây sốc phản vệ ngay khi nhiễm."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 4: Biện pháp nào là cốt lõi trong việc cải tạo môi trường để giảm tiết túc y học (như muỗi, bọ gậy)?",
      options: [
          "Phun hóa chất định kỳ.",
          "Vệ sinh cá nhân.",
          "Thoát nước, dọn phế thải, lấp ổ bọ gậy.",
          "Cách ly người bệnh."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 5: Nhận định 'Cách ly người bệnh là biện pháp chủ yếu phòng bệnh nấm' là đúng hay sai?",
      options: [
          "Đúng, vì nấm rất dễ lây.",
          "Sai, không cần cách ly, chủ yếu là giữ vệ sinh và điều trị sớm."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 6: Biện pháp chủ yếu để phòng bệnh nấm ngoài da là gì?",
      options: [
          "Vệ sinh cá nhân, giữ da khô, không dùng chung đồ.",
          "Tiêm vắc-xin.",
          "Uống thuốc dự phòng hàng tháng.",
          "Cách ly xã hội."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 7: Loại nấm nào thường gây bệnh tưa miệng (nấm miệng)?",
      options: ["Aspergillus", "Histoplasma", "Candida albicans", "Trichophyton"],
      answer: 2 // C
  },
  {
      question: "Câu 8: Hình thức sinh sản vô tính phổ biến của nấm Candida (dạng men) là gì?",
      options: ["Nảy chồi (budding)", "Phân đôi", "Tạo bào tử đốt", "Sinh sản hữu tính"],
      answer: 0 // A
  },
  {
      question: "Câu 9: Vector truyền bệnh dịch hạch từ người sang người là:",
      options: ["Bọ chét Xenopsylla cheopis", "Muỗi Anopheles", "Ruồi nhà", "Ghẻ Sarcoptes scabiei"],
      answer: 0 // A
  },
  {
      question: "Câu 10: Bệnh ghẻ (Sarcoptes scabiei) thường ký sinh ở vị trí điển hình nào?",
      options: [
          "Da đầu.",
          "Khe ngón tay, cổ tay, nách, quanh rốn.",
          "Lòng bàn chân.",
          "Trong mạch máu."
      ],
      answer: 1 // B
  },
  // Phần 2: Đơn bào
  {
      question: "Câu 11: Thể lây nhiễm của Entamoeba histolytica (gây lỵ amip) là thể nào?",
      options: ["Thể hoạt động (magna)", "Bào nang non 1 nhân", "Bào nang già 4 nhân", "Tất cả các thể trên"],
      answer: 2 // C
  },
  {
      question: "Câu 12: Khi một người ăn phải bào nang già 4 nhân của E. histolytica thì:",
      options: [
          "Chắc chắn sẽ mắc bệnh lỵ amip.",
          "Không nhất thiết mắc bệnh (phụ thuộc miễn dịch, số lượng, độc lực chủng).",
          "Sẽ bị áp xe gan ngay lập tức.",
          "Không bị bệnh vì bào nang bị tiêu diệt ở dạ dày."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 13: E. histolytica di chuyển bằng cơ quan nào?",
      options: ["Roi", "Chân giả (pseudopodia)", "Lông tơ", "Không di chuyển"],
      answer: 1 // B
  },
  {
      question: "Câu 14: Đơn bào nào có đặc điểm nhân (khi nhuộm) với trung thể nằm giữa nhân và khiểm sắc viền đều?",
      options: ["Giardia lamblia", "E. histolytica", "Trichomonas vaginalis", "Plasmodium"],
      answer: 1 // B
  },
  {
      question: "Câu 15: Dấu hiệu điển hình của lỵ amip cấp là gì?",
      options: [
          "Đi phân lỏng, nhiều nước, không nhầy máu.",
          "Đi lắt nhắt, ít phân, nhầy máu, mót rặn.",
          "Táo bón, đau bụng.",
          "Sốt cao liên tục, đi phân nhiều nước."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 16: Đơn bào nào gây tổn thương ruột bằng cách tạo 'ổ loét hình bình hoa' ở đại tràng?",
      options: ["Giardia lamblia", "Trichomonas vaginalis", "E. histolytica", "Plasmodium falciparum"],
      answer: 2 // C
  },
  {
      question: "Câu 17: Biến chứng ngoài ruột thường gặp nhất do E. histolytica gây ra là:",
      options: ["Áp xe não", "Áp xe phổi", "Áp xe gan (thường là vị trí kinh điển)", "Áp xe lách"],
      answer: 2 // C
  },
  {
      question: "Câu 18: Ổ áp xe gan do E. histolytica thường chứa mủ có màu đặc trưng gì?",
      options: ["Màu trắng đục", "Màu vàng xanh", "Màu 'socola' (nâu)", "Trong suốt"],
      answer: 2 // C
  },
  {
      question: "Câu 19: Biện pháp chủ yếu chống lỵ amip là gì?",
      options: ["Tiêm vắc-xin", "Ngủ màn", "Quản lý phân và vệ sinh an toàn thực phẩm", "Diệt ruồi"],
      answer: 2 // C
  },
  {
      question: "Câu 20: Xét nghiệm miễn dịch có quan trọng trong chẩn đoán lỵ amip cấp không?",
      options: [
          "Rất quan trọng, là tiêu chuẩn vàng.",
          "Không cần thiết (hữu ích hơn cho nhiễm mạn hoặc áp xe gan).",
          "Chỉ cần thiết ở trẻ em.",
          "Chỉ cần thiết ở người già."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 21: Bệnh do Giardia lamblia (tiêu chảy mỡ, kém hấp thu) thường gây bệnh chủ yếu ở nhóm đối tượng nào?",
      options: ["Người già", "Trẻ em (nhóm nhà trẻ dễ mắc)", "Nam giới trưởng thành", "Phụ nữ mang thai"],
      answer: 1 // B
  },
  {
      question: "Câu 22: Thể hoạt động của Giardia lamblia có đặc điểm hình thể nào?",
      options: [
          "Hình cầu, không đối xứng, 1 nhân.",
          "Hình quả lê, đối xứng hai bên, 2 nhân, 4 đôi roi.",
          "Hình amip, di chuyển bằng chân giả.",
          "Hình thoi, không có roi."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 23: Bệnh do Giardia lamblia có đặc điểm nào sau đây?",
      options: [
          "Gây ổ loét hình bình hoa, lỵ nhầy máu.",
          "Gây tiêu chảy mỡ, kém hấp thu, suy nhược, không xâm lấn mô.",
          "Gây thiếu máu thiếu sắt nặng.",
          "Gây sốt rét ác tính."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 24: Bào nang Giardia khi vào cơ thể sẽ chuyển thành thể hoạt động (excystation) chủ yếu ở đâu?",
      options: ["Dạ dày", "Tá tràng (môi trường kiềm nhẹ + mật)", "Đại tràng", "Gan"],
      answer: 1 // B
  },
  {
      question: "Câu 25: Nhận định nào đúng về chẩn đoán bào nang Giardia?",
      options: [
          "Bắt buộc phải nhuộm Lugol kép.",
          "Chỉ có thể dùng kỹ thuật Kato-Katz.",
          "Có thể soi tươi, tập trung Formalin-Ether (Lugol hữu ích nhưng không bắt buộc).",
          "Chỉ có thể chẩn đoán bằng xét nghiệm máu."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 26: Trichomonas vaginalis KHÔNG có thể nào sau đây?",
      options: ["Thể hoạt động", "Thể bào nang", "Thể roi", "Thể gây bệnh ở niệu đạo nam"],
      answer: 1 // B
  },
  {
      question: "Câu 27: Trichomonas vaginalis ký sinh chủ yếu ở đâu?",
      options: ["Âm đạo (nữ) và niệu đạo (nam)", "Ruột non", "Gan", "Phổi"],
      answer: 0 // A
  },
  {
      question: "Câu 28: T. vaginalis gây bệnh chủ yếu ở đối tượng nào?",
      options: ["Trẻ em", "Phụ nữ trong độ tuổi sinh sản", "Người già", "Nam giới (thường không triệu chứng)"],
      answer: 1 // B
  },
  {
      question: "Câu 29: T. vaginalis có thể sống ngoài cơ thể trong bao lâu?",
      options: ["~ 30–40 phút (nhanh chết khô)", "24 giờ", "48 giờ", "Vài giây"],
      answer: 0 // A
  },
  {
      question: "Câu 30: Nhận định nào sau đây SAI về Trichomonas vaginalis?",
      options: [
          "Không có thể bào nang.",
          "Lây truyền qua đường tình dục.",
          "Điều trị phải phối hợp cả vợ và chồng.",
          "Lây truyền chủ yếu qua ruồi."
      ],
      answer: 3 // D
  },
  {
      question: "Câu 31: Trichomonas vaginalis có thể gây biến chứng vô sinh ở nữ không?",
      options: [
          "Không bao giờ.",
          "Có thể (do gây viêm tiểu khung, viêm vòi trứng).",
          "Chỉ gây vô sinh ở nam.",
          "Chỉ gây ngứa, không gây biến chứng."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 32: Nhóm thuốc nào thường được dùng để điều trị đơn bào (E. histolytica, Giardia, T. vaginalis)?",
      options: ["Mebendazole / Albendazole", "Metronidazole / Tinidazole", "Artemisinin", "Nystatin"],
      answer: 1 // B
  },
  // Phần 3: Ký sinh trùng Sốt rét
  {
      question: "Câu 33: Plasmodium (KST sốt rét) ký sinh ở đâu?",
      options: [
          "Ngoại ký sinh trên da.",
          "Ký sinh nội bào (hồng cầu ở người, biểu mô dạ dày muỗi).",
          "Chỉ ký sinh trong huyết tương.",
          "Chỉ ký sinh ở gan."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 34: Loại KST sốt rét nào phổ biến nhất ở Việt Nam?",
      options: ["P. vivax", "P. falciparum", "P. ovale", "P. malariae"],
      answer: 1 // B
  },
  {
      question: "Câu 35: Giống Plasmodium nào thường gây bệnh nặng nhất (sốt rét ác tính), tổn thương đa cơ quan (gan, thận, não)?",
      options: ["P. vivax", "P. ovale", "P. malariae", "P. falciparum"],
      answer: 3 // D
  },
  {
      question: "Câu 36: Giống Plasmodium nào KHÔNG có thể ngủ (hypnozoite) ở gan để gây tái phát xa?",
      options: ["P. falciparum và P. malariae", "P. vivax và P. ovale", "Chỉ P. vivax", "Chỉ P. falciparum"],
      answer: 0 // A
  },
  {
      question: "Câu 37: KST sốt rét nào gây ra cơn sốt cách 3 ngày 1 lần (chu kỳ hồng cầu 72 giờ)?",
      options: ["P. falciparum", "P. vivax", "P. malariae", "P. ovale"],
      answer: 2 // C
  },
  {
      question: "Câu 38: Thời gian hoàn thành chu kỳ hồng cầu (gây sốt) của P. falciparum và P. vivax là bao lâu?",
      options: ["24 giờ", "48 giờ", "72 giờ", "96 giờ"],
      answer: 1 // B
  },
  {
      question: "Câu 39: Loài KST sốt rét nào ký sinh chủ yếu ở hồng cầu non?",
      options: ["P. vivax", "P. falciparum (ký sinh mọi lứa tuổi hồng cầu)", "P. malariae", "Cả 3 loài trên"],
      answer: 0 // A
  },
  {
      question: "Câu 40: Loài Plasmodium nào có giao bào đặc trưng hình lưỡi liềm khi nhuộm tiêu bản máu ngoại vi?",
      options: ["P. vivax", "P. ovale", "P. malariae", "P. falciparum"],
      answer: 3 // D
  },
  {
      question: "Câu 41: Đặc điểm của thể phân liệt (Schizont) của KST sốt rét là gì?",
      options: [
          "Là thể sinh sản vô tính trong hồng cầu, có nhiều nhân, bào tương chia múi.",
          "Là thể lây từ người sang muỗi, hình lưỡi liềm.",
          "Là thể lây từ muỗi sang người, hình con thoi.",
          "Là thể ngủ trong gan."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 42: Thể truyền bệnh của Plasmodium (KST sốt rét) từ muỗi sang người là:",
      options: ["Thoa trùng (sporozoite)", "Giao bào (gametocyte)", "Thể phân liệt (schizont)", "Thể nhẫn (ring form)"],
      answer: 0 // A
  },
  {
      question: "Câu 43: Khi vào dạ dày muỗi, giao bào cái của Plasmodium sẽ:",
      options: [
          "Phân chia thành 8 tiểu giao tử (đây là giao bào đực)",
          "Phân chia thành 1 đại giao tử (giao tử cái).",
          "Chết ngay lập tức.",
          "Biến thành thoa trùng."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 44: Trong chu trình phát triển của Plasmodium, người được xem là:",
      options: [
          "Ký chủ chính (vì có sinh sản hữu tính).",
          "Ký chủ trung gian (vì diễn ra giai đoạn vô tính).",
          "Ký chủ ngẫu nhiên.",
          "Vector truyền bệnh."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 45: Sốt rét lây nhiễm do:",
      options: [
          "Muỗi Anopheles đực đốt.",
          "Muỗi Anopheles cái đốt (vì chỉ muỗi cái mới hút máu).",
          "Muỗi Aedes cái đốt.",
          "Muỗi Aedes đực đốt."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 46: Nhận định 'Tất cả muỗi Anopheles đều truyền sốt rét' là đúng hay sai?",
      options: ["Đúng.", "Sai (Chỉ loài cái, và phải đủ điều kiện sinh thái mới truyền bệnh)."],
      answer: 1 // B
  },
  {
      question: "Câu 47: Con đường lây truyền KST sốt rét nào sau đây KHÔNG phổ biến bằng muỗi đốt, nhưng vẫn có thể xảy ra?",
      options: ["Đường tiêu hóa", "Đường hô hấp", "Truyền máu hoặc qua nhau thai", "Đường tình dục"],
      answer: 2 // C
  },
  {
      question: "Câu 48: Muỗi truyền sốt rét chủ yếu ở miền núi phía Bắc Việt Nam là loài nào?",
      options: ["An. minimus", "An. dirus (vùng rừng núi)", "An. subpictus (vùng ven biển Bắc)", "An. sundaicus (vùng ven biển Nam Trung Bộ)"],
      answer: 0 // A
  },
  {
      question: "Câu 49: Muỗi nào là vector chính gây bệnh Sốt xuất huyết (không phải sốt rét)?",
      options: ["Anopheles minimus", "Aedes aegypti", "Culex", "Anopheles dirus"],
      answer: 1 // B
  },
  {
      question: "Câu 50: Nhiệt độ môi trường tối thiểu để P. vivax (p.v) và P. falciparum (p.f) phát triển trong muỗi là:",
      options: ["p.v: 16°C; p.f: 14,5°C", "p.v: 14,5°C; p.f: 16°C", "p.v: 16°C; p.f: 16°C", "p.v: 14,5°C; p.f: 14,5°C"],
      answer: 1 // B
  },
  {
      question: "Câu 51: Nhiệt độ tích lũy (cần để hoàn thành chu kỳ trong muỗi) của P. falciparum (p.f) và P. vivax (p.v) là bao nhiêu?",
      options: ["p.f: 105; p.v: 111", "p.f: 111; p.v: 105", "p.f: 111; p.v: 111", "p.f: 105; p.v: 105"],
      answer: 1 // B
  },
  {
      question: "Câu 52: Đâu là biện pháp sinh học để phòng chống vector (muỗi)?",
      options: ["Phun hóa chất khẩn cấp.", "Nuôi cá ăn bọ gậy, thả copepod.", "Mắc màn tẩm hóa chất.", "Dọn dẹp phế thải."],
      answer: 1 // B
  },
  {
      question: "Câu 53: Hóa chất nào sau đây thường dùng để tẩm màn chống sốt rét?",
      options: ["DDT", "Metronidazole", "Permethrin, Deltamethrin", "Cồn 70 độ"],
      answer: 2 // C
  },
  {
      question: "Câu 54: Hóa chất phun muỗi nào đã bị cấm ở Việt Nam do tồn lưu môi trường cao, gây độc?",
      options: ["Permethrin", "Deltamethrin", "DDT", "Alpha-cypermethrin"],
      answer: 2 // C
  },
  {
      question: "Câu 55: Ngủ màn có phòng chống được bệnh sốt rét không?",
      options: ["Có, vì ngăn muỗi đốt.", "Không, vì muỗi vẫn đốt xuyên màn."],
      answer: 0 // A
  },
  {
      question: "Câu 56: Thời điểm nào tốt nhất để lấy máu xét nghiệm KST sốt rét?",
      options: ["Thời điểm sốt cao (giai đoạn cơn rét)", "Ngay sau khi hạ sốt", "Buổi sáng sớm khi đói", "Bất kỳ lúc nào trong ngày"],
      answer: 0 // A
  },
  {
      question: "Câu 57: Xét nghiệm vàng da có phải là xét nghiệm đặc hiệu để chẩn đoán sốt rét không?",
      options: [
          "Có, là tiêu chuẩn vàng.",
          "Không đặc hiệu (vàng da chỉ là biểu hiện lâm sàng).",
          "Chỉ đặc hiệu cho P. vivax.",
          "Chỉ đặc hiệu cho P. falciparum."
      ],
      answer: 1 // B
  },
  // Phần 4: Giun tròn
  {
      question: "Câu 58: Giun đũa (Ascaris lumbricoides) có đặc điểm nhận dạng ở miệng là:",
      options: ["3 môi", "2 môi", "4 môi", "Không có môi"],
      answer: 0 // A
  },
  {
      question: "Câu 59: Đặc điểm kích thước của giun đũa (Ascaris lumbricoides) là:",
      options: [
          "Giun cái dài 20–35 cm, giun đực 15–30 cm (đuôi đực cong).",
          "Giun đực dài hơn giun cái.",
          "Cả hai đều dài dưới 10cm.",
          "Cả hai đều dài trên 50cm."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 60: Thức ăn chủ yếu của giun đũa trong cơ thể là gì?",
      options: ["Dịch ruột/chất dinh dưỡng lòng ruột", "Hút máu (như giun móc)", "Tế bào biểu mô ruột", "Hồng cầu"],
      answer: 0 // A
  },
  {
      question: "Câu 61: Đặc điểm của trứng giun đũa là gì?",
      options: [
          "Vỏ mỏng, hình bầu dục, trong suốt.",
          "Vỏ dày, hình bầu dục, có lớp albumin sần sùi.",
          "Hình thoi, hai đầu có nút nhầy.",
          "Hình không đối xứng, một bên lép."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 62: Nhiệt độ môi trường thích hợp để trứng giun đũa phát triển là:",
      options: ["15-20°C", "24–25°C", "30-35°C", "37°C"],
      answer: 1 // B
  },
  {
      question: "Câu 63: Nhận định 'Trứng giun đũa có thể sống ở nơi khô ráo' là đúng hay sai?",
      options: ["Đúng", "Sai (Cần đất ẩm, mát, có oxy để phát triển)"],
      answer: 1 // B
  },
  {
      question: "Câu 64: Biện pháp phòng bệnh giun đũa là gì?",
      options: [
          "Ăn chín, uống sôi, rửa tay, dùng hố xí hợp vệ sinh.",
          "Ngủ màn.",
          "Tránh đi chân đất.",
          "Không ăn gỏi cá."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 65: Giun tóc (Trichuris trichiura) ký sinh chủ yếu ở đâu?",
      options: ["Ruột non (tá tràng)", "Dạ dày", "Manh tràng và ruột già lên", "Gan"],
      answer: 2 // C
  },
  {
      question: "Câu 66: Trứng giun tóc (Trichuris trichiura) có hình dạng đặc trưng nào?",
      options: [
          "Hình bầu dục, vỏ sần sùi.",
          "Hình thoi, hai đầu có nút nhầy, vỏ dày.",
          "Hình không đối xứng, một bên lép.",
          "Hình tròn, vỏ mỏng."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 67: Người nhiễm giun tóc qua đường nào?",
      options: ["Tiêu hóa (nuốt trứng có phôi từ đất)", "Ấu trùng xuyên qua da", "Muỗi đốt", "Ăn thịt lợn tái"],
      answer: 0 // A
  },
  {
      question: "Câu 68: Nhiệt độ môi trường thích hợp nhất để trứng giun tóc phát triển là:",
      options: ["15-20°C", "20-25°C", "25–30°C", "35-37°C"],
      answer: 2 // C
  },
  {
      question: "Câu 69: Nhận định 'Trứng giun tóc chết sau vài phút ở 60°C' là đúng hay sai?",
      options: ["Đúng", "Sai"],
      answer: 0 // A
  },
  {
      question: "Câu 70: Thuốc điều trị giun (Mebendazole, Albendazole) có an toàn cho phụ nữ mang thai không?",
      options: [
          "An toàn tuyệt đối.",
          "Không, chống chỉ định trong 3 tháng đầu thai kỳ (nguy cơ quái thai).",
          "Chỉ an toàn trong 3 tháng đầu.",
          "Chỉ dùng được Albendazole."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 71: Giun móc/mỏ lây nhiễm vào người chủ yếu qua đường nào?",
      options: ["Ấu trùng xuyên qua da (thường là da bàn chân)", "Ăn phải trứng giun", "Ăn cá gỏi", "Tình dục"],
      answer: 0 // A
  },
  {
      question: "Câu 72: Ấu trùng giai đoạn 3 (filariform) của giun móc/mỏ có đặc điểm nào?",
      options: [
          "Hướng trọng lực âm (hướng lên cao), hướng nhiệt dương, hướng ẩm dương.",
          "Hướng trọng lực dương (chui sâu xuống đất).",
          "Hướng nhiệt âm (tránh nóng).",
          "Hướng ẩm âm (tìm nơi khô ráo)."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 73: Ấu trùng giun móc/mỏ xâm nhập qua da người ở giai đoạn nào?",
      options: ["Giai đoạn 1", "Giai đoạn 2", "Giai đoạn 3 (ấu trùng filariform)", "Trứng (giai đoạn 0)"],
      answer: 2 // C
  },
  {
      question: "Câu 74: Điều kiện môi trường nào thuận lợi cho giun móc/mỏ phát triển?",
      options: [
          "Đất khô, nhiều nắng.",
          "Đất ẩm, tơi xốp, bóng râm, nhiệt độ 24–30 °C.",
          "Môi trường nước (ao, hồ).",
          "Đất cát ven biển."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 75: Bệnh giun móc/mỏ thường liên quan đến nhóm nghề nghiệp nào?",
      options: [
          "Nông nghiệp, làm vườn, hầm mỏ (đi chân đất).",
          "Nhân viên văn phòng.",
          "Ngư dân.",
          "Giáo viên."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 76: Tác hại chính của bệnh giun móc/mỏ là gì?",
      options: ["Thiếu máu thiếu sắt, suy nhược", "Gây lỵ nhầy máu", "Gây tắc ruột", "Gây áp xe gan"],
      answer: 0 // A
  },
  {
      question: "Câu 77: Giun móc/mỏ có thể ký sinh trong cơ thể người bao lâu?",
      options: ["Vài tháng", "1 năm", "Trung bình 3–5 năm, có thể tới 10 năm", "Vĩnh viễn"],
      answer: 2 // C
  },
  {
      question: "Câu 78: Chẩn đoán bệnh giun móc/mỏ dựa vào:",
      options: [
          "Tìm trứng trong phân và biểu hiện thiếu máu nhược sắc.",
          "Kỹ thuật Graham.",
          "Tìm ấu trùng trong máu.",
          "Soi tươi dịch nôn."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 79: Đặc điểm nào sau đây đúng với giun kim (Enterobius vermicularis)?",
      options: [
          "Kích thước lớn, chủ yếu ở người lớn.",
          "Kích thước nhỏ, chủ yếu ở trẻ em.",
          "Gây thiếu máu nặng.",
          "Lây qua đường da."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 80: Triệu chứng điển hình nhất của bệnh giun kim là:",
      options: ["Tiêu chảy mỡ", "Ngứa hậu môn về đêm", "Sốt cao", "Thiếu máu"],
      answer: 1 // B
  },
  {
      question: "Câu 81: Phương pháp chẩn đoán chuẩn (chuẩn) cho bệnh giun kim là gì?",
      options: [
          "Xét nghiệm phân tìm trứng (thường âm tính).",
          "Xét nghiệm máu tìm kháng thể.",
          "Kỹ thuật băng dính trong (Graham) vùng quanh hậu môn buổi sáng.",
          "Kỹ thuật Kato-Katz."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 82: Loài giun nào có chu trình tự nhiễm hoặc tái nhiễm ngược dòng đặc trưng?",
      options: ["Giun đũa", "Giun móc", "Enterobius vermicularis (giun kim)", "Giun tóc"],
      answer: 2 // C
  },
  {
      question: "Câu 83: Một con giun kim cái có thể đẻ khoảng bao nhiêu trứng?",
      options: ["100 - 200 trứng", "1.000 - 2.000 trứng", "Khoảng 10.000–15.000 trứng", "Trên 200.000 trứng"],
      answer: 2 // C
  },
  {
      question: "Câu 84: Trứng/ấu trùng giun kim (Enterobius) bị tiêu diệt ở nhiệt độ nào?",
      options: ["40°C", "50°C", "≥60 °C", "100°C"],
      answer: 2 // C
  },
  // Phần 5: Sán
  {
      question: "Câu 85: Ai là vật chủ chính (ký chủ trưởng thành) của sán dây bò (T. saginata) và sán dây lợn (T. solium)?",
      options: ["Bò và lợn", "Người", "Cả người, bò và lợn", "Ốc"],
      answer: 1 // B
  },
  {
      question: "Câu 86: Con người có thể bị nhiễm ấu trùng sán dây bò (T. saginata) không?",
      options: [
          "Có, rất phổ biến.",
          "Có, nhưng chỉ ở trẻ em.",
          "Không, người chỉ là ký chủ trưởng thành, ấu trùng chỉ ở bò.",
          "Không, người chỉ là ký chủ phụ."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 87: Tại sao bệnh sán dây lợn được coi là nguy hiểm hơn sán dây bò?",
      options: [
          "Vì sán dây lợn trưởng thành to hơn.",
          "Vì sán dây lợn gây thiếu máu nặng hơn.",
          "Vì người có thể nhiễm thể ấu trùng (nang sán) của sán lợn, gây bệnh nguy hiểm ở não, mắt.",
          "Vì sán dây lợn dễ lây hơn."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 88: Ở người, sán dây lợn (T. solium) có thể ký sinh ở đâu?",
      options: [
          "Chỉ ở ruột non (thể trưởng thành).",
          "Chỉ ở cơ, não, mắt (thể ấu trùng).",
          "Cả ruột non (trưởng thành) VÀ cơ, não, mắt (ấu trùng).",
          "Chỉ ở gan."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 89: Thể trưởng thành của sán dây lợn có thể sống bám ở ruột non người trong bao lâu?",
      options: ["Vài tháng", "1-2 năm", "Nhiều năm (ví dụ: 5–10 năm)", "Vĩnh viễn"],
      answer: 2 // C
  },
  {
      question: "Câu 90: Nhận định 'Ấu trùng sán dây lợn có thể sống 10–20 năm trong cơ thể' là đúng hay sai?",
      options: ["Đúng", "Sai"],
      answer: 0 // A
  },
  {
      question: "Câu 91: Ấu trùng sán dây lợn (nang sán) KHÔNG điển hình ký sinh ở đâu?",
      options: ["Cơ vân", "Não, mắt", "Hạch bạch huyết", "Dưới da"],
      answer: 2 // C
  },
  {
      question: "Câu 92: Biện pháp phòng bệnh sán dây lợn hiệu quả là gì?",
      options: [
          "Không ăn thịt lợn tái/tiết canh, nấu chín thịt lợn.",
          "Rửa tay sạch.",
          "Ngủ màn.",
          "Uống thuốc tẩy giun định kỳ."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 93: Chẩn đoán nhiễm sán dây (Taenia) trưởng thành dựa vào:",
      options: [
          "Tìm đốt sán trong phân hoặc trứng sán.",
          "Xét nghiệm máu.",
          "Tìm ấu trùng trong cơ.",
          "Nội soi dạ dày."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 94: Chẩn đoán ấu trùng sán dây lợn dưới da bằng cách nào?",
      options: ["Xét nghiệm phân", "Sinh thiết nốt dưới da", "Kỹ thuật Graham", "Soi tươi dịch âm đạo"],
      answer: 1 // B
  },
  {
      question: "Câu 95: Đốt mới nhất (đốt non) của sán dây bò nằm ở đâu?",
      options: ["Đốt cổ (ngay sau đầu sán)", "Đốt giữa", "Đốt cuối (đốt già)", "Không có đốt mới"],
      answer: 0 // A
  },
  {
      question: "Câu 96: Sán lá gan nhỏ (Clonorchis/Opisthorchis) ký sinh ở đâu?",
      options: ["Ống mật trong gan", "Nhu mô gan", "Ruột non", "Đại tràng"],
      answer: 0 // A
  },
  {
      question: "Câu 97: Biện pháp quan trọng nhất trong phòng chống sán lá gan nhỏ là gì?",
      options: [
          "Quản lý phân và ăn chín (đặc biệt là cá nước ngọt nấu chín).",
          "Ăn chín thịt lợn.",
          "Rửa sạch rau thủy sinh.",
          "Ngủ màn."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 98: Chẩn đoán sán lá gan nhỏ chủ yếu dựa vào:",
      options: [
          "Tìm trứng trong phân (Kato-Katz / tập trung Formalin-Ether).",
          "Tìm trứng trong đờm.",
          "Xét nghiệm máu.",
          "Siêu âm gan."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 99: Con đường lây nhiễm sán lá gan lớn (Fasciola) là gì?",
      options: [
          "Uống nước lã có ấu trùng.",
          "Ăn rau thủy sinh (như cải xoong) có nang trùng (metacercaria).",
          "Ăn cá gỏi.",
          "Do muỗi đốt."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 100: Sán lá gan lớn (Fasciola) chủ yếu gây tổn thương ở đâu?",
      options: ["Gan và ống mật (đôi khi phổi)", "Chỉ ở ruột non", "Chỉ ở não", "Chỉ ở cơ vân"],
      answer: 0 // A
  },
  {
      question: "Câu 101: Chẩn đoán bệnh sán lá phổi (Paragonimus) dựa vào xét nghiệm tìm trứng ở đâu?",
      options: ["Phân hoặc đờm", "Nước tiểu", "Máu", "Dịch não tủy"],
      answer: 0 // A
  },
  {
      question: "Câu 102: Vật chủ trung gian thứ nhất của sán lá phổi là:",
      options: ["Ốc nước ngọt", "Cá nước ngọt", "Cua/Tôm (VCTG thứ 2)", "Rau thủy sinh"],
      answer: 0 // A
  },
  {
      question: "Câu 103: Khi nghi ngờ nhiễm sán lá ruột nhỏ (ví dụ Haplorchis), cần làm xét nghiệm gì?",
      options: ["Tìm trứng trong phân", "Tìm trứng trong nước tiểu", "Tìm trứng trong đờm", "Xét nghiệm máu"],
      answer: 0 // A
  },
  {
      question: "Câu 104: Nhận định 'Có thể mắc sán lá ruột nhỏ do uống nước có ấu trùng' là đúng hay sai?",
      options: ["Đúng", "Sai (Lây qua ăn cá nước ngọt có nang trùng)"],
      answer: 1 // B
  },
  {
      question: "Câu 105: Môi trường cần thiết để trứng sán lá (nói chung) phát triển giai đoạn đầu là:",
      options: ["Nước (để nở ấu trùng miracidium)", "Đất khô", "Trong cơ thể lợn", "Trong cơ thể muỗi"],
      answer: 0 // A
  },
  {
      question: "Câu 106: Bệnh sán máng (Schistosomiasis) đã được ghi nhận ca nội địa ở Việt Nam chưa?",
      options: ["Có, rất phổ biến", "Có, nhưng chỉ ở miền Nam", "Chưa (chưa ghi nhận ca nội địa)", "Chỉ ghi nhận ở động vật"],
      answer: 2 // C
  },
  // Phần 6: Chẩn đoán & Điều trị (Tổng hợp)
  {
      question: "Câu 107: Kỹ thuật Kato-Katz được sử dụng để làm gì?",
      options: [
          "Định lượng trứng giun sán đường ruột (tải lượng trứng/gram phân).",
          "Chẩn đoán giun kim.",
          "Chẩn đoán KST sốt rét.",
          "Chẩn đoán nấm."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 108: Kỹ thuật nào sau đây hữu ích để phát hiện bào nang Giardia lamblia?",
      options: [
          "Kỹ thuật Kato-Katz.",
          "Kỹ thuật Willis.",
          "Nhuộm Lugol (iodine) / soi tươi có Lugol.",
          "Cả A và B."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 109: Phương pháp xét nghiệm nào thường dùng để chẩn đoán đơn bào đường ruột (Giardia, E. histolytica)?",
      options: ["Soi tươi, nhuộm Lugol, hoặc nhuộm Giemsa", "Kỹ thuật Kato-Katz", "Kỹ thuật Graham", "Cấy máu"],
      answer: 0 // A
  },
  {
      question: "Câu 110: Để chẩn đoán sán dây và sán lá (đường ruột/gan), phương pháp chính là:",
      options: [
          "Tìm trứng hoặc đốt sán trong phân (Kato-Katz hoặc tập trung Formalin-Ether).",
          "Xét nghiệm nước tiểu.",
          "Sinh thiết da.",
          "Soi đờm."
      ],
      answer: 0 // A
  },
  {
      question: "Câu 111: Nhận định 'Tất cả các bệnh giun sán đều được chẩn đoán bằng xét nghiệm phân' là đúng hay sai?",
      options: ["Đúng", "Sai (Ví dụ: Giun kim dùng băng dính, Sán lá phổi dùng đờm, SR dùng máu)"],
      answer: 1 // B
  },
  {
      question: "Câu 112: Tỷ lệ bạch cầu ái toan (Eosinophils) thường tăng cao trong trường hợp nào?",
      options: [
          "Nhiễm KST sốt rét.",
          "Nhiễm lỵ amip cấp.",
          "Nhiễm giun sán ở mô (như ấu trùng sán lợn, sán lá).",
          "Nhiễm nấm Candida."
      ],
      answer: 2 // C
  },
  {
      question: "Câu 113: Thuốc nào sau đây dùng để điều trị giun móc/mỏ?",
      options: ["Mebendazole / Albendazole / Pyrantel pamoate", "Metronidazole", "Chloroquine", "Nystatin"],
      answer: 0 // A
  },
  {
      question: "Câu 114: Nguyên tắc điều trị quan trọng nhất khi nhiễm Trichomonas vaginalis là gì?",
      options: [
          "Chỉ điều trị cho nữ giới.",
          "Điều trị cho cả vợ và chồng (bạn tình).",
          "Chỉ điều trị khi có triệu chứng ngứa.",
          "Dùng thuốc đặt tại chỗ là đủ."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 115: Vùng nào ở Việt Nam được coi là vùng lưu hành sốt rét nặng?",
      options: ["Đồng bằng sông Hồng", "Miền núi – rừng (Tây Nguyên, vùng sâu xa)", "Ven biển đồng bằng", "Các thành phố lớn"],
      answer: 1 // B
  },
  {
      question: "Câu 116: Nguyên nhân khiến dịch sốt rét lan rộng ở Việt Nam (đặc biệt vùng lưu hành nặng) là gì?",
      options: [
          "Chỉ do khí hậu nóng ẩm.",
          "Do vị trí địa lý, khí hậu, dân di biến động, kháng thuốc, và vector (do địa hình xen kẽ, giao thoa vùng SR lưu hành).",
          "Chỉ do kháng thuốc.",
          "Do thói quen ăn gỏi cá."
      ],
      answer: 1 // B
  },
  {
      question: "Câu 117: Biện pháp phòng nhiễm giun sán (nói chung) hiệu quả là:",
      options: [
          "Ăn chín, uống sôi, rửa tay, mang dép, quản lý phân.",
          "Chỉ cần ngủ màn.",
          "Chỉ cần tiêm vắc-xin.",
          "Chỉ cần uống thuốc tẩy giun."
      ],
      answer: 0 // A
  }
];

// -----------------------------------------------------------------
// PHẦN LOGIC (GIỮ NGUYÊN NHƯ CŨ)
// -----------------------------------------------------------------

// Bước 2: Lấy các phần tử HTML để tương tác
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('progress');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const restartButton = document.getElementById('restart-btn');

// Bước 3: Khai báo các biến trạng thái
let currentQuestionIndex = 0;
let score = 0;

// Bước 4: Hàm bắt đầu hoặc làm lại quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultsContainer.style.display = 'none';
  quizContainer.style.display = 'block';
  nextButton.style.display = 'none';
  
  // Trộn ngẫu nhiên mảng câu hỏi (Tùy chọn: nếu bạn muốn câu hỏi xáo trộn mỗi lần)
  // shuffleArray(quizData); // Bỏ comment dòng này nếu muốn xáo trộn
  
  loadQuestion();
}

/* (Tùy chọn) Hàm xáo trộn mảng câu hỏi
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
*/

// Bước 5: Hàm tải câu hỏi
function loadQuestion() {
  // Xóa phản hồi và các tùy chọn cũ
  feedbackElement.textContent = '';
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';

  // Lấy câu hỏi hiện tại
  const currentQuestion = quizData[currentQuestionIndex];

  // Hiển thị câu hỏi và tiến độ
  questionElement.textContent = currentQuestion.question;
  progressElement.textContent = `Câu ${currentQuestionIndex + 1} / ${quizData.length}`;

  // Tạo các nút lựa chọn
  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option');
      // Gán sự kiện click cho mỗi nút
      button.addEventListener('click', () => selectAnswer(index));
      optionsContainer.appendChild(button);
  });
}

// Bước 6: Hàm xử lý khi chọn một câu trả lời
function selectAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const correctIndex = currentQuestion.answer;

  // Vô hiệu hóa tất cả các nút sau khi chọn
  const optionButtons = optionsContainer.querySelectorAll('.option');
  optionButtons.forEach(button => {
      button.disabled = true;
  });

  // Kiểm tra câu trả lời
  if (selectedIndex === correctIndex) {
      // Nếu đúng
      score++;
      optionButtons[selectedIndex].classList.add('correct');
      feedbackElement.textContent = 'Chính xác!';
      feedbackElement.style.color = 'green';
  } else {
      // Nếu sai
      optionButtons[selectedIndex].classList.add('wrong');
      optionButtons[correctIndex].classList.add('correct'); // Đánh dấu đáp án đúng
      
      // Hiển thị đáp án đúng một cách rõ ràng
      const correctAnswerText = currentQuestion.options[correctIndex];
      feedbackElement.innerHTML = `Sai rồi! Đáp án đúng là: <br><strong>${correctAnswerText}</strong>`;
      feedbackElement.style.color = 'red';
  }

  // Hiển thị nút "Câu tiếp theo"
  nextButton.style.display = 'block';
}

// Bước 7: Hàm xử lý khi nhấn nút "Câu tiếp theo"
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      // Nếu còn câu hỏi, tải câu tiếp theo
      loadQuestion();
  } else {
      // Nếu hết câu hỏi, hiển thị kết quả
      showResults();
  }
}

// Bước 8: Hàm hiển thị kết quả
function showResults() {
  quizContainer.style.display = 'none'; // Ẩn phần quiz
  resultsContainer.style.display = 'block'; // Hiện phần kết quả
  scoreElement.textContent = score;
  totalElement.textContent = quizData.length;
}

// Bước 9: Gán sự kiện cho các nút
nextButton.addEventListener('click', handleNextButton);
restartButton.addEventListener('click', startQuiz);

// Bước 10: Bắt đầu quiz khi tải trang
startQuiz();