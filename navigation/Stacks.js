import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native";
import Detail from '../screen/Detail';
import Login from '../screen/Login';
import styled from '@emotion/native';
import { signOut } from 'firebase/auth';
import { authService } from '../firebase';
import Review from '../screen/Review';

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

const Stacks = ({ navigation: { goBack, navigate, setOptions }}) => {

    const handleAuth = () => {
      if (!!authService.currentUser?.uid) {
        signOut(authService)
            .then(() => {
                console.log("로그아웃 성공");
                setOptions({ headerRight: null });
            })
            .catch((error) => alert(error));
      }  else {
        navigate("Login");
      }
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#1864ab",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => goBack()}>
                        <GoBackBtn>뒤로</GoBackBtn>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={handleAuth}>
                        <LoginBtn>
                            {authService.currentUser ? "로그아웃" : "로그인"}
                        </LoginBtn>
                    </TouchableOpacity>
                    
                ),
            }}
        >
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
    );
};

export default Stacks;

const GoBackBtn = styled.Text`
    color: gray;
    font-size: 20px;
`

const LoginBtn = styled.Text`
    color: #1864ab;
    font-size: 20px;
`