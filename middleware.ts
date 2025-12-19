import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const lower = pathname.toLowerCase();
  if (
    lower.startsWith("/solutions/imar-") &&
    lower.includes("yonet") &&
    lower.includes("bim") &&
    lower.includes("eklentisi")
  ) {
    const url = new URL("/solutions/imar-yonetmeligi-bim-eklentisi", req.url);
    return NextResponse.rewrite(url);
  }
  const res = NextResponse.next();
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  const isDev = process.env.NODE_ENV !== "production";
  const scriptSrc = ["script-src 'self' 'unsafe-inline'", isDev ? "'unsafe-eval'" : null]
    .filter(Boolean)
    .join(" ");
  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "media-src 'self' https:",
      "frame-src https:",
      "connect-src 'self' https:",
    ].join("; ")
  );
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
