import { Stack, TextField, useThemeProps } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { FC } from "react";

interface iProps {
    name: string;
}

const GeneralInput: FC<iProps> = ({ name }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <Stack>
            <TextField
                {...register(name)}
                label={name}
                type={name}
                error={Boolean(errors[name])}
                fullWidth>
            </TextField>
            <ErrorMessage errors={errors} name={name} as="span" className="eror" />
        </Stack >
    );
};

export default GeneralInput;