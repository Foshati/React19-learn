import { useRef } from 'react'

function MessageForm({ addOptimisticMessage, sendMessage }) {
  const formRef = useRef()

  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'))

    formRef.current.reset()

    await sendMessage(formData)
  }

  return (
    <form
      action={formAction}
      ref={formRef}
      className='flex flex-col gap-5 max-w-xl p-8 mx-auto my-8 bg-slate-800 rounded-md'
    >
      <input
        name='message'
        id='message'
        type='text'
        className='p-2 bg-slate-600 outline-none rounded-md'
        placeholder='Message'
      />
      <button
        type='submit'
        className='p-2 bg-slate-900 text-slate-100 rounded-md'
      >
        Send
      </button>
    </form>
  )
}

export default MessageForm
