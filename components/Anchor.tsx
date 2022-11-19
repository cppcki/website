import Link from "next/link";

import { ReactNode, useMemo } from "react";

import Chevron from "@app/assets/token/chevron.svg";

type AnchorProps = {
  href?: string,
  children: ReactNode,
  className: string
}

function Anchor(props: AnchorProps) {
 
  const { children, href, className, ...rest } = props;

  const content = useMemo(() => {
    return (
      <div className={`flex align-middle gap-1 group ${className}`}>
        <span className="group-hover:text-gold">{children}</span>
        <Chevron className="my-auto group-hover:fill-gold" fill="white" width="20" height="20"/>
      </div>
    )
  }, [children, className]);

  if (href === undefined) {
    return (
      <>
        {children}
      </>
    );
  }

  if (href.includes("http")) {
    return (
      <Link {...rest} className={`flex w-fit ${className}`} href={href}>{content}</Link>
    );
  } else {
    return (
      <a {...rest} className={`flex w-fit ${className}`} href={href} target="_blank" rel="noreferrer">{content}</a>
    );
  }

}

export default Anchor;