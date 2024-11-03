import { useAtom } from "jotai"
import { JotaiTheme } from "../store/store"
import profileimg from "../assets/images/myprofile.jpeg"
import { FaArrowLeftLong, FaEllipsisVertical, FaMagnifyingGlass } from "react-icons/fa6"
import ChatForm from "./ChatForm"
import { Link } from "react-router-dom"
import ImageModal from "./ImageModal"
import { useState } from "react"
import Imaged from "./Imaged"
import { LiaTimesSolid } from "react-icons/lia"
import { PiTrash } from "react-icons/pi"
import { Popover } from '@mantine/core';


const ChatProps = [
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 1,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 2,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 3,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 4,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 5,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 6,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 7,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 8,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 9,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 10,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 11,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 12,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 13,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 14,
    },
    {
        user: 'incoming',
        body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?`,
        time: `08:55pm`,
        id: 15,
    },
    {
        user: 'outgoing',
        body: `Lorem, ipsum dolor sit amet consectetur`,
        time: `08:55pm`,
        id: 16,
    },
]

export default function ChatRoom() {
    const [theme,] = useAtom(JotaiTheme)
    const [imgs, setImgs] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [messageIds, setMessageIds] = useState([])
    const [ChatMessages, setChatMessages] = useState(ChatProps || [])

    const incomingCs = `bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`
    const outgoingCs = `bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`

    function HandleMessageIds(id) {
        const findId = messageIds.find(ele => ele === id)
        if (!findId) {
            return setMessageIds([...messageIds, id])
        } else {
            const index = messageIds.indexOf(findId)
            return setMessageIds([...messageIds.slice(0, index), ...messageIds.slice(index + 1)])
        }
    }

    function HandleTrashOut() {
        const filterout = ChatMessages.filter(ele => ![...messageIds].includes(ele.id))
        setChatMessages(filterout)
        setMessageIds([])
    }


    return (
        <>
            {imgs && <ImageModal
                closeview={() => setImgs(false)}
            />}
            <div className=" dark:text-slate-200">
                <div className="bg-white dark:bg-slate-800 h-[4rem] overflow-hidden">
                    {!search ? <div className="flex h-full items-center justify-between w-[97%] mx-auto gap-5 py-3">
                        <div className="flex items-center w-4/6 md:w-4/5 gap-3">
                            <Link to="?" className="text-lg lg:hidden"> <FaArrowLeftLong /> </Link>
                            <Imaged
                                onClick={() => setImgs(true)}
                                src={profileimg} alt="" className="!size-9 rounded-full cursor-pointer object-cover" />
                            <Link to="/profile" className="truncate w-10/12">
                                <div className="font-bold text-sm md:text-base truncate">Lorem ipsum dolor sit amet.</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSearch(true)}
                                className="text-xl dark:text-slate-200 dark:hover:bg-slate-900 rounded-full hover:bg-slate-100 transition-all hover:scale-110 p-2"> <FaMagnifyingGlass /> </button>
                            <button className="text-xl dark:text-slate-200 dark:hover:bg-slate-900 rounded-full hover:bg-slate-100 transition-all hover:scale-110 p-2"> <FaEllipsisVertical /> </button>
                        </div>
                    </div> :
                        <div className="h-full pt-2">
                            <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg  w-11/12 mx-auto flex items-center gap-2">
                                <button onClick={() => setSearch(false)}> <FaArrowLeftLong /> </button>
                                <input
                                    value={searchText}
                                    onChange={e => setSearchText(e.target.value)}
                                    placeholder="Search messages..." autoFocus={true} type="text" className="w-full outline-none bg-transparent text-sm p-1" />
                                {searchText.length > 0 && <button
                                    onClick={() => setSearchText('')}
                                    className="text-xl"> <LiaTimesSolid /> </button>}
                            </div>
                        </div>}
                </div>
                <div className="h-[82dvh] py-2 px-5 lg:px-3 overflow-y-auto overflow-x-hidden">
                    {ChatMessages.map((item, index) => {
                        const findId = messageIds.find(ele => ele === item.id)
                        return (
                            <div key={index} className={`flex items-center gap-10 relative`}>

                                {item.user === 'outgoing' &&
                                    <div
                                        onClick={() => HandleMessageIds(item.id)}
                                        className={`size-5 rounded-sm cursor-pointer border hover:rotate-180 dark:border-slate-400 ${findId ? 'bg-green-600 border-transparent' : 'border-slate-400'} hover:scale-110 transition-all`}></div>}
                                <div className={`${item.user === 'incoming' ? incomingCs : outgoingCs}`}>
                                    <div className="text-sm flex">
                                        {item.body}
                                        {item.user === 'outgoing' && <Popover width={200} classNames="mr-5" position="bottom" withArrow shadow="lg">
                                            <Popover.Target>
                                                <button> <FaEllipsisVertical /> </button>
                                            </Popover.Target>
                                            <Popover.Dropdown className={`${theme === 'dark' ? '!bg-slate-700 !text-slate-200 !border-slate-700 !shadow-2xl' : ''} !p-0`}>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>reply</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>reply privately</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>forward</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>pin</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>star</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>report</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer border-b ${theme === 'dark' ? 'border-slate-500 hover:bg-slate-600' : 'hover:bg-slate-100'}`}>delete</div>
                                                <div className={`p-2.5 text-xs capitalize cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-600' : 'hover:bg-slate-100'}`}>message user directly</div>
                                            </Popover.Dropdown>
                                        </Popover>}
                                    </div>
                                    <div className="text-right text-xs">{item.time}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="h-[4.5rem] bg-white dark:bg-slate-800">
                    {messageIds.length < 1 ? <ChatForm /> :
                        <div className="flex items-center justify-between h-full w-11/12 mx-auto">
                            <div className="flex items-center gap-2">
                                <button className="text-xl hover:scale-110 transition-all hover:rotate-180" onClick={() => setMessageIds([])}><LiaTimesSolid /></button>
                                <span className="">{messageIds.length} Selected</span>
                            </div>
                            <div>
                                <button onClick={HandleTrashOut} className="text-2xl hover:scale-110 transition-all hover:rotate-[360deg]"> <PiTrash /> </button>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}
