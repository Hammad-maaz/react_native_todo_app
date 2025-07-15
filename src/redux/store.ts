import{
    configureStore,
    VariablesReducer,
    
} from '../exports'
import { TodoReducer } from './todo_slice'

const store:any = configureStore({
    reducer: {
        variables: VariablesReducer,
        todo: TodoReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store