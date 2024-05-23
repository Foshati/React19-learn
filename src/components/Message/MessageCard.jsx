import { useState } from 'react'

import Message from './Message'

function MessageCard() {
  const [messages, setMessages] = useState([])

  async function createTimeout(message) {
    await new Promise((res) => setTimeout(res, 2000))

    return message
  }

  async function sendMessage(formData) {
    const sentMessage = await createTimeout(formData.get('message'))

    setMessages((messages) => [...messages, { text: sentMessage }])
  }

  return <Message messages={messages} sendMessage={sendMessage} />
}

export default MessageCard
