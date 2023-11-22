import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import NavBar from "../common/NavBar";

export default function Profile() {
  return (
    <>
    <NavBar/>
    <Box height={30}/>
    <Box sx={{ display: "flex" }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Perfil</h1>
    </Box>
  </Box>
    
    </>
  
  )
 
}
