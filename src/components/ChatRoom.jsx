import { useAtom } from "jotai"
import { JotaiTheme } from "../store/store"
import profileimg from "../assets/images/myprofile.jpeg"
import { FaArrowLeftLong, FaEllipsisVertical, FaMagnifyingGlass } from "react-icons/fa6"
import ChatForm from "./ChatForm"
import { Link } from "react-router-dom"
import ImageModal from "./ImageModal"
import { useState } from "react"



export default function ChatRoom() {
    const [theme,] = useAtom(JotaiTheme)
    const [imgs, setImgs] = useState(false)
    return (
        <>
        {imgs && <ImageModal
            closeview={() => setImgs(false)}
        />}
        <div className=" dark:text-slate-200">
            <div className="bg-white dark:bg-slate-800 h-[4rem]">
                <div className="flex items-center justify-between h-full w-[97%] mx-auto gap-5">
                    <div className="flex items-center w-4/6 md:w-4/5 gap-3">
                    <Link to="?" className="text-lg"> <FaArrowLeftLong /> </Link>
                        <img 
                        onClick={() => setImgs(true)}
                        src={profileimg} alt="" className="size-10 rounded-full cursor-pointer object-cover" />
                        <Link to="/profile" className="truncate">
                            <div className="font-bold text-sm md:text-base truncate">Lorem ipsum dolor sit amet.</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-xl dark:text-slate-200 dark:hover:bg-slate-900 rounded-full hover:bg-slate-100 transition-all hover:scale-110 p-2"> <FaMagnifyingGlass /> </button>
                        <button className="text-xl dark:text-slate-200 dark:hover:bg-slate-900 rounded-full hover:bg-slate-100 transition-all hover:scale-110 p-2"> <FaEllipsisVertical /> </button>
                    </div>
                </div>
            </div>
                <div className="h-[82dvh] py-2 px-5 lg:px-3 overflow-y-auto overflow-x-hidden">
                    {/* sender */}
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* receiver */}
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* sender */}
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* receiver */}
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* sender */}
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* receiver */}
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* sender */}
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-white dark:bg-slate-700 py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tr-lg w-fit max-w-[90%] lg:max-w-[60%] mb-1.5 ${theme === 'light' ? 'incoming' : 'incoming-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    {/* receiver */}
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolore animi aliquam repudiandae sunt nostrum dolor perferendis tenetur blanditiis eius?</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                    <div className={`bg-[#E0FFFF] dark:bg-[#3f7777] py-1.5 pr-1.5 pl-2 rounded-b-lg rounded-tl-lg w-fit max-w-[90%] lg:max-w-[60%] ml-auto mb-1.5 ${theme === 'light' ? 'outgoing' : 'outgoing-dark'} shadow-md`}>
                        <div className="text-sm">Lorem, ipsum dolor sit amet</div>
                        <div className="text-right text-xs">08:55pm</div>
                    </div>
                </div>
            <div className="h-[4.5rem] bg-white dark:bg-slate-800">
                <ChatForm />
            </div>
        </div>
        </>
    )
}
