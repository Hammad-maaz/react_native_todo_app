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
    MyButton,
    Formik,
    yup,
    TodoColor,
    setTodoColor,
    setTodoDescription,
    setTodoDate,
    setTodotime,
    StackNavigationProp,
    RouteParamsList,
    insertTodo,
    updateTodo,
    Platform,
    Keyboard
} from '../exports'

const {width, height} = Dimensions.get('window')
type RootProps = StackNavigationProp<RouteParamsList, 'addTodo'>
type props = {
    navigation: RootProps
}
const AddToDo:React.FC<props> = ({navigation}) => {
    const selector = useSelector((state: RootState) => state.variables)
    const todo = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch<AppDispatch>()


    const todoValidation = yup.object().shape({
        todoTitle: yup.string().required("Title is required"),
        todoDescription: yup.string().required("Description is required"),
        todoColor: yup.string(),
        todoDate: yup.string().required("Date is required"),
        todoTime: yup.string().required("Time is required")
    })
    const initialValues = {
        todoTitle: selector.todoTitle.toString(),
        todoDescription: selector.todoDescription.toString(),
        todoColor: selector.todoColor.toString(),
        todoDate: selector.todoDate.toString(),
        todoTime: selector.todoTime.toString()
    }

    return(
        <Formik 
        initialValues={initialValues} 
        validationSchema={todoValidation} 
        onSubmit={(values)=> {
            dispatch(setTodoTitle(''));
            dispatch(setTodoDescription(''));
            dispatch(setTodoColor('bg-grayColor'));
            dispatch(setTodoDate(''));
            dispatch(setTodotime(''));
            insertTodo(values.todoTitle, values.todoDescription, values.todoColor, values.todoDate, values.todoTime, values.todoDate)
            dispatch(updateTodo([...todo.value, {todoTitle: values.todoTitle, todoDescription: values.todoDescription, todoColor: values.todoColor, todoDate: values.todoDate, todoTime: values.todoDate}]))
            navigation.goBack()
            }}>
            {({values, errors, handleSubmit, handleReset, handleChange,}) => (
                <View style={styles.main}>
                            <Text style={styles.text}>Todo Title:</Text>
                            <MyTextInput 
                                placeholder="Title" 
                                value={values.todoTitle} 
                                onChangeText={(text)=> {handleChange('todoTitle')(text); dispatch(setTodoTitle(text))}} 
                                className="w-80 h-14 border-grayColor border-2 rounded-lg px-3 py-1 text-2xl placeholder:text-grayColor text-blackColor"/>
                            {errors.todoTitle && <Text className='text-redColor text-[18px] mt-1'>{errors.todoTitle.toString()}</Text>}
                            <View style={{height: height * .02}}></View>

                            <Text style={styles.text}>Todo Description:</Text>
                            <MyTextInput
                                placeholder="Description" 
                                value={values.todoDescription} 
                                onChangeText={(text)=> {handleChange('todoDescription')(text); dispatch(setTodoTitle(text))}} 
                                className="w-80 h-14 border-grayColor border-2 rounded-lg px-3 py-1 text-2xl placeholder:text-grayColor text-blackColor"/>
                                {errors.todoDescription && <Text className='text-redColor text-[18px] mt-1'>{errors.todoDescription.toString()}</Text>}
                            <View style={{height: height * .02}}></View>

                            <Text style={styles.text}>Select Date:</Text>
                            <DateOrTime
                                text={values.todoDate.toString() || "Select Date"} 
                                icon='calendar-month' 
                                onPress={() => {Keyboard.dismiss(); dispatch(setDateModal(true))}}/>
                            {errors.todoDate && <Text className='text-redColor text-[18px] mt-1'>{errors.todoDate.toString()}</Text>}
                            <View style={{height: height * .02}}></View>

                            <Text style={styles.text}>Select Time:</Text>
                            <DateOrTime
                                text={values.todoTime.toString() || "Select Time"}
                                icon='alarm'
                                onPress={() => {Keyboard.dismiss(); dispatch(setTimeModal(true))}}/>
                            {errors.todoTime && <Text className='text-redColor text-[18px] mt-1'>{errors.todoTime.toString()}</Text>}

                            <View className='flex-row justify-start items-center mt-5'>
                                <TodoColor color='bg-redColor' onPress={() => {Keyboard.dismiss(); handleChange('todoColor')('bg-redLight'); dispatch(setTodoColor('bg-redColor'))}}/>
                                <TodoColor color='bg-greenColor'onPress={() => {Keyboard.dismiss();handleChange('todoColor')('bg-greenLight'); dispatch(setTodoColor('bg-greenColor'))}}/>
                                <TodoColor color='bg-purpleColor' onPress={() => {Keyboard.dismiss();handleChange('todoColor')('bg-purpleLight'); dispatch(setTodoColor('bg-purpleColor'))}}/>
                                <TodoColor color='bg-grayColor' onPress={() => {Keyboard.dismiss();handleChange('todoColor')('bg-grayLight'); dispatch(setTodoColor('bg-grayColor'))}}/>
                                <TodoColor color='bg-orangeColor' onPress={() => {Keyboard.dismiss();handleChange('todoColor')('bg-orangeLight'); dispatch(setTodoColor('bg-orangeColor'))}}/>
                            </View>

                            <MyButton
                                buttonName='Add ToDo'
                                onPress={handleSubmit}/>


                                {/* MODELS */}
                            {selector.dateModal 
                                && <DateTimePickerModel 
                                        mode='date'
                                        visible={selector.dateModal}
                                        display={Platform.OS === 'ios' ? 'inline' : 'default'}
                                        onCancel={() => {dispatch(setDateModal(false))}} 
                                        onCofirm={(date) => {dispatch(setDateModal(false)); handleChange('todoDate')(date.toLocaleDateString([], {dateStyle: 'medium'}));}} 
                            />}

                            {selector.timeModal 
                                && <DateTimePickerModel 
                                        mode='time'
                                        visible={selector.timeModal} 
                                        onCancel={() => {dispatch(setTimeModal(false))}} 
                                        onCofirm={(time) => {handleChange('todoTime')(time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})); dispatch(setTimeModal(false))}} 
                            />}
                    </View>
            )} 
        </Formik>
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