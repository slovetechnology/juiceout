import profileimg from "../assets/images/myprofile.jpeg"
import { FaEllipsisVertical } from 'react-icons/fa6'
import { LuAlignRight, LuUsers2 } from 'react-icons/lu'
import { VscMusic, VscSettingsGear } from 'react-icons/vsc'
import { AiOutlineUser } from 'react-icons/ai'
import { BsMoon, BsShop, BsSun } from 'react-icons/bs'
import { LiaTimesSolid } from 'react-icons/lia'
import { useState } from "react"
import ImageModal from "./ImageModal"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Subs = [
    "all",
    "unread",
    "pinned",
    "groups",
    "socials",
]

const ForeSubs = [
    { Icon: VscSettingsGear, title: "privacy" },
    { Icon: AiOutlineUser, title: "profile" },
    { Icon: LuUsers2, title: "groups" },
    { Icon: BsShop, title: "marketplace" },
    { Icon: VscMusic, title: "listen" },
]
LeftSide.propTypes = {
    theme: PropTypes.string,
    HandleThemes: PropTypes.func,
}

export default function LeftSide({ theme, HandleThemes }) {
    const [views, setViews] = useState(false)
    const [imgs, setImgs] = useState(false)
    const [activeSub, setActiveSub] = useState("all")
    const ViewsIcon = views ? LiaTimesSolid : LuAlignRight
    const ThemeIcon = theme === 'dark' ? BsSun : BsMoon

    return (
        <div className="dark:text-slate-200">
            {imgs && <ImageModal
                closeview={() => setImgs(false)}
            />}
            <div className="bg-white dark:bg-slate-800 h-[4rem]">
                <div className="flex items-center gap-2 h-full w-11/12 mx-auto justify-between">
                    <div className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-blue-600">Polar</div>
                    <div className="flex items-center gap-3">
                        <div
                            onClick={HandleThemes}
                            className="p-2 rounded-full hover:bg-slate-100 hover:dark:bg-slate-900 cursor-pointer hover:scale-110 transition-all text-xl"> <ThemeIcon /> </div>
                        <div className="p-2 rounded-full hover:bg-slate-100 hover:dark:bg-slate-900 cursor-pointer hover:scale-110 transition-all text-xl"> <FaEllipsisVertical /> </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto py-2">
                <input type="text" placeholder="Search here..." className="w-full text-sm bg-white outline-none dark:bg-slate-800 p-3 rounded-md" />
                <div className="flex items-center gap-1 mt-2">
                    <div className="overflow-x-auto w-full">
                        <div className="flex items-center gap-1.5 w-fit">
                            {Subs.map((item, index) => (
                                <button
                                    onClick={() => setActiveSub(item)}
                                    className={`rounded-lg hover:scale-y-105 hover:font-semibold transition-all py-1.5 px-3 text-xs capitalize ${activeSub === item ? 'bg-gradient-to-tr from-orange-600 to-blue-600 text-white' : 'bg-white dark:bg-slate-800'}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => setViews(prev => !prev)}
                        className="w-fit ml-auto text-2xl active:scale-125 cursor-pointer p-2 rounded-full hover:bg-white hover:dark:bg-slate-800 hover:scale-110 transition-all"><ViewsIcon /></button>
                </div>
                <div className={`${views ? 'h-[3.6rem]' : 'h-0'} transition-all overflow-hidden`}>
                    <div className="grid grid-cols-6 gap-2 mt-2">
                        {ForeSubs.map((item, index) => (
                            <div className="flex items-center cursor-pointer flex-col py-1.5 px-2.5 group" key={index}>
                                <item.Icon className="text-2xl group-hover:scale-150 group-hover:mt-2 transition-all" />
                                <div className="text-[0.6rem] group-hover:hidden capitalize text-slate-500">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${views ? 'h-[69.2dvh]' : 'h-[76.7dvh]'} transition-all overflow-y-auto overflow-x-hidden`}>
                {new Array(30).fill(0).map((item, index) => (
                    <div className="hover:bg-white hover:dark:bg-slate-800 transition-all" key={index}>
                        <div className="flex items-center gap-2">
                            <img
                                onClick={() => setImgs(true)}
                                src={profileimg} alt="" className="size-12 cursor-pointer rounded-full object-cover ml-2" />

                            <Link to="?chat=12039" className="border-b dark:border-slate-600 cursor-pointer grid grid-cols-7 items-center gap-1 w-full pr-4 py-3">
                                <div className="col-span-6">
                                    <div className="font-semibold truncate">Lorem ipsum dolor sit amet. and more telling stories and evens</div>
                                    <div className="text-sm text-zinc-500 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, unde!</div>
                                </div>
                                <div className="text-xs col-span-1 text-right">
                                    <div className="">12/9/2024</div>
                                    <div className="">300</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


