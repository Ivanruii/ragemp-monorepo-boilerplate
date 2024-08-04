import { useState, useEffect } from "react";
import rpc from "rage-rpc";
import { CEF_EVENTS } from "@repo/events-names";

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

    rpc.register(CEF_EVENTS.UI.PAGE_MANAGER, handlePageManager);

    return () => {
      rpc.unregister(CEF_EVENTS.UI.PAGE_MANAGER);
    };
  }, []);

  return pageVisibility;
};

export default usePageManager;
