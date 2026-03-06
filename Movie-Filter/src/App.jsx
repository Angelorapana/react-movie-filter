import { useState, useEffect } from 'react'




const film = [{ title: 'Inception', genre: 'Fantascienza' },
{ title: 'Il Padrino', genre: 'Thriller' },
{ title: 'Titanic', genre: 'Romantico' },
{ title: 'Batman', genre: 'Azione' },
{ title: 'Interstellar', genre: 'Fantascienza' },
{ title: 'Pulp Fiction', genre: 'Thriller' },]



function App() {
  const [selectGenere, setSelectGenere] = useState("");
  const [filmVisibile, setFilmVisibile] = useState(film);

  useEffect(() => {
    if (selectGenere === "") { setFilmVisibile(film) }
    else {
      const filtered = film.filter((elemento) => elemento.genre === selectGenere)
      setFilmVisibile(filtered)
    }
  }, [selectGenere])

  return (
    <div className="container">

      <select onChange={(e) => setSelectGenere(e.target.value)}>
        <option value="">Tutti i film</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
    </div>
  )
}

export default App
