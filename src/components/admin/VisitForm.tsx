"use client";

import Visit from "@/types/Visit";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UseFormRegister, useForm } from "react-hook-form";

const VisitForm = ({ id }: { id?: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Visit>();
  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await fetch(`/api/visit/${parseInt(id)}`);
          const data: Visit = await res.json();
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  useEffect(() => {
    const getData = async () => {
      await fetch("/api/employee")
        .then((res) => res.json())
        .then((data) => setEmployees(data))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);
  const onSubmit = async (body: Visit) => {
    try {
      console.log(body);
      /*const method = id ? "PATCH" : "POST";
      const api = id ? `/api/visit/${id}` : "/api/visit";
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
        return router.push("/admin/visit");
      }*/
    } catch (error) {
      console.log(error);
    }
    /*
    id?: number;
    reason: string;
    observations?: string;
    status: Boolean;
    color: string;
    clientDni?: string;
    clientName: string;
    clientPhone: string;
    clientAddress?: string;
    petName: string;
    petSpecies: string;
    petBreed?: string;
    appointmentDate?: Date;
    attendedBy: number;
    user?: User;
    createdAt?: Date;*/
  };
  return (
    <section className=" flex   justify-center  w-full7 h-full min-h-[400px] ">
      <form className="p-10  " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="py-5 text-3xl">Registro de cita</h1>
        <div className="mt-5 mb-2 text-xl border-l-4 border-primary pl-2">
          <h2>información general</h2>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <div className="w-full">
            <label htmlFor="attendedBy">*Atendido por:</label>
            <select
              {...register("attendedBy", {
                required: {
                  message: "campo obligatorio",
                  value: true,
                },
              })}
              name="attendedBy"
              className="w-full py-2 pl-2 border-primary border-2"
              id=""
            >
              {employees &&
                Array.isArray(employees) &&
                employees.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name + " | " + item.dni}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="appointmentDate">Agendada para: </label>
            <input
              className="py-2 border-2 pr-20 pl-2 border-primary "
              {...register("appointmentDate", {
                required: {
                  message: "campo obligatorio",
                  value: false,
                },
              })}
              type="datetime-local"
              name="appointmentDate"
              id=""
            />
          </div>
          <InputForm
            type="text"
            registerName="reason"
            register={register}
            errors={errors.reason?.message}
            required={true}
            name="motivo de la cita"
          ></InputForm>
          <InputForm
            type="text"
            registerName="observations"
            register={register}
            errors={errors.observations?.message}
            required={false}
            name="observaciones"
          ></InputForm>
          <ColorInput
            type="color"
            registerName="color"
            register={register}
            errors={errors.color?.message}
            required={true}
            name="color"
          ></ColorInput>
        </div>
        <div className="mt-5 mb-2 text-xl border-l-4 border-primary pl-2">
          <h2>información del cliente</h2>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <InputForm
            type="text"
            registerName="clientDni"
            register={register}
            errors={errors.clientDni?.message}
            required={true}
            name="cedula del cliente"
          ></InputForm>
          <InputForm
            type="text"
            registerName="clientName"
            register={register}
            errors={errors.clientName?.message}
            required={true}
            name="nombre del cliente"
          ></InputForm>
          <InputForm
            type="text"
            name="teléfono del cliente"
            register={register}
            errors={errors.clientPhone?.message}
            required={true}
            registerName="clientPhone"
          ></InputForm>
          <InputForm
            type="text"
            name="dirección del cliente"
            register={register}
            errors={errors.clientAddress?.message}
            required={false}
            registerName="clientAddress"
          ></InputForm>
        </div>
        <div className="mt-5 mb-2 text-xl border-l-4 border-primary pl-2">
          <h2>información de la mascota</h2>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <InputForm
            type="text"
            name="nombre de la mascota"
            register={register}
            errors={errors.petName?.message}
            required={true}
            registerName="petName"
          ></InputForm>
          <InputForm
            type="text"
            name="especie de la mascota"
            register={register}
            errors={errors.petSpecies?.message}
            required={true}
            registerName="petSpecies"
          ></InputForm>
          <InputForm
            type="text"
            name="raza de la mascota"
            register={register}
            errors={errors.petBreed?.message}
            required={false}
            registerName="petBreed"
          ></InputForm>
        </div>
        <div className="w-40">
          <p className="text-sm text-red-600 h-10">{error}</p>
        </div>
        <input
          className="px-10 w-40 cursor-pointer py-2 my-5  text-white bg-primary"
          type="submit"
          value="registrar"
        />
      </form>
    </section>
  );
};
export const InputForm = ({
  register,
  name,
  registerName,
  required,
  type,
  errors,
}: {
  errors: any;
  type: string;
  required: boolean;
  register: any;
  name: string;
  registerName: string;
}) => {
  return (
    <div className="flex flex-col  justify-center">
      <label className="select-none" htmlFor="dni">
        {required ? "*" : null} {name}
      </label>
      <input
        {...register(registerName, {
          required: {
            message: "campo requerido",
            value: required,
          },
        })}
        className="border-2 outline-primary border-primary p-2 "
        name={registerName}
        type={type}
        placeholder={name}
      />
      <p className="text-red-600 text-[12px] h-5">{errors}</p>
    </div>
  );
};
export const ColorInput = ({
  register,
  name,
  registerName,
  required,
  errors,
}: {
  errors: any;
  type: string;
  required: boolean;
  register: any;
  name: string;
  registerName: string;
}) => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <label className="select-none text-gray-700" htmlFor="dni">
        {required ? "*" : null} {name}
      </label>
      <input
        {...register(registerName, {
          required: {
            message: "campo requerido",
            value: required,
          },
        })}
        className=" h-12 outline-none border-primary w-52 rounded"
        name={registerName}
        type="color"
      />
      <p className="text-red-600 text-[12px] h-5">{errors}</p>
    </div>
  );
};

export default VisitForm;
