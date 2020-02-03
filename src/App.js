import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {About} from './components/About';
import {NoMatch} from './components/NoMatch';
import {Layout} from './components/ui/layout';
import {NavigationBar} from './components/ui/navigationBar';
import {Jumbotron} from './components/ui/Jumbotron';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron/>
        <Layout>
        <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
          
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
