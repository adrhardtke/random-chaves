import React, {useEffect, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import * as S from './styles';

import Girafales from '../../assets/img/girafales.webp'
import Chiquinha from '../../assets/img/Chiquinha.png'
import Kiko from '../../assets/img/kiko.jpg'
import Florinda from '../../assets/img/florinda.jpg'
import Madruga from '../../assets/img/madruga.jpg'
import Chaves from '../../assets/img/chaves.jpg'
import Barriga from '../../assets/img/barriga.jpeg'

function Card({frase, author, children}) {

  const getPhoto = () => {
    if(author.toLowerCase() === "professor girafales") return Girafales
    if(author.toLowerCase() === "chiquinha") return Chiquinha
    if(author.toLowerCase() === "kiko") return Kiko
    if(author.toLowerCase() === "dona florinda") return Florinda
    if(author.toLowerCase() === "seu madruga") return Madruga
    if(author.toLowerCase() === "chaves") return Chaves
    if(author.toLowerCase() === "senhor barriga") return Barriga
  }

  const [copy, setCopy] = useState(false)

  useEffect(()=> {
    setCopy(false)
  }, [frase])


  return (
      <S.CardWrapper>
          <S.TextWrapper>
            <h1 rel="frase">{frase}</h1>
            <span rel="author">{author}</span>
            {/* <button>Copiar frase</button> */}

            <CopyToClipboard text={frase}
              onCopy={() => setCopy(true)}>
               <button style={{background: copy ? "#4A6F4C" : "#efefef", color: copy ? "#fff" : "#000"}} copy={copy}>{copy ? "Frase Copiada!" : "Copiar frase"}</button>
            </CopyToClipboard>

          </S.TextWrapper>
          <S.ImageWrapper image={getPhoto} />
          {children}
      </S.CardWrapper>
  )
}

export default Card;