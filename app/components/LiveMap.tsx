"use client"
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    L: any;
  }
}

const LAT = 52.6784;
const LNG = -2.4453;

export default function LiveMap({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const initMap = () => {
      if (mapRef.current || !window.L || !containerRef.current) return;
      const L = window.L;

      const map = L.map(containerRef.current, {
        center: [LAT, LNG],
        zoom: 11,
        zoomControl: false,
        attributionControl: false,
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      const icon = L.divIcon({
        className: 'bg-transparent border-none',
        html: `<div class="w-3.5 h-3.5 bg-amber-500 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.9)] border-[1.5px] border-stone-950"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });
      L.marker([LAT, LNG], { icon }).addTo(map);
      mapRef.current = map;
    };

    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div
        ref={containerRef}
        className={`[&_.leaflet-tile-pane]:grayscale [&_.leaflet-tile-pane]:sepia-[.35] [&_.leaflet-tile-pane]:contrast-125 [&_.leaflet-tile-pane]:brightness-75 [&_.leaflet-tile-pane]:opacity-70 cursor-grab active:cursor-grabbing bg-stone-900 ${className ?? ''}`}
      />
    </>
  );
}