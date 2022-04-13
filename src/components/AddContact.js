import React, {useState} from 'react';
import styled from 'styled-components';

const AddContact = (props) => {

    const Containerstyle = {
        overflow: 'hidden',
        flexGrow: '1 2 40%',
        width: '100%',
        dislay: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    }
    
    const formStyle = {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    
    const RowInputStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '10px',
    }
    
    const inputStyle = {
        flex: '2 1 70%',
    }
    
    const labelStyle = {
        flex: '1 2 30%'
    }
    
    const submitFormStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    
    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        paddingRight: '25px',
    }    

    const StyledAddButton = styled.button`
        font-family: Tanha;
        width: 40px;
        height: 40px;
        padding: 4px;
        fontSize: 12px;
        margin: 20px;
        color: green;
        background-color: white;
        border: 2px solid green;
        border-radius: 50%;

        &:hover {
            color: white;
            background-color: green;
            border: 2px solid white;
        }
    `

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        setErrorMessage('')
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        else if (e.target.name === "telephone") {
            setTel(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length <= 0) {
            setErrorMessage('اسم نمی‌تواند خالی باشد!');
            return;
        }
        else if (!new RegExp('^[0-9]{1,20}$').test(tel)) {
            setErrorMessage('شماره تلفن باید شامل 1 تا 20 رقم باشد.')
            return;
        }
        props.addContact(name, tel);
        setName('');
        setTel('');
    }

    return (
        <div style={Containerstyle}>
            <h2>اضافه کردن مخاطب</h2>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div style={RowInputStyle}>
                    <div style={labelStyle}>
                        <label htmlFor="name">نام مخاطب</label><br/>
                    </div>
                    <div style={inputStyle}>
                        <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
                    </div>
                </div>
                <div style={RowInputStyle}>
                    <div style={labelStyle}>
                        <label htmlFor="telephone">شماره تلفن</label>
                    </div>
                    <div style={inputStyle}>
                        <input type="tel" id="telephone" name="telephone" value={tel} onChange={handleInputChange} />
                    </div>
                </div>
                <div style={submitFormStyle}>
                    <p style={errorStyle}>{errorMessage}</p>
                    <StyledAddButton type="submit" value="Submit">اضافه</StyledAddButton>
                </div>
            </form>
        </div>)
}

export default AddContact;