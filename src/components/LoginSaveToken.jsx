import { useSearchParams, useNavigate } from "react-router-dom";
import useToken from "../context/TokenContext";
import { useEffect } from "react";

const LoginSaveToken = () => {
    const navigate = useNavigate();
    const {saveToken} = useToken();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    console.log(token, searchParams);
    saveToken(token);
    useEffect(() => {
        if (token) {
            navigate("/people");
        }
    }, [token]);


    return (<>login success redirect to home</>);
}

export default LoginSaveToken;