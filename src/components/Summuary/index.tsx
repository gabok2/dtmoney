import { useContext } from 'react';
import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';


import { Container } from "./styles";

export function Summary(){

    const {transactions} = useContext(TransactionsContext);
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas"/>
                </header>
                <strong>-R$200</strong>
            </div>
            <div className="verde">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"/>
                </header>
                <strong>R$6000</strong>
            </div>
        </Container>

    );
}