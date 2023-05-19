import React from 'react'
import './SelectedList.css'
import { Chip } from '@mui/material';

type Props = {
     selectedItems: string[];
     deleteItem(value: string): void
}

function SelectedList({ selectedItems, deleteItem }: Props) {
     return (
          <>
               {selectedItems.length ?
                    <section style={{margin: "10px"}}>
                         {selectedItems.map((item, index) => (
                              <SelectedItem key={index} item={item} deleteItem={deleteItem} />
                         ))}
                    </section>
                    :
                    null
               }
          </>
     )
}

export default SelectedList

interface IItem {
     item: string;
     deleteItem(value: string): void;
}

function SelectedItem({ item, deleteItem }: IItem) {
     return (
          
               <Chip style={{marginRight: "4px"}} label={item} onDelete={() => deleteItem(item)}></Chip>
          
     )
}