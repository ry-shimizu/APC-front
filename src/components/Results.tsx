
type ResultsStateType = {
    results:{
        country: string;
        name: string;
        temperature: string;
        conditionText: string;
        icon: string
}
  }

const Results = ({results}: ResultsStateType) => {
        const { country, name, temperature, conditionText, icon } = results;
    return (
        <>
            {country && <div className="results-country">{country}</div>}
            {name && <div className="results-city">{name}</div>}
            {temperature && <div className="results-temp">{temperature}<span>°C</span></div>}
            {conditionText
            && <div className="results-condition">
                <img src={icon} alt="icon" />
                <span>{conditionText}</span>
                </div>
            }
        </>
    );
};

export default Results
