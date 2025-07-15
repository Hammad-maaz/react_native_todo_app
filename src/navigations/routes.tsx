import { createStackNavigator } from "@react-navigation/stack"
import Splash from "../screens/splash"
import Dashboard from "../screens/dashboard"
import addTodo from "../screens/add_todo"


export type RouteParamsList = {
    'splash': undefined,
    'dashboard': undefined,
    'addTodo': undefined,
}

const Stack = createStackNavigator<RouteParamsList>()
const Routes:React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="dashboard" component={Dashboard} />
            <Stack.Screen name="addTodo" component={addTodo}/>
        </Stack.Navigator>
    )
}

export default Routes