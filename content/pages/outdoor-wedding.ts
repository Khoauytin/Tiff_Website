import type { ServicePageContent } from "@/content/types";

export const outdoorWeddingContent: ServicePageContent = {
  slug: "/outdoor-wedding-decor",
  seo: {
    title: "Outdoor Wedding Decor by TIFF | Trang trí lễ cưới ngoài trời",
    description:
      "TIFF thiết kế và trang trí garden wedding, outdoor ceremony, resort wedding, villa wedding và destination wedding với concept tự nhiên, cảm xúc và khả thi.",
  },
  hero: {
    eyebrow: "Outdoor Wedding Decor by TIFF",
    title: "Lễ cưới ngoài trời tự nhiên, cảm xúc và được tính toán kỹ lưỡng",
    body: "Outdoor Wedding phù hợp với các cặp đôi yêu thích thiên nhiên, không gian mở và những khoảnh khắc cưới mang tính cá nhân cao. TIFF không chỉ thiết kế một không gian cưới đẹp, mà còn cùng bạn tính toán các yếu tố thực tế như thời tiết, ánh sáng, mặt bằng, hướng nắng, sức gió, nguồn điện, lối vận chuyển và phương án dự phòng.",
    ctaPrimary: { label: "Nhận tư vấn Outdoor Wedding Decor", href: "#tu-van" },
    ctaSecondary: { label: "Gửi venue để nhận gợi ý concept", href: "#concept" },
    imageKey: "hero-outdoor-wedding",
  },
  fitTable: {
    eyebrow: "Phù hợp với ai",
    title: "Outdoor Wedding Decor phù hợp với ai?",
    columns: ["Nhu cầu của bạn", "Outdoor Wedding Decor có phù hợp không?"],
    rows: [
      { left: "Tổ chức garden wedding", right: "Phù hợp" },
      { left: "Làm ceremony ngoài trời", right: "Phù hợp" },
      { left: "Tổ chức tại resort, villa, bãi biển, sân vườn", right: "Phù hợp" },
      { left: "Muốn không gian tự nhiên, phóng khoáng", right: "Phù hợp" },
      {
        left: "Có nhiều hình inspiration nhưng chưa rõ concept",
        right: "Phù hợp",
      },
      {
        left: "Cần tính phương án thời tiết, ánh sáng, gió, điện",
        right: "Phù hợp",
      },
      {
        left: "Tổ chức trong ballroom/khách sạn",
        right: "Nên tham khảo Hotel Wedding Decor",
      },
      {
        left: "Tổ chức lễ gia tiên tại nhà",
        right: "Nên tham khảo Traditional Ceremony Decor",
      },
    ],
  },
  comparisonTable: {
    eyebrow: "So sánh concept",
    title: "So sánh concept Outdoor Wedding",
    columns: [
      "Phù hợp với",
      "Tinh thần thiết kế",
      "Tone màu gợi ý",
      "Mức độ cá nhân hóa",
    ],
    rows: [
      {
        name: "Elegant Wedding",
        imageKey: "outdoor-elegant",
        cells: [
          "Cặp đôi thích sự thanh lịch, nhẹ nhàng, ít lỗi thời",
          "Tinh tế, trang nhã, hài hòa với cảnh quan",
          "Ivory, champagne, blush, beige, sage, olive",
          "Vừa phải",
        ],
      },
      {
        name: "Inspiration Wedding",
        imageKey: "outdoor-inspiration",
        cells: [
          "Cặp đôi có câu chuyện riêng, nhiều inspiration, muốn dấu ấn cá nhân rõ",
          "Sáng tạo, cảm xúc, cá nhân hóa, linh hoạt theo venue",
          "Pastel, earth tone, terracotta, tropical, sunset, colorful artistic…",
          "Cao hơn",
        ],
      },
    ],
  },
  matrixTable: {
    eyebrow: "Hạng mục theo concept",
    title: "Bảng hạng mục Outdoor Wedding Decor",
    packageColumns: ["Elegant Wedding", "Inspiration Wedding"],
    rows: [
      { category: "Ceremony arch", values: ["Có", "Thiết kế riêng theo concept"] },
      {
        category: "Aisle ngoài trời",
        values: ["Có", "Cá nhân hóa theo tinh thần concept"],
      },
      { category: "Welcome signage", values: ["Có", "Custom signage"] },
      {
        category: "Seating layout",
        values: ["Có", "Có thể thiết kế trải nghiệm khách mời rõ hơn"],
      },
      {
        category: "Photobooth/góc chụp hình",
        values: ["Có thể có", "Photobooth hoặc art corner"],
      },
      {
        category: "Gallery/memory corner",
        values: ["Có thể có", "Story/memory corner cá nhân hóa"],
      },
      {
        category: "Hoa trang trí",
        values: ["Chọn lọc, nhẹ nhàng", "Đầu tư theo concept"],
      },
      {
        category: "Tablescape/bàn tiệc",
        values: ["Tùy phạm vi", "Có thể thiết kế đồng bộ"],
      },
      {
        category: "Lighting decor",
        values: ["Nhẹ nhàng", "Có thể đầu tư rõ hơn nếu tiệc chiều/tối"],
      },
      { category: "Chi tiết cá nhân hóa", values: ["Ít hơn", "Nhiều hơn"] },
      { category: "Phương án dự phòng", values: ["Có khi cần", "Có khi cần"] },
    ],
  },
  extraTable: {
    eyebrow: "Yếu tố cần tính toán",
    title: "Những yếu tố TIFF sẽ tính toán cho lễ cưới ngoài trời",
    columns: ["Yếu tố", "Vì sao quan trọng?"],
    rows: [
      {
        left: "Thời tiết",
        right:
          "Ảnh hưởng trực tiếp đến setup, hoa, kết cấu và trải nghiệm khách mời",
      },
      {
        left: "Hướng nắng",
        right: "Quyết định thời điểm làm lễ, vị trí arch, hướng ghế ngồi",
      },
      {
        left: "Sức gió",
        right: "Ảnh hưởng đến độ an toàn của kết cấu, hoa, vải, signage",
      },
      {
        left: "Nguồn điện",
        right: "Cần cho ánh sáng, âm thanh, setup và khu vực tiệc",
      },
      {
        left: "Mặt bằng",
        right:
          "Nền cỏ, nền cát, nền gỗ hoặc mặt dốc cần phương án thi công khác nhau",
      },
      {
        left: "Lối vận chuyển",
        right: "Ảnh hưởng đến timeline setup và nhân sự",
      },
      {
        left: "Ánh sáng buổi tối",
        right: "Cần tính đèn trang trí, đèn chức năng và mood không gian",
      },
      {
        left: "Phương án dự phòng",
        right: "Giúp lễ cưới an toàn hơn khi thời tiết thay đổi",
      },
    ],
  },
  advisoryTable: {
    eyebrow: "TIFF tư vấn gì",
    title: "TIFF sẽ tư vấn gì cho Outdoor Wedding?",
    columns: ["Nội dung tư vấn", "Giá trị mang lại"],
    rows: [
      {
        left: "Phân tích venue/cảnh quan",
        right: "Chọn concept hài hòa với không gian thực tế",
      },
      {
        left: "Chọn tone màu & chất liệu",
        right: "Đảm bảo đẹp, tự nhiên và phù hợp điều kiện ngoài trời",
      },
      {
        left: "Thiết kế ceremony area",
        right: "Tạo điểm nhấn cho khoảnh khắc làm lễ",
      },
      {
        left: "Tư vấn seating layout",
        right: "Tối ưu tầm nhìn và trải nghiệm khách mời",
      },
      {
        left: "Kiểm tra tính khả thi thi công",
        right: "Hạn chế rủi ro về gió, điện, mặt bằng, vận chuyển",
      },
      {
        left: "Chuẩn bị phương án dự phòng",
        right: "Giúp cặp đôi an tâm hơn trong ngày cưới",
      },
    ],
  },
  ctaTable: {
    rows: [
      {
        label: "Elegant Wedding",
        ctaText: "Nhận moodboard ngoài trời thanh lịch",
        href: "#tu-van",
      },
      {
        label: "Inspiration Wedding",
        ctaText: "Gửi inspiration cho TIFF",
        href: "#tu-van",
      },
      {
        label: "Chưa rõ concept",
        ctaText: "Gửi venue để nhận gợi ý phù hợp",
        href: "#tu-van",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "FAQ Outdoor Wedding Decor",
    items: [
      {
        question: "TIFF có nhận decor garden wedding không?",
        answer:
          "Có. TIFF nhận garden wedding, outdoor ceremony, villa, resort và destination wedding.",
      },
      {
        question: "Outdoor wedding có cần phương án dự phòng không?",
        answer:
          "Có. Đặc biệt với thời tiết, gió, ánh sáng, nguồn điện và khu vực setup.",
      },
      {
        question: "Có thể gửi hình inspiration không?",
        answer:
          "Có. TIFF có thể phân tích 3–5 hình ảnh yêu thích để đề xuất concept phù hợp.",
      },
      {
        question: "Nếu venue ngoài trời chưa đẹp sẵn thì sao?",
        answer:
          "TIFF sẽ tư vấn điểm nhấn phù hợp như ceremony arch, aisle, lighting, floral installation hoặc welcome area.",
      },
    ],
  },
  consultationForm: {
    eyebrow: "Nhận tư vấn",
    title: "Form tư vấn Outdoor Wedding",
    fields: [
      { name: "ngayCuoi", label: "Ngày cưới", type: "date", required: true },
      {
        name: "venue",
        label: "Venue/địa điểm",
        placeholder: "Resort, villa, sân vườn, bãi biển…",
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
        name: "thoiDiem",
        label: "Thời điểm tổ chức",
        type: "select",
        options: ["Sáng", "Chiều", "Tối"],
        required: true,
      },
      {
        name: "concept",
        label: "Concept quan tâm",
        type: "select",
        options: ["Elegant", "Inspiration", "Chưa rõ"],
        required: true,
      },
      {
        name: "nganSach",
        label: "Ngân sách decor",
        placeholder: "Khoảng ngân sách mong muốn",
        type: "text",
      },
      {
        name: "hinhAnhVenue",
        label: "Hình ảnh venue",
        placeholder: "Gửi ảnh/video nếu có",
        type: "textarea",
      },
      {
        name: "inspiration",
        label: "Inspiration",
        placeholder: "Gửi 3–5 hình yêu thích",
        type: "textarea",
      },
      {
        name: "dieuLoNhat",
        label: "Điều lo nhất",
        placeholder: "Thời tiết, gió, setup, điện, chi phí…",
        type: "textarea",
      },
    ],
    submitLabel: "Nhận tư vấn Outdoor Wedding Decor",
    source: "outdoor-wedding-decor",
  },
};
