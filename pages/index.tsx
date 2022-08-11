import { Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import haversine from "haversine";

import states from "../states.json";
import LocationState from "../components/State";

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
  const personInfo = info;
  console.log(info);
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
  return {
    props: { info }, // will be passed to the page component as props
  };
}
