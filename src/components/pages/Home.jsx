import React from "react";
import SideNav from "../SideNav";
import Box from "@mui/material/Box";
import NavBar from "../common/NavBar";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Colors } from "../../config/themConfig";
import Dash from "../../css/Dash.css";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Stack spacing={2} direction="row">
                <Card className="fondo" sx={{ minWidth: 250 }} elevation={3}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Clientes
                    </Typography>
                    <CardMedia
                      className="img__card"
                      sx={{ height: 100}}
                      image="/src/assets/img/clientes.png"
                      title="clientes"
                    />
                  </CardContent>
                </Card>
                <Card className="fondo" sx={{ minWidth: 250 }} elevation={3}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mascotas
                    </Typography>
                    <CardMedia
                      className="img__card"
                      sx={{ height: 100}}
                      image="/src/assets/img/mascotas.png"
                      title="clientes"
                    />
                  </CardContent>
                </Card>
                <Card className="fondo" sx={{ minWidth: 250 }} elevation={3}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Productos
                    </Typography>
                    <CardMedia
                      className="img__card"
                      sx={{ height: 100}}
                      image="/src/assets/img/productos.png"
                      title="clientes"
                    />
                  </CardContent>
                </Card>
                <Card className="fondo" sx={{ minWidth: 250 }} elevation={3}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Servicios
                    </Typography>
                    <CardMedia
                      className="img__card"
                      sx={{ height: 100}}
                      image="/src/assets/img/servicios.png"
                      title="clientes"
                    />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={70} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2}>
                <Card sx={{ Width: 345, height: 142 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ Width: 345, height: 142 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ Width: 350, height: 300 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
