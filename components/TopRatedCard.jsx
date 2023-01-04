import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { getImagePath } from '../util';

const TopRatedCard = ({movie}) => {
    const { navigate } = useNavigation(); 

    return (
        <TopRatedBox
            onPress={() => navigate("Stacks", {
                screen: "Detail",
                params: { movieId: movie.id }
            })}
        >
            <MoviePoster source={{uri: getImagePath(movie.poster_path)}} borderBottomLeftRadius={0} borderBottomRightRadius={0}/>
            <TopRatedDesc>
                <MovieStars style={{color: "gray"}}>⭐ {movie.vote_average}/10</MovieStars>
                <TopRatedTitle numberOfLines={1}>{movie.title}</TopRatedTitle>
            </TopRatedDesc>
        </TopRatedBox>
    )
};

export default TopRatedCard;


const TopRatedBox = styled.TouchableOpacity`
    width: 140px;
    // FIXME: 왜 안 되는 것??
    /* border-radius: 10px; */
`

const MoviePoster = styled.Image`
    height: 170px;
    width: 120px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const TopRatedDesc = styled.View`
    background-color: #dee2e6;
    height: 60px;
    width: 120px;
    padding: 10px 10px 5px 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

const MovieStars = styled.Text`
    color: white;
    font-size: 17px;
`

const TopRatedTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: gray;
`