import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import styled from '@emotion/native';

const movieImg = "https://user-images.githubusercontent.com/117061017/210341377-6f4524a5-126e-4843-922d-4b7a7c0fb8ad.jpg";

const Movies = ({ navigation: { navigate }}) => {
    return(
        <Wrap>
            <BestMovieContainer>
                <MoviePoster source={{uri: movieImg}} />
                <BestMovieDesc>
                    <MovieTitle>Coco</MovieTitle>
                    <MovieStars>⭐ 9.20/10</MovieStars>
                    <MovieStory numberOfLines={3}>
                    영원히 기억하고 싶은 황홀한 모험이 시작된다! 뮤지션을 꿈꾸는 소년 미구엘은 전설적인 가수 에르네스토의 기타에 손을 댔다 ‘죽은 자들의 세상’에 들어가게 된다. 그리고 그곳에서 만난 의문의 사나이 헥터와 함께 상상조차 못했던 모험을 시작하게 되는데… 과연 ‘죽은 자들의 세상’에 숨겨진 비밀은? 그리고 미구엘은 무사히 현실로 돌아올 수 있을까?
                    </MovieStory>
                </BestMovieDesc>           
            </BestMovieContainer>
            <Title>Top Rated Movies</Title>
            <TopRatedMovies horizontal>
                <TopRatedBox>
                    <MoviePoster source={{uri: movieImg}} />
                    <TopRatedDesc>
                        <MovieStars>⭐ 9.20/10</MovieStars>
                        <TopRatedTitle numberOfLines={1}>Coco</TopRatedTitle>
                    </TopRatedDesc>
                </TopRatedBox>
                <TopRatedBox>
                    <MoviePoster source={{uri: movieImg}} />
                    <TopRatedDesc>
                        <MovieStars>⭐ 9.20/10</MovieStars>
                        <TopRatedTitle numberOfLines={1}>Coco</TopRatedTitle>
                    </TopRatedDesc>
                </TopRatedBox>
                <TopRatedBox>
                    <MoviePoster source={{uri: movieImg}} />
                    <TopRatedDesc>
                        <MovieStars>⭐ 9.20/10</MovieStars>
                        <TopRatedTitle numberOfLines={1}>Coco</TopRatedTitle>
                    </TopRatedDesc>
                </TopRatedBox>
            </TopRatedMovies>
            <Title>Upcoming Movies</Title>
            <UpcomingMovies>
                <UpcomingMovieBox>
                    <MoviePoster source={{uri: movieImg}} />
                    <UpcomingMovieDesc>
                        <MovieTitle>Coco</MovieTitle>
                        <UpcomingMovieDate>2023-01-18</UpcomingMovieDate>
                        <UpcomingMovieStory numberOfLines={3}>
                        영원히 기억하고 싶은 황홀한 모험이 시작된다! 뮤지션을 꿈꾸는 소년 미구엘은 전설적인 가수 에르네스토의 기타에 손을 댔다 ‘죽은 자들의 세상’에 들어가게 된다. 그리고 그곳에서 만난 의문의 사나이 헥터와 함께 상상조차 못했던 모험을 시작하게 되는데… 과연 ‘죽은 자들의 세상’에 숨겨진 비밀은? 그리고 미구엘은 무사히 현실로 돌아올 수 있을까?
                        </UpcomingMovieStory>
                    </UpcomingMovieDesc>
                </UpcomingMovieBox>
                <UpcomingMovieBox>
                    <MoviePoster source={{uri: movieImg}} />
                    <UpcomingMovieDesc>
                        <MovieTitle>Coco</MovieTitle>
                        <UpcomingMovieDate>2023-01-18</UpcomingMovieDate>
                        <UpcomingMovieStory numberOfLines={3}>
                        영원히 기억하고 싶은 황홀한 모험이 시작된다! 뮤지션을 꿈꾸는 소년 미구엘은 전설적인 가수 에르네스토의 기타에 손을 댔다 ‘죽은 자들의 세상’에 들어가게 된다. 그리고 그곳에서 만난 의문의 사나이 헥터와 함께 상상조차 못했던 모험을 시작하게 되는데… 과연 ‘죽은 자들의 세상’에 숨겨진 비밀은? 그리고 미구엘은 무사히 현실로 돌아올 수 있을까?
                        </UpcomingMovieStory>
                    </UpcomingMovieDesc>
                </UpcomingMovieBox>


            </UpcomingMovies>
        </Wrap>
    )
};

export default Movies;

const Wrap = styled.ScrollView`
    display: flex;
`

const BestMovieContainer = styled.View`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-image: url(movieImg);
`

const MoviePoster = styled.Image`
    height: 170px;
    width: 120px;
    margin: 10px 10px 0 10px;
`

const BestMovieDesc = styled.View`
    padding: 5px 5px 0 5px;
    margin-top: 80px;
`

const MovieTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
`
const MovieStars = styled.Text`
    color: gray;
    font-size: 17px;
    font-weight: bold;
`

const MovieStory = styled.Text`
    color: gray;
    font-size: 15px;
    font-weight: bold;
    height: 50px;
    width: 250px;
`

const Title = styled.Text`
    color: #339af0;
    font-size: 30px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 20px;
`

const TopRatedMovies = styled.ScrollView`
    
`

const TopRatedBox = styled.View`
    width: 140px;
    // FIXME: 왜 안 되는 것??
    border-radius: 20px;
`

const TopRatedDesc = styled.View`
    background-color: #dee2e6;
    height: 60px;
    width: 120px;
    margin: 0 10px 0 10px;
    padding: 10px 10px 5px 10px;
`

const TopRatedTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: gray;
`

const UpcomingMovies = styled.View`
    
`

const UpcomingMovieBox = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`

const UpcomingMovieDesc = styled.View`
    padding: 10px 0;
`

const UpcomingMovieDate = styled.Text`
    font-size: 20px;
    color: gray;
`

const UpcomingMovieStory = styled.Text`
    color: gray;
    font-size: 20px;
    font-weight: bold;
    width: 250px;
`
