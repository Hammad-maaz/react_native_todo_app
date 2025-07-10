import { TextInput } from "react-native-gesture-handler"

interface MyTextInputProps {
    placeholder: string,
    value: any,
    onChangeText: (text: any) => void
}
const MyTextInput:React.FC<MyTextInputProps> = (props) => {
    return(
        <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText}/>
    )
}
export default MyTextInput