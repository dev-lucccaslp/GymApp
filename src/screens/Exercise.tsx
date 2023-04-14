import { TouchableOpacity } from "react-native";
import { Box, HStack, Heading, Icon, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons'

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
    
      <VStack px={8} pt={12} bg='gray.600'>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon as={Feather} name="arrow-left" color='green.500' size={6}/>
          </TouchableOpacity>

          <HStack justifyContent='space-between' mt={4} mb={8} alignItems='center' >
            <Heading color='gray.100' fontSize='lg' fontFamily='heading' flexShrink={1}>
              Puxada Frontal
            </Heading>
            <HStack alignItems='center'>
              <BodySvg />
              <Text color='gray.200' ml={1} textTransform="capitalize">
                costas
              </Text>
            </HStack>
          </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image 
            w={'full'}
            h={80}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZqHeH0CT4aU6EjdINGKbQY4B2zwj9sd87w&usqp=CAU'}}
            alt="Nome do Exericico"
            mb={3}
            resizeMode="cover"
            rounded='lg'
          />

          <Box bg='gray.600' rounded='md' pb={4} px={4}>
            <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
              
              <HStack>
                <SeriesSvg />
                <Text color='gray.200' ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color='gray.200' ml={2}>
                  12 Repetições
                </Text>
              </HStack>
            </HStack>
            <Button 
              title="Marcar como realizado"
            />
          </Box>   
        </VStack>
      </ScrollView>
    </VStack>
  );
}