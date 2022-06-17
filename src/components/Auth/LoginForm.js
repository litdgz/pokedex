import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"

import { user, userDetails } from '../../utils/userDB'

export default function LoginForm() {
    const [error, setError] = useState("")

    const formik = useFormik({
        initialValues: inicialValues(),
        validateOnChange: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            setError('')
            const { username, password } = formValue;

            if (username !== user.username || password !== user.password) {
                setError("el usuario o contraseña no son correctos")
            } else {
                console.log("Login correcto")
                console.log(userDetails)
            }
        },
    }) 
  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput 
      placeholder='Nombre de usuario'
      style={styles.input}
      autoCapitalize="none"
      value={formik.values.username}
      onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput 
      placeholder="Contraseña"
      style={styles.input}
      autoCapitalize="none"
      secureTextEntry={true}
      value={formik.values.password}
      onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button 
      title="Entrar"
      onPress={() => formik.handleSubmit()}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>

    </View>
  )
}

function inicialValues() {
    return{
        username: "",
        password: ""
    }

}

function validationSchema() {
    return {
        username: Yup.string().required("El usuario es Obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20
    }

})