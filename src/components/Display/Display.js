import styles from './Display.module.scss';

const Display = props => {

  const msToTime = ms => { 
    let sec = Math.floor((ms / 1000 ) % 60);
    let min = Math.floor(((ms / 1000 ) / 60) % 60);
    let hour = Math.floor((ms / 1000 ) / 60 / 60);
    let msec = Math.floor((ms % 1000) );
    return (`${hour} : ${min} : ${sec} : ${msec}`);
  }

  return (
    <div className={styles.display}>
      {msToTime(props.miliseconds)}
    </div>
  );
}

export default Display;