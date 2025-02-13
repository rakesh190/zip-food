import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //return boolean
  return onlineStatus;
};

export default useOnlineStatus;

/*
Before writing any hook, we need to finalize the contract of the hook(what it should do, what it should return, etc).
In this case, we want to create a hook that returns the online status of the user. There is no need to pass any arguments to this hook
as it should be able to determine the online status of the user on its own.

*/
