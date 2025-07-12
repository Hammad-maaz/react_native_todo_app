import{
    AppColors,
    RootState,
    StyleSheet,
    Text,
    TextInput,
    useSelector,
    View,
} from "../../exports"

interface MyTextInputProps {
    placeholder: string,
    value: any,
    onChangeText: (text: any) => void,
    className: string,
}
const MyTextInput:React.FC<MyTextInputProps> = (props) => {
    const selector = useSelector((state: RootState) => state.variables)

    return(
        <View>
           <TextInput className={props.className} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} selectionColor={AppColors.blackColor}/>
        </View>
    )
}
export default MyTextInput
const defaultStyle = StyleSheet.create({
  input: {
  }
});