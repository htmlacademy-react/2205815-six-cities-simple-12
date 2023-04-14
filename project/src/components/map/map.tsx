import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../consts';

import { Offer, Offers } from '../../types/offers';

type MapProps = {
    offers: Offers;
    city: Offer;
    activeOfferId: number;
    isPropertyScreenMap?: boolean;
}

function Map({city, offers, activeOfferId, isPropertyScreenMap}: MapProps): JSX.Element {
  const offer = city;
  const mapRef = useRef(null);
  const map = useMap({mapRef, offer});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((of) => {
        if (of.id === activeOfferId) {
          leaflet
            .marker({
              lat: of.location.latitude,
              lng: of.location.longitude,
            }, {
              icon: currentCustomIcon,
            })
            .addTo(map);
        } else {
          leaflet
            .marker({
              lat: of.location.latitude,
              lng: of.location.longitude,
            }, {
              icon: defaultCustomIcon,
            })
            .addTo(map);
        }});
    }
  }, [map, offers, activeOfferId]);


  return (

    <section ref={mapRef} className={isPropertyScreenMap ? 'property__map map' : 'cities__map map'}>

    </section>

  );
}

export default Map;
