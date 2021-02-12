import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight, Animated, Dimensions} from 'react-native';
import Colors from "../constants/Colors";
import {getAllMovieByGenre, getDirectorMovie} from "../services/movie";

export const MovieItem = (props) => {
    const {movieId,index, goToDetail, navigation} = props;
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
                        <View style={styles.blockImage}>
                            <Image
                                source={{uri: `https://image.tmdb.org/t/p/original${movieId.poster_path}`}}
                                style={styles.poster}
                            />
                        </View>

                    </View>
                    <View style={styles.rightContainer} >
                        <View style={styles.leftContent}>
                            <Text style={styles.text}  >{movieId.title}</Text>
                            <Text style={styles.textLittle}  >{movieId.release_date}</Text>
                            <Text style={styles.textLittle}  >{isLoading ? movieDirector.name: ''}</Text>
                        </View>
                        <View style={styles.rightContent}>
                            <Text style={styles.textNote}  >{movieId.vote_average}</Text>
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
        color: Colors.secondaryColor,
        fontWeight: "bold",
        fontSize: 16,
    },
    textLittle: {
        color: Colors.secondaryColor,
        fontWeight: "bold",
        fontSize: 14,
    },
    leftContainer:{
        flex: 2,
        justifyContent: 'flex-start'
    },
    rightContainer: {
        flex: 6,
        flexDirection: 'row',
    },
    globalContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    blockImage: {
        width:'100%',
        height:'100%',
        justifyContent:'flex-start'
    },
    poster: {
        height: '100%',
        width:'100%',
        resizeMode: 'contain',
    },
    leftContent: {
      flex:6,
        justifyContent: 'center',
        paddingLeft: 15
    },
    rightContent: {
        flex:2,
        justifyContent: 'center',
        color: Colors.primaryColor,
    },
    textNote: {
        color: Colors.primaryColor,
        fontWeight: "bold",
        fontSize: 16,
    },
})