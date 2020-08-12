import React from 'react';

import playIcon from '../../assets/icons/play-solid.svg'

import './styles.css';


function Header(){
 return (
     <header className="header">
         <nav className="header-nav">
                 <p>Music <img className="playIcon" src={playIcon} alt="Icone de start"/> Ground</p>
             <ul className="header-menu">
                 <li><input type="text" placeholder="Pesquisar" name="pesquisar"/> <button className="header-submit" type="submit">Pesquisar</button></li>
             </ul>
             <p className="header-nav-description">The place to find your music</p>

         </nav>
         </header>
 )
}
export default Header;