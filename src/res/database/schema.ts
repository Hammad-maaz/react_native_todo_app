export interface TodoSchema{
    id: number,
    todoTitle: string,
    todoDescription: string,
    todoColor: string,
    todoDate: string,
    todoTime: string,
    createdAt: string
}

type TodoState = {
    value: TodoSchema[] | null
}

export const initialState: TodoState ={
    value: null
}