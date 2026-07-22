import type { ServicePageContent } from "@/content/types";

export const hotelWeddingContent: ServicePageContent = {
  slug: "/hotel-wedding-decor",
  seo: {
    title: "Hotel Wedding Decor by TIFF | Trang trí tiệc cưới khách sạn",
    description:
      "Dịch vụ trang trí tiệc cưới khách sạn, nhà hàng, ballroom với các package Modern, Trendy, L'amour và Signature Luxury phù hợp nhiều mức ngân sách.",
  },
  hero: {
    eyebrow: "Hotel Wedding Decor by TIFF",
    title: "Không gian cưới sang trọng, đồng bộ và chỉn chu trong ballroom",
    body: "Hotel Wedding Decor phù hợp với các cặp đôi tổ chức tiệc cưới tại khách sạn, nhà hàng hoặc ballroom, mong muốn không gian cưới trang trọng, hài hòa và được thiết kế đồng bộ từ khu vực đón khách đến sân khấu chính. TIFF giúp bạn định hình concept, lựa chọn tone màu, phân bổ ngân sách và triển khai decor phù hợp với ánh sáng, bố cục bàn tiệc, quy định venue và timeline setup thực tế.",
    ctaPrimary: { label: "Nhận tư vấn Hotel Wedding Decor", href: "#tu-van" },
    ctaSecondary: { label: "Tìm package phù hợp", href: "#package" },
    imageKey: "hero-hotel-wedding",
  },
  fitTable: {
    eyebrow: "Phù hợp với ai",
    title: "Hotel Wedding Decor phù hợp với ai?",
    columns: ["Nhu cầu của bạn", "Hotel Wedding Decor có phù hợp không?"],
    rows: [
      { left: "Tổ chức tại khách sạn, nhà hàng, ballroom", right: "Phù hợp" },
      { left: "Muốn không gian cưới sang trọng, trang trọng", right: "Phù hợp" },
      { left: "Cần decor đồng bộ từ sảnh đến sân khấu", right: "Phù hợp" },
      {
        left: "Muốn có concept rõ nhưng vẫn kiểm soát ngân sách",
        right: "Phù hợp",
      },
      { left: "Cần TIFF phối hợp với venue và vendor", right: "Phù hợp" },
      {
        left: "Tổ chức lễ gia tiên tại nhà",
        right: "Nên tham khảo Traditional Ceremony Decor",
      },
      {
        left: "Tổ chức ngoài trời, sân vườn, resort",
        right: "Nên tham khảo Outdoor Wedding Decor",
      },
    ],
  },
  comparisonTable: {
    eyebrow: "So sánh package",
    title: "So sánh các package Hotel Wedding",
    columns: [
      "Mức ngân sách tham khảo",
      "Phù hợp với",
      "Tinh thần thiết kế",
      "Mức độ đầu tư",
    ],
    rows: [
      {
        name: "Modern Wedding",
        cells: [
          "Dưới 120 triệu",
          "Cặp đôi muốn decor tinh tế, gọn gàng, kiểm soát ngân sách",
          "Hiện đại, tối giản, có điểm nhấn",
          "Tập trung một vài khu vực chính",
        ],
      },
      {
        name: "Trendy Wedding",
        cells: [
          "120–250 triệu",
          "Cặp đôi muốn concept rõ, nhiều khu vực đồng bộ hơn",
          "Nổi bật, có phong cách riêng",
          "Đầu tư sân khấu, photobooth, gallery, aisle tùy nhu cầu",
        ],
      },
      {
        name: "L'amour Wedding",
        cells: [
          "250–500 triệu",
          "Cặp đôi chú trọng cảm xúc, hình ảnh và trải nghiệm khách mời",
          "Sang trọng, lãng mạn, cá nhân hóa",
          "Đầu tư kỹ về concept, hoa, chất liệu, chi tiết",
        ],
      },
      {
        name: "Signature Luxury",
        cells: [
          "Trên 500 triệu",
          "Lễ cưới cao cấp, yêu cầu concept riêng và tiêu chuẩn thi công cao",
          "Độc quyền, cao cấp, thiết kế riêng",
          "Dự án decor quy mô lớn, nhiều điểm chạm trải nghiệm",
        ],
      },
    ],
  },
  matrixTable: {
    eyebrow: "Hạng mục theo package",
    title: "Bảng hạng mục theo từng package",
    note: "Lưu ý: Hạng mục thực tế sẽ được tinh chỉnh theo venue, ngân sách, quy mô khách và điều kiện thi công.",
    packageColumns: ["Modern", "Trendy", "L'amour", "Signature Luxury"],
    rows: [
      {
        category: "Sân khấu/backdrop chính",
        values: ["Có", "Có", "Thiết kế riêng hơn", "Quy mô lớn/thiết kế riêng"],
      },
      {
        category: "Photobooth",
        values: ["Có thể có", "Có", "Cao cấp hơn", "Photobooth/art installation"],
      },
      {
        category: "Welcome area",
        values: ["Cơ bản", "Có", "Đầu tư hơn", "Welcome experience"],
      },
      {
        category: "Gallery table/memory corner",
        values: [
          "Cơ bản",
          "Có",
          "Gallery/memory corner",
          "Story corner cá nhân hóa",
        ],
      },
      {
        category: "Aisle/lối đi cô dâu",
        values: ["Có thể có", "Có thể đầu tư", "Có", "Aisle/floral installation"],
      },
      {
        category: "Hoa trang trí",
        values: [
          "Chọn lọc",
          "Nhiều hơn Modern",
          "Đầu tư tại nhiều khu vực",
          "Cao cấp, đồng bộ toàn không gian",
        ],
      },
      {
        category: "Hoa bàn tiệc",
        values: [
          "Tùy nhu cầu",
          "Tùy nhu cầu",
          "Có thể có",
          "Tablescape/hoa bàn tiệc cao cấp",
        ],
      },
      {
        category: "Signage/bảng tên",
        values: [
          "Cơ bản",
          "Đồng bộ concept",
          "Custom signage",
          "Custom signage & stationery",
        ],
      },
      {
        category: "Chi tiết cá nhân hóa",
        values: ["Ít", "Có thể có", "Có", "Rõ nét, thiết kế riêng"],
      },
      {
        category: "Khảo sát venue",
        values: ["Khi cần", "Khi cần", "Nên có", "Chuyên sâu"],
      },
      {
        category: "Setup & giám sát",
        values: ["Có", "Có", "Có", "Có, kiểm soát tiêu chuẩn cao"],
      },
    ],
  },
  advisoryTable: {
    eyebrow: "TIFF tư vấn gì",
    title: "TIFF sẽ tư vấn gì cho Hotel Wedding?",
    columns: ["Nội dung tư vấn", "Giá trị mang lại"],
    rows: [
      {
        left: "Chọn khu vực nên đầu tư decor",
        right: "Tạo hiệu ứng tốt nhất mà không dàn trải ngân sách",
      },
      {
        left: "Chọn tone màu phù hợp ballroom",
        right: "Không gian hài hòa với ánh sáng và nội thất venue",
      },
      {
        left: "Phân bổ ngân sách theo hạng mục",
        right: "Dễ kiểm soát tổng chi phí",
      },
      {
        left: "Tư vấn mức độ hoa/chất liệu/kết cấu",
        right: "Đảm bảo đẹp nhưng vẫn khả thi khi thi công",
      },
      {
        left: "Làm việc với venue",
        right: "Nắm rõ timeline setup, quy định kỹ thuật, lối vận chuyển",
      },
      {
        left: "Giám sát hiện trường",
        right: "Hạn chế sai lệch giữa proposal và thực tế setup",
      },
    ],
  },
  ctaTable: {
    rows: [
      { label: "Modern Wedding", ctaText: "Nhận phương án dưới 120 triệu", href: "#tu-van" },
      { label: "Trendy Wedding", ctaText: "Nhận concept 120–250 triệu", href: "#tu-van" },
      {
        label: "L'amour Wedding",
        ctaText: "Đặt lịch tư vấn L'amour Wedding",
        href: "#tu-van",
      },
      {
        label: "Signature Luxury",
        ctaText: "Đặt lịch tư vấn chuyên sâu",
        href: "#tu-van",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "FAQ Hotel Wedding Decor",
    items: [
      {
        question: "Các mức ngân sách có cố định không?",
        answer:
          "Không. Đây là mức tham khảo, proposal thực tế phụ thuộc venue, hạng mục, hoa, chất liệu và điều kiện thi công.",
      },
      {
        question: "Nếu chưa biết chọn package nào thì sao?",
        answer:
          "TIFF sẽ tư vấn dựa trên ngày cưới, venue, số lượng khách, ngân sách và phong cách yêu thích.",
      },
      {
        question: "TIFF có phối hợp với khách sạn không?",
        answer:
          "Có. TIFF làm việc với venue về thời gian setup, quy định kỹ thuật, nguồn điện, ánh sáng và lối vận chuyển.",
      },
      {
        question: "Có thể tối ưu ngân sách không?",
        answer:
          "Có. TIFF ưu tiên giữ điểm nhấn chính và tinh giản khu vực phụ khi cần.",
      },
    ],
  },
  consultationForm: {
    eyebrow: "Nhận tư vấn",
    title: "Form tư vấn Hotel Wedding",
    fields: [
      { name: "ngayCuoi", label: "Ngày cưới", type: "date", required: true },
      {
        name: "venue",
        label: "Venue",
        placeholder: "Tên khách sạn/nhà hàng/ballroom",
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
        name: "nganSach",
        label: "Ngân sách decor",
        placeholder: "Khoảng ngân sách mong muốn",
        type: "text",
      },
      {
        name: "package",
        label: "Package quan tâm",
        type: "select",
        options: ["Modern", "Trendy", "L'amour", "Signature Luxury"],
        required: true,
      },
      {
        name: "phongCach",
        label: "Phong cách yêu thích",
        placeholder: "Sang trọng, hiện đại, lãng mạn, tối giản…",
        type: "text",
      },
      {
        name: "khuVuc",
        label: "Khu vực muốn decor",
        placeholder: "Sân khấu, photobooth, gallery, aisle, bàn tiệc…",
        type: "text",
      },
      {
        name: "inspiration",
        label: "Inspiration",
        placeholder: "Gửi hình ảnh nếu có",
        type: "textarea",
      },
    ],
    submitLabel: "Nhận tư vấn Hotel Wedding Decor",
    source: "hotel-wedding-decor",
  },
};
