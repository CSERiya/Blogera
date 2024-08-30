import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate= useNavigate();
    localStorage.removeItem('jwtToken');
    navigate('/login');
};
export default Logout;