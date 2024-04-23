"use client";
import { AiFillCrown } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import Link from "next/link";
import { useEffect, useState } from "react";
const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/employee");
      setData(await res.json());
    };
    getData();
  }, [update]);
  useEffect(() => {
    if (data) {
      setFilter(data);
    }
  }, [data]);
  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/employee/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      setUpdate((prev) => !prev);
    }
  };

  const filterByName = (name: string) => {
    const filterData = data.filter((i: Employee) =>
      i.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilter(filterData);
  };
  return (
    <div className="w-full px-2">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center mb-6 w-full">
        <h1 className="text-3xl font-bold">
          Empleados
          <span className="text-sm">{`(Cant: ${filter.length || 0})`}</span>
        </h1>
        <input
          type="search"
          className="outline-blue-600  w-60 p-2 bg-transparent border border-gray-300"
          placeholder="buscar"
          name="search"
          onChange={(e) => {
            filterByName(e.target.value);
          }}
        />
        <Link
          href="/admin/employee/new"
          className="bg-primary hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
        >
          registrar nuevo empleado
        </Link>
      </div>
      {filter.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table-auto  w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 w-10 py-2">No.</th>
                <th className="border border-gray-300 px-4 py-2">usuario</th>
                <th className="border border-gray-300 w-20 px-2 py-2">
                  acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filter.map((item: Employee, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 w-10 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="flex items-center justify-center border  border-gray-300 px-4 py-2">
                    <button
                      onClick={() => {
                        if (window.confirm("¿are you sure?")) {
                          handleDelete(item.id);
                        }
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <RiDeleteBin7Line className="text-2xl" />
                    </button>
                    <Link
                      href={`/admin/employee/${item.id}`}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <RiEditBoxLine className="text-2xl" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No Data Found!</p>
      )}
    </div>
  );
};

export default EmployeeTable;
