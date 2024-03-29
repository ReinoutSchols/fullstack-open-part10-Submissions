import React from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import { Text } from 'react-native';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const styles = StyleSheet.create({
    input: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      marginBottom: 10,
      margin:20,
      padding:10,
      fontFamily: theme.fonts
    },
    background: {
      backgroundColor: "white",
      display:"flex",
    },
    button: {
      margin:10,
      padding: 10,
      fontFamily: theme.fonts
    },
    errorText: {
      color: "#d73a4a"
    },
    errorBorder: {
      borderColor: "#d73a4a"
    }
  }); 
  

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <View style={styles.background}>
          <TextInput
            placeholder="Username"
            onChangeText={handleChange('username')}
            value={values.username}
            style={[styles.input, touched.username && errors.username ? styles.errorBorder : null]}
          />
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <TextInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={true}
            style={[styles.input, touched.password && errors.password ? styles.errorBorder : null]}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <View style={styles.button}>
            <Button title="Sign in" onPress={handleSubmit}/>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;