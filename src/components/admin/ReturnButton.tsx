import Link from "next/link";

const ReturnButton = () => {
  return (
    <Link
      className="fixed bottom-10 left-10 flex items-center justify-center text-white text-xl bg-primary rounded-full w-20 h-20 border z-30 border-white transition-colors border-4 hover:text-primary hover:bg-white"
      href="/es"
    >
      volver
    </Link>
  );
};

export default ReturnButton;
