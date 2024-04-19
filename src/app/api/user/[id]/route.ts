import db from "@/database/db";
import { NextApiRequest } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, params: Params) => {
  try {
    const pa = params;
    console.log("hola", pa);
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
export const PATCH = async (request: Request, params: Params) => {
  try {
    const pa = params;
    console.log("hola", pa);
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
export const DELETE = async (request: Request, params: Params) => {
  try {
    const { id } = await params.params;
    if (!id) throw new Error("bad request");
    const deleteOne = await db.user.delete({ where: { id: parseInt(id) } });
    if (!deleteOne) throw new Error("no se puedo borrar el usuario");
    return new Response(JSON.stringify({ message: "usuario eliminado" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
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
