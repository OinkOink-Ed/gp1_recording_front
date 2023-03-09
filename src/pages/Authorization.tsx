import { FC } from "react";
import { AppBar, Button, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

const Authorization: FC = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <AppBar
                position="static"
                color="primary">
                <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Link to="/authorization">
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
                        <Button variant="contained" color="success">Войти</Button>
                        <Button variant="contained" color="info">Регистрация</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* <Outlet /> */}
        </Container >
    );
};

export default Authorization;