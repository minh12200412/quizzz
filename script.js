// Bước 1: Khai báo dữ liệu câu hỏi
// Chúng ta chuyển đổi bộ dữ liệu của bạn thành một mảng (Array) các đối tượng (Object)
// Mỗi đối tượng chứa câu hỏi, các lựa chọn, và chỉ số (index) của đáp án đúng
const quizData = [
  {
    question:
      "Câu 1: Loại ký sinh trùng sốt rét (KST-SR) nào phổ biến nhất ở Việt Nam?",
    options: ["P. vivax", "P. falciparum", "P. ovale", "P. malariae"],
    answer: 1, // B. P. falciparum
  },
  {
    question: "Câu 2: Loại KST-SR nào gây bệnh nặng nhất (sốt rét ác tính)?",
    options: ["P. ovale", "P. vivax", "P. malariae", "P. falciparum"],
    answer: 3, // D. P. falciparum
  },
  {
    question:
      "Câu 3: Hai loại KST-SR nào có thể 'ngủ' trong gan và gây tái phát xa?",
    options: [
      "P. falciparum và P. malariae",
      "P. vivax và P. ovale",
      "P. vivax và P. falciparum",
      "P. ovale và P. malariae",
    ],
    answer: 1, // B. P. vivax và P. ovale
  },
  {
    question:
      "Câu 4: Thời gian hoàn thành chu kỳ hồng cầu của P. falciparum (gây sốt) là bao lâu?",
    options: ["12 giờ", "72 giờ", "24-48 giờ", "48-72 giờ"],
    answer: 2, // C. 24-48 giờ
  },
  {
    question:
      "Câu 5: Muỗi nào là vector truyền bệnh sốt rét ở vùng ven biển phía Bắc Việt Nam?",
    options: [
      "Aedes aegypti",
      "Anopheles Subpictus",
      "Culex",
      "Anopheles minimus",
    ],
    answer: 1, // B. Anopheles Subpictus
  },
  {
    question:
      "Câu 6: Để chống lây truyền sốt rét từ người bệnh sang người lành, cần phải diệt thể nào của KST-SR?",
    options: [
      "Thể tư dưỡng",
      "Thể phân liệt",
      "Giao bào",
      "Thể ngủ (Hypnozoites)",
    ],
    answer: 2, // C. Giao bào
  },
  {
    question:
      "Câu 7: Biện pháp nào sau đây có hiệu quả trong phòng chống bệnh sốt rét?",
    options: [
      "Rửa tay bằng xà phòng",
      "Ăn chín, uống sôi",
      "Ngủ mắc màn (ngủ mùng)",
      "Vệ sinh đường hô hấp",
    ],
    answer: 2, // C. Ngủ mắc màn
  },
  {
    question:
      "Câu 8: Entamoeba histolytica (gây bệnh lỵ amip) di chuyển bằng cơ quan nào?",
    options: ["Roi", "Chân giả", "Lông tơ", "Không di chuyển"],
    answer: 1, // B. Chân giả
  },
  {
    question:
      "Câu 9: Người bị nhiễm Entamoeba histolytica do nuốt phải thể nào sau đây?",
    options: [
      "Thể hoạt động (magna)",
      "Bào nang non (1 nhân)",
      "Bào nang già (4 nhân)",
      "Thể minuta",
    ],
    answer: 2, // C. Bào nang già (4 nhân)
  },
  {
    question: "Câu 10: Giardia lamblia di chuyển bằng cơ quan nào?",
    options: ["Roi", "Chân giả", "Lông tơ", "Bằng dòng chảy của dịch ruột"],
    answer: 0, // A. Roi
  },
  {
    question:
      "Câu 11: Bệnh do Giardia lamblia (tiêu chảy, suy dinh dưỡng) thường gây bệnh chủ yếu ở đối tượng nào?",
    options: [
      "Trẻ em",
      "Người già",
      "Phụ nữ mang thai",
      "Nam giới trưởng thành",
    ],
    answer: 0, // A. Trẻ em
  },
  {
    question:
      "Câu 12: Nguyên tắc điều trị quan trọng nhất khi nhiễm Trichomonas vaginalis (gây viêm âm đạo) là gì?",
    options: [
      "Chỉ điều trị cho nữ giới",
      "Điều trị cho cả vợ và chồng (bạn tình)",
      "Chỉ điều trị khi có triệu chứng ngứa",
      "Dùng thuốc đặt tại chỗ là đủ",
    ],
    answer: 1, // B. Điều trị cho cả vợ và chồng
  },
  {
    question:
      "Câu 13: Phương pháp xét nghiệm đặc hiệu thường dùng để chẩn đoán giun kim là gì?",
    options: [
      "Soi phân trực tiếp",
      "Kỹ thuật Kato-Katz",
      "Phương pháp giấy bóng kính (Graham)",
      "Xét nghiệm máu tìm kháng thể",
    ],
    answer: 2, // C. Phương pháp giấy bóng kính (Graham)
  },
  {
    question:
      "Câu 14: Nhiệt độ môi trường thích hợp để trứng giun đũa (Ascaris lumbricoides) phát triển là:",
    options: ["15-20°C", "24-25°C", "30-35°C", "37°C"],
    answer: 1, // B. 24-25°C
  },
  {
    question:
      "Câu 15: Nhiệt độ môi trường thích hợp để trứng giun tóc (Trichuris trichiura) phát triển là:",
    options: ["20-24°C", "25-30°C", "30-35°C", "37°C"],
    answer: 1, // B. 25-30°C
  },
  {
    question: "Câu 16: Trứng giun tóc có thể bị tiêu diệt ở nhiệt độ 60°C sau:",
    options: ["Vài phút", "1 giờ", "2 giờ", "24 giờ"],
    answer: 0, // A. Vài phút
  },
  {
    question:
      "Câu 17: Ấu trùng giun móc/mỏ xâm nhập vào cơ thể người qua da ở giai đoạn nào?",
    options: ["Giai đoạn 1", "Giai đoạn 2", "Giai đoạn 3", "Giai đoạn 4"],
    answer: 2, // C. Giai đoạn 3
  },
  {
    question:
      "Câu 18: Con người là vật chủ chính của sán dây bò và sán dây lợn.",
    options: ["Đúng", "Sai"],
    answer: 0, // A. Đúng
  },
  {
    question: "Câu 19: Bệnh sán dây lợn nguy hiểm hơn sán dây bò.",
    options: ["Đúng", "Sai"],
    answer: 0, // A. Đúng
  },
  {
    question:
      "Câu 20: Ấu trùng sán dây lợn (bệnh nang sán) có thể ký sinh ở vị trí nào gây nguy hiểm đặc biệt?",
    options: ["Não", "Gan", "Phổi", "Cơ vân"],
    answer: 0, // A. Não
  },
  {
    question:
      "Câu 21: Chẩn đoán bệnh sán lá phổi KHÔNG dựa vào xét nghiệm nào sau đây?",
    options: [
      "Xét nghiệm đờm tìm trứng sán",
      "Xét nghiệm dịch màng phổi",
      "Xét nghiệm phân và nước tiểu",
      "Chẩn đoán hình ảnh (X-quang)",
    ],
    answer: 2, // C. Xét nghiệm phân và nước tiểu
  },
  {
    question:
      "Câu 22: Hình thức sinh sản phổ biến của nấm Candida (dạng men) là gì?",
    options: ["Bào tử đốt", "Phân đôi", "Bào tử chồi (nảy búp)", "Tiếp hợp"],
    answer: 2, // C. Bào tử chồi (nảy búp)
  },
  {
    question:
      "Câu 23: Loại nấm nào thường gây bệnh tưa lưỡi/viêm miệng ở trẻ em hoặc người suy giảm miễn dịch?",
    options: ["Candida", "Aspergillus", "Cryptococcus", "Penicillium"],
    answer: 0, // A. Candida
  },
  {
    question:
      "Câu 24: Bệnh ghẻ (Sarcoptes scabiei) thường gây tổn thương (mụn nước, ngứa) ở vị trí điển hình nào?",
    options: ["Da đầu", "Kẽ ngón tay", "Lưng", "Lòng bàn chân"],
    answer: 1, // B. Kẽ ngón tay
  },
];

// Bước 2: Lấy các phần tử HTML để tương tác
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const progressElement = document.getElementById("progress");
const resultsContainer = document.getElementById("results-container");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const restartButton = document.getElementById("restart-btn");

// Bước 3: Khai báo các biến trạng thái
let currentQuestionIndex = 0;
let score = 0;

// Bước 4: Hàm bắt đầu hoặc làm lại quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultsContainer.style.display = "none";
  quizContainer.style.display = "block";
  nextButton.style.display = "none";
  loadQuestion();
}

// Bước 5: Hàm tải câu hỏi
function loadQuestion() {
  // Xóa phản hồi và các tùy chọn cũ
  feedbackElement.textContent = "";
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";

  // Lấy câu hỏi hiện tại
  const currentQuestion = quizData[currentQuestionIndex];

  // Hiển thị câu hỏi và tiến độ
  questionElement.textContent = currentQuestion.question;
  progressElement.textContent = `Câu ${currentQuestionIndex + 1} / ${
    quizData.length
  }`;

  // Tạo các nút lựa chọn
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    // Gán sự kiện click cho mỗi nút
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// Bước 6: Hàm xử lý khi chọn một câu trả lời
function selectAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const correctIndex = currentQuestion.answer;

  // Vô hiệu hóa tất cả các nút sau khi chọn
  const optionButtons = optionsContainer.querySelectorAll(".option");
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  // Kiểm tra câu trả lời
  if (selectedIndex === correctIndex) {
    // Nếu đúng
    score++;
    optionButtons[selectedIndex].classList.add("correct");
    feedbackElement.textContent = "Chính xác!";
    feedbackElement.style.color = "green";
  } else {
    // Nếu sai
    optionButtons[selectedIndex].classList.add("wrong");
    optionButtons[correctIndex].classList.add("correct"); // Đánh dấu đáp án đúng
    feedbackElement.textContent = `Sai rồi! Đáp án đúng là: ${currentQuestion.options[correctIndex]}`;
    feedbackElement.style.color = "red";
  }

  // Hiển thị nút "Câu tiếp theo"
  nextButton.style.display = "block";
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
  quizContainer.style.display = "none"; // Ẩn phần quiz
  resultsContainer.style.display = "block"; // Hiện phần kết quả
  scoreElement.textContent = score;
  totalElement.textContent = quizData.length;
}

// Bước 9: Gán sự kiện cho các nút
nextButton.addEventListener("click", handleNextButton);
restartButton.addEventListener("click", startQuiz);

// Bước 10: Bắt đầu quiz khi tải trang
startQuiz();
