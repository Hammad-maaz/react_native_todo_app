import {
  Provider,
  store,
  NavigationContainer,
  Routes,
  RealmProvider,
  TodoSchema
} from './src/exports'
import "./global.css"


const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <RealmProvider schema={[TodoSchema]}>
          <Routes />
        </RealmProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App