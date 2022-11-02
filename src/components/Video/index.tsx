import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CloseModal, Modal } from "../../Style/modal";
import YouTube, { YouTubeProps } from 'react-youtube';

interface videoModalComponentProps {
    videoId: string;
    setVideo: Dispatch<SetStateAction<boolean>>;
}

interface event extends EventTarget {
    id: string    
}


export const VideoModalComponent = ({videoId, setVideo}: videoModalComponentProps) => {
    const close = (id: string) => {
        id !== "video" && setVideo(false)
    } 

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return <Modal onClick={(e) => close((e.target as event).id)}>
        <CloseModal><AiOutlineClose/></CloseModal>
        <YouTube style={{width: "90%", height: "80%"}} videoId={videoId} opts={opts}/>
    </Modal>
}