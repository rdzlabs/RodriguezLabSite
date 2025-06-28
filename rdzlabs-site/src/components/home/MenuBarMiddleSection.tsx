import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { Linkedin, Handshake } from "lucide-react"

export function MenuBarMiddleSection() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Projects</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        RodriguezLabSite
                    </MenubarItem>
                    <MenubarItem>
                        StayOnsite
                    </MenubarItem>
                    <MenubarItem>
                        MTG Card Auto Sorter
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Experience</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Resume 
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Contact Me</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <a href="https://www.linkedin.com/in/christian-rodriguez-b6b538227/">LinkedIn</a> 
                    </MenubarItem>
                    <MenubarItem>
                        <a href="">HandShake</a>
                    </MenubarItem>
                    <MenubarItem>
                        <a href="">Email</a>
                    </MenubarItem>
                    <MenubarItem>
                        <a href="">Mobile</a>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Support</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Add Profile...</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
