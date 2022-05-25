import React from "react";

export const ThemeContext = React.createContext()
export const ThemeContext1 = React.createContext()
export const list = ['hello ','test ']


export const Likes = () => {
    const [fav1, setFav1] = React.useState([])


    return(
        <div className="likeBar">
            <ThemeContext1.Provider value={setFav1}>
                <ThemeContext.Provider value={fav1}>
                    <button>test</button>
               </ThemeContext.Provider>
            </ThemeContext1.Provider>
        </div>
        
    )
}

