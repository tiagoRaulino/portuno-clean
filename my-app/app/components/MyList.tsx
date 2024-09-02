'use client'

import { useState, useEffect } from 'react';
import MyCard from './MyCard';
import SearchBar from "./SearchBar";

interface RoomData {
    room: string;
    keyowner: string;
    available: boolean;
    open: boolean;
}

function MyList() {
    const [search, setSearch] = useState<string>('');
    const [roomData, setRoomData] = useState<RoomData[]>([]);

    useEffect(() => {
        fetch('../RoomData.json')
            .then(response => response.json())
            .then(data => setRoomData(data))
            .catch(error => console.error('Error fetching local room data:', error));
    }, []);

    const filteredRooms = roomData.filter((data) =>
        data.room.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-lg mx-auto">
            <SearchBar search={search} onChange={setSearch} />
            <div className="space-y-4">
                {filteredRooms.map((data, index) => (
                    <MyCard
                        key={index}
                        id={index}
                        room={data.room}
                        keyowner={data.keyowner}
                        available={data.available}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyList;
