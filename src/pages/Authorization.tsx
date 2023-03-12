import { FC } from "react";
import { AppBar, autocompleteClasses, Button, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import { Link, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

const Authorization: FC = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#121212" }}>
            <AppBar
                position="static">
                <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Link to="/">
                        <IconButton>
                            <LocalHospitalIcon fontSize="large" color="error" />
                        </IconButton>
                    </Link>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: "center" }}>
                        Сервис записи на обучение ГП №1 г.Сочи
                    </Typography>
                    <Box sx={{ '& .MuiButton-contained': { margin: 1 }, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <Link to="login" relative="route">
                            <Button variant="contained" color="success">Вход</Button>
                        </Link>
                        <Link to="registration" relative="route">
                            <Button variant="contained" color="info">Регистрация</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container disableGutters sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
                <Outlet />
            </Container>
            <AppBar
                position="static"
                color="primary"
                sx={{ top: "auto", bottom: "0" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: "flex", flexGrow: 1, justifyContent: "center", textAlign: "center", fontSize: { xs: "1rem", md: "1.25rem" } }}>
                        По вопросам улучшения обращаться по номеру: 8-952-836-06-42
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container >
    );
};

export default Authorization;