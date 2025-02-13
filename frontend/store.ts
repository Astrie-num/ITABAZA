import { atom } from "recoil";

export interface Event{
    name: string;
    description: string;
    image: string
}

export const eventState = atom<Event[]>({
    key: 'EventState',
    default: []
});