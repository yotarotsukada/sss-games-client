export abstract class Constants {
  static readonly DEV_SERVICE_URL: string = 'http://localhost:8080';
  static readonly SERVICE_URL: string =
    import.meta.env.VITE_SERVICE_URL || this.DEV_SERVICE_URL;
  static readonly CURRENT_USER_ID = 'user-3';
}
