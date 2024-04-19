import db from "@/database/db";
import { NextApiRequest } from "next";

export const GET = async () => {
  try {
    const data = await db.employee.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
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

export const POST = async (request) => {
  try {
    const body: Employee = await request.json();
    if (!body)
      return new Response(JSON.stringify({ message: "bad request" }), {
        status: 400,
      });
    const exists = await db.employee.findUnique({
      where: {
        dni: body.dni,
      },
    });
    if (exists)
      return new Response(
        JSON.stringify({ message: "cedula de identida ya registrada" })
      );
    const newemployee = await db.employee.create({
      data: {
        name: body.name,
        email: body.email,
        dni: body.dni,
        phone: body.phone,
      },
    });
    if (!newemployee)
      return new Response(JSON.stringify({ message: "creation failed" }), {
        status: 400,
      });

    return new Response(
      JSON.stringify({
        message: "data submit",
      }),
      { status: 201 }
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
