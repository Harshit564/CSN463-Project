import './App.css';
import Header from './assests/header';
import Footer from './assests/footer';
import MainFeed from './mainFeed/mainfeed';
import ProfilePage from './profile/profilePage';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes> 
        <Route path="/"  component={MainFeed}/>
        <Route path="/profile"  component={ProfilePage}/>
      </Routes> */}
      <MainFeed /> 
      <ProfilePage />
      <Footer />
      
    </div>
  );
}

export default App;
