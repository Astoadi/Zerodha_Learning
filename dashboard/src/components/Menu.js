import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { clientServer } from "../axiosConfig";
const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropDownOpen,setIsProfileDropDownOpen]=useState(false);
  const [userName,setUserName]=useState("");
  const [subText,setSubText]=useState("");

  const handleMenuClick=(indx)=>{
    setSelectedMenu(indx);
  };
  const handleProfileClick=()=>{
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };
  const menuClass='menu';
  const activeMenuClass='menu selected';

  useEffect(()=>{
    async function userInfo(){
      try{
        const response=await clientServer.post('/users/verify');
        setUserName(response.data.user);
        setSubText(response.data.user.substring(0,2));
      }catch(error){
        console.log(error);
      }
    }
    userInfo();

  },[])
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to={"/"} onClick={()=>handleMenuClick(0)}><p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/orders"} onClick={()=>handleMenuClick(1)}><p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=>handleMenuClick(2)}><p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=>handleMenuClick(3)}><p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=>handleMenuClick(4)}><p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to={"/apps"} onClick={()=>handleMenuClick(5)}><p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{subText || "DU"}</div>
          <p className="username">{userName || "DemoUser"}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
