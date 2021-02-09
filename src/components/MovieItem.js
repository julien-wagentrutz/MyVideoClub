import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight, Animated, Dimensions} from 'react-native';
import Colors from "../constants/Colors";
import {getAllMovieByGenre, getDirectorMovie} from "../services/movie";

export const MovieItem = (props) => {
    const {movieId,index, goToDetail} = props;
    const [isLoading,setIsLoading] = useState(false)
    const [movieCrew,setMovieCrew] = useState('')
    const [movieDirector,setMovieDirector] = useState('')
    console.log(movieId)
    if(!isLoading)
    {
        getDirectorMovie(movieId.id)
            .then(data => {
                setMovieCrew(data)
                if(movieCrew)
                {
                    for(let i = 0;i < movieCrew.crew.length; i++)
                    {
                        if(movieCrew.crew[i].job == 'Director')
                        {
                            setMovieDirector(movieCrew.crew[i])
                            setIsLoading(true)
                            i = movieCrew.crew.length
                        }
                    }
                    setIsLoading(true)
                }

            })
    }

    return(
        <View style={styles.itemCategorie}>
            <TouchableHighlight
                style={styles.categorie}
                onPress={goToDetail}
            >
                <View style={styles.globalContainer}>
                    <View style={styles.leftContainer}>
                        <Image
                            source={{uri: `https://image.tmdb.org/t/p/original${movieId.poster_path}`}}
                            style={styles.poster}
                        />
                    </View>
                    <View style={styles.rightContainer} >
                        <View>
                            <Text style={styles.text}  >{movieId.title}</Text>
                            <Text style={styles.text}  >{movieId.release_date}</Text>
                            <Text style={styles.text}  >{isLoading ? movieDirector.name: ''}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}  >{movieId.vote_average}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    itemCategorie: {
        width:'100%',
        height: 150,
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
    },
    leftContainer:{
        flex: 2,
        justifyContent: 'flex-start'
    },
    rightContainer: {
        flex: 6,
    },
    globalContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    poster: {
        height: '100%',
        resizeMode: 'contain',
        postition: 'absolute',
        left: '0px',
    }
})