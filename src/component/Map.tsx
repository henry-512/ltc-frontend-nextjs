'use client'

// IMPORTANT: the order matters!
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Map() {
  const position: [number, number] = [0, 0]

  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={true}
      // {/* IMPORTANT: the map container needs a defined size, otherwise nothing will be visible */}
      style={{ height: '400px', width: '600px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='http://localhost:5166/api/RmRooms/image/{x}/{y}'
      />
      <Marker position={position}>
        <Popup>
          This Marker icon is displayed correctly with{' '}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
