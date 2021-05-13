import React from 'react'
import Archive from './Page/Archive';
import Labels from './Page/Labels';
import Notes from './Page/Notes';
import Notification from './Page/Notification';
import Trash  from './Page/Trash';


function Pages(props) {
    const CurrentlySelected = props.CurrentlySelected;
    const Menu_ids = props.Menu_ids;
    const pages= [
        {id:"Notes", component:<Notes/>},
        {id:"Notification", component:<Notification/>},
        {id:"Labels", component:<Labels/>},
        {id:"Archive", component:<Archive/>},
        {id:"Trash", component:<Trash/>},
    ]
    const SelectedPage = pages.filter( pages => CurrentlySelected === pages.id)[0].component ;
    
    
    return (
        <div>
            {SelectedPage}
            
        </div>
    )
}

export default Pages;
