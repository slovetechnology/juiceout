import { LiaTimesSolid } from "react-icons/lia"
import profileimg from "../assets/images/myprofile.jpeg"
import imgbg from "../assets/images/img.jpg"
import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Imaged from "./Imaged"

ImageModal.propTypes = {
    closeview: PropTypes.func
}

export default function ImageModal({closeview}) {
    const containerRef = useRef()
    const cs = `fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm imgmodal z-10`

    useEffect(() => {
        if (containerRef) {
            window.addEventListener('click', (e) => {
                if(e?.target?.className === containerRef?.current?.className) return closeview()
            }, true)
        }
    }, [closeview])
    return (
        <div ref={containerRef} className={cs}>
            <div className="bg-gradient-to-t from-transparent to-black/70">
                <div className="flex items-center justify-between w-11/12 py-3 mx-auto">
                    <div className="flex items-center gap-2 text-white">
                        <Imaged src={profileimg} alt="" className="size-10 object-cover rounded-full" />
                        <div className="">Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div
                     onClick={closeview}
                     className="w-fit ml-auto text-2xl text-white cursor-pointer"> <LiaTimesSolid /> </div>
                </div>
            </div>
            <div className="w-full h-fit max-h-[80dvh] mt-5 mx-auto max-w-3xl imgsub">
                <Imaged src={imgbg} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}
