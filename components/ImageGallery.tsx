import { Center } from "@chakra-ui/react";
import { MouseEvent, MouseEventHandler, useState } from "react";

type ClickEvent = { onClick: MouseEventHandler<HTMLImageElement> };
export function RenderImageGallery(props: {
    images: string[];
    imageClass?: string;
    className?: string;
}){
    const Icons = {
        ChevronLeft: ({ onClick }: ClickEvent) => <img src="/ChevronLeft.svg" className="GalleryChevron" onClick={onClick}/>,
        ChevronRight: ({ onClick }: ClickEvent) => <img src="/ChevronRight.svg" className="GalleryChevron" onClick={onClick}/>,
    };
    const [index, setIndex] = useState(0);
    function handleIndexChange(newIndex: number){
        if(newIndex === props.images.length) {
            setIndex(0);
        } else if(newIndex === -1) {
            setIndex(props.images.length-1);
        } else {
            setIndex(newIndex);
        }
        console.log(newIndex, index, props.images.length);
    }
    function handleImageChange(){
        return props.images[index];
    }

    return (
        <Center className={props.className}>
            <Icons.ChevronLeft onClick={(e) => handleIndexChange(index-1)}/>
            <img src={handleImageChange()} className={`${props.imageClass || ""} GalleryImage`}/>
            <Icons.ChevronRight onClick={(e) => handleIndexChange(index+1)}/>
        </Center>
    );
}