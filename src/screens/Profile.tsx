import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView, VStack, Center, Skeleton, Text, Heading } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import * as ImagePicker from 'expo-image-picker';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://github.com/dev-lucccaslp.png');

  async function handleUserPhotoSelect(){
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
      base64:true,
    });

    if(photoSelected.canceled){
      return;
    }

    setUserPhoto(photoSelected.assets[0].uri)
  } 

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>

      <ScrollView contentContainerStyle={{paddingBottom: 36}}>
        <Center mt={10} px={10}>
        { 
          photoIsLoading ?
            <Skeleton 
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded='full'
              startColor="gray.500"
              endColor= "gray.400"
            />
            :
            <UserPhoto
              source={{uri: userPhoto}}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />        
        }

        <TouchableOpacity onPress={handleUserPhotoSelect}>
          <Text color='green.500' fontWeight='bold' fontSize='md' mt={2} mb={8}>
            Alterar foto
          </Text>
        </TouchableOpacity>

        <Input 
          placeholder="Nome"
          bg='gray.600'
        />
        <Input 
          bg='gray.600'
          placeholder="E-mail"
          isDisabled
        />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color='gray.200' fontSize='md' mb={2} mt={12}>
            Aletrar senha
          </Heading>

          <Input 
            bg='gray.600'
            placeholder="senha antiga"
            secureTextEntry
          />
          <Input 
            bg='gray.600'
            placeholder="Nova senha"
            secureTextEntry
          />

          <Input 
            bg='gray.600'
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button 
            title="Atualizar"
            mt={4}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}