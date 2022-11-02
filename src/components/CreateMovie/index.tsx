import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from "../../Style/modal";
import { InputComponent } from '../Input';
import { FormCreateMovie } from './style';

interface CreateModalComponentProps {
    setModal: Dispatch<SetStateAction<boolean>>;
}

interface event extends EventTarget {
    id: string    
}


export const CreateModalComponent = ({setModal}: CreateModalComponentProps) => {
    const close = (id: string) => {
        id === "modal" && setModal(false)
    } 

    return <Modal id="modal" onClick={(e) => close((e.target as event).id)}>
        <FormCreateMovie>
            <div>
                <h2>Criar Filme</h2>
                <button id="modal"><AiOutlineClose/></button>
            </div>
            <InputComponent type="text" label="Titulo"/>
            <InputComponent type="text" label="Id Youtube"/>
            <InputComponent type="text" label="Url Img Cartaz"/>
            <InputComponent type="text" label="Url Img Hd"/>
            <button type='submit'>Enviar</button>
        </FormCreateMovie>
    </Modal>
}