export const GET = async () => {
  try {
    return new Response(JSON.stringify({ message: "welcome to vet api" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
