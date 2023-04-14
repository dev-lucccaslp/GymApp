import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

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

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail invalido.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 digitos.'),
  password_confirm:yup.string().required('Confirme da senha.').oneOf([yup.ref('password')], 'A confirmação da senha não confere'),
});

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormaDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.goBack();
  }

  function handleSignUp({email, name, password}: FormaDataProps) {
    try {
    
    fetch('http://192.168.11.200:3333/users', {
      method: 'POST',
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => console.log(data))


    } catch (error) {
      console.log(error)
    }
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
            
            render={({ field: { onChange, value }}) => (
              <Input
              placeholder='Nome'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
              
            />
            )}
          />

          <Controller 
            control={control}
            name='email'

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
              errorMessage={errors.password?.message}
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
              errorMessage={errors.password_confirm?.message}
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
            mt={16}
          />

      </VStack>
    </ScrollView>
  )
}