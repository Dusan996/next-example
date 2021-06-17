import { useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import Header from "../components/Header";

export default function Home(props) {
  useEffect(() => {
    const isSessionEmpty = sessionStorage.getItem("user");
    if (!isSessionEmpty) {
      Router.push("/login");
    }
  });
  return <Header />;
}

export async function getStaticProps(context) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: {
      data: res.data,
    },
  };
}
