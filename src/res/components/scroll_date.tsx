import{
    View,
    Text,
    FlashList,
    useDispatch,
    AppDispatch,
    useSelector,
    RootState,
    TouchableOpacity,
    setSelectedDate
}from '../../exports'

const ScrollDate = () => {
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const currentDate = now.getDate();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const allDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);


const dispatch = useDispatch<AppDispatch>();
const selector = useSelector((state: RootState) => state.variables)
    return (
        <FlashList 
            data={allDays} 
            estimatedItemSize={65}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={currentDate -1}
            keyExtractor={(item) => item.toString()}
            renderItem={(item) => {
                return(
                    <TouchableOpacity onPress={() => {dispatch(setSelectedDate(item.item.toString()))}} activeOpacity={0.5}>
                        <View className='flex flex-row h-24'>
                            <View className={`w-14 ${selector.selectedDate.toString() === item.item.toString() ? 'bg-greenLight' : 'bg-blueLight'} m-3 justify-center items-center py-4 ${selector.selectedDate.toString() === item.item.toString() ? 'rounded-lg' : 'rounded-lg' }`}>
                                <Text className='text-white text-2xl'>{item.item}</Text>
                            </View>
                    </View>
                    </TouchableOpacity>
                )
        }}/>
    )
}

export default ScrollDate