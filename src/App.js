import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Players from './components/Players';
import Teams from './components/Teams';
import { Button, Navbar, useTheme} from '@nextui-org/react';
import logo from './assets/pl-main-logo.png';
import hero from './assets/hero.png'



function App() {


  return (
    <div className="App">
      <HashRouter>
      <img src={hero} style={{ marginTop : 10, height: 120 }} alt='hero'></img>

      <Navbar className='navbar' isBordered={useTheme()} isCompact variant={"static"} disableShadow={true} disableBlur={false}
              css={{$$navbarBlurBackgroundColor: "linear-gradient(90deg, rgba(28,30,31,1) 0%, rgba(133,30,122,1) 50%, rgba(28,30,31,1) 100%)",background: "rgb(24, 26, 27)",marginTop:'-4vh'}}>
        <Navbar.Brand>
          <img src={logo} height = '100vh' style={{ marginTop : 50 }} alt='pl-logo'></img>
          <h1 b color="inherit" hideIn="xs" style={{ marginLeft : 20}} >Fantasy</h1>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight activeColor={"secondary"} variant={"highlight-solid"} hideIn={"xs"}>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/players">Players</Navbar.Link>
          <Navbar.Link href="/teams">Teams</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight activeColor={"secondary"} variant={"highlight-solid"} hideIn={"xs"}>
          <Navbar.Item >
              <Button color="gradient" auto href="#" style={{ marginRight : 10}}>
                Login
              </Button>
            </Navbar.Item>
            <Navbar.Item >
              <Button color="gradient" auto href="#">
                Sign Up
              </Button>
            </Navbar.Item>
        </Navbar.Content>
      </Navbar> 

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/players" element={<Players/>} />
        <Route path="/teams" element={<Teams/>} />
      </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
