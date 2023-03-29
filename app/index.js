import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";
import styles from '../estilo';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Olá Mundo!</Text>
        <Text style={styles.subtitle}>SMT</Text>
        <Link href={"/cadastro"}>CADASTRO</Link>     
      </View>
    </View>
  );
}