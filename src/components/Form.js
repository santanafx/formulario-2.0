import React from 'react'
import styles from './Form.module.css'

export const Form = ({ placeholder }) => {

    const [dado1, setDado1] = React.useState('');
    const [dado2, setDado2] = React.useState('');
    const [dado3, setDado3] = React.useState('');
    const [dado4, setDado4] = React.useState('');
    const [dado5, setDado5] = React.useState('');
    const [dado6, setDado6] = React.useState('');
    const [dado7, setDado7] = React.useState('');
    const [dado8, setDado8] = React.useState(false);
    const [dado9, setDado9] = React.useState(false);
    const [dado10, setDado10] = React.useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dado1, dado2, dado3, dado4, dado5, dado6, dado7, dado8, dado9, dado10)
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input1'>Campo 1</label>
                <input onChange={(event) => setDado1(event.target.value)} type="text" id='input1' placeholder={placeholder} value={dado1} />
                <label htmlFor='input2'>Campo 2</label>
                <input onChange={(event) => setDado2(event.target.value)} type="text" id='input2' placeholder={placeholder} value={dado2} />
                <label htmlFor='input3'>Campo 3</label>
                <input onChange={(event) => setDado3(event.target.value)} type="text" id='input3' placeholder={placeholder} value={dado3} />

                <select value={dado4} onChange={(event) => setDado4(event.target.value)}>
                    <option key="Lista" disabled></option>
                    <option key="Lista1">Lista1</option>
                    <option key="Lista2">Lista2</option>
                    <option key="Lista3">Lista3</option>
                </select>

                <textarea value={dado5} cols="50" rows="5" onChange={(event) => setDado5(event.target.value)}>
                </textarea>

                <section className={styles.radio}>
                    <label htmlFor='radio 1'> Radio 1</label>
                    <input id='radio 1' name='radio' type="radio" value='Radio 1' onChange={(event) => setDado6(event.target.value)} />
                    <label htmlFor='radio 2'> Radio 2</label>
                    <input id='radio 2' name='radio' type="radio" value='Radio 2' onChange={(event) => setDado6(event.target.value)} />
                    <label htmlFor='radio 3'> Radio 3</label>
                    <input id='radio 3' name='radio' type="radio" value='Radio 3' onChange={(event) => setDado6(event.target.value)} />
                </section>

                <section className={styles.radio}>
                    <label htmlFor='radio 1'> Radio 1</label>
                    <input id='radio 1' name='radio 2' type="radio" value='Radio 1' onChange={(event) => setDado7(event.target.value)} />
                    <label htmlFor='radio 2'> Radio 2</label>
                    <input id='radio 2' name='radio 2' type="radio" value='Radio 2' onChange={(event) => setDado7(event.target.value)} />
                    <label htmlFor='radio 3'> Radio 3</label>
                    <input id='radio 3' name='radio 2' type="radio" value='Radio 3' onChange={(event) => setDado7(event.target.value)} />
                </section>

                <section>
                    <label htmlFor='check-box 1'>Termo 1</label>
                    <input id='check-box 1' type="checkbox" checked={dado8} onChange={(event) => setDado8(event.target.checked)} />
                    <label htmlFor='check-box 2'>Termo 2</label>
                    <input id='check-box 2' type="checkbox" checked={dado9} onChange={(event) => setDado9(event.target.checked)} />
                    <label htmlFor='check-box 3'>Termo 3</label>
                    <input id='check-box 3' type="checkbox" checked={dado10} onChange={(event) => setDado10(event.target.checked)} />
                </section>

                <button >Adicionar</button>
            </form>
        </section>
    )
}
