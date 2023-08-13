import './App.css';
import CardGroup from './components/cardGroupHome';
import { latest } from './components/latest';
import NavBar from './components/navbar/navbar';
import TimedModal from './components/timedModal/timedModal';
import { upcoming } from './components/upcoming';

function App() {
  return (
    <div className="Home">
      <NavBar/>
      {/* <TimedModal/> */}
      <div className=' mt-20'>
        <CardGroup title = "Latest" list = {latest}/>
        <CardGroup title = "Upcoming" list = {upcoming}/>
      </div>
    </div>
  );
}

export default App;
