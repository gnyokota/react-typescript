import React, {useState, useEffect} from 'react';
import './index.css';

export interface CountProps{
    description:string; 
}

function Count({description}: CountProps) {
    //will console.log just when description changes
    useEffect(()=>{
        let currentRender = true; 
        setTimeout(()=>{
            if(currentRender){
                console.log(description) 
            } else{
                console.log('past values') 
            } 

        }, 3000)
       
        //I can return a function here  for example to clean a time interval
        //and just the last value will be consoled log 
        return () =>{
            currentRender = false; 
        }

    }, [description])

    const [count,setCount] = useState(0); 

    const handleClickSub = () =>{
        setCount(prevState => prevState -1)
    }

    const handleClickSum = () =>{
        setCount(prevState => prevState +1)
    }

    return (
        <div className='count'>
            <h1>{description}</h1>
            <div className='counter-section'>
            <button onClick={handleClickSub}>-</button>
            <h3>{count}</h3>
            <button onClick={handleClickSum}>+</button>
            </div>
            
        </div>
    )
}

export default Count
