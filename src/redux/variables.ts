import{
    createSlice,
    AppColors,
    PayloadAction
} from "../exports"

 const VariablesSlice= createSlice({
    name: "variables",
    initialState: {
        todoTitle: "",
        todoDescription: "",
        todoColor: 'bg-grayLight',
        todoDate: "",
        todoTime: "",
        search: "",

        dateModal: false,
        timeModal: false
    },
    reducers: {
        setTodoTitle: (state, action) => {
            state.todoTitle = action.payload
        },

        setTodoDescription: (state, action) => {
            state.todoTitle = action.payload
        },

        setTodoColor: (state, action) => {
            state.todoColor = action.payload
        },

        setDateModal: (state, action:PayloadAction<boolean>)=>{
            state.dateModal = action.payload
        },

        setTimeModal: (state, action:PayloadAction<boolean>)=>{
            state.timeModal = action.payload
        },

        setTodotime: (state, action:PayloadAction<string>)=>{
            state.todoTime = action.payload
        },

        setTodoDate: (state, action:PayloadAction<string>)=>{
            state.todoDate = action.payload
        },

        setSearch: (state, action:PayloadAction<string>)=>{
            state.search = action.payload
        },
    }
 })

 export const { setTodoTitle, setTodoDescription, setTodoColor, setDateModal, setTimeModal, setTodoDate, setTodotime, setSearch } = VariablesSlice.actions
 export const VariablesReducer = VariablesSlice.reducer