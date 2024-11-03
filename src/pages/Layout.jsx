
import ChatRoom from "../components/ChatRoom";
import LeftSide from "../components/LeftSide";
import { useAtom } from "jotai";
import { JotaiTheme } from "../store/store";
import { useSearchParams } from "react-router-dom";


export default function Layout() {
    const [theme, setTheme] = useAtom(JotaiTheme)
    const [search,] = useSearchParams()
    const chatRoomId = search.get('chat')


    function HandleThemes() {
        if(theme === 'light') return setTheme('dark')
        if(theme === 'dark') return setTheme('light')
    }


    if(chatRoomId) return (
        <div className={`bg-slate-100 dark:bg-slate-900 ${theme}`}>
        <div className="grid grid-cols-1 lg:grid-cols-10 h-dvh overflow-hidden">
            <div className="lg:col-span-3 h-screen border-r dark:border-slate-600 hidden lg:!block">
                <LeftSide theme={theme} HandleThemes={HandleThemes} />
            </div>
            <div className="w-full lg:col-span-7 h-screen ml-auto">
                <ChatRoom />
            </div>
        </div>
        </div>
    )

    return (
        <div className={`bg-slate-100 dark:bg-slate-900 ${theme}`}>
            <div className="grid grid-cols-1 lg:grid-cols-10 h-dvh overflow-hidden">
                <div className="w-full lg:col-span-3 h-screen border-r dark:border-slate-600">
                    <LeftSide theme={theme} HandleThemes={HandleThemes} />
                </div>
                <div className="w-full lg:col-span-7 h-screen">
                    <ChatRoom />
                </div>
            </div>
        </div>
    )
}
