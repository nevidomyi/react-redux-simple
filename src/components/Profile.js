import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import user, { logout } from "../store/user";

const ProfileWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    max-width: 400px;
`;

const AvatarWrapper = styled.div`
    height: 250px;
    width: 250px;
    padding: 5px;
    margin: 5px;
    background: lightgray;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TextLine = styled.p`
    margin: 10px;
    font-size: 1.1em;
`;

const LogOutBtn = styled.button`
    margin-top: 30px;
    width: 100px;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 600;
    font-family: "Inter";
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: gray;
    color: #fff;
`;



export default function Profile() {
    const {name, age, email, avatar} = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    function logOutHandler(event) {
        event.preventDefault();
        dispatch(logout());
    }

    console.log(useSelector((state) => state.user.value));

    return(
        <ProfileWrapper>
            <AvatarWrapper>
                <Avatar src={avatar}/>
            </AvatarWrapper>
            <TextLine>Name: {name}</TextLine>
            <TextLine>Age: {age}</TextLine>
            <TextLine>Email: {email}</TextLine>
            <LogOutBtn onClick={event => logOutHandler(event)}>
                Log out
            </LogOutBtn>
        </ProfileWrapper>
    )
}