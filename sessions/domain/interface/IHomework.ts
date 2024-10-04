import { UploadHomework } from "../dto/upload-homework";

export interface IHomework {
  Upload(homework: UploadHomework): Promise<boolean>;
}
