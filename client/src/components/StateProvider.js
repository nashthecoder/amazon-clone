// Context API
// Tracks basket
// Tracks user

//Sets up  the data layer.
import React, { createContext, useContext, useReducer } from "react"


//This is the data layer
export const StateContext = createContext()

//This wraps the app and provides the Data layer.
export const StateProvider = ({ reducer, initialState, children }) => (
    
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

// Pulls information from the data layer.
export const useStateValue = () => useContext(StateContext)