import { FC, PropsWithChildren } from "react";
import { Box, Button, Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';

const validationSchema = yup.object({
    Login: yup
        .string()
        .required('Login is required')
        .min(4, 'Login should be of minimum 4 characters length'),
    Email: yup
        .string()
        .required('Email is required')
        .email(),
    Password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password should be of minimum 8 characters length'),
});

interface iInput extends PropsWithChildren {
    nameButton: string;
}

const GeneralForm: FC<iInput> = ({ nameButton, children }) => {
    const metods = useForm<iInput>({
        mode: "onBlur",
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<iInput> = data => {
        console.log(data)
        metods.reset();
    };

    return (
        <FormProvider {...metods}>
            <Box
                component="form"
                onSubmit={metods.handleSubmit(onSubmit)}
                sx={{
                    display: "flex", flexDirection: "column",
                    '.MuiTextField-root': { m: 1, width: 300, color: "info" },
                    alignSelf: "center", backgroundColor: "#121212",
                    boxShadow: "0px 0px 5px 5px #202020"
                }}>
                {children}
                <Stack component="div" alignItems="flex-end" sx={{ m: 1 }}>
                    <Button variant="contained" color="info" type="submit">{nameButton}</Button>
                </Stack>
            </Box >
        </FormProvider >
    );
};

export default GeneralForm;