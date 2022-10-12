import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import { AddSongs } from './components/AddSongs';
import { ListSongs } from './components/ListSongs';
import { RegisterUser } from './components/RegisterUser';
import { LoginUser } from './components/LoginUser';
import { PlayLists } from './components/PlayLists';
import { DashBoard } from './components/DashBoard';
import { ViewAllPlaylist } from './components/ViewAllPlaylist';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path='/addsong' element ={<AddSongs/>}>
          </Route>
          <Route path='/listsongs' element ={<ListSongs/>}></Route>
          <Route path='/adduser' element ={<RegisterUser/>}></Route>
          <Route path='/login' element ={<LoginUser/>}></Route>
          <Route path='/playlists' element ={<PlayLists/>}></Route>
          <Route path = "/" element = {<DashBoard/>}></Route>
           <Route path='/playlistlist' element ={<ViewAllPlaylist/>}></Route> 

      </Routes>
    </div>
  );
}

export default App;
