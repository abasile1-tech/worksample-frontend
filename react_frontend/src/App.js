import './App.css';
import Group from './Assets/Group.png';
import Group13 from './Assets/Group 13.png';
import Group12 from './Assets/Group 12.png';
import Group42 from './Assets/Group 42.png';
import Group41 from './Assets/Group 41.png';
import Group75 from './Assets/Group 75.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id='Group' src={Group} width={208.53} height={34.14}  alt=''/>
        <img id='Group13' src={Group13} width={394} height={44}  alt=''/>
        <img id='Group12' src={Group12} width={120} height={44}  alt=''/>
        <img id='Group42' src={Group42} width={78} height={19}  alt=''/>
        <img id='Group41' src={Group41} width={55} height={19}  alt=''/>
        <img id='Group75' src={Group75} width={15} height={18.33}  alt=''/>
      </header>
    </div>
  );
}

export default App;
