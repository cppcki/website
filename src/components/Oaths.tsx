import Image, { StaticImageData } from "next/image";

import ServiceTenantImage from "@/assets/images/tenants/service.png";
import LeadershipTenantImage from "@/assets/images/tenants/leadership.png";
import FellowshipTenantImage from "@/assets/images/tenants/fellowship.png";

type OathItemProps = {
    title: string;
    thumbnail: StaticImageData;
    description: string;
}

function OathItem(props: OathItemProps) {
    const { title, thumbnail, description } = props;
  
  
    return (
      <div className="flex flex-col max-w-xs">
        <Image
          draggable={false}
          className="aspect-square object-contain "
          width={300}
          height={300}
          src={thumbnail}
          alt={`${title}_tenant`}
        />
        {/* <h1 className="font-black text-5xl">
        </h1> */}
        <h2 className="text-2xl font-normal first-letter:capitalize">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    );
  }


function Oaths() {
    return(
        <div className="flex gap-x-2 justify-around my-10 flex-wrap">
            <OathItem
                title="service"
                thumbnail={ServiceTenantImage}
                description="Make a difference within college and university campuses and communities through acts of service"    
            />
            <OathItem
                title="leadership"
                thumbnail={LeadershipTenantImage}
                description="Opportunities and chances for developing one's character and skills"    
            />
            <OathItem
                title="fellowship"
                thumbnail={FellowshipTenantImage}
                description="Create a sense of community within the club and enable members to have tight-knit bonds with one-another"    
            />
        </div>
    );
}

export default Oaths;