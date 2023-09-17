import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import {countryDataProps} from "../App";

export type topPageProps = {
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    getCountryData: () => void;
    countriesJson: { Country: string; Slug: string; }[];
    countryData: {
        date:string,
        newConfirmed:number,
        totalConfirmed:number,
        newRecovered:number,
        totalRecovered:number
    };
}
const TopPage = ({countriesJson,setCountry,getCountryData,countryData}:topPageProps) => {
    return (
        <div>
            <Title />
            <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
            <Results countryData={countryData}/>
        </div>
    );
}

export default TopPage;