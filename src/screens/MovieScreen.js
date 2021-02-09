import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import Colors from "../constants/Colors";
import {getAllGenre, getMovie} from "../services/movie";

export const MovieScreen = (props) => {
    const {movieId} = props;
    const [movie, setMovie] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    if(!isLoading) {
        getMovie(props.route.params.id)
            .then(
                (data) => {
                    setMovie(data)
                    setIsLoading(true)
                }
            )
    }

    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.topHeader}>
                            <Image
                                source={{uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}}
                                style={styles.poster}
                            />
                    </View>
                    <View style={styles.bottomHeader}>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.synop}>Synopsis</Text>
                    <ScrollView style={styles.containerText}>
                        <Text style={styles.description}>
                            {movie.overview}
                        </Text>
                    </ScrollView>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex:6,
        width:'100%',
    },
    content: {
        flex:4,
        width:'100%',
        padding: 20,
    },
    topHeader: {
        flex:8,
        width:'100%',
        backgroundColor: '#fff'
    },
    bottomHeader: {
        flex:2,
        width:'100%',
    },
    poster: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
    },
    synop: {
        fontSize: 24,
        color: Colors.secondaryColor,
        marginBottom:40,
    },
    containerText: {
        height: 200,
    },
    description: {
        fontSize: 18,
        color: Colors.secondaryColor,
    }
})