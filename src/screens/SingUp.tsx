import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormaDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormaDataProps>();
  
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.goBack();
  }

  function handleSignUp({email, name, password, password_confirm}: FormaDataProps) {
    console.log({email, name, password, password_confirm})
  }

  return (
    <ScrollView
     contentContainerStyle={{flexGrow: 1}} 
     showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize='sm'>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily='heading'>
            Crie sua conta
          </Heading>

          <Controller 
            control={control}
            name='name'
            rules={{
              required:'Informe o nome.'
            }}
            render={({ field: { onChange, value }}) => (
              <Input
              placeholder='Nome'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
              isInvalid
            />
            )}
          />

          <Controller 
            control={control}
            name='email'
            rules={{
              required:'Informe o e-mail.',
              pattern: {
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            }}
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name='password'
            render={({ field: { onChange, value }}) => (
              <Input
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
            )}
          />
          
          <Controller 
            control={control}
            name='password_confirm'
            render={({ field: { onChange, value }}) => (
              <Input
              placeholder='Confirme a Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType='send'
            />
            )}
          />



          <Button 
            title='Criar e acessar'
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

          <Button 
            title='Voltar para o login' 
            variant="outline"
            onPress={handleNavigation}
            mt={24}
          />

      </VStack>
    </ScrollView>
  )
}