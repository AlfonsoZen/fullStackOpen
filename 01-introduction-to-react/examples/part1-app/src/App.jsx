import { useState } from 'react'
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = async () => {
    setAllClicks(allClicks.concat('L'));
    const newLeft = left + 1
    setLeft(newLeft);
    setTotal(newLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
    setTotal(left + right);
  }

  return (
    <div>
      {left}
      <Button 
        handleClick={handleLeftClick} 
        message='left'
      />
      <Button 
        handleClick={handleRightClick} 
        message='right'
      />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, message }) => (
  <button onClick={handleClick}>
    {message}
  </button>
)
  
export default App