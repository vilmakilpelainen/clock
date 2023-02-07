import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    console.log('componentdidmount');
    const id = setInterval(() => {
      setTime(new Date());
    },1000);

    return () => {
      console.log('componentwillunmount');
      clearInterval(id);
    };
  },[])

  return (
    <div style={{margin: '30px'}}>
      {time.toLocaleTimeString()}
    </div>
  )
}

