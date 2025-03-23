let vocabForListening = [
    { word: "ability", ipa: "/əˈbɪləti/", type: "noun", example: "She has the ability to solve complex problems.", meaning: "Khả năng", exampleMeaning: "Cô ấy có khả năng giải quyết các vấn đề phức tạp." },
    { word: "belongings", ipa: "/bɪˈlɒŋɪŋz/", type: "noun", example: "He packed all his belongings in a suitcase.", meaning: "Tài sản, đồ dùng cá nhân", exampleMeaning: "Anh ấy đóng gói tất cả tài sản của mình vào một chiếc vali." },
    { word: "calendar", ipa: "/ˈkælɪndər/", type: "noun", example: "She marked the meeting date on her calendar.", meaning: "Lịch", exampleMeaning: "Cô ấy đánh dấu ngày họp trên lịch của mình." },
    { word: "can", ipa: "/kæn/", type: "verb", example: "She can play the piano very well.", meaning: "Có thể", exampleMeaning: "Cô ấy có thể chơi piano rất giỏi." },
    { word: "check", ipa: "/tʃek/", type: "verb", example: "Please check your email for updates.", meaning: "Kiểm tra", exampleMeaning: "Vui lòng kiểm tra email để cập nhật thông tin." },
    { word: "confusing", ipa: "/kənˈfjuːzɪŋ/", type: "adjective", example: "The instructions were very confusing.", meaning: "Làm bối rối", exampleMeaning: "Hướng dẫn rất làm bối rối." },
    { word: "contribute", ipa: "/kənˈtrɪbjuːt/", type: "verb", example: "He contributed money to the charity.", meaning: "Góp phần, đóng góp", exampleMeaning: "Anh ấy đã đóng góp tiền cho tổ chức từ thiện." },
    { word: "donation", ipa: "/doʊˈneɪʃən/", type: "noun", example: "Their donation helped build a new school.", meaning: "Sự đóng góp, quyên góp", exampleMeaning: "Sự đóng góp của họ đã giúp xây dựng một trường học mới." },
    { word: "evaluate", ipa: "/ɪˈvæljuːeɪt/", type: "verb", example: "The teacher will evaluate the students’ projects.", meaning: "Đánh giá", exampleMeaning: "Giáo viên sẽ đánh giá các dự án của học sinh." },
    { word: "feedback", ipa: "/ˈfiːdbæk/", type: "noun", example: "We need feedback to improve our service.", meaning: "Phản hồi", exampleMeaning: "Chúng tôi cần phản hồi để cải thiện dịch vụ của mình." },
    { word: "here", ipa: "/hɪr/", type: "adverb", example: "I am here to help you.", meaning: "Ở đây", exampleMeaning: "Tôi ở đây để giúp bạn." },
    { word: "facing", ipa: "/ˈfeɪsɪŋ/", type: "verb/adjective", example: "The building is facing the park.", meaning: "Đối diện, đối mặt", exampleMeaning: "Tòa nhà đối diện với công viên." },
    { word: "membership", ipa: "/ˈmɛmbərʃɪp/", type: "noun", example: "Her membership in the club lasts for one year.", meaning: "Hội viên, tư cách thành viên", exampleMeaning: "Tư cách thành viên của cô ấy trong câu lạc bộ kéo dài một năm." },
    { word: "unlock", ipa: "/ʌnˈlɒk/", type: "verb", example: "He used a key to unlock the door.", meaning: "Mở khóa", exampleMeaning: "Anh ấy dùng chìa khóa để mở khóa cửa." },
    { word: "hire", ipa: "/haɪər/", type: "verb", example: "They decided to hire a new manager.", meaning: "Thuê, mướn", exampleMeaning: "Họ quyết định thuê một người quản lý mới." },
    { word: "postpone", ipa: "/poʊstˈpoʊn/", type: "verb", example: "They postponed the meeting until next week.", meaning: "Hoãn lại", exampleMeaning: "Họ đã hoãn cuộc họp đến tuần tới." },
    { word: "provide", ipa: "/prəˈvaɪd/", type: "verb", example: "The company provides free training for employees.", meaning: "Cung cấp", exampleMeaning: "Công ty cung cấp đào tạo miễn phí cho nhân viên." },
    { word: "quality", ipa: "/ˈkwɒlɪti/", type: "noun", example: "The quality of this product is excellent.", meaning: "Chất lượng", exampleMeaning: "Chất lượng của sản phẩm này rất tuyệt vời." },
    { word: "remodel", ipa: "/ˌriːˈmɒdəl/", type: "verb", example: "They decided to remodel their kitchen.", meaning: "Sửa chữa, cải tạo", exampleMeaning: "Họ quyết định cải tạo nhà bếp của mình." },
    { word: "renew", ipa: "/rɪˈnuː/", type: "verb", example: "We need to renew our membership next month.", meaning: "Gia hạn, làm mới", exampleMeaning: "Chúng tôi cần gia hạn tư cách thành viên vào tháng tới." },
    { word: "reservation", ipa: "/ˌrɛzərˈveɪʃən/", type: "noun", example: "I made a reservation at the restaurant for tonight.", meaning: "Đặt chỗ", exampleMeaning: "Tôi đã đặt chỗ tại nhà hàng cho tối nay." },
    { word: "subscription", ipa: "/səbˈskrɪpʃən/", type: "noun", example: "His subscription to the magazine expires next year.", meaning: "Đăng ký, thuê bao", exampleMeaning: "Đăng ký của anh ấy với tạp chí sẽ hết hạn vào năm tới." },
    { word: "thank", ipa: "/θæŋk/", type: "verb", example: "She thanked him for his help.", meaning: "Cảm ơn", exampleMeaning: "Cô ấy cảm ơn anh ấy vì sự giúp đỡ của anh ấy." },
    { word: "about", ipa: "/əˈbaʊt/", type: "preposition/adverb", example: "Let’s talk about the project.", meaning: "Về, khoảng", exampleMeaning: "Hãy nói về dự án." },
    { word: "absent", ipa: "/ˈæbsənt/", type: "adjective", example: "He was absent from the meeting.", meaning: "Vắng mặt", exampleMeaning: "Anh ấy vắng mặt trong cuộc họp." },
    { word: "accept", ipa: "/əkˈsɛpt/", type: "verb", example: "She accepted the job offer.", meaning: "Chấp nhận", exampleMeaning: "Cô ấy đã chấp nhận lời mời làm việc." },
    { word: "after", ipa: "/ˈæftər/", type: "preposition", example: "We’ll meet after lunch.", meaning: "Sau", exampleMeaning: "Chúng ta sẽ gặp nhau sau bữa trưa." },
    { word: "almost", ipa: "/ˈɔːlmoʊst/", type: "adverb", example: "It’s almost time to leave.", meaning: "Gần như, hầu như", exampleMeaning: "Gần đến giờ ra đi rồi." },
    { word: "anything", ipa: "/ˈɛnɪθɪŋ/", type: "pronoun", example: "Do you want anything from the store?", meaning: "Bất cứ thứ gì", exampleMeaning: "Bạn có muốn mua gì từ cửa hàng không?" },
    { word: "anywhere", ipa: "/ˈɛnɪwɛr/", type: "adverb", example: "I can’t find my keys anywhere.", meaning: "Bất cứ nơi nào", exampleMeaning: "Tôi không thể tìm thấy chìa khóa của mình ở bất cứ đâu." },
    { word: "apartment", ipa: "/əˈpɑːrtmənt/", type: "noun", example: "They live in a small apartment downtown.", meaning: "Căn hộ", exampleMeaning: "Họ sống trong một căn hộ nhỏ ở trung tâm thành phố." },
    { word: "appointment", ipa: "/əˈpɔɪntmənt/", type: "noun", example: "I have a doctor’s appointment at 3 PM.", meaning: "Cuộc hẹn", exampleMeaning: "Tôi có cuộc hẹn với bác sĩ lúc 3 giờ chiều." },
    { word: "approve", ipa: "/əˈpruːv/", type: "verb", example: "The manager approved the budget proposal.", meaning: "Phê duyệt", exampleMeaning: "Quản lý đã phê duyệt đề xuất ngân sách." },
    { word: "arrange", ipa: "/əˈreɪndʒ/", type: "verb", example: "She arranged a meeting for next week.", meaning: "Sắp xếp", exampleMeaning: "Cô ấy đã sắp xếp một cuộc họp cho tuần tới." },
    { word: "arrive", ipa: "/əˈraɪv/", type: "verb", example: "They will arrive at the airport at 6 PM.", meaning: "Đến", exampleMeaning: "Họ sẽ đến sân bay lúc 6 giờ tối." },
    { word: "assistant", ipa: "/əˈsɪstənt/", type: "noun", example: "The assistant helped me with my questions.", meaning: "Trợ lý", exampleMeaning: "Trợ lý đã giúp tôi với các câu hỏi của mình." },
    { word: "attend", ipa: "/əˈtɛnd/", type: "verb", example: "He will attend the conference tomorrow.", meaning: "Tham dự", exampleMeaning: "Anh ấy sẽ tham dự hội nghị vào ngày mai." },
    { word: "available", ipa: "/əˈveɪləbəl/", type: "adjective", example: "Is this product available in stores?", meaning: "Có sẵn", exampleMeaning: "Sản phẩm này có sẵn ở cửa hàng không?" },
    { word: "avoid", ipa: "/əˈvɔɪd/", type: "verb", example: "She tried to avoid the traffic jam.", meaning: "Tránh", exampleMeaning: "Cô ấy cố gắng tránh tắc đường." },
    { word: "aware", ipa: "/əˈwɛr/", type: "adjective", example: "He was aware of the risks involved.", meaning: "Nhận thức, biết", exampleMeaning: "Anh ấy nhận thức về các rủi ro liên quan." },
    { word: "back", ipa: "/bæk/", type: "noun/adverb", example: "I have pain in my back.", meaning: "Lưng, phía sau", exampleMeaning: "Tôi bị đau ở lưng." },
    { word: "bank", ipa: "/bæŋk/", type: "noun", example: "She deposited money in the bank.", meaning: "Ngân hàng", exampleMeaning: "Cô ấy đã gửi tiền vào ngân hàng." },
    { word: "beach", ipa: "/biːtʃ/", type: "noun", example: "We spent the day at the beach.", meaning: "Bãi biển", exampleMeaning: "Chúng tôi đã dành cả ngày ở bãi biển." },
    { word: "belong", ipa: "/bɪˈlɒŋ/", type: "verb", example: "This book belongs to me.", meaning: "Thuộc về", exampleMeaning: "Cuốn sách này thuộc về tôi." },
    { word: "book", ipa: "/bʊk/", type: "noun/verb", example: "I booked a flight to Paris.", meaning: "Sách, đặt chỗ", exampleMeaning: "Tôi đã đặt một chuyến bay đến Paris." },
    { word: "break", ipa: "/breɪk/", type: "verb/noun", example: "Let’s take a break after work.", meaning: "Nghỉ ngơi, phá vỡ", exampleMeaning: "Hãy nghỉ ngơi sau khi làm việc." },
    { word: "bring", ipa: "/brɪŋ/", type: "verb", example: "Can you bring the documents to the meeting?", meaning: "Mang, đem", exampleMeaning: "Bạn có thể mang tài liệu đến cuộc họp không?" },
    { word: "building", ipa: "/ˈbɪldɪŋ/", type: "noun", example: "The building has 20 floors.", meaning: "Tòa nhà", exampleMeaning: "Tòa nhà có 20 tầng." },
    { word: "busy", ipa: "/ˈbɪzi/", type: "adjective", example: "She is too busy to talk right now.", meaning: "Bận rộn", exampleMeaning: "Cô ấy quá bận để nói chuyện ngay bây giờ." },
    { word: "buy", ipa: "/baɪ/", type: "verb", example: "I want to buy a new phone.", meaning: "Mua", exampleMeaning: "Tôi muốn mua một chiếc điện thoại mới." },
    { word: "cabinet", ipa: "/ˈkæbɪnɪt/", type: "noun", example: "The documents are in the cabinet.", meaning: "Tủ, nội các", exampleMeaning: "Các tài liệu nằm trong tủ." },
    { word: "call", ipa: "/kɔːl/", type: "verb/noun", example: "I’ll call you later.", meaning: "Gọi, cuộc gọi", exampleMeaning: "Tôi sẽ gọi bạn sau." },
    { word: "car", ipa: "/kɑːr/", type: "noun", example: "He drives a red car.", meaning: "Xe hơi", exampleMeaning: "Anh ấy lái một chiếc xe hơi màu đỏ." },
    { word: "cash register", ipa: "/kæʃ ˈrɛdʒɪstər/", type: "noun", example: "The cashier scanned items at the cash register.", meaning: "Máy thu tiền", exampleMeaning: "Nhân viên thu ngân quét các mặt hàng tại máy thu tiền." },
    { word: "catalog", ipa: "/ˈkætəlɒg/", type: "noun", example: "I found the item in the catalog.", meaning: "Danh mục, danh sách", exampleMeaning: "Tôi tìm thấy món đồ trong danh mục." },
    { word: "catch", ipa: "/kætʃ/", type: "verb", example: "Can you catch the ball?", meaning: "Bắt, chụp", exampleMeaning: "Bạn có thể bắt quả bóng không?" },
    { word: "ceremony", ipa: "/ˈsɛrɪmoʊni/", type: "noun", example: "The graduation ceremony was beautiful.", meaning: "Lễ, nghi thức", exampleMeaning: "Lễ tốt nghiệp rất đẹp." },
    { word: "change", ipa: "/tʃeɪndʒ/", type: "verb/noun", example: "We need to change our plans.", meaning: "Thay đổi, sự thay đổi", exampleMeaning: "Chúng ta cần thay đổi kế hoạch của mình." },
    { word: "class", ipa: "/klæs/", type: "noun", example: "She teaches a history class.", meaning: "Lớp học", exampleMeaning: "Cô ấy dạy một lớp lịch sử." },
    { word: "client", ipa: "/ˈklaɪənt/", type: "noun", example: "The lawyer met with a new client.", meaning: "Khách hàng, thân chủ", exampleMeaning: "Luật sư đã gặp một thân chủ mới." },
    { word: "close", ipa: "/kloʊz/", type: "verb/adjective", example: "Please close the door.", meaning: "Đóng, gần", exampleMeaning: "Vui lòng đóng cửa lại." },
    { word: "coffee", ipa: "/ˈkɒfi/", type: "noun", example: "I drink coffee every morning.", meaning: "Cà phê", exampleMeaning: "Tôi uống cà phê mỗi sáng." },
    { word: "cold", ipa: "/koʊld/", type: "adjective", example: "It’s very cold outside today.", meaning: "Lạnh", exampleMeaning: "Hôm nay bên ngoài rất lạnh." },
    { word: "color", ipa: "/ˈkʌlər/", type: "noun", example: "What color is your car?", meaning: "Màu sắc", exampleMeaning: "Xe của bạn màu gì?" },
    { word: "come back", ipa: "/kʌm bæk/", type: "verb", example: "She will come back tomorrow.", meaning: "Quay lại", exampleMeaning: "Cô ấy sẽ quay lại vào ngày mai." },
    { word: "coming", ipa: "/ˈkʌmɪŋ/", type: "verb/adjective", example: "The coming week will be busy.", meaning: "Đang đến, sắp đến", exampleMeaning: "Tuần sắp tới sẽ bận rộn." },
    { word: "company", ipa: "/ˈkʌmpəni/", type: "noun", example: "She works for a tech company.", meaning: "Công ty", exampleMeaning: "Cô ấy làm việc cho một công ty công nghệ." },
    { word: "conference", ipa: "/ˈkɒnfərəns/", type: "noun", example: "The conference will be held online.", meaning: "Hội nghị, hội thảo", exampleMeaning: "Hội nghị sẽ được tổ chức trực tuyến." },
    { word: "confirm", ipa: "/kənˈfɜːrm/", type: "verb", example: "Please confirm your attendance.", meaning: "Xác nhận", exampleMeaning: "Vui lòng xác nhận sự tham dự của bạn." },
    { word: "considering", ipa: "/kənˈsɪdərɪŋ/", type: "verb", example: "We are considering a new strategy.", meaning: "Xem xét, cân nhắc", exampleMeaning: "Chúng tôi đang xem xét một chiến lược mới." },
    { word: "construction", ipa: "/kənˈstrʌkʃən/", type: "noun", example: "The construction of the bridge took two years.", meaning: "Xây dựng", exampleMeaning: "Việc xây dựng cây cầu mất hai năm." },
    { word: "convention", ipa: "/kənˈvɛnʃən/", type: "noun", example: "The convention attracted thousands of people.", meaning: "Hội nghị, đại hội", exampleMeaning: "Đại hội đã thu hút hàng nghìn người." },
    { word: "copy", ipa: "/ˈkɒpi/", type: "noun/verb", example: "Can you make a copy of this document?", meaning: "Bản sao, sao chép", exampleMeaning: "Bạn có thể sao chép tài liệu này không?" },
    { word: "correct", ipa: "/kəˈrɛkt/", type: "adjective/verb", example: "Is this answer correct?", meaning: "Đúng, sửa lại", exampleMeaning: "Câu trả lời này có đúng không?" },
    { word: "cost", ipa: "/kɔːst/", type: "noun/verb", example: "The cost of the trip was high.", meaning: "Chi phí", exampleMeaning: "Chi phí của chuyến đi rất cao." },
    { word: "country", ipa: "/ˈkʌntri/", type: "noun", example: "She lives in a small country town.", meaning: "Quốc gia, vùng quê", exampleMeaning: "Cô ấy sống ở một thị trấn nhỏ ở vùng quê." },
    { word: "course", ipa: "/kɔːrs/", type: "noun", example: "I’m taking a cooking course this summer.", meaning: "Khóa học, lộ trình", exampleMeaning: "Tôi đang tham gia một khóa học nấu ăn mùa hè này." },
    { word: "cover", ipa: "/ˈkʌvər/", type: "verb/noun", example: "The book cover is very colorful.", meaning: "Che phủ, bìa", exampleMeaning: "Bìa sách rất sặc sỡ." },
    { word: "customer", ipa: "/ˈkʌstəmər/", type: "noun", example: "The customer complained about the service.", meaning: "Khách hàng", exampleMeaning: "Khách hàng phàn nàn về dịch vụ." },
    { word: "date", ipa: "/deɪt/", type: "noun/verb", example: "What’s the date today?", meaning: "Ngày, hẹn hò", exampleMeaning: "Hôm nay là ngày bao nhiêu?" },
    { word: "deadline", ipa: "/ˈdɛdlaɪn/", type: "noun", example: "The project deadline is next Friday.", meaning: "Hạn chót", exampleMeaning: "Hạn chót của dự án là thứ Sáu tới." },
    { word: "decision", ipa: "/dɪˈsɪʒən/", type: "noun", example: "We made a decision to move forward.", meaning: "Quyết định", exampleMeaning: "Chúng tôi đã đưa ra quyết định tiến lên." },
    { word: "decrease", ipa: "/dɪˈkriːs/", type: "verb/noun", example: "The temperature will decrease later.", meaning: "Giảm, sự giảm", exampleMeaning: "Nhiệt độ sẽ giảm vào sau này." },
    { word: "deliver", ipa: "/dɪˈlɪvər/", type: "verb", example: "The package was delivered yesterday.", meaning: "Giao hàng", exampleMeaning: "Gói hàng đã được giao hôm qua." },
    { word: "demand", ipa: "/dɪˈmænd/", type: "noun/verb", example: "There is a high demand for electric cars.", meaning: "Nhu cầu, đòi hỏi", exampleMeaning: "Có nhu cầu lớn về xe điện." },
    { word: "department", ipa: "/dɪˈpɑːrtmənt/", type: "noun", example: "She works in the marketing department.", meaning: "Bộ phận, phòng ban", exampleMeaning: "Cô ấy làm việc ở bộ phận tiếp thị." },
    { word: "destination", ipa: "/ˌdɛstɪˈneɪʃən/", type: "noun", example: "Paris is our destination for the trip.", meaning: "Điểm đến", exampleMeaning: "Paris là điểm đến của chuyến đi của chúng tôi." },
    { word: "develop", ipa: "/dɪˈvɛləp/", type: "verb", example: "The company is developing a new product.", meaning: "Phát triển", exampleMeaning: "Công ty đang phát triển một sản phẩm mới." },
    { word: "direct", ipa: "/dɪˈrɛkt/", type: "adjective/verb", example: "He gave me direct instructions.", meaning: "Trực tiếp, chỉ đạo", exampleMeaning: "Anh ấy đã đưa cho tôi các hướng dẫn trực tiếp." },
    { word: "discussion", ipa: "/dɪˈskʌʃən/", type: "noun", example: "We had a long discussion about the project.", meaning: "Thảo luận", exampleMeaning: "Chúng tôi đã có một cuộc thảo luận dài về dự án." },
    { word: "distribute", ipa: "/dɪˈstrɪbjuːt/", type: "verb", example: "They distributed flyers in the neighborhood.", meaning: "Phân phối, phát", exampleMeaning: "Họ đã phát tờ rơi trong khu dân cư." },
    { word: "do", ipa: "/duː/", type: "verb", example: "I need to do my homework.", meaning: "Làm", exampleMeaning: "Tôi cần làm bài tập về nhà." },
    { word: "document", ipa: "/ˈdɒkjumənt/", type: "noun", example: "Please bring the document to the meeting.", meaning: "Tài liệu", exampleMeaning: "Vui lòng mang tài liệu đến cuộc họp." },
    { word: "done", ipa: "/dʌn/", type: "verb", example: "The work is done.", meaning: "Hoàn thành", exampleMeaning: "Công việc đã hoàn thành." },
    { word: "don’t", ipa: "/doʊnt/", type: "contraction", example: "Don’t forget to call me.", meaning: "Đừng", exampleMeaning: "Đừng quên gọi cho tôi." },
    { word: "drive", ipa: "/draɪv/", type: "verb/noun", example: "He likes to drive fast cars.", meaning: "Lái xe, sự thúc đẩy", exampleMeaning: "Anh ấy thích lái xe hơi nhanh." },
    { word: "due", ipa: "/duː/", type: "adjective", example: "The payment is due tomorrow.", meaning: "Đến hạn", exampleMeaning: "Thanh toán đến hạn vào ngày mai." },
    { word: "each other", ipa: "/iːtʃ ˈʌðər/", type: "pronoun", example: "They help each other with their work.", meaning: "Nhau", exampleMeaning: "Họ giúp đỡ lẫn nhau trong công việc." },
    { word: "early", ipa: "/ˈɜːrli/", type: "adverb/adjective", example: "We arrived early for the movie.", meaning: "Sớm", exampleMeaning: "Chúng tôi đến sớm cho buổi chiếu phim." },
    { word: "edit", ipa: "/ˈɛdɪt/", type: "verb", example: "She edited the article before publishing.", meaning: "Sửa đổi, biên tập", exampleMeaning: "Cô ấy đã chỉnh sửa bài viết trước khi xuất bản." },
    { word: "efficient", ipa: "/ɪˈfɪʃənt/", type: "adjective", example: "The new system is very efficient.", meaning: "Hiệu quả", exampleMeaning: "Hệ thống mới rất hiệu quả." },
    { word: "email", ipa: "/ˈiːmeɪl/", type: "noun/verb", example: "I sent you an email yesterday.", meaning: "Email", exampleMeaning: "Tôi đã gửi cho bạn một email hôm qua." },
    { word: "engine", ipa: "/ˈɛndʒɪn/", type: "noun", example: "The engine of the car needs repair.", meaning: "Động cơ", exampleMeaning: "Động cơ của xe cần được sửa chữa." },
    { word: "estimated", ipa: "/ˈɛstɪmeɪtɪd/", type: "adjective", example: "The estimated cost is $500.", meaning: "Ước tính", exampleMeaning: "Chi phí ước tính là 500 đô la." },
    { word: "exhibition", ipa: "/ˌɛksɪˈbɪʃən/", type: "noun", example: "The art exhibition attracted many visitors.", meaning: "Triển lãm", exampleMeaning: "Triển lãm nghệ thuật đã thu hút nhiều khách tham quan." },
    { word: "expand", ipa: "/ɪkˈspænd/", type: "verb", example: "The company plans to expand overseas.", meaning: "Mở rộng", exampleMeaning: "Công ty dự định mở rộng ra nước ngoài." },
    { word: "extend", ipa: "/ɪkˈstɛnd/", type: "verb", example: "They extended the deadline by one week.", meaning: "Kéo dài", exampleMeaning: "Họ đã kéo dài hạn chót thêm một tuần." },
    { word: "facing", ipa: "/ˈfeɪsɪŋ/", type: "verb/adjective", example: "The building is facing the park.", meaning: "Đối diện, đối mặt", exampleMeaning: "Tòa nhà đối diện với công viên." },
    { word: "fan", ipa: "/fæn/", type: "noun", example: "The fan keeps the room cool.", meaning: "Quạt, người hâm mộ", exampleMeaning: "Cái quạt giữ cho phòng mát mẻ." },
    { word: "fax", ipa: "/fæks/", type: "noun/verb", example: "Please fax the document to the office.", meaning: "Fax, gửi fax", exampleMeaning: "Vui lòng fax tài liệu đến văn phòng." },
    { word: "fill", ipa: "/fɪl/", type: "verb", example: "Can you fill this form out?", meaning: "Điền, lấp đầy", exampleMeaning: "Bạn có thể điền vào mẫu này không?" },
    { word: "finding", ipa: "/ˈfaɪndɪŋ/", type: "noun", example: "The finding surprised the researchers.", meaning: "Sự khám phá, phát hiện", exampleMeaning: "Phát hiện đã làm ngạc nhiên các nhà nghiên cứu." },
    { word: "finished", ipa: "/ˈfɪnɪʃt/", type: "adjective", example: "The project is finished on time.", meaning: "Hoàn thành", exampleMeaning: "Dự án đã hoàn thành đúng hạn." },
    { word: "fix", ipa: "/fɪks/", type: "verb", example: "He fixed the broken chair.", meaning: "Sửa chữa", exampleMeaning: "Anh ấy đã sửa chiếc ghế bị hỏng." },
    { word: "flight", ipa: "/flaɪt/", type: "noun", example: "Our flight leaves at 8 AM.", meaning: "Chuyến bay", exampleMeaning: "Chuyến bay của chúng tôi cất cánh lúc 8 giờ sáng." },
    { word: "follow", ipa: "/ˈfɒloʊ/", type: "verb", example: "Please follow the instructions carefully.", meaning: "Theo sau, làm theo", exampleMeaning: "Vui lòng làm theo hướng dẫn cẩn thận." },
    { word: "forecast", ipa: "/ˈfɔːrkæst/", type: "noun/verb", example: "The weather forecast predicts rain.", meaning: "Dự báo", exampleMeaning: "Dự báo thời tiết dự đoán có mưa." },
    { word: "form", ipa: "/fɔːrm/", type: "noun/verb", example: "Fill out this form to apply.", meaning: "Biểu mẫu, hình dạng", exampleMeaning: "Điền vào biểu mẫu này để nộp đơn." },
    { word: "free", ipa: "/friː/", type: "adjective", example: "This service is free of charge.", meaning: "Miễn phí, tự do", exampleMeaning: "Dịch vụ này miễn phí." },
    { word: "friday", ipa: "/ˈfraɪdeɪ/", type: "noun", example: "The meeting is scheduled for Friday.", meaning: "Thứ Sáu", exampleMeaning: "Cuộc họp được lên lịch vào Thứ Sáu." },
    { word: "get", ipa: "/ɡɛt/", type: "verb", example: "I need to get some groceries.", meaning: "Lấy, nhận", exampleMeaning: "Tôi cần đi lấy một số thực phẩm." },
    { word: "go", ipa: "/ɡoʊ/", type: "verb", example: "Let’s go to the park.", meaning: "Đi", exampleMeaning: "Hãy đi công viên." },
    { word: "gone", ipa: "/ɡɒn/", type: "verb", example: "She has gone to the store.", meaning: "Đã đi", exampleMeaning: "Cô ấy đã đi đến cửa hàng." },
    { word: "guideline", ipa: "/ˈɡaɪdlaɪn/", type: "noun", example: "Follow the guidelines for safety.", meaning: "Hướng dẫn", exampleMeaning: "Tuân theo hướng dẫn để đảm bảo an toàn." },
    { word: "hair cut", ipa: "/hɛr kʌt/", type: "noun", example: "I need a haircut before the party.", meaning: "Cắt tóc", exampleMeaning: "Tôi cần cắt tóc trước bữa tiệc." },
    { word: "hanging", ipa: "/ˈhæŋɪŋ/", type: "verb/adjective", example: "The picture is hanging on the wall.", meaning: "Treo, đang treo", exampleMeaning: "Bức tranh đang treo trên tường." },
    { word: "hard", ipa: "/hɑːrd/", type: "adjective", example: "This test is very hard.", meaning: "Khó, cứng", exampleMeaning: "Bài kiểm tra này rất khó." },
    { word: "held", ipa: "/hɛld/", type: "verb", example: "The event was held last weekend.", meaning: "Được tổ chức", exampleMeaning: "Sự kiện đã được tổ chức cuối tuần trước." },
    { word: "help", ipa: "/hɛlp/", type: "verb/noun", example: "Can you help me with this task?", meaning: "Giúp đỡ", exampleMeaning: "Bạn có thể giúp tôi với công việc này không?" },
    { word: "helpful", ipa: "/ˈhɛlpfəl/", type: "adjective", example: "Her advice was very helpful.", meaning: "Hữu ích", exampleMeaning: "Lời khuyên của cô ấy rất hữu ích." },
    { word: "here", ipa: "/hɪr/", type: "adverb", example: "I am here to help you.", meaning: "Ở đây", exampleMeaning: "Tôi ở đây để giúp bạn." },
    { word: "hire", ipa: "/haɪər/", type: "verb", example: "They decided to hire a new manager.", meaning: "Thuê, mướn", exampleMeaning: "Họ quyết định thuê một người quản lý mới." },
    { word: "hope", ipa: "/hoʊp/", type: "verb/noun", example: "I hope it doesn’t rain today.", meaning: "Hy vọng", exampleMeaning: "Tôi hy vọng hôm nay không mưa." },
    { word: "hot", ipa: "/hɒt/", type: "adjective", example: "It’s very hot outside.", meaning: "Nóng", exampleMeaning: "Bên ngoài rất nóng." },
    { word: "idea", ipa: "/aɪˈdiːə/", type: "noun", example: "She had a great idea for the project.", meaning: "Ý tưởng", exampleMeaning: "Cô ấy có một ý tưởng tuyệt vời cho dự án." },
    { word: "if", ipa: "/ɪf/", type: "conjunction", example: "I’ll go if it doesn’t rain.", meaning: "Nếu", exampleMeaning: "Tôi sẽ đi nếu trời không mưa." },
    { word: "in time", ipa: "/ɪn taɪm/", type: "adverb", example: "We arrived in time for the movie.", meaning: "Đúng giờ", exampleMeaning: "Chúng tôi đến đúng giờ cho buổi chiếu phim." },
    { word: "in-charge", ipa: "/ɪn tʃɑːrdʒ/", type: "noun/adjective", example: "She is in charge of the project.", meaning: "Phụ trách", exampleMeaning: "Cô ấy phụ trách dự án." },
    { word: "indoor", ipa: "/ˈɪndɔːr/", type: "adjective", example: "The event will be held indoor due to rain.", meaning: "Trong nhà", exampleMeaning: "Sự kiện sẽ được tổ chức trong nhà do trời mưa." },
    { word: "informative", ipa: "/ɪnˈfɔːrmətɪv/", type: "adjective", example: "The presentation was very informative.", meaning: "Hữu ích, cung cấp thông tin", exampleMeaning: "Bài thuyết trình rất hữu ích." },
    { word: "ink", ipa: "/ɪŋk/", type: "noun", example: "The pen ran out of ink.", meaning: "Mực", exampleMeaning: "Cây bút hết mực rồi." },
    { word: "instruction", ipa: "/ɪnˈstrʌkʃən/", type: "noun", example: "Follow the instructions carefully.", meaning: "Hướng dẫn", exampleMeaning: "Làm theo hướng dẫn cẩn thận." },
    { word: "ride", ipa: "/raɪd/", type: "noun/verb", example: "We took a ride on the roller coaster.", meaning: "Chuyến đi, cưỡi", exampleMeaning: "Chúng tôi đã đi tàu lượn siêu tốc." },
    { word: "right", ipa: "/raɪt/", type: "adjective/adverb", example: "You are absolutely right.", meaning: "Đúng, bên phải", exampleMeaning: "Bạn hoàn toàn đúng." },
    { word: "road", ipa: "/roʊd/", type: "noun", example: "The road to the city is busy.", meaning: "Đường", exampleMeaning: "Con đường đến thành phố rất bận rộn." },
    { word: "room", ipa: "/ruːm/", type: "noun", example: "We need a bigger room for the meeting.", meaning: "Phòng", exampleMeaning: "Chúng tôi cần một phòng lớn hơn cho cuộc họp." },
    { word: "run out", ipa: "/rʌn aʊt/", type: "verb", example: "We’ve run out of milk.", meaning: "Hết, cạn kiệt", exampleMeaning: "Chúng tôi đã hết sữa." },
    { word: "run", ipa: "/rʌn/", type: "verb/noun", example: "She likes to run in the park.", meaning: "Chạy", exampleMeaning: "Cô ấy thích chạy trong công viên." },
    { word: "sale", ipa: "/seɪl/", type: "noun", example: "The store is having a big sale.", meaning: "Bán, sự giảm giá", exampleMeaning: "Cửa hàng đang có một đợt giảm giá lớn." },
    { word: "schedule", ipa: "/ˈskɛdʒuːl/", type: "noun/verb", example: "The schedule for the day is packed.", meaning: "Lịch trình", exampleMeaning: "Lịch trình cho ngày hôm nay rất dày đặc." },
    { word: "seen", ipa: "/siːn/", type: "verb", example: "I have seen that movie before.", meaning: "Đã thấy", exampleMeaning: "Tôi đã xem phim đó trước đây." },
    { word: "sell", ipa: "/sɛl/", type: "verb", example: "They sell handmade crafts at the market.", meaning: "Bán", exampleMeaning: "Họ bán đồ thủ công tại chợ." },
    { word: "send", ipa: "/sɛnd/", type: "verb", example: "Please send me the file by email.", meaning: "Gửi", exampleMeaning: "Vui lòng gửi cho tôi file qua email." },
    { word: "sharing", ipa: "/ˈʃɛərɪŋ/", type: "verb/noun", example: "Sharing knowledge is important.", meaning: "Chia sẻ", exampleMeaning: "Chia sẻ kiến thức là quan trọng." },
    { word: "shipment", ipa: "/ˈʃɪpmənt/", type: "noun", example: "The shipment arrived late.", meaning: "Lô hàng, chuyến hàng", exampleMeaning: "Lô hàng đến muộn." },
    { word: "show", ipa: "/ʃoʊ/", type: "verb/noun", example: "Can you show me how to do it?", meaning: "Thể hiện, chương trình", exampleMeaning: "Bạn có thể chỉ tôi cách làm không?" },
    { word: "sign", ipa: "/saɪn/", type: "noun/verb", example: "Please sign the contract.", meaning: "Dấu hiệu, ký", exampleMeaning: "Vui lòng ký hợp đồng." },
    { word: "size", ipa: "/saɪz/", type: "noun", example: "What size shirt do you wear?", meaning: "Kích cỡ", exampleMeaning: "Bạn mặc áo kích cỡ nào?" },
    { word: "soon", ipa: "/suːn/", type: "adverb", example: "We’ll leave soon.", meaning: "Sớm", exampleMeaning: "Chúng ta sẽ rời đi sớm." },
    { word: "speaker", ipa: "/ˈspiːkər/", type: "noun", example: "The speaker at the conference was inspiring.", meaning: "Người nói, loa", exampleMeaning: "Người nói tại hội nghị rất truyền cảm hứng." },
    { word: "start", ipa: "/stɑːrt/", type: "verb/noun", example: "The meeting will start at 9 AM.", meaning: "Bắt đầu", exampleMeaning: "Cuộc họp sẽ bắt đầu lúc 9 giờ sáng." },
    { word: "stay", ipa: "/steɪ/", type: "verb/noun", example: "We plan to stay at a hotel.", meaning: "Ở lại", exampleMeaning: "Chúng tôi dự định ở lại khách sạn." },
    { word: "stop", ipa: "/stɒp/", type: "verb/noun", example: "Please stop talking.", meaning: "Dừng lại", exampleMeaning: "Vui lòng dừng nói chuyện." },
    { word: "submit", ipa: "/səbˈmɪt/", type: "verb", example: "You need to submit your application online.", meaning: "Nộp", exampleMeaning: "Bạn cần nộp đơn của mình trực tuyến." },
    { word: "suggestion", ipa: "/səɡˈdʒɛstʃən/", type: "noun", example: "Her suggestion was very helpful.", meaning: "Gợi ý", exampleMeaning: "Gợi ý của cô ấy rất hữu ích." },
    { word: "supervisor", ipa: "/ˈsuːpərvaɪzər/", type: "noun", example: "The supervisor oversees the team.", meaning: "Người giám sát", exampleMeaning: "Người giám sát quản lý đội ngũ." },
    { word: "supply", ipa: "/səˈplaɪ/", type: "verb/noun", example: "We need to supply more materials.", meaning: "Cung cấp, nguồn cung", exampleMeaning: "Chúng tôi cần cung cấp thêm vật liệu." },
    { word: "suppose", ipa: "/səˈpoʊz/", type: "verb", example: "I suppose you’re right.", meaning: "Giả định, cho rằng", exampleMeaning: "Tôi cho rằng bạn đúng." },
    { word: "survey", ipa: "/ˈsɜːrveɪ/", type: "noun/verb", example: "They conducted a survey on customer satisfaction.", meaning: "Khảo sát", exampleMeaning: "Họ đã thực hiện một cuộc khảo sát về sự hài lòng của khách hàng." },
    { word: "system", ipa: "/ˈsɪstəm/", type: "noun", example: "The new system improves efficiency.", meaning: "Hệ thống", exampleMeaning: "Hệ thống mới cải thiện hiệu suất." },
    { word: "take over", ipa: "/teɪk ˈoʊvər/", type: "verb", example: "She will take over the project next month.", meaning: "Tiếp quản", exampleMeaning: "Cô ấy sẽ tiếp quản dự án vào tháng tới." },
    { word: "take", ipa: "/teɪk/", type: "verb", example: "Can you take this to the office?", meaning: "Lấy, mang", exampleMeaning: "Bạn có thể mang cái này đến văn phòng không?" },
    { word: "talk", ipa: "/tɔːk/", type: "verb/noun", example: "Let’s talk about your plans.", meaning: "Nói chuyện", exampleMeaning: "Hãy nói về kế hoạch của bạn." },
    { word: "taxi", ipa: "/ˈtæksi/", type: "noun", example: "We took a taxi to the airport.", meaning: "Xe taxi", exampleMeaning: "Chúng tôi đã đi taxi đến sân bay." },
    { word: "tea", ipa: "/tiː/", type: "noun", example: "I prefer tea over coffee.", meaning: "Trà", exampleMeaning: "Tôi thích trà hơn cà phê." },
    { word: "technician", ipa: "/tɛkˈnɪʃən/", type: "noun", example: "The technician fixed the computer.", meaning: "Kỹ thuật viên", exampleMeaning: "Kỹ thuật viên đã sửa máy tính." },
    { word: "thank you", ipa: "/θæŋk juː/", type: "phrase", example: "Thank you for your help.", meaning: "Cảm ơn bạn", exampleMeaning: "Cảm ơn bạn vì sự giúp đỡ của bạn." },
    { word: "think", ipa: "/θɪŋk/", type: "verb", example: "I think it’s a good idea.", meaning: "Nghĩ, suy nghĩ", exampleMeaning: "Tôi nghĩ đó là một ý tưởng hay." },
    { word: "ticket", ipa: "/ˈtɪkɪt/", type: "noun", example: "I bought a ticket for the concert.", meaning: "Vé", exampleMeaning: "Tôi đã mua một vé cho buổi hòa nhạc." },
    { word: "time", ipa: "/taɪm/", type: "noun", example: "We don’t have much time left.", meaning: "Thời gian", exampleMeaning: "Chúng tôi không còn nhiều thời gian nữa." },
    { word: "today", ipa: "/təˈdeɪ/", type: "adverb/noun", example: "What are you doing today?", meaning: "Hôm nay", exampleMeaning: "Hôm nay bạn đang làm gì?" },
    { word: "topic", ipa: "/ˈtɒpɪk/", type: "noun", example: "The topic of the meeting is budget cuts.", meaning: "Chủ đề", exampleMeaning: "Chủ đề của cuộc họp là cắt giảm ngân sách." },
    { word: "traffic", ipa: "/ˈtræfɪk/", type: "noun", example: "There’s heavy traffic on the highway.", meaning: "Giao thông", exampleMeaning: "Có giao thông đông đúc trên đường cao tốc." },
    { word: "train", ipa: "/treɪn/", type: "noun/verb", example: "We took the train to the city.", meaning: "Tàu hỏa, huấn luyện", exampleMeaning: "Chúng tôi đã đi tàu hỏa đến thành phố." },
    { word: "travel", ipa: "/ˈtrævəl/", type: "verb/noun", example: "She loves to travel abroad.", meaning: "Du lịch", exampleMeaning: "Cô ấy yêu thích du lịch nước ngoài." },
    { word: "trip", ipa: "/trɪp/", type: "noun", example: "We’re planning a trip to the mountains.", meaning: "Chuyến đi", exampleMeaning: "Chúng tôi đang lên kế hoạch cho một chuyến đi đến núi." },
    { word: "trouble", ipa: "/ˈtrʌbəl/", type: "noun", example: "He’s having trouble with his computer.", meaning: "Rắc rối, phiền hà", exampleMeaning: "Anh ấy đang gặp rắc rối với máy tính của mình." },
    { word: "turn", ipa: "/tɜːrn/", type: "verb/noun", example: "Please turn off the lights.", meaning: "Xoay, quay, lượt", exampleMeaning: "Vui lòng tắt đèn đi." },
    { word: "type", ipa: "/taɪp/", type: "noun/verb", example: "What type of car do you drive?", meaning: "Loại, gõ", exampleMeaning: "Bạn lái loại xe gì?" },
    { word: "umbrella", ipa: "/ʌmˈbrɛlə/", type: "noun", example: "Don’t forget your umbrella; it might rain.", meaning: "Ô", exampleMeaning: "Đừng quên ô của bạn; trời có thể mưa." },
    { word: "upgrade", ipa: "/ˈʌpɡreɪd/", type: "verb/noun", example: "They upgraded their software last month.", meaning: "Nâng cấp", exampleMeaning: "Họ đã nâng cấp phần mềm của mình vào tháng trước." },
    { word: "vacation", ipa: "/vəˈkeɪʃən/", type: "noun", example: "We’re going on vacation next week.", meaning: "Kỳ nghỉ", exampleMeaning: "Chúng tôi sẽ đi nghỉ vào tuần tới." },
    { word: "warm", ipa: "/wɔːrm/", type: "adjective", example: "It’s warm inside the house.", meaning: "Ấm áp", exampleMeaning: "Trong nhà rất ấm áp." },
    { word: "way", ipa: "/weɪ/", type: "noun/adverb", example: "This is the best way to solve the problem.", meaning: "Cách, đường", exampleMeaning: "Đây là cách tốt nhất để giải quyết vấn đề." },
    { word: "weekend", ipa: "/ˈwiːkɛnd/", type: "noun", example: "We’re going hiking this weekend.", meaning: "Cuối tuần", exampleMeaning: "Chúng tôi sẽ đi hiking vào cuối tuần này." },
    { word: "work", ipa: "/wɜːrk/", type: "noun/verb", example: "I have a lot of work to do.", meaning: "Công việc", exampleMeaning: "Tôi có rất nhiều công việc phải làm." },
    { word: "working", ipa: "/ˈwɜːrkɪŋ/", type: "adjective/verb", example: "The working conditions are excellent.", meaning: "Làm việc, đang làm việc", exampleMeaning: "Điều kiện làm việc rất tuyệt vời." },
    { word: "workshop", ipa: "/ˈwɜːrkʃɒp/", type: "noun", example: "The workshop will teach basic coding skills.", meaning: "Hội thảo, xưởng", exampleMeaning: "Hội thảo sẽ dạy các kỹ năng lập trình cơ bản." },
    { word: "you", ipa: "/juː/", type: "pronoun", example: "You can do it!", meaning: "Bạn", exampleMeaning: "Bạn có thể làm được!" },
    { word: "construction", ipa: "/kənˈstrʌkʃən/", type: "noun", example: "The construction of the bridge took two years.", meaning: "Xây dựng", exampleMeaning: "Việc xây dựng cây cầu mất hai năm." },
    { word: "convention", ipa: "/kənˈvɛnʃən/", type: "noun", example: "The convention attracted thousands of people.", meaning: "Hội nghị, đại hội", exampleMeaning: "Đại hội đã thu hút hàng nghìn người." },
    { word: "copy", ipa: "/ˈkɒpi/", type: "noun/verb", example: "Can you make a copy of this document?", meaning: "Bản sao, sao chép", exampleMeaning: "Bạn có thể sao chép tài liệu này không?" },
    { word: "correct", ipa: "/kəˈrɛkt/", type: "adjective/verb", example: "Is this answer correct?", meaning: "Đúng, sửa lại", exampleMeaning: "Câu trả lời này có đúng không?" },
    { word: "cost", ipa: "/kɔːst/", type: "noun/verb", example: "The cost of the trip was high.", meaning: "Chi phí", exampleMeaning: "Chi phí của chuyến đi rất cao." },
    { word: "country", ipa: "/ˈkʌntri/", type: "noun", example: "She lives in a small country town.", meaning: "Quốc gia, vùng quê", exampleMeaning: "Cô ấy sống ở một thị trấn nhỏ ở vùng quê." },
    { word: "course", ipa: "/kɔːrs/", type: "noun", example: "I’m taking a cooking course this summer.", meaning: "Khóa học, lộ trình", exampleMeaning: "Tôi đang tham gia một khóa học nấu ăn mùa hè này." },
    { word: "cover", ipa: "/ˈkʌvər/", type: "verb/noun", example: "The book cover is very colorful.", meaning: "Che phủ, bìa", exampleMeaning: "Bìa sách rất sặc sỡ." },
    { word: "customer", ipa: "/ˈkʌstəmər/", type: "noun", example: "The customer complained about the service.", meaning: "Khách hàng", exampleMeaning: "Khách hàng phàn nàn về dịch vụ." },
    { word: "date", ipa: "/deɪt/", type: "noun/verb", example: "What’s the date today?", meaning: "Ngày, hẹn hò", exampleMeaning: "Hôm nay là ngày bao nhiêu?" },
    { word: "deadline", ipa: "/ˈdɛdlaɪn/", type: "noun", example: "The project deadline is next Friday.", meaning: "Hạn chót", exampleMeaning: "Hạn chót của dự án là thứ Sáu tới." },
    { word: "decision", ipa: "/dɪˈsɪʒən/", type: "noun", example: "We made a decision to move forward.", meaning: "Quyết định", exampleMeaning: "Chúng tôi đã đưa ra quyết định tiến lên." },
    { word: "decrease", ipa: "/dɪˈkriːs/", type: "verb/noun", example: "The temperature will decrease later.", meaning: "Giảm, sự giảm", exampleMeaning: "Nhiệt độ sẽ giảm vào sau này." },
    { word: "deliver", ipa: "/dɪˈlɪvər/", type: "verb", example: "The package was delivered yesterday.", meaning: "Giao hàng", exampleMeaning: "Gói hàng đã được giao hôm qua." },
    { word: "demand", ipa: "/dɪˈmænd/", type: "noun/verb", example: "There is a high demand for electric cars.", meaning: "Nhu cầu, đòi hỏi", exampleMeaning: "Có nhu cầu lớn về xe điện." },
    { word: "department", ipa: "/dɪˈpɑːrtmənt/", type: "noun", example: "She works in the marketing department.", meaning: "Bộ phận, phòng ban", exampleMeaning: "Cô ấy làm việc ở bộ phận tiếp thị." },
    { word: "destination", ipa: "/ˌdɛstɪˈneɪʃən/", type: "noun", example: "Paris is our destination for the trip.", meaning: "Điểm đến", exampleMeaning: "Paris là điểm đến của chuyến đi của chúng tôi." },
    { word: "develop", ipa: "/dɪˈvɛləp/", type: "verb", example: "The company is developing a new product.", meaning: "Phát triển", exampleMeaning: "Công ty đang phát triển một sản phẩm mới." },
    { word: "direct", ipa: "/dɪˈrɛkt/", type: "adjective/verb", example: "He gave me direct instructions.", meaning: "Trực tiếp, chỉ đạo", exampleMeaning: "Anh ấy đã đưa cho tôi các hướng dẫn trực tiếp." },
    { word: "discussion", ipa: "/dɪˈskʌʃən/", type: "noun", example: "We had a long discussion about the project.", meaning: "Thảo luận", exampleMeaning: "Chúng tôi đã có một cuộc thảo luận dài về dự án." },
    { word: "distribute", ipa: "/dɪˈstrɪbjuːt/", type: "verb", example: "They distributed flyers in the neighborhood.", meaning: "Phân phối, phát", exampleMeaning: "Họ đã phát tờ rơi trong khu dân cư." },
    { word: "do", ipa: "/duː/", type: "verb", example: "I need to do my homework.", meaning: "Làm", exampleMeaning: "Tôi cần làm bài tập về nhà." },
    { word: "document", ipa: "/ˈdɒkjumənt/", type: "noun", example: "Please bring the document to the meeting.", meaning: "Tài liệu", exampleMeaning: "Vui lòng mang tài liệu đến cuộc họp." },
    { word: "done", ipa: "/dʌn/", type: "verb", example: "The work is done.", meaning: "Hoàn thành", exampleMeaning: "Công việc đã hoàn thành." },
    { word: "don’t", ipa: "/doʊnt/", type: "contraction", example: "Don’t forget to call me.", meaning: "Đừng", exampleMeaning: "Đừng quên gọi cho tôi." },
    { word: "drive", ipa: "/draɪv/", type: "verb/noun", example: "He likes to drive fast cars.", meaning: "Lái xe, sự thúc đẩy", exampleMeaning: "Anh ấy thích lái xe hơi nhanh." },
    { word: "due", ipa: "/duː/", type: "adjective", example: "The payment is due tomorrow.", meaning: "Đến hạn", exampleMeaning: "Thanh toán đến hạn vào ngày mai." },
    { word: "each other", ipa: "/iːtʃ ˈʌðər/", type: "pronoun", example: "They help each other with their work.", meaning: "Nhau", exampleMeaning: "Họ giúp đỡ lẫn nhau trong công việc." },
    { word: "early", ipa: "/ˈɜːrli/", type: "adverb/adjective", example: "We arrived early for the movie.", meaning: "Sớm", exampleMeaning: "Chúng tôi đến sớm cho buổi chiếu phim." },
    { word: "edit", ipa: "/ˈɛdɪt/", type: "verb", example: "She edited the article before publishing.", meaning: "Sửa đổi, biên tập", exampleMeaning: "Cô ấy đã chỉnh sửa bài viết trước khi xuất bản." },
    { word: "efficient", ipa: "/ɪˈfɪʃənt/", type: "adjective", example: "The new system is very efficient.", meaning: "Hiệu quả", exampleMeaning: "Hệ thống mới rất hiệu quả." },
    { word: "email", ipa: "/ˈiːmeɪl/", type: "noun/verb", example: "I sent you an email yesterday.", meaning: "Email", exampleMeaning: "Tôi đã gửi cho bạn một email hôm qua." },
    { word: "engine", ipa: "/ˈɛndʒɪn/", type: "noun", example: "The engine of the car needs repair.", meaning: "Động cơ", exampleMeaning: "Động cơ của xe cần được sửa chữa." },
    { word: "estimated", ipa: "/ˈɛstɪmeɪtɪd/", type: "adjective", example: "The estimated cost is $500.", meaning: "Ước tính", exampleMeaning: "Chi phí ước tính là 500 đô la." },
    { word: "exhibition", ipa: "/ˌɛksɪˈbɪʃən/", type: "noun", example: "The art exhibition attracted many visitors.", meaning: "Triển lãm", exampleMeaning: "Triển lãm nghệ thuật đã thu hút nhiều khách tham quan." },
    { word: "expand", ipa: "/ɪkˈspænd/", type: "verb", example: "The company plans to expand overseas.", meaning: "Mở rộng", exampleMeaning: "Công ty dự định mở rộng ra nước ngoài." },
    { word: "extend", ipa: "/ɪkˈstɛnd/", type: "verb", example: "They extended the deadline by one week.", meaning: "Kéo dài", exampleMeaning: "Họ đã kéo dài hạn chót thêm một tuần." },
    { word: "facing", ipa: "/ˈfeɪsɪŋ/", type: "verb/adjective", example: "The building is facing the park.", meaning: "Đối diện, đối mặt", exampleMeaning: "Tòa nhà đối diện với công viên." },
    { word: "fan", ipa: "/fæn/", type: "noun", example: "The fan keeps the room cool.", meaning: "Quạt, người hâm mộ", exampleMeaning: "Cái quạt giữ cho phòng mát mẻ." },
    { word: "fax", ipa: "/fæks/", type: "noun/verb", example: "Please fax the document to the office.", meaning: "Fax, gửi fax", exampleMeaning: "Vui lòng fax tài liệu đến văn phòng." },
    { word: "fill", ipa: "/fɪl/", type: "verb", example: "Can you fill this form out?", meaning: "Điền, lấp đầy", exampleMeaning: "Bạn có thể điền vào mẫu này không?" },
    { word: "finding", ipa: "/ˈfaɪndɪŋ/", type: "noun", example: "The finding surprised the researchers.", meaning: "Sự khám phá, phát hiện", exampleMeaning: "Phát hiện đã làm ngạc nhiên các nhà nghiên cứu." },
    { word: "finished", ipa: "/ˈfɪnɪʃt/", type: "adjective", example: "The project is finished on time.", meaning: "Hoàn thành", exampleMeaning: "Dự án đã hoàn thành đúng hạn." },
    { word: "fix", ipa: "/fɪks/", type: "verb", example: "He fixed the broken chair.", meaning: "Sửa chữa", exampleMeaning: "Anh ấy đã sửa chiếc ghế bị hỏng." },
    { word: "flight", ipa: "/flaɪt/", type: "noun", example: "Our flight leaves at 8 AM.", meaning: "Chuyến bay", exampleMeaning: "Chuyến bay của chúng tôi cất cánh lúc 8 giờ sáng." },
    { word: "follow", ipa: "/ˈfɒloʊ/", type: "verb", example: "Please follow the instructions carefully.", meaning: "Theo sau, làm theo", exampleMeaning: "Vui lòng làm theo hướng dẫn cẩn thận." },
    { word: "forecast", ipa: "/ˈfɔːrkæst/", type: "noun/verb", example: "The weather forecast predicts rain.", meaning: "Dự báo", exampleMeaning: "Dự báo thời tiết dự đoán có mưa." },
    { word: "form", ipa: "/fɔːrm/", type: "noun/verb", example: "Fill out this form to apply.", meaning: "Biểu mẫu, hình dạng", exampleMeaning: "Điền vào biểu mẫu này để nộp đơn." },
    { word: "free", ipa: "/friː/", type: "adjective", example: "This service is free of charge.", meaning: "Miễn phí, tự do", exampleMeaning: "Dịch vụ này miễn phí." },
    { word: "friday", ipa: "/ˈfraɪdeɪ/", type: "noun", example: "The meeting is scheduled for Friday.", meaning: "Thứ Sáu", exampleMeaning: "Cuộc họp được lên lịch vào Thứ Sáu." },
    { word: "get", ipa: "/ɡɛt/", type: "verb", example: "I need to get some groceries.", meaning: "Lấy, nhận", exampleMeaning: "Tôi cần đi lấy một số thực phẩm." },
    { word: "go", ipa: "/ɡoʊ/", type: "verb", example: "Let’s go to the park.", meaning: "Đi", exampleMeaning: "Hãy đi công viên." },
    { word: "gone", ipa: "/ɡɒn/", type: "verb", example: "She has gone to the store.", meaning: "Đã đi", exampleMeaning: "Cô ấy đã đi đến cửa hàng." },
    { word: "guideline", ipa: "/ˈɡaɪdlaɪn/", type: "noun", example: "Follow the guidelines for safety.", meaning: "Hướng dẫn", exampleMeaning: "Tuân theo hướng dẫn để đảm bảo an toàn." },
    { word: "hair cut", ipa: "/hɛr kʌt/", type: "noun", example: "I need a haircut before the party.", meaning: "Cắt tóc", exampleMeaning: "Tôi cần cắt tóc trước bữa tiệc." },
    { word: "hanging", ipa: "/ˈhæŋɪŋ/", type: "verb/adjective", example: "The picture is hanging on the wall.", meaning: "Treo, đang treo", exampleMeaning: "Bức tranh đang treo trên tường." },
    { word: "hard", ipa: "/hɑːrd/", type: "adjective", example: "This test is very hard.", meaning: "Khó, cứng", exampleMeaning: "Bài kiểm tra này rất khó." },
    { word: "held", ipa: "/hɛld/", type: "verb", example: "The event was held last weekend.", meaning: "Được tổ chức", exampleMeaning: "Sự kiện đã được tổ chức cuối tuần trước." },
    { word: "help", ipa: "/hɛlp/", type: "verb/noun", example: "Can you help me with this task?", meaning: "Giúp đỡ", exampleMeaning: "Bạn có thể giúp tôi với công việc này không?" },
    { word: "helpful", ipa: "/ˈhɛlpfəl/", type: "adjective", example: "Her advice was very helpful.", meaning: "Hữu ích", exampleMeaning: "Lời khuyên của cô ấy rất hữu ích." },
    { word: "here", ipa: "/hɪr/", type: "adverb", example: "I am here to help you.", meaning: "Ở đây", exampleMeaning: "Tôi ở đây để giúp bạn." },
    { word: "hire", ipa: "/haɪər/", type: "verb", example: "They decided to hire a new manager.", meaning: "Thuê, mướn", exampleMeaning: "Họ quyết định thuê một người quản lý mới." },
    { word: "hope", ipa: "/hoʊp/", type: "verb/noun", example: "I hope it doesn’t rain today.", meaning: "Hy vọng", exampleMeaning: "Tôi hy vọng hôm nay không mưa." },
    { word: "hot", ipa: "/hɒt/", type: "adjective", example: "It’s very hot outside.", meaning: "Nóng", exampleMeaning: "Bên ngoài rất nóng." },
    { word: "idea", ipa: "/aɪˈdiːə/", type: "noun", example: "She had a great idea for the project.", meaning: "Ý tưởng", exampleMeaning: "Cô ấy có một ý tưởng tuyệt vời cho dự án." },
    { word: "if", ipa: "/ɪf/", type: "conjunction", example: "I’ll go if it doesn’t rain.", meaning: "Nếu", exampleMeaning: "Tôi sẽ đi nếu trời không mưa." },
    { word: "in time", ipa: "/ɪn taɪm/", type: "adverb", example: "We arrived in time for the movie.", meaning: "Đúng giờ", exampleMeaning: "Chúng tôi đến đúng giờ cho buổi chiếu phim." },
    { word: "in-charge", ipa: "/ɪn tʃɑːrdʒ/", type: "noun/adjective", example: "She is in charge of the project.", meaning: "Phụ trách", exampleMeaning: "Cô ấy phụ trách dự án." },
    { word: "indoor", ipa: "/ˈɪndɔːr/", type: "adjective", example: "The event will be held indoor due to rain.", meaning: "Trong nhà", exampleMeaning: "Sự kiện sẽ được tổ chức trong nhà do trời mưa." },
    { word: "informative", ipa: "/ɪnˈfɔːrmətɪv/", type: "adjective", example: "The presentation was very informative.", meaning: "Hữu ích, cung cấp thông tin", exampleMeaning: "Bài thuyết trình rất hữu ích." },
    { word: "ink", ipa: "/ɪŋk/", type: "noun", example: "The pen ran out of ink.", meaning: "Mực", exampleMeaning: "Cây bút hết mực rồi." },
    { word: "instruction", ipa: "/ɪnˈstrʌkʃən/", type: "noun", example: "Follow the instructions carefully.", meaning: "Hướng dẫn", exampleMeaning: "Làm theo hướng dẫn cẩn thận." },
    { word: "absence", ipa: "/ˈæbsəns/", type: "noun", example: "His absence from the meeting was noticeable.", meaning: "sự vắng mặt", exampleMeaning: "Sự vắng mặt của anh ấy trong cuộc họp rất dễ nhận thấy." },
    { word: "addressing", ipa: "/əˈdrɛsɪŋ/", type: "verb", example: "She is addressing the issue in her speech.", meaning: "giải quyết", exampleMeaning: "Cô ấy đang giải quyết vấn đề trong bài phát biểu của mình." },
    { word: "agency", ipa: "/ˈeɪdʒənsi/", type: "noun", example: "The travel agency arranged our trip.", meaning: "cơ quan", exampleMeaning: "Cơ quan du lịch đã sắp xếp chuyến đi của chúng tôi." },
    { word: "aircraft", ipa: "/ˈɛərkræft/", type: "noun", example: "The aircraft landed safely at the airport.", meaning: "máy bay", exampleMeaning: "Chiếc máy bay đã hạ cánh an toàn tại sân bay." },
    { word: "angry", ipa: "/ˈæŋɡri/", type: "adjective", example: "He was angry after the argument.", meaning: "tức giận", exampleMeaning: "Anh ấy đã tức giận sau cuộc tranh luận." },
    { word: "anticipate", ipa: "/ænˈtɪsɪpeɪt/", type: "verb", example: "We anticipate a busy day tomorrow.", meaning: "dự đoán", exampleMeaning: "Chúng tôi dự đoán ngày mai sẽ bận rộn." },
    { word: "appearance", ipa: "/əˈpɪrəns/", type: "noun", example: "Her appearance at the event surprised everyone.", meaning: "ngoại hình, hình dáng", exampleMeaning: "Sự xuất hiện của cô ấy tại sự kiện khiến mọi người ngạc nhiên." },
    { word: "applaud", ipa: "/əˈplɔːd/", type: "verb", example: "The audience applauded the performance.", meaning: "tán thưởng", exampleMeaning: "Khán giả đã tán thưởng màn trình diễn." },
    { word: "application", ipa: "/ˌæplɪˈkeɪʃən/", type: "noun", example: "He submitted his application for the job.", meaning: "hồ sơ xin việc", exampleMeaning: "Anh ấy đã nộp hồ sơ xin việc." },
    { word: "appointment", ipa: "/əˈpɔɪntmənt/", type: "noun", example: "I have an appointment with the doctor at 3 PM.", meaning: "cuộc hẹn", exampleMeaning: "Tôi có cuộc hẹn với bác sĩ lúc 3 giờ chiều." },
    { word: "appreciate", ipa: "/əˈpriːʃieɪt/", type: "verb", example: "I appreciate your help with the project.", meaning: "cảm kích", exampleMeaning: "Tôi cảm kích sự giúp đỡ của bạn với dự án." },
    { word: "arch", ipa: "/ɑːrtʃ/", type: "noun", example: "The bridge has a beautiful stone arch.", meaning: "vòm", exampleMeaning: "Cây cầu có một vòm đá đẹp." },
    { word: "archway", ipa: "/ˈɑːrtʃweɪ/", type: "noun", example: "We walked through the archway into the garden.", meaning: "lối đi có mái vòm", exampleMeaning: "Chúng tôi đi qua lối đi có mái vòm vào khu vườn." },
    { word: "arm", ipa: "/ɑːrm/", type: "noun", example: "He raised his arm to wave goodbye.", meaning: "cánh tay", exampleMeaning: "Anh ấy giơ cánh tay để vẫy chào tạm biệt." },
    { word: "article", ipa: "/ˈɑːrtɪkəl/", type: "noun", example: "She wrote an article for the newspaper.", meaning: "bài báo", exampleMeaning: "Cô ấy đã viết một bài báo cho tờ báo." },
    { word: "athlete", ipa: "/ˈæθliːt/", type: "noun", example: "The athlete won a gold medal in the race.", meaning: "vận động viên", exampleMeaning: "Vận động viên đã giành huy chương vàng trong cuộc đua." },
    { word: "attire", ipa: "/əˈtaɪər/", type: "noun", example: "Her formal attire impressed the guests.", meaning: "trang phục", exampleMeaning: "Trang phục trang trọng của cô ấy đã gây ấn tượng với khách mời." },
    { word: "audience", ipa: "/ˈɔːdiəns/", type: "noun", example: "The audience cheered loudly during the concert.", meaning: "khán giả", exampleMeaning: "Khán giả đã reo hò vang dội trong buổi hòa nhạc." },
    { word: "automobile", ipa: "/ˈɔːtəmoʊbiːl/", type: "noun", example: "He drives a luxurious automobile.", meaning: "xe hơi", exampleMeaning: "Anh ấy lái một chiếc xe hơi sang trọng." },
    { word: "bag", ipa: "/bæɡ/", type: "noun", example: "She carried her books in a bag.", meaning: "túi", exampleMeaning: "Cô ấy mang sách của mình trong một cái túi." },
    { word: "basket", ipa: "/ˈbæskɪt/", type: "noun", example: "He put the apples in a basket.", meaning: "giõ, rổ", exampleMeaning: "Anh ấy đặt táo vào một cái rổ." },
    { word: "bedroom", ipa: "/ˈbɛdruːm/", type: "noun", example: "The bedroom is painted in soft blue.", meaning: "phòng ngủ", exampleMeaning: "Phòng ngủ được sơn màu xanh nhạt." },
    { word: "belt", ipa: "/bɛlt/", type: "noun", example: "He wore a leather belt with his jeans.", meaning: "thắt lưng, dây nịt", exampleMeaning: "Anh ấy đeo một dây lưng da với quần jeans của mình." },
    { word: "bicycle", ipa: "/ˈbaɪsɪkəl/", type: "noun", example: "She rides her bicycle to work every day.", meaning: "xe đạp", exampleMeaning: "Cô ấy đạp xe đạp đến chỗ làm mỗi ngày." },
    { word: "bin", ipa: "/bɪn/", type: "noun", example: "Throw the trash in the bin.", meaning: "thùng rác", exampleMeaning: "Ném rác vào thùng rác." },
    { word: "bloom", ipa: "/bluːm/", type: "verb/noun", example: "The flowers bloom in spring.", meaning: "nở", exampleMeaning: "Những bông hoa nở vào mùa xuân." },
    { word: "blueprint", ipa: "/ˈbluːprɪnt/", type: "noun", example: "The architect drew a blueprint for the house.", meaning: "bản thiết kế mẫu", exampleMeaning: "Kiến trúc sư đã vẽ một bản thiết kế mẫu cho ngôi nhà." },
    { word: "boardroom", ipa: "/ˈbɔːrdruːm/", type: "noun", example: "The meeting was held in the boardroom.", meaning: "phòng họp ban giám đốc", exampleMeaning: "Cuộc họp được tổ chức trong phòng họp ban giám đốc." },
    { word: "break", ipa: "/breɪk/", type: "verb/noun", example: "Let’s take a break during the meeting.", meaning: "vỡ, nghỉ giải lao", exampleMeaning: "Hãy nghỉ giải lao trong cuộc họp." },
    { word: "brick", ipa: "/brɪk/", type: "noun", example: "The house is built with red bricks.", meaning: "gạch", exampleMeaning: "Ngôi nhà được xây bằng gạch đỏ." },
    { word: "bridge", ipa: "/brɪdʒ/", type: "noun", example: "The bridge spans the river.", meaning: "cầu", exampleMeaning: "Cây cầu bắc qua sông." },
    { word: "briefcase", ipa: "/ˈbriːfkeɪs/", type: "noun", example: "He carried his documents in a briefcase.", meaning: "cặp tài liệu, cặp hồ sơ", exampleMeaning: "Anh ấy mang tài liệu của mình trong một cái cặp hồ sơ." },
    { word: "broadcaster", ipa: "/ˈbrɔːdkæstər/", type: "noun", example: "The broadcaster announced the news on TV.", meaning: "người phát thanh, phát thanh viên", exampleMeaning: "Người phát thanh đã công bố tin tức trên TV." },
    { word: "brochure", ipa: "/ˈbroʊʃər/", type: "noun", example: "She picked up a brochure about the hotel.", meaning: "sách hướng dẫn", exampleMeaning: "Cô ấy đã lấy một cuốn sách hướng dẫn về khách sạn." },
    { word: "build", ipa: "/bɪld/", type: "verb", example: "They are building a new school.", meaning: "xây dựng", exampleMeaning: "Họ đang xây dựng một trường học mới." },
    { word: "bush", ipa: "/bʊʃ/", type: "noun", example: "The rabbit hid in the bush.", meaning: "bụi cây", exampleMeaning: "Con thỏ ẩn mình trong bụi cây." },
    { word: "cable", ipa: "/ˈkeɪbəl/", type: "noun", example: "The cable connects the computer to the monitor.", meaning: "dây cáp, cáp treo", exampleMeaning: "Dây cáp kết nối máy tính với màn hình." },
    { word: "call", ipa: "/kɔːl/", type: "verb/noun", example: "I’ll call you later today.", meaning: "gọi", exampleMeaning: "Tôi sẽ gọi bạn vào hôm nay sau." },
    { word: "cancel", ipa: "/ˈkænsəl/", type: "verb", example: "They canceled the meeting due to bad weather.", meaning: "hủy", exampleMeaning: "Họ đã hủy cuộc họp do thời tiết xấu." },
    { word: "cancellation", ipa: "/ˌkænsəˈleɪʃən/", type: "noun", example: "The cancellation of the flight upset many passengers.", meaning: "sự hủy bỏ", exampleMeaning: "Sự hủy bỏ chuyến bay làm nhiều hành khách thất vọng." },
    { word: "cap", ipa: "/kæp/", type: "noun", example: "He wore a baseball cap to the game.", meaning: "nón (mũ lưỡi trai)", exampleMeaning: "Anh ấy đội một chiếc mũ lưỡi trai đến trận đấu." },
    { word: "careful", ipa: "/ˈkɛrfəl/", type: "adjective", example: "Be careful when crossing the street.", meaning: "cẩn thận", exampleMeaning: "Hãy cẩn thận khi qua đường." },
    { word: "carry", ipa: "/ˈkɛri/", type: "verb", example: "She carried the groceries home.", meaning: "mang", exampleMeaning: "Cô ấy mang đồ tạp hóa về nhà." },
    { word: "cashier", ipa: "/kæˈʃɪr/", type: "noun", example: "The cashier scanned my items at the store.", meaning: "thu ngân", exampleMeaning: "Nhân viên thu ngân đã quét các mặt hàng của tôi tại cửa hàng." },
    { word: "casually", ipa: "/ˈkæʒuəli/", type: "adverb", example: "He dressed casually for the party.", meaning: "thình thoảng", exampleMeaning: "Anh ấy ăn mặc thoải mái cho buổi tiệc." },
    { word: "change", ipa: "/tʃeɪndʒ/", type: "verb/noun", example: "I need to change my plans for tomorrow.", meaning: "thay đổi", exampleMeaning: "Tôi cần thay đổi kế hoạch cho ngày mai." },
    { word: "check", ipa: "/tʃɛk/", type: "verb/noun", example: "Please check your email for updates.", meaning: "kiểm tra", exampleMeaning: "Vui lòng kiểm tra email để cập nhật thông tin." },
    { word: "checking", ipa: "/ˈtʃɛkɪŋ/", type: "verb", example: "She is checking the documents for errors.", meaning: "kiểm tra", exampleMeaning: "Cô ấy đang kiểm tra tài liệu để tìm lỗi." },
    { word: "childhood", ipa: "/ˈtʃaɪldhʊd/", type: "noun", example: "He had a happy childhood in the countryside.", meaning: "thời thơ ấu", exampleMeaning: "Anh ấy có một tuổi thơ hạnh phúc ở vùng quê." },
    { word: "clap", ipa: "/klæp/", type: "verb/noun", example: "The audience clapped after the performance.", meaning: "vỗ tay", exampleMeaning: "Khán giả đã vỗ tay sau màn trình diễn." },
    { word: "cleaner", ipa: "/ˈkliːnər/", type: "noun", example: "The cleaner swept the floor thoroughly.", meaning: "người dọn dẹp", exampleMeaning: "Người dọn dẹp đã quét sàn nhà kỹ lưỡng." },
    { word: "client", ipa: "/ˈklaɪənt/", type: "noun", example: "The lawyer met with a new client today.", meaning: "khách hàng", exampleMeaning: "Luật sư đã gặp một khách hàng mới hôm nay." },
    { word: "clinic", ipa: "/ˈklɪnɪk/", type: "noun", example: "She visited the clinic for a checkup.", meaning: "phòng khám", exampleMeaning: "Cô ấy đã đến phòng khám để kiểm tra sức khỏe." },
    { word: "close", ipa: "/kloʊz/", type: "verb/adjective", example: "Please close the door before leaving.", meaning: "đóng/(adj) gần", exampleMeaning: "Vui lòng đóng cửa trước khi rời đi." },
    { word: "coat", ipa: "/koʊt/", type: "noun", example: "He wore a warm coat in the winter.", meaning: "áo khoác", exampleMeaning: "Anh ấy mặc một chiếc áo khoác ấm vào mùa đông." },
    { word: "coffee", ipa: "/ˈkɔːfi/", type: "noun", example: "I drink coffee every morning.", meaning: "cà phê", exampleMeaning: "Tôi uống cà phê mỗi sáng." },
    { word: "committee", ipa: "/kəˈmɪti/", type: "noun", example: "The committee met to discuss the budget.", meaning: "ủy ban, hội đồng", exampleMeaning: "Ủy ban đã họp để thảo luận về ngân sách." },
    { word: "complete", ipa: "/kəmˈpliːt/", type: "verb/adjective", example: "She completed the project on time.", meaning: "hoàn thành", exampleMeaning: "Cô ấy đã hoàn thành dự án đúng hạn." },
    { word: "compliment", ipa: "/ˈkɒmplɪmənt/", type: "noun/verb", example: "He paid her a compliment on her dress.", meaning: "khen ngợi", exampleMeaning: "Anh ấy đã khen ngợi chiếc váy của cô ấy." },
    { word: "concrete", ipa: "/ˈkɒnkriːt/", type: "noun/adjective", example: "The sidewalk is made of concrete.", meaning: "bê tông", exampleMeaning: "Vỉa hè được làm bằng bê tông." },
    { word: "conference", ipa: "/ˈkɒnfərəns/", type: "noun", example: "The conference will be held online next month.", meaning: "hội nghị", exampleMeaning: "Hội nghị sẽ được tổ chức trực tuyến vào tháng tới." },
    { word: "confirm", ipa: "/kənˈfɜːrm/", type: "verb", example: "Please confirm your attendance by tomorrow.", meaning: "xác nhận", exampleMeaning: "Vui lòng xác nhận sự tham dự của bạn trước ngày mai." },
    { word: "conflict", ipa: "/ˈkɒnflɪkt/", type: "noun/verb", example: "There was a conflict between the two teams.", meaning: "mâu thuẫn, xung đột", exampleMeaning: "Có một mâu thuẫn giữa hai đội." },
    { word: "connect", ipa: "/kəˈnɛkt/", type: "verb", example: "The cables connect the devices to the network.", meaning: "kết nối", exampleMeaning: "Các dây cáp kết nối các thiết bị với mạng." },
    
    { word: "absence", ipa: "/ˈæbsəns/", type: "noun", example: "His absence from the meeting was noticed.", meaning: "sự vắng mặt", exampleMeaning: "Sự vắng mặt của anh ấy trong cuộc họp đã được chú ý." },
    { word: "addressing", ipa: "/əˈdrɛsɪŋ/", type: "verb", example: "She is addressing the issue with the team.", meaning: "giải quyết", exampleMeaning: "Cô ấy đang giải quyết vấn đề với đội ngũ." },
    { word: "agency", ipa: "/ˈeɪdʒənsi/", type: "noun", example: "The travel agency arranged our trip.", meaning: "cơ quan", exampleMeaning: "Cơ quan du lịch đã sắp xếp chuyến đi của chúng tôi." },
    { word: "aircraft", ipa: "/ˈɛəkrɑːft/", type: "noun", example: "The aircraft took off smoothly.", meaning: "máy bay", exampleMeaning: "Chiếc máy bay cất cánh trơn tru." },
    { word: "angry", ipa: "/ˈæŋɡri/", type: "adjective", example: "He was angry about the delay.", meaning: "tức giận", exampleMeaning: "Anh ấy tức giận về sự chậm trễ." },
    { word: "anticipate", ipa: "/ænˈtɪsɪpeɪt/", type: "verb", example: "We anticipate a positive response.", meaning: "dự đoán", exampleMeaning: "Chúng tôi dự đoán một phản hồi tích cực." },
    { word: "appearance", ipa: "/əˈpɪərəns/", type: "noun", example: "Her appearance at the event surprised everyone.", meaning: "ngoại hình, hình dáng", exampleMeaning: "Sự xuất hiện của cô ấy tại sự kiện làm mọi người ngạc nhiên." },
    { word: "applaud", ipa: "/əˈplɔːd/", type: "verb", example: "The audience applauded the performance.", meaning: "tán thưởng", exampleMeaning: "Khán giả đã tán thưởng màn trình diễn." },
    { word: "application", ipa: "/ˌæplɪˈkeɪʃn̩/", type: "noun", example: "She submitted her application for the job.", meaning: "hồ sơ xin việc", exampleMeaning: "Cô ấy đã nộp hồ sơ xin việc." },
    { word: "appointment", ipa: "/əˈpɔɪntmənt/", type: "noun", example: "I have an appointment with the doctor at 10 AM.", meaning: "cuộc hẹn", exampleMeaning: "Tôi có cuộc hẹn với bác sĩ lúc 10 giờ sáng." },
    { word: "appreciate", ipa: "/əˈpriːʃieɪt/", type: "verb", example: "I appreciate your help very much.", meaning: "cảm kích", exampleMeaning: "Tôi rất cảm kích sự giúp đỡ của bạn." },
    { word: "arch", ipa: "/ɑːrtʃ/", type: "noun", example: "The arch of the bridge is impressive.", meaning: "vòm", exampleMeaning: "Cung vòm của cầu rất ấn tượng." },
    { word: "archway", ipa: "/ˈɑːrtʃweɪ/", type: "noun", example: "We walked through the archway into the garden.", meaning: "lối đi có vòm", exampleMeaning: "Chúng tôi đã đi qua lối đi có vòm vào vườn." },
    { word: "arm", ipa: "/ɑːrm/", type: "noun", example: "He hurt his arm while playing.", meaning: "cánh tay", exampleMeaning: "Anh ấy bị đau cánh tay khi chơi." },
    { word: "article", ipa: "/ˈɑːrtɪkl/", type: "noun", example: "She wrote an article for the magazine.", meaning: "bài báo", exampleMeaning: "Cô ấy đã viết một bài báo cho tạp chí." },
    { word: "athlete", ipa: "/ˈæθliːt/", type: "noun", example: "The athlete won a gold medal.", meaning: "vận động viên", exampleMeaning: "Vận động viên đã giành huy chương vàng." },
    { word: "attire", ipa: "/əˈtaɪər/", type: "noun", example: "The attire for the event was formal.", meaning: "trang phục", exampleMeaning: "Trang phục cho sự kiện là trang trọng." },
    { word: "audience", ipa: "/ˈɔːdiəns/", type: "noun", example: "The audience enjoyed the concert.", meaning: "khán giả", exampleMeaning: "Khán giả đã thích thú với buổi hòa nhạc." },
    { word: "automobile", ipa: "/ˈɔːtəməbiːl/", type: "noun", example: "He drives an expensive automobile.", meaning: "xe ô tô", exampleMeaning: "Anh ấy lái một chiếc ô tô đắt tiền." },
    { word: "bag", ipa: "/bæɡ/", type: "noun", example: "She packed her bag for the trip.", meaning: "túi", exampleMeaning: "Cô ấy đã đóng gói túi cho chuyến đi." },
    { word: "basket", ipa: "/ˈbɑːskɪt/", type: "noun", example: "He carried a basket of fruit.", meaning: "giỏ", exampleMeaning: "Anh ấy mang một giỏ trái cây." },
    { word: "bedroom", ipa: "/ˈbɛdruːm/", type: "noun", example: "Her bedroom is decorated with posters.", meaning: "phòng ngủ", exampleMeaning: "Phòng ngủ của cô ấy được trang trí bằng áp phích." },
    { word: "belt", ipa: "/bɛlt/", type: "noun", example: "He wore a leather belt with his suit.", meaning: "thắt lưng, dây đai", exampleMeaning: "Anh ấy đeo một chiếc thắt lưng da với bộ vest." },
    { word: "bicycle", ipa: "/ˈbaɪsɪkl/", type: "noun", example: "She rides a bicycle to work every day.", meaning: "xe đạp", exampleMeaning: "Cô ấy đạp xe đi làm mỗi ngày." },
    { word: "bin", ipa: "/bɪn/", type: "noun", example: "Throw the trash in the bin.", meaning: "thùng rác", exampleMeaning: "Ném rác vào thùng rác." },
    { word: "bloom", ipa: "/bluːm/", type: "noun", example: "The roses are in full bloom.", meaning: "nở", exampleMeaning: "Những bông hồng đang nở rộ." },
    { word: "blueprint", ipa: "/ˈbluːprɪnt/", type: "noun", example: "The architect showed us the blueprint of the house.", meaning: "bản thiết kế", exampleMeaning: "Kiến trúc sư đã cho chúng tôi xem bản thiết kế của ngôi nhà." },
    { word: "boardroom", ipa: "/ˈbɔːdruːm/", type: "noun", example: "The boardroom meeting lasted three hours.", meaning: "phòng họp ban giám đốc", exampleMeaning: "Cuộc họp trong phòng họp ban giám đốc kéo dài ba giờ." },
    { word: "break", ipa: "/breɪk/", type: "verb", example: "Don’t break the glass!", meaning: "vỡ, phá vỡ", exampleMeaning: "Đừng làm vỡ cái ly!" },
    { word: "brick", ipa: "/brɪk/", type: "noun", example: "The house is built with red bricks.", meaning: "gạch", exampleMeaning: "Ngôi nhà được xây bằng gạch đỏ." },
    { word: "bridge", ipa: "/brɪdʒ/", type: "noun", example: "The bridge over the river is very old.", meaning: "cầu", exampleMeaning: "Cây cầu trên sông rất cổ kính." },
    { word: "briefcase", ipa: "/ˈbriːfkeɪs/", type: "noun", example: "He carried important documents in his briefcase.", meaning: "cặp tài liệu, cặp hồ sơ", exampleMeaning: "Anh ấy mang các tài liệu quan trọng trong cặp tài liệu." },
    { word: "broadcaster", ipa: "/ˈbrɔːdkɑːstər/", type: "noun", example: "The broadcaster announced the news live.", meaning: "người phát thanh, phát thanh viên", exampleMeaning: "Người phát thanh đã thông báo tin tức trực tiếp." },
    { word: "brochure", ipa: "/ˈbrəʊʃər/", type: "noun", example: "They handed out brochures about the tour.", meaning: "sách hướng dẫn", exampleMeaning: "Họ phát sách hướng dẫn về chuyến tham quan." },
    { word: "build", ipa: "/bɪld/", type: "verb", example: "They plan to build a new school.", meaning: "xây dựng", exampleMeaning: "Họ dự định xây một trường học mới." },
    { word: "bush", ipa: "/bʊʃ/", type: "noun", example: "The garden is full of bushes.", meaning: "bụi cây", exampleMeaning: "Vườn đầy những bụi cây." },
    { word: "cable", ipa: "/ˈkeɪbl/", type: "noun", example: "The cable was damaged during the storm.", meaning: "dây cáp, cáp treo", exampleMeaning: "Dây cáp bị hỏng trong cơn bão." },
    { word: "call", ipa: "/kɔːl/", type: "noun", example: "I received a call from my friend.", meaning: "cuộc gọi", exampleMeaning: "Tôi nhận được một cuộc gọi từ bạn tôi." },
    { word: "cancel", ipa: "/ˈkænsəl/", type: "verb", example: "They had to cancel the event due to rain.", meaning: "hủy", exampleMeaning: "Họ phải hủy sự kiện vì mưa." },
    { word: "cancellation", ipa: "/ˌkænsəˈleɪʃn̩/", type: "noun", example: "The cancellation of the flight upset many passengers.", meaning: "sự hủy bỏ", exampleMeaning: "Việc hủy chuyến bay làm nhiều hành khách bực mình." },
    { word: "cap", ipa: "/kæp/", type: "noun", example: "He wore a cap to protect himself from the sun.", meaning: "nón (mũ lưỡi trai)", exampleMeaning: "Anh ấy đội nón để bảo vệ mình khỏi nắng." },
    { word: "careful", ipa: "/ˈkɛəfəl/", type: "adjective", example: "Be careful when crossing the street.", meaning: "cẩn thận", exampleMeaning: "Hãy cẩn thận khi băng qua đường." },
    { word: "carry", ipa: "/ˈkæri/", type: "verb", example: "She carried a heavy bag on her shoulder.", meaning: "mang", exampleMeaning: "Cô ấy mang một túi nặng trên vai." },
    { word: "cashier", ipa: "/kæˈʃɪə/", type: "noun", example: "The cashier scanned all the items.", meaning: "thu ngân", exampleMeaning: "Thu ngân đã quét tất cả các mặt hàng." },
    { word: "casually", ipa: "/ˈkæʒuəli/", type: "adverb", example: "He dressed casually for the party.", meaning: "tình cờ", exampleMeaning: "Anh ấy ăn mặc tình cờ cho buổi tiệc." },
    { word: "change", ipa: "/tʃeɪndʒ/", type: "verb", example: "Can you change the channel, please?", meaning: "thay đổi", exampleMeaning: "Bạn có thể đổi kênh được không?" },
    { word: "check", ipa: "/tʃɛk/", type: "verb", example: "Please check your work before submitting.", meaning: "kiểm tra", exampleMeaning: "Vui lòng kiểm tra công việc trước khi nộp." },
    { word: "checking", ipa: "/ˈtʃɛkɪŋ/", type: "verb", example: "She is checking the documents now.", meaning: "kiểm tra", exampleMeaning: "Cô ấy đang kiểm tra các tài liệu bây giờ." },
    { word: "childhood", ipa: "/ˈtʃaɪldhʊd/", type: "noun", example: "Her childhood was spent in the countryside.", meaning: "thời thơ ấu", exampleMeaning: "Thời thơ ấu của cô ấy được sống ở nông thôn." },
    { word: "clap", ipa: "/klæp/", type: "verb", example: "The audience clapped after the speech.", meaning: "vỗ tay", exampleMeaning: "Khán giả vỗ tay sau bài phát biểu." },
    { word: "cleaner", ipa: "/ˈkliːnə/", type: "noun", example: "The cleaner tidied up the office.", meaning: "người dọn dẹp", exampleMeaning: "Người dọn dẹp đã dọn dẹp văn phòng." },
    { word: "client", ipa: "/ˈklaɪənt/", type: "noun", example: "The lawyer met with her client.", meaning: "khách hàng", exampleMeaning: "Luật sư đã gặp khách hàng của mình." },
    { word: "clinic", ipa: "/ˈklɪnɪk/", type: "noun", example: "He visited the clinic for a check-up.", meaning: "phòng khám", exampleMeaning: "Anh ấy đã đến phòng khám để kiểm tra sức khỏe." },
    { word: "close", ipa: "/kloʊz/", type: "adjective", example: "The store is close to my house.", meaning: "gần", exampleMeaning: "Cửa hàng gần nhà tôi." },
    { word: "coat", ipa: "/koʊt/", type: "noun", example: "She wore a warm coat in the winter.", meaning: "áo khoác", exampleMeaning: "Cô ấy mặc một chiếc áo khoác ấm vào mùa đông." },
    { word: "coffee", ipa: "/ˈkɒfi/", type: "noun", example: "I’d like a cup of coffee, please.", meaning: "cà phê", exampleMeaning: "Tôi muốn một cốc cà phê, xin vui lòng." },
    { word: "committee", ipa: "/kəˈmɪti/", type: "noun", example: "The committee will meet tomorrow.", meaning: "ủy ban, hội đồng", exampleMeaning: "Ủy ban sẽ họp vào ngày mai." },
    { word: "complete", ipa: "/kəmˈpliːt/", type: "verb", example: "She needs to complete the project by Friday.", meaning: "hoàn thành", exampleMeaning: "Cô ấy cần hoàn thành dự án trước thứ Sáu." },
    { word: "compliment", ipa: "/ˈkɒmplɪmənt/", type: "noun", example: "He paid her a compliment on her dress.", meaning: "lời khen ngợi", exampleMeaning: "Anh ấy đã khen ngợi chiếc váy của cô ấy." },
    { word: "concrete", ipa: "/ˈkɒnkriːt/", type: "noun", example: "The building is made of concrete.", meaning: "bê tông", exampleMeaning: "Tòa nhà được làm bằng bê tông." },
    { word: "conference", ipa: "/ˈkɒnfərəns/", type: "noun", example: "The conference will be held next week.", meaning: "hội nghị", exampleMeaning: "Hội nghị sẽ được tổ chức vào tuần tới." },
    { word: "confirm", ipa: "/kənˈfɜːrm/", type: "verb", example: "Please confirm your attendance by email.", meaning: "xác nhận", exampleMeaning: "Vui lòng xác nhận sự tham dự của bạn qua email." },
    { word: "conflict", ipa: "/ˈkɒnflɪkt/", type: "noun", example: "There was a conflict between the two teams.", meaning: "mâu thuẫn, xung đột", exampleMeaning: "Có một xung đột giữa hai đội." },
    { word: "connect", ipa: "/kəˈnɛkt/", type: "verb", example: "Can you connect the printer to the computer?", meaning: "kết nối", exampleMeaning: "Bạn có thể kết nối máy in với máy tính không?" },
    { word: "consider", ipa: "/kənˈsɪdər/", type: "verb", example: "We should consider all options.", meaning: "xem xét", exampleMeaning: "Chúng ta nên xem xét tất cả các lựa chọn." },
    { word: "construction", ipa: "/kənˈstrʌkʃn̩/", type: "noun", example: "The construction of the road will start soon.", meaning: "sự xây dựng", exampleMeaning: "Việc xây dựng con đường sẽ bắt đầu sớm." },
    { word: "contact", ipa: "/ˈkɒntækt/", type: "noun", example: "I lost contact with my old friend.", meaning: "liên lạc", exampleMeaning: "Tôi đã mất liên lạc với bạn cũ của mình." },
    { word: "contribute", ipa: "/kənˈtrɪbjuːt/", type: "verb", example: "She contributed money to the charity.", meaning: "đóng góp", exampleMeaning: "Cô ấy đã đóng góp tiền cho tổ chức từ thiện." },
    { word: "conversation", ipa: "/ˌkɒnvərˈseɪʃn̩/", type: "noun", example: "They had a long conversation about the future.", meaning: "cuộc hội thoại", exampleMeaning: "Họ đã có một cuộc hội thoại dài về tương lai." },
    { word: "conversion", ipa: "/kənˈvɜːrʒn̩/", type: "noun", example: "The conversion of the old house took months.", meaning: "sự chuyển đổi", exampleMeaning: "Việc chuyển đổi ngôi nhà cũ mất nhiều tháng." },
    { word: "corner", ipa: "/ˈkɔːrnə/", type: "noun", example: "He stood in the corner of the room.", meaning: "góc", exampleMeaning: "Anh ấy đứng ở góc phòng." },
    { word: "course", ipa: "/kɔːrs/", type: "noun", example: "She enrolled in a cooking course.", meaning: "khóa học", exampleMeaning: "Cô ấy đã đăng ký một khóa học nấu ăn." },
    { word: "customer", ipa: "/ˈkʌstəmə/", type: "noun", example: "The customer complained about the service.", meaning: "khách hàng", exampleMeaning: "Khách hàng đã phàn nàn về dịch vụ." },
    { word: "damage", ipa: "/ˈdæmɪdʒ/", type: "noun", example: "The storm caused a lot of damage.", meaning: "hư hại", exampleMeaning: "Cơn bão đã gây ra nhiều hư hại." },
    { word: "delay", ipa: "/dɪˈleɪ/", type: "verb", example: "The flight delay frustrated the passengers.", meaning: "trì hoãn", exampleMeaning: "Sự trì hoãn chuyến bay làm hành khách bực mình." },
    { word: "deliver", ipa: "/dɪˈlɪvə/", type: "verb", example: "The postman will deliver the package today.", meaning: "giao hàng", exampleMeaning: "Thư ký sẽ giao gói hàng hôm nay." },
    { word: "demolish", ipa: "/dɪˈmɒlɪʃ/", type: "verb", example: "They plan to demolish the old building.", meaning: "phá hủy", exampleMeaning: "Họ dự định phá hủy tòa nhà cũ." },
    { word: "design", ipa: "/dɪˈzaɪn/", type: "verb", example: "She designed a new logo for the company.", meaning: "thiết kế", exampleMeaning: "Cô ấy đã thiết kế một logo mới cho công ty." },
    { word: "desk", ipa: "/dɛsk/", type: "noun", example: "He keeps his books on the desk.", meaning: "bàn làm việc", exampleMeaning: "Anh ấy để sách trên bàn làm việc." },
    { word: "detour", ipa: "/ˈdiːtʊər/", type: "noun", example: "We took a detour to avoid traffic.", meaning: "đường vòng, đường khác", exampleMeaning: "Chúng tôi đã đi đường vòng để tránh giao thông." },
    { word: "dinner", ipa: "/ˈdɪnə/", type: "noun", example: "We had a delicious dinner last night.", meaning: "bữa tối", exampleMeaning: "Chúng tôi đã có một bữa tối ngon miệng tối qua." },
    { word: "direction", ipa: "/dɪˈrɛkʃn̩/", type: "noun", example: "Can you give me directions to the station?", meaning: "hướng", exampleMeaning: "Bạn có thể chỉ đường đến ga cho tôi không?" },
    { word: "discount", ipa: "/ˈdɪskaʊnt/", type: "noun", example: "They offered a discount on all items.", meaning: "giảm giá", exampleMeaning: "Họ cung cấp giảm giá cho tất cả các mặt hàng." },
    { word: "distance", ipa: "/ˈdɪstəns/", type: "noun", example: "The distance to the park is two kilometers.", meaning: "khoảng cách", exampleMeaning: "Khoảng cách đến công viên là hai kilômét." },
    { word: "distribute", ipa: "/dɪˈstrɪbjuːt/", type: "verb", example: "They distribute food to the needy.", meaning: "phân phát", exampleMeaning: "Họ phân phát thực phẩm cho người cần." },
    { word: "district", ipa: "/ˈdɪstrɪkt/", type: "noun", example: "She lives in a quiet district of the city.", meaning: "quận", exampleMeaning: "Cô ấy sống ở một khu vực yên tĩnh của thành phố." },
    { word: "done", ipa: "/dʌn/", type: "verb", example: "The work is done for today.", meaning: "xong", exampleMeaning: "Công việc hôm nay đã xong." },
    { word: "drafting", ipa: "/ˈdrɑːftɪŋ/", type: "noun", example: "Drafting plans requires careful attention.", meaning: "soạn thảo", exampleMeaning: "Soạn thảo kế hoạch đòi hỏi sự chú ý cẩn thận." },
    { word: "drumstick", ipa: "/ˈdrʌmstɪk/", type: "noun", example: "He played the drums with a drumstick.", meaning: "đùi gà, dùi trống", exampleMeaning: "Anh ấy chơi trống bằng dùi trống." },
    { word: "duty", ipa: "/ˈdjuːti/", type: "noun", example: "It’s his duty to protect the community.", meaning: "nhiệm vụ", exampleMeaning: "Đó là nhiệm vụ của anh ấy để bảo vệ cộng đồng." },
    { word: "earring", ipa: "/ˈɪərɪŋ/", type: "noun", example: "She wore a pair of earrings to the party.", meaning: "bông tai", exampleMeaning: "Cô ấy đeo một đôi bông tai đến buổi tiệc." },
    { word: "elevate", ipa: "/ˈɛlɪveɪt/", type: "verb", example: "The doctor advised him to elevate his leg.", meaning: "nâng lên", exampleMeaning: "Bác sĩ khuyên anh ấy nâng chân lên." },
    { word: "empty", ipa: "/ˈɛmpti/", type: "adjective", example: "The room was empty when I arrived.", meaning: "trống", exampleMeaning: "Phòng trống khi tôi đến." },
    { word: "enroll", ipa: "/ɪnˈroʊl/", type: "verb", example: "She decided to enroll in the course.", meaning: "đăng ký", exampleMeaning: "Cô ấy quyết định đăng ký khóa học." },
    { word: "enrollment", ipa: "/ɪnˈroʊlmənt/", type: "noun", example: "Enrollment for the program begins next week.", meaning: "sự đăng ký", exampleMeaning: "Việc đăng ký chương trình bắt đầu vào tuần tới." },
    { word: "entrance", ipa: "/ˈɛntrəns/", type: "noun", example: "The entrance to the building is on the left.", meaning: "lối vào", exampleMeaning: "Lối vào tòa nhà ở bên trái." },
    { word: "escalator", ipa: "/ˈɛskəleɪtər/", type: "noun", example: "Take the escalator to the second floor.", meaning: "thang cuốn", exampleMeaning: "Đi thang cuốn lên tầng hai." },
    { word: "extra", ipa: "/ˈɛkstrə/", type: "adjective", example: "We ordered extra food for the guests.", meaning: "thêm, phụ", exampleMeaning: "Chúng tôi đã đặt thêm thức ăn cho khách." },
    { word: "facade", ipa: "/fəˈsɑːd/", type: "noun", example: "The facade of the building is beautifully designed.", meaning: "mặt tiền, vẻ ngoài", exampleMeaning: "Mặt tiền của tòa nhà được thiết kế đẹp mắt." },
    { word: "facing", ipa: "/ˈfeɪsɪŋ/", type: "verb", example: "The house is facing the sea.", meaning: "đối diện", exampleMeaning: "Ngôi nhà đối diện với biển." },
    { word: "figure", ipa: "/ˈfɪɡər/", type: "noun", example: "The figure on the chart shows a decline.", meaning: "hình dạng, con số", exampleMeaning: "Con số trên biểu đồ cho thấy sự suy giảm." },
    { word: "financial", ipa: "/faɪˈnænʃl/", type: "adjective", example: "She works in the financial sector.", meaning: "tài chính", exampleMeaning: "Cô ấy làm việc trong lĩnh vực tài chính." },
    { word: "firm", ipa: "/fɜːrm/", type: "noun", example: "The firm hired new employees last month.", meaning: "công ty", exampleMeaning: "Công ty đã tuyển nhân viên mới tháng trước." },
    { word: "fix", ipa: "/fɪks/", type: "verb", example: "Can you fix the broken chair?", meaning: "sửa", exampleMeaning: "Bạn có thể sửa chiếc ghế hỏng không?" },
    { word: "folder", ipa: "/ˈfoʊldər/", type: "noun", example: "She keeps her documents in a folder.", meaning: "thư mục", exampleMeaning: "Cô ấy giữ tài liệu trong một thư mục." },
    { word: "follow", ipa: "/ˈfɒloʊ/", type: "verb", example: "Follow the instructions carefully.", meaning: "theo sau", exampleMeaning: "Hãy theo hướng dẫn cẩn thận." },
    { word: "formal", ipa: "/ˈfɔːrml/", type: "adjective", example: "The event requires formal attire.", meaning: "trang trọng", exampleMeaning: "Sự kiện yêu cầu trang phục trang trọng." },
    { word: "frame", ipa: "/freɪm/", type: "noun", example: "The picture is in a wooden frame.", meaning: "khung", exampleMeaning: "Bức tranh nằm trong một khung gỗ." },
    { word: "furniture", ipa: "/ˈfɜːrnɪtʃər/", type: "noun", example: "They bought new furniture for the house.", meaning: "đồ nội thất", exampleMeaning: "Họ đã mua đồ nội thất mới cho ngôi nhà." },
    { word: "garage", ipa: "/ɡəˈrɑːʒ/", type: "noun", example: "He parks his car in the garage.", meaning: "nhà xe", exampleMeaning: "Anh ấy đậu xe trong gara." },
    { word: "gate", ipa: "/ɡeɪt/", type: "noun", example: "The gate to the garden is locked.", meaning: "cổng", exampleMeaning: "Cổng vào vườn bị khóa." },
    { word: "glove", ipa: "/ɡlʌv/", type: "noun", example: "She wore gloves to keep her hands warm.", meaning: "găng tay", exampleMeaning: "Cô ấy đeo găng tay để giữ ấm tay." },
    { word: "go ahead", ipa: "/ɡoʊ əˈhɛd/", type: "phrase", example: "You can go ahead and start the project.", meaning: "tiến hành", exampleMeaning: "Bạn có thể tiến hành và bắt đầu dự án." },
    { word: "greenhouse", ipa: "/ˈɡriːnhaʊs/", type: "noun", example: "They grow vegetables in a greenhouse.", meaning: "nhà kính", exampleMeaning: "Họ trồng rau trong nhà kính." },
    { word: "hallway", ipa: "/ˈhɔːlweɪ/", type: "noun", example: "The hallway leads to the kitchen.", meaning: "hành lang", exampleMeaning: "Hành lang dẫn đến nhà bếp." },
    { word: "handshake", ipa: "/ˈhændʃeɪk/", type: "noun", example: "They sealed the deal with a handshake.", meaning: "bắt tay", exampleMeaning: "Họ đã ký kết thỏa thuận bằng một cái bắt tay." },
    { word: "harbour", ipa: "/ˈhɑːrbə/", type: "noun", example: "The ships are docked in the harbour.", meaning: "cảng", exampleMeaning: "Các con tàu neo đậu ở cảng." },
    { word: "hat", ipa: "/hæt/", type: "noun", example: "She wore a hat to shield from the sun.", meaning: "nón", exampleMeaning: "Cô ấy đội nón để che nắng." },
    { word: "headset", ipa: "/ˈhɛdsɛt/", type: "noun", example: "He uses a headset for online meetings.", meaning: "tai nghe", exampleMeaning: "Anh ấy dùng tai nghe cho các cuộc họp trực tuyến." },
    { word: "heavy", ipa: "/ˈhɛvi/", type: "adjective", example: "The box is too heavy to lift.", meaning: "nặng", exampleMeaning: "Cái hộp quá nặng để nhấc lên." },
    { word: "helmet", ipa: "/ˈhɛlmɪt/", type: "noun", example: "He wears a helmet when riding a bike.", meaning: "mũ bảo hiểm", exampleMeaning: "Anh ấy đội mũ bảo hiểm khi đạp xe." },
    { word: "helpful", ipa: "/ˈhɛlpfəl/", type: "adjective", example: "The guide was very helpful.", meaning: "hữu ích", exampleMeaning: "Hướng dẫn viên rất hữu ích." },
    { word: "hold", ipa: "/hoʊld/", type: "verb", example: "Can you hold this for me, please?", meaning: "cầm, giữ", exampleMeaning: "Bạn có thể cầm cái này cho tôi không?" },
    { word: "hospital", ipa: "/ˈhɒspɪtl/", type: "noun", example: "She was admitted to the hospital yesterday.", meaning: "bệnh viện", exampleMeaning: "Cô ấy đã được nhập viện hôm qua." },
    { word: "hotel", ipa: "/hoʊˈtɛl/", type: "noun", example: "We booked a room at the hotel.", meaning: "khách sạn", exampleMeaning: "Chúng tôi đã đặt một phòng ở khách sạn." },
    { word: "identification", ipa: "/aɪˌdɛntɪfɪˈkeɪʃn̩/", type: "noun", example: "You need identification to enter the building.", meaning: "sự nhận dạng", exampleMeaning: "Bạn cần giấy tờ nhận dạng để vào tòa nhà." },
    { word: "industry", ipa: "/ˈɪndəstri/", type: "noun", example: "The industry is growing rapidly.", meaning: "ngành công nghiệp", exampleMeaning: "Ngành công nghiệp đang phát triển nhanh chóng." },
    { word: "instrument", ipa: "/ˈɪnstrəmənt/", type: "noun", example: "He plays a musical instrument.", meaning: "dụng cụ", exampleMeaning: "Anh ấy chơi một nhạc cụ." },
    { word: "internet", ipa: "/ˈɪntərnɛt/", type: "noun", example: "She uses the internet for research.", meaning: "mạng", exampleMeaning: "Cô ấy dùng mạng để nghiên cứu." },
    { word: "involve", ipa: "/ɪnˈvɒlv/", type: "verb", example: "The project will involve many people.", meaning: "liên quan", exampleMeaning: "Dự án sẽ liên quan đến nhiều người." },
    { word: "jacket", ipa: "/ˈdʒækɪt/", type: "noun", example: "He put on a jacket before going out.", meaning: "áo khoác", exampleMeaning: "Anh ấy mặc áo khoác trước khi ra ngoài." },
    { word: "join", ipa: "/dʒɔɪn/", type: "verb", example: "She decided to join the club.", meaning: "tham gia", exampleMeaning: "Cô ấy quyết định tham gia câu lạc bộ." },
    { word: "knapsack", ipa: /ˈnæpsæk/, type: "noun", example: "He carried a knapsack during the hike.", meaning: "ba lô", exampleMeaning: "Anh ấy mang một ba lô trong chuyến đi bộ." },

    { word: "lab", ipa: "/læb/", type: "noun", example: "The lab is equipped with modern tools.", meaning: "phòng thí nghiệm", exampleMeaning: "Phòng thí nghiệm được trang bị công cụ hiện đại." },
    { word: "laboratory", ipa: "/ˈlæb.rə.tɔːr.i/", type: "noun", example: "The laboratory conducts research daily.", meaning: "trường thí nghiệm", exampleMeaning: "Trường thí nghiệm tiến hành nghiên cứu hàng ngày." },
    { word: "ladder", ipa: "/ˈlæd.ər/", type: "noun", example: "He used a ladder to fix the roof.", meaning: "thang (leo lên)", exampleMeaning: "Anh ấy dùng thang để sửa mái nhà." },
    { word: "lease", ipa: "/liːs/", type: "verb/noun", example: "They signed a lease for the office space.", meaning: "thuê, mượn", exampleMeaning: "Họ ký hợp đồng thuê không gian văn phòng." },
    { word: "leaves", ipa: "/liːvz/", type: "noun", example: "The leaves fall from the trees in autumn.", meaning: "chiếc lá", exampleMeaning: "Những chiếc lá rơi từ cây vào mùa thu." },
    { word: "lecture", ipa: "/ˈlek.tʃər/", type: "noun", example: "The lecture on biology was very informative.", meaning: "bài giảng", exampleMeaning: "Bài giảng về sinh học rất hữu ích." },
    { word: "library", ipa: "/ˈlaɪ.brer.i/", type: "noun", example: "She borrowed books from the library.", meaning: "thư viện", exampleMeaning: "Cô ấy mượn sách từ thư viện." },
    { word: "load", ipa: "/loʊd/", type: "verb", example: "They load the cargo onto the ship.", meaning: "tải lên", exampleMeaning: "Họ tải hàng lên tàu." },
    { word: "lobby", ipa: "/ˈlɑː.bi/", type: "noun", example: "We met in the lobby of the hotel.", meaning: "sảnh", exampleMeaning: "Chúng tôi gặp nhau ở sảnh của khách sạn." },
    { word: "look over", ipa: "/lʊk ˈoʊ.vər/", type: "phrase", example: "Please look over the report before the meeting.", meaning: "kiểm tra", exampleMeaning: "Vui lòng kiểm tra báo cáo trước cuộc họp." },
    { word: "lying", ipa: "/ˈlaɪ.ɪŋ/", type: "verb", example: "She was lying on the bed reading a book.", meaning: "nằm", exampleMeaning: "Cô ấy nằm trên giường đọc sách." },
    { word: "machine", ipa: "/məˈʃiːn/", type: "noun", example: "The machine produces goods efficiently.", meaning: "máy móc", exampleMeaning: "Cỗ máy sản xuất hàng hóa hiệu quả." },
    { word: "magazine", ipa: "/ˌmæɡ.əˈziːn/", type: "noun", example: "He subscribes to a science magazine.", meaning: "tạp chí", exampleMeaning: "Anh ấy đăng ký một tạp chí khoa học." },
    { word: "manufacture", ipa: "/ˌmæn.jəˈfæk.tʃər/", type: "verb", example: "The factory manufactures electronic devices.", meaning: "nhà sản xuất", exampleMeaning: "Nhà máy sản xuất thiết bị điện tử." },
    { word: "mask", ipa: "/mæsk/", type: "noun", example: "She wears a mask to protect herself.", meaning: "mặt nạ", exampleMeaning: "Cô ấy đeo mặt nạ để bảo vệ bản thân." },
    { word: "merchandise", ipa: "/ˈmɜːr.tʃən.daɪz/", type: "noun", example: "The store sells a variety of merchandise.", meaning: "hàng hóa", exampleMeaning: "Cửa hàng bán nhiều loại hàng hóa." },
    { word: "messenger", ipa: "/ˈmes.ən.dʒər/", type: "noun", example: "The messenger delivered the package quickly.", meaning: "tín hiệu", exampleMeaning: "Người đưa tin giao gói hàng nhanh chóng." },
    { word: "microphone", ipa: "/ˈmaɪ.krə.foʊn/", type: "noun", example: "He spoke into the microphone during the event.", meaning: "mic", exampleMeaning: "Anh ấy nói vào micro trong sự kiện." },
    { word: "mountain", ipa: "/ˈmaʊn.tən/", type: "noun", example: "They climbed the mountain over the weekend.", meaning: "núi", exampleMeaning: "Họ leo núi vào cuối tuần." },
    { word: "moving", ipa: "/ˈmuː.vɪŋ/", type: "adjective", example: "The moving story brought tears to her eyes.", meaning: "đi chuyển", exampleMeaning: "Câu chuyện cảm động làm cô ấy rơi nước mắt." },
    { word: "mow", ipa: "/moʊ/", type: "verb", example: "He mows the lawn every Saturday.", meaning: "cắt cỏ", exampleMeaning: "Anh ấy cắt cỏ mỗi thứ Bảy." },
    { word: "music", ipa: "/ˈmjuː.zɪk/", type: "noun", example: "She plays classical music on the piano.", meaning: "nhạc", exampleMeaning: "Cô ấy chơi nhạc cổ điển trên đàn piano." },
    { word: "music stand", ipa: "/ˈmjuː.zɪk stænd/", type: "noun", example: "The musician placed the sheet on the music stand.", meaning: "giá đỡ nhạc", exampleMeaning: "Nhạc sĩ đặt bản nhạc lên giá đỡ." },
    { word: "necktie", ipa: "/ˈnek.taɪ/", type: "noun", example: "He wore a red necktie to the interview.", meaning: "cà vạt", exampleMeaning: "Anh ấy đeo cà vạt đỏ đến buổi phỏng vấn." },
    { word: "object", ipa: "/ˈɑːb.dʒekt/", type: "noun", example: "The object on the table is a souvenir.", meaning: "vật, mục tiêu", exampleMeaning: "Vật trên bàn là một kỷ niệm." },
    { word: "office", ipa: "/ˈɑː.fɪs/", type: "noun", example: "She works in a busy office downtown.", meaning: "văn phòng", exampleMeaning: "Cô ấy làm việc trong một văn phòng bận rộn ở trung tâm." },
    { word: "on time", ipa: "/ɒn taɪm/", type: "phrase", example: "The train arrived on time this morning.", meaning: "đúng giờ", exampleMeaning: "Tàu hỏa đến đúng giờ sáng nay." },
    { word: "on vacation", ipa: "/ɒn veɪˈkeɪ.ʃn/", type: "phrase", example: "They are on vacation in Hawaii.", meaning: "trong kỳ nghỉ", exampleMeaning: "Họ đang nghỉ ở Hawaii." },
    { word: "one another", ipa: "/wʌn əˈnʌð.ər/", type: "phrase", example: "The team members help one another.", meaning: "lẫn nhau", exampleMeaning: "Các thành viên trong đội giúp đỡ lẫn nhau." },
    { word: "opening", ipa: "/ˈoʊ.pən.ɪŋ/", type: "noun", example: "The opening of the new store attracted many people.", meaning: "khai trương", exampleMeaning: "Sự khai trương của cửa hàng mới thu hút nhiều người." },
    { word: "operate", ipa: "/ˈɑː.pə.reɪt/", type: "verb", example: "The surgeon will operate on the patient tomorrow.", meaning: "vận hành", exampleMeaning: "Bác sĩ phẫu thuật sẽ mổ cho bệnh nhân vào ngày mai." },
    { word: "orchard", ipa: "/ˈɔːr.tʃərd/", type: "noun", example: "The orchard is full of apple trees.", meaning: "vườn ăn quả", exampleMeaning: "Vườn ăn quả đầy cây táo." },
    { word: "outdoor", ipa: "/ˌaʊtˈdɔːr/", type: "adjective", example: "They enjoy outdoor activities like hiking.", meaning: "ngoài trời", exampleMeaning: "Họ thích các hoạt động ngoài trời như đi bộ." },
    { word: "overlook", ipa: "/ˌoʊ.vərˈlʊk/", type: "verb", example: "The hotel overlooks a beautiful lake.", meaning: "nhìn qua", exampleMeaning: "Khách sạn nhìn ra một hồ đẹp." },
    { word: "pack", ipa: "/pæk/", type: "verb", example: "She packed her suitcase for the trip.", meaning: "đóng gói", exampleMeaning: "Cô ấy đóng gói vali cho chuyến đi." },
    { word: "page", ipa: "/peɪdʒ/", type: "noun", example: "Turn to page 10 in your book.", meaning: "trang", exampleMeaning: "Xoay đến trang 10 trong sách của bạn." },
    { word: "passenger", ipa: "/ˈpæs.ən.dʒər/", type: "noun", example: "The passenger boarded the plane early.", meaning: "hành khách", exampleMeaning: "Hành khách lên máy bay sớm." },
    { word: "pave", ipa: "/peɪv/", type: "verb", example: "They pave the road with asphalt.", meaning: "lát, lót", exampleMeaning: "Họ lát đường bằng nhựa đường." },
    { word: "payment", ipa: "/ˈpeɪ.mənt/", type: "noun", example: "The payment for the service was made online.", meaning: "than toán", exampleMeaning: "Thanh toán cho dịch vụ được thực hiện trực tuyến." },
    { word: "performer", ipa: "/pərˈfɔːr.mər/", type: "noun", example: "The performer sang beautifully on stage.", meaning: "người trình diễn", exampleMeaning: "Người biểu diễn hát hay trên sân khấu." },
    { word: "pick up", ipa: "/pɪk ʌp/", type: "phrase", example: "He picked up the phone to call her.", meaning: "nhặt lên, đón", exampleMeaning: "Anh ấy nhấc điện thoại để gọi cho cô ấy." },
    { word: "pile", ipa: "/paɪl/", type: "noun", example: "There’s a pile of books on the desk.", meaning: "chồng chất", exampleMeaning: "Có một chồng sách trên bàn." },
    { word: "plant", ipa: "/plænt/", type: "noun", example: "The plant in the corner needs water.", meaning: "cây cối, nhà máy", exampleMeaning: "Cây ở góc cần nước." },
    { word: "plumb", ipa: "/plʌm/", type: "verb", example: "The plumber will plumb the new pipes.", meaning: "ống nước", exampleMeaning: "Thợ ống nước sẽ lắp đặt đường ống mới." },
    { word: "plumbing", ipa: "/ˈplʌm.ɪŋ/", type: "noun", example: "The plumbing in the house needs repair.", meaning: "ống nước", exampleMeaning: "Hệ thống ống nước trong nhà cần sửa chữa." },
    { word: "pointing", ipa: "/ˈpɔɪn.tɪŋ/", type: "noun", example: "The pointing on the wall is cracking.", meaning: "chỉ (vào)", exampleMeaning: "Lớp chỉ trên tường đang nứt." },
    { word: "postpone", ipa: "/poʊstˈpoʊn/", type: "verb", example: "They decided to postpone the meeting.", meaning: "trì hoãn", exampleMeaning: "Họ quyết định trì hoãn cuộc họp." },
    { word: "pour", ipa: "/pɔːr/", type: "verb", example: "She poured water into the glass.", meaning: "rót, đổ", exampleMeaning: "Cô ấy rót nước vào ly." },
    { word: "prefer", ipa: "/prɪˈfɜːr/", type: "verb", example: "I prefer tea over coffee.", meaning: "thích hơn", exampleMeaning: "Tôi thích trà hơn cà phê." },
    { word: "project", ipa: "/ˈprɑː.dʒekt/", type: "noun", example: "The team is working on a new project.", meaning: "dự án", exampleMeaning: "Đội ngũ đang làm việc trên một dự án mới." },
    { word: "promote", ipa: "/prəˈmoʊt/", type: "verb", example: "The company will promote him to manager.", meaning: "thăng tiến", exampleMeaning: "Công ty sẽ thăng chức anh ấy lên quản lý." },
    { word: "protective", ipa: "/prəˈtek.tɪv/", type: "adjective", example: "He wears protective gear at work.", meaning: "bảo vệ", exampleMeaning: "Anh ấy mặc đồ bảo hộ tại nơi làm việc." },
    { word: "publicity", ipa: "/pʌbˈlɪs.ə.ti/", type: "noun", example: "The event gained a lot of publicity.", meaning: "công khai, quảng cáo", exampleMeaning: "Sự kiện nhận được nhiều sự chú ý công khai." },
    { word: "purchase", ipa: "/ˈpɜːr.tʃəs/", type: "verb", example: "She plans to purchase a new car.", meaning: "mua", exampleMeaning: "Cô ấy dự định mua một chiếc xe mới." },
    { word: "quarter", ipa: "/ˈkwɔːr.tər/", type: "noun", example: "The project is in its final quarter.", meaning: "quý (1/4)", exampleMeaning: "Dự án đang ở quý cuối cùng." },
    { word: "quarterly", ipa: "/ˈkwɔːr.tər.li/", type: "adjective", example: "The magazine is published quarterly.", meaning: "hàng quý", exampleMeaning: "Tạp chí được xuất bản hàng quý." },
    { word: "railroad", ipa: "/ˈreɪl.roʊd/", type: "noun", example: "The railroad connects the two cities.", meaning: "đường sắt", exampleMeaning: "Đường sắt nối hai thành phố." },
    { word: "reach", ipa: "/riːtʃ/", type: "verb", example: "They reach the summit after hours of climbing.", meaning: "chạm đến", exampleMeaning: "Họ chạm đến đỉnh sau nhiều giờ leo núi." },
    { word: "receive", ipa: "/rɪˈsiːv/", type: "verb", example: "She will receive the award tomorrow.", meaning: "nhận", exampleMeaning: "Cô ấy sẽ nhận giải thưởng vào ngày mai." },
    { word: "receptionist", ipa: "/rɪˈsep.ʃən.ɪst/", type: "noun", example: "The receptionist greeted us warmly.", meaning: "le tân", exampleMeaning: "Nhân viên lễ tân chào đón chúng tôi nhiệt tình." },
    { word: "recruit", ipa: "/rɪˈkruːt/", type: "verb", example: "The company plans to recruit new staff.", meaning: "tuyển dụng", exampleMeaning: "Công ty dự định tuyển dụng nhân viên mới." },
    { word: "reduce", ipa: "/rɪˈduːs/", type: "verb", example: "They need to reduce costs this year.", meaning: "giảm", exampleMeaning: "Họ cần giảm chi phí trong năm nay." },
    { word: "relax", ipa: "/rɪˈlæks/", type: "verb", example: "He likes to relax by the beach.", meaning: "thư giãn", exampleMeaning: "Anh ấy thích thư giãn bên bãi biển." },
    { word: "remove", ipa: "/rɪˈmuːv/", type: "verb", example: "Please remove the old furniture.", meaning: "xóa, loại bỏ", exampleMeaning: "Vui lòng dọn đồ nội thất cũ." },
    { word: "rent", ipa: "/rent/", type: "verb", example: "They rent an apartment near the park.", meaning: "thuê", exampleMeaning: "Họ thuê một căn hộ gần công viên." },
    { word: "repair", ipa: "/rɪˈper/", type: "verb", example: "The mechanic will repair the car tomorrow.", meaning: "sửa chữa", exampleMeaning: "Thợ cơ khí sẽ sửa xe vào ngày mai." },
    { word: "request", ipa: "/rɪˈkwest/", type: "verb", example: "She requested a meeting with the manager.", meaning: "yêu cầu", exampleMeaning: "Cô ấy yêu cầu một cuộc họp với quản lý." },
    { word: "reservation", ipa: "/ˌrez.ərˈveɪ.ʃn/", type: "noun", example: "We made a reservation at the restaurant.", meaning: "sự đặt chỗ", exampleMeaning: "Chúng tôi đã đặt chỗ tại nhà hàng." },
    { word: "restaurant", ipa: "/ˈres.tər.ɑːnt/", type: "noun", example: "They dined at a famous restaurant.", meaning: "nhà hàng", exampleMeaning: "Họ ăn tối tại một nhà hàng nổi tiếng." },
    { word: "result", ipa: "/rɪˈzʌlt/", type: "noun", example: "The result of the experiment was surprising.", meaning: "kết quả", exampleMeaning: "Kết quả của thí nghiệm thật bất ngờ." },
    { word: "resurface", ipa: "/ˌriːˈsɜːr.fɪs/", type: "verb", example: "They will resurface the road next month.", meaning: "làm lại bề mặt", exampleMeaning: "Họ sẽ làm lại bề mặt đường vào tháng tới." },
    { word: "retirement", ipa: "/rɪˈtaɪər.mənt/", type: "noun", example: "He is planning his retirement next year.", meaning: "nghỉ hưu", exampleMeaning: "Anh ấy đang lên kế hoạch nghỉ hưu vào năm tới." },
    { word: "return fare", ipa: "/rɪˈtɜːrn feər/", type: "noun", example: "The return fare for the trip is $50.", meaning: "vé khứ hồi", exampleMeaning: "Giá vé khứ hồi cho chuyến đi là 50 đô la." },
    { word: "review", ipa: "/rɪˈvjuː/", type: "noun/verb", example: "She wrote a review of the new book.", meaning: "xem lại, đánh giá", exampleMeaning: "Cô ấy đã viết một bài đánh giá về cuốn sách mới." },
    { word: "roof", ipa: "/ruːf/", type: "noun", example: "The roof of the house needs repair.", meaning: "mái nhà", exampleMeaning: "Mái nhà cần được sửa chữa." },
    { word: "round-trip", ipa: "/raʊnd trɪp/", type: "noun", example: "We booked a round-trip ticket to Paris.", meaning: "chuyến đi khứ hồi", exampleMeaning: "Chúng tôi đã đặt vé khứ hồi đến Paris." },
    { word: "round", ipa: "/raʊnd/", type: "adjective", example: "The table is round and made of wood.", meaning: "xung quanh", exampleMeaning: "Chiếc bàn tròn và được làm bằng gỗ." },
    { word: "rate", ipa: "/reɪt/", type: "noun", example: "The interest rate is very high this year.", meaning: "giá, tỷ lệ", exampleMeaning: "Lãi suất năm nay rất cao." },
    { word: "rug", ipa: "/rʌɡ/", type: "noun", example: "She placed a rug in the living room.", meaning: "thảm", exampleMeaning: "Cô ấy đặt một tấm thảm trong phòng khách." },
    { word: "runway", ipa: "/ˈrʌn.weɪ/", type: "noun", example: "The plane landed on the runway safely.", meaning: "đường băng", exampleMeaning: "Chiếc máy bay hạ cánh an toàn trên đường băng." },
    { word: "rush hour", ipa: "/rʌʃ aʊər/", type: "noun", example: "Traffic is heavy during rush hour.", meaning: "giờ cao điểm", exampleMeaning: "Giao thông rất đông trong giờ cao điểm." },
    { word: "safety", ipa: "/ˈseɪf.ti/", type: "noun", example: "Safety is the top priority at work.", meaning: "an toàn", exampleMeaning: "An toàn là ưu tiên hàng đầu tại nơi làm việc." },
    { word: "same", ipa: "/seɪm/", type: "adjective", example: "We both have the same opinion.", meaning: "giống", exampleMeaning: "Chúng tôi có cùng ý kiến." },
    { word: "secretary", ipa: "/ˈsek.rə.ter.i/", type: "noun", example: "The secretary organized the meeting.", meaning: "thư ký", exampleMeaning: "Thư ký đã sắp xếp cuộc họp." },
    { word: "serve", ipa: "/sɜːrv/", type: "verb", example: "They serve delicious food at the restaurant.", meaning: "phục vụ", exampleMeaning: "Họ phục vụ món ăn ngon tại nhà hàng." },
    { word: "sewing", ipa: "/ˈsoʊ.ɪŋ/", type: "noun", example: "She enjoys sewing clothes in her free time.", meaning: "may vá", exampleMeaning: "Cô ấy thích may vá quần áo vào thời gian rảnh rỗi." },
    { word: "shaking", ipa: "/ˈʃeɪ.kɪŋ/", type: "verb", example: "The ground was shaking during the earthquake.", meaning: "lắc, rung", exampleMeaning: "Mặt đất rung chuyển trong trận động đất." },
    { word: "shelf", ipa: "/ʃelf/", type: "noun", example: "Books are arranged on the shelf.", meaning: "kệ", exampleMeaning: "Sách được sắp xếp trên kệ." },
    { word: "shoe", ipa: "/ʃuː/", type: "noun", example: "He polished his shoes before the interview.", meaning: "giày", exampleMeaning: "Anh ấy đánh bóng giày trước buổi phỏng vấn." },
    { word: "short-handed", ipa: "/ˌʃɔːrtˈhæn.dɪd/", type: "adjective", example: "The team is short-handed due to illness.", meaning: "thiếu nhân viên", exampleMeaning: "Đội ngũ thiếu nhân viên do bệnh tật." },
    { word: "short-staffed", ipa: "/ˌʃɔːrtˈstæft/", type: "adjective", example: "The hospital is short-staffed today.", meaning: "thiếu nhân viên", exampleMeaning: "Bệnh viện hôm nay thiếu nhân viên." },
    { word: "sign", ipa: "/saɪn/", type: "noun", example: "There’s a sign pointing to the exit.", meaning: "ký", exampleMeaning: "Có một bảng hiệu chỉ ra lối ra." },
    { word: "similar", ipa: "/ˈsɪm.ə.lər/", type: "adjective", example: "The two dresses are very similar.", meaning: "trong tương", exampleMeaning: "Hai chiếc váy rất giống nhau." },
    { word: "site", ipa: "/saɪt/", type: "noun", example: "The construction site is busy today.", meaning: "vị trí", exampleMeaning: "Công trường hôm nay rất bận rộn." },
    { word: "speech", ipa: "/spiːtʃ/", type: "noun", example: "The president gave a speech yesterday.", meaning: "bài diễn văn", exampleMeaning: "Tổng thống đã có bài diễn văn hôm qua." },
    { word: "staircase", ipa: "/ˈster.keɪs/", type: "noun", example: "The staircase leads to the upper floor.", meaning: "cầu thang", exampleMeaning: "Cầu thang dẫn lên tầng trên." },
    { word: "statue", ipa: "/ˈstætʃ.uː/", type: "noun", example: "The statue in the park is very old.", meaning: "tượng", exampleMeaning: "Tượng trong công viên rất cổ." },
    { word: "step", ipa: "/step/", type: "noun", example: "Take one step forward, please.", meaning: "bước, bậc thang", exampleMeaning: "Đi một bước về phía trước, xin vui lòng." },
    { word: "stretch", ipa: "/stretʃ/", type: "verb", example: "She likes to stretch after exercising.", meaning: "căng, duỗi", exampleMeaning: "Cô ấy thích duỗi người sau khi tập thể dục." },
    { word: "strip", ipa: "/strɪp/", type: "noun", example: "The strip of land is used for farming.", meaning: "dải", exampleMeaning: "Dải đất được dùng để canh tác." },
    { word: "subway", ipa: "/ˈsʌb.weɪ/", type: "noun", example: "He takes the subway to work every day.", meaning: "tàu điện ngầm", exampleMeaning: "Anh ấy đi tàu điện ngầm đi làm mỗi ngày." },
    { word: "surface", ipa: "/ˈsɜːr.fɪs/", type: "noun", example: "The surface of the table is smooth.", meaning: "bề mặt", exampleMeaning: "Bề mặt bàn rất mịn." },
    { word: "sweater", ipa: "/ˈswet.ər/", type: "noun", example: "She wore a sweater to stay warm.", meaning: "áo len", exampleMeaning: "Cô ấy mặc áo len để giữ ấm." },
    { word: "sweeping", ipa: "/ˈswiː.pɪŋ/", type: "adjective", example: "The sweeping changes improved the system.", meaning: "quét", exampleMeaning: "Những thay đổi lớn đã cải thiện hệ thống." },
    { word: "t-shirt", ipa: "/ˈtiː ʃɜːrt/", type: "noun", example: "He bought a new t-shirt for the event.", meaning: "áo thun", exampleMeaning: "Anh ấy mua một áo thun mới cho sự kiện." },
    { word: "tag", ipa: "/tæɡ/", type: "noun", example: "The price tag is attached to the shirt.", meaning: "thẻ, nhãn", exampleMeaning: "Thẻ giá được gắn vào áo." },
    { word: "talking", ipa: "/ˈtɔː.kɪŋ/", type: "verb", example: "They were talking about the project.", meaning: "nói", exampleMeaning: "Họ đang nói về dự án." },
    { word: "technology", ipa: "/tekˈnɑːl.ə.dʒi/", type: "noun", example: "Technology has changed our lives.", meaning: "công nghệ", exampleMeaning: "Công nghệ đã thay đổi cuộc sống của chúng ta." },
    { word: "telephone", ipa: "/ˈtel.ə.foʊn/", type: "noun", example: "She answered the telephone quickly.", meaning: "điện thoại", exampleMeaning: "Cô ấy nhanh chóng trả lời điện thoại." },
    { word: "tire", ipa: "/taɪər/", type: "noun", example: "The car needs new tires for safety.", meaning: "lốp xe", exampleMeaning: "Xe hơi cần lốp mới để an toàn." },
    { word: "touch", ipa: "/tʌtʃ/", type: "verb", example: "Please don’t touch the wet paint.", meaning: "xô, chạm", exampleMeaning: "Vui lòng không chạm vào sơn ướt." },
    { word: "track", ipa: "/træk/", type: "noun", example: "The train runs on a steel track.", meaning: "(n) lối trinh, (v) theo dõi", exampleMeaning: "Tàu chạy trên đường ray thép." },
    { word: "translation", ipa: "/trænsˈleɪ.ʃən/", type: "noun", example: "The translation of the book took months.", meaning: "dịch", exampleMeaning: "Việc dịch cuốn sách mất nhiều tháng." },
    { word: "trash", ipa: "/træʃ/", type: "noun", example: "Put the trash in the bin outside.", meaning: "rác", exampleMeaning: "Đặt rác vào thùng ngoài trời." },
    { word: "trouble", ipa: "/ˈtrʌb.əl/", type: "noun", example: "He’s in trouble with his boss.", meaning: "rắc rối", exampleMeaning: "Anh ấy gặp rắc rối với sếp." },
    { word: "try on", ipa: "/traɪ ɒn/", type: "phrase", example: "She tried on the dress before buying it.", meaning: "mặc thử", exampleMeaning: "Cô ấy mặc thử chiếc váy trước khi mua." },
    { word: "umbrella", ipa: "/ʌmˈbrel.ə/", type: "noun", example: "Take an umbrella in case it rains.", meaning: "cây dù", exampleMeaning: "Mang theo cây dù phòng khi trời mưa." },
    { word: "unavailable", ipa: "/ˌʌn.əˈveɪ.lə.bəl/", type: "adjective", example: "The item is unavailable at the moment.", meaning: "không có sẵn", exampleMeaning: "Mặt hàng hiện không có sẵn." },
    { word: "unload", ipa: "/ˌʌnˈloʊd/", type: "verb", example: "They unload the cargo from the ship.", meaning: "đổ xúông", exampleMeaning: "Họ dỡ hàng từ tàu xuống." },
    { word: "unlock", ipa: "/ˌʌnˈlɑːk/", type: "verb", example: "He used a key to unlock the door.", meaning: "mở khóa", exampleMeaning: "Anh ấy dùng chìa khóa để mở cửa." },
    { word: "useful", ipa: "/ˈjuːs.fəl/", type: "adjective", example: "This tool is very useful for repairs.", meaning: "có ích", exampleMeaning: "Công cụ này rất hữu ích cho việc sửa chữa." },
    { word: "vehicle", ipa: "/ˈviː.ə.kəl/", type: "noun", example: "The vehicle was parked on the street.", meaning: "xe cộ, phương tiện giao thông", exampleMeaning: "Phương tiện giao thông đậu trên đường." },
    { word: "wear", ipa: "/weər/", type: "verb", example: "She wears a hat in the summer.", meaning: "mặc", exampleMeaning: "Cô ấy đội mũ vào mùa hè." },
    { word: "weather", ipa: "/ˈweð.ər/", type: "noun", example: "The weather is nice today.", meaning: "thời tiết", exampleMeaning: "Thời tiết hôm nay rất đẹp." },
    { word: "wheelbarrow", ipa: "/ˈwiːl.bær.oʊ/", type: "noun", example: "He used a wheelbarrow to move the dirt.", meaning: "xe rùa", exampleMeaning: "Anh ấy dùng xe rùa để di chuyển đất." },
    { word: "work", ipa: "/wɜːrk/", type: "noun/verb", example: "She goes to work early every day.", meaning: "làm việc", exampleMeaning: "Cô ấy đi làm sớm mỗi ngày." },
    { word: "wrong", ipa: "/rɔːŋ/", type: "adjective", example: "You’ve got the wrong answer.", meaning: "sai", exampleMeaning: "Bạn đã có câu trả lời sai." },

    { word: "accomplish", ipa: "/əˈkɑːm.plɪʃ/", type: "verb", example: "She worked hard to accomplish her goals.", meaning: "hoàn thành", exampleMeaning: "Cô ấy đã làm việc chăm chỉ để hoàn thành mục tiêu của mình." },
    { word: "achieve", ipa: "/əˈtʃiːv/", type: "verb", example: "He achieved great success in his career.", meaning: "đạt được", exampleMeaning: "Anh ấy đã đạt được thành công lớn trong sự nghiệp của mình." },
    { word: "acquire", ipa: "/əˈkwaɪər/", type: "verb", example: "The company acquired a new building.", meaning: "đạt được", exampleMeaning: "Công ty đã đạt được một tòa nhà mới." },
    { word: "ad", ipa: "/æd/", type: "noun", example: "The ad on TV was very creative.", meaning: "quảng cáo", exampleMeaning: "Quảng cáo trên TV rất sáng tạo." },
    { word: "adjustment", ipa: "/əˈdʒʌst.mənt/", type: "noun", example: "The adjustment to the plan was necessary.", meaning: "sự điều chỉnh", exampleMeaning: "Sự điều chỉnh kế hoạch là cần thiết." },
    { word: "agenda", ipa: "/əˈdʒen.də/", type: "noun", example: "The meeting agenda was sent to everyone.", meaning: "chương trình nghị sự", exampleMeaning: "Chương trình nghị sự của cuộc họp đã được gửi cho mọi người." },
    { word: "ahead of time", ipa: "/əˈhed əv taɪm/", type: "phrase", example: "She finished the project ahead of time.", meaning: "trước thời hạn", exampleMeaning: "Cô ấy đã hoàn thành dự án trước thời hạn." },
    { word: "allergy", ipa: "/ˈæl.ər.dʒi/", type: "noun", example: "He has an allergy to peanuts.", meaning: "dị ứng", exampleMeaning: "Anh ấy bị dị ứng với đậu phộng." },
    { word: "alternate", ipa: "/ˈɔːl.tər.neɪt/", type: "verb/adjective", example: "We alternate between two different routes.", meaning: "thay thế, thay phiên", exampleMeaning: "Chúng tôi thay phiên giữa hai tuyến đường khác nhau." },
    { word: "anniversary", ipa: "/ˌæn.əˈvɝː.sər.i/", type: "noun", example: "They celebrated their 10th anniversary.", meaning: "lễ kỷ niệm", exampleMeaning: "Họ đã tổ chức lễ kỷ niệm 10 năm của mình." },
    { word: "antique", ipa: "/ænˈtiːk/", type: "noun/adjective", example: "She collects antique furniture.", meaning: "cổ xưa", exampleMeaning: "Cô ấy sưu tầm đồ nội thất cổ xưa." },
    { word: "apologize", ipa: "/əˈpɑː.lə.dʒaɪz/", type: "verb", example: "He apologized for being late.", meaning: "xin lỗi", exampleMeaning: "Anh ấy đã xin lỗi vì đến muộn." },
    { word: "apprentice", ipa: "/əˈpren.tɪs/", type: "noun", example: "The apprentice is learning to be a chef.", meaning: "người học nghề", exampleMeaning: "Người học nghề đang học để trở thành đầu bếp." },
    { word: "approve", ipa: "/əˈpruːv/", type: "verb", example: "The manager approved the new project.", meaning: "chấp thuận, phê duyệt", exampleMeaning: "Người quản lý đã phê duyệt dự án mới." },
    { word: "approximately", ipa: "/əˈprɑːk.sɪ.mət.li/", type: "adverb", example: "The event will start at approximately 7 PM.", meaning: "xấp xỉ", exampleMeaning: "Sự kiện sẽ bắt đầu vào khoảng 7 giờ tối." },
    { word: "assemble", ipa: "/əˈsem.bəl/", type: "verb", example: "They assembled the furniture in an hour.", meaning: "lắp ráp", exampleMeaning: "Họ đã lắp ráp đồ nội thất trong một giờ." },
    { word: "assign", ipa: "/əˈsaɪn/", type: "verb", example: "The teacher assigned homework to the students.", meaning: "phân công", exampleMeaning: "Giáo viên đã phân công bài tập về nhà cho học sinh." },
    { word: "assistant", ipa: "/əˈsɪs.tənt/", type: "noun", example: "The assistant helped with the presentation.", meaning: "người trợ lý", exampleMeaning: "Người trợ lý đã giúp đỡ với bài thuyết trình." },
    { word: "at all times", ipa: "/æt ɔːl taɪmz/", type: "phrase", example: "Keep your phone on at all times.", meaning: "tại tất cả thời điểm", exampleMeaning: "Giữ điện thoại của bạn bật tại tất cả thời điểm." },
    { word: "attach", ipa: "/əˈtætʃ/", type: "verb", example: "Please attach the file to the email.", meaning: "đính kèm", exampleMeaning: "Vui lòng đính kèm tệp vào email." },
    { word: "attention", ipa: "/əˈten.ʃən/", type: "noun", example: "The teacher asked for our attention.", meaning: "sự chú ý", exampleMeaning: "Giáo viên yêu cầu sự chú ý của chúng tôi." },
    { word: "attraction", ipa: "/əˈtræk.ʃən/", type: "noun", example: "The city has many tourist attractions.", meaning: "sự thu hút", exampleMeaning: "Thành phố có nhiều điểm thu hút khách du lịch." },
    { word: "award", ipa: "/əˈwɔːrd/", type: "noun/verb", example: "She received an award for her work.", meaning: "khen thưởng, phần thưởng", exampleMeaning: "Cô ấy nhận được phần thưởng cho công việc của mình." },
    { word: "banquet", ipa: "/ˈbæŋ.kwət/", type: "noun", example: "They attended a banquet at the hotel.", meaning: "tiệc lớn", exampleMeaning: "Họ đã tham dự một tiệc lớn tại khách sạn." },
    { word: "basic", ipa: "/ˈbeɪ.sɪk/", type: "adjective", example: "He has basic knowledge of coding.", meaning: "cơ bản", exampleMeaning: "Anh ấy có kiến thức cơ bản về lập trình." },
    { word: "behind time", ipa: "/bɪˈhaɪnd taɪm/", type: "phrase", example: "The train is behind time today.", meaning: "sau thời gian, trễ hẹn", exampleMeaning: "Tàu hôm nay bị trễ hẹn." },
    { word: "book shelf", ipa: "/bʊk ʃelf/", type: "noun", example: "She organized her books on the book shelf.", meaning: "kệ sách", exampleMeaning: "Cô ấy sắp xếp sách trên kệ sách." },
    { word: "border", ipa: "/ˈbɔːr.dər/", type: "noun", example: "They crossed the border into Canada.", meaning: "biên giới, viền", exampleMeaning: "Họ đã vượt qua biên giới vào Canada." },
    { word: "broadcast", ipa: "/ˈbrɔːd.kæst/", type: "verb/noun", example: "The news was broadcast on TV.", meaning: "phát sóng, truyền hình", exampleMeaning: "Tin tức được phát sóng trên TV." },
    { word: "broken", ipa: "/ˈbroʊ.kən/", type: "adjective", example: "The broken chair needs to be fixed.", meaning: "gãy, vỡ", exampleMeaning: "Chiếc ghế vỡ cần được sửa." },
    { word: "business card", ipa: "/ˈbɪz.nəs kɑːrd/", type: "noun", example: "He gave me his business card.", meaning: "danh thiếp", exampleMeaning: "Anh ấy đưa tôi danh thiếp của anh ấy." },
    { word: "carpet", ipa: "/ˈkɑːr.pɪt/", type: "noun", example: "The carpet in the room is red.", meaning: "thảm", exampleMeaning: "Tấm thảm trong phòng màu đỏ." },
    { word: "cash register", ipa: "/kæʃ ˈredʒ.ɪ.stər/", type: "noun", example: "The cashier used the cash register.", meaning: "máy tính tiền", exampleMeaning: "Nhân viên thu ngân đã sử dụng máy tính tiền." },
    { word: "charity", ipa: "/ˈtʃær.ə.ti/", type: "noun", example: "They donated money to a charity.", meaning: "lòng nhân hậu, quyên từ thiện", exampleMeaning: "Họ đã quyên góp tiền cho một tổ chức từ thiện." },
    { word: "commercial", ipa: "/kəˈmɝː.ʃəl/", type: "adjective/noun", example: "The commercial break lasted two minutes.", meaning: "thương mại", exampleMeaning: "Phần nghỉ quảng cáo kéo dài hai phút." },
    { word: "commitment", ipa: "/kəˈmɪt.mənt/", type: "noun", example: "She made a commitment to finish the project.", meaning: "sự cam kết", exampleMeaning: "Cô ấy đã cam kết hoàn thành dự án." },
    { word: "competitor", ipa: "/kəmˈpet̬.ə.t̬ɚ/", type: "noun", example: "The competitor launched a new product.", meaning: "đối thủ", exampleMeaning: "Đối thủ đã ra mắt một sản phẩm mới." },
    { word: "complaint", ipa: "/kəmˈpleɪnt/", type: "noun", example: "He filed a complaint about the service.", meaning: "phàn nàn", exampleMeaning: "Anh ấy đã gửi một phàn nàn về dịch vụ." },
    { word: "condition", ipa: "/kənˈdɪʃ.ən/", type: "noun", example: "The car is in good condition.", meaning: "điều kiện", exampleMeaning: "Chiếc xe ở trong điều kiện tốt." },
    { word: "confident", ipa: "/ˈkɑːn.fə.dənt/", type: "adjective", example: "She feels confident about the exam.", meaning: "tự tin", exampleMeaning: "Cô ấy cảm thấy tự tin về kỳ thi." },
    { word: "confusing", ipa: "/kənˈfjuː.zɪŋ/", type: "adjective", example: "The instructions were very confusing.", meaning: "bối rối", exampleMeaning: "Hướng dẫn rất gây bối rối." },
    { word: "congratulate", ipa: "/kənˈɡrætʃ.ə.leɪt/", type: "verb", example: "We congratulated her on her promotion.", meaning: "chúc mừng", exampleMeaning: "Chúng tôi đã chúc mừng cô ấy vì được thăng chức." },
    { word: "convenient", ipa: "/kənˈviːn.jənt/", type: "adjective", example: "The store’s location is very convenient.", meaning: "tiện lợi", exampleMeaning: "Vị trí của cửa hàng rất tiện lợi." },
    { word: "corporation", ipa: "/ˌkɔːr.pəˈreɪ.ʃən/", type: "noun", example: "She works for a large corporation.", meaning: "công ty, tập đoàn", exampleMeaning: "Cô ấy làm việc cho một tập đoàn lớn." },
    { word: "cousin", ipa: "/ˈkʌz.ən/", type: "noun", example: "My cousin is visiting us this weekend.", meaning: "anh em họ", exampleMeaning: "Anh em họ của tôi sẽ đến thăm chúng tôi cuối tuần này." },
    { word: "coverage", ipa: "/ˈkʌv.ər.ɪdʒ/", type: "noun", example: "The insurance provides good coverage.", meaning: "bảo hiểm toàn phần", exampleMeaning: "Bảo hiểm cung cấp bảo hiểm toàn phần tốt." },
    { word: "crowded", ipa: "/ˈkraʊ.dɪd/", type: "adjective", example: "The bus was very crowded this morning.", meaning: "đông đúc", exampleMeaning: "Xe buýt sáng nay rất đông đúc." },
    { word: "customize", ipa: "/ˈkʌs.tə.maɪz/", type: "verb", example: "You can customize your phone’s settings.", meaning: "điều chỉnh", exampleMeaning: "Bạn có thể điều chỉnh cài đặt điện thoại của mình." },
    { word: "decorate", ipa: "/ˈdek.ə.reɪt/", type: "verb", example: "They decorate the house for Christmas.", meaning: "trang trí", exampleMeaning: "Họ trang trí ngôi nhà cho Giáng sinh." },
    { word: "dedicate", ipa: "/ˈded.ɪ.keɪt/", type: "verb", example: "She dedicated her life to helping others.", meaning: "tận tâm, cống hiến", exampleMeaning: "Cô ấy đã cống hiến cuộc đời mình để giúp đỡ người khác." },
    { word: "dentist", ipa: "/ˈden.tɪst/", type: "noun", example: "I have an appointment with the dentist tomorrow.", meaning: "nha sĩ", exampleMeaning: "Tôi có cuộc hẹn với nha sĩ vào ngày mai." },
    { word: "describe", ipa: "/dɪˈskraɪb/", type: "verb", example: "Can you describe the person you saw?", meaning: "mô tả, miêu tả", exampleMeaning: "Bạn có thể mô tả người mà bạn đã thấy không?" },
    { word: "destination", ipa: "/ˌdes.təˈneɪ.ʃən/", type: "noun", example: "Our destination is a small village.", meaning: "điểm đến", exampleMeaning: "Điểm đến của chúng tôi là một ngôi làng nhỏ." },
    { word: "detach", ipa: "/dɪˈtætʃ/", type: "verb", example: "Please detach the label from the box.", meaning: "tách ra", exampleMeaning: "Vui lòng tách nhãn ra khỏi hộp." },
    { word: "discriminate", ipa: "/dɪˈskrɪm.ɪ.neɪt/", type: "verb", example: "It’s wrong to discriminate based on race.", meaning: "phân biệt", exampleMeaning: "Thật sai lầm khi phân biệt dựa trên chủng tộc." },
    { word: "dissatisfied", ipa: "/ˌdɪsˈsæt.ɪs.faɪd/", type: "adjective", example: "The customer was dissatisfied with the product.", meaning: "không hài lòng", exampleMeaning: "Khách hàng không hài lòng với sản phẩm." },
    { word: "dock", ipa: "/dɑːk/", type: "noun", example: "The ship arrived at the dock early.", meaning: "bến tàu", exampleMeaning: "Con tàu đã đến bến tàu sớm." },
    { word: "domination", ipa: "/ˌdɑː.məˈneɪ.ʃən/", type: "noun", example: "The team achieved domination in the league.", meaning: "sự thống trị", exampleMeaning: "Đội bóng đã đạt được sự thống trị trong giải đấu." },
    { word: "downtown", ipa: "/ˌdaʊnˈtaʊn/", type: "noun/adjective", example: "She works in a downtown office.", meaning: "khu buôn bán, khu kinh doanh, khu thương mại", exampleMeaning: "Cô ấy làm việc ở một văn phòng khu thương mại." },
    { word: "due", ipa: "/duː/", type: "adjective", example: "The payment is due next week.", meaning: "hạn", exampleMeaning: "Khoản thanh toán đến hạn vào tuần tới." },
    { word: "electronic", ipa: "/ɪˌlekˈtrɑː.nɪk/", type: "adjective", example: "The store sells electronic devices.", meaning: "điện", exampleMeaning: "Cửa hàng bán các thiết bị điện." },
    { word: "engrave", ipa: "/ɪnˈɡreɪv/", type: "verb", example: "They engrave names on the trophy.", meaning: "khắc, chạm trổ", exampleMeaning: "Họ khắc tên lên chiếc cúp." },
    { word: "entire", ipa: "/ɪnˈtaɪər/", type: "adjective", example: "The entire class passed the exam.", meaning: "toàn bộ", exampleMeaning: "Toàn bộ lớp đã vượt qua kỳ thi." },
    { word: "equip", ipa: "/ɪˈkwɪp/", type: "verb", example: "The kitchen is equipped with modern appliances.", meaning: "(v) trang bị", exampleMeaning: "Nhà bếp được trang bị các thiết bị hiện đại." },

    { word: "examine", ipa: "/ɪɡˈzæm.ɪn/", type: "verb", example: "The doctor will examine the patient tomorrow.", meaning: "kiểm tra", exampleMeaning: "Bác sĩ sẽ kiểm tra bệnh nhân vào ngày mai." },
    { word: "exchange", ipa: "/ɪksˈtʃeɪndʒ/", type: "verb/noun", example: "They exchange gifts every Christmas.", meaning: "trao đổi", exampleMeaning: "Họ trao đổi quà tặng mỗi dịp Giáng sinh." },
    { word: "excursion", ipa: "/ɪkˈskɝː.ʒən/", type: "noun", example: "The school organized an excursion to the zoo.", meaning: "chuyến tham quan, chuyến du ngoạn", exampleMeaning: "Trường học đã tổ chức một chuyến tham quan đến sở thú." },
    { word: "engine", ipa: "/ˈen.dʒɪn/", type: "noun", example: "The car’s engine needs repair.", meaning: "điều hành", exampleMeaning: "Động cơ của xe hơi cần được sửa chữa." },
    { word: "executive", ipa: "/ɪɡˈzek.jə.t̬ɪv/", type: "noun/adjective", example: "She is an executive at a tech company.", meaning: "điều hành", exampleMeaning: "Cô ấy là một điều hành tại một công ty công nghệ." },
    { word: "expand", ipa: "/ɪkˈspænd/", type: "verb", example: "The company plans to expand its operations.", meaning: "mở rộng", exampleMeaning: "Công ty dự định mở rộng hoạt động của mình." },
    { word: "expense", ipa: "/ɪkˈspens/", type: "noun", example: "The trip was a big expense for them.", meaning: "chi phí", exampleMeaning: "Chuyến đi là một chi phí lớn đối với họ." },
    { word: "facility", ipa: "/fəˈsɪl.ə.t̬i/", type: "noun", example: "The gym has excellent facilities.", meaning: "cơ sở vật chất", exampleMeaning: "Phòng tập thể dục có cơ sở vật chất tuyệt vời." },
    { word: "farewell", ipa: "/ˌferˈwel/", type: "noun", example: "They said farewell to their friends.", meaning: "tạm biệt, chia tay", exampleMeaning: "Họ đã nói lời tạm biệt với bạn bè của mình." },
    { word: "fashionable", ipa: "/ˈfæʃ.ən.ə.bəl/", type: "adjective", example: "She always wears fashionable clothes.", meaning: "hợp thời trang", exampleMeaning: "Cô ấy luôn mặc quần áo hợp thời trang." },
    { word: "ferry", ipa: "/ˈfer.i/", type: "noun", example: "We took a ferry to the island.", meaning: "(n) bến phà", exampleMeaning: "Chúng tôi đã đi phà đến hòn đảo." },
    { word: "figure", ipa: "/ˈfɪɡ.jɚ/", type: "noun", example: "The figure on the chart shows sales growth.", meaning: "nhân vật, con số, ảnh", exampleMeaning: "Con số trên biểu đồ cho thấy sự tăng trưởng doanh số." },
    { word: "finding", ipa: "/ˈfaɪn.dɪŋ/", type: "noun", example: "The research finding was published last week.", meaning: "tìm kiếm", exampleMeaning: "Kết quả nghiên cứu đã được công bố tuần trước." },
    { word: "fitness", ipa: "/ˈfɪt.nəs/", type: "noun", example: "She goes to the gym to improve her fitness.", meaning: "thể thao", exampleMeaning: "Cô ấy đến phòng tập để cải thiện thể lực của mình." },
    { word: "flexible", ipa: "/ˈflek.sə.bəl/", type: "adjective", example: "The schedule is flexible for everyone.", meaning: "linh hoạt", exampleMeaning: "Lịch trình linh hoạt cho mọi người." },
    { word: "fold", ipa: "/foʊld/", type: "verb", example: "She folded the clothes neatly.", meaning: "(v) cuộn, gấp", exampleMeaning: "Cô ấy gấp quần áo một cách gọn gàng." },
    { word: "found", ipa: "/faʊnd/", type: "verb", example: "They found a new company last year.", meaning: "thành lập", exampleMeaning: "Họ đã thành lập một công ty mới vào năm ngoái." },
    { word: "furnishing", ipa: "/ˈfɝː.nɪ.ʃɪŋ/", type: "noun", example: "The furnishing in the room is modern.", meaning: "trang trí nội thất", exampleMeaning: "Đồ nội thất trong phòng rất hiện đại." },
    { word: "gather", ipa: "/ˈɡæð.ɚ/", type: "verb", example: "They gather every weekend for a meeting.", meaning: "tụ tập, tập hợp", exampleMeaning: "Họ tụ tập mỗi cuối tuần để họp." },
    { word: "ground", ipa: "/ɡraʊnd/", type: "noun", example: "The ground was wet after the rain.", meaning: "đất, mặt đất", exampleMeaning: "Mặt đất ướt sau cơn mưa." },
    { word: "guarantee", ipa: "/ˌɡer.ənˈtiː/", type: "noun/verb", example: "The product comes with a one-year guarantee.", meaning: "đảm bảo", exampleMeaning: "Sản phẩm đi kèm với bảo hành một năm." },
    { word: "guideline", ipa: "/ˈɡaɪd.laɪn/", type: "noun", example: "Follow the guideline to complete the task.", meaning: "hướng dẫn", exampleMeaning: "Làm theo hướng dẫn để hoàn thành nhiệm vụ." },
    { word: "hallway", ipa: "/ˈhɔːl.weɪ/", type: "noun", example: "The hallway leads to the main room.", meaning: "hành lang", exampleMeaning: "Hành lang dẫn đến phòng chính." },
    { word: "handcraft", ipa: "/ˈhænd.kræft/", type: "noun", example: "She sells handcraft items at the market.", meaning: "(n) nghề thủ công/(v) làm thủ công", exampleMeaning: "Cô ấy bán các mặt hàng thủ công tại chợ." },
    { word: "handrail", ipa: "/ˈhænd.reɪl/", type: "noun", example: "Hold the handrail while climbing the stairs.", meaning: "lan can, tay vịn", exampleMeaning: "Giữ tay vịn khi leo cầu thang." },
    { word: "hesitate", ipa: "/ˈhez.ə.teɪt/", type: "verb", example: "Don’t hesitate to ask for help.", meaning: "do dự, lưỡng lự", exampleMeaning: "Đừng lưỡng lự khi yêu cầu giúp đỡ." },
    { word: "highway", ipa: "/ˈhaɪ.weɪ/", type: "noun", example: "The highway was busy during the holiday.", meaning: "quốc lộ, đường cao tốc", exampleMeaning: "Đường cao tốc rất đông trong kỳ nghỉ." },
    { word: "host", ipa: "/hoʊst/", type: "noun", example: "She was the host of the event.", meaning: "tổ chức, chủ trì", exampleMeaning: "Cô ấy là người chủ trì sự kiện." },
    { word: "housekeeping", ipa: "/ˈhaʊsˌkiː.pɪŋ/", type: "noun", example: "The hotel offers excellent housekeeping services.", meaning: "quản gia", exampleMeaning: "Khách sạn cung cấp dịch vụ quản gia tuyệt vời." },
    { word: "improper", ipa: "/ɪmˈprɑː.pɚ/", type: "adjective", example: "His behavior was improper at the meeting.", meaning: "không chuẩn, không chính xác, không phù hợp", exampleMeaning: "Hành vi của anh ấy không phù hợp tại cuộc họp." },
    { word: "income", ipa: "/ˈɪn.kʌm/", type: "noun", example: "Her income increased this year.", meaning: "thu nhập", exampleMeaning: "Thu nhập của cô ấy tăng lên trong năm nay." },
    { word: "inefficient", ipa: "/ˌɪn.ɪˈfɪʃ.ənt/", type: "adjective", example: "The old system is very inefficient.", meaning: "không hiệu quả", exampleMeaning: "Hệ thống cũ rất không hiệu quả." },
    { word: "inexperience", ipa: "/ˌɪn.ɪkˈspɪr.i.əns/", type: "noun", example: "His inexperience caused some mistakes.", meaning: "không có kinh nghiệm", exampleMeaning: "Sự thiếu kinh nghiệm của anh ấy đã gây ra một số sai lầm." },
    { word: "initially", ipa: "/ɪˈnɪʃ.əl.i/", type: "adverb", example: "Initially, the plan seemed perfect.", meaning: "ban đầu", exampleMeaning: "Ban đầu, kế hoạch dường như hoàn hảo." },
    { word: "inquiry", ipa: "/ɪnˈkwaɪə.ri/", type: "noun", example: "She made an inquiry about the schedule.", meaning: "hỏi, điều tra", exampleMeaning: "Cô ấy đã hỏi về lịch trình." },
    { word: "inspire", ipa: "/ɪnˈspaɪər/", type: "verb", example: "Her speech inspired many people.", meaning: "truyền cảm hứng", exampleMeaning: "Bài phát biểu của cô ấy đã truyền cảm hứng cho nhiều người." },
    { word: "interfere", ipa: "/ˌɪn.t̬ɚˈfɪr/", type: "verb", example: "Don’t interfere with their decision.", meaning: "can trở", exampleMeaning: "Đừng can trở vào quyết định của họ." },
    { word: "intern", ipa: "/ˈɪn.tɝːn/", type: "noun", example: "The intern is learning new skills.", meaning: "thực tập sinh", exampleMeaning: "Thực tập sinh đang học các kỹ năng mới." },
    { word: "intersection", ipa: "/ˌɪn.t̬ɚˈsek.ʃən/", type: "noun", example: "The accident happened at the intersection.", meaning: "ngã tư, chỗ giao nhau", exampleMeaning: "Tai nạn xảy ra ở ngã tư." },
    { word: "invaluable", ipa: "/ɪnˈvæl.jə.bəl/", type: "adjective", example: "Her advice was invaluable to the team.", meaning: "vô giá", exampleMeaning: "Lời khuyên của cô ấy vô giá đối với đội." },
    { word: "inventory", ipa: "/ˈɪn.vən.tɔːr.i/", type: "noun", example: "The store checks its inventory every month.", meaning: "hàng tồn kho", exampleMeaning: "Cửa hàng kiểm tra hàng tồn kho mỗi tháng." },
    { word: "issue", ipa: "/ˈɪʃ.uː/", type: "noun/verb", example: "The issue was resolved quickly.", meaning: "vấn đề, phát ra, đưa ra", exampleMeaning: "Vấn đề đã được giải quyết nhanh chóng." },
    { word: "itinerary", ipa: "/aɪˈtɪn.ə.rer.i/", type: "noun", example: "The itinerary includes a visit to the museum.", meaning: "hành trình, chuyến đi", exampleMeaning: "Hành trình bao gồm một chuyến thăm bảo tàng." },
    { word: "job description", ipa: "/dʒɑːb dɪˈskrɪp.ʃən/", type: "noun", example: "The job description lists all the duties.", meaning: "mô tả công việc", exampleMeaning: "Mô tả công việc liệt kê tất cả các nhiệm vụ." },
    { word: "journal", ipa: "/ˈdʒɝː.nəl/", type: "noun", example: "She writes in her journal every night.", meaning: "báo, tạp san", exampleMeaning: "Cô ấy viết vào nhật ký mỗi tối." },
    { word: "keyboard", ipa: "/ˈkiː.bɔːrd/", type: "noun", example: "The keyboard on my laptop is broken.", meaning: "bàn phím", exampleMeaning: "Bàn phím trên máy tính xách tay của tôi bị hỏng." },
    { word: "kitchen ware", ipa: "/ˈkɪtʃ.ən wer/", type: "noun", example: "She bought new kitchen ware for cooking.", meaning: "dụng cụ làm bếp", exampleMeaning: "Cô ấy đã mua dụng cụ làm bếp mới để nấu ăn." },
    { word: "landmark", ipa: "/ˈlænd.mɑːrk/", type: "noun", example: "The tower is a famous landmark in the city.", meaning: "giới hạn, cột mốc", exampleMeaning: "Ngọn tháp là một cột mốc nổi tiếng trong thành phố." },
    { word: "launch", ipa: "/lɑːntʃ/", type: "noun", example: "The launch of the product was successful.", meaning: "tùng (sản phẩm)", exampleMeaning: "Việc ra mắt sản phẩm đã thành công." },
    { word: "limitation", ipa: "/ˌlɪm.ɪˈteɪ.ʃən/", type: "noun", example: "The project has some limitations.", meaning: "sự giới hạn", exampleMeaning: "Dự án có một số giới hạn." },
    { word: "line", ipa: "/laɪn/", type: "noun", example: "The line on the map shows the route.", meaning: "dòng, hàng", exampleMeaning: "Đường kẻ trên bản đồ cho thấy tuyến đường." },
    { word: "loan", ipa: "/loʊn/", type: "noun", example: "He took a loan to buy a car.", meaning: "vay, mượn", exampleMeaning: "Anh ấy đã vay tiền để mua xe hơi." },
    { word: "low-cost", ipa: "/ˌloʊˈkɑːst/", type: "adjective", example: "They offer low-cost flights to Europe.", meaning: "chi phí thấp", exampleMeaning: "Họ cung cấp các chuyến bay chi phí thấp đến châu Âu." },
    { word: "loyal", ipa: "/ˈlɔɪ.əl/", type: "adjective", example: "She is a loyal employee of the company.", meaning: "trung thành", exampleMeaning: "Cô ấy là một nhân viên trung thành của công ty." },
    { word: "maintain", ipa: "/meɪnˈteɪn/", type: "verb", example: "They maintain the park every week.", meaning: "duy trì, bảo trì", exampleMeaning: "Họ bảo trì công viên mỗi tuần." },
    { word: "manual", ipa: "/ˈmæn.ju.əl/", type: "adjective", example: "The job requires manual labor.", meaning: "(adj) bằng tay / (n) vô tay", exampleMeaning: "Công việc đòi hỏi lao động bằng tay." },
    { word: "manufacturer", ipa: "/ˌmæn.jəˈfæk.tʃɚ.ər/", type: "noun", example: "The manufacturer produces high-quality goods.", meaning: "nhà sản xuất", exampleMeaning: "Nhà sản xuất tạo ra hàng hóa chất lượng cao." },
    { word: "material", ipa: "/məˈtɪr.i.əl/", type: "noun", example: "The dress is made of soft material.", meaning: "nguyên vật liệu", exampleMeaning: "Chiếc váy được làm từ chất liệu mềm." },
    { word: "medication", ipa: "/ˌmed.ɪˈkeɪ.ʃən/", type: "noun", example: "She takes medication for her allergies.", meaning: "thuốc, dược phẩm", exampleMeaning: "Cô ấy dùng thuốc cho dị ứng của mình." },
    { word: "merger", ipa: "/ˈmɝː.dʒɚ/", type: "noun", example: "The merger created a larger company.", meaning: "sáp nhập, liên doanh", exampleMeaning: "Việc sáp nhập đã tạo ra một công ty lớn hơn." },
    { word: "mistake", ipa: "/mɪˈsteɪk/", type: "noun", example: "He made a mistake on the test.", meaning: "lỗi", exampleMeaning: "Anh ấy đã mắc lỗi trong bài kiểm tra." },
    { word: "monitor", ipa: "/ˈmɑː.nə.t̬ɚ/", type: "noun", example: "The teacher is the class monitor.", meaning: "màn hình, lớp trưởng, người điều hành", exampleMeaning: "Giáo viên là lớp trưởng của lớp." },
    { word: "nervous", ipa: "/ˈnɝː.vəs/", type: "adjective", example: "She felt nervous before the speech.", meaning: "lo lắng", exampleMeaning: "Cô ấy cảm thấy lo lắng trước bài phát biểu." },
    { word: "net", ipa: "/net/", type: "noun", example: "They caught fish with a net.", meaning: "lưới", exampleMeaning: "Họ bắt cá bằng lưới." },
    { word: "nomination", ipa: "/ˌnɑː.məˈneɪ.ʃən/", type: "noun", example: "Her nomination for the award was unexpected.", meaning: "sự bổ nhiệm", exampleMeaning: "Việc bổ nhiệm cô ấy cho giải thưởng thật bất ngờ." },
    { word: "novel", ipa: "/ˈnɑː.vəl/", type: "noun", example: "He wrote a novel about his travels.", meaning: "tiểu thuyết", exampleMeaning: "Anh ấy đã viết một tiểu thuyết về những chuyến du lịch của mình." },
    { word: "observatory", ipa: "/əbˈzɝː.və.tɔːr.i/", type: "noun", example: "The observatory has a large telescope.", meaning: "đài thiên văn", exampleMeaning: "Đài thiên văn có một kính viễn vọng lớn." },

    { word: "occupation", ipa: "/ˌɑː.kjəˈpeɪ.ʃən/", type: "noun", example: "Her occupation is a teacher.", meaning: "sự chiếm đóng, nghề nghiệp", exampleMeaning: "Nghề nghiệp của cô ấy là giáo viên." },
    { word: "optimistic", ipa: "/ˌɑːp.təˈmɪs.tɪk/", type: "adjective", example: "He is optimistic about the future.", meaning: "lạc quan", exampleMeaning: "Anh ấy lạc quan về tương lai." },
    { word: "orientation", ipa: "/ˌɔːr.i.enˈteɪ.ʃən/", type: "noun", example: "The orientation program helped new students.", meaning: "sự định hướng", exampleMeaning: "Chương trình định hướng đã giúp các học sinh mới." },
    { word: "outdate", ipa: "/ˌaʊtˈdeɪt/", type: "verb", example: "This software will outdate soon.", meaning: "lỗi thời", exampleMeaning: "Phần mềm này sẽ sớm lỗi thời." },
    { word: "outlet", ipa: "/ˈaʊt.let/", type: "noun", example: "The outlet sells discounted clothes.", meaning: "cửa hàng", exampleMeaning: "Cửa hàng bán quần áo giảm giá." },
    { word: "overdo", ipa: "/ˌoʊ.vɚˈduː/", type: "verb", example: "Don’t overdo the decorations for the party.", meaning: "làm quá", exampleMeaning: "Đừng làm quá trang trí cho bữa tiệc." },
    { word: "overtime", ipa: "/ˈoʊ.vɚ.taɪm/", type: "noun", example: "She worked overtime to finish the project.", meaning: "quá giờ, giờ làm thêm, thêm giờ", exampleMeaning: "Cô ấy làm thêm giờ để hoàn thành dự án." },
    { word: "overwhelming", ipa: "/ˌoʊ.vɚˈwel.mɪŋ/", type: "adjective", example: "The response was overwhelming.", meaning: "quá sức, quá mức", exampleMeaning: "Phản hồi thật quá sức." },
    { word: "patio", ipa: "/ˈpæt̬.i.oʊ/", type: "noun", example: "We had dinner on the patio.", meaning: "hiên, hè, sân nhà", exampleMeaning: "Chúng tôi đã ăn tối trên sân nhà." },
    { word: "pedestrian", ipa: "/pəˈdes.tri.ən/", type: "noun", example: "The pedestrian crossed the street carefully.", meaning: "khách bộ hành, người đi bộ", exampleMeaning: "Người đi bộ đã qua đường cẩn thận." },
    { word: "pension", ipa: "/ˈpen.ʃən/", type: "noun", example: "He receives a pension after retirement.", meaning: "tiền trợ cấp", exampleMeaning: "Ông ấy nhận tiền trợ cấp sau khi nghỉ hưu." },
    { word: "persistence", ipa: "/pɚˈsɪs.təns/", type: "noun", example: "Her persistence led to success.", meaning: "sự kiên định, kiên trì", exampleMeaning: "Sự kiên trì của cô ấy đã dẫn đến thành công." },
    { word: "personnel", ipa: "/ˌpɝː.səˈnel/", type: "noun", example: "The personnel department handles hiring.", meaning: "nhân sự", exampleMeaning: "Bộ phận nhân sự xử lý việc tuyển dụng." },
    { word: "pessimistic", ipa: "/ˌpes.əˈmɪs.tɪk/", type: "adjective", example: "He is pessimistic about the outcome.", meaning: "không hy vọng, bi quan", exampleMeaning: "Anh ấy bi quan về kết quả." },
    { word: "pharmacy", ipa: "/ˈfɑːr.mə.si/", type: "noun", example: "She bought medicine at the pharmacy.", meaning: "hiệu thuốc", exampleMeaning: "Cô ấy đã mua thuốc tại hiệu thuốc." },
    { word: "photography", ipa: "/fəˈtɑː.ɡrə.fi/", type: "noun", example: "He is passionate about photography.", meaning: "nhiếp ảnh", exampleMeaning: "Anh ấy đam mê nhiếp ảnh." },
    { word: "pillow", ipa: "/ˈpɪl.oʊ/", type: "noun", example: "She fluffed the pillow before sleeping.", meaning: "gối", exampleMeaning: "Cô ấy làm phồng gối trước khi ngủ." },
    { word: "pilot", ipa: "/ˈpaɪ.lət/", type: "noun", example: "The pilot flew the plane safely.", meaning: "phi công", exampleMeaning: "Phi công đã lái máy bay an toàn." },
    { word: "pleasant", ipa: "/ˈplez.ənt/", type: "adjective", example: "The weather is pleasant today.", meaning: "dễ chịu", exampleMeaning: "Thời tiết hôm nay rất dễ chịu." },
    { word: "plumber", ipa: "/ˈplʌm.ɚ/", type: "noun", example: "The plumber fixed the leaky pipe.", meaning: "thợ sửa ống nước", exampleMeaning: "Thợ sửa ống nước đã sửa ống bị rò rỉ." },
    { word: "policy", ipa: "/ˈpɑː.lə.si/", type: "noun", example: "The company has a strict policy.", meaning: "chính sách", exampleMeaning: "Công ty có chính sách nghiêm ngặt." },
    { word: "prepare", ipa: "/prɪˈper/", type: "verb", example: "She prepared dinner for the guests.", meaning: "chuẩn bị", exampleMeaning: "Cô ấy đã chuẩn bị bữa tối cho khách." },
    { word: "prescription", ipa: "/prɪˈskrɪp.ʃən/", type: "noun", example: "The doctor wrote a prescription for medicine.", meaning: "đơn thuốc", exampleMeaning: "Bác sĩ đã viết đơn thuốc." },
    { word: "principle", ipa: "/ˈprɪn.sə.pəl/", type: "noun", example: "He follows a principle of honesty.", meaning: "nguyên tắc", exampleMeaning: "Anh ấy tuân theo nguyên tắc trung thực." },
    { word: "procedure", ipa: "/prəˈsiː.dʒɚ/", type: "noun", example: "The procedure for applying is simple.", meaning: "quy trình, thủ tục", exampleMeaning: "Thủ tục đăng ký rất đơn giản." },
    { word: "projector", ipa: "/prəˈdʒek.tɚ/", type: "noun", example: "The teacher used a projector for the lesson.", meaning: "máy chiếu", exampleMeaning: "Giáo viên đã sử dụng máy chiếu cho bài giảng." },
    { word: "publication", ipa: "/ˌpʌb.lɪˈkeɪ.ʃən/", type: "noun", example: "The publication of the book was delayed.", meaning: "sự công khai", exampleMeaning: "Việc xuất bản cuốn sách đã bị trì hoãn." },
    { word: "quality", ipa: "/ˈkwɑː.lə.t̬i/", type: "noun", example: "The quality of the product is excellent.", meaning: "chất lượng", exampleMeaning: "Chất lượng của sản phẩm rất tuyệt vời." },
    { word: "reach", ipa: "/riːtʃ/", type: "verb", example: "She reached the top of the mountain.", meaning: "với tới, đạt tới", exampleMeaning: "Cô ấy đã đạt tới đỉnh núi." },
    { word: "reception", ipa: "/rɪˈsep.ʃən/", type: "noun", example: "The hotel has a friendly reception.", meaning: "sự tiếp nhận", exampleMeaning: "Khách sạn có quầy tiếp tân thân thiện." },
    { word: "recipient", ipa: "/rɪˈsɪp.i.ənt/", type: "noun", example: "She was the recipient of the award.", meaning: "(adj) để tiếp thu, để tiếp nhận, người nhận", exampleMeaning: "Cô ấy là người nhận giải thưởng." },
    { word: "recommendation", ipa: "/ˌrek.ə.menˈdeɪ.ʃən/", type: "noun", example: "He gave a recommendation for a good restaurant.", meaning: "sự đề xuất", exampleMeaning: "Anh ấy đã đề xuất một nhà hàng ngon." },
    { word: "recycle", ipa: "/ˌriːˈsaɪ.kəl/", type: "verb", example: "We recycle paper and plastic every week.", meaning: "tái chế", exampleMeaning: "Chúng tôi tái chế giấy và nhựa mỗi tuần." },
    { word: "refreshment", ipa: "/rɪˈfreʃ.mənt/", type: "noun", example: "They served refreshments at the meeting.", meaning: "giải lao, giải khát", exampleMeaning: "Họ đã phục vụ giải khát tại cuộc họp." },
    { word: "relationship", ipa: "/rɪˈleɪ.ʃən.ʃɪp/", type: "noun", example: "They have a strong relationship.", meaning: "mối quan hệ", exampleMeaning: "Họ có một mối quan hệ bền vững." },
    { word: "relevant", ipa: "/ˈrel.ə.vənt/", type: "adjective", example: "The information is relevant to the topic.", meaning: "thích hợp, phù hợp", exampleMeaning: "Thông tin phù hợp với chủ đề." },
    { word: "relocation", ipa: "/ˌriː.loʊˈkeɪ.ʃən/", type: "noun", example: "The relocation of the office was smooth.", meaning: "sự di dời", exampleMeaning: "Việc di dời văn phòng diễn ra suôn sẻ." },
    { word: "remainder", ipa: "/rɪˈmeɪn.dɚ/", type: "noun", example: "The remainder of the food was donated.", meaning: "phần còn lại", exampleMeaning: "Phần còn lại của thức ăn đã được quyên góp." },
    { word: "remind", ipa: "/rɪˈmaɪnd/", type: "verb", example: "Please remind me about the meeting.", meaning: "nhắc lại, nhắc nhở", exampleMeaning: "Vui lòng nhắc tôi về cuộc họp." },
    { word: "rental", ipa: "/ˈren.t̬əl/", type: "noun", example: "The rental of the car was affordable.", meaning: "thuê", exampleMeaning: "Việc thuê xe rất phải chăng." },
    { word: "representative", ipa: "/ˌrep.rɪˈzen.t̬ə.t̬ɪv/", type: "noun", example: "She is the representative of the company.", meaning: "người đại diện", exampleMeaning: "Cô ấy là đại diện của công ty." },
    { word: "restore", ipa: "/rɪˈstɔːr/", type: "verb", example: "They restored the old painting.", meaning: "khôi phục", exampleMeaning: "Họ đã khôi phục bức tranh cũ." },
    { word: "restrict", ipa: "/rɪˈstrɪkt/", type: "verb", example: "They restrict access to the area.", meaning: "giới hạn", exampleMeaning: "Họ giới hạn quyền truy cập vào khu vực." },
    { word: "resume", ipa: "/ˈrez.ə.meɪ/", type: "noun", example: "She updated her resume for the job.", meaning: "tiếp tục, trở lại, sơ yếu lý lịch", exampleMeaning: "Cô ấy đã cập nhật sơ yếu lý lịch cho công việc." },
    { word: "retail", ipa: "/ˈriː.teɪl/", type: "noun", example: "The store operates in retail sales.", meaning: "bán lẻ", exampleMeaning: "Cửa hàng hoạt động trong lĩnh vực bán lẻ." },
    { word: "retire", ipa: "/rɪˈtaɪər/", type: "verb", example: "He plans to retire next year.", meaning: "nghỉ hưu", exampleMeaning: "Ông ấy dự định nghỉ hưu vào năm tới." },
    { word: "revaluate", ipa: "/riːˈvæl.ju.eɪt/", type: "verb", example: "They revaluate the property every year.", meaning: "đánh giá lại", exampleMeaning: "Họ đánh giá lại tài sản mỗi năm." },
    { word: "revenue", ipa: "/ˈrev.ə.nuː/", type: "noun", example: "The company’s revenue increased this year.", meaning: "doanh thu", exampleMeaning: "Doanh thu của công ty tăng lên trong năm nay." },
    { word: "revise", ipa: "/rɪˈvaɪz/", type: "verb", example: "She revised her notes before the exam.", meaning: "xem lại", exampleMeaning: "Cô ấy đã xem lại ghi chú trước kỳ thi." },
    { word: "right away", ipa: "/raɪt əˈweɪ/", type: "phrase", example: "Please do it right away.", meaning: "ngay lập tức", exampleMeaning: "Vui lòng làm ngay lập tức." },
    { word: "routine", ipa: "/ruːˈtiːn/", type: "noun", example: "He follows a daily routine.", meaning: "hằng ngày, thói quen", exampleMeaning: "Anh ấy tuân theo một thói quen hàng ngày." },
    { word: "safety", ipa: "/ˈseɪf.ti/", type: "noun", example: "Safety is important at work.", meaning: "an toàn", exampleMeaning: "An toàn rất quan trọng tại nơi làm việc." },
    { word: "salary", ipa: "/ˈsæl.ə.ri/", type: "noun", example: "Her salary increased this month.", meaning: "lương", exampleMeaning: "Lương của cô ấy tăng lên trong tháng này." },
    { word: "sculpture", ipa: "/ˈskʌlp.tʃɚ/", type: "noun", example: "The sculpture in the park is beautiful.", meaning: "điêu khắc", exampleMeaning: "Tác phẩm điêu khắc trong công viên rất đẹp." },
    { word: "shipment", ipa: "/ˈʃɪp.mənt/", type: "noun", example: "The shipment arrived on time.", meaning: "lô hàng", exampleMeaning: "Lô hàng đã đến đúng giờ." },
    { word: "shipper", ipa: "/ˈʃɪp.ɚ/", type: "noun", example: "The shipper delivered the package.", meaning: "người giao hàng", exampleMeaning: "Người giao hàng đã giao gói hàng." },
    { word: "shore", ipa: "/ʃɔːr/", type: "noun", example: "They walked along the shore of the lake.", meaning: "bờ biển", exampleMeaning: "Họ đi dạo dọc bờ hồ." },
    { word: "sneeze", ipa: "/sniːz/", type: "verb", example: "He sneezed because of the dust.", meaning: "hắt hơi", exampleMeaning: "Anh ấy hắt hơi vì bụi." },
    { word: "sold out", ipa: "/soʊld aʊt/", type: "phrase", example: "The tickets were sold out in an hour.", meaning: "bán hết", exampleMeaning: "Vé đã bán hết trong một giờ." },
    { word: "specification", ipa: "/ˌspes.ə.fɪˈkeɪ.ʃən/", type: "noun", example: "The product meets the specification.", meaning: "thông số", exampleMeaning: "Sản phẩm đáp ứng thông số." },
    { word: "stage", ipa: "/steɪdʒ/", type: "noun", example: "The play was performed on a big stage.", meaning: "sân khấu", exampleMeaning: "Vở kịch được biểu diễn trên một sân khấu lớn." },
    { word: "state of the art", ipa: "/steɪt əv ði ɑːrt/", type: "phrase", example: "The lab uses state-of-the-art technology.", meaning: "hiện đại", exampleMeaning: "Phòng thí nghiệm sử dụng công nghệ hiện đại." },
    { word: "steady", ipa: "/ˈsted.i/", type: "adjective", example: "The table is steady now.", meaning: "vững chắc, đều đặn", exampleMeaning: "Chiếc bàn bây giờ rất vững chắc." },
    { word: "strategy", ipa: "/ˈstræt̬.ə.dʒi/", type: "noun", example: "The company developed a new strategy.", meaning: "chiến lược", exampleMeaning: "Công ty đã phát triển một chiến lược mới." },
    { word: "stuck", ipa: "/stʌk/", type: "adjective", example: "The car got stuck in the mud.", meaning: "ứ đọng, bị tắc, mắc kẹt", exampleMeaning: "Chiếc xe bị mắc kẹt trong bùn." },
    { word: "studio", ipa: "/ˈstuː.di.oʊ/", type: "noun", example: "The artist works in a small studio.", meaning: "phòng phát thanh", exampleMeaning: "Nghệ sĩ làm việc trong một phòng phát thanh nhỏ." },
    { word: "subscription", ipa: "/səbˈskrɪp.ʃən/", type: "noun", example: "She has a subscription to the magazine.", meaning: "sự đăng ký, đặt báo", exampleMeaning: "Cô ấy có đăng ký tạp chí." }
].filter((item, index, self) =>
        index === self.findIndex((t) => t.word.toLowerCase() === item.word.toLowerCase())
    );
let vocabForReading = [
    { word: "advancement", ipa: "/ədˈvænsmənt/", type: "noun", example: "The company is focused on the advancement of technology.", meaning: "sự tiến bộ", exampleMeaning: "Công ty đang tập trung vào sự tiến bộ của công nghệ." },
    { word: "position", ipa: "/pəˈzɪʃn̩/", type: "noun", example: "He holds a senior position in the company.", meaning: "vị trí", exampleMeaning: "Anh ấy giữ một vị trí cao cấp trong công ty." },
    { word: "encourage", ipa: "/ɪnˈkʌrɪdʒ/", type: "verb", example: "The teacher encouraged the students to ask questions.", meaning: "khuyến khích", exampleMeaning: "Giáo viên khuyến khích học sinh đặt câu hỏi." },
    { word: "notify", ipa: "/ˈnoʊtɪfaɪ/", type: "verb", example: "Please notify me of any changes.", meaning: "thông báo", exampleMeaning: "Xin vui lòng thông báo cho tôi biết bất kỳ sự thay đổi nào." },
    { word: "discriminate", ipa: "/dɪsˈkrɪmɪneɪt/", type: "verb", example: "The law prohibits employers from discriminating against employees based on age.", meaning: "phân biệt đối xử", exampleMeaning: "Luật pháp cấm các nhà tuyển dụng phân biệt đối xử với nhân viên dựa trên tuổi tác." },
    { word: "against", ipa: "/əˈɡɛnst/", type: "preposition", example: "She leaned against the wall.", meaning: "chống lại", exampleMeaning: "Cô ấy tựa vào tường." },
    { word: "anyone else", ipa: "/ˈeniˌwʌn ˈɛls/", type: "phrase", example: "Is anyone else coming to the party?", meaning: "bất kỳ ai khác", exampleMeaning: "Có ai khác đến buổi tiệc không?" },
    { word: "have been", ipa: "/hæv bɪn/", type: "phrase", example: "They have been working here for years.", meaning: "đã từng ở", exampleMeaning: "Họ đã làm việc ở đây nhiều năm rồi." },
    { word: "had been", ipa: "/hæd bɪn/", type: "phrase", example: "She had been to Paris before the trip.", meaning: "đã từng ở", exampleMeaning: "Cô ấy đã từng đến Paris trước chuyến đi." },
    { word: "installing", ipa: "/ɪnˈstɔːlɪŋ/", type: "verb", example: "They are installing new software on the computers.", meaning: "lắp đặt", exampleMeaning: "Họ đang cài đặt phần mềm mới trên máy tính." },
    { word: "operate", ipa: "/ˈɒpəreɪt/", type: "verb", example: "The surgeon will operate on the patient tomorrow.", meaning: "hoạt động", exampleMeaning: "Bác sĩ phẫu thuật sẽ phẫu thuật cho bệnh nhân vào ngày mai." },
    { word: "allow", ipa: "/əˈlaʊ/", type: "verb", example: "The rules allow students to leave early.", meaning: "cho phép", exampleMeaning: "Quy định cho phép học sinh ra sớm." },
    { word: "remind", ipa: "/rɪˈmaɪnd/", type: "verb", example: "Please remind me to call her later.", meaning: "nhắc nhở", exampleMeaning: "Vui lòng nhắc tôi gọi cho cô ấy sau." },
    { word: "important", ipa: "/ɪmˈpɔːrtnt/", type: "adjective", example: "It is important to finish the project on time.", meaning: "quan trọng", exampleMeaning: "Việc hoàn thành dự án đúng hạn là quan trọng." },
    { word: "individual", ipa: "/ˌɪndɪˈvɪdʒuəl/", type: "adjective", example: "Each individual has unique talents.", meaning: "cá nhân", exampleMeaning: "Mỗi cá nhân có những tài năng riêng biệt." },
    { word: "extensively", ipa: "/ɪkˈstɛnsɪvli/", type: "adverb", example: "The topic was discussed extensively in the meeting.", meaning: "rộng rãi", exampleMeaning: "Chủ đề đã được thảo luận rộng rãi trong cuộc họp." },
    { word: "housing", ipa: "/ˈhaʊzɪŋ/", type: "noun", example: "The government is investing in affordable housing.", meaning: "nhà ở", exampleMeaning: "Chính phủ đang đầu tư vào nhà ở giá rẻ." },
    { word: "honor", ipa: "/ˈɒnər/", type: "noun", example: "She received an honor for her contributions.", meaning: "danh dự", exampleMeaning: "Cô ấy nhận được một danh dự cho những đóng góp của mình." },
    { word: "librarian", ipa: "/laɪˈbrɛəriən/", type: "noun", example: "The librarian helped me find the book.", meaning: "thủ thư", exampleMeaning: "Thủ thư đã giúp tôi tìm cuốn sách." },
    { word: "unfamiliar", ipa: "/ˌʌnfəˈmɪliər/", type: "adjective", example: "The language was unfamiliar to him.", meaning: "không quen thuộc", exampleMeaning: "Ngôn ngữ đó không quen thuộc với anh ấy." },
    { word: "electronic", ipa: "/ɪˌlɛkˈtrɒnɪk/", type: "adjective", example: "She works with electronic devices daily.", meaning: "điện tử", exampleMeaning: "Cô ấy làm việc với các thiết bị điện tử hàng ngày." },
    { word: "questionnaires", ipa: "/ˌkwɛstʃəˈnɛərz/", type: "noun", example: "We distributed questionnaires to gather feedback.", meaning: "bảng câu hỏi", exampleMeaning: "Chúng tôi phát bảng câu hỏi để thu thập phản hồi." },
    { word: "answer", ipa: "/ˈænsər/", type: "noun", example: "His answer to the question was clear.", meaning: "câu trả lời", exampleMeaning: "Câu trả lời của anh ấy cho câu hỏi rất rõ ràng." },
    { word: "reference", ipa: "/ˈrɛfərəns/", type: "noun", example: "She provided a reference for the job application.", meaning: "tài liệu tham khảo", exampleMeaning: "Cô ấy cung cấp một tài liệu tham khảo cho đơn xin việc." },
    { word: "considered", ipa: "/kənˈsɪdərd/", type: "verb", example: "They considered all options before deciding.", meaning: "xem xét", exampleMeaning: "Họ đã xem xét tất cả các lựa chọn trước khi quyết định." },
    { word: "productivity", ipa: "/ˌprɒdʌkˈtɪvɪti/", type: "noun", example: "The new system increased productivity at work.", meaning: "năng suất", exampleMeaning: "Hệ thống mới đã tăng năng suất làm việc." },
    { word: "decided", ipa: "/dɪˈsaɪdɪd/", type: "adjective", example: "She was very decided about her career choice.", meaning: "quyết định", exampleMeaning: "Cô ấy rất quyết định về lựa chọn sự nghiệp của mình." },
    { word: "implement", ipa: "/ˈɪmplɪment/", type: "verb", example: "The team will implement the new strategy next month.", meaning: "thực hiện", exampleMeaning: "Đội ngũ sẽ thực hiện chiến lược mới vào tháng tới." },
    { word: "manufacturing", ipa: "/ˌmænjʊˈfæktʃərɪŋ/", type: "noun", example: "Manufacturing cars requires advanced technology.", meaning: "sản xuất", exampleMeaning: "Sản xuất ô tô đòi hỏi công nghệ tiên tiến." },
    { word: "process", ipa: "/ˈprəʊsɛs/", type: "noun", example: "The process of learning takes time.", meaning: "quá trình", exampleMeaning: "Quá trình học tập mất thời gian." },
    { word: "economic studies", ipa: "/ˌiːkəˈnɒmɪk ˈstʌdiz/", type: "phrase", example: "He is pursuing economic studies at university.", meaning: "nghiên cứu kinh tế", exampleMeaning: "Anh ấy đang theo đuổi nghiên cứu kinh tế tại đại học." },
    { word: "predicted", ipa: "/prɪˈdɪktɪd/", type: "verb", example: "The weather forecast predicted rain for tomorrow.", meaning: "dự đoán", exampleMeaning: "Dự báo thời tiết dự đoán mưa cho ngày mai." },
    { word: "robust", ipa: "/rəʊˈbʌst/", type: "adjective", example: "The system is robust enough to handle large data.", meaning: "mạnh mẽ", exampleMeaning: "Hệ thống đủ mạnh mẽ để xử lý dữ liệu lớn." },
    { word: "environmentally-friendly", ipa: "/ɪnˌvaɪrənˈmɛntəli ˈfrɛndli/", type: "adjective", example: "They use environmentally-friendly products.", meaning: "thân thiện với môi trường", exampleMeaning: "Họ sử dụng các sản phẩm thân thiện với môi trường." },
    { word: "inspect", ipa: "/ɪnˈspɛkt/", type: "verb", example: "The manager will inspect the factory tomorrow.", meaning: "kiểm tra", exampleMeaning: "Quản lý sẽ kiểm tra nhà máy vào ngày mai." },
    { word: "explain", ipa: "/ɪkˈspleɪn/", type: "verb", example: "Can you explain the rules to me?", meaning: "giải thích", exampleMeaning: "Bạn có thể giải thích các quy tắc cho tôi không?" },
    { word: "additional", ipa: "/əˈdɪʃənl/", type: "adjective", example: "We need additional information to proceed.", meaning: "thêm vào", exampleMeaning: "Chúng tôi cần thêm thông tin để tiến hành." },
    { word: "solicit", ipa: "/səˈlɪsɪt/", type: "verb", example: "The charity solicited donations from the public.", meaning: "xin", exampleMeaning: "Tổ chức từ thiện đã xin quyên góp từ công chúng." },
    { word: "markets", ipa: "/ˈmɑːrkɪts/", type: "noun", example: "The company targets international markets.", meaning: "thị trường", exampleMeaning: "Công ty nhắm đến các thị trường quốc tế." },
    { word: "distribute", ipa: "/dɪˈstrɪbjuːt/", type: "verb", example: "They distribute food to the needy.", meaning: "phân phối", exampleMeaning: "Họ phân phối thực phẩm cho người cần." },
    { word: "job advertise", ipa: "/dʒɒb ˈædvərtaɪz/", type: "phrase", example: "The company will job advertise next week.", meaning: "quảng cáo việc làm", exampleMeaning: "Công ty sẽ quảng cáo việc làm vào tuần tới." },
    { word: "facilities", ipa: "/fəˈsɪlɪtiz/", type: "noun", example: "The school provides modern facilities for students.", meaning: "cơ sở vật chất", exampleMeaning: "Trường học cung cấp cơ sở vật chất hiện đại cho học sinh." },
    { word: "furniture", ipa: "/ˈfɜːrnɪtʃər/", type: "noun", example: "They bought new furniture for the house.", meaning: "đồ nội thất", exampleMeaning: "Họ đã mua đồ nội thất mới cho ngôi nhà." },
    { word: "latest book", ipa: "/ˈleɪtɪst bʊk/", type: "phrase", example: "Have you read the latest book by that author?", meaning: "cuốn sách mới nhất", exampleMeaning: "Bạn đã đọc cuốn sách mới nhất của tác giả đó chưa?" },
    { word: "mechanic", ipa: "/məˈkænɪk/", type: "noun", example: "The mechanic fixed my car quickly.", meaning: "thợ máy", exampleMeaning: "Thợ máy đã sửa xe của tôi nhanh chóng." },
    { word: "monthly", ipa: "/ˈmʌnθli/", type: "adjective", example: "We receive a monthly report from the team.", meaning: "hàng tháng", exampleMeaning: "Chúng tôi nhận báo cáo hàng tháng từ đội ngũ." },
    { word: "passes", ipa: "/ˈpæsɪz/", type: "noun", example: "He collected several passes for the event.", meaning: "vé thông hành", exampleMeaning: "Anh ấy đã thu thập vài vé thông hành cho sự kiện." },
    { word: "west", ipa: "/wɛst/", type: "noun", example: "The sun sets in the west.", meaning: "phía tây", exampleMeaning: "Mặt trời lặn ở phía tây." },
    { word: "springfield", ipa: "/ˈsprɪŋˌfiːld/", type: "noun", example: "Springfield is a small town in the region.", meaning: "Springfield", exampleMeaning: "Springfield là một thị trấn nhỏ trong khu vực." },
    { word: "percent", ipa: "/pərˈsɛnt/", type: "noun", example: "The tax rate is ten percent.", meaning: "phần trăm", exampleMeaning: "Tỷ lệ thuế là mười phần trăm." },
    { word: "discount", ipa: "/ˈdɪskaʊnt/", type: "noun", example: "They offered a discount on all items.", meaning: "giảm giá", exampleMeaning: "Họ cung cấp giảm giá cho tất cả các mặt hàng." },
    { word: "purchase", ipa: "/ˈpɜːrtʃəs/", type: "noun", example: "The purchase of the house was completed yesterday.", meaning: "sự mua", exampleMeaning: "Việc mua nhà đã hoàn tất hôm qua." },
    { word: "must", ipa: "/mʌst/", type: "verb", example: "You must finish your homework.", meaning: "phải", exampleMeaning: "Bạn phải hoàn thành bài tập về nhà." },
    { word: "mountains", ipa: "/ˈmaʊntənz/", type: "noun", example: "The mountains offer a stunning view.", meaning: "núi", exampleMeaning: "Những ngọn núi mang lại một khung cảnh tuyệt đẹp." },
    { word: "surrounding", ipa: "/səˈraʊndɪŋ/", type: "adjective", example: "The surrounding area is full of wildlife.", meaning: "xung quanh", exampleMeaning: "Khu vực xung quanh đầy động vật hoang dã." },
    { word: "hometown", ipa: "/ˈhoʊmˌtaʊn/", type: "noun", example: "She returned to her hometown for the holidays.", meaning: "quê nhà", exampleMeaning: "Cô ấy trở về quê nhà để nghỉ lễ." },
    { word: "young man", ipa: "/jʌŋ mæn/", type: "phrase", example: "The young man helped an elderly lady cross the street.", meaning: "chàng trai trẻ", exampleMeaning: "Chàng trai trẻ đã giúp một bà cụ qua đường." },
    { word: "rural", ipa: "/ˈrʊərəl/", type: "adjective", example: "They live in a rural area far from the city.", meaning: "nông thôn", exampleMeaning: "Họ sống ở một khu vực nông thôn xa thành phố." },
    { word: "permission", ipa: "/pərˈmɪʃn̩/", type: "noun", example: "You need permission to enter the room.", meaning: "sự cho phép", exampleMeaning: "Bạn cần sự cho phép để vào phòng." },
    { word: "signature", ipa: "/ˈsɪɡnətʃər/", type: "noun", example: "Please sign your signature on the document.", meaning: "chữ ký", exampleMeaning: "Vui lòng ký chữ ký của bạn trên tài liệu." },
    { word: "exclude", ipa: "/ɪkˈskluːd/", type: "verb", example: "They decided to exclude him from the meeting.", meaning: "loại trừ", exampleMeaning: "Họ quyết định loại trừ anh ấy khỏi cuộc họp." },
    { word: "guardian", ipa: "/ˈɡɑːrdiən/", type: "noun", example: "The guardian took care of the child.", meaning: "người giám hộ", exampleMeaning: "Người giám hộ đã chăm sóc đứa trẻ." },
    { word: "field trip", ipa: "/fiːld trɪp/", type: "phrase", example: "The students went on a field trip to the museum.", meaning: "chuyến đi thực tế", exampleMeaning: "Học sinh đã đi chuyến thực tế đến bảo tàng." },
    { word: "account", ipa: "/əˈkaʊnt/", type: "noun", example: "She opened a new bank account.", meaning: "tài khoản", exampleMeaning: "Cô ấy đã mở một tài khoản ngân hàng mới." },
    { word: "accomplish", ipa: "/əˈkɒmplɪʃ/", type: "verb", example: "He accomplished his goal after years of effort.", meaning: "hoàn thành", exampleMeaning: "Anh ấy đã hoàn thành mục tiêu sau nhiều năm nỗ lực." },
    { word: "construction", ipa: "/kənˈstrʌkʃn̩/", type: "noun", example: "The construction of the bridge will take two years.", meaning: "xây dựng", exampleMeaning: "Việc xây dựng cầu sẽ mất hai năm." },
    { word: "reduce", ipa: "/rɪˈdjuːs/", type: "verb", example: "We need to reduce our energy consumption.", meaning: "giảm", exampleMeaning: "Chúng ta cần giảm tiêu thụ năng lượng." },
    { word: "decrease", ipa: "/dɪˈkriːs/", type: "verb", example: "The temperature will decrease overnight.", meaning: "giảm xuống", exampleMeaning: "Nhiệt độ sẽ giảm xuống qua đêm." },
    { word: "evaluate", ipa: "/ɪˈvæljueɪt/", type: "verb", example: "The teacher will evaluate the students' performance.", meaning: "đánh giá", exampleMeaning: "Giáo viên sẽ đánh giá hiệu suất của học sinh." },
    { word: "stockholder", ipa: "/ˈstɒkˌhəʊldər/", type: "noun", example: "The stockholders voted on the new policy.", meaning: "cổ đông", exampleMeaning: "Các cổ đông đã bỏ phiếu về chính sách mới." },
    { word: "situate", ipa: "/ˈsɪtʃueɪt/", type: "verb", example: "The hotel is situated near the beach.", meaning: "đặt", exampleMeaning: "Khách sạn được đặt gần bãi biển." },
    { word: "destination", ipa: "/ˌdɛstɪˈneɪʃn̩/", type: "noun", example: "Paris is our final destination.", meaning: "điểm đến", exampleMeaning: "Paris là điểm đến cuối cùng của chúng tôi." },
    { word: "pessimistic", ipa: "/ˌpɛsɪˈmɪstɪk/", type: "adjective", example: "He is pessimistic about the future.", meaning: "bi quan", exampleMeaning: "Anh ấy bi quan về tương lai." },
    { word: "advertise", ipa: "/ˈædvərtaɪz/", type: "verb", example: "The company will advertise the new product on TV.", meaning: "quảng cáo", exampleMeaning: "Công ty sẽ quảng cáo sản phẩm mới trên TV." },
    { word: "currently", ipa: "/ˈkʌrəntli/", type: "adverb", example: "She is currently working on a new project.", meaning: "hiện tại", exampleMeaning: "Cô ấy hiện đang làm việc trên một dự án mới." },
    { word: "fine", ipa: "/faɪn/", type: "noun", example: "He paid a fine for parking illegally.", meaning: "phạt tiền", exampleMeaning: "Anh ấy đã trả tiền phạt vì đậu xe trái phép." },
    
    { word: "author", ipa: "/ˈɔː.θər/", type: "noun", example: "The author signed copies of her book.", meaning: "tác giả", exampleMeaning: "Tác giả đã ký vào các bản sao của cuốn sách của cô ấy." },
    { word: "authorize", ipa: "/ˈɔː.θə.raɪz/", type: "verb", example: "The manager authorized the new policy.", meaning: "ủy quyền, cho phép", exampleMeaning: "Quản lý đã ủy quyền cho chính sách mới." },
    { word: "authority", ipa: "/ɔːˈθɒr.ɪ.ti/", type: "noun", example: "The local authority handles road repairs.", meaning: "quyền lực, cơ quan chức năng", exampleMeaning: "Cơ quan địa phương xử lý việc sửa chữa đường." },
    { word: "unauthorized", ipa: "/ʌnˈɔː.θə.raɪz/", type: "adjective", example: "Unauthorized personnel cannot enter.", meaning: "không được phép", exampleMeaning: "Nhân viên không được phép không thể vào." },
    { word: "double", ipa: "/ˈdʌb.əl/", type: "verb", example: "They aim to double their sales this year.", meaning: "gấp đôi", exampleMeaning: "Họ đặt mục tiêu tăng gấp đôi doanh số trong năm nay." },
    { word: "doubt", ipa: "/daʊt/", type: "noun", example: "There’s no doubt she’ll succeed.", meaning: "nghi ngờ", exampleMeaning: "Không có nghi ngờ gì rằng cô ấy sẽ thành công." },
    { word: "undoubted", ipa: "/ʌnˈdaʊ.tɪd/", type: "adjective", example: "His undoubted skill impressed everyone.", meaning: "không nghi ngờ, chắc chắn", exampleMeaning: "Kỹ năng chắc chắn của anh ấy gây ấn tượng với mọi người." },
    { word: "smoothly", ipa: "/ˈsmuːð.li/", type: "adverb", example: "The event ran smoothly without issues.", meaning: "mượt mà, trơn tru", exampleMeaning: "Sự kiện diễn ra trơn tru mà không có vấn đề gì." },
    { word: "smooth", ipa: "/ˈsmuːð/", type: "adjective", example: "The fabric feels smooth to the touch.", meaning: "mượt mà, nhẹ nhàng", exampleMeaning: "Vải cảm thấy mượt mà khi chạm vào." },
    { word: "profit", ipa: "/ˈprɒf.ɪt/", type: "noun", example: "The company made a profit last quarter.", meaning: "lợi nhuận", exampleMeaning: "Công ty đã kiếm được lợi nhuận trong quý vừa qua." },
    { word: "profitable", ipa: "/ˈprɒf.ɪ.tə.bl/", type: "adjective", example: "This venture is highly profitable.", meaning: "có khả năng lợi nhuận", exampleMeaning: "Dự án này có khả năng lợi nhuận cao." },
    { word: "minor", ipa: "/ˈmaɪ.nər/", type: "adjective", example: "It’s just a minor delay.", meaning: "nhỏ, không quan trọng", exampleMeaning: "Đó chỉ là một sự chậm trễ nhỏ." },
    { word: "senior", ipa: "/ˈsiː.ni.ər/", type: "adjective", example: "He’s a senior member of the team.", meaning: "cấp cao, cao niên, Sv năm 4", exampleMeaning: "Anh ấy là thành viên cấp cao của đội." },
    { word: "freshmen", ipa: "/ˈfreʃ.mən/", type: "noun", example: "Freshmen started classes this week.", meaning: "sinh viên năm nhất", exampleMeaning: "Sinh viên năm nhất bắt đầu lớp học tuần này." },
    { word: "shareholder", ipa: "/ˈʃeəˌhəʊl.dər/", type: "noun", example: "Shareholders approved the merger.", meaning: "cổ đông", exampleMeaning: "Các cổ đông đã phê duyệt việc sáp nhập." },
    { word: "participate in", ipa: "/pɑːˈtɪs.ɪ.peɪt/", type: "verb", example: "They will participate in the workshop.", meaning: "tham gia", exampleMeaning: "Họ sẽ tham gia vào buổi hội thảo." },
    { word: "anticipate", ipa: "/ænˈtɪs.ɪ.peɪt/", type: "verb", example: "We anticipate a busy season ahead.", meaning: "dự đoán, mong chờ", exampleMeaning: "Chúng tôi mong chờ một mùa bận rộn phía trước." },
    { word: "participant", ipa: "/pɑːˈtɪs.ɪ.pənt/", type: "noun", example: "Every participant received a prize.", meaning: "người tham gia", exampleMeaning: "Mỗi người tham gia đều nhận được giải thưởng." },
    { word: "promote", ipa: "/prəˈməʊt/", type: "verb", example: "They promoted her to team leader.", meaning: "thăng chức, quảng bá", exampleMeaning: "Họ đã thăng chức cô ấy làm trưởng nhóm." },
    { word: "demote", ipa: "/dɪˈməʊt/", type: "verb", example: "He was demoted after the mistake.", meaning: "giáng chức", exampleMeaning: "Anh ấy bị giáng chức sau sai lầm." },
    { word: "willingness", ipa: "/ˈwɪl.ɪŋ.nəs/", type: "noun", example: "Her willingness to learn stood out.", meaning: "sẵn lòng", exampleMeaning: "Sự sẵn lòng học hỏi của cô ấy nổi bật." },
    { word: "willing", ipa: "/ˈwɪl.ɪŋ/", type: "adjective", example: "She’s willing to assist anytime.", meaning: "sẵn sàng", exampleMeaning: "Cô ấy sẵn sàng hỗ trợ bất cứ lúc nào." },
    { word: "comfortable", ipa: "/ˈkʌmf.tə.bl/", type: "adjective", example: "The sofa is very comfortable.", meaning: "thoải mái", exampleMeaning: "Chiếc sofa rất thoải mái." },
    { word: "capacity", ipa: "/kəˈpæs.ɪ.ti/", type: "noun", example: "The hall has a capacity of 200.", meaning: "năng lực, sức chứa", exampleMeaning: "Hội trường có sức chứa 200 người." },
    { word: "phishing", ipa: "/ˈfɪʃ.ɪŋ/", type: "noun", example: "Phishing scams target email users.", meaning: "lừa đảo", exampleMeaning: "Các vụ lừa đảo qua email nhắm vào người dùng email." },
    { word: "tremendous", ipa: "/trɪˈmen.dəs/", type: "adjective", example: "The storm caused tremendous damage.", meaning: "to lớn, tuyệt vời, khủng khiếp", exampleMeaning: "Cơn bão gây ra thiệt hại khủng khiếp." },
    { word: "ensure", ipa: "/ɪnˈʃɔːr/", type: "verb", example: "We must ensure everyone is safe.", meaning: "đảm bảo", exampleMeaning: "Chúng ta phải đảm bảo mọi người đều an toàn." },
    { word: "assure", ipa: "/əˈʃɔːr/", type: "verb", example: "He assured us of his support.", meaning: "đảm bảo, trấn an", exampleMeaning: "Anh ấy trấn an chúng tôi về sự hỗ trợ của anh ấy." },
    { word: "insure", ipa: "/ɪnˈʃɔːr/", type: "verb", example: "They insured their house against fire.", meaning: "bảo hiểm", exampleMeaning: "Họ đã bảo hiểm ngôi nhà chống cháy." },
    { word: "renew", ipa: "/rɪˈnjuː/", type: "verb", example: "She needs to renew her subscription.", meaning: "gia hạn, làm mới", exampleMeaning: "Cô ấy cần gia hạn đăng ký của mình." },
    { word: "reassign", ipa: "/ˌriː.əˈsaɪn/", type: "verb", example: "They reassigned him to another department.", meaning: "phân công lại", exampleMeaning: "Họ đã phân công lại anh ấy sang một bộ phận khác." },
    { word: "assign", ipa: "/əˈsaɪn/", type: "verb", example: "The teacher assigned a new project.", meaning: "phân công", exampleMeaning: "Giáo viên đã phân công một dự án mới." },
    { word: "assignment", ipa: "/əˈsaɪn.mənt/", type: "noun", example: "The assignment is due next week.", meaning: "nhiệm vụ", exampleMeaning: "Nhiệm vụ phải nộp vào tuần tới." },
    { word: "complex", ipa: "/ˈkɒm.pleks/", type: "noun", example: "The shopping complex is huge.", meaning: "khu phức hợp", exampleMeaning: "Khu phức hợp mua sắm rất lớn." },
    { word: "complete", ipa: "/kəmˈpliːt/", type: "verb", example: "She completed the form quickly.", meaning: "hoàn thành", exampleMeaning: "Cô ấy hoàn thành biểu mẫu nhanh chóng." },
    { word: "compare", ipa: "/kəmˈper/", type: "verb", example: "Let’s compare prices before buying.", meaning: "so sánh", exampleMeaning: "Hãy so sánh giá trước khi mua." },
    { word: "compete", ipa: "/kəmˈpiːt/", type: "verb", example: "They compete in national tournaments.", meaning: "cạnh tranh", exampleMeaning: "Họ cạnh tranh trong các giải đấu quốc gia." },
    { word: "competent", ipa: "/ˈkɒm.pɪ.tənt/", type: "adjective", example: "He’s a competent programmer.", meaning: "thành thạo, khá giỏi", exampleMeaning: "Anh ấy là một lập trình viên thành thạo." },
    { word: "competitor", ipa: "/kəmˈpet.ɪ.tər/", type: "noun", example: "Their main competitor lowered prices.", meaning: "đối thủ", exampleMeaning: "Đối thủ chính của họ đã giảm giá." },
    { word: "charity", ipa: "/ˈtʃær.ɪ.ti/", type: "noun", example: "The event raised funds for charity.", meaning: "lòng nhân hậu, từ thiện", exampleMeaning: "Sự kiện đã quyên góp tiền cho từ thiện." },
    { word: "donate", ipa: "/dəʊˈneɪt/", type: "verb", example: "They donate clothes to the poor.", meaning: "quyên góp", exampleMeaning: "Họ quyên góp quần áo cho người nghèo." },
    { word: "donor", ipa: "/ˈdəʊ.nər/", type: "noun", example: "The donor sponsored the school.", meaning: "người quyên góp", exampleMeaning: "Người quyên góp đã tài trợ cho trường học." },
    { word: "recovery", ipa: "/rɪˈkʌv.ər.i/", type: "noun", example: "Her recovery took three months.", meaning: "sự phục hồi", exampleMeaning: "Sự phục hồi của cô ấy mất ba tháng." },
    { word: "cover", ipa: "/ˈkʌv.ər/", type: "verb", example: "Please cover the pot while cooking.", meaning: "che phủ, bao quát", exampleMeaning: "Vui lòng đậy nắp nồi khi nấu." },
    { word: "discovery", ipa: "/dɪˈskʌv.ər.i/", type: "noun", example: "The discovery of oil boosted the economy.", meaning: "khám phá", exampleMeaning: "Việc khám phá dầu mỏ đã thúc đẩy kinh tế." },
    { word: "invest", ipa: "/ɪnˈvest/", type: "verb", example: "They invest in renewable energy.", meaning: "đầu tư", exampleMeaning: "Họ đầu tư vào năng lượng tái tạo." },
    { word: "investor", ipa: "/ɪnˈves.tər/", type: "noun", example: "The investor funded the startup.", meaning: "nhà đầu tư", exampleMeaning: "Nhà đầu tư đã tài trợ cho công ty khởi nghiệp." },
    { word: "investigate", ipa: "/ɪnˈves.tɪ.ɡeɪt/", type: "verb", example: "Police will investigate the theft.", meaning: "điều tra", exampleMeaning: "Cảnh sát sẽ điều tra vụ trộm." },
    { word: "upcoming", ipa: "/ˌʌpˈkʌm.ɪŋ/", type: "adjective", example: "The upcoming concert is sold out.", meaning: "sắp tới", exampleMeaning: "Buổi hòa nhạc sắp tới đã bán hết vé." },
    { word: "international", ipa: "/ˌɪn.təˈnæʃ.ən.əl/", type: "adjective", example: "It’s an international company.", meaning: "quốc tế", exampleMeaning: "Đó là một công ty quốc tế." },
    { word: "fulfill", ipa: "/fʊlˈfɪl/", type: "verb", example: "He fulfilled his duties well.", meaning: "thực hiện", exampleMeaning: "Anh ấy đã thực hiện tốt nhiệm vụ của mình." },
    { word: "budget", ipa: "/ˈbʌdʒ.ɪt/", type: "noun", example: "We need to stick to the budget.", meaning: "ngân sách", exampleMeaning: "Chúng ta cần tuân thủ ngân sách." },
    { word: "distinguish", ipa: "/dɪˈstɪŋ.ɡwɪʃ/", type: "verb", example: "Can you distinguish between these wines?", meaning: "phân biệt", exampleMeaning: "Bạn có thể phân biệt giữa các loại rượu này không?" },
    { word: "distinguished", ipa: "/dɪˈstɪŋ.ɡwɪʃt/", type: "adjective", example: "She’s a distinguished scientist.", meaning: "nổi bật, xuất chúng", exampleMeaning: "Cô ấy là một nhà khoa học xuất chúng." },
    { word: "accompany", ipa: "/əˈkʌm.pə.ni/", type: "verb", example: "I’ll accompany you to the station.", meaning: "đồng hành, đi kèm", exampleMeaning: "Tôi sẽ đồng hành cùng bạn đến nhà ga." },
    { word: "consumer", ipa: "/kənˈsjuː.mər/", type: "noun", example: "The consumer prefers local products.", meaning: "người tiêu dùng", exampleMeaning: "Người tiêu dùng thích sản phẩm địa phương." },
    { word: "recall", ipa: "/rɪˈkɔːl/", type: "verb", example: "They recalled the defective cars.", meaning: "thu hồi, nhớ lại", exampleMeaning: "Họ đã thu hồi những chiếc xe bị lỗi." },
    { word: "paradise", ipa: "/ˈpær.ə.daɪs/", type: "noun", example: "The island is a paradise for tourists.", meaning: "thiên đường", exampleMeaning: "Hòn đảo là thiên đường cho du khách." },
    { word: "candidate", ipa: "/ˈkæn.dɪ.dət/", type: "noun", example: "He’s a candidate for mayor.", meaning: "ứng cử viên", exampleMeaning: "Anh ấy là ứng cử viên cho vị trí thị trưởng." },
    { word: "job hunter", ipa: "/dʒɒb ˈhʌn.tər/", type: "noun", example: "The job hunter updated his resume.", meaning: "người săn việc", exampleMeaning: "Người săn việc đã cập nhật hồ sơ của mình." },
    { word: "head hunter", ipa: "/hed ˈhʌn.tər/", type: "noun", example: "The head hunter recruited a CEO.", meaning: "nhà tuyển dụng chuyên nghiệp", exampleMeaning: "Nhà tuyển dụng chuyên nghiệp đã tuyển một giám đốc điều hành." },
    { word: "qualification", ipa: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", type: "noun", example: "Her qualification includes a degree.", meaning: "trình độ, bằng cấp", exampleMeaning: "Trình độ của cô ấy bao gồm một bằng cấp." },
    { word: "quality", ipa: "/ˈkwɒl.ɪ.ti/", type: "noun", example: "The quality of this product is excellent.", meaning: "chất lượng", exampleMeaning: "Chất lượng của sản phẩm này rất tuyệt vời." },
    { word: "qualify", ipa: "/ˈkwɒl.ɪ.faɪ/", type: "verb", example: "She qualified for the finals.", meaning: "đủ điều kiện", exampleMeaning: "Cô ấy đủ điều kiện vào chung kết." },
    { word: "release", ipa: "/rɪˈliːs/", type: "verb", example: "They will release the new software soon.", meaning: "phát hành, thả ra", exampleMeaning: "Họ sẽ phát hành phần mềm mới sớm." },
    { word: "lease", ipa: "/liːs/", type: "verb", example: "He leased a car for a year.", meaning: "thuê", exampleMeaning: "Anh ấy đã thuê một chiếc xe trong một năm." },
    { word: "withdraw", ipa: "/wɪðˈdrɔː/", type: "verb", example: "She withdrew money from the bank.", meaning: "rút lại", exampleMeaning: "Cô ấy đã rút tiền từ ngân hàng." },
    { word: "draw", ipa: "/drɔː/", type: "verb", example: "He can draw amazing portraits.", meaning: "vẽ, rút ra", exampleMeaning: "Anh ấy có thể vẽ những bức chân dung tuyệt vời." },
    { word: "experience", ipa: "/ɪkˈspɪə.ri.əns/", type: "noun", example: "She has five years of experience.", meaning: "kinh nghiệm", exampleMeaning: "Cô ấy có năm năm kinh nghiệm." },
    { word: "experiment", ipa: "/ɪkˈsper.ə.mənt/", type: "noun", example: "The experiment tested their hypothesis.", meaning: "thí nghiệm", exampleMeaning: "Thí nghiệm đã kiểm tra giả thuyết của họ." },
    { word: "response", ipa: "/rɪˈspɒns/", type: "noun", example: "His response was quick and clear.", meaning: "sự phản hồi", exampleMeaning: "Phản hồi của anh ấy nhanh chóng và rõ ràng." },
    { word: "respond", ipa: "/rɪˈspɒnd/", type: "verb", example: "Please respond to my question.", meaning: "phản hồi", exampleMeaning: "Vui lòng phản hồi câu hỏi của tôi." },
    { word: "estimate", ipa: "/ˈes.tɪ.meɪt/", type: "verb", example: "They estimate the project will take a month.", meaning: "ước lượng, ước tính", exampleMeaning: "Họ ước tính dự án sẽ mất một tháng." },
    { word: "consent", ipa: "/kənˈsent/", type: "noun", example: "We need your consent to proceed.", meaning: "sự đồng ý", exampleMeaning: "Chúng tôi cần sự đồng ý của bạn để tiếp tục." },
    { word: "supervisor", ipa: "/ˈsuː.pə.vaɪ.zər/", type: "noun", example: "The supervisor oversees the team.", meaning: "người giám sát", exampleMeaning: "Người giám sát quản lý đội ngũ." },
    { word: "appear", ipa: "/əˈpɪər/", type: "verb", example: "The moon will appear tonight.", meaning: "xuất hiện", exampleMeaning: "Mặt trăng sẽ xuất hiện tối nay." },
    { word: "appearance", ipa: "/əˈpɪə.rəns/", type: "noun", example: "Her appearance was striking.", meaning: "hình dáng, sự xuất hiện", exampleMeaning: "Vẻ ngoài của cô ấy rất ấn tượng." },
    { word: "shortage", ipa: "/ˈʃɔː.tɪdʒ/", type: "noun", example: "There’s a shortage of staff.", meaning: "sự thiếu hụt", exampleMeaning: "Có sự thiếu hụt nhân viên." },
    { word: "struggle", ipa: "/ˈstrʌɡ.əl/", type: "noun", example: "The struggle for equality continues.", meaning: "đấu tranh, khó khăn", exampleMeaning: "Cuộc đấu tranh cho bình đẳng vẫn tiếp diễn." },
    { word: "urgently", ipa: "/ˈɜː.dʒənt.li/", type: "adverb", example: "We need assistance urgently.", meaning: "gấp, khẩn cấp", exampleMeaning: "Chúng tôi cần hỗ trợ khẩn cấp." },
    { word: "urge", ipa: "/ɜːdʒ/", type: "verb", example: "I urge you to reconsider.", meaning: "thúc giục", exampleMeaning: "Tôi thúc giục bạn xem xét lại." },
    { word: "utility", ipa: "/juːˈtɪl.ɪ.ti/", type: "noun", example: "The utility of this app is obvious.", meaning: "tiện ích", exampleMeaning: "Tiện ích của ứng dụng này rất rõ ràng." },
    { word: "utilize", ipa: "/ˈjuː.təl.aɪz/", type: "verb", example: "They utilize resources efficiently.", meaning: "sử dụng", exampleMeaning: "Họ sử dụng tài nguyên hiệu quả." },
    { word: "embarrassment", ipa: "/ɪmˈbær.əs.mənt/", type: "noun", example: "His speech caused embarrassment.", meaning: "sự lúng túng, xấu hổ", exampleMeaning: "Bài phát biểu của anh ấy gây ra sự xấu hổ." },
    { word: "disability", ipa: "/ˌdɪs.əˈbɪl.ɪ.ti/", type: "noun", example: "The ramp aids those with disabilities.", meaning: "tàn tật", exampleMeaning: "Con dốc hỗ trợ những người bị tàn tật." },
    { word: "able", ipa: "/ˈeɪ.bl/", type: "adjective", example: "She’s able to lift heavy weights.", meaning: "có khả năng", exampleMeaning: "Cô ấy có khả năng nâng vật nặng." },
    { word: "ability", ipa: "/əˈbɪl.ɪ.ti/", type: "noun", example: "His ability to focus is impressive.", meaning: "khả năng", exampleMeaning: "Khả năng tập trung của anh ấy rất ấn tượng." },
    { word: "sport", ipa: "/spɔːt/", type: "noun", example: "Basketball is his favorite sport.", meaning: "thể thao", exampleMeaning: "Bóng rổ là môn thể thao yêu thích của anh ấy." },
    { word: "support", ipa: "/səˈpɔːt/", type: "verb", example: "We support local businesses.", meaning: "hỗ trợ", exampleMeaning: "Chúng tôi hỗ trợ các doanh nghiệp địa phương." },
    { word: "application", ipa: "/ˌæp.lɪˈkeɪ.ʃən/", type: "noun", example: "Her application was accepted.", meaning: "ứng dụng, đơn xin việc", exampleMeaning: "Đơn xin việc của cô ấy đã được chấp nhận." },
    { word: "applicant", ipa: "/ˈæp.lɪ.kənt/", type: "noun", example: "The applicant has strong credentials.", meaning: "người nộp đơn", exampleMeaning: "Người nộp đơn có hồ sơ ấn tượng." },
    { word: "apply", ipa: "/əˈplaɪ/", type: "verb", example: "He applied for a visa.", meaning: "ứng tuyển", exampleMeaning: "Anh ấy đã nộp đơn xin visa." },
    { word: "coordinate", ipa: "/kəʊˈɔː.dɪ.neɪt/", type: "verb", example: "They coordinate schedules daily.", meaning: "phối hợp", exampleMeaning: "Họ phối hợp lịch trình hàng ngày." },
    { word: "commended", ipa: "/kəˈmend/", type: "verb", example: "She was commended for her bravery.", meaning: "được khen ngợi", exampleMeaning: "Cô ấy được khen ngợi vì sự dũng cảm." },
    { word: "recommend", ipa: "/ˌrek.əˈmend/", type: "verb", example: "I recommend trying this dish.", meaning: "khuyến nghị", exampleMeaning: "Tôi khuyến nghị thử món ăn này." },
    { word: "accurate", ipa: "/ˈæk.jə.rət/", type: "adjective", example: "The data is accurate and reliable.", meaning: "chính xác", exampleMeaning: "Dữ liệu chính xác và đáng tin cậy." },
    { word: "prompt", ipa: "/prɒmpt/", type: "adjective", example: "His prompt reply saved time.", meaning: "nhanh chóng, đúng hạn", exampleMeaning: "Phản hồi nhanh chóng của anh ấy đã tiết kiệm thời gian." },
    { word: "terminate", ipa: "/ˈtɜː.mɪ.neɪt/", type: "verb", example: "They terminated the agreement early.", meaning: "chấm dứt, kết thúc", exampleMeaning: "Họ đã chấm dứt thỏa thuận sớm." },
    { word: "emphatic", ipa: "/ɪmˈfæt.ɪk/", type: "adjective", example: "Her emphatic tone convinced us.", meaning: "nhấn mạnh, quả quyết", exampleMeaning: "Giọng điệu quả quyết của cô ấy đã thuyết phục chúng tôi." },
    { word: "solution", ipa: "/səˈluː.ʃən/", type: "noun", example: "We found a solution to the puzzle.", meaning: "giải pháp", exampleMeaning: "Chúng tôi đã tìm ra giải pháp cho câu đố." },
    { word: "inflation", ipa: "/ɪnˈfleɪ.ʃən/", type: "noun", example: "Inflation increased prices.", meaning: "lạm phát", exampleMeaning: "Lạm phát làm tăng giá cả." },
    { word: "realize", ipa: "/ˈrɪə.laɪz/", type: "verb", example: "She realized she forgot her keys.", meaning: "nhận ra, nhận thức", exampleMeaning: "Cô ấy nhận ra mình quên chìa khóa." },
    { word: "relevance", ipa: "/ˈrel.ə.vəns/", type: "noun", example: "The relevance of this study is clear.", meaning: "tính liên quan", exampleMeaning: "Tính liên quan của nghiên cứu này rất rõ ràng." },
    { word: "firefighter", ipa: "/ˈfaɪə.faɪ.tə(r)/", type: "noun", example: "The firefighter rescued the cat.", meaning: "lính cứu hỏa", exampleMeaning: "Lính cứu hỏa đã cứu con mèo." },
    { word: "messy", ipa: "/ˈmes.i/", type: "adjective", example: "His desk is always messy.", meaning: "bừa bộn, lộn xộn", exampleMeaning: "Bàn làm việc của anh ấy luôn bừa bộn." },
    { word: "caterer", ipa: "/ˈkeɪ.tə.rə(r)/", type: "noun", example: "The caterer served delicious food.", meaning: "người cung cấp đồ ăn", exampleMeaning: "Người cung cấp đồ ăn đã phục vụ món ăn ngon." },
    { word: "expense", ipa: "/ɪkˈspens/", type: "noun", example: "Travel is a major expense.", meaning: "chi phí", exampleMeaning: "Du lịch là một chi phí lớn." },
    { word: "self-employ", ipa: "/ˌself.ɪmˈplɔɪ/", type: "verb", example: "He decided to self-employ as a consultant.", meaning: "tự làm chủ, tự kinh doanh", exampleMeaning: "Anh ấy quyết định tự kinh doanh với tư cách là một tư vấn." },
    { word: "leaflet", ipa: "/ˈliː.flət/", type: "noun", example: "They distributed leaflets at the fair.", meaning: "tờ rơi, tờ bướm", exampleMeaning: "Họ đã phát tờ rơi tại hội chợ." },
    { word: "beforehand", ipa: "/bɪˈfɔː.hænd/", type: "adverb", example: "We prepared the room beforehand.", meaning: "trước, trước đó", exampleMeaning: "Chúng tôi đã chuẩn bị phòng trước đó." },
    { word: "conquer", ipa: "/ˈkɒŋ.kə(r)/", type: "verb", example: "She conquered her fear of heights.", meaning: "chinh phục", exampleMeaning: "Cô ấy đã chinh phục nỗi sợ độ cao." },
    { word: "announce", ipa: "/əˈnaʊns/", type: "verb", example: "They announced the results today.", meaning: "thông báo", exampleMeaning: "Họ đã thông báo kết quả hôm nay." },
    { word: "balance", ipa: "/ˈbæl.əns/", type: "noun", example: "He checked his account balance.", meaning: "cân bằng, số dư", exampleMeaning: "Anh ấy đã kiểm tra số dư tài khoản của mình." },
    { word: "devote", ipa: "/dɪˈvəʊt/", type: "verb", example: "She devotes time to volunteering.", meaning: "cống hiến, dành cho", exampleMeaning: "Cô ấy dành thời gian cho việc tình nguyện." },
    { word: "bulletin", ipa: "/ˈbʊl.ə.tɪn/", type: "noun", example: "The bulletin announced a new policy.", meaning: "bản tin, thông báo", exampleMeaning: "Bản tin đã thông báo một chính sách mới." },
    { word: "brochure", ipa: "/ˈbrəʊ.ʃə(r)/", type: "noun", example: "The brochure lists tour details.", meaning: "sách nhỏ, tài liệu quảng cáo", exampleMeaning: "Tài liệu quảng cáo liệt kê chi tiết chuyến du lịch." },
    { word: "debate", ipa: "/dɪˈbeɪt/", type: "noun", example: "The debate focused on education.", meaning: "tranh luận, thảo luận", exampleMeaning: "Cuộc tranh luận tập trung vào giáo dục." },
    { word: "reviewer", ipa: "/rɪˈvjuː.ə(r)/", type: "noun", example: "The reviewer rated the movie highly.", meaning: "người xem xét, phê bình", exampleMeaning: "Người phê bình đã đánh giá cao bộ phim." },
    { word: "compensation", ipa: "/ˌkɒm.pənˈseɪ.ʃən/", type: "noun", example: "He received compensation for overtime.", meaning: "bồi thường, thù lao", exampleMeaning: "Anh ấy nhận được thù lao cho việc làm thêm giờ." },
    { word: "freelance", ipa: "/ˈfriː.lɑːns/", type: "adjective", example: "She’s a freelance designer.", meaning: "làm tự do", exampleMeaning: "Cô ấy là một nhà thiết kế tự do." },
    { word: "dismiss", ipa: "/dɪsˈmɪs/", type: "verb", example: "They dismissed the case quickly.", meaning: "sa thải, bác bỏ", exampleMeaning: "Họ đã bác bỏ vụ việc nhanh chóng." },
    { word: "reveal", ipa: "/rɪˈviːl/", type: "verb", example: "He revealed his plans to us.", meaning: "tiết lộ, bày tỏ", exampleMeaning: "Anh ấy đã tiết lộ kế hoạch của mình cho chúng tôi." },
    { word: "remodel", ipa: "/ˌriːˈmɒd.əl/", type: "verb", example: "They remodeled their home last year.", meaning: "sửa chữa lại, cải tạo", exampleMeaning: "Họ đã cải tạo ngôi nhà của mình vào năm ngoái." },
    { word: "mandatory", ipa: "/ˈmæn.də.tər.i/", type: "adjective", example: "Training is mandatory for all staff.", meaning: "bắt buộc", exampleMeaning: "Đào tạo là bắt buộc đối với tất cả nhân viên." },
    { word: "confront", ipa: "/kənˈfrʌnt/", type: "verb", example: "She confronted him about the lie.", meaning: "đối mặt, đối chất", exampleMeaning: "Cô ấy đã đối chất với anh ấy về lời nói dối." },
    { word: "remote", ipa: "/rɪˈməʊt/", type: "adjective", example: "The cabin is in a remote area.", meaning: "xa xôi, điều khiển từ xa", exampleMeaning: "Cabin nằm ở một khu vực xa xôi." },
    { word: "portion", ipa: "/ˈpɔː.ʃən/", type: "noun", example: "He ate a small portion of cake.", meaning: "phần, khẩu phần", exampleMeaning: "Anh ấy đã ăn một phần bánh nhỏ." },
    { word: "outline", ipa: "/ˈaʊt.laɪn/", type: "noun", example: "The outline of the plan is ready.", meaning: "diễn giải, phác thảo", exampleMeaning: "Bản phác thảo của kế hoạch đã sẵn sàng." },
    { word: "specialization", ipa: "/ˌspeʃ.əl.aɪˈzeɪ.ʃən/", type: "noun", example: "Her specialization is in finance.", meaning: "chuyên môn hóa", exampleMeaning: "Chuyên môn của cô ấy là trong lĩnh vực tài chính." },
    { word: "special", ipa: "/ˌspeʃ.əl/", type: "adjective", example: "This is a special day for us.", meaning: "đặc biệt", exampleMeaning: "Đây là một ngày đặc biệt đối với chúng tôi." },
    { word: "specialize", ipa: "/ˈspeʃ.ə.laɪz/", type: "verb", example: "She specializes in pediatric care.", meaning: "chuyên về", exampleMeaning: "Cô ấy chuyên về chăm sóc nhi khoa." },
    { word: "specialist", ipa: "/ˈspeʃ.əl.ɪst/", type: "noun", example: "He’s a specialist in cybersecurity.", meaning: "chuyên gia", exampleMeaning: "Anh ấy là chuyên gia trong lĩnh vực an ninh mạng." },
    { word: "numerous", ipa: "/ˈnjuː.mər.əs/", type: "adjective", example: "There are numerous reasons to join.", meaning: "đa số, nhiều", exampleMeaning: "Có rất nhiều lý do để tham gia." },
    { word: "shift", ipa: "/ʃɪft/", type: "noun", example: "She works the night shift.", meaning: "ca làm việc, thay đổi", exampleMeaning: "Cô ấy làm việc ca đêm." },
    { word: "handwork", ipa: "/ˈhænd.wɜːk/", type: "noun", example: "The handwork on this quilt is beautiful.", meaning: "công việc thủ công", exampleMeaning: "Công việc thủ công trên tấm chăn này rất đẹp." },
    { word: "duration", ipa: "/djʊəˈreɪ.ʃən/", type: "noun", example: "The duration of the movie is two hours.", meaning: "thời gian, thời lượng", exampleMeaning: "Thời lượng của bộ phim là hai giờ." },
    { word: "during", ipa: "/ˈdʊr.ɪŋ/", type: "preposition", example: "It rained during the match.", meaning: "trong suốt", exampleMeaning: "Trời mưa trong suốt trận đấu." },
    { word: "durable", ipa: "/ˈdʊr.ə.bəl/", type: "adjective", example: "These shoes are durable and stylish.", meaning: "độ bền", exampleMeaning: "Đôi giày này bền và thời trang." },
    { word: "personnel", ipa: "/ˌpɜː.səˈnel/", type: "noun", example: "The personnel were trained last week.", meaning: "nhân sự", exampleMeaning: "Nhân sự đã được đào tạo tuần trước." },
    { word: "lack of", ipa: "/læk əv/", type: "phrase", example: "There’s a lack of funding for the project.", meaning: "thiếu thốn, thiếu hụt", exampleMeaning: "Có sự thiếu hụt kinh phí cho dự án." },
    { word: "hardly", ipa: "/ˈhɑːd.li/", type: "adverb", example: "I hardly recognized him after years.", meaning: "hiếm khi, hầu như không", exampleMeaning: "Tôi hầu như không nhận ra anh ấy sau nhiều năm." },
    { word: "late", ipa: "/leɪt/", type: "adjective", example: "He arrived late for the meeting.", meaning: "muộn, trễ", exampleMeaning: "Anh ấy đến muộn cuộc họp." },
    { word: "confident", ipa: "/ˈkɒn.fɪ.dənt/", type: "adjective", example: "She’s confident in her abilities.", meaning: "tự tin", exampleMeaning: "Cô ấy tự tin vào khả năng của mình." },
    { word: "notable", ipa: "/ˈnəʊ.tə.bl/", type: "adjective", example: "His notable achievements were celebrated.", meaning: "nổi bật, đáng chú ý", exampleMeaning: "Những thành tựu nổi bật của anh ấy được kỷ niệm." },
    { word: "security", ipa: "/sɪˈkjʊə.rɪ.ti/", type: "noun", example: "Security was tightened at the event.", meaning: "an ninh, bảo mật", exampleMeaning: "An ninh được thắt chặt tại sự kiện." },
    { word: "solar", ipa: "/ˈsəʊ.lə(r)/", type: "adjective", example: "They installed solar panels.", meaning: "mặt trời, năng lượng mặt trời", exampleMeaning: "Họ đã lắp đặt các tấm năng lượng mặt trời." },
    { word: "accessible", ipa: "/əkˈses.ə.bl/", type: "adjective", example: "The park is accessible to everyone.", meaning: "dễ tiếp cận", exampleMeaning: "Công viên dễ tiếp cận với mọi người." },
    { word: "revenue", ipa: "/ˈrev.ən.juː/", type: "noun", example: "The company’s revenue grew this year.", meaning: "doanh thu", exampleMeaning: "Doanh thu của công ty tăng trưởng trong năm nay." },
    { word: "reply", ipa: "/rɪˈplaɪ/", type: "verb", example: "Please reply to this email soon.", meaning: "trả lời", exampleMeaning: "Vui lòng trả lời email này sớm." },
    { word: "significant", ipa: "/sɪɡˈnɪf.ɪ.kənt/", type: "adjective", example: "This is a significant improvement.", meaning: "quan trọng, có ý nghĩa", exampleMeaning: "Đây là một cải tiến quan trọng." },
    { word: "innovation", ipa: "/ˌɪn.əˈveɪ.ʃən/", type: "noun", example: "Innovation drives technological progress.", meaning: "đổi mới", exampleMeaning: "Đổi mới thúc đẩy tiến bộ công nghệ." },
    { word: "emphasis", ipa: "/ˈem.fə.sɪs/", type: "noun", example: "The emphasis is on teamwork.", meaning: "nhấn mạnh", exampleMeaning: "Sự nhấn mạnh là về làm việc nhóm." },
    { word: "emphasize", ipa: "/ˈem.fə.saɪz/", type: "verb", example: "He emphasized the need for punctuality.", meaning: "đặt trọng tâm, nhấn mạnh", exampleMeaning: "Anh ấy nhấn mạnh sự cần thiết của việc đúng giờ." },
    { word: "absolutely", ipa: "/ˌæb.səˈluːt.li/", type: "adverb", example: "I absolutely love this song.", meaning: "tuyệt đối, hoàn toàn", exampleMeaning: "Tôi hoàn toàn yêu thích bài hát này." },
    { word: "thoroughly", ipa: "/ˈθʌr.ə.li/", type: "adverb", example: "She thoroughly cleaned the kitchen.", meaning: "kỹ lưỡng, kỹ càng", exampleMeaning: "Cô ấy đã lau dọn nhà bếp kỹ lưỡng." },
    { word: "irrelevant", ipa: "/ɪˈrel.ə.vənt/", type: "adjective", example: "That detail is irrelevant to the case.", meaning: "không liên quan", exampleMeaning: "Chi tiết đó không liên quan đến vụ việc." },
    { word: "remiss", ipa: "/rɪˈmɪs/", type: "adjective", example: "He was remiss in his duties.", meaning: "lơ là, thiếu sót", exampleMeaning: "Anh ấy lơ là trong nhiệm vụ của mình." },
    { word: "rival", ipa: "/ˈraɪ.vəl/", type: "noun", example: "Their rival launched a new product.", meaning: "đối thủ", exampleMeaning: "Đối thủ của họ đã ra mắt một sản phẩm mới." },
    { word: "expenditure", ipa: "/ɪkˈspen.dɪ.tʃə(r)/", type: "noun", example: "Expenditure on marketing increased.", meaning: "chi tiêu, khoản chi", exampleMeaning: "Khoản chi cho tiếp thị đã tăng lên." },
    { word: "employee", ipa: "/ɪmˈplɔɪ.iː/", type: "noun", example: "The employee received a promotion.", meaning: "nhân viên", exampleMeaning: "Nhân viên đã được thăng chức." },
    { word: "employer", ipa: "/ɪmˈplɔɪ.ə(r)/", type: "noun", example: "The employer provided benefits.", meaning: "chủ lao động", exampleMeaning: "Chủ lao động đã cung cấp các phúc lợi." },
    { word: "employ", ipa: "/ɪmˈplɔɪ/", type: "verb", example: "They employ over 100 workers.", meaning: "tuyển dụng", exampleMeaning: "Họ tuyển dụng hơn 100 công nhân." },
    { word: "employment", ipa: "/ɪmˈplɔɪ.mənt/", type: "noun", example: "Employment opportunities are growing.", meaning: "việc làm", exampleMeaning: "Cơ hội việc làm đang tăng lên." },
    { word: "handle", ipa: "/ˈhæn.dl/", type: "verb", example: "She can handle difficult tasks.", meaning: "xử lý, cầm nắm", exampleMeaning: "Cô ấy có thể xử lý các nhiệm vụ khó khăn." },
    { word: "raise money", ipa: "/reɪz ˈmʌn.i/", type: "phrase", example: "They raise money for schools.", meaning: "huy động tiền", exampleMeaning: "Họ huy động tiền cho các trường học." },
    { word: "fund", ipa: "/fʌnd/", type: "noun", example: "The fund supports local projects.", meaning: "tiền quỹ", exampleMeaning: "Quỹ hỗ trợ các dự án địa phương." },
    { word: "fundraising", ipa: "/ˈfʌndˌreɪ.zɪŋ/", type: "noun", example: "Fundraising events start next month.", meaning: "gây quỹ", exampleMeaning: "Các sự kiện gây quỹ bắt đầu vào tháng tới." },
    { word: "refund", ipa: "/ˈriː.fʌnd/", type: "noun", example: "She requested a refund for the ticket.", meaning: "hoàn tiền", exampleMeaning: "Cô ấy yêu cầu hoàn tiền cho vé." },
    { word: "shirt", ipa: "/ʃɜːt/", type: "noun", example: "He wore a white shirt to the party.", meaning: "áo", exampleMeaning: "Anh ấy mặc áo trắng đến bữa tiệc." },
    { word: "account", ipa: "/əˈkaʊnt/", type: "noun", example: "She opened a savings account.", meaning: "tài khoản", exampleMeaning: "Cô ấy đã mở một tài khoản tiết kiệm." },
    { word: "accountant", ipa: "/əˈkaʊntənt/", type: "noun", example: "The accountant reviewed the finances.", meaning: "kế toán", exampleMeaning: "Kế toán đã xem xét tài chính." },
    { word: "count", ipa: "/kaʊnt/", type: "verb", example: "Please count the items carefully.", meaning: "đếm", exampleMeaning: "Vui lòng đếm các món đồ cẩn thận." },
    { word: "count on", ipa: "/kaʊnt ɑːn/", type: "phrase", example: "I can count on him for help.", meaning: "tin tưởng", exampleMeaning: "Tôi có thể tin tưởng anh ấy sẽ giúp đỡ." },
    { word: "accountable", ipa: "/əˈkaʊntəbl/", type: "adjective", example: "He’s accountable for the results.", meaning: "chịu trách nhiệm", exampleMeaning: "Anh ấy chịu trách nhiệm cho kết quả." },
    { word: "account for", ipa: "/əˈkaʊnt fɔːr/", type: "phrase", example: "This accounts for the delay.", meaning: "giải thích", exampleMeaning: "Điều này giải thích cho sự chậm trễ." },
    { word: "accomplish", ipa: "/əˈkɑːmplɪʃ/", type: "verb", example: "She accomplished her goals.", meaning: "hoàn thành", exampleMeaning: "Cô ấy đã hoàn thành mục tiêu của mình." },
    { word: "accomplished", ipa: "/əˈkɑːm.plɪʃt/", type: "adjective", example: "He’s an accomplished musician.", meaning: "giỏi, hoàn hảo", exampleMeaning: "Anh ấy là một nhạc sĩ giỏi." },
    { word: "accomplishment", ipa: "/əˈkɑːm.plɪʃ.mənt/", type: "noun", example: "Finishing the race was an accomplishment.", meaning: "thành tựu", exampleMeaning: "Hoàn thành cuộc đua là một thành tựu." },
    { word: "construction", ipa: "/kənˈstrʌkʃən/", type: "noun", example: "The construction of the bridge began.", meaning: "sự xây dựng", exampleMeaning: "Việc xây dựng cây cầu đã bắt đầu." },
    { word: "instruction", ipa: "/ɪnˈstrʌkʃən/", type: "noun", example: "Follow the instruction manual.", meaning: "sự hướng dẫn", exampleMeaning: "Làm theo sách hướng dẫn." },
    { word: "reduce", ipa: "/rɪˈduːs/", type: "verb", example: "They aim to reduce waste.", meaning: "giảm", exampleMeaning: "Họ đặt mục tiêu giảm rác thải." },
    { word: "cut down", ipa: "/kʌt daʊn/", type: "phrase", example: "He cut down on sugar.", meaning: "cắt giảm", exampleMeaning: "Anh ấy đã cắt giảm lượng đường." },
    { word: "rebate", ipa: "/ˈriː.beɪt/", type: "noun", example: "She received a rebate on her purchase.", meaning: "trả giá", exampleMeaning: "Cô ấy nhận được một khoản trả giá khi mua hàng." },
    { word: "bargain", ipa: "/ˈbɑːr.ɡɪn/", type: "noun", example: "The jacket was a great bargain.", meaning: "trả giá", exampleMeaning: "Chiếc áo khoác là một món hời lớn." },
    { word: "gain", ipa: "/ɡeɪn/", type: "verb", example: "They gained new skills.", meaning: "có lợi", exampleMeaning: "Họ đã có được những kỹ năng mới." },
    { word: "decrease", ipa: "/dɪˈkriːs/", type: "verb", example: "Sales may decrease this month.", meaning: "giảm", exampleMeaning: "Doanh số có thể giảm trong tháng này." },
    { word: "increase", ipa: "/ɪnˈkriːs/", type: "verb", example: "They plan to increase production.", meaning: "tăng", exampleMeaning: "Họ dự định tăng sản lượng." },
    { word: "evaluate", ipa: "/ɪˈvæljueɪt/", type: "verb", example: "We need to evaluate the results.", meaning: "đánh giá, định giá", exampleMeaning: "Chúng ta cần đánh giá kết quả." },
    { word: "value", ipa: "/ˈvæljuː/", type: "noun", example: "The value of gold rose.", meaning: "giá trị", exampleMeaning: "Giá trị của vàng đã tăng." },
    { word: "valid", ipa: "/ˈvælɪd/", type: "adjective", example: "The coupon is still valid.", meaning: "hiệu lực", exampleMeaning: "Phiếu giảm giá vẫn còn hiệu lực." },
    { word: "stock-holder", ipa: "/ˈstɑːkˌhoʊl.dɚ/", type: "noun", example: "The stock-holder voted on the proposal.", meaning: "cổ đông", exampleMeaning: "Cổ đông đã bỏ phiếu cho đề xuất." },
    { word: "situate", ipa: "/ˈsɪtʃueɪt/", type: "verb", example: "The house is situated near the park.", meaning: "vị trí", exampleMeaning: "Ngôi nhà được đặt gần công viên." },
    { word: "situation", ipa: "/ˌsɪtʃ.uˈeɪ.ʃən/", type: "noun", example: "The situation became tense.", meaning: "tình huống", exampleMeaning: "Tình huống trở nên căng thẳng." },
    { word: "destination", ipa: "/ˌdes.təˈneɪ.ʃən/", type: "noun", example: "Their destination is Hawaii.", meaning: "đích đến, điểm đến", exampleMeaning: "Điểm đến của họ là Hawaii." },
    { word: "arrival", ipa: "/əˈraɪ.vəl/", type: "noun", example: "His arrival was delayed by traffic.", meaning: "điểm đến", exampleMeaning: "Việc đến của anh ấy bị trì hoãn bởi giao thông." },
    { word: "pessimistic", ipa: "/ˌpesɪˈmɪstɪk/", type: "adjective", example: "He’s pessimistic about the outcome.", meaning: "bi quan, không có hy vọng", exampleMeaning: "Anh ấy bi quan về kết quả." },
    { word: "not hopeful", ipa: "/nɑːt ˈhoʊpfʊl/", type: "phrase", example: "She’s not hopeful about winning.", meaning: "không có hy vọng", exampleMeaning: "Cô ấy không có hy vọng về việc chiến thắng." },
    { word: "advertise", ipa: "/ˈæd.vɚ.taɪz/", type: "verb", example: "They advertise their products online.", meaning: "quảng cáo", exampleMeaning: "Họ quảng cáo sản phẩm của mình trực tuyến." },
    { word: "publicize", ipa: "/ˈpʌb.lə.saɪz/", type: "verb", example: "They publicized the event on TV.", meaning: "công khai", exampleMeaning: "Họ đã công khai sự kiện trên TV." },
    { word: "public", ipa: "/ˈpʌblɪk/", type: "adjective", example: "It’s a public park for all.", meaning: "cộng đồng, công cộng", exampleMeaning: "Đó là công viên công cộng cho mọi người." },
    { word: "publish", ipa: "/ˈpʌblɪʃ/", type: "verb", example: "They will publish the book soon.", meaning: "xuất bản", exampleMeaning: "Họ sẽ xuất bản cuốn sách sớm." },
    { word: "currently", ipa: "/ˈkʌrəntli/", type: "adverb", example: "He’s currently on vacation.", meaning: "hiện tại", exampleMeaning: "Anh ấy hiện đang đi nghỉ." },
    { word: "recently", ipa: "/ˈriːsntli/", type: "adverb", example: "She recently started a new job.", meaning: "gần đây", exampleMeaning: "Cô ấy gần đây đã bắt đầu một công việc mới." },
    { word: "fine", ipa: "/faɪn/", type: "noun", example: "He paid a fine for speeding.", meaning: "tiền phạt", exampleMeaning: "Anh ấy đã trả tiền phạt vì chạy quá tốc độ." },
    { word: "fire", ipa: "/faɪr/", type: "verb", example: "They fired him for poor performance.", meaning: "sa thải", exampleMeaning: "Họ đã sa thải anh ấy vì hiệu suất kém." },
    { word: "abandon", ipa: "/əˈbændən/", type: "verb", example: "They abandoned the old plan.", meaning: "bỏ rơi", exampleMeaning: "Họ đã bỏ rơi kế hoạch cũ." },
    { word: "evacuate", ipa: "/ɪˈvækjueɪt/", type: "verb", example: "They evacuated the building quickly.", meaning: "di cư, sơ tán", exampleMeaning: "Họ đã sơ tán tòa nhà nhanh chóng." },
    { word: "boast", ipa: "/boʊst/", type: "verb", example: "He boasted about his success.", meaning: "phóng đại, nói quá", exampleMeaning: "Anh ấy khoe khoang về thành công của mình." },
    { word: "boost", ipa: "/buːst/", type: "verb", example: "The sale boosted their profits.", meaning: "nâng cao, thúc đẩy", exampleMeaning: "Việc giảm giá đã thúc đẩy lợi nhuận của họ." },
    { word: "blueprint", ipa: "/ˈbluːprɪnt/", type: "noun", example: "The blueprint outlines the building design.", meaning: "bản thiết kế mới", exampleMeaning: "Bản thiết kế mới phác thảo thiết kế tòa nhà." },
    { word: "substitute", ipa: "/ˈsʌb.stə.tuːt/", type: "verb", example: "She substituted milk with cream.", meaning: "thay thế", exampleMeaning: "Cô ấy thay thế sữa bằng kem." },
    { word: "substitution", ipa: "/ˌsʌb.stəˈtuː.ʃən/", type: "noun", example: "The substitution improved the recipe.", meaning: "sự thay thế", exampleMeaning: "Sự thay thế đã cải thiện công thức." },
    { word: "admission", ipa: "/ədˈmɪʃən/", type: "noun", example: "Admission to the event is free.", meaning: "sự vào cổng, sự vào cửa", exampleMeaning: "Việc vào cửa sự kiện là miễn phí." },
    { word: "mission", ipa: "/ˈmɪʃən/", type: "noun", example: "Their mission is to educate.", meaning: "nhiệm vụ", exampleMeaning: "Nhiệm vụ của họ là giáo dục." },
    { word: "discourage", ipa: "/dɪsˈkʌrɪdʒ/", type: "verb", example: "They discourage late submissions.", meaning: "không khuyến khích", exampleMeaning: "Họ không khuyến khích nộp muộn." },
    { word: "encourage", ipa: "/ɪnˈkʌrɪdʒ/", type: "verb", example: "We encourage creativity here.", meaning: "khuyến khích", exampleMeaning: "Chúng tôi khuyến khích sự sáng tạo ở đây." },
    { word: "further", ipa: "/ˈfɝː.ðɚ/", type: "adverb", example: "We need to discuss this further.", meaning: "xa hơn, thêm", exampleMeaning: "Chúng ta cần thảo luận thêm về việc này." },
    { word: "direct", ipa: "/dɪˈrekt/", type: "verb", example: "He directed us to the exit.", meaning: "chỉ đạo hướng dẫn", exampleMeaning: "Anh ấy chỉ đạo chúng tôi đến lối ra." },
    { word: "director", ipa: "/daɪˈrek.tɚ/", type: "noun", example: "The director led the meeting.", meaning: "giám đốc, đạo diễn", exampleMeaning: "Giám đốc đã dẫn dắt cuộc họp." },
    { word: "directly", ipa: "/daɪˈrekt.li/", type: "adverb", example: "She called me directly.", meaning: "trực tiếp", exampleMeaning: "Cô ấy đã gọi trực tiếp cho tôi." },
    { word: "familiar with", ipa: "/fəˈmɪliər wɪð/", type: "phrase", example: "He’s familiar with the rules.", meaning: "quen với", exampleMeaning: "Anh ấy quen với các quy tắc." },
    { word: "acquaintance with", ipa: "/əˈkweɪntəns wɪð/", type: "phrase", example: "She has an acquaintance with the team.", meaning: "quen với", exampleMeaning: "Cô ấy quen với đội ngũ." },
    { word: "quote", ipa: "/kwoʊt/", type: "verb", example: "He quoted a price for the service.", meaning: "ước tính", exampleMeaning: "Anh ấy đã ước tính giá cho dịch vụ." },
    { word: "discard", ipa: "/dɪˈskɑːrd/", type: "verb", example: "They discarded the broken chair.", meaning: "vứt bỏ", exampleMeaning: "Họ đã vứt bỏ chiếc ghế hỏng." },
    { word: "economical", ipa: "/ˌiː.kəˈnɑː.mɪ.kəl/", type: "adjective", example: "This car is economical to run.", meaning: "tiết kiệm", exampleMeaning: "Chiếc xe này tiết kiệm khi vận hành." },
    { word: "economic", ipa: "/ˌiː.kəˈnɑː.mɪk/", type: "adjective", example: "Economic growth is steady.", meaning: "thuộc về kinh tế", exampleMeaning: "Tăng trưởng kinh tế đang ổn định." },
    { word: "economics", ipa: "/ˌiː.kəˈnɑː.mɪks/", type: "noun", example: "He studies economics at college.", meaning: "môn kinh tế học", exampleMeaning: "Anh ấy học môn kinh tế học ở đại học." },
    { word: "compromise", ipa: "/ˈkɑːm.prə.maɪz/", type: "noun", example: "They reached a compromise agreement.", meaning: "thỏa thuận, giao ước", exampleMeaning: "Họ đã đạt được một thỏa thuận giao ước." },

    { word: "summarize", ipa: "/ˈsʌməraɪz/", type: "verb", example: "Please summarize the report in a few sentences.", meaning: "tóm tắt", exampleMeaning: "Vui lòng tóm tắt báo cáo trong vài câu." },
    { word: "summary", ipa: "/ˈsʌməri/", type: "noun", example: "The summary of the book was concise.", meaning: "tóm lược", exampleMeaning: "Tóm lược của cuốn sách rất súc tích." },
    { word: "remind", ipa: "/rɪˈmaɪnd/", type: "verb", example: "She reminded me to call my mother.", meaning: "nhắc nhở", exampleMeaning: "Cô ấy nhắc tôi gọi cho mẹ." },
    { word: "dramatically", ipa: "/drəˈmætɪkli/", type: "adverb", example: "The situation changed dramatically overnight.", meaning: "một cách kịch tính", exampleMeaning: "Tình huống thay đổi một cách kịch tính qua đêm." },
    { word: "administrate", ipa: "/ədˈmɪnɪstreɪt/", type: "verb", example: "He was hired to administrate the new project.", meaning: "quản lý", exampleMeaning: "Anh ấy được thuê để quản lý dự án mới." },
    { word: "concern about", ipa: "/kənˈsɜːrn əˈbaʊt/", type: "phrase", example: "She expressed concern about the safety measures.", meaning: "lo lắng về", exampleMeaning: "Cô ấy bày tỏ lo lắng về các biện pháp an toàn." },
    { word: "identification", ipa: "/aɪˌdɛntɪfɪˈkeɪʃən/", type: "noun", example: "You need identification to enter the building.", meaning: "sự nhận dạng", exampleMeaning: "Bạn cần giấy tờ nhận dạng để vào tòa nhà." },
    { word: "identical", ipa: "/aɪˈdɛntɪkəl/", type: "adjective", example: "The twins look identical.", meaning: "giống hệt", exampleMeaning: "Cặp song sinh trông giống hệt nhau." },
    { word: "identify", ipa: "/aɪˈdɛntɪfaɪ/", type: "verb", example: "Can you identify the suspect in the photo?", meaning: "nhận diện", exampleMeaning: "Bạn có thể nhận diện nghi phạm trong ảnh không?" },
    { word: "take off", ipa: "/teɪk ɒf/", type: "phrasal verb", example: "The plane will take off in ten minutes.", meaning: "cất cánh", exampleMeaning: "Máy bay sẽ cất cánh trong mười phút." },
    { word: "landing", ipa: "/ˈlændɪŋ/", type: "noun", example: "The landing was smooth despite the storm.", meaning: "hạ cánh", exampleMeaning: "Cuộc hạ cánh rất mượt mà dù có bão." },
    { word: "effect", ipa: "/ɪˈfɛkt/", type: "noun", example: "The new policy had a positive effect.", meaning: "hiệu quả", exampleMeaning: "Chính sách mới có hiệu quả tích cực." },
    { word: "take effect", ipa: "/teɪk ɪˈfɛkt/", type: "phrasal verb", example: "The law will take effect next month.", meaning: "có hiệu lực", exampleMeaning: "Luật sẽ có hiệu lực vào tháng tới." },
    { word: "efficient", ipa: "/ɪˈfɪʃənt/", type: "adjective", example: "The new system is more efficient than the old one.", meaning: "hiệu quả", exampleMeaning: "Hệ thống mới hiệu quả hơn hệ thống cũ." },
    { word: "be named", ipa: "/bi neɪmd/", type: "phrase", example: "The bridge was named after a famous engineer.", meaning: "được đặt tên", exampleMeaning: "Cây cầu được đặt tên theo một kỹ sư nổi tiếng." },
    { word: "chairman", ipa: "/ˈtʃɛərmən/", type: "noun", example: "The chairman opened the meeting with a speech.", meaning: "chủ tịch", exampleMeaning: "Chủ tịch đã khai mạc cuộc họp bằng một bài phát biểu." },
    { word: "afford to", ipa: "/əˈfɔːrd tə/", type: "phrase", example: "Can we afford to buy a new car?", meaning: "có khả năng chi trả", exampleMeaning: "Chúng ta có khả năng mua xe mới không?" },
    { word: "affordable", ipa: "/əˈfɔːrdəbəl/", type: "adjective", example: "The house is affordable for young families.", meaning: "mức giá phải chăng", exampleMeaning: "Ngôi nhà có giá phải chăng cho các gia đình trẻ." },
    { word: "reason", ipa: "/ˈriːzən/", type: "noun", example: "What is the reason for your decision?", meaning: "lý do", exampleMeaning: "Lý do cho quyết định của bạn là gì?" },
    { word: "reasonable", ipa: "/ˈriːzənəbəl/", type: "adjective", example: "The price seems reasonable to me.", meaning: "hợp lý", exampleMeaning: "Giá cả dường như hợp lý với tôi." },
    { word: "strength", ipa: "/strɛŋkθ/", type: "noun", example: "Her strength helped her overcome the challenge.", meaning: "sức mạnh", exampleMeaning: "Sức mạnh của cô ấy đã giúp cô vượt qua thử thách." },
    { word: "patron", ipa: "/ˈpeɪtrən/", type: "noun", example: "The patron donated money to the museum.", meaning: "nhà bảo trợ", exampleMeaning: "Nhà bảo trợ đã quyên góp tiền cho bảo tàng." },
    { word: "vendor", ipa: "/ˈvɛndər/", type: "noun", example: "The vendor sold fresh fruits at the market.", meaning: "người bán", exampleMeaning: "Người bán đã bán trái cây tươi tại chợ." },
    { word: "condense", ipa: "/kənˈdɛns/", type: "verb", example: "Condense the text into a shorter version.", meaning: "ngắn gọn", exampleMeaning: "Ngắn gọn văn bản thành phiên bản ngắn hơn." },
    { word: "condemn", ipa: "/kənˈdɛm/", type: "verb", example: "They condemn the act of violence.", meaning: "lên án", exampleMeaning: "Họ lên án hành vi bạo lực." },
    { word: "executive", ipa: "/ɪɡˈzɛkjətɪv/", type: "noun/adjective", example: "The executive team made the final decision.", meaning: "giám đốc, điều hành", exampleMeaning: "Đội ngũ điều hành đã đưa ra quyết định cuối cùng." },
    { word: "CEO = chief executive officer", ipa: "/siː iː oʊ ɪz tʃiːf ɪɡˈzɛkjətɪv ˈɒfɪsər/", type: "noun", example: "The CEO announced a new company strategy.", meaning: "giám đốc điều hành", exampleMeaning: "Giám đốc điều hành đã công bố chiến lược mới của công ty." },
    { word: "assist", ipa: "/əˈsɪst/", type: "verb", example: "He assisted me with the heavy load.", meaning: "hỗ trợ", exampleMeaning: "Anh ấy đã hỗ trợ tôi với tải nặng." },
    { word: "assistant", ipa: "/əˈsɪstənt/", type: "noun", example: "The assistant organized the files.", meaning: "trợ lý", exampleMeaning: "Trợ lý đã sắp xếp các tệp." },
    { word: "resist", ipa: "/rɪˈzɪst/", type: "verb", example: "She couldn’t resist the temptation.", meaning: "chống cự", exampleMeaning: "Cô ấy không thể cưỡng lại sự cám dỗ." },
    { word: "resistance", ipa: "/rɪˈzɪstəns/", type: "noun", example: "There was strong resistance to the new rules.", meaning: "sự kháng cự", exampleMeaning: "Có sự kháng cự mạnh mẽ đối với các quy tắc mới." },
    { word: "decade", ipa: "/ˈdɛkeɪd/", type: "noun", example: "She lived in the city for a decade.", meaning: "thập kỷ", exampleMeaning: "Cô ấy đã sống ở thành phố trong một thập kỷ." },
    { word: "promote", ipa: "/prəˈmoʊt/", type: "verb", example: "The company will promote her to manager.", meaning: "thăng chức", exampleMeaning: "Công ty sẽ thăng chức cô ấy lên quản lý." },
    { word: "procedure", ipa: "/prəˈsiːdʒər/", type: "noun", example: "Follow the procedure to complete the task.", meaning: "quy trình", exampleMeaning: "Thực hiện quy trình để hoàn thành nhiệm vụ." },
    { word: "process", ipa: "/ˈprəʊsɛs/", type: "noun/verb", example: "The process takes several hours.", meaning: "quá trình", exampleMeaning: "Quá trình mất vài giờ." },
    { word: "conform", ipa: "/kənˈfɔːrm/", type: "verb", example: "He refused to conform to the rules.", meaning: "tuân thủ", exampleMeaning: "Anh ấy từ chối tuân thủ quy tắc." },
    { word: "comply", ipa: "/kəmˈplaɪ/", type: "verb", example: "You must comply with the regulations.", meaning: "tuân theo", exampleMeaning: "Bạn phải tuân theo các quy định." },
    { word: "compliance", ipa: "/kəmˈplaɪəns/", type: "noun", example: "Compliance with the law is mandatory.", meaning: "sự tuân thủ", exampleMeaning: "Sự tuân thủ pháp luật là bắt buộc." },
    { word: "prior to", ipa: "/ˈpraɪər tə/", type: "phrase", example: "Please arrive prior to the meeting.", meaning: "trước khi", exampleMeaning: "Vui lòng đến trước cuộc họp." },
    { word: "priority", ipa: "/praɪˈɔːrɪti/", type: "noun", example: "Safety is our top priority.", meaning: "ưu tiên", exampleMeaning: "An toàn là ưu tiên hàng đầu của chúng tôi." },
    { word: "prior", ipa: "/ˈpraɪər/", type: "adjective", example: "She had a prior engagement.", meaning: "trước đó", exampleMeaning: "Cô ấy có một cuộc hẹn trước đó." },
    { word: "previous", ipa: "/ˈpriːviəs/", type: "adjective", example: "The previous owner left the house in good condition.", meaning: "trước đây", exampleMeaning: "Chủ sở hữu trước đây để lại ngôi nhà trong tình trạng tốt." },
    { word: "critic", ipa: "/ˈkrɪtɪk/", type: "noun", example: "The critic praised the new movie.", meaning: "nhà phê bình", exampleMeaning: "Nhà phê bình đã khen ngợi bộ phim mới." },
    { word: "criticize", ipa: "/ˈkrɪtɪsaɪz/", type: "verb", example: "He tends to criticize everything I do.", meaning: "chỉ trích", exampleMeaning: "Anh ấy có xu hướng chỉ trích mọi thứ tôi làm." },
    { word: "loan", ipa: "/loʊn/", type: "noun/verb", example: "She took out a loan to buy a car.", meaning: "vay", exampleMeaning: "Cô ấy đã vay tiền để mua xe." },
    { word: "crowded", ipa: "/ˈkraʊdɪd/", type: "adjective", example: "The train was crowded during rush hour.", meaning: "đông đúc", exampleMeaning: "Tàu hỏa rất đông đúc vào giờ cao điểm." },
    { word: "crowd", ipa: "/kraʊd/", type: "noun/verb", example: "A large crowd gathered in the square.", meaning: "đám đông", exampleMeaning: "Một đám đông lớn tụ tập ở quảng trường." },
    { word: "arrest", ipa: "/əˈrɛst/", type: "verb/noun", example: "The police arrested the suspect.", meaning: "bắt giữ", exampleMeaning: "Cảnh sát đã bắt giữ nghi phạm." },
    { word: "rest", ipa: "/rɛst/", type: "noun/verb", example: "She needs to rest after the long day.", meaning: "nghỉ ngơi", exampleMeaning: "Cô ấy cần nghỉ ngơi sau ngày dài." },
    { word: "tradition", ipa: "/trəˈdɪʃən/", type: "noun", example: "It’s a tradition to celebrate on New Year’s Eve.", meaning: "truyền thống", exampleMeaning: "Đó là truyền thống để ăn mừng vào giao thừa." },
    { word: "trade", ipa: "/treɪd/", type: "noun/verb", example: "He works in the trade of carpentry.", meaning: "thương mại", exampleMeaning: "Anh ấy làm việc trong ngành mộc." },
    { word: "representative", ipa: "/ˌrɛprɪˈzɛntətɪv/", type: "noun/adjective", example: "The representative spoke on behalf of the group.", meaning: "đại diện", exampleMeaning: "Đại diện đã nói thay cho nhóm." },
    { word: "represent", ipa: "/ˌrɛprɪˈzɛnt/", type: "verb", example: "She will represent our company at the conference.", meaning: "đại diện", exampleMeaning: "Cô ấy sẽ đại diện cho công ty chúng tôi tại hội nghị." },
    { word: "subscription", ipa: "/səbˈskrɪpʃən/", type: "noun", example: "I renewed my subscription to the magazine.", meaning: "đăng ký", exampleMeaning: "Tôi đã gia hạn đăng ký của mình với tạp chí." },
    { word: "chefs", ipa: "/ʃɛfs/", type: "noun", example: "The chefs prepared a delicious meal.", meaning: "đầu bếp", exampleMeaning: "Các đầu bếp đã chuẩn bị một bữa ăn ngon." },
    { word: "specialties", ipa: "/ˈspɛʃəltiːz/", type: "noun", example: "The restaurant is known for its specialties.", meaning: "đặc sản", exampleMeaning: "Nhà hàng nổi tiếng với các đặc sản của mình." },
    { word: "dining experience", ipa: "/ˈdaɪnɪŋ ɪkˈspɪriəns/", type: "noun", example: "The dining experience was unforgettable.", meaning: "trải nghiệm ăn uống", exampleMeaning: "Trải nghiệm ăn uống thật không thể quên." },
    { word: "take a picture", ipa: "/teɪk ə ˈpɪktʃər/", type: "phrase", example: "Let’s take a picture together.", meaning: "chụp ảnh", exampleMeaning: "Hãy cùng chụp ảnh nhé." },
    { word: "meal", ipa: "/miːl/", type: "noun", example: "We enjoyed a hearty meal at the restaurant.", meaning: "bữa ăn", exampleMeaning: "Chúng tôi đã thưởng thức một bữa ăn thịnh soạn tại nhà hàng." },
    { word: "automatically", ipa: "/ˌɔːtəˈmætɪkli/", type: "adverb", example: "The system updates automatically.", meaning: "tự động", exampleMeaning: "Hệ thống tự động cập nhật." },
    { word: "facility", ipa: "/fəˈsɪlɪti/", type: "noun", example: "The hotel offers modern facilities.", meaning: "cơ sở", exampleMeaning: "Khách sạn cung cấp các cơ sở hiện đại." },
    { word: "around", ipa: "/əˈraʊnd/", type: "preposition/adverb", example: "Let’s meet around 5 PM.", meaning: "khoảng", exampleMeaning: "Hãy gặp nhau khoảng 5 giờ chiều." },
    { word: "warehousing", ipa: "/ˈwɛrhaʊzɪŋ/", type: "noun", example: "Warehousing is crucial for inventory management.", meaning: "kho bãi", exampleMeaning: "Kho bãi rất quan trọng cho quản lý hàng tồn kho." },
    { word: "procedures", ipa: "/prəˈsiːdʒərz/", type: "noun", example: "Follow the procedures for safety.", meaning: "quy trình", exampleMeaning: "Thực hiện các quy trình để đảm bảo an toàn." },
    { word: "offer", ipa: "/ˈɒfər/", type: "verb/noun", example: "They offer a discount to new customers.", meaning: "đề nghị", exampleMeaning: "Họ đề nghị giảm giá cho khách hàng mới." },
    { word: "work environment", ipa: "/wɜːrk ɪnˈvaɪrənmənt/", type: "noun", example: "The work environment is very supportive.", meaning: "môi trường làm việc", exampleMeaning: "Môi trường làm việc rất hỗ trợ." },
    { word: "great benefits", ipa: "/ɡreɪt ˈbɛnɪfɪts/", type: "noun", example: "The job comes with great benefits.", meaning: "lợi ích tuyệt vời", exampleMeaning: "Công việc đi kèm với các lợi ích tuyệt vời." },
    { word: "recruiters", ipa: "/rɪˈkruːtərz/", type: "noun", example: "The recruiters are hiring for multiple positions.", meaning: "người tuyển dụng", exampleMeaning: "Các nhà tuyển dụng đang tuyển cho nhiều vị trí." },
    { word: "proficiency", ipa: "/prəˈfɪʃənsi/", type: "noun", example: "She has proficiency in three languages.", meaning: "thành thạo", exampleMeaning: "Cô ấy thành thạo ba ngôn ngữ." },
    { word: "preferred", ipa: "/prɪˈfɜːrd/", type: "adjective", example: "This method is preferred by most experts.", meaning: "ưu tiên", exampleMeaning: "Phương pháp này được đa số chuyên gia ưu tiên." },

    { word: "common", ipa: "/ˈkɒmən/", type: "adjective", example: "It’s common to see birds in the park.", meaning: "phổ biến", exampleMeaning: "Thường thấy chim trong công viên." },
    { word: "regarded", ipa: "/rɪˈɡɑːrdɪd/", type: "verb", example: "She is regarded as a talented artist.", meaning: "được coi là", exampleMeaning: "Cô ấy được coi là một nghệ sĩ tài năng." },
    { word: "regardless of", ipa: "/rɪˈɡɑːrdləs əv/", type: "phrase", example: "Everyone can join, regardless of age.", meaning: "bất kể", exampleMeaning: "Mọi người có thể tham gia, bất kể tuổi tác." },
    { word: "disregard", ipa: "/ˌdɪsrɪˈɡɑːrd/", type: "verb/noun", example: "He chose to disregard the warning.", meaning: "bỏ qua", exampleMeaning: "Anh ấy đã chọn bỏ qua cảnh báo." },
    { word: "impress", ipa: "/ɪmˈpres/", type: "verb", example: "Her speech impressed the audience.", meaning: "gây ấn tượng", exampleMeaning: "Bài phát biểu của cô ấy đã gây ấn tượng với khán giả." },
    { word: "express", ipa: "/ɪkˈspres/", type: "verb", example: "He expressed his gratitude to the team.", meaning: "bày tỏ", exampleMeaning: "Anh ấy đã bày tỏ lòng biết ơn với đội." },
    { word: "relationship", ipa: "/rɪˈleɪʃənʃɪp/", type: "noun", example: "They have a strong relationship.", meaning: "mối quan hệ", exampleMeaning: "Họ có một mối quan hệ bền vững." },
    { word: "relate", ipa: "/rɪˈleɪt/", type: "verb", example: "I can relate to your situation.", meaning: "liên quan", exampleMeaning: "Tôi có thể hiểu được tình huống của bạn." },
    { word: "relative", ipa: "/ˈrelətɪv/", type: "noun/adjective", example: "She visited a relative in the city.", meaning: "họ hàng", exampleMeaning: "Cô ấy đã thăm một người họ hàng trong thành phố." },
    { word: "relatively", ipa: "/ˈrelətɪvli/", type: "adverb", example: "The task is relatively easy.", meaning: "tương đối", exampleMeaning: "Nhiệm vụ này tương đối dễ." },
    { word: "mutual", ipa: "/ˈmjuːtʃuəl/", type: "adjective", example: "They share a mutual interest in music.", meaning: "lẫn nhau", exampleMeaning: "Họ có chung sở thích về âm nhạc." },
    { word: "eligible for", ipa: "/ˈelɪdʒəbəl fɔːr/", type: "phrase", example: "She is eligible for the scholarship.", meaning: "đủ điều kiện cho", exampleMeaning: "Cô ấy đủ điều kiện nhận học bổng." },
    { word: "liability", ipa: "/ˌlaɪəˈbɪlɪti/", type: "noun", example: "The company has a liability to its employees.", meaning: "trách nhiệm pháp lý", exampleMeaning: "Công ty có trách nhiệm pháp lý với nhân viên." },
    { word: "expert", ipa: "/ˈekspɜːrt/", type: "noun/adjective", example: "He is an expert in computer science.", meaning: "chuyên gia", exampleMeaning: "Anh ấy là chuyên gia về khoa học máy tính." },
    { word: "expertise", ipa: "/ˌekspɜːrˈtiːz/", type: "noun", example: "Her expertise helped solve the problem.", meaning: "chuyên môn", exampleMeaning: "Chuyên môn của cô ấy đã giúp giải quyết vấn đề." },
    { word: "function", ipa: "/ˈfʌŋkʃən/", type: "noun/verb", example: "The machine functions perfectly now.", meaning: "chức năng", exampleMeaning: "Máy móc giờ hoạt động hoàn hảo." },
    { word: "malfunction", ipa: "/ˌmælˈfʌŋkʃən/", type: "noun/verb", example: "The device had a malfunction.", meaning: "trục trặc", exampleMeaning: "Thiết bị đã gặp trục trặc." },
    { word: "suit", ipa: "/suːt/", type: "verb", example: "This schedule suits me well.", meaning: "phù hợp", exampleMeaning: "Lịch trình này rất phù hợp với tôi." },
    { word: "suitable for", ipa: "/ˈsuːtəbəl fɔːr/", type: "phrase", example: "This book is suitable for children.", meaning: "phù hợp cho", exampleMeaning: "Cuốn sách này phù hợp cho trẻ em." },
    { word: "oppose", ipa: "/əˈpoʊz/", type: "verb", example: "They oppose the new policy.", meaning: "phản đối", exampleMeaning: "Họ phản đối chính sách mới." },
    { word: "opposite", ipa: "/ˈɒpəzɪt/", type: "adjective/noun", example: "The opposite direction is north.", meaning: "đối diện", exampleMeaning: "Hướng đối diện là phía bắc." },
    { word: "adapt", ipa: "/əˈdæpt/", type: "verb", example: "She adapted quickly to the new environment.", meaning: "thích nghi", exampleMeaning: "Cô ấy thích nghi nhanh với môi trường mới." },
    { word: "adaptable", ipa: "/əˈdæptəbəl/", type: "adjective", example: "He is very adaptable to changes.", meaning: "có khả năng thích nghi", exampleMeaning: "Anh ấy rất có khả năng thích nghi với thay đổi." },
    { word: "generation", ipa: "/ˌdʒenəˈreɪʃən/", type: "noun", example: "This technology is from the new generation.", meaning: "thế hệ", exampleMeaning: "Công nghệ này thuộc thế hệ mới." },
    { word: "generate", ipa: "/ˈdʒenəreɪt/", type: "verb", example: "The project will generate new jobs.", meaning: "tạo ra", exampleMeaning: "Dự án sẽ tạo ra việc làm mới." },
    { word: "generous", ipa: "/ˈdʒenərəs/", type: "adjective", example: "She is known for her generous donations.", meaning: "hào phóng", exampleMeaning: "Cô ấy nổi tiếng vì những khoản quyên góp hào phóng." },
    { word: "appreciate", ipa: "/əˈpriːʃieɪt/", type: "verb", example: "I appreciate your help with this task.", meaning: "cảm kích", exampleMeaning: "Tôi cảm kích sự giúp đỡ của bạn với nhiệm vụ này." },
    { word: "appropriate", ipa: "/əˈproʊpriət/", type: "adjective", example: "Her outfit is appropriate for the occasion.", meaning: "phù hợp", exampleMeaning: "Trang phục của cô ấy phù hợp với dịp này." },

    { word: "grateful", ipa: "/ˈɡreɪtfəl/", type: "adjective", example: "I am grateful for your help.", meaning: "biết ơn", exampleMeaning: "Tôi biết ơn vì sự giúp đỡ của bạn." },
    { word: "gratitude", ipa: "/ˈɡrætɪtuːd/", type: "noun", example: "She expressed her gratitude to the team.", meaning: "sự biết ơn", exampleMeaning: "Cô ấy bày tỏ sự biết ơn với đội ngũ." },
    { word: "loyal", ipa: "/ˈlɔɪəl/", type: "adjective", example: "He is a loyal friend who always supports me.", meaning: "trung thành", exampleMeaning: "Anh ấy là một người bạn trung thành luôn ủng hộ tôi." },
    { word: "loyalty", ipa: "/ˈlɔɪəlti/", type: "noun", example: "Her loyalty to the company is admirable.", meaning: "sự trung thành", exampleMeaning: "Sự trung thành của cô ấy với công ty thật đáng khâm phục." },
    { word: "coverage", ipa: "/ˈkʌvərɪdʒ/", type: "noun", example: "The news coverage of the event was extensive.", meaning: "sự đưa tin, phạm vi bảo hiểm", exampleMeaning: "Sự đưa tin về sự kiện này rất rộng rãi." },
    { word: "emit", ipa: "/ɪˈmɪt/", type: "verb", example: "The factory emits harmful gases into the air.", meaning: "phát ra", exampleMeaning: "Nhà máy phát ra các khí độc hại vào không khí." },
    { word: "admit", ipa: "/ədˈmɪt/", type: "verb", example: "He admitted his mistake to the teacher.", meaning: "thừa nhận", exampleMeaning: "Anh ấy thừa nhận lỗi lầm của mình với giáo viên." },
    { word: "admission", ipa: "/ədˈmɪʃn/", type: "noun", example: "Her admission of guilt surprised everyone.", meaning: "sự thừa nhận, sự nhận vào", exampleMeaning: "Sự thừa nhận tội lỗi của cô ấy khiến mọi người bất ngờ." },
    { word: "exterminate", ipa: "/ɪkˈstɜːrmɪneɪt/", type: "verb", example: "They hired a professional to exterminate the pests.", meaning: "tiêu diệt", exampleMeaning: "Họ đã thuê một chuyên gia để tiêu diệt côn trùng." },
    { word: "delete", ipa: "/dɪˈliːt/", type: "verb", example: "Please delete the file from your computer.", meaning: "xóa", exampleMeaning: "Vui lòng xóa tệp khỏi máy tính của bạn." },
    { word: "defect", ipa: "/ˈdiːfekt/", type: "noun", example: "The product was recalled due to a defect.", meaning: "lỗi, khuyết tật", exampleMeaning: "Sản phẩm bị thu hồi do có lỗi." },
    { word: "detect", ipa: "/dɪˈtekt/", type: "verb", example: "The device can detect smoke in the room.", meaning: "phát hiện", exampleMeaning: "Thiết bị có thể phát hiện khói trong phòng." },
    { word: "highlight", ipa: "/ˈhaɪlaɪt/", type: "verb/noun", example: "She highlighted the key points in the document.", meaning: "làm nổi bật", exampleMeaning: "Cô ấy làm nổi bật các điểm chính trong tài liệu." },
    { word: "focus on", ipa: "/ˈfoʊkəs ɒn/", type: "phrase", example: "Let’s focus on solving this problem first.", meaning: "tập trung vào", exampleMeaning: "Hãy tập trung vào việc giải quyết vấn đề này trước." },
    { word: "horrible", ipa: "/ˈhɔːrəbl/", type: "adjective", example: "The movie was so horrible that I couldn’t watch it.", meaning: "kinh khủng", exampleMeaning: "Bộ phim kinh khủng đến mức tôi không thể xem được." },
    { word: "horror", ipa: "/ˈhɔːrər/", type: "noun", example: "She screamed in horror at the sight.", meaning: "sự kinh hoàng", exampleMeaning: "Cô ấy hét lên vì kinh hoàng trước cảnh tượng đó." },
    { word: "terrible", ipa: "/ˈterəbl/", type: "adjective", example: "The weather was terrible during the storm.", meaning: "tồi tệ", exampleMeaning: "Thời tiết rất tồi tệ trong cơn bão." },
    { word: "expire", ipa: "/ɪkˈspaɪər/", type: "verb", example: "My passport will expire next month.", meaning: "hết hạn", exampleMeaning: "Hộ chiếu của tôi sẽ hết hạn vào tháng tới." },
    { word: "expiration", ipa: "/ˌekspəˈreɪʃn/", type: "noun", example: "Check the expiration date on the milk carton.", meaning: "sự hết hạn", exampleMeaning: "Kiểm tra ngày hết hạn trên hộp sữa." },
    { word: "conference", ipa: "/ˈkɑːnfərəns/", type: "noun", example: "They attended a conference on climate change.", meaning: "hội nghị", exampleMeaning: "Họ tham dự một hội nghị về biến đổi khí hậu." },
    { word: "reference", ipa: "/ˈrefərəns/", type: "noun", example: "He provided a reference for the job application.", meaning: "sự tham khảo, thư giới thiệu", exampleMeaning: "Anh ấy cung cấp một thư giới thiệu cho đơn xin việc." },
    { word: "extremely", ipa: "/ɪkˈstriːmli/", type: "adverb", example: "The test was extremely difficult for everyone.", meaning: "cực kỳ", exampleMeaning: "Bài kiểm tra cực kỳ khó đối với mọi người." },
    { word: "hospital", ipa: "/ˈhɑːspɪtl/", type: "noun", example: "She was taken to the hospital after the accident.", meaning: "bệnh viện", exampleMeaning: "Cô ấy được đưa đến bệnh viện sau vụ tai nạn." },
    { word: "hospitality", ipa: "/ˌhɑːspɪˈtælɪti/", type: "noun", example: "Their hospitality made us feel very welcome.", meaning: "sự hiếu khách", exampleMeaning: "Sự hiếu khách của họ khiến chúng tôi cảm thấy rất được chào đón." },
    
    { word: "prize", ipa: "/praɪz/", type: "noun", example: "She won a prize for her essay.", meaning: "giải thưởng", exampleMeaning: "Cô ấy đã giành được giải thưởng cho bài luận của mình." },
    { word: "the right", ipa: "/ðə raɪt/", type: "phrase", example: "Everyone has the right to speak.", meaning: "quyền", exampleMeaning: "Mọi người đều có quyền nói." },
    { word: "reserves the right", ipa: "/rɪˈzɜːrvz ðə raɪt/", type: "phrase", example: "The company reserves the right to change the policy.", meaning: "bảo lưu quyền", exampleMeaning: "Công ty bảo lưu quyền thay đổi chính sách." },
    { word: "solely because", ipa: "/ˈsoʊlli bɪˈkɔːz/", type: "phrase", example: "He failed solely because he didn’t study.", meaning: "chỉ vì", exampleMeaning: "Anh ấy thất bại chỉ vì không học." },
    { word: "partly because", ipa: "/ˈpɑːrtli bɪˈkɔːz/", type: "phrase", example: "She was late partly because of traffic.", meaning: "một phần vì", exampleMeaning: "Cô ấy đến muộn một phần vì giao thông." },
    { word: "sufficient", ipa: "/səˈfɪʃnt/", type: "adjective", example: "We have sufficient funds for the project.", meaning: "đủ", exampleMeaning: "Chúng tôi có đủ kinh phí cho dự án." },
    { word: "warranty", ipa: "/ˈwɒrənti/", type: "noun", example: "The product comes with a one-year warranty.", meaning: "bảo hành", exampleMeaning: "Sản phẩm đi kèm với bảo hành một năm." },
    { word: "guarantee", ipa: "/ˌɡærənˈtiː/", type: "verb", example: "They guarantee delivery within two days.", meaning: "bảo đảm", exampleMeaning: "Họ bảo đảm giao hàng trong vòng hai ngày." },
    { word: "outstanding", ipa: "/ˌaʊtˈstændɪŋ/", type: "adjective", example: "Her performance was outstanding.", meaning: "nổi bật", exampleMeaning: "Màn trình diễn của cô ấy rất nổi bật." },
    { word: "withstand", ipa: "/wɪðˈstænd/", type: "verb", example: "The bridge can withstand strong winds.", meaning: "chịu đựng", exampleMeaning: "Cây cầu có thể chịu đựng được gió mạnh." },
    { word: "base on", ipa: "/beɪs ɒn/", type: "phrase", example: "The decision was based on facts.", meaning: "dựa trên", exampleMeaning: "Quyết định được dựa trên sự thật." },
    { word: "base in", ipa: "/beɪs ɪn/", type: "phrase", example: "The company is based in New York.", meaning: "đặt trụ sở tại", exampleMeaning: "Công ty đặt trụ sở tại New York." },
    { word: "basement", ipa: "/ˈbeɪsmənt/", type: "noun", example: "They store old furniture in the basement.", meaning: "tầng hầm", exampleMeaning: "Họ cất đồ nội thất cũ ở tầng hầm." },
    { word: "headquarter", ipa: "/ˈhɛdkwɔːrtər/", type: "noun", example: "The headquarter of the company is in London.", meaning: "trụ sở", exampleMeaning: "Trụ sở của công ty ở London." },
    { word: "overseas", ipa: "/ˌoʊvərˈsiːz/", type: "adverb", example: "She traveled overseas for her studies.", meaning: "nước ngoài", exampleMeaning: "Cô ấy đã đi du học nước ngoài." },
    { word: "oversee", ipa: "/ˌoʊvərˈsiː/", type: "verb", example: "He oversees the production process.", meaning: "giám sát", exampleMeaning: "Anh ấy giám sát quá trình sản xuất." },
    { word: "annually", ipa: "/ˈænjuəli/", type: "adverb", example: "The event is held annually in June.", meaning: "hàng năm", exampleMeaning: "Sự kiện được tổ chức hàng năm vào tháng Sáu." },
    { word: "manual", ipa: "/ˈmænjuəl/", type: "noun", example: "The manual explains how to use the device.", meaning: "sách hướng dẫn", exampleMeaning: "Sách hướng dẫn giải thích cách sử dụng thiết bị." },
    { word: "formerly", ipa: "/ˈfɔːrmərli/", type: "adverb", example: "The building was formerly a school.", meaning: "trước đây", exampleMeaning: "Tòa nhà trước đây là một trường học." },
    { word: "ideally", ipa: "/aɪˈdiːəli/", type: "adverb", example: "Ideally, we should finish by tomorrow.", meaning: "lý tưởng", exampleMeaning: "Lý tưởng nhất, chúng ta nên hoàn thành vào ngày mai." },
    { word: "contest", ipa: "/ˈkɒntest/", type: "noun", example: "She entered a singing contest.", meaning: "cuộc thi", exampleMeaning: "Cô ấy tham gia một cuộc thi hát." },
    { word: "against", ipa: "/əˈɡɛnst/", type: "preposition", example: "She leaned against the wall.", meaning: "chống lại", exampleMeaning: "Cô ấy tựa vào tường." },
    { word: "gradually", ipa: "/ˈɡrædʒuəli/", type: "adverb", example: "The temperature dropped gradually.", meaning: "dần dần", exampleMeaning: "Nhiệt độ giảm dần." },
    { word: "consider", ipa: "/kənˈsɪdər/", type: "verb", example: "We should consider all options.", meaning: "xem xét", exampleMeaning: "Chúng ta nên xem xét tất cả các lựa chọn." },
    { word: "considerable", ipa: "/kənˈsɪdərəbl/", type: "adjective", example: "The project requires considerable effort.", meaning: "đáng kể", exampleMeaning: "Dự án đòi hỏi nỗ lực đáng kể." },
    { word: "temperature", ipa: "/ˈtɛmprətʃər/", type: "noun", example: "The temperature today is very high.", meaning: "nhiệt độ", exampleMeaning: "Nhiệt độ hôm nay rất cao." },
    { word: "temporary", ipa: "/ˈtɛmpərɛri/", type: "adjective", example: "This is a temporary solution.", meaning: "tạm thời", exampleMeaning: "Đây là một giải pháp tạm thời." },
    { word: "prevent", ipa: "/prɪˈvɛnt/", type: "verb", example: "We must prevent accidents from happening.", meaning: "ngăn chặn", exampleMeaning: "Chúng ta phải ngăn chặn tai nạn xảy ra." },
    { word: "journalist", ipa: "/ˈdʒɜːrnəlɪst/", type: "noun", example: "The journalist wrote an article about the event.", meaning: "nhà báo", exampleMeaning: "Nhà báo đã viết một bài báo về sự kiện." },
    { word: "ignore", ipa: "/ɪɡˈnɔːr/", type: "verb", example: "Don’t ignore the warning signs.", meaning: "bỏ qua", exampleMeaning: "Đừng bỏ qua các dấu hiệu cảnh báo." },
    { word: "react", ipa: "/riˈækt/", type: "verb", example: "She didn’t react to the news.", meaning: "phản ứng", exampleMeaning: "Cô ấy không phản ứng với tin tức." },
    { word: "pension", ipa: "/ˈpɛnʃn̩/", type: "noun", example: "He receives a pension after retirement.", meaning: "lương hưu", exampleMeaning: "Ông ấy nhận lương hưu sau khi nghỉ hưu." },
    { word: "change", ipa: "/tʃeɪndʒ/", type: "verb", example: "Can you change the channel, please?", meaning: "thay đổi", exampleMeaning: "Bạn có thể đổi kênh được không?" },
    { word: "chance", ipa: "/tʃæns/", type: "noun", example: "This is your last chance to win.", meaning: "cơ hội", exampleMeaning: "Đây là cơ hội cuối cùng của bạn để chiến thắng." },
    { word: "cause", ipa: "/kɔːz/", type: "noun", example: "The cause of the fire is unknown.", meaning: "nguyên nhân", exampleMeaning: "Nguyên nhân của vụ cháy vẫn chưa được biết." },
    { word: "analyst", ipa: "/ˈænəlɪst/", type: "noun", example: "The analyst predicted market trends.", meaning: "nhà phân tích", exampleMeaning: "Nhà phân tích đã dự đoán xu hướng thị trường." },
    { word: "analyze", ipa: "/ˈænəlaɪz/", type: "verb", example: "We need to analyze the data carefully.", meaning: "phân tích", exampleMeaning: "Chúng ta cần phân tích dữ liệu một cách cẩn thận." },
    { word: "eventually", ipa: "/ɪˈvɛntʃuəli/", type: "adverb", example: "They eventually reached an agreement.", meaning: "cuối cùng", exampleMeaning: "Họ cuối cùng đã đạt được thỏa thuận." },
    { word: "title", ipa: "/ˈtaɪtl/", type: "noun", example: "The title of the book is interesting.", meaning: "tiêu đề", exampleMeaning: "Tiêu đề của cuốn sách rất thú vị." },
    { word: "entitle", ipa: "/ɪnˈtaɪtl/", type: "verb", example: "This ticket entitles you to a free meal.", meaning: "cho quyền", exampleMeaning: "Vé này cho bạn quyền nhận một bữa ăn miễn phí." },
    { word: "enlarge", ipa: "/ɪnˈlɑːrdʒ/", type: "verb", example: "They plan to enlarge the kitchen.", meaning: "mở rộng", exampleMeaning: "Họ dự định mở rộng nhà bếp." },
    { word: "enrich", ipa: "/ɪnˈrɪtʃ/", type: "verb", example: "Reading books can enrich your knowledge.", meaning: "làm giàu", exampleMeaning: "Đọc sách có thể làm giàu kiến thức của bạn." },
    { word: "attach", ipa: "/əˈtætʃ/", type: "verb", example: "Please attach the file to the email.", meaning: "đính kèm", exampleMeaning: "Vui lòng đính kèm tệp vào email." },
    { word: "detach", ipa: "/dɪˈtætʃ/", type: "verb", example: "You can detach the handle from the bag.", meaning: "tháo rời", exampleMeaning: "Bạn có thể tháo tay cầm khỏi túi." },
    { word: "accommodate", ipa: "/əˈkɒmədeɪt/", type: "verb", example: "The hotel can accommodate 100 guests.", meaning: "chứa", exampleMeaning: "Khách sạn có thể chứa 100 khách." },
    { word: "accommodation", ipa: "/əˌkɒməˈdeɪʃn̩/", type: "noun", example: "We booked accommodation for the trip.", meaning: "chỗ ở", exampleMeaning: "Chúng tôi đã đặt chỗ ở cho chuyến đi." },
    { word: "information", ipa: "/ˌɪnfərˈmeɪʃn̩/", type: "noun", example: "She gave me some useful information.", meaning: "thông tin", exampleMeaning: "Cô ấy đã cho tôi một số thông tin hữu ích." },
    { word: "informative", ipa: "/ɪnˈfɔːrmətɪv/", type: "adjective", example: "The lecture was very informative.", meaning: "cung cấp thông tin", exampleMeaning: "Bài giảng rất cung cấp thông tin." },
    { word: "inform", ipa: "/ɪnˈfɔːrm/", type: "verb", example: "Please inform me of any updates.", meaning: "thông báo", exampleMeaning: "Vui lòng thông báo cho tôi về bất kỳ cập nhật nào." },
    { word: "enable", ipa: "/ɪˈneɪbl/", type: "verb", example: "This tool will enable us to work faster.", meaning: "cho phép", exampleMeaning: "Công cụ này sẽ cho phép chúng ta làm việc nhanh hơn." },
    { word: "rise", ipa: "/raɪz/", type: "verb", example: "The sun will rise in the morning.", meaning: "mọc, tăng", exampleMeaning: "Mặt trời sẽ mọc vào buổi sáng." },
    { word: "raise", ipa: "/reɪz/", type: "verb", example: "She raised her hand to ask a question.", meaning: "nâng", exampleMeaning: "Cô ấy giơ tay để đặt câu hỏi." },
    { word: "praise", ipa: "/preɪz/", type: "verb", example: "The teacher praised the student for her effort.", meaning: "khen ngợi", exampleMeaning: "Giáo viên khen ngợi học sinh vì sự nỗ lực của cô ấy." },
    { word: "domestic", ipa: "/dəˈmɛstɪk/", type: "adjective", example: "They prefer domestic products over imported ones.", meaning: "nội địa", exampleMeaning: "Họ thích sản phẩm nội địa hơn hàng nhập khẩu." },
    { word: "cosmetic", ipa: "/kɒzˈmɛtɪk/", type: "adjective", example: "She bought some cosmetic products.", meaning: "mỹ phẩm", exampleMeaning: "Cô ấy đã mua một số sản phẩm mỹ phẩm." },
    { word: "retailer", ipa: "/ˈriːteɪlər/", type: "noun", example: "The retailer sells clothes online.", meaning: "nhà bán lẻ", exampleMeaning: "Nhà bán lẻ bán quần áo trực tuyến." }
].filter((item, index, self) =>
        index === self.findIndex((t) => t.word.toLowerCase() === item.word.toLowerCase())
    );
let vocabulary = vocabForListening; // Default to vocabForListening
let currentIndex = 0;
let isEditing = false;
let isShuffled = false;

function updateCardInfo() {
    const totalWords = vocabulary.length;
    const currentPosition = currentIndex + 1;
    document.getElementById("cardInfo").innerHTML = `Word ${currentPosition} of ${totalWords}`;
}

function updateCard() {
    const front = document.getElementById("cardFront");
    const back = document.getElementById("cardBack");
    const card = document.getElementById("flashcard");

    if (vocabulary.length === 0) {
        front.innerHTML = "No words available";
        back.innerHTML = "Add some words to start!";
        return;
    }

    const { word, ipa, type, example, meaning, exampleMeaning } = vocabulary[currentIndex];
    front.innerHTML = `<strong>${word}</strong><br>${ipa}<br>(${type})<br>${example}`;
    back.innerHTML = `<strong>${meaning}</strong><br>${exampleMeaning}`;
    card.classList.remove("flipped");
    updateCardInfo();
}

function speakWord() {
    const { word } = vocabulary[currentIndex];
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}

function nextCard() {
    if (vocabulary.length === 0) return;
    currentIndex = (currentIndex + 1) % vocabulary.length;
    updateCard();
}

function prevCard() {
    if (vocabulary.length === 0) return;
    currentIndex = (currentIndex - 1 + vocabulary.length) % vocabulary.length;
    updateCard();
}

function toggleShuffle() {
    const shuffleButton = document.getElementById("shuffleButton");
    isShuffled = !isShuffled;

    if (isShuffled) {
        vocabulary = vocabulary.sort(() => Math.random() - 0.5);
        shuffleButton.classList.add("active");
    } else {
        vocabulary = vocabulary.sort((a, b) => a.word.localeCompare(b.word));
        shuffleButton.classList.remove("active");
    }
    currentIndex = 0;
    updateCard();
}

function changeVocabList() {
    const select = document.getElementById("vocabSelect");
    const selectedValue = select.value;
    
    if (selectedValue === "listening") {
        vocabulary = vocabForListening.slice();
    } else if (selectedValue === "reading") {
        vocabulary = vocabForReading.slice();
    }

    isShuffled = false;
    document.getElementById("shuffleButton").classList.remove("active");
    vocabulary.sort((a, b) => a.word.localeCompare(b.word));
    currentIndex = 0;
    updateCard();
}

document.getElementById("flashcard").addEventListener("click", function() {
    this.classList.toggle("flipped");
});

function showAddWordModal() {
    isEditing = false;
    document.getElementById("modalTitle").textContent = "Add New Word";
    document.getElementById("saveButton").onclick = addNewWord;
    clearModalFields();
    document.getElementById("newIPA").disabled = true;
    document.getElementById("newType").disabled = true;
    document.getElementById("newMeaning").disabled = true;
    document.getElementById("newExample").disabled = true;
    document.getElementById("newExampleMeaning").disabled = true;
    document.getElementById("saveButton").disabled = true;
    document.getElementById("addWordModal").style.display = "block";
    document.getElementById("wordError").style.display = "none";
    document.getElementById("fieldsError").style.display = "none";
}

function showEditWordModal(index = currentIndex) {
    if (vocabulary.length === 0) {
        alert("No words to edit!");
        return;
    }
    isEditing = true;
    document.getElementById("modalTitle").textContent = "Edit Word";
    document.getElementById("saveButton").onclick = updateCurrentWord;

    const { word, ipa, type, example, meaning, exampleMeaning } = vocabulary[index];
    document.getElementById("newWord").value = word;
    document.getElementById("newIPA").value = ipa;
    document.getElementById("newType").value = type;
    document.getElementById("newExample").value = example;
    document.getElementById("newMeaning").value = meaning;
    document.getElementById("newExampleMeaning").value = exampleMeaning;

    document.getElementById("newIPA").disabled = false;
    document.getElementById("newType").disabled = false;
    document.getElementById("newMeaning").disabled = false;
    document.getElementById("newExample").disabled = false;
    document.getElementById("newExampleMeaning").disabled = false;
    document.getElementById("saveButton").disabled = false;
    document.getElementById("addWordModal").style.display = "block";
    checkWordExistence(word, index);
    document.getElementById("fieldsError").style.display = "none";
}

function deleteCurrentWord() {
    if (vocabulary.length === 0) {
        alert("No words to delete!");
        return;
    }
    if (confirm("Are you sure you want to delete this word?")) {
        const selectedValue = document.getElementById("vocabSelect").value;
        if (selectedValue === "listening") {
            vocabForListening.splice(currentIndex, 1);
        } else {
            vocabForReading.splice(currentIndex, 1);
        }
        vocabulary.splice(currentIndex, 1);
        if (vocabulary.length === 0) {
            currentIndex = 0;
        } else {
            currentIndex = Math.min(currentIndex, vocabulary.length - 1);
        }
        updateCard();
    }
}

function clearModalFields() {
    document.getElementById("newWord").value = "";
    document.getElementById("newIPA").value = "";
    document.getElementById("newType").value = "";
    document.getElementById("newExample").value = "";
    document.getElementById("newMeaning").value = "";
    document.getElementById("newExampleMeaning").value = "";
}

function closeAddWordModal() {
    document.getElementById("addWordModal").style.display = "none";
    clearModalFields();
    document.getElementById("wordError").style.display = "none";
    document.getElementById("fieldsError").style.display = "none";
}

function checkWordExistence(word, editIndex = null) {
    const wordInput = word.toLowerCase();
    const wordError = document.getElementById("wordError");
    const exists = vocabulary.some((item, index) => 
        item.word.toLowerCase() === wordInput && (editIndex === null || index !== editIndex)
    );
    wordError.style.display = exists ? "block" : "none";

    if (!isEditing) {
        const isValid = wordInput && !exists;
        document.getElementById("newIPA").disabled = !isValid;
        document.getElementById("newType").disabled = !isValid;
        document.getElementById("newMeaning").disabled = !isValid;
        document.getElementById("newExample").disabled = !isValid;
        document.getElementById("newExampleMeaning").disabled = !isValid;
        document.getElementById("saveButton").disabled = !isValid;
    }
}

document.getElementById("newWord").addEventListener("input", function() {
    checkWordExistence(this.value, isEditing ? currentIndex : null);
});

function addNewWord() {
    const newWord = document.getElementById("newWord").value.toLowerCase();
    const newIPA = document.getElementById("newIPA").value;
    const newType = document.getElementById("newType").value.toLowerCase();
    const newExample = document.getElementById("newExample").value;
    const newMeaning = document.getElementById("newMeaning").value.toLowerCase();
    const newExampleMeaning = document.getElementById("newExampleMeaning").value;

    if (!newWord || !newIPA || !newType || !newExample || !newMeaning || !newExampleMeaning) {
        document.getElementById("fieldsError").style.display = "block";
        return;
    }

    const wordExists = vocabulary.some(item => item.word.toLowerCase() === newWord);
    if (wordExists) {
        document.getElementById("wordError").style.display = "block";
        return;
    }

    const newEntry = { word: newWord, ipa: newIPA, type: newType, example: newExample, meaning: newMeaning, exampleMeaning: newExampleMeaning };
    vocabulary.push(newEntry);
    
    const selectedValue = document.getElementById("vocabSelect").value;
    if (selectedValue === "listening") {
        vocabForListening.push(newEntry);
    } else {
        vocabForReading.push(newEntry);
    }

    closeAddWordModal();
    currentIndex = vocabulary.length - 1;
    updateCard();
}

function updateCurrentWord() {
    const newWord = document.getElementById("newWord").value.toLowerCase();
    const newIPA = document.getElementById("newIPA").value;
    const newType = document.getElementById("newType").value.toLowerCase();
    const newExample = document.getElementById("newExample").value;
    const newMeaning = document.getElementById("newMeaning").value.toLowerCase();
    const newExampleMeaning = document.getElementById("newExampleMeaning").value;

    if (!newWord || !newIPA || !newType || !newExample || !newMeaning || !newExampleMeaning) {
        document.getElementById("fieldsError").style.display = "block";
        return;
    }

    const wordExists = vocabulary.some((item, index) => 
        item.word.toLowerCase() === newWord && index !== currentIndex
    );
    if (wordExists) {
        document.getElementById("wordError").style.display = "block";
        return;
    }

    const updatedEntry = { 
        word: newWord, 
        ipa: newIPA, 
        type: newType, 
        example: newExample, 
        meaning: newMeaning, 
        exampleMeaning: newExampleMeaning 
    };
    vocabulary[currentIndex] = updatedEntry;

    const selectedValue = document.getElementById("vocabSelect").value;
    if (selectedValue === "listening") {
        vocabForListening[currentIndex] = updatedEntry;
    } else {
        vocabForReading[currentIndex] = updatedEntry;
    }

    closeAddWordModal();
    updateCard();
}

function showViewWordsModal() {
    const modal = document.getElementById("viewWordsModal");
    const wordList = document.getElementById("wordList");
    wordList.innerHTML = "";
    vocabulary.forEach((item, index) => renderWordItem(item, index));
    document.getElementById("searchWords").value = "";
    modal.style.display = "block";
}

function closeViewWordsModal() {
    document.getElementById("viewWordsModal").style.display = "none";
}

function renderWordItem(item, index) {
    const wordList = document.getElementById("wordList");
    const div = document.createElement("div");
    div.className = "word-item";
    div.innerHTML = `
        <div>${item.word}</div>
        <div class="word-item-buttons">
            <button onclick="openInFlashcard(${index})">Open in Flashcard</button>
            <button onclick="showEditWordModal(${index}); closeViewWordsModal()">Edit</button>
            <button onclick="deleteWord(${index}); closeViewWordsModal()" class="delete-btn">Delete</button>
        </div>
    `;
    wordList.appendChild(div);
}

function openInFlashcard(index) {
    currentIndex = index;
    updateCard();
    closeViewWordsModal();
}

function deleteWord(index) {
    if (confirm("Are you sure you want to delete this word?")) {
        const selectedValue = document.getElementById("vocabSelect").value;
        if (selectedValue === "listening") {
            vocabForListening.splice(index, 1);
        } else {
            vocabForReading.splice(index, 1);
        }
        vocabulary.splice(index, 1);
        if (vocabulary.length === 0) {
            currentIndex = 0;
        } else {
            currentIndex = Math.min(currentIndex, vocabulary.length - 1);
        }
        updateCard();
        showViewWordsModal();
    }
}

document.getElementById("searchWords").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const wordList = document.getElementById("wordList");
    wordList.innerHTML = "";
    vocabulary
        .filter(item => item.word.toLowerCase().includes(searchTerm))
        .forEach((item, index) => renderWordItem(item, vocabulary.indexOf(item)));
});

document.addEventListener("mousedown", function(event) {
    const addWordModal = document.getElementById("addWordModal");
    const viewWordsModal = document.getElementById("viewWordsModal");
    const target = event.target;

    if (addWordModal.style.display === "block" && 
        !addWordModal.contains(target) && 
        !target.classList.contains("add-btn") && 
        !target.classList.contains("edit-btn")) {
        closeAddWordModal();
    }

    if (viewWordsModal.style.display === "block" && 
        !viewWordsModal.contains(target) && 
        !target.classList.contains("view-btn")) {
        closeViewWordsModal();
    }
});

// Initial card load (sorted alphabetically by default)
vocabulary.sort((a, b) => a.word.localeCompare(b.word));
updateCard();
