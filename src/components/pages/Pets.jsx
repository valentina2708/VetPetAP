import React from "react";
import SideNav from "../SideNav";
import Box from "@mui/material/Box";
import NavBar from "../common/NavBar";

export default function Pets() {
  return (
    <>
    <NavBar/>
    <Box height={30}/>
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Mascotas</h1>
      </Box>
    </Box>
  </>
  )
 
}
