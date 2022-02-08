import { createContext, useReducer } from "react";
import { View } from "../components/Themed";

type AppState = typeof initialState;
type Action = 
| {type: "SET_INPUT_VALUE"; payload: number} 
| {type: "SET_INPUT_VALUE_TO_200"; }

interface InputProviderProps {
    children: React.ReactNode;
}

const initialState = {
    inputValue: 0,
}

const reducer = (state: AppState, action: Action) =>{


    switch (action.type) {
        case "SET_INPUT_VALUE" :
            return {
                ...state,
                inputValue: action.payload,
            };
        case "SET_INPUT_VALUE_TO_200" :
            return {
                ...state,
                inputValue: 200,
            };
        default :
        return state;
    }
}

const InputValueContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>
}>({
    state: initialState, dispatch: () => {}
});

function InputValueProvider({children} : InputProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <InputValueContext.Provider value={{ state, dispatch}}>
            {children}
        </InputValueContext.Provider>
    )

}

export { InputValueContext, InputValueProvider };