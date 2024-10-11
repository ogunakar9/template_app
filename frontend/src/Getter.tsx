import { useFrappeGetDocList } from "frappe-react-sdk";

const Getter = () => {
  const { data: Count, isLoading, error } = useFrappeGetDocList("Counter");
  console.log(Count, isLoading, error);
  return <div></div>;
};

export default Getter;
