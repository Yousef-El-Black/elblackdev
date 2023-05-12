// Next
import { useRouter } from "next/router";
import Head from "next/head";

// Icons
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const ThankYou = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thank You</title>
        <link rel="icon" href="/assets/logos/dark-logo.png" />
      </Head>
      <div className="min-h-screen w-full flex justify-center items-center relative">
        <h1 className="text-amber dark:text-blue">Thank You!</h1>
        <div
          className="absolute bottom-[50px] left-[50px] shadow py-3 px-4 flex justify-center items-center gap-2 rounded-lg cursor-pointer shadow-lightSlateGray dark:shadow-gainsboro hover:scale-105 duration-300"
          onClick={() => router.push("/")}
        >
          <ArrowLeftIcon />
          <span>Back</span>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
