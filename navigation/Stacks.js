import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native";

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

const Stacks = () => {

    return (
        // 일괄적으로 옵션 지정
        <Stack.Navigator initialRouteName="one" screenOptions={{
            headerTintColor: "blue",
            // headerShown: false // 헤더를 감춤-safeAreaVieW까지 풀린다
            // headerBackTitle: "뒤로갈게요",
            // presentation: "modal"
        }}>
            {/* 해당 스크린에만 옵션 지정  */}
            <Stack.Screen name="one" component={One} />
            <Stack.Screen name="two" component={Two} />
            <Stack.Screen options={{presentation: "modal"}} name="three" component={Three} />
        </Stack.Navigator>
    );
};

export default Stacks;