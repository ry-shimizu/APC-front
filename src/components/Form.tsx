type FormPropsType = {
    setCity:  React.Dispatch<React.SetStateAction<string>>
    getWether: (e: React.FormEvent<HTMLFormElement>) => void
    city: string;
}

const Form = ( {setCity, getWether, city}: FormPropsType) => {
    return (
        <form onSubmit={getWether}>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}/>
            <button type="submit">Get Weather</button>
        </form>
    );
};
export default Form;
