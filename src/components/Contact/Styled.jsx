import styled from "styled-components";


const BoxForm = styled.div`
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 10rem;
`;

const StyledForm = styled.form`
    margin-left: 1.2rem;
    margin-right: 1.2rem;
`;

const LabelContact = styled.label`
    font-weight: 600;
    font-size: clamp(16px, 3vw, 17px);
    line-height: 32px;
    color: #FCA61F;
`;

const COlMdForm = styled.div`
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;

    @media (min-width: 768px) {
        flex: 0 0 auto;
        width: 50%;
    }
`;
const COlForm = styled.div`
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    flex: 0 0 auto;
    width: 100%;
`;
const InputContact = styled.input`
    height: 55px;
    background: #F7F7F7;
    font-size: 16px;
    color: #717171;
    border: solid 1px #FCA61F;
    box-shadow: 0px 20px 24px 3px rgba(255, 186, 94, 0.24);
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-weight: 400;
    border-radius: 18px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;


    &:focus {
        border-color: #FCA61F;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(252 166 31 / 45%);
    }

`;

const TextareaContact = styled.textarea`

    background: #F7F7F7;
        font-size: 16px;
        color: #717171;
        border: solid 1px #FCA61F;
        box-shadow: 0px 20px 24px 3px rgba(255, 186, 94, 0.24);
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-weight: 400;
        border-radius: 18px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        margin-bottom: 25px;

        &:focus {
            border-color: #FCA61F;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(252 166 31 / 45%);
        }
`;


export {BoxForm, StyledForm, InputContact, LabelContact, COlMdForm, COlForm, TextareaContact};