import { VideoModal } from "./style"
import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface videoModalComponentProps {
    video: string;
    setVideo: Dispatch<SetStateAction<boolean>>;
}

interface event extends EventTarget {
    id: string    
}


export const VideoModalComponent = ({video, setVideo}: videoModalComponentProps) => {
    const close = (id: string) => {
        id !== "video" && setVideo(false)
    } 

    return <VideoModal onClick={(e) => close((e.target as event).id)}>
        <button><AiOutlineClose/></button>
        <video width="95%" controls id="video">
            <source src={video} type="video/mp4"/>
        </video>
    </VideoModal>
}