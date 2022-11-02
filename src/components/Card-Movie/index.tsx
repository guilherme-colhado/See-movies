import { useNavigate } from "react-router-dom"
import { CardMovie } from "./style"
import { BsTrashFill as Trash, BsFillPencilFill as Pencil } from "react-icons/bs"
import { useState } from "react"
import { EditModalComponent } from "../EditMovie"

interface CardMovieComponentProps {
    imgHd: string
    imgCartaz: string
    title: string
    id: string
    idVideo: string
    isAdm?: boolean
}

export const CardMovieComponent = ({imgHd, imgCartaz, title, id, idVideo, isAdm}: CardMovieComponentProps) => {
    const nav = useNavigate()
    const [editModal, setEditModal] = useState(false)
    return <>
        <CardMovie pointer={!isAdm} onClick={() => !isAdm && nav(`/movies/${id}`)}>
            <img src={imgCartaz} alt={title} />
            {
                isAdm 
                &&
                <div>
                    <button onClick={() => setEditModal(true)}><Pencil/></button>
                    <button><Trash/></button>
                </div>
            }
            <h2>{title}</h2>
        </CardMovie>
        {
            editModal
            &&
            <EditModalComponent idVideo={idVideo} urlImgHd={imgHd} title={title} 
            urlImgCartaz={imgCartaz} setModal={setEditModal}/>
        }
    </>
}