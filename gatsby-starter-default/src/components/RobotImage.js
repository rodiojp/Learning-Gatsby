import * as React from "react"

const RobotImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt={alt}
            style={{ marginBottom: `1.45rem` }}
        />
    )
}


export default RobotImage
