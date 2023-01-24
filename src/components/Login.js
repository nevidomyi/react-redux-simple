import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { login } from "../store/user";
import { useSelector } from "react-redux";

const LoginWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-items: center;
    align-items: center;
    padding: 50px;
`;
const Input = styled.input`
    margin-bottom: 10px;
    width: 200px;
    padding: 5px;
    font-size: 1.1em;
    font-family: "Inter";
    border-radius: 5px;
    border-color: #C7D3DD;
    color: #77B6EA;
`;
const LogInBtn = styled.button`
    margin-top: 30px;
    width: 100px;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 600;
    font-family: "Inter";
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: #77B6EA;
    color: #fff;
`;
const Form = styled.form`
    display: flex;
    flex-flow: column;
    justify-items: center;
    align-items: center;
`;

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    
    console.log(user);

    const [value, setValue] = useState({user});

    function inputHandler(name, value) {
        setValue((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    return(
        <LoginWrapper>
            <Form onChange={(event) => {
                inputHandler(event.target.name, event.target.value);
            }}>
                <Input type="text" placeholder="Name" name="name"/>
                <Input type="number" min="0" max="100" placeholder="Age" name="age"/>
                <Input type="email" placeholder="Email" name="email"/>
                <Input type="text" placeholder="Link for img" name="avatar"/>
            </Form>
            <LogInBtn
                onClick={(event) => {
                    event.preventDefault();
                    dispatch(login({
                        ...value,
                        logged: true,
                    }));
                }}
            >Log In</LogInBtn>
        </LoginWrapper>
    )
}

// Як передавати значення з інпутів при натисканні на логІнКнопку?