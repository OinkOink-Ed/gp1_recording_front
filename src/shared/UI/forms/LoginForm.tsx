import { FC } from "react";
import GeneralInput from "../inputs/GeneralInput";
import GeneralForm from "./GeneralForm";

const LoginForm: FC = () => {
    return (
        <GeneralForm nameButton="Войти">
            <GeneralInput name="Login"></GeneralInput>
            <GeneralInput name="Password"></GeneralInput>
        </GeneralForm>
    );
};

export default LoginForm;