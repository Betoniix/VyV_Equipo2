export type UploadHomework = {
  sessionId: number;
  student: { id: number; done: boolean };
};
