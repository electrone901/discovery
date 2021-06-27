import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import { Navbar } from './components/layout/navbar/Navbar';
import Paths from './components/paths/Paths';
import Footer from './components/layout/navbar/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Container>
          <Route exact path="/register" component={Home} />
          <Route exact path="/login" component={Home} />
          <Switch>
            <Route exact path="/paths" component={Paths} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
