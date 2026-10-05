import { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false)
    const toggleButton = () => {
        setIsOn(!isOn)
    }
    return (
        <>
            <button onClick={toggleButton}>
                {isOn ? 'Turn OFF' : 'Turn ON'}
            </button>
            <p>The Light is {isOn ? 'ON' : 'OFF'}</p>
        </>
    )
}


export default ToggleButton