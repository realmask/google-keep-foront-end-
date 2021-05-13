import React, {useState} from 'react';
import './App.css';
import Header from './dom/Header.jsx';
import Menu from './dom/Menu.jsx';
import Pages from './dom/Pages.jsx';

function App() {
  const [CurrentlySelected, setCurrentlySelected] = useState("Notes");
  let menu_ids =["Notes","Notification","label","archieve","trash"];


  return (
    <>
    <Header CurrentlySelected={CurrentlySelected} />
    <Menu CurrentlySelected={CurrentlySelected} setCurrentlySelected={setCurrentlySelected} menu_ids={menu_ids} />
    <Pages CurrentlySelected={CurrentlySelected} />

    </>
    
  );
}

export default App;
