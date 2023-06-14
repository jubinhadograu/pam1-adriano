import React, {useState, useEffect} from 'react";
import { View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from '../estilo';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Link href={'/'}>Voltar</Link>
            <Text>Cadastro de Endereço</Text>
            <TextInput
            style={styles.subtitle}
            placeholder={'00000-000'}/>
            <TouchableOpacity>
                <Text>
                    Buscar Dados
                </Text>
            </TouchableOpacity>
        </View>
    );
}