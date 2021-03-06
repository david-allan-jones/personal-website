import i18n from '../../i18n/i18next'

export default function Introduction() {
    return (
        <div>
            <h1>{i18n.t('introduction.greeting')}</h1>
        </div>
    )
}