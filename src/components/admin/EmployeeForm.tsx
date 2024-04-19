"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EmployeeForm = ({ id }: { id?: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Employee>();
  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await fetch(`/api/employee/${parseInt(id)}`);
          const data: Employee = await res.json();
          setValue("dni", data.dni);
          setValue("email", data.email);
          setValue("name", data.name);
          setValue("phone", data.phone);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  const onSubmit = async (body: Employee) => {
    try {
      const method = id ? "PATCH" : "POST";
      const api = id ? `/api/employee/${id}` : "/api/employee";
      const res = await fetch(api, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setError(data.message);
      if (res.status === 201 || res.status === 200) {
        return router.push("/admin/employee");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className=" flex   justify-center  w-80 h-full min-h-[400px] ">
      <form className="p-10 " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="py-5 text-3xl">Empleado</h1>
        <div className="flex flex-col  justify-center">
          <label className="select-none" htmlFor="dni">
            cedula
          </label>
          <input
            {...register("dni", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-primary p-2 "
            name="dni"
            type="text"
            placeholder="ingrese el cedula"
          />
        </div>
        {errors.dni && (
          <p className="text-red-600 text-[12px]">{errors.dni.message}</p>
        )}
        <div className="flex flex-col  justify-center">
          <label className="select-none" htmlFor="name">
            nombre completo
          </label>
          <input
            {...register("name", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-primary p-2 "
            name="name"
            type="text"
            placeholder="ingrese el nombre"
          />
        </div>
        {errors.name && (
          <p className="text-red-600 text-[12px]">{errors.name.message}</p>
        )}

        <div className="flex flex-col  justify-center">
          <label className="select-none" htmlFor="email">
            email
          </label>
          <div className="flex items-center justify-between border-2 outline-primary border-primary">
            <input
              {...register("email", {
                required: {
                  message: "campo requerido",
                  value: true,
                },
              })}
              className=" p-2 outline-none "
              name="email"
              placeholder="ingrese el email"
              type="email"
            />
          </div>
        </div>
        {errors.email && (
          <p className="text-red-600 text-[12px]">{errors.email.message}</p>
        )}
        <div className="flex flex-col  justify-center">
          <label className="select-none" htmlFor="phone">
            teléfono
          </label>
          <input
            {...register("phone", {
              required: {
                message: "campo requerido",
                value: true,
              },
            })}
            className="border-2 outline-primary border-primary p-2 "
            name="phone"
            type="tel"
            placeholder="ingrese el teléfono"
          />
        </div>
        {errors.phone && (
          <p className="text-red-600 text-[12px]">{errors.phone.message}</p>
        )}
        <div className="w-40">
          <p className="text-sm text-red-600 h-10">{error}</p>
        </div>
        <input
          className="px-10 cursor-pointer py-2 my-5 w-full text-white bg-primary"
          type="submit"
          value="registrar"
        />
      </form>
    </section>
  );
};

export default EmployeeForm;
