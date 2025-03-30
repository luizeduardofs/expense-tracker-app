import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./imageService";

export async function updateUser(
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> {
  try {
    if (updatedData.image && updatedData.image.uri) {
      const uploadFileResponse = await uploadFileToCloudinary(
        updatedData.image,
        "users"
      );

      if (!uploadFileResponse.success) {
        return {
          success: false,
          msg: uploadFileResponse.msg || "Failed to upload image",
        };
      }

      updatedData.image = uploadFileResponse.data;
    }

    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, updatedData);
    return { success: true, msg: "update successfully" };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}
