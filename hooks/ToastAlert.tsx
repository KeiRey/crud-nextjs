import Swal from "sweetalert2";

export const ToastAlert = async (message : string, type: string | "error" | "success") => {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
  });
  toast.fire({
    icon: type === "error" ? "error" : "success",
    title: message,
    padding: "10px 20px",
  });
};
