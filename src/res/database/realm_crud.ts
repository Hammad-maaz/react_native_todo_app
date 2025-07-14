import{
    Realm,
    useRealm
}from '../../exports'

export const addTodo = (todoTitle: string, todoDescription: string, todoColor: string, todoDate: string, todoTime: string) => {
    return{
        _id: new Realm.BSON.ObjectId(),
        todoTitle,
        todoDescription,
        todoColor,
        todoTime,
        todoDate,
        createdAt: new Date().toDateString()
    }
}

export const getTodo = () => {
    return{
        
    }
}

export const deleteTodo = (item: any) => {
    const realm = useRealm()
    
}