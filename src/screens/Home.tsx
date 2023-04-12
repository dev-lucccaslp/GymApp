import { useState } from "react";
import { HStack,VStack, FlatList, Heading, Text } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [ groups, setGroups ] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro'])
  const [ exercises, setExercises ] = useState(['Puxada frontal', 'Remada Curva', 'Remada unilateral', 'Levantamento terras']);
  const [ groupSelected, setGroupSelected ] = useState('costas');


  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item }) => (
          <Group 
            name={item} 
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 8}}
        my={10}
        maxHeight={10}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading 
            color='gray.200'
            fontSize='md'
          >
            Exercicios
          </Heading >
          <Text
            color='gray.200'
            fontSize='sm'
          >
            {exercises.length}
          </Text>
        </HStack>

        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard
              name={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
        />

      </VStack>
    </VStack>
  );
}