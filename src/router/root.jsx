import { Outlet } from "react-router-dom"
import Menu from '../components/Menu'
import store from "../store"
import { Provider } from "react-redux"


const Root = () => {
  return (
    <Provider store={store}>
     <Menu />
     <main>{<Outlet/>}</main> 
    </Provider>
  )
}

export default Root
