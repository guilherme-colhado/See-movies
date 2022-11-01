import { CardMovie } from "./style"

interface CardMovieComponentProps {
    img: string
    title: string
    id: string
}

export const CardMovieComponent = ({img, title, id}: CardMovieComponentProps) => {
    return <CardMovie href={`/movies/${id}`}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
    </CardMovie>
}