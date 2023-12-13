import { useEffect, useState } from 'react'

export default function UseDebounceSN(initialValue = '', delay = 1000) {
    const [debounceValue, setDebounceValue] = useState(initialValue)

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounceValue(initialValue)
        }, delay);
        return () => {
            clearInterval(timer)
        };
    }, [delay, initialValue]);

    return debounceValue
}
