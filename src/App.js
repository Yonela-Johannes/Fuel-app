import { HomeScreen } from './screens/HomeScreen';
import { Navbar } from './components/navbar/Navbar';
import './app.css';
import { user } from './assets/user'

function App() {
  return (
    <div className="app">
      <div className='nav'>
        <Navbar user={user} />
      </div>
      <HomeScreen />
    </div>
  );
}

export default App;
