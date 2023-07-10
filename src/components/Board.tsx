import Image, { StaticImageData } from "next/image";

import ServiceTenantImage from "@/assets/images/tenants/service.png";
import crabs from "@/assets/images/mrcrabs.jpg"


type BoardItemProps = {
    thumbnail: StaticImageData;
    title: string;
    description: string;
  }
  
function BoardItem(props: BoardItemProps) {
    const { title, thumbnail, description } = props;

    return (
        <div className="flex flex-col max-w-xs">
            <Image
                draggable={false}
                className="rounded-full border-solid border-black aspect-square object-fit border"
                height={200}
                width={200}
                src={thumbnail}
                alt={`${title}_board`}
            />
            <h1 className="text-xl text-center pt-2 first-letter:capitalize font-normal">{title}</h1>
            <p className="text-center pt-1 text-lg first-letter:capitalize">{description}</p>
        </div>
    );
}

function Board() {
    return(
        <div className="pt-20">
            <h1 className="font-bold text-center text-5xl ">Meet the Board</h1>
            <div className="flex justify-around my-10 flex-wrap">
            <BoardItem
                title="Anson"
                thumbnail={ServiceTenantImage}
                description="Board"
            />
            <BoardItem
                title="Test"
                thumbnail={crabs}
                description="ahhhhh"
            />
            <BoardItem
                title="Test"
                thumbnail={ServiceTenantImage}
                description="fuuck!"
            />
            </div>
        </div>
    );
}

export default Board