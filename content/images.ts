import type { ImageEntry } from "@/content/types";

/**
 * Central image manifest. Every image the site renders is looked up here by
 * semantic key. While the client hasn't supplied real photography yet, every
 * entry stays `placeholder: true` and `PlaceholderImage` renders a labeled
 * block instead of a broken <img>.
 *
 * To swap in a real photo later: drop the file into /public/images/ and flip
 * the entry to `{ placeholder: false, src: "/images/...", alt: "...", aspect }`
 * — no component changes needed.
 */
export const images: Record<string, ImageEntry> = {
  "hero-overview": {
    placeholder: true,
    label: "Ảnh hero — cô dâu chú rể tại không gian tiệc cưới TIFF",
    aspect: "portrait",
  },
  "hero-overview-secondary": {
    placeholder: true,
    label: "Ảnh phụ — chi tiết hoa cưới",
    aspect: "square",
  },
  "hero-hotel-wedding": {
    placeholder: true,
    label: "Ảnh hero — sân khấu tiệc cưới khách sạn, ballroom sang trọng",
    aspect: "portrait",
  },
  "hero-hotel-wedding-secondary": {
    placeholder: true,
    label: "Ảnh phụ — bàn tiệc trang trí trong ballroom",
    aspect: "square",
  },
  "hero-outdoor-wedding": {
    placeholder: true,
    label: "Ảnh hero — lễ cưới ngoài trời, sân vườn, ánh sáng tự nhiên",
    aspect: "portrait",
  },
  "hero-outdoor-wedding-secondary": {
    placeholder: true,
    label: "Ảnh phụ — lối đi hoa ngoài trời",
    aspect: "square",
  },
  "hero-traditional-ceremony": {
    placeholder: true,
    label: "Ảnh hero — lễ gia tiên tại tư gia, backdrop truyền thống",
    aspect: "portrait",
  },
  "hero-traditional-ceremony-secondary": {
    placeholder: true,
    label: "Ảnh phụ — mâm quả và tráp lễ",
    aspect: "square",
  },
  "overview-feature-support": {
    placeholder: true,
    label: "Ảnh — đội ngũ TIFF tư vấn cùng cặp đôi",
    aspect: "portrait",
  },
  "overview-feature-why-choose": {
    placeholder: true,
    label: "Ảnh — khoảnh khắc cô dâu chú rể trong ngày cưới",
    aspect: "portrait",
  },
  "overview-feature-why-choose-secondary": {
    placeholder: true,
    label: "Ảnh phụ — chi tiết trang trí bàn tiệc",
    aspect: "square",
  },
  "gallery-1": {
    placeholder: true,
    label: "Không gian tiệc cưới do TIFF thực hiện",
    aspect: "square",
  },
  "gallery-2": {
    placeholder: true,
    label: "Lối đi hoa cưới do TIFF thiết kế",
    aspect: "square",
  },
  "gallery-3": {
    placeholder: true,
    label: "Chi tiết hoa cưới do TIFF thực hiện",
    aspect: "square",
  },
  "hotel-modern": {
    placeholder: true,
    label: "Modern Wedding — sân khấu tối giản, có điểm nhấn",
    aspect: "square",
  },
  "hotel-trendy": {
    placeholder: true,
    label: "Trendy Wedding — không gian nổi bật, phong cách riêng",
    aspect: "square",
  },
  "hotel-lamour": {
    placeholder: true,
    label: "L'amour Wedding — sang trọng, lãng mạn, cá nhân hóa",
    aspect: "square",
  },
  "hotel-signature": {
    placeholder: true,
    label: "Signature Luxury — độc quyền, thiết kế riêng",
    aspect: "square",
  },
  "outdoor-elegant": {
    placeholder: true,
    label: "Elegant Wedding — thanh lịch, hài hòa cảnh quan",
    aspect: "square",
  },
  "outdoor-inspiration": {
    placeholder: true,
    label: "Inspiration Wedding — concept cá nhân hóa theo câu chuyện riêng",
    aspect: "square",
  },
  "traditional-sweet-home": {
    placeholder: true,
    label: "Sweet Home — trẻ trung, tươi sáng, ngọt ngào",
    aspect: "square",
  },
  "traditional-bliss-home": {
    placeholder: true,
    label: "Bliss Home — trang nhã, ấm cúng, tinh tế",
    aspect: "square",
  },
};
