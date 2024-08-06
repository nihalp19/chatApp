import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Chat from "./components/Chat"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
function App() {
  const style = {
    appContainer : "max-w-[728px] mx-auto text-center",
    sectionContainer : "w-full flex  flex-col h-[90vh] mt-10 shadow-xl border bg-gray-50 relative",
  }

  useEffect(() => {
    onAuthStateChanged(auth,(user) =>{
    })
  },[])

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
          <Navbar/>
          <Chat />
      </section>
    </div>
  );
}

export default App;
