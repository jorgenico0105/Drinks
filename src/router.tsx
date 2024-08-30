import { BrowserRouter,Routes,Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPage from "./views/FavoritesPage"
import Layout from "./components/Layout"
export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout></Layout>}>
                <Route path="/" element={<IndexPage></IndexPage>} index/>
                <Route path="/fav" element={<FavoritesPage></FavoritesPage>}/>  
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
