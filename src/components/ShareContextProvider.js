import React, { useState, createContext, useEffect } from "react"

const ShareContext = createContext()
const ShareContextProvider = props => {
  const [collapsedShare, setCollapsedShare] = useState(props.theme)
  setInterval(() => {
    let getMode  = JSON.parse(window.localStorage.getItem("mode"))
    setCollapsedShare(getMode)
  },1000/2)

  return(
    <ShareContext.Provider value={{ collapsedShare}}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }