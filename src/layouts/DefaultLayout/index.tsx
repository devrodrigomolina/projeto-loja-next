import OurCoffees from "@/pages/Home/components/OurCoffees";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import Home from "@/pages";
// import { Outlet } from "react-router-dom";
import React from "react";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* <Outlet /> */}
    </LayoutContainer>
  );
}
