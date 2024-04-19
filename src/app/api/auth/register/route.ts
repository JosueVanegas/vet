import db from "@/database/db";
import User from "@/types/User";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
export const POST = async (request) => {
  try {
    const body: User = await request.json();
    if (!body)
      return new Response(JSON.stringify({ message: "bad request" }), {
        status: 400,
      });
    const hashPassword = await bcrypt.hash(body.password, 5);
    const data = {
      username: body.username,
      password: hashPassword,

      admin: false,
    };
    const newOne = await db.user.create({
      data,
    });
    if (!newOne)
      return new Response(
        JSON.stringify({ message: "server can not create the new user" }),
        { status: 400 }
      );
    return new Response(JSON.stringify({ message: "registed" }), {
      status: 201,
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
