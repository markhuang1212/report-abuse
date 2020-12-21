import React from 'react'
import { useTranslation } from 'react-i18next'
import './AppHeader.css'

function AppHeader() {
    const { t } = useTranslation()
    return (
        <div className="AppHeader">
            {t('report abuse')}
        </div>
    )
}

export default AppHeader