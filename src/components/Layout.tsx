
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Modal from "./Modal"
import { useAppSotre } from "../stores/useAppStore"
import { useEffect } from "react"
import Notification from "./Noti"

export default function Layout() {
  const {loadFromStorage}=useAppSotre()
  useEffect(()=>{
    loadFromStorage()
  },[])
  return (
    <>
        <Header></Header>
        <main className="max-w-7xl mx-auto py-16">
            <Outlet></Outlet>
        </main>
        <Modal></Modal>
        <Notification></Notification>
    </>
  )
}
