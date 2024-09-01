import React, { useEffect, useState } from 'react'
import styles from './Translate.module.css'
import LanguageSelector from './LanguageSelector'

function Translate() {

    const [inputText, setInputText] = useState('')
    const [fromLanguage, setFromLanguage] = useState('en')
    const [toLanguage, setToLanguage] = useState('ru')
    const [translatedText, setTranslatedText] = useState('')

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'az', name: 'Azerbaijani' },
        { code: 'ar', name: 'Arabic' },
        { code: 'ru', name: 'Russian' },
        { code: 'tr', name: 'Turkish' },
    ]

    useEffect(() => {
        async function handleTranslateText() {
            const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
            const options = {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': 'ea3466acdamsh0bba5d7deaa730fp1d9ffdjsn400bb91a1ab4',
                    'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: fromLanguage,
                    to: toLanguage,
                    text: inputText
                })
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setTranslatedText(result.trans)
            } catch (error) {
                console.error(error);
            }
        }
        handleTranslateText()
    }, [inputText, fromLanguage, toLanguage])

    return (
        <div>
            <h1>MrEyvaz Translator</h1>
            <div className={styles['d-flex']}>
                <div>
                    <textarea cols="45" rows="8" onChange={(e) => setInputText(e.target.value)} style={{fontSize: '18px'}}></textarea>
                    <LanguageSelector label='From' value={fromLanguage} onchange={(e) => setFromLanguage(e.target.value)} languages={languages} />
                </div>

                <div>
                    <textarea cols="45" rows="8" value={translatedText} onChange={(e) => setTranslatedText(e.target.value)} style={{fontSize: '18px'}} readOnly></textarea>
                    <LanguageSelector label='To' value={toLanguage} onchange={(e) => setToLanguage(e.target.value)} languages={languages} />
                </div>
            </div>
        </div>
    )
}

export default Translate