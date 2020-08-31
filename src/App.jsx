//importacion
/* eslint no-eval: 0*/
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'


//generación de la función del componente
const App = () => {

    //ArrayDestructuring
    //1er posición: valor (que inicialmente es por defecto)
    //2da posición: función que va a modificar el valor por defecto
    const [stack, setNumber] = useState("")//useState espera valor por defecto y será el valor inicial que tendrá el estado que va a devolver

    const items = words(stack, /[^-^+^*^/]+/g)

    console.log("Renderizacion de la App", items)

    const value = items.length > 0 ? items[items.length-1] : "0";

    const onClickOperationFunction = operation => {
        console.log("operation:", operation)
        setNumber(`${stack}${operation}`)
    }

    const onClickEqualFunction = equal => {
        console.log("Equal:", equal)
        setNumber(eval(stack))
    }

    const onContentClearFunction = clear => {
        console.log("clear:", clear)
        setNumber("")
    }

    const onDeleteFunction = del => {
        if (stack.length > 0) {
            console.log("delete:", del)
            const newStack = stack.substring(0, stack.length - 1)
            setNumber(newStack)
        }
    }

    const onClickNumberFunction = number => {
        console.log("Number:", number)
        setNumber(`${stack}${number}`)
    }

    
    //Lo que ejecuta la función
    return (
        <main className="react-calculator">
            <Result value={value} />
            <Numbers onClickNumber={onClickNumberFunction} />
            <Functions onContentClear={onContentClearFunction} onDelete={onDeleteFunction} />
            <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />
        </main>)
}

//exportación
export default App



