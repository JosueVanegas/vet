import db from "@/database/db";
import { NextApiRequest } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, Params: Params) => {
  try {
    const { id } = Params.params;
    const data = await db.employee.findUnique({ where: { id: parseInt(id) } });
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
export const PATCH = async (request: Request, Params: Params) => {
  try {
    const body: Employee = await request.json();
    const { id } = Params.params;
    const ap = await db.employee.update({
      data: body,
      where: {
        id: parseInt(id),
      },
    });
    return new Response(
      JSON.stringify({
        message: "data update",
      })
    );
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

export const DELETE = async (request: Request, Params: Params) => {
  try {
    const { id } = await Params.params;
    if (!id) throw new Error("bad request");
    const deleteOne = await db.employee.delete({ where: { id: parseInt(id) } });
    if (!deleteOne) throw new Error("no se puedo borrar el empleado");
    return new Response(JSON.stringify({ message: "empleado eliminado" }), {
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
