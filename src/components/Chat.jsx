import React, { useState } from 'react'
import styled from 'styled-components'
import mainBg from '../assets/images/mainBG.png'


const ChatBlock = styled.div`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    
`

const ChatHeader = styled.div`
    background: #323232;
    padding: 30px 15px;
    border-radius: 10px 10px 0px 0px;
        p{
            font-weight: 500;
            font-size: 18px;
            line-height: 14px;
            color: #FFFFFF;
            font-family: Arial;
        }
`

const ChatMain = styled.div`
   background: url(${mainBg});
   height: 80vh;
`

const Chatform = styled.form`
      position: relative;
   

    input {
     
        width: 100%;
        border: none;
        background: #323232;
        outline: none;
        padding: 20px;
        border-radius: 0px 0px 10px 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }

    button {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        border: none;
        background: inherit;
    }
`



const Chat = () => {
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    const [result, setResult] = useState('')


    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.match(/^[0-9+]+$/)) {
            let arr = value.split('+')
            let newArr = arr.reduce((acc, item) => {
                return +acc + +item
            })
            setMessages(value)
            setResult(newArr)
            setValue('')

        } else {
            setResult('Неверный формат')
            setMessages(value)
            setValue('')
        }



        // Второй вариант так же вариант с остальными арифметическими знаками. Тут используется функция eval()
        // if (value.match(/^[0-9+/*-]+$/)) {
        //     setMessages(value)
        //     setResult(eval(value))
        // } else {
        //     setResult('Неверный формат')
        // }
    }



    return (
        <ChatBlock>
            <ChatHeader>
                <p>Онлайн чат-калькулятор</p>
            </ChatHeader>
            <ChatMain>
                <div>
                    {messages}
                </div>
                <div>
                    {result && `= ${result}`}
                </div>
            </ChatMain>
            <Chatform>
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={handleSubmit}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4 17.4L18.85 9.91999C19.66 9.56999 19.66 8.42999 18.85 8.07999L1.4 0.599986C0.74 0.309986 0.00999999 0.799987 0.00999999 1.50999L0 6.11999C0 6.61999 0.37 7.04999 0.87 7.10999L15 8.99999L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z" fill="white" />
                    </svg>
                </button>
            </Chatform>
        </ChatBlock>
    )
}

export default Chat