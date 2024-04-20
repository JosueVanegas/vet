"use client";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { ChangeEvent, useEffect, useState } from "react";
import Visit from "@/types/Visit";
import Link from "next/link";

const VisitDashboard = () => {
  const [data, setData] = useState<Visit[]>([]);
  const [filter, setFilter] = useState<Visit[]>([]);
  const [filterType, setFilterType] = useState("name");
  const [reload, setReload] = useState(false);
  const fetchData = async () => {
    try {
      const res = await fetch("/api/visit", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);
      setFilter(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = async (id: string | number, status: Boolean) => {
    const res = await fetch("/api/visit", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });
    setReload((prev) => !prev);
  };
  const filterBy = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLocaleLowerCase().trim();
    let filterData = [];
    switch (filterType) {
      case "client":
        filterData = data.filter((item) =>
          item.clientName.toLocaleLowerCase().trim().includes(value)
        );
        break;
      case "pet":
        filterData = data.filter((item) =>
          item.petName.toLocaleLowerCase().trim().includes(value)
        );
        break;
      case "employee":
        filterData = data.filter((item) =>
          item.employee.name.toLocaleLowerCase().trim().includes(value)
        );
        break;
    }
    setFilter(filterData);
  };
  useEffect(() => {
    fetchData();
  }, [reload]);
  return (
    <section className="flex flex-col justify-center items-center my-20">
      <div>
        <h1 className="mb-5 text-4xl text-secundary">Citas</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-1">
        <select
          className="border border-primary rounded py-2 px-2 text-secundary text-lg"
          name="filterType"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setFilterType(e.target.value);
          }}
          defaultValue="name"
        >
          <option value="client">cliente</option>
          <option value="pet">mascota</option>
          <option value="employee">empleado</option>
        </select>
        <input
          className="px-2 py-2 outline-none  border  rounded border-primary"
          type="search"
          name="search"
          onChange={filterBy}
          placeholder="buscar"
        />
        <Link
          href="/admin/visit/new"
          className="bg-primary hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
        >
          agregar nueva cita
        </Link>
      </div>
      <div className="flex justify-center flex-wrap gap-5 my-5 p-5 w-full">
        {filter &&
          Array.isArray(filter) &&
          filter.map((item, index) => (
            <div
              className={`flex ${
                item.status && " bg-gray-400"
              } flex-col items-start w-full md:w-96 relative  border shadow-2xl    rounded   h-[450px]`}
              key={index}
              style={{ border: `solid 5px ${item.color}` }}
            >
              <div className="mt-10 px-2 ">
                <div className="border-l-4 pl-2 border-gray-400 text-md">
                  <h2 className="text-xl">datos del cliente:</h2>
                  <h2>cedula: {item.clientDni}</h2>
                  <h2>nombre: {item.clientName}</h2>
                  <h2>teléfono: {item.clientPhone}</h2>
                  {item.clientAddress && (
                    <h2>dirección: {item.clientAddress}</h2>
                  )}
                </div>
                <div className="border-l-4 pl-2 mt-5 border-gray-400 text-md">
                  <h2 className="text-xl">datos del mascota:</h2>
                  <h2>nombre: {item.petName}</h2>
                  <h2>especie: {item.petSpecies}</h2>
                  {item.petBreed && <h2>raza: {item.petBreed}</h2>}
                </div>
                <div className="border-l-4 pl-2 mt-5 border-gray-400 text-md">
                  <p className="py-5 h-32 overflow-auto">
                    <h2>
                      Atendido por: <strong>{item.employee.name}</strong>
                    </h2>
                    <p> motivo: {item.reason}</p>
                    <p>observaciones: {item.observations}</p>
                  </p>
                </div>
              </div>
              <span className="absolute top-2 right-2 px-5 bg-gray-300 rounded-xl ">
                registrada el{" "}
                {new Date(item.createdAt).toLocaleDateString() +
                  " | " +
                  new Date(item.createdAt).toLocaleTimeString()}
              </span>
              <div
                onClick={() => {
                  handleChange(item.id, item.status);
                }}
                className="absolute  bottom-2 right-2 flex gap-5  text-xl text-center cursor-pointer  "
              >
                {item.status ? (
                  <div className="flex items-center justify-between w-40 py-1 bg-primary text-white rounded-xl px-2">
                    finalizada
                    <AiFillCheckCircle className="text-3xl" />
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-40 py-1 bg-red-600 text-white rounded-xl px-2">
                    pendiente
                    <AiFillClockCircle className="text-2xl" />
                  </div>
                )}

                <Link
                  className="px-10 py-1 bg-yellow-500 text-white rounded-xl"
                  href={`/admin/visit/${item.id}`}
                >
                  editar
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default VisitDashboard;
