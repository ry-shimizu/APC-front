import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
import {useState} from 'react';


type ResultsStateType = {
  country: string;
  name: string;
  temperature: string;
  conditionText: string;
  icon: string
}

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    name: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })
  const getWether = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      fetch(`http://api.weatherapi.com/v1/current.json?key=7d9c41c7e3bc49d896e50146232307&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => { 
        setResults({
        country: data.location.country,
        name: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
        })
        setCity("");
        setLoading(false)
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWether={getWether} setCity={setCity} city={city}/>
        {loading ? <Loading /> : <Results results={results}/>}
      </div>
    </div>
  )
}

export default App