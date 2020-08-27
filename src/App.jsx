//importacion
import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'


//generación de la función del componente
const App = () => {

    const onClickOperationFunction = operation => {
        console.log("operation:", operation)
    }

    const onClickEqualFunction = equal => {
        console.log("Equal:", equal)
    }

    const onContentClearFunction = clear => {
        console.log("clear:", clear)
    }

    const onDeleteFunction = del => {
        console.log("delete:", del)
    }

    const onClickNumberFunction = number => {
        console.log("Number:", number)
    }


    //Lo que ejecuta la función
    return (
        <main className="react-calculator">
            <Result value={undefined} />
            <Numbers onClickNumber={onClickNumberFunction} />            
            <Functions onContentClear={onContentClearFunction} onDelete={onDeleteFunction} />
            <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />
        </main>)
}

//exportación
export default App



