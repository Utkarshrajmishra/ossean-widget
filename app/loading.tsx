import { Loader } from "lucide-react"

const Loading=()=>{
    return(
        <section className="w-screen animate-spin h-screen flex items-center justify-center">
           <Loader />
        </section>
    )
}

export default Loading