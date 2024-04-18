"use client";

import { ChangeEvent, useEffect, useState } from "react";

const AppointmentPage = () => {
  const [data, setData] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<Appointment[]>([]);
  const [filterType, setFilterType] = useState("name");
  const fetchData = async () => {
    try {
      const res = await fetch("/api/appointment", {
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

  const filterBy = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(filterType);
    let filterData = [];
    switch (filterType) {
      case "name":
        filterData = data.filter((item) => item.name.includes(e.target.value));
        break;
      case "date":
        filterData = data.filter(
          (item) => item.createdAt.toString() === e.target.value
        );
        break;
      case "phone":
        filterData = data.filter((item) => item.phone.includes(e.target.value));
        break;
      case "email":
        filterData = data.filter((item) => item.email.includes(e.target.value));
        break;
      case "reason":
        const words = e.target.value.toLocaleLowerCase().split(" ");
        filterData = data.filter((item) =>
          words.every((word) => item.reason.toLocaleLowerCase().includes(word))
        );
        break;
    }
    setFilter(filterData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="flex flex-col justify-center items-center my-20">
      <div>
        <h1 className="text-2xl">consultas desde la web</h1>
      </div>
      <div className="flex justify-center items-center gap-10">
        <select
          name="filterType"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setFilterType(e.target.value);
          }}
          defaultValue="name"
        >
          <option value="name">nombre</option>
          <option value="date">fecha</option>
          <option value="phone">mobil</option>
          <option value="email">correo</option>
          <option value="reason">consulta</option>
        </select>
        <input
          className="px-2 py-2 outline-none border rounded-xl border-primary"
          type="search"
          name="search"
          onChange={filterBy}
          placeholder="buscar"
        />
      </div>
      <div className="flex justify-center flex-wrap gap-5 my-5 p-5 w-full">
        {filter &&
          Array.isArray(filter) &&
          filter.map((item, index) => (
            <div
              className="flex flex-col items-start relative bg-primary   shadow-2xl rounded-xl   w-60 h-[300px]"
              key={index}
            >
              <div className="mt-10 px-2 text-white">
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-sm">{item.phone}</p>
                <p className="text-sm">{item.email}</p>
                <h3 className="pt-2 font-bold">Consulta: </h3>
                <p className="py-5 h-32 overflow-auto"> {item.reason}</p>
              </div>
              <span className="absolute top-2 right-2 px-5 bg-white rounded-xl ">
                {new Date(item.createdAt).toLocaleDateString() +
                  " | " +
                  new Date(item.createdAt).toLocaleTimeString()}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AppointmentPage;
