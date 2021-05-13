import React from 'react'
import './Menu.css'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';


function Menu(props) {
    const CurrentlySelected = props.CurrentlySelected;
    const setCurrentlySelected = props.setCurrentlySelected;
    const menu_ids = props.menu_ids;

    let menuItems = [
        { id: "Notes", icon: <EmojiObjectsOutlinedIcon />, text: "Notes", path:"/Notes" },
        { id: "Notification", icon: <NotificationsNoneSharpIcon />, text: "Notifications", path:"/Notification"},
        { id: "Labels", icon: <CreateOutlinedIcon />, text: "Edit Labels",path:"/Labels" },
        { id: "Archive", icon: <ArchiveOutlinedIcon />, text: "Archive", path:"/Archive" },
        { id: "Trash", icon: <DeleteForeverOutlinedIcon />, text: "Trash", path:"/Trash" },
       //{ id: "authentication", icon: "", text: "Open-Source Licenses" }
    ]

    
    
    const ListItems = menuItems.map(items => {
        return (

            <div key={`nav ${items.id}`} >
                <div className={`${CurrentlySelected === items.id ? "Selected" : ""}`}>

                    <div className={`nav-bar-items ${items.id}`} key={`navBar ${items.id}`} onClick={() => setCurrentlySelected(items.id)}>
                        <div className={`nav-bar-items-icon ${items.id} `} >
                           {items.icon}
                        </div>

                        <div className={` nav-bar-items-text ${items.id}`} key={` ${items.id}text`} >
                            <span key={`textView ${items.id}`}>{items.text}</span>
                        </div>

                    </div>


                </div>
            </div>
        )

    }
    );
   
    return (

        <>
            <div className="nav-bar-outer">
            <div className="nav-bar">{ListItems}</div>
            </div>
               
                
            

        </>
    )
}

export default Menu;
