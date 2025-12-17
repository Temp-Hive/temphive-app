import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // simple query that doesn't require any tables beyond what you created
    const userCount = await prisma.user.count();

    return NextResponse.json({
      ok: true,
      db: "connected",
      userCount,
      timestamp: new Date().toISOString(),
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        ok: false,
        db: "error",
        error: e?.message ?? "unknown error",
      },
      { status: 500 }
    );
  }
}
