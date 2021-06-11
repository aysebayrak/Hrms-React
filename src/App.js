import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';



function App() {
  return (
    <div className="App">
      <Navi/>
      <Container    className="main">
        <Dashboard/>
        
      
      </Container>
      <Footer></Footer>
      

     

      
      
      
    </div>
  );
}

export default App;
