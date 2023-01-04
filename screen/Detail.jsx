import { useEffect, useState } from "react";
import { View, Text, Linking, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import styled from "@emotion/native";
import { getImagePath, SCREEN_HEIGHT } from "../util";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons'; 

const Detail = ({ navigation: { navigate }, route: { params: { movieId }}}) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const API_KEY = "fac9970ed3c9be3532413804fde88d6a";
    const BASE_URL = "https://api.themoviedb.org/3/movie"

    const getDetail = async () => {
        const response = await fetch(
            `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
        ).then((res) => res.json());

        setData(response)
        setIsLoading(false);
    };

    const openYoutube = async (key) => {
        const url = `https://www.youtube.com/watch?v=${key}`;
        await Linking.openURL(url);
    }

    useEffect(() => {
        getDetail();
    }, []);

    if (isLoading) {
        return (
            <Loader>
                <ActivityIndicator size="large"/>
            </Loader>
        );
    };

    return (
        <ScrollView>
            <DetailMovie>
                <BackgroundImg source={{uri: getImagePath(data.backdrop_path)}} style={StyleSheet.absoluteFill} />
                <LinearGradient colors={["transparent", "black"]} style={StyleSheet.absoluteFill} />
                <MovieDesc>
                    <MovieTitle numberOfLines={1}>{data.original_title}</MovieTitle>
                    <MovieOverview numberOfLines={3}>{data.overview}</MovieOverview>
                </MovieDesc>
            </DetailMovie>
            <YoutubeList>   
                {data.videos.results.map((you) => (
                    <YoutubeLink key={you.id} onPress={() => openYoutube(you.key)}>
                        <AntDesign name="youtube" size={24} color="black" />
                        <YoutubeTitle>{you.name}</YoutubeTitle>
                    </YoutubeLink>
                ))}
            </YoutubeList>
        </ScrollView>
    )

};

export default Detail;

const Loader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const DetailMovie = styled.View`
    height: ${SCREEN_HEIGHT / 3 + "px"};
    display: flex;
    justify-content: flex-end;
`

const BackgroundImg = styled.Image`
    width: 100%;
    height: 100%;
`

const MovieDesc = styled.View`
    padding: 0 20px 15px 10px;
`

const MovieTitle = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`

const MovieOverview = styled.Text`
    color: gray;
    font-size: 20px;
`

const YoutubeList = styled.View`
    width: 95%;
    padding: 15px;
`

const YoutubeLink = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    padding: 5px 0;
`

const YoutubeTitle = styled.Text`
    font-size: 22px;
    margin-left: 10px;
`