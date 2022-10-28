import { VideoModal } from "./style"
import video from "../../assets/avengersVideo.mp4"

export const VideoModalComponent = () => {
    return <VideoModal>
        <video width="95%" controls>
            <source src={video} type="video/mp4"/>
        </video>
    </VideoModal>
}