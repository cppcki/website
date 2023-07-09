import Image, { StaticImageData } from "next/image";

import ServiceTenantImage from "@/assets/images/tenants/service.png";


type BoardItemProps = {
    thumbnail: StaticImageData;
    title: string;
  }
  
function BoardItem(props: BoardItemProps) {
    const { title, thumbnail } = props;

    return (
        <div className="flex flex-col max-w-xs">
            <Image
                draggable={false}
                className="rounded-full border-solid border-black aspect-square object-contain border"
                height={200}
                width={200}
                src={thumbnail}
                alt={`${title}_board`}
            />
            <h1 className="text-xl text-center pt-2">{title}</h1>
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
            />
            <BoardItem
                title="Test"
                thumbnail={ServiceTenantImage}
            />
            <BoardItem
                title="Test"
                thumbnail={ServiceTenantImage}
            />
            </div>
        </div>
    );
}

export default Board