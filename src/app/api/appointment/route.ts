import db from "@/database/db";
import { NextApiRequest } from "next";

export const GET = async () => {
  try {
    const data = await db.appointment.findMany({
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
    const body: Appointment = await request.json();
    if (!body)
      return new Response(JSON.stringify({ message: "bad request" }), {
        status: 400,
      });
    const newAppointment = await db.appointment.create({
      data: {
        name: body.name,
        reason: body.reason,
        email: body.email,
        phone: body.phone,
      },
    });
    if (!newAppointment)
      return new Response(JSON.stringify({ message: "creation failed" }), {
        status: 400,
      });

    return new Response(
      JSON.stringify({
        message: "data submit",
      }),
      { status: 200 }
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
export const PATCH = async (request) => {
  try {
    const body: Appointment = await request.json();
    const ap = await db.appointment.update({
      data: {
        status: !body.status,
      },
      where: {
        id: body.id,
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
