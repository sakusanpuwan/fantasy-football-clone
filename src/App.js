import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Players from './components/Players';
import Teams from './components/Teams';
import { Button, Navbar} from '@nextui-org/react';
import logo from './assets/pl-main-logo.png';



function App() {

  const collapseItems = [
    "Home",
    "Players",
    "Teams",
    "Login",
    "Sign Up",
  ];

  return (
    <div className="App">
      <BrowserRouter>

      <Navbar className='navbar' isBordered isCompact variant={"floating"} disableShadow={false} disableBlur={false}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <img src={logo} height = '100vh' style={{ marginTop : 50 }} alt='pl-logo'></img>
          <h1 b color="inherit" hideIn="xs" style={{ marginLeft : 20}} >Fantasy</h1>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight activeColor={"success"} variant={"highlight"} hideIn={"xs"}>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/players">Players</Navbar.Link>
          <Navbar.Link href="/teams">Teams</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight activeColor={"success"} variant={"highlight"} hideIn={"xs"}>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item >
            <Button auto flat as={Link} color={"default"} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/players"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        </Navbar.Collapse>
      </Navbar> 

      {/* <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/teams">Teams</Link></li>
      </ul> */}

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/players" element={<Players/>} />
        <Route path="/teams" element={<Teams/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
