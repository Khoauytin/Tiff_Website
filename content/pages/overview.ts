import type { OverviewPageContent } from "@/content/types";

export const overviewContent: OverviewPageContent = {
  slug: "/",
  seo: {
    title: "Wedding Decor by TIFF | Thiết kế & trang trí không gian cưới",
    description:
      "TIFF cung cấp dịch vụ Wedding Decor cho tiệc cưới khách sạn, lễ cưới ngoài trời và lễ gia tiên. Tư vấn concept, tối ưu ngân sách, setup và giám sát hiện trường.",
  },
  hero: {
    eyebrow: "Wedding Decor by TIFF",
    title:
      "Thiết kế không gian cưới tinh tế, chỉn chu và mang dấu ấn riêng",
    body: "Một lễ cưới đẹp không chỉ nằm ở hoa, ánh sáng hay sân khấu. Đó là sự kết nối hài hòa giữa concept, màu sắc, chất liệu, bố cục không gian, cảm xúc và cách từng chi tiết được chuẩn bị trong thực tế. TIFF đồng hành cùng cô dâu chú rể trong việc định hình concept, tối ưu ngân sách, thiết kế và thi công không gian cưới phù hợp với venue, phong cách cá nhân và mong muốn của gia đình.",
    ctaPrimary: { label: "Nhận tư vấn Wedding Decor", href: "#tu-van" },
    ctaSecondary: { label: "Tìm dịch vụ phù hợp", href: "#dich-vu" },
    imageKey: "hero-overview",
  },
  servicesTable: {
    eyebrow: "Dịch vụ",
    title: "TIFF cung cấp những dịch vụ Wedding Decor nào?",
    columns: ["Phù hợp với", "Tinh thần thiết kế", "CTA đề xuất"],
    rows: [
      {
        name: "Hotel Wedding Decor",
        cells: [
          "Tiệc cưới tại khách sạn, nhà hàng, ballroom",
          "Sang trọng, đồng bộ, chỉn chu từ sảnh đón khách đến sân khấu",
          "Khám phá Hotel Wedding",
        ],
      },
      {
        name: "Outdoor Wedding Decor",
        cells: [
          "Garden wedding, resort wedding, villa wedding, ceremony ngoài trời",
          "Tự nhiên, cảm xúc, hài hòa với cảnh quan",
          "Khám phá Outdoor Wedding",
        ],
      },
      {
        name: "Traditional Ceremony Decor",
        cells: [
          "Lễ gia tiên, ăn hỏi, vu quy, thành hôn tại nhà",
          "Trang trọng, ấm cúng, tinh tế, hài hòa với không gian gia đình",
          "Khám phá lễ gia tiên",
        ],
      },
    ],
  },
  supportTable: {
    eyebrow: "Đồng hành cùng bạn",
    title: "TIFF hỗ trợ bạn trong những phần nào?",
    rows: [
      {
        left: "Tư vấn định hướng",
        right:
          "Làm rõ nhu cầu, phong cách, ngân sách, venue và ưu tiên của cặp đôi",
      },
      {
        left: "Phát triển concept",
        right: "Đề xuất moodboard, tone màu, chất liệu, bố cục không gian",
      },
      {
        left: "Tối ưu ngân sách",
        right:
          "Gợi ý khu vực nên đầu tư, khu vực có thể tinh giản để tổng thể vẫn chỉn chu",
      },
      {
        left: "Thiết kế & thi công",
        right: "Triển khai các hạng mục decor theo phạm vi đã thống nhất",
      },
      {
        left: "Phối hợp venue/vendor",
        right:
          "Làm việc với venue, planner, âm thanh ánh sáng, photo/video khi cần",
      },
      {
        left: "Setup & giám sát",
        right:
          "Điều phối đội setup, kiểm tra chất lượng hiện trường và bàn giao không gian",
      },
    ],
  },
  fitTable: {
    eyebrow: "Dành cho bạn",
    title: "Bạn phù hợp với nhóm dịch vụ nào?",
    columns: ["Nếu bạn đang chuẩn bị", "TIFF gợi ý"],
    rows: [
      {
        left: "Tiệc cưới tại khách sạn, nhà hàng, ballroom",
        right: "Hotel Wedding Decor",
      },
      {
        left: "Lễ cưới ngoài trời, sân vườn, resort, villa",
        right: "Outdoor Wedding Decor",
      },
      {
        left: "Lễ gia tiên, ăn hỏi, vu quy, thành hôn tại tư gia",
        right: "Traditional Ceremony Decor",
      },
      {
        left: "Chưa rõ concept, chỉ mới có venue hoặc vài hình ảnh inspiration",
        right: "TIFF có thể tư vấn từ thông tin ban đầu",
      },
      {
        left: "Có ngân sách cụ thể và muốn tối ưu decor",
        right: "TIFF đề xuất phương án theo mức đầu tư phù hợp",
      },
    ],
  },
  processSteps: {
    eyebrow: "Quy trình",
    title: "Quy trình làm việc cùng TIFF",
    steps: [
      {
        number: "01",
        title: "Tư vấn ban đầu",
        body: "Nhận thông tin ngày cưới, venue, số lượng khách, phong cách và ngân sách",
      },
      {
        number: "02",
        title: "Định hướng concept",
        body: "Gợi ý moodboard, tone màu, khu vực nên đầu tư decor",
      },
      {
        number: "03",
        title: "Proposal & báo giá",
        body: "Gửi phương án decor với phạm vi công việc rõ ràng",
      },
      {
        number: "04",
        title: "Tinh chỉnh",
        body: "Điều chỉnh concept, hạng mục hoặc ngân sách theo phản hồi",
      },
      {
        number: "05",
        title: "Khảo sát khi cần",
        body: "Kiểm tra không gian, thời gian setup, điện, ánh sáng, lối vận chuyển",
      },
      {
        number: "06",
        title: "Chuẩn bị sản xuất",
        body: "Chuẩn bị vật liệu, hoa, kết cấu, nhân sự và timeline setup",
      },
      {
        number: "07",
        title: "Setup hiện trường",
        body: "Thi công theo kế hoạch và phối hợp với venue/vendor",
      },
      {
        number: "08",
        title: "Hoàn thiện & bàn giao",
        body: "Kiểm tra chi tiết, hoàn thiện không gian trước sự kiện",
      },
      {
        number: "09",
        title: "Tháo dỡ & nghiệm thu",
        body: "Tháo dỡ theo quy định venue và hoàn tất nghiệm thu",
      },
    ],
  },
  whyChooseTable: {
    eyebrow: "Vì sao chọn TIFF",
    title: "Vì sao chọn TIFF?",
    columns: ["Lý do", "Giá trị dành cho cô dâu chú rể"],
    rows: [
      {
        left: "Tư vấn theo nhu cầu thật",
        right: "Không áp dụng một mẫu cố định cho mọi lễ cưới",
      },
      {
        left: "Concept có tính khả thi",
        right:
          "Giúp hình ảnh inspiration được điều chỉnh phù hợp với venue thực tế",
      },
      {
        left: "Ngân sách có trọng tâm",
        right: "Tập trung vào điểm nhấn chính, tránh dàn trải không hiệu quả",
      },
      {
        left: "Quy trình rõ ràng",
        right:
          "Giúp cặp đôi hiểu từng bước và an tâm hơn khi chuẩn bị cưới",
      },
      {
        left: "Phối hợp tốt với venue/vendor",
        right: "Hạn chế rủi ro trong setup và ngày diễn ra sự kiện",
      },
      {
        left: "Chăm chút trải nghiệm khách mời",
        right: "Không gian cưới đẹp, liền mạch và có cảm xúc",
      },
    ],
  },
  consultationForm: {
    eyebrow: "Bắt đầu",
    title: "Để TIFF tư vấn sát hơn, bạn có thể gửi",
    fields: [
      {
        name: "hoTenSdt",
        label: "Họ tên & số điện thoại",
        placeholder: "Để Wedding Consultant liên hệ tư vấn",
        type: "text",
        required: true,
      },
      {
        name: "ngayCuoi",
        label: "Ngày cưới dự kiến",
        type: "date",
        required: true,
      },
      {
        name: "diaDiem",
        label: "Địa điểm tổ chức",
        placeholder: "Khách sạn, tư gia, resort, villa, sân vườn…",
        type: "text",
        required: true,
      },
      {
        name: "soLuongKhach",
        label: "Số lượng khách",
        placeholder: "Dự kiến bao nhiêu khách",
        type: "text",
      },
      {
        name: "nhomDichVu",
        label: "Nhóm dịch vụ quan tâm",
        type: "select",
        options: ["Hotel Wedding", "Outdoor Wedding", "Traditional Ceremony"],
        required: true,
      },
      {
        name: "nganSach",
        label: "Ngân sách decor dự kiến",
        placeholder: "Khoảng ngân sách mong muốn",
        type: "text",
      },
      {
        name: "phongCach",
        label: "Phong cách yêu thích",
        placeholder: "Sang trọng, lãng mạn, tối giản, tự nhiên, cá nhân hóa…",
        type: "text",
      },
      {
        name: "banKhoan",
        label: "Điều đang băn khoăn",
        placeholder: "Ngân sách, concept, venue, hạng mục, timeline…",
        type: "textarea",
      },
    ],
    submitLabel: "Nhận tư vấn Wedding Decor từ TIFF",
    source: "overview",
  },
};
