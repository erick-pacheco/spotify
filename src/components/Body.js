import React from "react";
import { useStateValue } from "../data/StateProvider";
import PrimarySearchAppBar from "./Header";
import { Hero } from "./Hero";

export default function Body() {
  const [{ sideMenuOpen }] = useStateValue();
  return (
    <div className={`body w-100`}>
      <PrimarySearchAppBar className="bg bg-dark" />
      <Hero />
    </div>
  );
}
