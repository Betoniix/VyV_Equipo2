export type StudentData = { to: string; plate: string; name: string };

export class StudentCache {
  private static _instance: StudentCache | null = null;
  private emails: StudentData[] = [];

  private constructor() {}

  static get instance() {
    if (this._instance === null) {
      this._instance = new StudentCache();
    }
    return this._instance;
  }

  StudentEmailList() {
    return this.emails;
  }

  PushEmailData(data: StudentData) {
    this.emails.push(data);
  }
}
