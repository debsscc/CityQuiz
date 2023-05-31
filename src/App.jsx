import { useState } from 'react'
import './styles.css'

function App() {

  const [img, setImg] = useState("/public/imgs/img1.jpg")
  const [contador, setContador] = useState("1")
  const [resposta, setResposta] = useState("")
  const [mensa, setMensa] = useState("")

  function trocarImg() {
    if (img == "/public/imgs/img1.jpg") {
      setImg("/public/imgs/img2.jpg")
      setContador(2)
    }
    if (img == "/public/imgs/img2.jpg") {
      setImg("/public/imgs/img3.webp")
      setContador(3)
    }
    if (img == "/public/imgs/img3.webp") {
      setImg("/public/imgs/img4.webp")
      setContador(4)
    }
    if (img == "/public/imgs/img4.webp") {
      setImg("/public/imgs/img5.jpg")
      setContador(5)
    }
    if (img == "/public/imgs/img5.jpg") {
      setImg("/public/imgs/img1.jpg")
      setContador(1)
    }
  }

  function verificaResposta() {
    if (resposta == "brasilia" && img == "/public/imgs/img1.jpg") {
      setMensa("Parabéns, você acertou na 1º foto")
    }
    else if (resposta == "brasilia" && img == "/public/imgs/img2.jpg") {
      setMensa("Parabéns, você acertou na 2º foto")
    }
    else if (resposta == "brasilia" && img == "/public/imgs/img3.webp") {
      setMensa("Parabéns, você acertou na 3º foto")
    }
    else if (resposta == "brasilia" && img == "/public/imgs/img4.webp") {
      setMensa("Parabéns, você acertou na 4º foto")
    }
    else if (resposta == "brasilia" && img == "/public/imgs/img5.jpg") {
      setMensa("Parabéns, você acertou na 5º foto")
    } else {
      setMensa("Errrrroooouuuuuu")
    }
  }

  return (
    <>
      <nav><h1>Quiz: Cidades do Brasil</h1></nav>
      <div className="pai">

      <div className="container">
        <div className="cima">
          <span>Que cidade é essa?</span><span>Foto {contador} de 5</span>
        </div>
        <div className="meio">
          <img src={img} alt="Imagem" width={500} onClick={trocarImg} />
        </div>
        <div className="baixo">
          <span>Nome da Cidade: </span>
          <input type="text" value={resposta}
            onChange={(e) => setResposta(e.target.value)} />
          <button id="btn" onClick={verificaResposta}>Enviar</button>
        </div>
        {mensa}
      </div>
    </div >
    </> 
  )
}

export default App
