import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Movies from "../screen/Movies";
import My from "../screen/My";
import { INDIGO_COLOR, DARK_COLOR } from "../colors";
import { useColorScheme } from "react-native";
import Login from "../screen/Login";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";
    return(
        <Tab.Navigator 
        sceneContainerStyle={{
            backgroundColor: isDark ? "black" : "white"
        }}
        screenOptions={{
            tabBarLabelPosition: "beside-icon",
            headerTitleAlign: "center",
            headerTintColor: INDIGO_COLOR,
        }}>
            <Tab.Screen 
            options={{
                title: "Movies",
                tabBarLabel: "Movies",
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="movie-filter" size={size} color={color} />
                )
            }} 
            name="movies" 
            component={Movies}/>
            <Tab.Screen 
            options={{
                title: "마이페이지",
                tabBarLabel: "Mypage",
                // tabBarBadge: "1", 알림 뱃지
                tabBarIcon: ({color}) => (
                    <Ionicons name="person" size={22} color={color} />
                )
            }} 
            name="my" 
            component={My}/>
        </Tab.Navigator>
    )
};

export default Tabs;

