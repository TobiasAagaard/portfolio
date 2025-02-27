import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./Layouts/MainLayout/MainLayout"
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
