import{ createSlice, initialState, PayloadAction, TodoSchema } from '../exports'

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        updateTodo: (state, action: PayloadAction<TodoSchema[]>) => {
            state.value = action.payload
        }
    }
})

export const {updateTodo} = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer