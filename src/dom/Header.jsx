import React,{ useState,useEffect} from 'react';
import './header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import Avatar from 'react-avatar';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'

const Header = (props) => {
  const options = "Keep";
  let currentlySelected= props.CurrentlySelected;
  let [pageName,setPageName] = useState("keep");


useEffect(() => {
  setPageName(currentlySelected)
  
 // if(pageName === "Notes"){
   // setPageName(options)
  //}
  
   
  }, [currentlySelected])
 
 

  return (
    <>

      <div className="container">

        <div className="menu-bar" >
          <MenuSharpIcon />
        </div>
        
        <div className="selectedMenu">
        <div className="logo">
        {(currentlySelected === "Notes")? <img src="./logos/google-keep.png" alt="google-keep logo"></img> : ""}
        </div>

        <div className="name">

          <span>{pageName}</span>
        </div>
        </div>

        <div className="input-element">

          <div className="search-logo">
            <SearchOutlinedIcon />
          </div>

          <input type="text" placeholder="Search"></input>

          <div className="delete">
            <CancelOutlinedIcon />
          </div>

        </div>


        <div className="class loader">

          <div className="reload">
            <RefreshSharpIcon />

          </div>
          <div className="grid-view">
            <DashboardOutlinedIcon />
          </div>
          <div className="settings">
            <SettingsOutlinedIcon />
          </div>
        </div>


        <div className="class app-store">
          <div className="apps">
            <AppsOutlinedIcon />
          </div>
          <div className="login"></div>
          <Avatar alt="Remy Sharp" src="./logos/yash.jpg" round={true} size="32" />
        </div>

      </div>






    </>
  );

}

export default Header;