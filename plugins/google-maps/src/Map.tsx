import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const API_KEY = 'API_KEY_HERE';

const loader = new Loader({
  apiKey: API_KEY,
  version: 'weekly',
  libraries: ['places'],
});

let map;

export const Map = (props: { location: string }) => {
  if (API_KEY === 'API_KEY_HERE') return null;
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current === null) return;

    loader.load().then(() => {
      map = new (window as any).google.maps.Map(mapRef.current as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });

    if (props.location !== '' && map) {
      var service = new (window as any).google.maps.places.PlacesService(map);
      service.textSearch(
        {
          query: props.location,
        },
        function (results, status) {
          if (
            status === (window as any).google.maps.places.PlacesServiceStatus.OK
          ) {
            map.setCenter(results[0].geometry.location);
          }
        }
      );
    }
  }, [mapRef, props.location]);

  return <div style={{ height: '80vh', width: '100%' }} ref={mapRef}></div>;
};
