import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  ContainerFooter,
  ContainerDisplay,
  CountText,
  BtnPlus,
  BtnLess,
  TextInfo,
  ContainerHeader,
  BtnReload
} from './styles';

export default function Home() {
  const [count, setCount] = useState(100000000000000);

  const setPlusCount = () => {
    setCount(count + 1);
  };
  const setLessCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Container>
      <ContainerHeader>
        <BtnReload
          onPress={() => {
            setCount(0);
          }}
        >
          <AntDesign name='reload1' size={30} color='#cd8282' />
        </BtnReload>
      </ContainerHeader>
      <ContainerDisplay>
        <CountText>{count}</CountText>
      </ContainerDisplay>
      <ContainerFooter>
        <BtnLess
          onPress={() => {
            setLessCount();
          }}
        >
          <FontAwesome name='minus' size={32} color='white' />
        </BtnLess>
        <BtnPlus
          onPress={() => {
            setPlusCount();
          }}
        >
          <FontAwesome name='plus' size={32} color='white' />
        </BtnPlus>
      </ContainerFooter>
      <ContainerFooter>
        <FontAwesome name='info-circle' size={32} color='#cd8282' />
        <TextInfo>
          altere a contagem apertando os botões na tela ou nos botões de volume
          do seu dispositivo!
        </TextInfo>
      </ContainerFooter>
    </Container>
  );
}
