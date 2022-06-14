import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log(window.data);
  }, []);

  return (
    <div>
      <input type="button" value="Say hello" />
    </div>
  );
};

export default Test;
