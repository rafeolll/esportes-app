
import { View } from "react-native";
import { Text, TextInput, Button, Surface } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, setDoc, doc } from "firebase/firestore";
 
export default function RegisterScreen({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");
    const [erro, setErro] = useState({
      email: false,
      senha: false,
      repetirSenha: false,
    });
 
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
 
 
    function realizaRegistro(){
      console.log("Fazer Registro");
    if (email === "") {
      setErro({ ...erro, email: true });
      return;
    }
    setErro({ ...erro, email: false });
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return;
    }
    setErro({ ...erro, senha: false });
    if (repetirSenha === "") {
      setErro({ ...erro, repetirSenha: true });
      return;
    }
    setErro({ ...erro, repetirSenha: false });
 
   
    if (senha !== repetirSenha) {
      setErro({ ...erro, senha: true, repetirSenha: true });
      return;
    }
    setErro({ ...erro, senha: false, repetirSenha: false });
 
 
    navigation.navigate("Login");
    cadastrarNoFirebase();
   
     
    }
 
    async function cadastrarNoFirebase(){
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log("Usuário cadastrado", user);
 
        const collectionRef = collection(db, "usuarios");
 
        await setDoc(
          doc(collectionRef,user.uid),
          {
           email: email,
           senha: senha,
          }
        );
 
        navigation.navigate("Login");
      }catch(error){
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Email já está cadastrado.");
 
        }else{
          setErrorMessage("Error ao cadstrar usuário"+error.message);
        }
        showModal();
      }
    }
 
    return(
      <Surface style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineSmall">Faça seu Registro</Text>
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          error={erro.email}
        />
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
          error={erro.senha}
        />
        <TextInput
          placeholder="Repita sua senha"
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry
          style={styles.input}
          error={erro.repetirSenha}
        />
        <Button onPress={realizaRegistro} mode="outlined">
          Registrar
        </Button>
        <Button onPress={() => navigation.navigate("Login")}>
          Voltar ao login
        </Button>
      </View>
    </Surface>
    );
}