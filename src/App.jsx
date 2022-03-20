import React , {useEffect} from "react";
import { useDispatch } from "react-redux";
import {loadGames} from './actions/getGames'


export default function App(){
  
  const dispatch = useDispatch()
  useEffect(()=>{
    
   dispatch(loadGames);
  } , [])

  return (
    <div className="App">
      <h1>Redux Games</h1>
    </div>
  )
}
