import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Test = () => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    alert("test");
    alert(window.data);

    console.log(params.get("token"));
  }, []);

  return (
    <div>
      <input type="button" value="Say hello" />
    </div>
  );
};

export default Test;
