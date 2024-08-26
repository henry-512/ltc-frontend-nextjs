'use client'

import { Image } from '@unpic/react/nextjs'
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const room_size = 64

function room_img(name: string) {
  return <Image src={`/rm-map-images/${name}.png`} alt={name} />
}

export default function RM_Map() {
  const [mapX, setMapX] = useState(30 * room_size);
  const [mapY, setMapY] = useState(30 * room_size);

  const mapWidth = 400;
  const mapHeight = 400;

  const mapCountX = Math.ceil(mapWidth / room_size)
  const mapCountY = Math.ceil(mapHeight / room_size)

  const mapIndexX = Math.floor(mapX / room_size)
  const mapIndexY = Math.floor(mapY / room_size)

  const rows = []
  for (let x = mapIndexX; x <= mapIndexX + mapCountX; x++) {
    for (let y = mapIndexY; y <= mapIndexY + mapCountY; y++) {
    }

    rows.push(<div className="w-16 h-16"/>)
  }

  return (
    <div className='flex flex-col flex-shrink-0'>
      {rows}


      {/* {parsed.map((y_ar, y) => (
        <div key={y} className='flex flex-row flex-shrink-0'>
          {y_ar.map((room_name, x) => (
            <div key={x} className='h-64 w-64'>
              {room_name != '' && x < 20 && x > 10 && y < 30 && y > 20
                ? room_img(room_name)
                : ''}
            </div>
          ))}
        </div>
      ))} */}
    </div>
  )
}
