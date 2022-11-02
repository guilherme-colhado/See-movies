import { Header } from "../../components/Header/Header";
import { Movie, MovieMain } from "./style";
import Avengers from "../../assets/avengers.jpeg";
import { useState } from "react";
import { BsPlayCircle } from 'react-icons/bs'
import { VideoModalComponent } from "../../components/Video";

export const MoviePage = () => {
    const [video, setVideo] = useState(false)

    return <Movie>
        <Header />
        <MovieMain>
            <figure>
                <img src={Avengers} alt="Avengers"/>
            </figure>
            <div>
                <h2>VINGADORES: ULTIMATO</h2>
                <h3>2019 - AÇÃO/FICÇÃO</h3>
                <div>
                    <button onClick={() => setVideo(!video)}><BsPlayCircle/> Assistir</button>
                </div>
            <p>
                Após Thanos eliminar metade das criaturas vivas, 
                os Vingadores têm de lidar com a perda de amigos e entes queridos. 
                Com Tony Stark vagando perdido no espaço sem água e comida, 
                Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco
            </p>
            </div>
        </MovieMain>
        {
            video && <VideoModalComponent setVideo={setVideo} videoId={"VBv8ILgZMbU"}/>
        }
    </Movie>
}
