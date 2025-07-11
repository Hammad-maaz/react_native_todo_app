import{
    configureStore,
    VariablesReducer,
    
} from '../exports'

const store:any = configureStore({
    reducer: {
        variables: VariablesReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store