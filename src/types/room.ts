export type RoomType = {
  id: string;
  ownerId: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  isOpen: boolean;
  isStarted: boolean;
  name: string;
  password?: string;
};

export type CreateRoomDTO = {
  ownerId: string;
  name: string;
  password?: string;
};
