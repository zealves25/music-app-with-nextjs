import { NextRequest, NextResponse } from "next/server";

const protectedPages = ["/", "/playlist", "library"];

export default function middleware(req: NextRequest) {
  if (protectedPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("TRAX_ACCESS_TOKEN");
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
