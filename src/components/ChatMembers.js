import chats from '../records.json';
import { Context } from '../Context';
import { useContext} from 'react';
import '../styles/chatmembers.css';
export function ChatMembers({userName}){
    const userContext = useContext(Context);
    
    console.log(userContext.url);
    
    return(
        <div className='chat-members'>
            {chats.map((chat)=>{
                if(userName.length === 0 || chat.name.includes(userName)){
                    return(
                    <div className='contact' name={chat.name} onClick={()=>{userContext.setName(chat.name);userContext.setUrl(chat.img);userContext.setId(chat.id);chat.read='true';}}>
                        <div className='contact-div'>
                            <div className='image'>
                                <img src= {chat.img} alt=""/>
                            </div>
                            <div className='text-div'>
                                <span className='name'>{chat.name}</span>
                                {chat.read === 'true' ? <span>
                                    {chat.content}
                                </span> : <strong>{chat.content}</strong>}
                            </div>
                            
                            <div className='dot'>
                                {chat.read === 'false'?
                                    <div className='unread-message'>.</div>:null}
                            </div>
                        </div>
                    </div>
                )}
          })}
        </div>
        
    )
}