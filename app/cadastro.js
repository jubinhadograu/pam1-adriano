import React, {useState, useEffect} from "react";
import { View, Text, TextInput, ToachableOpacity, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from '../estilo';

export default function Cadastro () {
    return (
        <View>
            <text>Cadastro de Endereço</text>
            <TextInput value={'00000-000'} />
            <ToachableOpacity>
                <Text>Buscar Dados</Text>
            </ToachableOpacity>
        </View>
    )
}