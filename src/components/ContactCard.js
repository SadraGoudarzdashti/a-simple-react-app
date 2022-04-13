import React from 'react';
import styled from 'styled-components';

const ContactCard = (props) => {
    const CardStyle = {
        width: '80%',
        display: 'flex',
        padding: '5px 10px',
        border: '1px solid #CA9CE1',
        borderRadius: '10px',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2BEFC',
        margin: '5px',
    }
    const InformationStyle = {
        flex: '2 1 67%',
        fontSize: '12px',
    }
    
    const ActionsStyle = {
        flex: '1 2 33%',
        display: 'flex',
        justifyContent: 'space-around',
    }
    
    const StyledCallButton = styled.button`
        font-family: Tanha;
        width: 40px;
        height: 40px;
        font-size: 11px;
        color: green;
        background-color: white;
        border: 1px solid aquamarine;
        border-radius: 50%;
        &:hover {
            color: white;
            background-color: aquamarine;
            border: 1px solid white;
        }
    `
    const StyledDeleteButton = styled.button`
        font-family: Tanha;
        width: 40px;
        height: 40px;
        font-size: 11px;
        color: red;
        background-color: white;
        border: 1px solid red;
        border-radius: 50%;
        &:hover {
            color: white;
            background-color: red;
            border: 1px solid white;
        }
    `
    
    return (
        <div style={CardStyle}>
            <div style={InformationStyle}>
                <p>{props.tel} {props.name}</p>
            </div>
            <div style={ActionsStyle}>
                <StyledCallButton>تماس</StyledCallButton>
                <StyledDeleteButton onClick={props.deleteContact}>حذف</StyledDeleteButton>
            </div>
        </div>
    )
}

export default ContactCard;