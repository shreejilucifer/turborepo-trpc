import type { NextPage } from "next";
import { trpc } from "../src/services";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello"]);

  return <div>{JSON.stringify(hello.data)}</div>;
};

export default Home;
