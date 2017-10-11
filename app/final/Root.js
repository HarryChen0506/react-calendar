import React, { render } from 'react';
import Calendar from './Calendar.js';

let Root = React.createClass({	
    render() {
        return (
            <div>
            	hello, react! hhaha              
                <Calendar onSelect={(v)=>console.log(v)}/>
            </div>
        );
    }
});

export default Root;
