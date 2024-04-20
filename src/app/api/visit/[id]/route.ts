import db from "@/database/db";
import Visit from "@/types/Visit";
import { NextApiRequest } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, Params: Params) => {
  try {
    const { id } = Params.params;
    const data = await db.visit.findUnique({ where: { id: parseInt(id) } });
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
    const body: Visit = await request.json();
    const { id } = Params.params;
    const date = new Date(body.appointmentDate);
    const ap = await db.visit.update({
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
    const deleteOne = await db.visit.delete({ where: { id: parseInt(id) } });
    if (!deleteOne) throw new Error("no se puedo borrar la cita");
    return new Response(JSON.stringify({ message: "cita eliminado" }), {
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
