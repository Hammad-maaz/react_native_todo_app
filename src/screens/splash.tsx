import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    Dimensions,
    StackNavigationProp,
    RouteParamsList,
    useEffect,
    AppColors
}  from '../exports'


type RoutesProps = StackNavigationProp<RouteParamsList, 'splash'>
type props = {
    navigation: RoutesProps
}

const {width, height} = Dimensions.get('window')
const Splash:React.FC<props> =({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('dashboard')
        }, 1000)
    }, [])

    return(
        <View style={styles.main}>
            <Image source={require('../../assets/todo.png')} style={styles.todoImage}/>
            <Text style={styles.todoText}>Welcome To ToDo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    todoImage:{
        height: height * .15,
        width: width * .9
    },

    todoText: {
        fontSize: width * .05,
        fontWeight: 'bold',
        textAlign: 'center',
        color: AppColors.blackColor
    }
})

export default Splash