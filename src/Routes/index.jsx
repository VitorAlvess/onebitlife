import { useState } from "react";
import AllPages from "./AllPages";
import HomePage from "./HomePage";
export default function Router(){
    const { showHome, setShowHome} = useState('false')
    return <>{showHome === 'True' ? <HomePage /> : <AllPages />}</>
}