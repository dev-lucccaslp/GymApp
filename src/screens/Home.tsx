import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { HStack,VStack, FlatList } from "native-base";
import { useState } from "react";

export function Home() {
  const [ groups, setGroups ] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro'])
  const [ groupSelected, setGroupSelected ] = useState('costa');


  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item }) => (
          <Group 
            name={item} 
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 8}}
        my={10}
        maxHeight={10}
      />

    </VStack>
  );
}