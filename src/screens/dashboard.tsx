import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Dimensions } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { AppColors } from "../utils/app_colors"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteParamsList } from "../navigations/routes";
import MyTextInput from "../res/components/my_text_input";
import { useState } from "react";


type RouteProps = StackNavigationProp<RouteParamsList, 'dashboard'>
type props = {
    navigation: RouteProps
}

const {width, height} = Dimensions.get('window')
const Dashboard:React.FC<props> = ({navigation}) => {
    const [search, setSearch] = useState('')


    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.searchAndAdd}>
                <MyTextInput placeholder="Search ToDo" value={search} onChangeText={(text)=> {setSearch(text)}}/>
                <View style={styles.addIconBackground}>
                    <MaterialIcons name="add" size={width * .1} color={AppColors.whiteColor} onPress={() => {navigation.navigate('addTodo')}}/>
                </View>
            </View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: width * .02,
        marginVertical: height * .03
    },
    searchAndAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    
    },
    search: {
        width: width * .76,
        height: height * .06,
        borderColor: AppColors.blackColor,
        opacity: .4,
        borderWidth: 1,
        borderRadius: width * .03,
        paddingHorizontal: width * .03,
        paddingVertical: height * .01,
        fontSize: width * .05
    },
    addIconBackground: {
        height: height * .05,
        width: height * .05, 
        borderRadius: (height * .05)/2, 
        backgroundColor: AppColors.blueColor, 
        opacity: .3,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default Dashboard