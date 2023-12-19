import React from 'react';
import Greet from './Components/Greet';
import './App.css';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import PersonList from './Components/PersonList';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Container } from './Components/Container';
import { Counter } from './Components/state/Counter';
import { ThemeContextProvider } from './Components/context/themeContext';
import { Box } from './Components/context/Box';
import { UserContextProvider } from './Components/context/UserContext';
import { User } from './Components/context/User';
import { Timer } from './Components/ref/MutableRef';
import { Counter as Counter2} from './Components/class/Counter';
import { List } from './Components/generics/List';

function App() {

  const nameList = [
    {
        first : "ravi",
        last : "rohilla" 
    },
    {
        first : "ravi2",
        last : "rohilla2" 
    },
    {
        first : "ravi3",
        last : "rohilla3" 
    },
    {
        first : "ravi4",
        last : "rohilla4" 
    },
    {
        first : "ravi5",
        last : "rohilla5" 
    }
]

  return (
    <div className="App">
      <header className="App-header">
        <Greet
        name = {"Kamal"}
        messageCount={20}
        isLoggedIn = {true}
        />
        <Status
        status='loading'
        />
      </header>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>
          Osacar goes to Decaprio
        </Heading>
      </Oscar>
      <Greet
      name='Kamal'
      isLoggedIn = {true}
      />
      <PersonList
        names={nameList}
        />
        <Button
        handleClick={(event , id) => {console.log("Clicked the button" , event , event.target , id)}}
        />
        <Input
        value=''
        handleChange={(event) => console.log(event , event.target.value)}
        />
        <Container
        styles={{border : '4px solid red' , padding : '3rem' }}
        />
        <Counter/>
        <ThemeContextProvider>
          <Box/>
        </ThemeContextProvider>
        <UserContextProvider>
          <User/>
        </UserContextProvider>
        <Timer/>
        <Counter2
        message='hello'
        />
        <List
        items = {["Red" , "Blue" , "Voilet"]}
        onClick={(item) => console.log(item)}
        />
         <List
        items = {[1  , 2 ,3]}
        onClick={(item) => console.log(item)}
        />
    </div>
  );
}

export default App;
