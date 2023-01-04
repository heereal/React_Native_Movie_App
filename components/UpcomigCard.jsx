import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { getImagePath } from '../util';

const UpcomingCard = ({movie}) => {
    const { navigate } = useNavigation();

    return (
        <UpcomingMovieBox
            onPress={() => navigate("Stacks", {
                screen: "Detail",
                params: { movieId: movie.id }
            })}
        >
            <MoviePoster source={{uri: getImagePath(movie.poster_path)}} />
            <UpcomingMovieDesc>
                <UpcomingTitle numberOfLines={1}>{movie.title}</UpcomingTitle>
                <UpcomingMovieDate>{movie.release_date}</UpcomingMovieDate>
                <UpcomingMovieStory numberOfLines={4}>
                    {movie.overview}
                </UpcomingMovieStory>
            </UpcomingMovieDesc>
        </UpcomingMovieBox>
    )
};

export default UpcomingCard;

const UpcomingMovieBox = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
`

const MoviePoster = styled.Image`
    height: 170px;
    width: 120px;
    margin: 10px 10px 0 10px;
    border-radius: 5px;
`

const UpcomingMovieDesc = styled.View`
    padding: 10px 0 10px 5px;
    width: 250px;
    display: flex;
    justify-content: center;
`

const UpcomingTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: gray;
`

const UpcomingMovieDate = styled.Text`
    font-size: 20px;
    color: gray;
`

const UpcomingMovieStory = styled.Text`
    color: gray;
    font-size: 20px;
`