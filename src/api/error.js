import toast from "react-hot-toast";

const errorHandle = (error) => {
  const axiosError = error;

  if (axiosError.response?.data) {
    const errorResponse = axiosError.response.data;
    if (errorResponse.message.includes("Not authorized")) {
      toast.error("Please login before proceeding");
    } else if (errorResponse.message) {
      toast.error(errorResponse.message);
    }
  } else {
    toast.error("An error occurred. Please try again!");
  }
};

export default errorHandle;
