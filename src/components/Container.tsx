const Container = (props:{title:string; children:React.ReactElement}) => {
    const { title, children } = props;

    return(
        <div style={{background:'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return(
        <Container title="Practice">
            <p>ここの部分が背景色で囲まれる</p>
        </Container>
    )
}

export default Parent