import React, {useEffect, useState} from 'react';

import * as S from './styles';

import Card from '../../Components/Card'
import Button from '../../Components/Button'

import Frases from '../datacontent'

const INITIAL_STATE = {
    frase: '',
    author: ''
}

function Home() {

    const [frase, setFrase] = useState(INITIAL_STATE)

    const generate = () => {
        var min = 0;
        var max = Frases.length;
        const random = min + Math.random() * (max - min);
        // console.log(Frases[Math.ceil(random)])
        setFrase(Frases[Math.trunc(random)]);
    }

    useEffect(()=> {
        generate()
    },[])


  return (
      <S.HomeWrapper>
          <Card frase={frase.frase} author={frase.author}>
            <Button onClick={generate}>Mais um, mais um!</Button>
          </Card>
      </S.HomeWrapper>
  )
}

export default Home;