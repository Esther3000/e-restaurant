import logo from './logo.svg';
import React , {Component} from 'react';
import './App.css';
import { render } from 'react-dom';
import MenuItems from './Shared/MenuItems';
import Dishes from './Shared/dishes';
import NavBar from './Shared/Navbar';

class App extends Component{

render(){
  const MenuItem = Dishes.map(item => <MenuItems key={item.id} item={item} />)
  return(
    <div>
      <NavBar />
      <h1><center>Welcome!</center></h1>
      <div className="main-content">
      {MenuItem}
      </div>
    </div>
  )
}
} 
  


export default App
