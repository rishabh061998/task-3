import react, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { add,deleteT} from '../actions/index'
import "./input.css"

const Input=()=>{
const [inputData,setInputData]=useState("")
const list=useSelector((state)=>state.toReducers.list)
const dispatch=useDispatch()

    return(
<>
<div className="main-div">
        <div className="child-div">
          <h1 style={{color:"white"}}>Input field below</h1>

          <div className="addItems">
          <input type="text" placeholder="Add" value={inputData} onChange={(e)=>setInputData(e.target.value)}></input>
          <i className="fa fa-plus add-btn" onClick={()=>dispatch(add(inputData),setInputData(""))}></i>
          </div>

          <div className='showItems'>
            {
                list.map((elem)=>{
                return(
                    <div className='eachItem' key={elem.id}>
                    <h3>{elem.data}</h3>
                   <div className='todo-btn'>
                   <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deleteT(elem.id))}></i>
                    </div>
               </div>
                )
                })
            }
           
            </div>

        </div>
     </div>
     
</>

    )
}

export default Input