import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from "../../Style/modal";
import { InputComponent } from '../Input';
import { FormEditMovie } from './style';

interface EditModalComponentProps {
    title: string;
    idVideo: string;
    urlImgCartaz: string;
    urlImgHd: string;
    setModal: Dispatch<SetStateAction<boolean>>;
}

interface event extends EventTarget {
    id: string    
}


export const EditModalComponent = ({title, idVideo, urlImgCartaz, urlImgHd,setModal}: EditModalComponentProps) => {
    const close = (id: string) => {
        id === "modal" && setModal(false)
    } 

    return <Modal id="modal" onClick={(e) => close((e.target as event).id)}>
        <FormEditMovie>
            <div>
                <h2>Editar Filme</h2>
                <button id="modal"><AiOutlineClose/></button>
            </div>
            <InputComponent type="text" placeholder={title}/>
            <InputComponent type="text" placeholder={idVideo}/>
            <InputComponent type="text" placeholder={urlImgCartaz}/>
            <InputComponent type="text" placeholder={urlImgHd}/>
            <button type='submit'>Enviar</button>
        </FormEditMovie>
    </Modal>
}