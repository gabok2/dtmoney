import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TansactionTypeContainer,RadioBox } from './styles';
import { FormEvent, useState,useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps){
    const {createTransaction}= useContext(TransactionsContext)
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('false');

    async function handleCreateNewTransaction(event: FormEvent){
       event.preventDefault();

      await createTransaction({
           title,
           type,
           amount,
           category,
       })

       setTitle('');
       setAmount(0);
       setCategory('');
       setType('');
       onRequestClose();
   }
  
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            className="react-modal-close"  
            onClick={onRequestClose} 
            type="button"
            >
            <img src={closeImg} alt="Close"/>
               
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event=> setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event=> setAmount(Number(event.target.value))}
                />

                <TansactionTypeContainer>
                    <RadioBox 
                    isActive={type==='true'}
                    activeColor="green"
                    onClick={()=>{setType('true');}}
                    type="button">
                    
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                     isActive={type==='false'}
                     activeColor="red"
                    onClick={()=>{setType('retirada')}}
                    type="button">
                    <img src={outcomeImg} alt="Saida"/>
                    <span>Saida</span>
                    </RadioBox>

                </TansactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event=> setCategory(event.target.value)}
                />

                <button type="submit">
                Cadastrar
                
                </button>
            </Container>
        </Modal>
        
    );
}