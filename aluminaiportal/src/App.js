import './App.css';
import Header from './assests/header';
import Footer from './assests/footer';
import MainFeed from './mainFeed/mainfeed';
import ProfilePage from './profile/profilePage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainFeed />
      <ProfilePage />
      <Footer />
    </div>
  );
}

export default App;
