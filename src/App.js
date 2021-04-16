import React, {useState} from 'react';
import Tweet from './Tweet'


function App(){

  const [users,setUsers] = useState([
    {name:'Tito', tweet:'random tweet', likes:'9'},
    {name:'Sergio', tweet:'lololol tweet', likes:'12329'},
    {name:'Claudia', tweet:'lorem ipsum', likes:'219'},
    {name:'Silvana', tweet:'123 tweet', likes:'290'}
    
  ]);

 const [isRed, setRed] = useState(false)
 const [count, setCount] = useState(0);

 const increment = () =>{
   setCount (count+1);
   setRed(!isRed)
 }

  // const counter  = 0;
  return(

    <div className='app'>
      {/* <Tweet name='Sergio' tweet='Hola 1st tweet!' likes='2099'/>
      <Tweet name='Tito' tweet='random tweet' likes='29'/>
      <Tweet name='Pistacho' tweet='hola a todos' likes='12099'/>
      <Tweet name='Maylo' tweet='Woof Woof' likes='23'/> */}

      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {/* {users.map(user => (
        <Tweet name={user.name} tweet={user.tweet} likes={user.likes}/>
      ))} */}


            
    </div>
  );
}

export default App;
