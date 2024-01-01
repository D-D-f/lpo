// @ts-nocheck
/* eslint-disable no-unused-vars */
import { useState } from "react";

const baseNavale = {
  1: 185,
  2: 177,
  3: 170,
  4: 162,
  5: 155,
  6: 147,
  7: 140,
  8: 133,
  9: 126,
  10: 115,
  11: 104,
  12: 92,
  13: 85,
  14: 77,
  15: 69,
  16: 55,
  17: 37,
  18: 23,
  19: 13,
  20: 7,
};

const UseCalcule = () => {
  const [data, setData] = useState();
  const [times, setTimes] = useState([]);

  const convertTime = (data) => {
    const hours = parseInt(data?.heure, 10);
    const minutes = parseInt(data?.minute, 10);
    const seconds = parseInt(data?.seconde, 10);
    const timeSeconds =
      hours * 3600 +
      minutes * 60 +
      seconds +
      Number(baseNavale[data?.base_navale]) * Number(data?.distance);

    const timeSecondsWithPo =
      hours * 3600 +
      minutes * 60 +
      seconds +
      (Math.ceil(baseNavale[data?.base_navale]) / 2) * Number(data?.distance);

    secondsInTime(timeSeconds);
    secondsInTime(timeSecondsWithPo);
  };

  const secondsInTime = (seconds) => {
    const heures = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondesRestantes = seconds % 60;

    setTimes((current) => [
      ...current,
      { heure: heures, minute: minutes, secondes: secondesRestantes },
    ]);
  };

  return [setData, convertTime, times];
};

export default UseCalcule;