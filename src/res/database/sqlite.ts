import{ SQLite, TodoSchema } from '../../exports'


const db = SQLite.openDatabase(
    {name: "todos.db", location: "default"},
    () => {console.log("Database opened")},
    (error) => {console.log(`Databae Connection Error:${error}`)}
)


export const createTable = async() => {
    await db.executeSql(`CREATE TABLE IF NOT EXISTS allTodo(id INTEGER PRIMARY KEY AUTOINCREMENT, todoTitle TEXT NOT NULL, todoDescription TEXT NOT NULL, todoColor TEXT NOT NULL, todoDate TEXT NOT NULL, todoTime TEXT NOT NULL, createdAt TEXT NOT NULL)`)
}

export const insertTodo = (todoTitle: string, todoDescription: string, todoColor: string, todoDate: string, todoTime: string, createdAt: string) => {
    db.transaction(tx => {
        tx.executeSql(
            `INSERT INTO allTodo(todoTitle, todoDescription, todoColor, todoDate, todoTime, createdAt) VALUES (?, ?, ?, ?, ?, ?)`, [todoTitle, todoDescription, todoColor, todoDate, todoTime, createdAt],
            (_, result)=> {console.log("Todo Inserter")},
            (_, error) => {console.log(`HERE IS ERROR IN INSERTING: ${error}`)}
        )
    })
}

export const getAllTodos = ():Promise<TodoSchema[]> => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM allTodo`,
             [],
             (_, result) => {
                const todos: TodoSchema[] = [];
                const allRows = result.rows;
                for(var i =0; i < allRows.length; i++){
                    todos.push(allRows.item(i))
                }
                resolve(todos)
             },
             (_, error)=> {
                reject(error)
                return false
             }
        )
    })
    })
}

export const deleteTodo = (id: number) => {
    db.transaction(tx => {
        tx.executeSql(
            `DELETE FROM allTodo WHERE id = ?`, 
            [id],
            (_, result) => {},
            (_, error) => {console.log(`HERE IS ERROR IN DELETING: ${error}`)}
        )
    })
}