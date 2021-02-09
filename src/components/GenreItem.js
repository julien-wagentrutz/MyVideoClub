import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight, Animated, Dimensions} from 'react-native';
import Colors from "../constants/Colors";

export const GenreItem = (props) => {
    const {genre,index, goToDetail} = props;

    return(
        <View style={styles.itemCategorie}>
            <TouchableHighlight
                style={styles.categorie}
                onPress={goToDetail}
            >
                <Text style={styles.text}  >{genre.name}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    itemCategorie: {
        width:'50%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categorie: {
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: Colors.primaryColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.85,
        shadowRadius:1.3,

        elevation: 5,
    },
    text: {
        color: Colors.primaryColor,
        fontWeight: "bold",
        fontSize: 14,
    }
})