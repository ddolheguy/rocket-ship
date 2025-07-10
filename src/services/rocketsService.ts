import { api } from "./api";
import { Rocket } from "./types";

/**
 * Get all rockets
 * @returns The rockets data
 */
export const getRockets = async (): Promise<Rocket[]> => {
  const { data } = await api.get('/rockets');
  return data;
};

/**
 * Get a rocket by id (example: 5e9d0d95eda69955f709d1eb)
 * @param rocketId - The id of the rocket to get
 * @returns The rocket data
 */
export const getRocketById = async (rocketId: string): Promise<Rocket> => {
  const { data } = await api.get(`/rockets/${rocketId}`);
  return data;
};
