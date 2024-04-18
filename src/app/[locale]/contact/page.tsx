import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="text-white bg-contact bg-no-repeat rounded-xl bg-fixed bg-center flex flex-col h-60 items-center justify-center w-full">
        <h1 className="text-center text-4xl">Contactanos</h1>
        <p className="text-center w-[90%]">
          llena el formulario a continuación puedes agendar tu cita
        </p>
      </div>
      <ContactForm></ContactForm>
    </section>
  );
};

export default ContactPage;
