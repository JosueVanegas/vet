"use client";
import { logout } from "@/libs/Session";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  const handlerlogout = async () => {
    const value = await logout();
    if (value) {
      return router.push("/es/login");
    }
  };

  return (
    <section className="flex flex-col items-start justify-start p-20 mb-20">
      <h1 className="text-4xl">🔐Panel de administración</h1>
      <button
        className="text-white bg-red-600 px-5 py-2 my-5 hover:bg-red-500"
        onClick={handlerlogout}
      >
        cerrar sesion
      </button>

      <h2 className="pt-5 text-2xl">ℹ️Ayudas</h2>
      <InfoCard
        title="Consultas"
        information="esta áreas es donde llegan los mensajes que envian los clientes
            desde la pagina principal puedes marcar como visto o pendiente las
            consultas que llegan y filtrar y buscar una en especifico"
      ></InfoCard>
      <InfoCard
        title="Citas"
        information="área dedicada a registrar las citas se puede crear la información de las
        consultas para crear una cita o registrarla desde 0"
      ></InfoCard>
      <InfoCard
        title="Empleados"
        information="área destinada al registro de trabajadores del negocio o local con el fin de mantener el control de contacto por emergencias, tambien esto sirve para poder agregar a la persona que atendio una cita alli se listaran a todos lo medicos "
      ></InfoCard>
      <InfoCard
        title="Usuarios"
        information="en esta zona se agregan a las personas que tendran acceso al sistema administrativo se recomienda ser cuidadoso a quien se le dara acceso"
      ></InfoCard>
    </section>
  );
};

export const InfoCard = ({
  title,
  information,
}: {
  title: string;
  information: string;
}) => {
  return (
    <div className="mt-5 group overflow-hidden cursor-pointer">
      <h3 className="font-bold text-xl border-l-4 border-primary pl-2">
        {title}
      </h3>
      <p className="pl-5">{information}</p>
    </div>
  );
};

export default DashboardPage;
