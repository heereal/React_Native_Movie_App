import { LinearGradient } from "expo-linear-gradient";
import styled from '@emotion/native';
import { SCREEN_HEIGHT, getImagePath } from '../util';
import { StyleSheet } from "react-native";

const Slide = ({movie}) => {

    return (
        <MovieContainer>
            <BackgroundImg source={{uri: getImagePath(movie.backdrop_path)}} style={StyleSheet.absoluteFill} />
            <LinearGradient colors={["transparent", "black"]} style={StyleSheet.absoluteFill} />
            <Row>
                <MoviePoster source={{uri: getImagePath(movie.poster_path)}} />
                <MovieDesc>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieStars>⭐ {movie.vote_average}/10</MovieStars>
                    <MovieStory numberOfLines={4} >
                        {movie.overview}
                    </MovieStory>
                </MovieDesc>   
            </Row>        
        </MovieContainer>
    )

};

export default Slide;

const MovieContainer = styled.View`
    height: ${SCREEN_HEIGHT / 3 + "px"};
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const BackgroundImg = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: black;
`

const Row = styled.View`
    display: flex;
    flex-direction: row;
`

const MoviePoster = styled.Image`
    height: 170px;
    width: 120px;
    margin: 10px 10px 0 10px;
    border-radius: 5px;
`

const MovieDesc = styled.View`
    padding: 5px 5px 0 5px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 260px;
`

const MovieTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: white;
`

const MovieStars = styled.Text`
    color: white;
    font-size: 17px;
`

const MovieStory = styled.Text`
    color: white;
    font-size: 15px;
`