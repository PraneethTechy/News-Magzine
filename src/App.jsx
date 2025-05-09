import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"



const App = () => {

  const [category,setcategory] = useState("general");
  return (
    <div className="overflow-x-hidden mr-0">
      <Navbar setcategory={setcategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App
