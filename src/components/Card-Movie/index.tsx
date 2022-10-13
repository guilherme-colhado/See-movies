import { CardMovie } from "./style"

interface CardMovieComponentProps {
    img: string
    title: string
}

export const CardMovieComponent = ({img, title}: CardMovieComponentProps) => {
    return <CardMovie>
        <img src={img} alt={title} />
        <h2>{title}</h2>
    </CardMovie>
}