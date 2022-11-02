import { useNavigate } from "react-router-dom"
import { CardMovie } from "./style"
import { BsTrashFill as Trash, BsFillPencilFill as Pencil } from "react-icons/bs"

interface CardMovieComponentProps {
    img: string
    title: string
    id: string
    isAdm?: boolean
}

export const CardMovieComponent = ({img, title, id, isAdm}: CardMovieComponentProps) => {
    const nav = useNavigate()
    return <CardMovie pointer={!isAdm} onClick={() => !isAdm && nav(`/movies/${id}`)}>
        <img src={img} alt={title} />
        {
            isAdm 
            &&
            <div>
                <button><Pencil/></button>
                <button><Trash/></button>
            </div>
        }
        <h2>{title}</h2>
    </CardMovie>
}