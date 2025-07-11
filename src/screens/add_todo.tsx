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
    setTodotime
} from '../exports'

const {width, height} = Dimensions.get('window')
const AddToDo:React.FC = () => {
    const selector = useSelector((state: RootState) => state.variables)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <View style={styles.main}>
            <Text style={styles.text}>Todo Title:</Text>
            <MyTextInput placeholder="Title" value={selector.todoTitle} onChangeText={(text)=> {dispatch(setTodoTitle(text))}} style={styles.search}/>
            <View style={{height: height * .02}}></View>

            <Text style={styles.text}>Todo Description:</Text>
            <MyTextInput placeholder="Title" value={selector.todoTitle} onChangeText={(text)=> {dispatch(setTodoTitle(text))}} style={styles.search}/>
            <View style={{height: height * .02}}></View>

            <Text style={styles.text}>Select Date:</Text>
            <DateOrTime text={selector.todoDate ? selector.todoDate : 'Select Date'} icon='calendar-month' onPress={() => {dispatch(setDateModal(true))}}/>
            <View style={{height: height * .02}}></View>

            <Text style={styles.text}>Select Time:</Text>
            <DateOrTime text={selector.todoTime ? selector.todoTime : 'Select Time'} icon='alarm' onPress={() => {dispatch(setTimeModal(true))}}/>




            {selector.dateModal 
                && <DateTimePickerModel 
                        mode='date'
                        visible={selector.dateModal} 
                        onCancel={() => {dispatch(setDateModal(false))}} 
                        onCofirm={() => {dispatch(setDateModal(false))}} 
                        onChange={(event, date) => {if (date) {console.log("User selected:", date.toISOString());}}}
            />}

            {selector.timeModal 
                && <DateTimePickerModel 
                        mode='time'
                        visible={selector.timeModal} 
                        onCancel={() => {dispatch(setTimeModal(false))}} 
                        onCofirm={() => {dispatch(setTimeModal(false))}} 
                        onChange={(event, time) => {if (time) {console.log("User TIme:", time.toLocaleTimeString());}}}
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