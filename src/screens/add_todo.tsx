import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('window')
const addTodo:React.FC = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('')

    return(
        <View style={styles.main}>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: width * .02,
    }
})

export default addTodo