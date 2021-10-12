import { createStore } from "redux";

const inintialState = {
    items: [
        {id: "#1", name: "iPad 4 Mini", price: 500, count: 0},
        {id: "#2", name: "H&M", price: 10, count: 0},
        {id: "#3", name: "Nike", price: 699, count: 0},
    ]
};

function myReducer(state = inintialState, action) {
    const {type, payload} = action;

    switch (type) {
        case "Добавить продукт":
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            count: item.count + 1
                        };
                    }
                    return item;
                }),
            };
        
        case "Убрать продукт":
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            count: item.count - 1
                        };
                    }
                    return item;
                }),
            };
        
        default:
            return state;
    }
}

export default createStore(myReducer);