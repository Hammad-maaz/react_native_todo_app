import { configureStore } from '@reduxjs/toolkit'
import * as yup from 'yup'


export {Platform, View, Text, TextInput, Button, Image, StyleSheet, Dimensions, SafeAreaView, Modal, TouchableHighlight, TouchableOpacity} from 'react-native'
export {useEffect} from 'react'
export {useNavigation, NavigationContainer} from '@react-navigation/native'
export {configureStore}
export type {  RootState, AppDispatch} from './redux/store'
export { useSelector, useDispatch } from 'react-redux'
export {default as RNDateTimePicker} from "@react-native-community/datetimepicker"
export {createSlice, type PayloadAction} from '@reduxjs/toolkit'
export {Provider} from 'react-redux'
export {FlashList} from '@shopify/flash-list'
export {Formik} from 'formik'
export {yup}
export { Swipeable } from 'react-native-gesture-handler';


// Navigations
export {createStackNavigator} from '@react-navigation/stack'
export type {RouteParamsList} from './navigations/routes'
export type { StackNavigationProp } from "@react-navigation/stack"

// Res
export {AppColors} from './utils/app_colors'
export {VariablesReducer} from './redux/variables'
export {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons'
export {default as MyTextInput} from './res/components/my_text_input'
export {default as DateTimePickerModel} from './res/components/date_time_modal'
export {default as Routes} from './navigations/routes'
export {default as store} from './redux/store'
export { setTodoTitle, setTodoDescription, setTodoColor, setDateModal, setTimeModal, setTodoDate, setTodotime, setSearch } from './redux/variables'
export {default as DateOrTime} from './res/components/date_or_time'
export {default as MyButton} from './res/components/my_button'
export {default as TodoColor} from './res/components/todo_color'
export { TodoReducer, updateTodo} from './redux/todo_slice'

// Database
export {default as SQLite} from "react-native-sqlite-storage"
export type { TodoSchema } from "./res/database/schema"
export { initialState } from "./res/database/schema"
export { insertTodo, getAllTodos, deleteTodo } from './res/database/sqlite'


