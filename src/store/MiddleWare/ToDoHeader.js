export const IgnorEmptyToDo = (store) => (next) => (action) => {

    next(action)
}