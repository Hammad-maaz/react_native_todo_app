import {
    AppColors,
    Dimensions,
    MaterialIcons,
    StyleSheet,
    Text,
    View
} from '../../exports'


const {width, height} = Dimensions.get('window')
interface DateOrTimeProps {
    onPress: () => void,
    text: string,
    icon: string
}

const DateOrTime:React.FC<DateOrTimeProps> = (props) => {
    return(
        <View style={styles.main}>
            <Text style={styles.text} onPress={props.onPress}>{props.text}</Text>
            <MaterialIcons name={props.icon} size={width * .055} color={AppColors.blackColor} onPress={props.onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: AppColors.blackColor,
        opacity: .4,
        borderRadius: width * .03,
        width: width * .95,
        height: height * .055,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * .03,
    },

    text: {
        fontSize: width * .04,
        color: AppColors.grayColor,
        opacity: .7,
        fontWeight: '600'
    }
})

export default DateOrTime