import records from '../records.json';
import '../styles/Conversation.css'
import { Context } from '../Context';
import { useContext, useEffect, useState} from 'react';
import { TypeMessage } from './TypeMessage';


export function Conversation(){
    const[messages,setMessages] = useState([]);
    const userContext = useContext(Context);
    const [mytext,setMyText] = useState('');
    useEffect(()=>{
        if(userContext.Id !== '0'){
            // console.log(records[userContext.Id-1].messages);
            console.log(records[userContext.Id-1]);
            let messages1=[];
            records[userContext.Id-1].messages.map(message=>(messages1.push(message)));
            setMessages(messages1);
            console.log(messages.length);
        }
        else{
            console.log("ok");
        }
    },[userContext.Id]);

    const pushMessage=(message)=>{
       records[userContext.Id-1].sentMessages.push(message); 
       setMyText(message);
    }


    return(
        <div>   
            {userContext.Id !== '0'? <div className="wallpaper">
                <div className='messages'>
                    {messages.map((message)=>(
                        <div className='message-div'><img src={userContext.url} alt="user-profile"/><div className='message'><div>{message}</div></div><br /></div>
                    ))}
                </div>
                {records[userContext.Id-1].sentMessages.map((message)=>(<div className='my-messagediv'><div className='my-message'><span>{message}</span></div></div>))}
            </div>:
            <div>
                <span className='home' >Tap on a particular contact to see the Conversation. </span>
            </div>}
            {userContext.Id !== '0'&& <TypeMessage pushMessage={pushMessage}/>}
            

        </div>
        
        
    )
}