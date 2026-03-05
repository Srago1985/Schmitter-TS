import { createContext } from "react";

export type User = {
  name: string;
  avatar: string;
};

export type Stats = {
  followers: number;
  following: number;
};

export type SchmitterContextType = {
  user: User;
  stats: Stats;
  changeAvatar: (url: string) => void;
  changeName: (name: string) => void;
  increaseFollowers: () => void;
  decreaseFollowers: () => void;
};

export const SchmitterContext = createContext<SchmitterContextType>({
  user: { name: "", avatar: "" },
  stats: { followers: 10, following: 110 },
  changeAvatar: () => {},
  changeName: () => {},
  increaseFollowers: () => {},
  decreaseFollowers: () => {}
});