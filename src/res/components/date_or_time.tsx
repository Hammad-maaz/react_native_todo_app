import {
    AppColors,
    Dimensions,
    MaterialIcons,
    Text,
    View
} from '../../exports'

const {width, height} = Dimensions.get('window')
interface DateOrTimeProps {
    onPress: () => void,
    text: string,
    icon: string,
}

const DateOrTime:React.FC<DateOrTimeProps> = (props) => {
    return(
        <View className='flex-row justify-between items-center border-grayColor border-2 rounded-lg px-3 py-1 h-14'>
            <Text className={`w-[90%] text-2xl ${props.text === 'Select Date' || props.text === 'Select Time' ? 'text-grayColor' : 'text-blackColor'}`} onPress={props.onPress}>{props.text}</Text>
            <MaterialIcons name={props.icon} size={width * .055} color={AppColors.blackColor} onPress={props.onPress}/>
        </View>
    )
}


export default DateOrTime