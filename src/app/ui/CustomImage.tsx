
'use client'
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "src" | "alt"> {
    src: string;
    alt: string;
    containerClassName?: string;
    fallbackSrc?: string;
    fill?: boolean;
}

const CustomImage = ({
    src,
    alt,
    containerClassName = '',
    fill = false,
    fallbackSrc = '/pict1.png',
    ...props
}: CustomImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    // You can add your rendering logic here
    return (
        <div className={containerClassName}>
            <Image
                src={imgSrc || fallbackSrc}
                alt={alt}
                fill={fill}
                onError={() => setImgSrc(fallbackSrc)}
                {...props}
            />
        </div>
    );
};

export default CustomImage;