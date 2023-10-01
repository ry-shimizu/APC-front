import { useState } from "react";


const Counter = (props:{initialValue:number}) => {
    const {initialValue} = props

    const[count, setCount] = useState(initialValue);

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=> setCount(count-1)}>-</button>
            <button onClick={()=> setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter