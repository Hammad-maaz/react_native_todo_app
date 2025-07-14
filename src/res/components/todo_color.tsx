import { use } from 'react'
import {
    AppColors,
    Dimensions,
    MaterialIcons,
    RootState,
    TouchableOpacity,
    useSelector,
    View
}from '../../exports'

const {width} = Dimensions.get('window')
const TodoColor:React.FC<{color: string, onPress: () => void}> = (props) => {
    const selector = useSelector((state: RootState) => state.variables)

    return(
        <TouchableOpacity onPress={props.onPress}>
            <View className={`h-12 w-12 rounded-full items-center justify-center mr-6 ${props.color}`}>
                {props.color === selector.todoColor && <MaterialIcons className='absolute' name='check' size={width * .07} color={AppColors.whiteColor}/>}
            </View>
        </TouchableOpacity>
    )
}

export default TodoColor