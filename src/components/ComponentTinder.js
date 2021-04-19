import React from 'react'
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards'


const ComponentTinder = () => {
    return (
        <div style={{
            width: '37vw',
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
        }}>
            <>
                <>
                    <TinderCards />
                </>
                <SwipeButtons />
            </>
        </div>
    )
}

export default ComponentTinder
