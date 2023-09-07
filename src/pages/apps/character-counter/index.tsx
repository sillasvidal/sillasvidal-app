import { Container, ContainerActionButtons, TextArea } from "@/styles/pages/apps/character-counter";

import { useState } from "react";

export default function CharacterCounter() {
  const [wordsQuantity, setWordQuantity] = useState<number>(0);
  const [charactersQuantity, setCharactersQuantity] = useState<number>(0);
  
  const counter = (value: string) => {
    setWordQuantity(value === '' ? 0 : value.trim().split(/\s+/)?.length);
    setCharactersQuantity(value?.length);
  };

  return (
    <Container>
      <h1>Contador de palavras</h1>
      <TextArea onChange={(event) => counter(event.target.value)} placeholder="Digite ou cole o conteúdo aqui" />
      <ContainerActionButtons>
        <p>Palavras: {wordsQuantity}</p>
        <p>Caracteres: {charactersQuantity}</p>
      </ContainerActionButtons>
    </Container>
  );
}
