"use client";

import User from "@/types/User";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiRead, CiUnread } from "react-icons/ci";

const Login = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>();
  const onSubmit = async (body: User) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        return router.push("/admin");
      }
      setError(data.message || null);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <section className=" flex   justify-center  w-80 h-full min-h-[400px] ">
      <form className="p-10 " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="py-5 text-3xl">Login</h1>
        <div className="flex flex-col  justify-center">
          <label className="select-none" htmlFor="name">
            nombre de usuario:
          </label>
          <input
            {...register("username", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-primary p-2 "
            name="username"
            type="text"
            placeholder="ingresa tu nombre de usuario"
          />
        </div>
        {errors.username && (
          <p className="text-red-600 text-[12px]">{errors.username.message}</p>
        )}
        <div className="flex flex-col  justify-center">
          <label className="select-none" htmlFor="phone">
            contraseña:
          </label>
          <div className="flex items-center justify-between border-2 outline-primary border-primary">
            <input
              {...register("password", {
                required: {
                  message: "campo requerido",
                  value: true,
                },
              })}
              className=" p-2 outline-none "
              name="password"
              placeholder="ingresa tu contraseña"
              type={show ? "text" : "password"}
            />
            <div
              onClick={handleShow}
              className="flex items-center  justify-between  rounded-xl px-2"
            >
              {show ? (
                <CiUnread
                  title="ocultar"
                  className="text-3xl cursor-pointer text-primary"
                />
              ) : (
                <CiRead
                  title="ver"
                  className="text-3xl cursor-pointer text-primary"
                />
              )}
            </div>
          </div>
        </div>
        {errors.password && (
          <p className="text-red-600 text-[12px]">{errors.password.message}</p>
        )}
        <div className="h-2 flex items-start justify-start">
          <p className="text-red-500 text-sm ">{error}</p>
        </div>
        <input
          className="px-10 cursor-pointer py-2 my-5 w-full bg-primary"
          type="submit"
          value="enviar"
        />

        <div>
          <p className="text-[8px] mt-2 text-red-500">
            *nota: solo usuario registrados por el administrador tienen acceso a
            este sistema cerrado si no tienes una cuenta contactar con el dueño
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
