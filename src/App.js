import { useState } from 'react';
import { useEffect } from 'react';
import Display from './components/Display/Display'
import Button from './components/Button/Button'
import Container from './components/Container/Container'

const App = () => {
  
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const startStoper = event => {
    event.preventDefault();
    setStart(true);
    console.log('klik start stoper')
  }

  const resetStoper = event => {
    event.preventDefault();
    setTime(0);
    console.log('klik reset stoper')
  }

  const stopStoper = event => {
    event.preventDefault();
    setStart(false);
    console.log('klik stop stoper')
  }

  useEffect(() => {
    if(start){
        const timer = setInterval(()=>{
            setTime(previousTime=>previousTime+1);
        },1);
        return () => clearInterval(timer);
    }
},[start]);

  return (
    <div>
      <Container>
        <Display time={time} />
        <Button action={startStoper}>START</Button>
        <Button action={resetStoper}>RESET</Button>
        <Button action={stopStoper}>STOP</Button>
      </Container>
    </div>
  );
}

export default App;
