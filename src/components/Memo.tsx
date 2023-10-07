import { useState,useMemo } from "react";
import { text } from "stream/consumers";

export const Memo = () => {
    const[text ,setText] = useState('')
    const[items, setItems] = useState<string[]>([])

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }


    const onclickButton = () => {
        setItems(preItems => {return [...preItems, text]})
        setText('')
    }

    
}