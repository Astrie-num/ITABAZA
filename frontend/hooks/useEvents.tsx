import { Event, eventState } from "@/store";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {axios} from "@/lib/axios.config";



export default function useEvents(){
    const [events , setEvents] = useRecoilState(eventState);
    
    const [fetchingEvents , setFetchingEvents] = useState<boolean>(false);

    const fetchEvents = async() =>{
         try{
            const { data } = await axios.get("/events/")
            setEvents(data.events)
         }catch(error: any){
            console.log("Fetching Events Failed: ", error?.message)
         }
    }

    const createEvent = async(eventData: Event) => {
         try{
            const { data } = await axios.post("/events/", eventData);
            return data.event
         }catch(error: any){
            console.error("Failed to create event: ", error?.message);
         }
    }

    const getServiceByEvent = async(eventId: string) => {
        try{
            const { data } = await axios(`/events/${eventId}/services`)
            return data.services;
        }catch(error: any){
            console.error("Failed to get service by event: ", error?.message);
        }
    }


    useEffect(() => {
        fetchEvents();
    },[])

    return {
        events,
        createEvent,
        fetchEvents,
        getServiceByEvent
    }
}