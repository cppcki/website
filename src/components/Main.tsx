type MainProps = {
  children: React.ReactNode;
}

function Main(props: MainProps) {
  return (
    <main className="max-w-7xl mx-auto px-5">
      {props.children}
    </main>
  );
}

export default Main;