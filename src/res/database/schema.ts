import{
    Realm,
} from "../../exports"

class TodoSchema extends Realm.Object{
    _id!: Realm.BSON.ObjectId
    todoTitle!: string
    todoDescrition!: string
    todoColor!: string
    todoDate!: string
    todoTime!: string
    createdAt!: Date

    static schema = {
        name: "TodoSchema",
        primaryKey: "_id",
        properties: {
            _id: "objectId",
            todoTitle: "string",
            todoDescription: 'string',
            todoColor: 'string',
            todoDate: 'string',
            todoTime: 'string',
            createdAt: 'date'
        }
    }
}

export default TodoSchema