import { View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import styled from '@emotion/native';
import Swiper from 'react-native-swiper';
import { useEffect, useState } from 'react';
import Slide from '../components/Slide';
import TopRatedCard from '../components/TopRatedCard';
import UpcomingCard from '../components/UpcomigCard';

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    const BASE_URL = "https://api.themoviedb.org/3/movie";
    const API_KEY = "fac9970ed3c9be3532413804fde88d6a";

    const getNowPlaying = async () => {
        const { results } = await fetch(
            `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        ).then((res) => res.json());
        setNowPlaying(results);
    };

    const getTopRated = async () => {
        const { results } = await fetch(
            `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        ).then((res) => res.json());
        setTopRated(results);
    };

    const getUpcoming = async () => {
        const { results } = await fetch(
            `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        ).then((res) => res.json());
        setUpcoming(results);
    };

    const getData = async () => {
        await Promise.all([getNowPlaying(), getTopRated(), getUpcoming()]);
        setIsLoading(false);
    };

    const onRefresh = async () => {
        setIsRefreshing(true);
        await getData();
        setIsRefreshing(false);
    };

    useEffect(() => {
       getData();
    }, []);

    if (isLoading) {
        return (
            <Loader>
                <ActivityIndicator size="large"/>
            </Loader>
        );
    };

    return(
        <FlatList 
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            ListHeaderComponent={
                <>
                    <Swiper height="100%" showsPagination={false} autoplay>
                        {nowPlaying.map((movie) => (
                            <Slide key={movie.id} movie={movie} />
                        ) )}
                    </Swiper>

                    <ListTitle>Top Rated Movies</ListTitle>
                    <FlatList 
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        showsHorizontalScrollIndicator={false}
                        data={topRated}
                        renderItem={({ item }) => <TopRatedCard movie={item} />}
                        keyExtractor={(item) => item.id}
                        // ItemSeparatorComponent={ <View style={{ width: 10 }} /> }
                    />
                    <ListTitle>Upcoming Movies</ListTitle>
                </>
            }
            data={upcoming}
            renderItem={({ item }) => <UpcomingCard movie={item} />}     
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={<View style={{ height: 10}} />}
        />    
    )
};

export default Movies;

const Loader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ListTitle = styled.Text`
    color: #1864ab;
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 10px 10px;
`