const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  console.log("Hello from component");
  const friends = [
    { name: "Alfonso", age: 20 },
    { name: "Diego", age: 26 },
  ];
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello 
        name={friends[0].name}
        age={friends[0].age}
      />
      <Hello 
        name={friends[1].name}
        age={friends[1].age}
      />
    </>
  )
}

export default App