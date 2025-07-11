import {
  Provider,
  store,
  NavigationContainer,
  Routes
} from './src/exports'

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  )
}

export default App