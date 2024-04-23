import db from "@/database/db";

export const GET = async () => {
  try {
    const data = await db.user.findMany({
      select: {
        id: true,
        username: true,
        admin: true,
        createdAt: true,
      },
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "server error",
        description: error,
      }),
      {
        status: 500,
      }
    );
  }
};
