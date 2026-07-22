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
    aspect: "wide",
  },
  "hero-hotel-wedding": {
    placeholder: true,
    label: "Ảnh hero — sân khấu tiệc cưới khách sạn, ballroom sang trọng",
    aspect: "wide",
  },
  "hero-outdoor-wedding": {
    placeholder: true,
    label: "Ảnh hero — lễ cưới ngoài trời, sân vườn, ánh sáng tự nhiên",
    aspect: "wide",
  },
  "hero-traditional-ceremony": {
    placeholder: true,
    label: "Ảnh hero — lễ gia tiên tại tư gia, backdrop truyền thống",
    aspect: "wide",
  },
};
