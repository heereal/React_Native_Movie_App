import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native";
import Detail from '../screen/Detail';
import styled from '@emotion/native';

const Stack = createNativeStackNavigator();

const One = ({ route: { params }, navigation: { navigate }}) => {
    console.log(params)
    return (
        <TouchableOpacity onPress={() => navigate("three")}>
            <Text>ONE</Text>
        </TouchableOpacity>
    )
};

const Two = ({ navigation: { setOptions }}) => {
    return (
        <TouchableOpacity onPress={() => setOptions({
        title: "제목 바꾼다!"
        })}>
        <Text>setOptions</Text>
        </TouchableOpacity>
    )
};

const Three = ({ navigation: { reset }}) => {
    return (
        <>
            {/* 'one' 페이지로 이동하고 뒤로 가기 사라짐 */}
            <TouchableOpacity onPress={() => {
                reset({
                index: 0,
                routes: [{name: 'one'}]
                });
            }}>
                <Text>reset btn1</Text>
            </TouchableOpacity>
             
            {/* 버튼 클릭하면 'two'페이지로 이동하고
                거기서 뒤로 가기 클릭하면 'one' 페이지로 이동함  */}
            <TouchableOpacity onPress={() => {
                reset({
                // index는 버튼 클릭했을 때 처음 나오는 화면이 무엇인지를 지정함
                index: 1,
                routes: [{name: 'one'}, {name: 'two'}]
                });
            }}>
                <Text>reset btn2</Text>
            </TouchableOpacity>
        </>
    )
};

const Stacks = ({ navigation: { goBack }}) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#1864ab",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => goBack()}>
                        <GoBackBtn>뒤로</GoBackBtn>
                    </TouchableOpacity>
                )
            }}
        >
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
};

export default Stacks;

const GoBackBtn = styled.Text`
    color: gray;
    font-size: 20px;
`