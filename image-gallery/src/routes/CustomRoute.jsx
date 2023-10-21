import { Route, Routes } from "react-router-dom"
import  HomePage  from "../Pages/Homepage"
import  SinglePhoto  from "../Pages/SinglePhoto"





export const CustomRoute = () => {
    return (
        <Routes>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/:id" element={<SinglePhoto/>}/>

        </Routes>
    )
}