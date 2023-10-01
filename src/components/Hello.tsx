const Hello = () => {
    const onClick = () => {
        alert('クリックされました')
    }
    const text :string = 'hello, react'

    return (
        <div onClick={onClick}> 
            {text}
        </div>
    )
}

export default Hello