import { HStack, Heading, VStack, Text, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native"

import { UserPhoto } from "./UserPhoto";

import { useAuth } from "@hooks/useAuth";

import defaultUserProfile from '@assets/userPhotoDefault.png'

export function HomeHeader() {
  const { user } = useAuth()
  
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto 
        size={16}
        alt="Imagem do usuário"
        source={user.avatar? { uri: user.avatar } : defaultUserProfile }
        mr={4}
      />
      
      <VStack flex={1}>
        <Text color="gray.100" fontSize='md'>
          Olá, 
        </Text>

        <Heading color="gray.100" fontSize='md'fontFamily='heading'>
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color='gray.200'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}