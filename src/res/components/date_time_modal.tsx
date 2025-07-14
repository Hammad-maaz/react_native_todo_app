import{
    Modal,
    View,
    RNDateTimePicker,
    Button,
    Dimensions
} from '../../exports'

const {width, height} = Dimensions.get('window')
interface DateTimePickerModelProps {
    onCofirm: ()=> void
    onCancel: ()=> void
    onChange: (text: any, date:any)=> void
    mode: string
    visible: boolean
    value: Date
}

const DateTimePickerModel:React.FC<DateTimePickerModelProps> = (props) => {

    return(
        <Modal transparent={true} visible={props.visible} animationType="fade">
            <View
                style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <View
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 20,
                    alignItems: 'center',
                    width: width * 0.9,
                }}
                >
                <RNDateTimePicker
                    mode={props.mode === 'date' ? 'date' : 'time'}
                    minimumDate={props.mode === 'date' ? new Date() : new Date(2020, 12, 31)}
                    maximumDate={new Date(2030, 11, 31)}
                    display="spinner"
                    value={props.value}
                    onChange={props.onChange}
                />
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    width: '100%',
                    }}
                >
                    <Button title="Cancel" onPress={props.onCancel} />
                    <Button title="Confirm" onPress={props.onCofirm} />
                </View>
                </View>
            </View>
        </Modal>

    )
}

export default DateTimePickerModel