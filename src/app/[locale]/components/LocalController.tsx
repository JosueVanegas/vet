"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const LocalController = () => {
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    router.replace(`/${newLang}`);
  };

  return (
    <div className="flex items-center justify-around  gap-10 bg-white border  relative">
      <img
        className="w-5 h-5 fill-primary text-primary absolute left-4 top-1/2 transform -translate-y-1/2"
        src="/icons/locale.svg"
        alt="World icon"
      />
      <select
        className="appearance-none w-20 text-primary outline-none bg-transparent pl-10 pr-2 py-1 rounded border border-primary hover:border-secondary transition-colors duration-200"
        defaultValue="es"
        name="local"
        onChange={handleChange}
      >
        <option
          className="appearance-none border-none cursor-pointer"
          value="es"
        >
          ES
        </option>
        <option className="appearance-none border-none" value="en">
          EN
        </option>
      </select>
    </div>
  );
};

export default LocalController;
