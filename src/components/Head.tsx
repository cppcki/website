import NextHead from "next/head";

type HeadProps = {
  title: string;
  children?: JSX.Element
}

function Head(props: HeadProps) {
  const { title, children } = props;

  const name = `${title} - CKI @ CPP`

  return (
    <NextHead>
      <title>{name}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/cki_logo.png" />
      {children}
    </NextHead>
  );
}

export default Head;