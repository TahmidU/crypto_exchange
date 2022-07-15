import { ButtonStyle, Container } from "./styles";
import { ReactElement, useState } from "react";

import { ITradingPair } from "types/currency";

interface ITradingPairsProps {
  tradingPairs: ITradingPair[];
  onClick?: (selectedPair: string) => void;
}

export default function TradingPairs({
  tradingPairs,
  onClick,
}: ITradingPairsProps): ReactElement {
  const [selectedPairs, setSelectedPairs] = useState(tradingPairs[0].name);

  function onPairClicked(selectedPair: string) {
    setSelectedPairs(selectedPair), onClick?.(selectedPair);
  }

  return (
    <Container>
      {tradingPairs.map((_tPairs, index) => (
        <ButtonStyle
          key={index}
          title={_tPairs.name}
          onClick={() => onPairClicked(_tPairs.name)}
          selected={selectedPairs === _tPairs.name}
        />
      ))}
    </Container>
  );
}
