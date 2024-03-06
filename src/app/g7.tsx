import { useState } from 'react';

export  function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text: string) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];

export function Menu() {
    const [items, setItem] = useState(initialItems)
    const [selectedId, setSelectedId] = useState(0)

    const selectedItem = items.find(item => 
        item.id === selectedId
    )

    console.log(selectedItem)
    function handleItemChange(e: any, id: number) {
        setItem(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value
                };
            } else {
                return item;
            }
        }));
    }

    return (
        <>
        <h2>What's your travel snack?</h2>
        <ul>
            {items.map((item, index) => (
                <li key={item.id}>
                    <input
                        value={item.title} 
                        onChange={e => {handleItemChange(e, item.id)}}
                    />
                    {' '}
             <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
                </li>
            ))}  
        </ul>
        <p>You picked {selectedItem ? selectedItem.title : 'None'}.</p>
    </>    
    )
    
}