import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import { Frontpage } from "./Pages/Frontpage/Frontpage"


function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>

            <Route index element={<Frontpage />} />
            
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
