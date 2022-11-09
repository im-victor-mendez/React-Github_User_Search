import './App.scss'
import Header from './components/layouts/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './components/layouts/Search/Search';
import Profile from './components/layouts/Profile/Profile';

function App() {
  return (
    <div id='App' className="App">
      <Header />
      <Search />
      <Profile />
    </div>
  )
}

export default App
