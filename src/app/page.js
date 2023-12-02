import Counter from "@/components/Counter/Counter";
import Link from "next/link";


const HomePage = () => {
  // throw new Error();
  return (
    <div>
      <h1>This is next app Home page</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className="text-green-500 underline font-bold mt-5">Go to About page</button>
      </Link>
      <Link href="/news">
        <button className="text-green-500 ml-5 underline font-bold mt-5">Go to News page</button>
      </Link>
    </div>
  );
};

export default HomePage;