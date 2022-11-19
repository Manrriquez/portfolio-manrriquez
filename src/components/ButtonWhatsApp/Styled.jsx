import styled, { keyframes } from "styled-components";

const BoxIcon = styled.a`
    text-decoration: none;
`;

const FloatingButton = styled.button`
    position: fixed;
    bottom: 5px;
    right: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    border: none !important;
    background: transparent;
    align-items:center;
    justify-content:center;
    z-index: 1000;
`;

const PulseButton = keyframes`
    to{
        box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
`;

const WhatsappIcon = styled.div`
    background-color: #42db87;
    color: #fff;
    width: 60px;
    height: 60px;
    font-size:30px;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translatey(0px);
    animation: pulse 1.5s infinite;
    box-shadow: 0 0 0 0 #42db87;
    -webkit-animation: ${PulseButton}  1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: ${PulseButton}  1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: ${PulseButton}  1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: ${PulseButton}  1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    font-weight: normal;
    font-family: sans-serif;
    text-decoration: none !important;
    transition: all 300ms ease-in-out;
`;

export {BoxIcon, FloatingButton, WhatsappIcon};