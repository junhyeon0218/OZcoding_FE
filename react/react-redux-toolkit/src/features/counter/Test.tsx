import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchUsersAsync, incrementAsync } from "./counterSlice";

const Test = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const promise = dispatch(incrementAsync(10));
    const promise = dispatch(fetchUsersAsync());

    return () => {
      promise.abort();
    };
  }, []);

  return <div>test</div>;
};

export default Test;
