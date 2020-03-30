import React, {useState} from "react"
import SidebarMenu from "../buttons/sidebar-menu.button";
import AppBarBody from "./app-bar-body";
import AppBarDropdown from "./app-bar-dropdown";




const AppBar = () =>{
    const [opened, toggleOpened] = useState(false);

    return <div className="navHeight items-center justify-between">

            {/*div pt button de menu*/}
            <div className="absolute left-0 flex items-center sm:hidden">
                {/*button menu*/}
                <SidebarMenu
                    className="text-secondary"
                    opened={!opened}
                    onClick={() => {
                        toggleOpened(!opened)
                    }}/>
            </div>

            <AppBarBody />
            <AppBarDropdown open={opened}/>

        </div>
}



export default AppBar