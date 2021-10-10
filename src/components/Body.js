import React from "react";
import { useStateValue } from "../data/StateProvider";
import PrimarySearchAppBar from "./Header";
import { Hero } from "./Hero";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Body() {
  const [{ searchList }] = useStateValue();
  return (
    <div className={`body w-100`}>
      <PrimarySearchAppBar className="bg bg-dark" />
      <Hero />
    </div>
  );
}
