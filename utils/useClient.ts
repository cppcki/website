import { useEffect, useState } from "react";

function useClient() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    return () => {
      setIsClient(false);
    }
  }, []);

  return isClient;
}

export default useClient;