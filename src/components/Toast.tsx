import { ToastContainer } from "react-toastify";

export function Toast() {
  return (
    <ToastContainer
      autoClose={1000}
      pauseOnHover={false}
      closeButton={<></>}
      hideProgressBar={true}
    />
  );
}