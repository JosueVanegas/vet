import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

const ReturnButton = () => {
  return (
    <Link
      className="fixed bottom-10 right-10 flex items-center justify-center text-white text-xl bg-primary rounded-full w-20 h-20  z-30 border-4 border-white transition-colors  hover:text-primary hover:border-primary hover:bg-white"
      href="/es"
    >
      <AiFillHome className="text-4xl text-center" />
    </Link>
  );
};

export default ReturnButton;
