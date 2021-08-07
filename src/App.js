import React from 'react';
import './App.css';
import {ReactComponent as FacebookIcon} from './images/icon-facebook.svg';
import {ReactComponent as PinterestIcon} from './images/icon-pinterest.svg';
import {ReactComponent as InstagramIcon} from './images/icon-instagram.svg';

function App() {
  let year = new Date().getFullYear();
  const futureDate = +new Date(+new Date(`10/1/${year}`) + 1000000);
  let difference = futureDate - +new Date();
  let timeRemaining = {};

  const calculateRemaining = () => {
    if (difference > 0) {
      timeRemaining = {
        days: (Math.floor(difference / (1000 * 60 * 60 * 24)) < 10) ? ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2) : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
        minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2)
      }
    }

    return timeRemaining;
  }

  const [remaining, setRemaining] = React.useState(calculateRemaining());

  React.useEffect(() => {
    setTimeout(() => {
      setRemaining(calculateRemaining());
    }, 1000);
  });

  return (
    <div className="container">
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className="countdown">
        <div className="card" data-type="DAYS">
          <span>{remaining.days}</span>
          <div className="card-top" data-num={remaining.days}></div>
          <div className="card-bottom" data-num={remaining.days}></div>
        </div>
        <div className="card" data-type="HOURS">
          <span>{remaining.hours}</span>
          <div className="card-top" data-num={remaining.hours}></div>
          <div className="card-bottom" data-num={remaining.hours}></div>
          </div>
        <div className="card" data-type="MINUTES">
          <span>{remaining.minutes}</span>
          <div className="card-top" data-num={remaining.minutes}></div>
          <div className="card-bottom" data-num={remaining.minutes}></div>
          </div>
        <div className="card" data-type="SECONDS">
          <span>{remaining.seconds}</span>
          <div className="card-top" data-num={remaining.seconds}></div>
          <div className="card-bottom" data-num={remaining.seconds}></div>
        </div>
      </div>
      <div className="social">
        <ul>
          <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon /></a></li>
          <li><a href="https://pinterest.com/" target="_blank" rel="noreferrer"><PinterestIcon /></a></li>
          <li><a href="https://instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
