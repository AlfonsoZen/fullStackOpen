const App = ({ notes }) => {
  console.log(notes);
  return(
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map( note => (
          <li key={note.id}>
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;