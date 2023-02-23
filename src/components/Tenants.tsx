"use client";

import Image, { StaticImageData } from "next/image";

import useIncrementValue from "@/utils/hooks/useIncrementValue";

import ServiceTenantImage from "@/assets/images/tenants/service.png";
import LeadershipTenantImage from "@/assets/images/tenants/leadership.png";
import FellowshipTenantImage from "@/assets/images/tenants/fellowship.png";

type TenantItemProps = {
  title: string;
  value: number;
  thumbnail: StaticImageData;
  description: string;
}

function TenantItem(props: TenantItemProps) {
  const { title, value, thumbnail, description } = props;

  const hours = useIncrementValue(value);

  return (
    <div className="flex flex-col max-w-xs">
      <Image
        draggable={false}
        className="aspect-square object-contain"
        width={100}
        height={100}
        src={thumbnail}
        alt={`${title}_tenant`}
      />
      <h1 className="font-black text-5xl">
        {hours}+
      </h1>
      <h2 className="text-2xl font-normal first-letter:capitalize">{title} hours</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}

function Tenants() {
  return (
    <div className="flex gap-x-2 justify-around my-10 flex-wrap">
      <TenantItem
        title="service"
        thumbnail={ServiceTenantImage}
        value={273}
        description="Make a difference within college, university campuses, and communities through acts of service."
      />
      <TenantItem
        title="leadership"
        thumbnail={LeadershipTenantImage}
        description="Opportunities and chances for developing one's character and skills."
        value={609}
      />
      <TenantItem
        title="fellowship"
        thumbnail={FellowshipTenantImage}
        description="Create a sense of community within the club and enable members to have tight-knit bonds with one another."
        value={325}
      />
    </div>
  );
}

export default Tenants;