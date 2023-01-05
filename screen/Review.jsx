import { useEffect } from "react";
import styled from "@emotion/native";
import { useColorScheme, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { authService } from "../firebase";

const Review = ({ navigation, route: { params: { review, from }}}) => {

    const isDark = useColorScheme() === "dark";

    const onEdit = () => {
        navigation.navigate("ReviewEdit", { review, from });
    };

    useEffect(() => {
        navigation.setOptions({
            // headerLeft: null,
            headerRight: () => {
                if (authService.currentUser) {
                    return (
                        <TouchableOpacity onPress={onEdit}>
                            <AntDesign name="edit" size={24}  color={isDark ? "white" : "black" } />
                        </TouchableOpacity>
                    )
                }
            }
        })
    }, []);

    return (
        <Container>
          <SectionTitle>평점</SectionTitle>
          <Ratings>⭐️ {review.rating} / 10</Ratings>
          <SectionTitle>제목</SectionTitle>
          <Title>{review.title}</Title>
          <SectionTitle>내용</SectionTitle>
          <Content>{review.content}</Content>
        </Container>
      );
};

export default Review;

export const Container = styled.ScrollView`
  padding: 20px;
`

export const SectionTitle = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 15px;
`

export const Ratings = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 20px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
`

export const Content = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  line-height: 30px;
`