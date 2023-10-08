import { useState,useMemo } from "react";

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

    const numberOfCharacter1 = items.reduce((sub, item) => sub + item.length, 0)
    const numberOfCharacter2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>useMemo</p>
            <div>
                <input value={text} onChange={onChangeInput}/>
                <button onClick={onclickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index)=> (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total numberOfCharacter1:{numberOfCharacter1}</p>
                <p>Total numberOfCharacter2:{numberOfCharacter2}</p>
            </div>
        </div>
    )

}

export default Memo