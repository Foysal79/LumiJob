import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    // "https://lumi-job-server-foysal79-foysals-projects-cce7b400.vercel.app" /* Main server */,
  // baseURL: "https://lumi-job-server.vercel.app" /* Main server */,
  // baseURL: "https://lumi-job-server-five.vercel.app/",  /* Rifat bhai's server */
  //baseURL: "https://test-lumijob-server.vercel.app/" /* Sejan bhai's server */,
      "http://localhost:5000"
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
