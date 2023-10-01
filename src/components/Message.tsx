const Text = (props:{content:string}) => {
    const{ content } = props
    return <p className="text">{content}</p>
}

const Message = () => {
    const content1:string = ' this is parent component'
    const content2:string = ' message use text component'

    return(
        <div>
            <Text content={content1}/>
            <Text content={content2}/>
        </div>
    )
}

export default Message;