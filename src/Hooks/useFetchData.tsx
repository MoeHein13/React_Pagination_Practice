import { useEffect, useState } from "react";

const useFetchData = () => {
  const [projects, setProjects] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Status : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);

  return { projects };
};

export default useFetchData;
