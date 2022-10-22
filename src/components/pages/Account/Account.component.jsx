import "./Account.css";
import Breadcrumb from "../../features/Breadcrumb/Breadcrumb.component";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import CourseTable from "../../features/Table/Table.component";
import StyledCard from '../../features/Card/Card.component'
import { useContext } from "react";
import { UserDataContext } from "../../../context/UserDataProvider.component";

export default function Account() {
  const {user, logout} = UserAuth();
  const currentUser = useContext(UserDataContext);
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
      <StyledCard>
      <h1>Account</h1>
      <p>User Email:{user && user.email}</p>
      {currentUser && (
        <>
          <img
            src={currentUser.photoURL}
            width="100"
            height="100"
            alt="avatar"
          />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>
      )}
      <button className="popBtn" onClick={handleLogout}>
        Logout
      </button>
      </StyledCard>
      <div className="profile-table"><CourseTable/></div>
      <div className='end-margin'></div>
    </div>
  );
}
