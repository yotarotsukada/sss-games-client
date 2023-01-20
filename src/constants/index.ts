export abstract class Constants {
  static readonly SERVICE_URL: string = import.meta.env.VITE_SERVICE_URL;
  static readonly ENABLE_MSW: boolean = import.meta.env.VITE_MSW === 'true';
  static readonly CURRENT_USER_ID = 'user-3';
}

export const useConstants = () => {
  return Constants;
};
