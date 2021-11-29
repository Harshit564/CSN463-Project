import './App.css';
import Header from './assests/header';
import Footer from './assests/footer';
import MainFeed from './mainFeed/mainfeed';
import ProfilePage from './profile/profilePage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      
      
      <div className="App">
      <Header /> 
      <MainFeed />
        <ProfilePage />
         <Footer />
        </div>
     
      // <Router>
      //   <Routes>
      //   <Header />
      //   <main className = "App">
      //   <Route path='/profile' component={<ProfilePage />} />
      //   <Route path='/' component={<MainFeed />} />
      //   </main>
      //   <Footer />
      //   </Routes>
      // </Router>
  );
}

export default App;
