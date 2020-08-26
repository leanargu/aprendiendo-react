//importacion
import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Functions from './components/Functions'
import './App.css'

//generación de la función del componente
const App = () => {

    const clickHandlerFunction = text => {
        console.log(text)
    }
    //Lo que ejecuta la función
    return (
        <main className="react-calculator">
            <Result value={undefined} />
            <div className="numbers">
                <Button text="1" clickHandler={clickHandlerFunction} />
                <Button text="2" clickHandler={clickHandlerFunction} />
                <Button text="3" clickHandler={clickHandlerFunction} />
                <Button text="4" clickHandler={clickHandlerFunction} />
                <Button text="5" clickHandler={clickHandlerFunction} />
                <Button text="6" clickHandler={clickHandlerFunction} />
                <Button text="7" clickHandler={clickHandlerFunction} />
                <Button text="8" clickHandler={clickHandlerFunction} />
                <Button text="9" clickHandler={clickHandlerFunction} />
                <Button text="0" clickHandler={clickHandlerFunction} />
            </div>
            <Functions
                onContentClear={clear =>
                    console.log("clear:", clear)
                }
                onDelete = {del =>
                    console.log("delete:", del)
                }
            />
            <MathOperations
                onClickOperation={operation =>
                    console.log("operation:", operation)
                }
                onClickEqual={equal =>
                    console.log("Equal:",equal)
                }
            />
        </main>)
}

//exportación
export default App



