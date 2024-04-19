import db from "@/database/db";
import User from "@/types/User";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
export const GET = async () => {
  const js = process.env.JSONWEBTOKEN_SECRECT;
  return new Response(JSON.stringify(js), { status: 200 });
};
export const POST = async (request) => {
  try {
    const body: User = await request.json();
    const exist = await db.user.findUnique({
      where: { username: body.username },
    });
    if (exist) {
      const compare = await bcrypt.compare(body.password, exist.password);
      if (compare) {
        const token = JWT.sign(
          {
            id: exist.id,
            username: exist.username,
            admin: exist.admin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );
        return new Response(JSON.stringify({ message: "success" }), {
          status: 200,
          headers: {
            "Set-Cookie": `token=${token}; Path=/; Max-Age=${60 * 60 * 24 * 3}`,
          },
        });
      }
      return new Response(
        JSON.stringify({ message: "contraseña incorrecta" }),
        {
          status: 400,
        }
      );
    }
    return new Response(JSON.stringify({ message: "el usuario no existe" }), {
      status: 400,
    });
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
