"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Appointment>();
  const onSubmit = async (body: Appointment) => {
    console.log(body);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        return router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className=" flex   justify-center  w-full h-full min-h-[400px] ">
      <form className=" p-10  " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="py-5 text-3xl">Formulario</h1>
        <div className="flex flex-col  justify-center">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register("name", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-secundary p-2 "
            name="name"
            type="text"
          />
        </div>
        {errors.name && (
          <p className="text-red-600 text-[12px]">{errors.name.message}</p>
        )}
        <div className="flex flex-col  justify-center">
          <label htmlFor="phone">Telefono:</label>
          <input
            {...register("phone", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-secundary p-2 "
            name="phone"
            type="tel"
          />
        </div>
        {errors.phone && (
          <p className="text-red-600 text-[12px]">{errors.phone.message}</p>
        )}
        <div className="flex flex-col  justify-center">
          <label htmlFor="email">email:</label>
          <input
            {...register("email", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-secundary p-2 "
            name="email"
            type="email"
          />
        </div>
        {errors.email && (
          <p className="text-red-600 text-[12px]">{errors.email.message}</p>
        )}
        <div className="flex flex-col  justify-center">
          <label htmlFor="reason">asunto:</label>
          <textarea
            {...register("reason", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-secundary resize-y p-2 max-h-40 min-h-32"
            name="reason"
          ></textarea>
          {errors.reason && (
            <p className="text-red-600 text-[12px]">{errors.reason.message}</p>
          )}
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
