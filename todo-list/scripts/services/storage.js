import { STORAGE_KEY, DEFAULTE_TASKS } from "../state/constants";

const STORAGE = window.localStorage;

export const storage = {
  load() {
    const raw = STORAGE.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULTE_TASKS;
  },
  save(tasks) {
    STORAGE.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },
};