import React, {useContext} from "react";
import './UserSwitch.css';
import UserContext from "../../contexts/userContext";

const UserSwitch = () => {
    const [isAdminUser, setIsAdminUser] = useContext(UserContext);

    return (
        <>
        <span className="usertoggler">
            <span className="user-role"> Admin </span>
            <label className="switch"> 
                <input type={"checkbox"} value={isAdminUser} onChange={() => {setIsAdminUser((isAdmin)=>!isAdmin)}} ></input>
                <span className="slider round"></span>
            </label>
            <span className="user-role"> User </span>
        </span>
        
        </>
    );
}

export default UserSwitch;