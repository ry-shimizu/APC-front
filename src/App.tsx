import countriesJson from "./countries.json";
import {useState} from "react";
import TopPage from "./pages/TopPage"

export type countryDataProps = {
  date: string;
  newConfirmd: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecoverd: number;
}

const App = () => {
  const [country, setCountry] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const getCountryData = () => {
      fetch(`https://monoteinbooks.vercel.app/api/coronatracker/country/${country}`)
      .then(res => res.json())
      .then(data => setCoutryData({
        date: data[data.length-1].Date,
        newConfirmd: data[data.length-1].Confirmd - data[data.length-2].Confirmd,
        totalConfirmed: data[data.length-1].Confirmd,
        newRecovered: data[data.length-1].Recovered - data[data.length-2].Recovered,
        totalRecoverd: data[data.length-1].Recovered
      }));
  }
  const [countryData, setCoutryData] = useState<countryDataProps>({
    date: "",
    newConfirmd: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecoverd: 0
  });

  return (
    <div className="App">
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>
    </div>
  )
}

export default App