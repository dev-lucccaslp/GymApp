import { ScrollView, VStack, Center } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>

      <ScrollView>
        <Center mt={10} px={10}>
          <UserPhoto
            source={{uri: 'https://github.com/dev-lucccaslp.png'}}
            alt="Foto do usuário"
            size={33}
          />

        </Center>
      </ScrollView>
    </VStack>
  );
}