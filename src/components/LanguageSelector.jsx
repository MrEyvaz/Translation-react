import React from 'react'
import styles from './Translate.module.css'

function LanguageSelector({ label, value, onchange, languages }) {
    return (
        <div className={styles['select-center']}>
            {label}
            <select value={value} onChange={onchange} style={{marginLeft: '8px'}}>
                {languages.map((lang)=> (
                    <option value={lang.code} key={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelector