import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { useEffect } from 'react';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for the hotel
const hotelIcon = L.divIcon({
  className: 'custom-hotel-icon',
  html: `<div style="background-color: #C8A97E; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// Custom icon for attractions
const attractionIcon = L.divIcon({
  className: 'custom-attraction-icon',
  html: `<div style="background-color: #2c2f2b; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const attractions = [
  { name: "Houmt Souk (Centre-ville)", coords: [33.8761, 10.8583], desc: "Marché traditionnel, artisanat et port de pêche." },
  { name: "Djerba Explore Park", coords: [33.8202, 11.0450], desc: "Ferme aux crocodiles et musée Lalla Hadria." },
  { name: "Plage de Sidi Mahrez", coords: [33.8517, 10.9984], desc: "L'une des plus belles plages de l'île." },
  { name: "Guellala", coords: [33.7258, 10.8601], desc: "Village des potiers et musée du patrimoine." },
  { name: "Djerbahood", coords: [33.8213, 10.8546], desc: "Musée de street art à ciel ouvert." },
];

export function LocationMap() {
  const hotelCoords: [number, number] = [33.8566, 10.9856];

  return (
    <section id="localisation" className="py-24 px-6 md:px-16 bg-ulysse-beige/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-4 block">Localisation</span>
          <h2 className="font-serif text-3xl md:text-5xl text-ulysse-brown mb-6">Explorez les Environs</h2>
          <p className="max-w-2xl mx-auto font-light text-ulysse-brown/80 leading-relaxed">
            Idéalement située à Mezraya, la Résidence Ulysse vous offre un point de départ parfait pour découvrir les merveilles de Djerba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[400px] md:h-[500px] rounded-lg overflow-hidden border-4 border-white shadow-lg relative z-10">
            <MapContainer center={hotelCoords} zoom={11} scrollWheelZoom={false} className="w-full h-full z-0">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              <Marker position={hotelCoords} icon={hotelIcon}>
                <Popup>
                  <div className="font-serif text-ulysse-brown text-base font-medium">Résidence Ulysse</div>
                  <div className="text-sm font-light">Votre havre de paix</div>
                </Popup>
              </Marker>
              
              {attractions.map((attr, idx) => (
                <Marker key={idx} position={attr.coords as [number, number]} icon={attractionIcon}>
                  <Popup>
                    <div className="font-serif text-ulysse-brown font-medium">{attr.name}</div>
                    <div className="text-xs font-light">{attr.desc}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          <div className="bg-white p-8 border border-ulysse-brown/10 flex flex-col justify-center h-fit">
            <h3 className="font-serif text-2xl text-ulysse-brown mb-6 border-b border-ulysse-brown/10 pb-4">Points d'Intérêt</h3>
            <ul className="space-y-6">
              {attractions.map((attr, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-ulysse-brown/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3 h-3 text-ulysse-brown" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ulysse-brown">{attr.name}</h4>
                    <p className="text-sm font-light text-ulysse-brown/70 mt-1">{attr.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
