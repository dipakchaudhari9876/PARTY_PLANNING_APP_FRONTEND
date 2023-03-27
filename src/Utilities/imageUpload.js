import Axios from "axios";

export const imgUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "wkxynt8l");
  const { data } = await Axios.post(
    "https://api.cloudinary.com/v1_1/duozpcxox/image/upload",
    formData
  );
  return { publicId: data?.public_id, url: data?.secure_url };
};
