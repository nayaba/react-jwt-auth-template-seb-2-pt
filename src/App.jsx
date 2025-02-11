import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import Landing from './components/Landing/Landing'
import SignInForm from './components/SignInForm/SignInForm'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/' element={<Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  )
}

export default App