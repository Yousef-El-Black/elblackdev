// Next
import { useRouter } from "next/router";

// components
import Header from "@/components/Header";

// Icons
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-cultured dark:bg-eerieBlack min-h-screen">
      <Header />
      <div className="container mx-auto flex justify-center items-center h-calc-75 lg:h-calc-100">
        <h1>404 | Not Found</h1>
        <div
          className="absolute bottom-[50px] left-[50px] shadow py-3 px-4 flex justify-center items-center gap-2 rounded-lg cursor-pointer shadow-lightSlateGray dark:shadow-gainsboro hover:scale-105 duration-300"
          onClick={() => router.push("/")}
        >
          <ArrowLeftIcon />
          <span>Back</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
