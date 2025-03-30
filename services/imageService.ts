import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "@/constants";
import { ResponseType } from "@/types";
import axios from "axios";

const api_url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export async function uploadFileToCloudinary(
  file: { uri?: string } | string,
  folderName: string
): Promise<ResponseType> {
  try {
    if (typeof file === "string") {
      return { success: true, msg: file };
    }

    if (file && file.uri) {
      const formData = new FormData();
      formData.append("file", {
        uri: file.uri,
        type: "image/jpeg",
        name: file.uri.split("/").pop() || "file.jpeg",
      } as any);

      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      formData.append("folder", folderName);

      const response = await axios.post(api_url, formData, {
        headers: {
          "Content-Type": "multipart-form-data",
        },
      });

      return { success: true, data: response?.data?.secure_url };
    }

    return { success: true, msg: "" };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

export function getProfileImage(file: any) {
  if (file && typeof file === "string") return file;
  if (file && typeof file === "object") return file.uri;

  return require("../assets/images/defaultAvatar.png");
}
