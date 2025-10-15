import { link } from "fs"

const Sidebar=()=>{
    const sidebarOptions=[
            {title:'Installation',
            link:''
        },
        {title:'Inbox',
            link:''
        },
        {
            title:'Feedback',
            link:''
        },
        {
            title:"Customize",
            link:'',
        },
        {
            title:'Customization',
            link:''
        }
    ]
    return(
        <div className="w-1/6 h-full border-r border-neutral-800 p-4">
            <ul className="space-y-4">
                {sidebarOptions.map((option)=>(
                    <li key={option.title}>
                        <a href={option.link} className="text-gray-700 hover:text-blue-500">
                            {option.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar