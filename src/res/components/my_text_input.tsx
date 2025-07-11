import{
    AppColors,
    StyleSheet,
    TextInput,   
} from "../../exports"

interface MyTextInputProps {
    placeholder: string,
    value: any,
    onChangeText: (text: any) => void,
    style: any
}
const MyTextInput:React.FC<MyTextInputProps> = (props) => {
    return(
        <TextInput style={[defaultStyle.input, props.style]} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} cursorColor={AppColors.blackColor}/>
    )
}
export default MyTextInput
const defaultStyle = StyleSheet.create({
  input: {
  }
});