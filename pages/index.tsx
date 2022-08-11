import { Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import haversine from "haversine";

import states from "../states.json";
import LocationState from "../components/State";
import Offer from "../components/Offer";

interface InfoParmas {
  city: string;
  country: string;
  ip: string;
  loc: string;
  org: string;
  region: string;
  timezone: string;
}

interface InfoProps {
  info: InfoParmas;
}

const Home: NextPage<InfoProps> = ({ info }) => {
  const [latitude, longitude] = info.loc.split(",");
  const origin = {
    latitude,
    longitude,
  };
  const [nearestState, nearestDistance] = useMemo(() => {
    let nearestDistance = Infinity;
    let nearestState = "";
    states.map((state) => {
      const distance = haversine(origin, {
        latitude: state.latitude,
        longitude: state.longitude,
      });
      if (nearestDistance > distance) {
        nearestDistance = distance;
        nearestState = state.name;
      }
    });
    return [nearestState, nearestDistance];
  }, [origin]);

  return (
    <>
      <Head>
        <title>Tallysight</title>
      </Head>

      <main>
        <LocationState
          nearestDistance={nearestDistance}
          nearestState={nearestState}
        />
        <Offer />
        <Offer />
        <Offer />
      </main>
    </>
  );
};

export default Home;
export async function getServerSideProps() {
  const res = await fetch("https://ipinfo.io/json", {
    headers: new Headers({
      Authorization: "Bearer " + "3f26802b4fde0f",
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });
  const info = await res.json();

  const offer_res = await fetch(
    "https://api.airtable.com/v0/appDFOzemd24MG2CZ/sportsbooks/",
    {
      headers: new Headers({
        Authorization: "Bearer " + "keyv05VZXGSFfVKO4",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }
  );
  const offer_info = await offer_res.json();
  console.log(offer_info);

  return {
    props: { info }, // will be passed to the page component as props
  };
}
