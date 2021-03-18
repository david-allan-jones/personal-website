export default function SectionWrapper({ children, anchor }) {
    return (
        <div id={anchor} style={{ paddingBottom: '80px' }}>
            {children}
        </div>
    )
}