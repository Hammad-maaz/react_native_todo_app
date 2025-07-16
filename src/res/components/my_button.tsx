import{
    Text,
    TouchableOpacity,
    View
} from '../../exports'

interface MyButtonProps{
    buttonName: string,
    onPress: () => void
}
const MyButton:React.FC<MyButtonProps> = (props) => {
    return(
        <TouchableOpacity activeOpacity={0.6} className='items-center mt-16' onPress={props.onPress}>
            <View className='h-14 w-52 bg-blueLight rounded-lg justify-center items-center'>
                <Text className='text-white text-2xl'>{props.buttonName}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default MyButton