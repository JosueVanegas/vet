import db from "@/database/db";
import Visit from "@/types/Visit";

export const GET = async () => {
  try {
    const data = await db.visit.findMany({
      select: {
        id: true,
        employee: true,
        attendedBy: true,
        appointmentDate: true,
        reason: true,
        observations: true,
        color: true,
        clientDni: true,
        clientName: true,
        clientPhone: true,
        clientAddress: true,
        petName: true,
        petSpecies: true,
        petBreed: true,
        createdAt: true,
        status: true,
      },
      orderBy: [
        {
          appointmentDate: "asc",
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
    const body: Visit = await request.json();
    if (!body)
      return new Response(JSON.stringify({ message: "bad request" }), {
        status: 400,
      });
    const date = new Date(body.appointmentDate);
    const newvisit = await db.visit.create({
      data: {
        attendedBy: parseInt(body.attendedBy),
        appointmentDate: date,
        reason: body.reason,
        observations: body.observations,
        color: body.color,
        clientDni: body.clientDni,
        clientName: body.clientName,
        clientPhone: body.clientPhone,
        clientAddress: body.clientAddress || "",
        petName: body.petName,
        petSpecies: body.petSpecies,
        petBreed: body.petBreed || "",
        status: false,
      },
    });
    if (!newvisit)
      return new Response(JSON.stringify({ message: "registro fallido" }), {
        status: 400,
      });
    return new Response(
      JSON.stringify({
        message: "nueva cita registrada",
      }),
      { status: 201 }
    );
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
export const PATCH = async (request) => {
  try {
    const body: Visit = await request.json();
    const ap = await db.visit.update({
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
