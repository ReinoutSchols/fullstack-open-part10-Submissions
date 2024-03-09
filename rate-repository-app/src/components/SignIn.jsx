import React from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
const SignIn = () => {
  const onSubmit = (values) => {
    console.log('Form Values:', values);
  };

  const styles = StyleSheet.create({
    input: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      marginBottom: 10,
      margin:20,
      padding:10,
      fontFamily: theme.fonts.main
    },
    background: {
      backgroundColor: "white",
      display:"flex",
    },
    button: {
      margin:10,
      padding: 10,
      fontFamily: theme.fonts.main
    }
  });

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.background}>
          <TextInput
            placeholder="Username"
            onChangeText={handleChange('username')}
            value={values.username}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.button}>
            <Button title="Sign in" onPress={handleSubmit}/>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;