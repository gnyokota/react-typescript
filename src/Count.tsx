import React, {useState, useEffect} from 'react';
import './index.css';

export interface CountProps{
    description:string; 
}

export interface jsonTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function Count({description}: CountProps) {
    const [todo, setTodo]= useState<jsonTodo>();
    useEffect(()=>{
        async function loadData(){
            try{
                const response= await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
            const json = await response.json(); 
                setTodo(json); 
            }catch(error){
                console.log("error:",error);
            }
        }
        loadData(); 
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
            {todo?.title}
            <div className='counter-section'>
            <button onClick={handleClickSub}>-</button>
            <h3>{count}</h3>
            <button onClick={handleClickSum}>+</button>
            </div>
            
        </div>
    )
}

export default Count
