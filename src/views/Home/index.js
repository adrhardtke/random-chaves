import React, {useEffect, useState, useCallback} from 'react';

import * as S from './styles';

import Card from '../../Components/Card'
import Button from '../../Components/Button'

import Frases from '../datacontent'

function Home() {


    const [frase, setFrase] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(()=> {
        generate()
    },[])

    const generate = () => {
        var min = 0;
        var max = Frases.length;
        
        const randomCitacao = Math.trunc(min + Math.random() * (max - min));
        const citacao = Frases[randomCitacao];
        setAuthor(citacao.author);

        max = citacao.frases.length;
        const randomFrase = Math.trunc(min + Math.random() * (max - min));
        const frase = citacao.frases[randomFrase]
        setFrase(frase)
    }

   


  return (
      <S.HomeWrapper>
          <Card frase={frase} author={author}>
            <Button onClick={generate}>Mais um, mais um!</Button>
          </Card>
      </S.HomeWrapper>
  )
}

export default Home;