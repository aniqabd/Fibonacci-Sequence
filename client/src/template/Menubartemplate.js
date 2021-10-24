import React from "react";
import { Menubar } from "primereact/menubar";
import { useHistory } from "react-router";
import { InputText } from 'primereact/inputtext';

function NavigationBar() {
  const history = useHistory();

  const items = [
    {
        label: 'Fibonacci Generator', 
    },
    
];

return (
    <div>
        <div className="card">
            <Menubar model={items}  />
        </div>
    </div>
);
}

export default NavigationBar;