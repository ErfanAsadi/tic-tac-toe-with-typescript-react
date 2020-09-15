import React from 'react';
import './App.css';
import Game from './components/Game'


const App = ({who}: {who: string}) =>{
return (<div>
  <Game />
</div>)
}

export default App;
