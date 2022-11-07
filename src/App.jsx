import './App.scss'
import Header from './components/layouts/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './components/layouts/Search/Search';

function App() {
  return (
    <div id='App' className="App">
      <Header />
      <Search />
    </div>
  )
}

export default App
