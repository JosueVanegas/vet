import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col  w-full md:flex-row items-center justify-around">
        <div className=" flex flex-col items-center  text-center justify-center">
          <h1 className="text-5xl">bienvenidos</h1>
          <p className="w-[90%] text-lg">
            todo lo que tu mascota nececita y a tu bolcillo le encanta
          </p>
        </div>
        <div className="flex items-center justify-center py-2 z-20">
          <img src="/images/vet-dog.svg" alt="" />
        </div>
      </section>
      <section>acerca</section>
    </>
  );
}
