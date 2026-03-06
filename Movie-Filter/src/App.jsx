import { useState } from 'react'

const film = [{ title: 'Inception', genre: 'Fantascienza' },
{ title: 'Il Padrino', genre: 'Thriller' },
{ title: 'Titanic', genre: 'Romantico' },
{ title: 'Batman', genre: 'Azione' },
{ title: 'Interstellar', genre: 'Fantascienza' },
{ title: 'Pulp Fiction', genre: 'Thriller' },]



function App() {
  const [selectGenere, setSelectGenere] = useState("");
  const [filmVisibile, setFilmVisibile] = useState(film);

  return (
    <h1>ciaooo</h1>
  )
}

export default App
