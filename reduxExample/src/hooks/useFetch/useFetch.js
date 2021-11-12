// import axios from "axios";
// import { useState, useEffect } from "react";

// function useFetch(url) {
//   const [storeList, setStoreList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fecthData = async () => {
//     try {
//       const response = await axios.get(url);
//       console.log(response);
//       await setStoreList(response.data);
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return error, loading, storeList;
// }
// export default useFetch;
