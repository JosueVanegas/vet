import db from "@/database/db";

export const GET = async () => {
  try {
    const pets = await db.user.findMany();

    return new Response(
      JSON.stringify({ message: "welcome to vet api", pets: pets }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
