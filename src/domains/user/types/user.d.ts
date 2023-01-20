export {};
declare global {
  type UserType = {
    id: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    name: string;
    password: string;
  };
}
