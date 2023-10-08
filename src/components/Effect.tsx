import { useEffect, useState, useLayoutEffect } from "react";

const UPDATE_CYCLE = 1000; // 1秒

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    JP = 'ja-JP'
}

const getLocaleFromString = (text: string) => {
    switch(text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        defalut:
            return Locale.US
    }
}

export const Effect = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)
        return () => {
            clearInterval(timer)
        }
    }, [])

    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale) as Locale)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-local">現在時刻</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <div>
                    <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value) as Locale)}>
                        <option value="en-US">en-US</option>
                        <option value="ja-JP">a-JP</option>
                    </select>
                </div>
            </p>
        </div>
    )
}

export default Effect