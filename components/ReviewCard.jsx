import React from "react";
import styled from "@emotion/native";
import { SCREEN_WIDTH } from "../util";
import { useNavigation } from "@react-navigation/native";

const ReviewCard = ({review}) => {

    const { navigate } = useNavigation();

    const goToReview = () => {
        navigate("Review", {
            review,
            from: "Detail"
        });
    };

    return (
        <Column onPress={goToReview}>
          <AbovePart>
            <ReviewDate>
                {new Date(review.createdAt).toLocaleDateString("kr")}
            </ReviewDate>
            <ReviewTitle numberOfLines={1}>{review.title}</ReviewTitle>
            <ReviewContents numberOfLines={5}>{review.content}</ReviewContents>
          </AbovePart>
          <Rating>⭐️{review.rating}/10</Rating>
        </Column>
      );
};

export default ReviewCard;

const Column = styled.TouchableOpacity`
  justify-content: space-between;
  border-width: 1px;
  border-color: ${(props) => props.theme.text};
  width: ${SCREEN_WIDTH / 2.5 + "px"};
  border-radius: 10px;
  padding: 10px;
  height: 200px;
`

const AbovePart = styled.View``

const ReviewDate = styled.Text`
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`

const ReviewTitle = styled.Text`
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
`

const ReviewContents = styled.Text`
  color: ${(props) => props.theme.text};
  /* line-height: 18px; */
  font-size: 20px;
`

const Rating = styled.Text`
  color: gray;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
`