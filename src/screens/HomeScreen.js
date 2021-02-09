import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList ,SafeAreaView,Image } from 'react-native';
import Colors from "../constants/Colors";
import {getAllGenre} from "../services/movie";
import {GenreItem} from "../components/GenreItem";



export const HomeScreen = ({ navigation }) => {

    const [filmsGenre, setfilmsGenre] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    if(!isLoading) {
        getAllGenre()
            .then(
                (data) => {
                    setfilmsGenre(data)
                    setIsLoading(true)
                }
            )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
            </View>
            <View style={styles.content}>
                {isLoading &&
                <FlatList
                    numColumns={2}
                    data={filmsGenre.genres}
                    renderItem={({item, index}) => <GenreItem
                        index={index}
                        genre={item}
                        goToDetail={() => navigation.navigate('Detail', {title: item.name, id: item.id})}
                    />}
                    keyExtractor={item => item.id.toString()}
                />
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 3,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex:7,
        width:'100%',
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor:Colors.primaryColor,
        borderWidth: 8,
    }

})