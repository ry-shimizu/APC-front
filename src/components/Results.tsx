import {ResultsStateType} from "../App"

type ResultsStatePropsType = {
    results: ResultsStateType;
}

const Results = ({results}: ResultsStatePropsType) => {
    const {country, cityName, temperature, conditionText, icon} = results;
    return (
        <>
            {country && <div className="results-country">{country}</div>}
            {cityName && <div className="results-city">{cityName}</div>}
            {temperature && <div className="results-temp">{temperature}<span>度</span></div>}
            {conditionText && 
            <div className="results-condition">
            <img src={icon} alt="icon"></img>
            <span>{conditionText}</span>
            </div>}
        </>
    );
}

export default Results;
