import React from 'react';

interface Item {
    name: string,
    category: string
    price: number
}

interface Check {
    item: Item
    ischecked: boolean
}

function Item({item, ischecked}: Check) {
       if(ischecked) {
         return (
              <div>
                  <h2>{item.name}</h2>
                  <h2>{item.category}</h2>
                  <h2>{item.price}</h2>   
              </div>
         )
       }
       else return null

}


export default function Hthi() {
    return (
        <>
         <h1>Hiển thị mặt hàng</h1>
         <Item 
            item = {
                {
                    name: "bánh đậu",
                    category: "bánh",
                    price: 20000
                }
            }
            ischecked = {true}
         />
         <Item 
            item = {
                {
                    name: "kẹo kéo",
                    category: "kẹo",
                    price: 10000
                }
            }
            ischecked = {false}
         />
         <Item 
            item = {
                {
                    name: "chè hải yến",
                    category: "che",
                    price: 30000
                }
            }
            ischecked = {true}
         />                  
        </>
    )

}