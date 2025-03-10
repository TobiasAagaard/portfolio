import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout/MainLayout"
import { Frontend } from "./Pages/Frontpage/Frontpage"
import { Projects } from "./Pages/Projects/Projects"
import { About } from "./Pages/About/About"
import { Contact } from "./Pages/Contact/Contact"



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >

        <Route index element={<Frontend />}/>

        <Route path="/projects" element={<Projects />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
