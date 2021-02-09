import React, { useState } from 'react';
import {FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity,ActivityIndicator, View} from 'react-native';
import Colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import {getAllGenre, getAllMovieByGenre} from "../services/movie";
import {GenreItem} from "../components/GenreItem";
import {MovieItem} from "../components/MovieItem";


export default class DetailScreen extends React.Component {

    state = {
        filmsState: [],
        isLoading: false
    }

    page;
    genre;
    totalPages;

    constructor(props) {
        super(props);
        this.genre = this.props.route.params.id
        this.page = 0;
        this.totalPages = 0;
        this._loadFilms();

    }

    _loadFilms = () => {
        getAllMovieByGenre(this.genre, this.page + 1)
            .then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({filmsState: [...this.state.filmsState, ...data.results], isLoading: false});
            })
    }

    _renderResult = () => {
        if (this.state.filmsState.length > 0) {
            return <View style={styles.mainContainer}>
                <FlatList
                    data={this.state.filmsState}
                    renderItem={({item, index}) => <MovieItem movieId={item} index={index} goToDetail={() => this.props.navigation.navigate('Movie', {title: item.title, id: item.id})} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms();
                        }
                    }}
                    style={styles.listContainer}
                />
            </View>
        }

        return <View style={styles.no_found_container}><Text style={styles.text_no_result}>Aucun film n'a été chargé.</Text></View>
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.props.navigation.goBack} style={styles.backButton}>
                        <Ionicons name="arrow-back-outline" size={42} color={Colors.secondaryColor}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.props.route.params.title}</Text>
                </View>
                <View style={styles.content}>
                    {this._renderResult()}
                    { this.state.isLoading ?
                        <View style={styles.loading_container}>
                            <ActivityIndicator size='large' color={'#000'} />
                        </View>
                        : null
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex:2,
        width: '100%',
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex:8,
        width:'100%',
        marginTop: 25,
    },
    backButton: {
        position: 'absolute',
        left: 35,
        top: 75,
    },
    text: {
        color: Colors.secondaryColor,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 25,
    },
    mainContainer: {
        width:'100%',
        flex:1
    },
    listContainer: {
        flex:1,
        width: '100%',
    }

})