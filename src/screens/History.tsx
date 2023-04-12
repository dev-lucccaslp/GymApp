import { HistoryCard } from "@components/HisotryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack} from "native-base";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercicios"/>

      <HistoryCard />
    </VStack>
  );
}