import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import loc from "../assets/loc.png";
import { useQuery } from 'react-query';
import { fetchCovidData, wordWideData, graphData } from '../apiCalls';
import PopUpCards from './PopUpCards';
import WorldwideDataSlider from './WorldwideDataSlider';
import GraphChart from './GraphChart';


const markerIcon = new L.Icon({
  iconUrl: loc,
  iconSize: [35, 45],
});

export default function Map() {
  const { data, isLoading, isError } = useQuery('covidData', fetchCovidData);
  const { data: Worlddata, isLoading: WorldLoading, error: WorldError } = useQuery('Worlddata', wordWideData);
  const { data: graphdata, isLoading: graphloading, isError: grapherror } = useQuery('graphData', graphData);

  if (isLoading || WorldLoading || graphloading) {
    return <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div className='absolute'>loading</div>
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white shadow-[0_0_50px_rgba(8,_112,_184,_0.7)]"></div>
 </div>;
  }

  if (isError || WorldError || grapherror) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className='h-full overflow-hidden overflow-y-scroll scrollbar-hide'>
      <MapContainer center={[20, 77]} zoom={4} style={{ height: '70vh', width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=SVfFuiqHhnD6JLI1jwmb"
        />
        {
          data.map((country, index) => {
            return (
              <Marker position={[country.countryInfo.lat, country.countryInfo.long]} icon={markerIcon}>
                <Popup>
                  <PopUpCards name={country.country} active={country.active} recorded={country.cases} death={country.deaths} flag={country.countryInfo.flag} />
                </Popup>
              </Marker>
            )
          })
        }
      </MapContainer>
      <WorldwideDataSlider data={Worlddata} />
      <GraphChart data={graphdata} />
    </div>
  );
}
