import { useState } from 'react';

const listItems = [ 
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]
export function Compon() {
   const [items, setItems] = useState(listItems)

    function handleDeleteItem(idItem: number) {
        const updateItems = items.filter(item => (item.id !== idItem))
        setItems(updateItems)
    }
    return (
        <div>
        <h2>Items</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
       <>
          <h2>Almaty, Kazakhstan</h2>
          <Panel
              title = "About"
              isActive = {activeIndex === 0 }
              onShow= {() => setActiveIndex(0)} 
            >
             With a population of about 2 million, Almaty is Kazakhstan's largest city. 
             From 1929 to 1997, it was its capital city.
            </Panel>

            <Panel
              title = "Help"
              isActive = {activeIndex === 1 }
              onShow= {() => setActiveIndex(1)} 
            >
 The name comes from , the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple,
  and the wild is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>        
       </>

    )
}

interface panel {
     title: string,
     children: string,
     isActive: boolean,
     onShow: ()=>void
}

function Panel({title, children, isActive, onShow}: panel) {
      return(
          <>
             <section>
                  <h3>{title}</h3>
                  {isActive ? (<p>{children}</p>): (<button onClick={onShow}>Show</button>)}
             </section>
          </>

      )
}
