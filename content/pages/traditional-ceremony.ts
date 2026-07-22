import type { ServicePageContent } from "@/content/types";

export const traditionalCeremonyContent: ServicePageContent = {
  slug: "/traditional-ceremony-decor",
  seo: {
    title:
      "Traditional Ceremony Decor by TIFF | Trang trí lễ gia tiên, ăn hỏi, vu quy",
    description:
      "Dịch vụ trang trí lễ gia tiên, ăn hỏi, vu quy và thành hôn tại tư gia với concept Sweet Home và Bliss Home trang trọng, tinh tế, ấm cúng.",
  },
  hero: {
    eyebrow: "Traditional Ceremony Decor by TIFF",
    title: "Trang trí lễ gia tiên, ăn hỏi, vu quy và thành hôn tại tư gia",
    body: "Lễ gia tiên là một nghi thức quan trọng trong đám cưới Việt Nam, là khoảnh khắc kết nối hai gia đình và thể hiện sự trang trọng, biết ơn cùng dấu ấn văn hóa. TIFF thiết kế và trang trí không gian lễ truyền thống theo hướng chỉn chu, tinh tế và hài hòa với kiến trúc tư gia, căn hộ, biệt thự hoặc nhà vườn.",
    ctaPrimary: { label: "Nhận tư vấn lễ gia tiên", href: "#tu-van" },
    ctaSecondary: {
      label: "Gửi ảnh nhà để nhận phương án decor",
      href: "#concept",
    },
    imageKey: "hero-traditional-ceremony",
  },
  fitTable: {
    eyebrow: "Phù hợp với ai",
    title: "Traditional Ceremony Decor phù hợp với ai?",
    columns: [
      "Nhu cầu của bạn",
      "Traditional Ceremony Decor có phù hợp không?",
    ],
    rows: [
      { left: "Tổ chức lễ gia tiên tại nhà", right: "Phù hợp" },
      { left: "Tổ chức ăn hỏi, vu quy, thành hôn", right: "Phù hợp" },
      {
        left: "Muốn không gian trang trọng nhưng không quá cứng",
        right: "Phù hợp",
      },
      { left: "Cần decor hài hòa với nội thất gia đình", right: "Phù hợp" },
      {
        left: "Muốn có góc chụp hình đẹp cho hai bên gia đình",
        right: "Phù hợp",
      },
      {
        left: "Cần setup gọn gàng, không ảnh hưởng nhiều đến sinh hoạt gia đình",
        right: "Phù hợp",
      },
      {
        left: "Tổ chức trong ballroom/khách sạn",
        right: "Nên tham khảo Hotel Wedding Decor",
      },
      {
        left: "Tổ chức ngoài trời/resort/villa",
        right: "Nên tham khảo Outdoor Wedding Decor",
      },
    ],
  },
  comparisonTable: {
    eyebrow: "So sánh concept",
    title: "So sánh concept Traditional Ceremony",
    columns: [
      "Phù hợp với",
      "Tinh thần thiết kế",
      "Tone màu gợi ý",
      "Cảm giác tổng thể",
    ],
    rows: [
      {
        name: "Sweet Home",
        cells: [
          "Cặp đôi thích sự trẻ trung, tươi sáng, ngọt ngào",
          "Lãng mạn, mềm mại, vui tươi, có dấu ấn riêng",
          "Hồng phấn, peach, cam đào, trắng kem, lilac, pastel",
          "Tươi sáng, gần gũi, trẻ trung",
        ],
      },
      {
        name: "Bliss Home",
        cells: [
          "Cặp đôi và gia đình thích sự trang nhã, ấm cúng, tinh tế",
          "Nhẹ nhàng, gọn gàng, hài hòa với không gian nhà",
          "Trắng kem, be, champagne, olive nhạt, nâu gỗ, gold nhẹ",
          "Ấm cúng, thanh lịch, trang trọng",
        ],
      },
    ],
  },
  matrixTable: {
    eyebrow: "Hạng mục theo concept",
    title: "Bảng hạng mục Traditional Ceremony Decor",
    packageColumns: ["Sweet Home", "Bliss Home"],
    rows: [
      { category: "Backdrop gia tiên", values: ["Có", "Có"] },
      { category: "Bàn thờ gia tiên", values: ["Có", "Có"] },
      { category: "Cổng hoa", values: ["Có", "Có"] },
      { category: "Bàn quả/tráp", values: ["Có", "Có"] },
      { category: "Bàn ghế hai họ", values: ["Có", "Có"] },
      { category: "Bảng tên cô dâu chú rể", values: ["Có", "Có"] },
      {
        category: "Góc chụp hình gia đình",
        values: ["Có, trẻ trung hơn", "Có, trang nhã hơn"],
      },
      {
        category: "Hoa trang trí trong nhà",
        values: ["Mềm mại, tươi sáng", "Nhẹ nhàng, thanh lịch"],
      },
      { category: "Trang trí lối vào", values: ["Có thể có", "Có thể có"] },
      {
        category: "Trang trí cầu thang/khu vực phụ",
        values: ["Tùy không gian", "Tùy không gian"],
      },
      {
        category: "Chi tiết cá nhân hóa",
        values: ["Có thể nổi bật hơn", "Tinh tế, tiết chế hơn"],
      },
    ],
  },
  extraTable: {
    eyebrow: "Lưu ý khi decor tại tư gia",
    title: "Những yếu tố cần lưu ý khi decor tại tư gia",
    columns: ["Yếu tố", "Vì sao cần lưu ý?"],
    rows: [
      {
        left: "Diện tích nhà",
        right:
          "Quyết định kích thước backdrop, bàn ghế, lối đi và khu vực chụp hình",
      },
      {
        left: "Vị trí bàn thờ gia tiên",
        right: "Là trung tâm nghi lễ, cần bố trí trang trọng và hợp lý",
      },
      {
        left: "Ánh sáng trong nhà",
        right: "Ảnh hưởng đến màu sắc decor và hình ảnh chụp",
      },
      {
        left: "Nội thất hiện có",
        right: "Decor cần hài hòa, không làm không gian bị rối",
      },
      {
        left: "Luồng di chuyển của hai họ",
        right: "Cần đảm bảo thuận tiện trong lúc làm lễ",
      },
      {
        left: "Thời gian setup",
        right: "Cần phù hợp với sinh hoạt gia đình và lịch nghi lễ",
      },
      {
        left: "Áo dài & tráp lễ",
        right: "Có thể đồng bộ màu sắc để tổng thể đẹp hơn",
      },
    ],
  },
  advisoryTable: {
    eyebrow: "TIFF tư vấn gì",
    title: "TIFF sẽ tư vấn gì cho lễ gia tiên tại nhà?",
    columns: ["Nội dung tư vấn", "Giá trị mang lại"],
    rows: [
      {
        left: "Chọn concept phù hợp không gian nhà",
        right: "Tránh decor bị lệch với kiến trúc hoặc nội thất",
      },
      {
        left: "Tư vấn tone màu",
        right: "Hài hòa với áo dài, tráp lễ, nội thất và ánh sáng",
      },
      {
        left: "Bố trí khu vực làm lễ",
        right: "Giúp luồng di chuyển của hai họ thuận tiện hơn",
      },
      {
        left: "Chọn hạng mục nên đầu tư",
        right: "Tạo điểm nhấn đẹp khi chụp hình nhưng không quá dàn trải",
      },
      {
        left: "Tối ưu theo diện tích nhà",
        right: "Không gian vẫn trang trọng mà không bị chật",
      },
      {
        left: "Setup theo timeline gia đình",
        right: "Hạn chế ảnh hưởng sinh hoạt trước ngày lễ",
      },
    ],
  },
  ctaTable: {
    rows: [
      {
        label: "Sweet Home",
        ctaText: "Nhận moodboard lễ gia tiên trẻ trung",
        href: "#tu-van",
      },
      {
        label: "Bliss Home",
        ctaText: "Nhận phương án lễ gia tiên ấm cúng",
        href: "#tu-van",
      },
      {
        label: "Chưa rõ concept",
        ctaText: "Gửi ảnh nhà để TIFF tư vấn",
        href: "#tu-van",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "FAQ Traditional Ceremony Decor",
    items: [
      {
        question: "TIFF có nhận trang trí lễ gia tiên tại nhà không?",
        answer:
          "Có. TIFF nhận lễ gia tiên, ăn hỏi, vu quy và thành hôn tại tư gia.",
      },
      {
        question: "Nhà nhỏ có decor được không?",
        answer:
          "Có. TIFF sẽ tư vấn bố trí gọn gàng và tập trung vào các điểm chính.",
      },
      {
        question: "Có thể đồng bộ với áo dài/tráp lễ không?",
        answer:
          "Có. TIFF có thể gợi ý tone màu phù hợp với áo dài, tráp và không gian gia đình.",
      },
      {
        question: "Nên gửi gì để được tư vấn nhanh?",
        answer:
          "Ngày lễ, loại nghi lễ, ảnh không gian nhà, tone màu yêu thích, số lượng khách và ngân sách dự kiến.",
      },
    ],
  },
  consultationForm: {
    eyebrow: "Nhận tư vấn",
    title: "Form tư vấn Traditional Ceremony",
    fields: [
      { name: "ngayLe", label: "Ngày lễ", type: "date", required: true },
      {
        name: "loaiNghiLe",
        label: "Loại nghi lễ",
        type: "select",
        options: ["Ăn hỏi", "Vu quy", "Thành hôn", "Gia tiên"],
        required: true,
      },
      {
        name: "diaDiem",
        label: "Địa điểm",
        placeholder: "Tư gia, căn hộ, biệt thự, nhà vườn…",
        type: "text",
        required: true,
      },
      {
        name: "hinhAnhNha",
        label: "Hình ảnh không gian nhà",
        placeholder: "Phòng khách, cổng, lối vào, khu vực bàn thờ",
        type: "textarea",
      },
      {
        name: "toneMau",
        label: "Tone màu yêu thích",
        placeholder: "Pastel, trắng kem, hồng, be, champagne…",
        type: "text",
      },
      {
        name: "concept",
        label: "Concept quan tâm",
        type: "select",
        options: ["Sweet Home", "Bliss Home", "Chưa rõ"],
        required: true,
      },
      {
        name: "soLuongKhach",
        label: "Số lượng khách/người nhà",
        placeholder: "Dự kiến số lượng",
        type: "text",
      },
      {
        name: "khuVuc",
        label: "Khu vực muốn decor",
        placeholder: "Backdrop, bàn thờ, cổng, bàn ghế, lối vào…",
        type: "text",
      },
      {
        name: "nganSach",
        label: "Ngân sách decor",
        placeholder: "Khoảng ngân sách mong muốn",
        type: "text",
      },
      {
        name: "banKhoan",
        label: "Điều gia đình băn khoăn",
        placeholder: "Diện tích, màu sắc, setup, chi phí, timeline…",
        type: "textarea",
      },
    ],
    submitLabel: "Nhận tư vấn Traditional Ceremony Decor",
    source: "traditional-ceremony-decor",
  },
};
