import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CloseModal, Modal } from "../../Style/modal";

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

    return <Modal onClick={(e) => close((e.target as event).id)}>
        <CloseModal><AiOutlineClose/></CloseModal>
        <video width="95%" controls id="video">
            <source src={video} type="video/mp4"/>
        </video>
    </Modal>
}