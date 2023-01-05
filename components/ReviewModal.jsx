import { useState } from "react";
import styled from "@emotion/native";
import { Modal } from "react-native";
import { Rating } from "react-native-ratings";
import { authService, dbService } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const ReviewModal = ({ movieId, isOpenModal, setIsOpenModal }) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);

    const getRating = (rating) => {
        setRating(rating);
    };

    const addReview = async () => {
        await addDoc(collection(dbService, "reviews"), {
            title,
            content,
            createdAt: Date.now(),
            rating,
            userId: authService.currentUser?.uid,
            movieId,
        });
        setIsOpenModal(false);
        setTitle("");
        setContent("");
        setRating(0);
    };

    return (
        <Modal visible={isOpenModal} transparent animationType="slide">
            <Backdrop>
                <Dialog>
                    <InputWrapper>
                        <ModalTitle>평가</ModalTitle>
                        <Rating
                            onFinishRating={getRating}
                            startingValue={0}
                            ratingCount={10}
                            imageSize={25}
                            tintColor="lightgray"
                            style={{
                                alignItems: "flex-start"
                            }}
                        />
                        <ModalTitle>제목</ModalTitle>
                        <TitleInput
                            value={title}
                            onChangeText={setTitle}
                        />
                        <ModalTitle>내용</ModalTitle>
                        <ContentInput
                            value={content}
                            onChangeText={setContent}
                            textAlignVertical="top"
                            multiline
                            maxLength={300}
                        />
                    </InputWrapper>
                    <Row style={{ justifyContent: "space-between" }}>
                        <ModalBtn 
                            title="Cancel"
                            onPress={() => setIsOpenModal(false)}
                        />
                        <ModalBtn
                            title="Add Review"
                            onPress={addReview}
                            disabled={!rating || !title || !content}
                        />
                    </Row>
                </Dialog>
            </Backdrop>
        </Modal>
    )
};

export default ReviewModal;

const TitleInput = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`

const ContentInput = styled(TitleInput)`
  min-height: 100px;
`

const ModalBtn = styled.Button``
const InputWrapper = styled.View``
const AddButton = styled.Button``

const Backdrop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Dialog = styled.KeyboardAvoidingView`
  background-color: lightgray;
  width: 80%;
  height: 70%;
  padding: 20px;
  justify-content: space-between;
  border-radius: 5px;
`

const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin-bottom: 10px;
  margin-top: 10px;
`

const Row = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`