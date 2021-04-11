import React from 'react'
import './TimeZoneComponent.css';

import Clock from 'react-live-clock';


function TimeZoneComponent({ time }) {

    return (
        <div class="timezoneselect">
            <Clock
                className="timezoneOverlay"
                format={' h:mm:ss A'}
                style={{ fontSize: '5em' }}
                ticking={true}  
                timezone={time} />
        </div>
    )
}

export default TimeZoneComponent