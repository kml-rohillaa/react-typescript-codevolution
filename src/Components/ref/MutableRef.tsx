import { useEffect, useRef, useState } from "react";


export const Timer = () => {
    const [timer , setTimer ] = useState(0)
    const intervalRef = useRef<null | number>(null)
    
    const stopTimer = () => {
        if(intervalRef.current)
        window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    } , [])

    return <div>
        Hooke Timer - {timer}
        <button onClick={() => stopTimer()}>Stop timer</button>
    </div>
}