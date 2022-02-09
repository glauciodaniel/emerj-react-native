import  { Text} from 'react-native';
import { useState, useEffect } from 'react';
import io from "socket.io-client";
import styled from 'styled-components/native';



const Container = styled.View`
  width: 100%;
  height: 100%;
`

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 100px;
`

export default function Chat(props:any){

const [chatMessage, setChatMessage] = useState("");
const [chatMessages, setChatMessages] = useState([]);
  
useEffect( async ()=>{
    const socket = await io("http://127.0.0.1:3000");
    	socket.on("chat message", msg => {
      		setChatMessages([
		...chatMessages,
		msg   
		]);
     	});

const submitChatMessage = ()=> {
    socket.emit('chat message', chatMessage);
    setChatMessage('');
  }

}, [])

const chat = chatMessages.map(chatMessage => (
      <Text>{chatMessage}</Text>
    ));


return (
	<Container>
		{chat}

	<TextInput
    defaultValue={chatMessage}
    onSubmitEditing={() => submitChatMessage()}
    onChangeText={chatMessage => {
    setChatMessage(chatMessage);
    }}
    />
	</Container>
	)
}

