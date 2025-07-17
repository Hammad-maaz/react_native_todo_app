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
    setSearch,
    Text,
    FlashList,
    TouchableOpacity,
    Swipeable,
    useEffect,
    getAllTodos,
    updateTodo,
    deleteTodo,
    TodoSchema,
    ScrollDate,
} from '../exports'


type RouteProps = StackNavigationProp<RouteParamsList, 'dashboard'>
type props = {
    navigation: RouteProps
}

const {width} = Dimensions.get('window')
const Dashboard:React.FC<props> = ({navigation}) => {
    const selector = useSelector((state: RootState) => state.variables)
    const todo = useSelector((state: RootState) => state.todo)
    const disatch = useDispatch<AppDispatch>()

    const handleGetTodod = async () => {
     const fetchAllTodo = await getAllTodos();
    disatch(updateTodo(fetchAllTodo))
  };

    useEffect(() => {
        handleGetTodod()
    }, [selector.selectedDate, selector.search])


    return(
        <SafeAreaView className='flex-1 flex-col mx-3 my-5 justify-between'>

            {/* SEARCH & ADD */}
            <View className='flex-row justify-between items-center mb-10'>
                <MyTextInput 
                    placeholder="Search ToDo" 
                    value={selector.search} 
                    onChangeText={(text)=> {disatch(setSearch(text))}} 
                    className="w-80 h-14 border-grayColor border-2 rounded-lg px-3 py-1 text-2xl placeholder:text-grayColor text-blackColor" />
                <View className='justify-center items-center bg-blueLight w-[45px] h-[45px] rounded-full'>
                    <MaterialIcons name="add" size={width * .1} color={AppColors.whiteColor} onPress={() => {navigation.navigate('addTodo'); disatch(setSearch(''))}}/>
                </View>
            </View>

            {/* CURRENT MONTH DATES */}
            <ScrollDate />


            {/* ALL TODO'S */}
            {todo.value.length > 0
                ? <FlashList
                data={todo.value}
                estimatedItemSize={100}
                renderItem={({ item }: { item: any }) => {
                    const filteredSearch = item.todoTitle.toLowerCase().includes(selector.search.toLowerCase())
                    const filteredData = item.todoDate.split(" ")[1].toString().split(",")[0].toString() === selector.selectedDate.toString()

                    if(!filteredSearch ||  !filteredData ) {
                        return (
                            <View className='flex-1 flex-col justify-center items-center h-96'>
                                <Text className='text-2xl font-bold text-blackColor'>No ToDo Found!</Text>
                            </View>
                        )
                    }
                    const renderRightActions = () => (
                    <TouchableOpacity
                        className="h-32 bg-red-600 justify-center items-center w-20 rounded-tr-xl rounded-br-xl ml-2"
                        onPress={() => {
                            deleteTodo(item.id)
                            const updatedTodos = todo.value.filter((todo: TodoSchema) => todo.id !== item.id)
                            disatch(updateTodo(updatedTodos));
                        }}
                    >
                        <Text className="text-white font-bold">Delete</Text>
                    </TouchableOpacity>
                    );

                    return (
                    <Swipeable renderRightActions={renderRightActions}>
                        <View className={`h-32 w-full ${item.todoColor} rounded-xl p-2 mb-8`}>
                        <Text className="text-whiteColor font-bold text-2xl mb-2">
                            {item.todoTitle}
                        </Text>
                        <Text className="text-whiteColor font-bold text-xl">
                            {item.todoDescription}
                        </Text>

                        <View className="flex-row justify-between items-end mt-auto">
                            <Text className="text-whiteColor font-bold text-md">
                            {item.todoDate}
                            </Text>
                            <View className="flex-col items-end">
                            <Text className="text-whiteColor font-bold text-md">
                                {item.todoTime}
                            </Text>
                            </View>
                        </View>
                        </View>
                    </Swipeable>
                    );
                }}
            />
                : <View className='flex-1 flex-col justify-center items-center'>
                    <Text className='text-2xl font-bold text-blackColor'>No ToDo Found!</Text>
                  </View>}
            
        </SafeAreaView>
    )
}

export default Dashboard