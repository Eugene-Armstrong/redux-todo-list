export const addItem = (todos) => ({ type: "ADD_ITEM", todos });
export const showFilterList = (todos, statusOfList) => ({ type: "SHOW_FILTER", todos, statusOfList });
export const updateItemContent = (todos, statusOfList) => ({ type: "UPDATE_ITEM_CONTENT", todos, statusOfList });
export const toggleActiveItem = (todos) => ({ type: "TOGGLE_ACTIVE", todos });
export const changeStatus = (status) => ({ type: "CHANGE_STATUS", status });