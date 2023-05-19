import * as React from 'react';
import Select from './Select';
import SelectedList from './SelectedList';

const AddressApi = ["tag1", "tag2", "tag3", "tag3", "tag4"]

function DropDown() {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

    const updateList = (value: string) => {
        if (selectedItems.includes(value)) return;
        setSelectedItems(p => ([...p, value]))
    }

    const deleteItem = (value: string) => {
        const filteredData = selectedItems.filter((item) => {
            return item != value
        })
        setSelectedItems(filteredData);
    }

    return (
        <>
           <div style={{margin: "10px", width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "200px"}}>
            <h2 style={{textAlign: 'center'}}>Type your tag in the text box and see how it works!</h2>
                <Select suggesstions={AddressApi} updateList={updateList} />
                <SelectedList deleteItem={deleteItem} selectedItems={selectedItems} />
            </div>
        </>
    )
}

export default DropDown
