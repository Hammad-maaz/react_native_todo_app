import {
    StackNavigationProp,
    RouteParamsList,
    Dimensions,
    SafeAreaView,
    View,
    MaterialIcons,
    MyTextInput,
    AppColors,
    useSelector,
    useDispatch,
    AppDispatch,
    RootState,
    setTodoTitle
} from '../exports'


type RouteProps = StackNavigationProp<RouteParamsList, 'dashboard'>
type props = {
    navigation: RouteProps
}

const {width, height} = Dimensions.get('window')
const Dashboard:React.FC<props> = ({navigation}) => {
    const selector = useSelector((state: RootState) => state.variables)
    const disatch = useDispatch<AppDispatch>()

    return(
        <SafeAreaView className='flex-1 flex-col mx-3 my-5 justify-between'>
            <View className='flex-row justify-between items-center'>
                <MyTextInput 
                    placeholder="Search ToDo" 
                    value={selector.todoTitle} 
                    onChangeText={(text)=> {disatch(setTodoTitle(text))}} 
                    className="w-80 h-14 border-grayColor border-2 rounded-lg px-3 py-1 text-2xl placeholder:text-grayColor text-blackColor" />
                <View className='justify-center items-center bg-blueColor opacity-30 w-[45px] h-[45px] rounded-full'>
                    <MaterialIcons name="add" size={width * .1} color={AppColors.whiteColor} onPress={() => {navigation.navigate('addTodo')}}/>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Dashboard