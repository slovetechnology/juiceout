

import { useRef, useState } from 'react'
import { BsFillMicFill } from 'react-icons/bs'
import {IoMdHappy} from 'react-icons/io'
import { LiaTelegramPlane, LiaTimesSolid } from 'react-icons/lia'
import { EmojiPicker } from "react-emoji-search";


export default function ChatForm() {
    const textareaRef = useRef()
    const [content, setContent] = useState('')
    const [icons, setIcons] = useState(false)
    const Icontab = icons ? LiaTimesSolid : IoMdHappy

    const InputEmojiHandler = val => {
        const textarea = textareaRef.current;
        const start = textarea.selectionStart; 
        const end = textarea.selectionEnd;
        const newText = content.substring(0, start) + val + content.substring(end);
        setContent(newText);
        textarea.focus();
    }

  return (
    <div className='relative'>
    {icons && 
        <div className="h-[20rem] w-full absolute bottom-16 left-0">
        <EmojiPicker
            onEmojiClick={(emoji) => InputEmojiHandler(emoji)}
            emojiSize={24}
            emojiSpacing={8}
            styles={{
                backgroundColor: "#212e35"
            }}
        />
    </div>}
        <div className="flex items-center gap-3 px-2 pt-3">
            <button 
            onClick={() => setIcons(!icons)}
            className='text-[1.6rem] rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-300 hover:scale-110 transition-all'> <Icontab /> </button>
            <textarea
            value={content}
            ref={textareaRef}
            onChange={e => setContent(e.target.value)}
            placeholder="Type a message..." className="w-full bg-slate-100 dark:bg-slate-700 py-2 px-3 rounded-lg resize-none outline-none text-sm h-12"></textarea>
            {!content ? <button className='text-[1.6rem] rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-300 hover:scale-110 transition-all'> <BsFillMicFill /> </button> :
            <button className='text-[1.6rem] rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-300 hover:scale-110 transition-all'> <LiaTelegramPlane /> </button>}
        </div>
    </div>
  )
}
