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
    addTodo,
    useRealm,
    setTodoDescription,
    setTodoDate,
    setTodotime,
    StackNavigationProp,
    RouteParamsList
} from '../exports'

const {width, height} = Dimensions.get('window')
type RootProps = StackNavigationProp<RouteParamsList, 'addTodo'>
type props = {
    navigation: RootProps
}
const AddToDo:React.FC<props> = ({navigation}) => {
    const selector = useSelector((state: RootState) => state.variables)
    const dispatch = useDispatch<AppDispatch>()
    let newDate = ""
    let newTime = ""
    const realm = useRealm()
    
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

    const handleSubmitFunction = ()=> {
        
    }

    return(
        <Formik 
        initialValues={initialValues} 
        validationSchema={todoValidation} 
        onSubmit={(values)=> {
            realm.write(() => {realm.create("TodoSchema", addTodo(values.todoTitle, values.todoDescription, values.todoColor, values.todoDate, values.todoTime))});
            dispatch(setTodoTitle(''));
            dispatch(setTodoDescription(''));
            dispatch(setTodoColor('bg-blackColor'));
            dispatch(setTodoDate(''));
            dispatch(setTodotime(''));
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
                                onPress={() => {dispatch(setDateModal(true))}}/>
                            {errors.todoDate && <Text className='text-redColor text-[18px] mt-1'>{errors.todoDate.toString()}</Text>}
                            <View style={{height: height * .02}}></View>

                            <Text style={styles.text}>Select Time:</Text>
                            <DateOrTime
                                text={values.todoTime.toString() || "Select Time"}
                                icon='alarm'
                                onPress={() => {dispatch(setTimeModal(true))}}/>
                            {errors.todoTime && <Text className='text-redColor text-[18px] mt-1'>{errors.todoTime.toString()}</Text>}

                            <View className='flex-row justify-start items-center mt-5'>
                                <TodoColor color='bg-redColor' onPress={() => {handleChange('todoColor')('bg-redLight'); dispatch(setTodoColor('bg-redLight'))}}/>
                                <TodoColor color='bg-greenColor'onPress={() => {handleChange('todoColor')('bg-greenLight'); dispatch(setTodoColor('bg-greenLight'))}}/>
                                <TodoColor color='bg-purpleColor' onPress={() => {handleChange('todoColor')('bg-purpleLight'); dispatch(setTodoColor('bg-purpleLight'))}}/>
                                <TodoColor color='bg-grayColor' onPress={() => {handleChange('todoColor')('bg-grayLight'); dispatch(setTodoColor('bg-grayLight'))}}/>
                                <TodoColor color='bg-orangeColor' onPress={() => {handleChange('todoColor')('bg-orangeLight'); dispatch(setTodoColor('bg-orangeLight'))}}/>
                            </View>

                            <MyButton
                                buttonName='Add ToDo'
                                onPress={handleSubmit}/>


                                {/* MODELS */}
                            {selector.dateModal 
                                && <DateTimePickerModel 
                                        mode='date'
                                        visible={selector.dateModal}
                                        value={selector.todoDate.toString() === "" ? new Date() : new Date(selector.todoDate)}
                                        onCancel={() => {dispatch(setDateModal(false))}} 
                                        onCofirm={() => {dispatch(setDateModal(false)); handleChange('todoDate')(newDate === "" ? new Date().toLocaleDateString([], {dateStyle: 'medium'}) : newDate);}} 
                                        onChange={(event, date) => {if (date) {newDate = date.toLocaleDateString([], {dateStyle: 'medium'});}}}
                            />}

                            {selector.timeModal 
                                && <DateTimePickerModel 
                                        mode='time'
                                        value={selector.todoTime.toString() === "" ? new Date() : new Date(selector.todoTime)}
                                        visible={selector.timeModal} 
                                        onCancel={() => {dispatch(setTimeModal(false))}} 
                                        onCofirm={() => {handleChange('todoTime')(newTime === "" ? new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true}) : newTime); dispatch(setTimeModal(false))}} 
                                        // onCofirm={() => {dispatch(setTimeModal(false)); handleChange('todoTime')(newTime); dispatch(setTodotime(newTime))}} 
                                        onChange={(event, time) => {if (time) {newTime = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}}}
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