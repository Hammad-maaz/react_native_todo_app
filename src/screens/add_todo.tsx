import{
    StyleSheet,
    DateTimePickerModel,
    View,
    useDispatch,
    AppDispatch,
    setDateModal,
    setTimeModal,
    MyTextInput,
    AppColors,
    Text,
    useSelector,
    RootState,
    setTodoTitle,
    Dimensions,
    DateOrTime,
    setTodoDate,
    setTodotime,
    MyButton,
    addTodo
} from '../exports'

const {width, height} = Dimensions.get('window')
const AddToDo:React.FC = () => {
    const selector = useSelector((state: RootState) => state.variables)
    const dispatch = useDispatch<AppDispatch>()
    let newDate = ""
    let newTime = ""

    return(
        <View style={styles.main}>
            <Text style={styles.text}>Todo Title:</Text>
            <MyTextInput 
                placeholder="Title" 
                value={selector.todoTitle} 
                onChangeText={(text)=> {dispatch(setTodoTitle(text))}} 
                className="w-80 h-14 border-grayColor border-2 rounded-lg px-3 py-1 text-2xl placeholder:text-grayColor text-blackColor"/>
            <View style={{height: height * .02}}></View>

            <Text style={styles.text}>Todo Description:</Text>
            <MyTextInput
                placeholder="Description" 
                value={selector.todoTitle} 
                onChangeText={(text)=> {dispatch(setTodoTitle(text))}} 
                className="w-80 h-14 border-grayColor border-2 rounded-lg px-3 py-1 text-2xl placeholder:text-grayColor text-blackColor"/>
            <View style={{height: height * .02}}></View>

            <Text style={styles.text}>Select Date:</Text>
            <DateOrTime
                text={selector.todoDate.toString() === "" ? "Select Date" : selector.todoDate.toString()} 
                icon='calendar-month' 
                onPress={() => {dispatch(setDateModal(true))}}/>
            <View style={{height: height * .02}}></View>

            <Text style={styles.text}>Select Time:</Text>
            <DateOrTime
                text={selector.todoTime.toString() === "" ? "Select Time" : selector.todoTime.toString()}
                 icon='alarm'
                onPress={() => {dispatch(setTimeModal(true))}}/>

            <MyButton
                buttonName='Add ToDo'
                onPress={() => {addTodo(selector.todoTitle, selector.todoDescription, selector.todoColor, selector.todoDate, selector.todoTime)}}/>



            {selector.dateModal 
                && <DateTimePickerModel 
                        mode='date'
                        visible={selector.dateModal}
                        value={selector.todoDate.toString() === "" ? new Date() : new Date(selector.todoDate)}
                        onCancel={() => {dispatch(setDateModal(false))}} 
                        onCofirm={() => {dispatch(setDateModal(false)); dispatch(setTodoDate(newDate))}} 
                        onChange={(event, date) => {if (date) {newDate = date.toLocaleDateString();}}}
            />}

            {selector.timeModal 
                && <DateTimePickerModel 
                        mode='time'
                        value={selector.todoTime.toString() === "" ? new Date() : new Date(selector.todoTime)}
                        visible={selector.timeModal} 
                        onCancel={() => {dispatch(setTimeModal(false))}} 
                        onCofirm={() => {dispatch(setTimeModal(false)); dispatch(setTodotime(newTime))}} 
                        onChange={(event, time) => {if (time) {newTime = time.toLocaleTimeString();}}}
            />}
        </View>
    )
}

export default AddToDo
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: "flex-start",
        paddingTop: height * .03,  
        paddingHorizontal: width * .03  

    },

    text: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: height * .01,
        fontSize: width * .05,
        fontWeight: '500'
    },

    search: {
        height: height * .06,
        borderColor: AppColors.blackColor,
        opacity: .4,
        borderWidth: 1,
        borderRadius: width * .03,
        paddingHorizontal: width * .03,
        paddingVertical: height * .01,
        fontSize: width * .05,        
        },
})