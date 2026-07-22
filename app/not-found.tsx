import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-4 py-32 text-center">
      <span className="gold-rule" />
      <p className="eyebrow">404</p>
      <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Không tìm thấy trang này
      </h1>
      <p className="text-muted-foreground">
        Trang bạn tìm có thể đã được đổi tên hoặc không còn tồn tại. Hãy quay
        lại trang chủ để khám phá các dịch vụ Wedding Decor của TIFF.
      </p>
      <Button asChild size="lg">
        <Link href="/">Về trang chủ</Link>
      </Button>
    </div>
  );
}
