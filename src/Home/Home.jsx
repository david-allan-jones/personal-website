import React from "react"
import SectionWrapper from "./SectionWrapper"
import sections from "./sections.jsx"

export default function Home() {
    return (
        <React.Fragment>
            {sections.map((section) => (
                <SectionWrapper key={section.name} anchor={section.anchor}>
                    {section.component}
                </SectionWrapper>
            ))}
        </React.Fragment>
    )
}