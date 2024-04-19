import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
export const GET = async () => {
  try {
    const token = cookies().get("token") || null;
    const verify = JWT.verify(token.value, process.env.JWT_SECRET);
    if (token && verify) {
      return new Response(JSON.stringify({ message: "success" }), {
        status: 200,
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
export const DELETE = async () => {
  try {
    cookies().delete("token");
    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "server error", description: error }),
      { status: 500 }
    );
  }
};
