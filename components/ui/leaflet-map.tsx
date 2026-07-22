"use client";

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { siteConfig } from "@/lib/site";

/**
 * Selbst gehostete Karte auf Basis von Leaflet + OpenStreetMap (kein Google Maps).
 * - Marker auf der Firmenadresse.
 * - Kein Client-Tracking; Kartenkacheln kommen von OpenStreetMap.
 * - Eigener HTML-Marker (divIcon) statt externer Marker-Grafiken.
 */
const markerIcon = L.divIcon({
  className: "",
  html: `<span style="display:block;width:22px;height:22px;border-radius:50% 50% 50% 0;background:var(--brand,#c1121f);transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></span>`,
  iconSize: [22, 22],
  iconAnchor: [11, 22],
  popupAnchor: [0, -20],
});

export default function LeafletMap() {
  const { geo, contact, name } = siteConfig;

  return (
    <MapContainer
      center={[geo.lat, geo.lng]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full"
      aria-label={`Karte mit dem Standort von ${name}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[geo.lat, geo.lng]} icon={markerIcon}>
        <Popup>
          <strong>{name}</strong>
          <br />
          {contact.street}
          <br />
          {contact.postalCode} {contact.addressLocality}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
