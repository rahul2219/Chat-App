
import { useState } from 'react';
import '../styles/App.css';
import { ChatBar } from './ChatBar';
import { ChatMembers } from './ChatMembers';
import { Conversation } from './Conversation';
import records from '../records.json';
import { Context } from '../Context';
import { useContext } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";


function App() {
  const userContext=useContext(Context);
  const [userName,setuserName] = useState('');
  

  const[showContacts,setshowContacts] = useState(false);

  const handleClick=()=>{
    setshowContacts(!showContacts);
  }
  const handleOnChange = (e)=>{
    setuserName(e.target.value);
  }

  return (
    <div className="App">
      <div className='left-div'>
        <div className='conversations'>
          <div className='top-div'>
            <div className='search'>
              <div className='search-image'>
                <span className='search-icon'><BsSearch/></span>
              </div>
              <div className='input-classs'>
                  <input type="text" placeholder = "Search for Conversation" onChange={handleOnChange}/>
              </div>
            </div>
          </div>
          
          <div className='conversation-div'>
            <span className='chats'>
              <span>Conversations</span>
            </span>
            {showContacts ? <span className='add-contacts second-remove' onClick={handleClick}><AiOutlineCloseCircle/></span>:<span className='add-contacts second-add' onClick={handleClick}><GrAddCircle/></span>}
            
          </div>
          
          <ChatMembers userName={userName}/>
        </div>
      </div>
      <div className='right-div'>
        <ChatBar/>
        <Conversation/>
      </div>
      {showContacts && <div className='show-contacts'>
        {records.map((record)=>(<div className='contact contact-details' onClick={()=>{userContext.setName(record.name);userContext.setUrl(record.img);userContext.setId(record.id);record.read='true';}}><img src={record.img}/>{record.name}</div>))}

  </div>}
    </div>
    
  );
}

export default App;
