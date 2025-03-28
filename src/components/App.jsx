import {BrowserRoutes, Routes } from "react-router-dom";

export function App(){
    return(
        <BrowserRoutes>
        {}
        <Navbar>
            <Routes>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/Home" element = {<Home/>}/>
                <Route path = "/Layout" element = {<Layout/>}/>
                <Route path = "/Contact" element = {<Contact/>}/>
            </Routes>

        </Navbar>
        </BrowserRoutes>
       
    )
}