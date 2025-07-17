import {
    View,
    Text, 
    Image, 
    Dimensions,
    StackNavigationProp,
    RouteParamsList,
    useEffect
}  from '../exports'
import { createTable } from '../res/database/sqlite'


type RoutesProps = StackNavigationProp<RouteParamsList, 'splash'>
type props = {
    navigation: RoutesProps
}

const {width, height} = Dimensions.get('window')
const Splash:React.FC<props> =({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            createTable()
            navigation.replace('dashboard')
        }, 1000)
    }, [])

    return(
        <View className='flex-1 flex-col justify-center items-center'>
            <Image className='h-[20%] w-[100%]' source={require('../../assets/todo.png')}/>
            <Text className={`text-2xl font-bold align-center text-blackColor`}>Welcome To ToDo</Text>
        </View>
    )
}

export default Splash