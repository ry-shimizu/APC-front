import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export type selecterProps = {
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    getCountryData: () => void;
    countriesJson: { Country: string; Slug: string; }[];
}

const Selector = (props:selecterProps) => {

    return (
        <div>
            <select onChange={e => props.setCountry(e.target.value)}>
                {props.countriesJson.map((country: { Slug: string; Country: string}, index: Key) => <option key={index} value={country.Slug}>{country.Country}</option>)}
            </select>
            <button onSubmit={props.getCountryData}>Get Data</button>
        </div>
    );
}


export default Selector;