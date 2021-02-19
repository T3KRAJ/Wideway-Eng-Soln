import React, { useState, createContext } from "react"

const ShareContext = createContext()
const ShareContextProvider = props => {
  const [collapsedShare, setCollapsedShare] = useState(props.theme)
  setInterval(() => {
    // let getMode  = JSON.parse(typeof window.localStorage.getItem("mode"))
    let getMode = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("mode")) : ""
    setCollapsedShare(getMode)
  },1000/2)

  return(
    <ShareContext.Provider value={{ collapsedShare}}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }