import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoginFormDisplay, setIsLoginFormDisplay] = useState(false)
  const [isLearnModalDisplay, setIsLearnModalDisplay] = useState(false)
  const [selectingBook, setSelectingBook] = useState(null)
  const navigate = useNavigate();

  const signOut = () => {
    setIsLoggedIn(false);
    setUsername("")
  }

  const signIn = (username) => {
    setIsLoggedIn(true);
    saveUserName(username);
    hideLoginForm()
    if (selectingBook) {
      showLearnModal()
    }
  }

  const saveUserName = (name) => {
    setUsername(name);
  }

  const showLoginForm = () => {
    navigate("/sign-in")
    setIsLoginFormDisplay(true)
  }

  const hideLoginForm = () => {
    setIsLoginFormDisplay(false)
  }

  const showLearnModal = () => {
    setIsLearnModalDisplay(true)
  }

  const hideLearnModal = () => {
    setIsLearnModalDisplay(false)
  }

  const learnMore = (book) => {
    setSelectingBook(book)
    if (isLoggedIn) {
      showLearnModal()
    } else {
      showLoginForm()
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, signOut, signIn, saveUserName, isLoginFormDisplay, isLearnModalDisplay, showLoginForm, hideLoginForm, showLearnModal, hideLearnModal, selectingBook, learnMore }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };