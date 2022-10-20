import "./Account.css";
import Breadcrumb from "../../features/Breadcrumb/Breadcrumb.component";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <Breadcrumb title="My Account"/>
      <h1>Account</h1>
      <p>User Email:{user && user.email}</p>
      <button className="popBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
