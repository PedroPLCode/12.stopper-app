import { useState } from 'react';
import { useEffect } from 'react';
import Container from './components/Container/Container';
import Display from './components/Display/Display';
import Button from './components/Button/Button';

const App = () => {
  
  const [miliseconds, setMiliseconds] = useState(0);
  const [stoperActive, setStoperActive] = useState(false);

  const startStoper = () => {
    setStoperActive(true);
  }

  const stopStoper = () => {
    setStoperActive(false);
  }

  const resetStoper = () => {
    setMiliseconds(0);
  }

  useEffect( () => {
    if(stoperActive) {
      const timer = setInterval( () => {
        setMiliseconds(miliseconds => miliseconds + 1);
      },1);
      return () => {
        if(timer) {
          clearInterval(timer);
        }
      };
    }
  }, [stoperActive]);

  return (
    <div>
      <Container>
        <Display miliseconds={miliseconds} />
        <Button action={startStoper}>START</Button>
        <Button action={stopStoper}>STOP</Button>
        <Button action={resetStoper}>RESET</Button>
      </Container>
    </div>
  );
}

export default App;
