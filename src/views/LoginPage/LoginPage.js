import { useNavigate } from "react-router";

export const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin();
        navigate('/');
    };

    return (
        <div>
            Please Register or Login
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}