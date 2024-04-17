"use client";

const ContactForm = () => {
  return (
    <section className=" flex   justify-center  w-full h-full min-h-[400px] ">
      <form className=" p-10  " action="">
        <h1 className="py-5 text-3xl">Formulario</h1>
        <div className="flex flex-col  justify-center">
          <label htmlFor="name">Nombre:</label>
          <input
            className="border-2 outline-primary border-secundary"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col  justify-center">
          <label htmlFor="phone">Telefono:</label>
          <input
            className="border-2 outline-primary border-secundary"
            name="phone"
            type="text"
          />
        </div>
        <div className="flex flex-col  justify-center">
          <label htmlFor="email">email:</label>
          <input
            className="border-2 outline-primary border-secundary"
            name="email"
            type="text"
          />
        </div>

        <input
          className="px-10 cursor-pointer py-2 my-5 w-full bg-primary"
          type="submit"
          value="enviar"
        />
      </form>
    </section>
  );
};

export default ContactForm;
