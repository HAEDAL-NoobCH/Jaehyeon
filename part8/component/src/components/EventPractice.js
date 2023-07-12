import {useState} from "react";

const EventPractice = () => {

    const [username, setUsername]=useState('');
    const [message, setMessage]=useState('');

    const onClickHandler = () => {
        alert(username + ": "+message);
        setUsername('');
        setMessage('');
        
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        
        <div>
            <input type="text" name="username" value={username} onChange={
                onChangeUsername
            }/>
            <input type="text" name="message" value={message} 
            onChange={onChangeMessage}/>
            <button onClick={onClickHandler}>확인</button>
        </div>
    )
}

export default EventPractice;