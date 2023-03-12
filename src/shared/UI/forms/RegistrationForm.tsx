import { FC } from "react";
import GeneralInput from "../inputs/GeneralInput";
import GeneralForm from "./GeneralForm";

const RegistrationForm: FC = () => {
    return (
        <GeneralForm nameButton="Зарегистрироваться">
            <GeneralInput name="Login"></GeneralInput>
            <GeneralInput name="Email"></GeneralInput>
            <GeneralInput name="Password"></GeneralInput>
        </GeneralForm>
    );
};

export default RegistrationForm;