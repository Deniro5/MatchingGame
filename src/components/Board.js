import React, {useState, useEffect } from 'react';
import Card from './Card';
import Home from './Home';
import imageArray from './ImgArray'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Board = (props, match) => {

  const [board, setBoard] = useState([]);
  const [first, setFirst] = useState(-1);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(60);
  const [pairs, setPairs] = useState(0);
  const [timer, setTimer] = useState();
  const [completed, setCompleted] = useState(false);
  const [home, setHome] = useState(false);
  const [items, setItems] = useState(8);
  const { diff } = useParams();

  useEffect(() => {
    let newBoard = [];
    let imageArray1 = [...imageArray];
    let items;
    if (diff === "hard") {
       items = 16
    }
    else if (diff === "medium") {
      items = 12
    }
    else {
       items = 8
    }
    for (let i = 0; i < (items/2) ; i ++) {
      let randIndex = Math.floor(Math.random() * (10 - i));  // generate random index  (WE DONT NEED TO RANDOMIZE TWICE)
      newBoard.push({flipped: false, imgsrc : imageArray1[randIndex]});
      newBoard.push({flipped: false, imgsrc : imageArray1[randIndex]}); //for now jus put the pairs beside each other
      imageArray1.splice(randIndex, 1);
    } 
    const shuffleArray = (arr) => {
      let shuffledBoard =  [];
      for (let len = arr.length - 1; len >= 0 ; len--) {
        let randIndex = Math.floor(Math.random() * (len));
        shuffledBoard.push(arr[randIndex]);
        arr.splice(randIndex,1)
      }
      return shuffledBoard
    } 
    setBoard(shuffleArray(newBoard))
    setItems(items); 
  }, [])




  useEffect(() => {
    if (time === 0) {  //If the time expires
      clearTimeout(timer);
      alert("You lost. Try again!");
      let finishedBoard = [...board];
      for (let i = 0; i < finishedBoard.length; i++) {
        finishedBoard[i].flipped = true;
      }
      setBoard(finishedBoard)
      setCompleted(true);
    }

    else if (pairs < items/2) { //if they haven't got all pairs yet and time hasn't expired
      const countdown = setTimeout(() => {   
        setTime(time - 1)
      }, 1000)
      setTimer(countdown)
    }

  }, [time])



  useEffect(() => {
    if  (pairs === items/2) { //if they have unveiled all pairs
      alert("Congratulations. You Win!");
      clearTimeout(timer);
      setCompleted(true);
    }
  }, [pairs])
  

  const cardClick = (index) => {
    if (!disabled && !completed && !board[index].flipped) {
      let newBoard = [...board];
      newBoard[index].flipped = true;
      if (first < 0 ) {
        setFirst(index)
        setBoard(newBoard)
      }
      else {
        if (newBoard[first].imgsrc === newBoard[index].imgsrc) {
            setBoard(newBoard)
            setFirst(-1);
            setPairs(pairs + 1)
        }
        else {
          setFirst(-1);
          setBoard(newBoard)
          setDisabled(true)
          setTimeout(() => {
            let resetBoard = [...newBoard]
            resetBoard[first].flipped = false;
            resetBoard[index].flipped = false;
            setBoard(resetBoard)
            setDisabled(false)
          },1000)
        }
      }
    }
  }

  if (home) {
    return (
      <Home/>
    )
  }

    return (
      <div className = "boardContainer">
        <h2 className = "timer">Time Remaining: {time} seconds</h2>
        {board.map((item,index) => (
          <Card imgsrc = {item.imgsrc} click = {cardClick.bind(this,index)} showImage = {item.flipped}/>
        ))}
        {completed && 
        <Link to = "/" style = {{textDecoration: "none"}}>
          <button className = "homeBtn" onClick = {() => {setHome(true)}}> Back to Menu </button>
        </Link>}
      </div>
    );
  }


export default Board;
