export default {
    ignitionSystem: {
        name: 'Hệ thống đánh lửa',
        Content: "Hệ thống đánh lửa là một thành phần quan trọng trong động cơ đốt trong, chịu trách nhiệm đốt cháy hỗn hợp không khí-nhiên liệu để khởi động động cơ và duy trì hoạt động của nó. Có nhiều loại hệ thống đánh lửa, nhưng tất cả đều phục vụ mục đích cơ bản giống nhau. Dưới đây là tổng quan về các thành phần chính và chức năng của một hệ thống đánh lửa điển hình:",
        MainComponents: {
            1: "Ắc Quy: Cung cấp năng lượng điện cần thiết để khởi động động cơ.",
            2: "Cuộn Đánh Lửa: Chuyển đổi nguồn điện áp thấp từ ắc quy thành điện áp cao",
            3: "Bộ Phân Phối Điện: Phân phối điện áp cao đến các bugi theo thứ tự đánh lửa chính xác.",
            4: "Bugi: Đốt cháy hỗn hợp không khí-nhiên liệu trong các xi lanh của động cơ",
            5: "Công Tắc Đánh Lửa: Cho phép người lái bật và tắt hệ thống đánh lửa.",
            6: "Bộ Điều Khiển: Quản lý thời điểm và hoạt động của hệ thống đánh lửa."
        },
        Functions: {
            1: "Biến Đổi Điện Áp: Cuộn đánh lửa biến đổi điện áp thấp từ ắc quy thành điện áp cao cần thiết để tạo ra tia lửa.",
            2: "Điều Chỉnh Thời Gian Đánh Lửa: Bộ điều khiển hoặc bộ phân phối đảm bảo rằng tia lửa xảy ra đúng thời điểm cho mỗi xi lanh.",
            3: "Phân Phối Tia Lửa: Bộ phân phối hoặc bộ điều khiển gửi tia lửa điện áp cao đến bugi đúng.",
            4: "Đánh Lửa: Các bugi đốt cháy hỗn hợp không khí-nhiên liệu, gây ra sự cháy và tạo năng lượng cho động cơ."
        }
    },
    brakeSystem: {
        name: 'Hệ thống phanh',
        Content: "Hệ thống phanh là một tính năng an toàn quan trọng trong bất kỳ phương tiện nào, chịu trách nhiệm làm chậm hoặc dừng xe. Hiệu quả và độ tin cậy của hệ thống phanh là cực kỳ quan trọng đối với sự an toàn của phương tiện. Dưới đây là tổng quan về các thành phần chính và chức năng của một hệ thống phanh điển hình:",
        MainComponents: {
            1: "Bàn Đạp Phanh: Người lái xe tác động lực lên bàn đạp phanh để bắt đầu quá trình phanh.",
            2: "Xi Lanh Chính: Chuyển đổi lực từ bàn đạp phanh thành áp suất thủy lực.",
            3: "Đường Dẫn Phanh: Chuyển dẫn chất lỏng thủy lực từ xi lanh chính đến các caliper hoặc xi lanh bánh xe.",
            4: "Caliper Phanh: Kẹp các má phanh vào các đĩa phanh để tạo ra ma sát và làm chậm xe (trong hệ thống phanh đĩa).",
            5: "Má Phanh: Tạo ma sát với các đĩa phanh để làm chậm xe.",
            6: "Đĩa Phanh: Các đĩa mà má phanh kẹp vào để tạo ra ma sát cần thiết.",
            7: "Trống Phanh: Được sử dụng trong hệ thống phanh tang trống; các guốc phanh ép vào trống để tạo ma sát.",
            8: "Guốc Phanh: Ép vào trống phanh để làm chậm xe.",
            9: "Dầu Phanh: Chất lỏng thủy lực truyền lực từ xi lanh chính đến các caliper hoặc xi lanh bánh xe.",
            10: "Hệ Thống Chống Bó Cứng Phanh (ABS): Ngăn chặn các bánh xe bị khóa cứng trong quá trình phanh mạnh để duy trì khả năng điều khiển lái."
        },
        Functions: {
            1: "Truyền Lực: Bàn đạp phanh tác động lực lên xi lanh chính, tạo ra áp suất thủy lực.",
            2: "Phân Phối Áp Suất Thủy Lực: Xi lanh chính phân phối áp suất thủy lực qua các đường dẫn phanh đến các caliper hoặc xi lanh bánh xe.",
            3: "Tạo Ma Sát: Các má phanh hoặc guốc phanh tạo ma sát với các đĩa phanh hoặc trống phanh để làm chậm xe.",
            4: "Tản Nhiệt: Các đĩa phanh và trống phanh tản nhiệt được tạo ra trong quá trình phanh để tránh quá nhiệt.",
            5: "Nâng Cao An Toàn: Hệ thống ABS nâng cao an toàn bằng cách ngăn chặn khóa bánh xe và duy trì khả năng kiểm soát xe trong quá trình phanh mạnh."
        }
    },
    headlightSystem: {
        name: 'Hệ thống đèn pha',
        Content: "Hệ thống đèn pha là một phần thiết yếu của xe, cung cấp tầm nhìn cho người lái xe trong điều kiện ánh sáng yếu, như ban đêm hoặc trong thời tiết xấu, và làm cho xe dễ thấy đối với những người tham gia giao thông khác. Dưới đây là tổng quan về các thành phần chính và chức năng của một hệ thống đèn pha điển hình:",
        MainComponents: {
            1: "Bóng Đèn Pha: Cung cấp ánh sáng cần thiết cho tầm nhìn. Các loại thông thường bao gồm halogen, HID (High-Intensity Discharge), và LED (Light Emitting Diode).",
            2: "Vỏ Đèn Pha: Bảo vệ bóng đèn pha và giúp định hướng chùm sáng.",
            3: "Gương Phản Xạ và Thấu Kính: Gương phản xạ tập trung và hướng ánh sáng từ bóng đèn, trong khi thấu kính giúp định hình chùm sáng và cải thiện tầm nhìn.",
            4: "Công Tắc Đèn Pha: Cho phép người lái bật và tắt đèn pha cũng như chuyển đổi giữa chùm sáng cao và thấp.",
            5: "Chùm Sáng Cao: Cung cấp ánh sáng sáng hơn và tập trung hơn cho tình huống tầm nhìn kém mà không có xe đối diện.",
            6: "Chùm Sáng Thấp: Cung cấp đủ ánh sáng để lái xe mà không gây chói mắt cho người lái xe đối diện.",
            7: "Đèn Chạy Ban Ngày (DRL): Tự động bật khi xe chạy để tăng cường khả năng nhìn thấy trong ban ngày.",
            8: "Dây Điện và Rơ-le: Kết nối các thành phần đèn pha và kiểm soát nguồn điện cho đèn pha.",
            9: "Hệ Thống Đèn Pha Tự Động: Các cảm biến và điều khiển tự động bật hoặc tắt đèn pha dựa trên điều kiện ánh sáng môi trường."
        },
        Functions: {
            1: "Chiếu Sáng: Cung cấp đủ ánh sáng cho người lái xe để nhìn thấy đường và xung quanh vào ban đêm hoặc trong điều kiện ánh sáng yếu.",
            2: "Khả Năng Nhìn Thấy: Đảm bảo rằng xe có thể nhìn thấy được bởi những người tham gia giao thông khác.",
            3: "Chuyển Đổi Chùm Sáng: Cho phép người lái chuyển đổi giữa chùm sáng cao để chiếu sáng mạnh hơn và chùm sáng thấp để tránh gây chói mắt cho các lái xe khác.",
            4: "Hoạt Động Tự Động: Sử dụng cảm biến để tự động kiểm soát đèn pha dựa trên điều kiện ánh sáng môi trường, nâng cao tiện ích và an toàn.",
            5: "Tầm Nhìn Ban Ngày: Đèn chạy ban ngày cải thiện khả năng nhìn thấy của xe trong ban ngày, giảm nguy cơ tai nạn."
        }
    },
    brakeSystemCar: {
        name: 'Hệ thống phanh xe',
        Content: "Hệ thống phanh là một tính năng an toàn quan trọng trong bất kỳ phương tiện nào, chịu trách nhiệm làm chậm hoặc dừng xe. Hiệu quả và độ tin cậy của hệ thống phanh là cực kỳ quan trọng đối với sự an toàn của phương tiện và hành khách. Dưới đây là tổng quan về các thành phần chính và chức năng của một hệ thống phanh điển hình:",
        MainComponents: {
            1: "Bàn Đạp Phanh: Người lái xe tác động lực lên bàn đạp phanh để bắt đầu quá trình phanh.",
            2: "Xi Lanh Chính: Chuyển đổi lực từ bàn đạp phanh thành áp suất thủy lực.",
            3: "Đường Dẫn Phanh: Chuyển dẫn chất lỏng thủy lực từ xi lanh chính đến các caliper hoặc xi lanh bánh xe.",
            4: "Caliper Phanh: Kẹp các má phanh vào các đĩa phanh để tạo ra ma sát và làm chậm xe (trong hệ thống phanh đĩa).",
            5: "Má Phanh: Tạo ma sát với các đĩa phanh để làm chậm xe.",
            6: "Đĩa Phanh: Các đĩa mà má phanh kẹp vào để tạo ra ma sát cần thiết.",
            7: "Trống Phanh: Được sử dụng trong hệ thống phanh tang trống; các guốc phanh ép vào trống để tạo ma sát.",
            8: "Guốc Phanh: Ép vào trống phanh để làm chậm xe.",
            9: "Dầu Phanh: Chất lỏng thủy lực truyền lực từ xi lanh chính đến các caliper hoặc xi lanh bánh xe.",
            10: "Hệ Thống Chống Bó Cứng Phanh (ABS): Ngăn chặn các bánh xe bị khóa cứng trong quá trình phanh mạnh để duy trì khả năng điều khiển lái."
        },
        Functions: {
            1: "Truyền Lực: Bàn đạp phanh tác động lực lên xi lanh chính, tạo ra áp suất thủy lực.",
            2: "Phân Phối Áp Suất Thủy Lực: Xi lanh chính phân phối áp suất thủy lực qua các đường dẫn phanh đến các caliper hoặc xi lanh bánh xe.",
            3: "Tạo Ma Sát: Các má phanh hoặc guốc phanh tạo ma sát với các đĩa phanh hoặc trống phanh để làm chậm xe.",
            4: "Tản Nhiệt: Các đĩa phanh và trống phanh tản nhiệt được tạo ra trong quá trình phanh để tránh quá nhiệt.",
            5: "Nâng Cao An Toàn: Hệ thống ABS nâng cao an toàn bằng cách ngăn chặn khóa bánh xe và duy trì khả năng kiểm soát xe trong quá trình phanh mạnh."
        }
    },
    catalyticConverter: {
        name: 'Bộ chuyển đổi xúc tác',
        Content: "Bộ chuyển đổi xúc tác là một thành phần thiết yếu của hệ thống xả của xe, được thiết kế để giảm thiểu các khí thải độc hại do động cơ sinh ra. Nó giúp chuyển đổi các chất ô nhiễm độc hại thành các khí thải ít độc hại hơn trước khi chúng được thải ra môi trường. Dưới đây là tổng quan về các thành phần chính và chức năng của một bộ chuyển đổi xúc tác điển hình:",
        MainComponents: {
            1: "Chất Nền Xúc Tác: Thường được làm từ cấu trúc tổ ong bằng gốm hoặc kim loại, cung cấp diện tích bề mặt lớn cho các phản ứng xúc tác.",
            2: "Lớp Phủ Xúc Tác: Chứa các kim loại quý như bạch kim, palladium, và rhodium giúp xúc tác các phản ứng hóa học.",
            3: "Cảm Biến Oxy: Giám sát mức độ oxy trong khí thải để đảm bảo hoạt động tối ưu của bộ chuyển đổi xúc tác.",
            4: "Tấm Chắn Nhiệt: Bảo vệ bộ chuyển đổi xúc tác và các thành phần xung quanh khỏi nhiệt độ cao được sinh ra trong quá trình hoạt động."
        },
        Functions: {
            1: "Giảm Thiểu Oxit Nitơ (NOx): Bộ chuyển đổi xúc tác giảm thiểu NOx bằng cách phá vỡ chúng thành nitơ và oxy.",
            2: "Oxy Hóa Carbon Monoxide (CO): Chuyển đổi carbon monoxide, một loại khí độc hại, thành carbon dioxide, ít độc hại hơn.",
            3: "Oxy Hóa Hydrocarbon (HC): Các hydrocarbon chưa cháy hết trong khí thải được chuyển đổi thành carbon dioxide và nước.",
            4: "Kiểm Soát Khí Thải: Tổng thể, bộ chuyển đổi xúc tác giúp kiểm soát lượng khí thải độc hại, góp phần làm sạch không khí và đáp ứng các tiêu chuẩn quy định."
        }
    },
    Exhaust: {
        name: 'Ống Xả',
        Content: "Hệ thống ống xả là một phần quan trọng của xe, chịu trách nhiệm dẫn khí thải ra khỏi động cơ và ra ngoài xe. Nó đóng vai trò quan trọng trong việc giảm khí thải, tăng hiệu suất động cơ và giảm tiếng ồn. Dưới đây là tổng quan về các thành phần chính và chức năng của một hệ thống ống xả ô tô điển hình:",
        MainComponents: {
            1: "Ống Xả Chính: Thu thập khí thải từ các xi lanh động cơ và dẫn chúng vào ống xả.",
            2: "Cảm Biến Oxy: Giám sát mức độ oxy trong khí thải để giúp động cơ kiểm soát hỗn hợp nhiên liệu-không khí tối ưu cho quá trình đốt cháy.",
            3: "Bộ Chuyển Đổi Xúc Tác: Giảm thiểu khí thải độc hại bằng cách chuyển đổi các khí độc (như carbon monoxide, oxit nitơ và hydrocarbon) thành các chất ít độc hại hơn (như carbon dioxide và nước).",
            4: "Ống Xả: Dẫn khí thải từ ống xả chính qua bộ chuyển đổi xúc tác và ống giảm âm, cuối cùng thải chúng ra khỏi xe.",
            5: "Ống Giảm Âm: Giảm tiếng ồn do khí thải sinh ra khi chúng thoát ra khỏi động cơ.",
            6: "Ống Cộng Hưởng: Hoạt động cùng với ống giảm âm để giảm thêm tiếng ồn và có thể giúp điều chỉnh âm thanh của hệ thống xả.",
            7: "Ống Xả Cuối: Phần cuối cùng của hệ thống xả, nơi khí thải được thải ra môi trường."
        },
        Functions: {
            1: "Kiểm Soát Khí Thải: Giảm các chất ô nhiễm độc hại từ khí thải để đáp ứng các quy định về môi trường.",
            2: "Giảm Tiếng Ồn: Giảm tiếng ồn do khí thải sinh ra thông qua ống giảm âm và ống cộng hưởng.",
            3: "Tăng Hiệu Suất Động Cơ: Tăng hiệu quả động cơ bằng cách quản lý hiệu quả luồng khí thải.",
            4: "Tản Nhiệt: Tản nhiệt an toàn sinh ra từ khí thải ra khỏi động cơ và xe."
        }
    },
    airbag: {
        name: 'Túi khí',
        Content: "Hệ thống túi khí là một tính năng an toàn quan trọng trong các phương tiện, được thiết kế để bảo vệ hành khách trong quá trình va chạm bằng cách cung cấp một hiệu ứng đệm. Hệ thống này nhanh chóng bơm phồng các túi khí trong trường hợp xảy ra tai nạn, giảm nguy cơ chấn thương. Dưới đây là tổng quan về các thành phần chính và chức năng của một hệ thống túi khí điển hình:",
        MainComponents: {
            1: "Túi Khí: Các túi vải mềm dẻo bơm phồng khi va chạm để cung cấp hiệu ứng đệm. Các loại thông thường bao gồm túi khí phía trước, túi khí bên hông, túi khí rèm và túi khí đầu gối.",
            2: "Cảm Biến Va Chạm: Phát hiện lực và mức độ nghiêm trọng của va chạm và gửi tín hiệu đến bộ điều khiển túi khí để kích hoạt túi khí.",
            3: "Bộ Điều Khiển Túi Khí (ACU): Máy tính trung tâm xử lý tín hiệu từ các cảm biến va chạm và quyết định khi nào cần kích hoạt túi khí.",
            4: "Bộ Bơm Phồng Túi Khí: Chứa các hóa chất sinh khí nhanh chóng bơm phồng túi khí khi nhận được tín hiệu từ ACU.",
            5: "Dây Đai An Toàn: Hoạt động cùng với túi khí để giữ chặt hành khách và giảm chuyển động trong quá trình va chạm, tăng cường hiệu quả của túi khí.",
            6: "Đèn Cảnh Báo: Nằm trên bảng điều khiển, chỉ báo trạng thái của hệ thống túi khí và cảnh báo người lái về bất kỳ sự cố nào."
        },
        Functions: {
            1: "Phát Hiện Va Chạm: Cảm biến va chạm phát hiện va chạm và gửi tín hiệu đến ACU.",
            2: "Kích Hoạt Túi Khí: ACU xử lý các tín hiệu và kích hoạt bộ bơm phồng túi khí để bơm phồng túi khí.",
            3: "Bảo Vệ Hành Khách: Túi khí bơm phồng cung cấp hiệu ứng đệm, giảm lực tác động lên hành khách và giảm nguy cơ chấn thương.",
            4: "Giám Sát Hệ Thống: Đèn cảnh báo giám sát trạng thái của hệ thống túi khí và cảnh báo người lái về bất kỳ vấn đề nào."
        }
    },
    suspension: 'Hệ thống treo',
    drivetrain: 'Hệ thống dẫn động',
    steeringWheel: 'Hệ thống lái',
    wheelSystem: 'Hệ thống bánh xe',
    electricalSystem: 'Hệ thống điện',
    airConditioningSystem: 'Hệ thống điều hòa',
    exterior: 'Ngoại thất',
    engine: 'Động cơ',
    transmission: 'Hộp số',
    automotiveCoolingSystem: 'Hệ thống làm mát',
    automotiveLubricationSystem: 'Hệ thống bôi trơn',
    automotiveChassisSystem: 'Hệ thống khung gầm',
    Content: 'Nội Dung ',
    MainComponents: 'Các Thành Phần Chính',
    Functions: 'Chức Năng'

}