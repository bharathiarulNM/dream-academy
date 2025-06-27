import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [courses, setCourse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("couldn't Retrive Courses");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => setCourse(data))
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
      setLoading(false);
    }, 3000);
  }, []);
  return[courses,error,loading]
};

export default useFetch;
