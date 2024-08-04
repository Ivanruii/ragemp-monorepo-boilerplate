import { useState, useEffect } from "react";
import rpc from "rage-rpc";

type UIEventData = {
  page: string;
  value: boolean;
};

const usePageManager = () => {
  const [pageVisibility, setPageVisibility] = useState<Record<string, boolean>>(
    {
      login: false,
    }
  );

  useEffect(() => {
    const handlePageManager = (data: UIEventData) => {
      if (data.page) {
        setPageVisibility((prevState) => ({
          ...prevState,
          [data.page]: data.value,
        }));
      }
    };

    rpc.register("cef::ui::pageManager", handlePageManager);

    return () => {
      rpc.unregister("cef::ui::pageManager");
    };
  }, []);

  return pageVisibility;
};

export default usePageManager;
