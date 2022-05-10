
import { useState } from 'react';
import { GrAttachment } from "react-icons/gr";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import '../styles/TypeMessage.css';

export function TypeMessage({pushMessage}){

    const [message,setMessage] = useState('');

    const handleClick=()=>{
        pushMessage(message);
    }

    const handleChange=(e)=>{
        setMessage(e.target.value);
    }


    console.log("render");
    return(
        <div className="type">
            <div className='messaging-div'>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/3260/3260867.png" className='emoji' alt="emoji"/> */}
                <span className='emoji'><BsFillEmojiSmileFill/></span>
                {/* <img src="https://cdn-icons.flaticon.com/png/512/304/premium/304985.png?token=exp=1652085749~hmac=ffe5dc907665611f23b0659421246eeb" className='attach' alt="Attach"/> */}
                <span className='gt-attach'><GrAttachment/></span>
                
                <input type="text" placeholder='Type a Message' className='typing-message' onChange={handleChange}/>
                {/* <img src="https://cdn-icons.flaticon.com/png/512/3106/premium/3106794.png?token=exp=1652085783~hmac=c0bad5e036dc61601042dc60849985e5" alt="send" onClick={handleClick}/> */}
                <span className='send' onClick={handleClick}><IoSend/></span>
            </div>
        </div>
    )
}