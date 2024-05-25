import { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const History = ({allClicks}) => {
  if (allClicks.length) {
    return (
      <p>{allClicks.join(' - ')}</p>
    )
  }

  console.log(allClicks.length);
  return (
    <p>The app starts when you click something</p>
  )
}


const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeft = () => {
    const newLeft = left + 1;
    setLeft(newLeft);

    setAll( allClicks.concat('L') );
  }

  const handleRight = () => {
    const newRight = right + 1;
    setRight(newRight);

    setAll( allClicks.concat('R') );
  }

  return (
    <div>
      <Display counter={left}/>
      <Button onClick={handleLeft} text='left'/>    

      <Button onClick={handleRight} text='right'/>    
      <Display counter={right}/>

      <History allClicks={allClicks}/>
    </div>
  )
}

export default App;