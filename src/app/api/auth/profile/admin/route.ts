import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";

//validaremos si es admin desde el backend asi es mas seguro
export const GET = async () => {
  try {
    const token = cookies().get("token") || null;
    const verify: any = JWT.verify(token.value, process.env.JWT_SECRET);
    if (token && verify) {
      if (verify.admin) {
        return new Response(JSON.stringify({ message: "success" }), {
          status: 200,
        });
      }
      return new Response(JSON.stringify({ message: "no admin" }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ message: "access  denied" }), {
      status: 401,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "server error", description: error }),
      { status: 500 }
    );
  }
};
