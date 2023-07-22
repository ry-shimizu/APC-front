import { type } from 'os';
import React from 'react';



const App: React.FC = () => {
  const message: string = 'さえちゃん こんにちは'
  return (
    <>
    <div className="App">
      <p>{message}</p>
    </div>
    <ul>
      { items.map((item: Item) => (
        <li key={item.id}>{ item.title}</li>
      ))}
    </ul>
    </>
  )
}

type Item = {
  id: number
  title: string
}

const items: Item[] = [
  {
    id: 1,
    title: '清水'
  }, {
    id: 2,
    title: '稜也'
  }
]


export default App