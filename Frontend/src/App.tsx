import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout/MainLayout"
import { Frontend } from "./Pages/Frontpage/Frontpage"
import { Projects } from "./Pages/Projects/Projects"



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >

        <Route index element={<Frontend />}/>
        <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
