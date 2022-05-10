
import '../styles/chatbar.css'
import { Context } from '../Context';
import { useContext } from 'react';
export function ChatBar(){

    const userContext = useContext(Context);
    
    return(
        <div>
            {userContext.Id !== '0'?
            <div className='header'>
                <div  className="profile" >
                    <img src={userContext.url} alt=""/>
                </div>
                <span>{userContext.name}</span>
                <div>
                    <img   className="add-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"  alt=""/>
                </div>
            </div>:null}
        </div>
        
    )

}