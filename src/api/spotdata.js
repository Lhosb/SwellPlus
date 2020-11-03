export const spotsData = [
  {
    spotName: "Reef Rights",
    spotId: "584204204e65fad6a77093cc",
    optimalConditions: {
      swell: {
        period: { min: 12, max: 15 },
        direction: { min: 280, max: 308 },
        height: { min: 5, max: 8 },
      },
      wind: { speed: { min: 0, max: 5 }, direction: { min: 0, max: 60 } },
      tide: { min: 2.5, max: 5, rising: true, dropping: true },
    },
  },
];

const humanScale = {
  0: "Terrible",
  1: "Very Bad",
  2: "Bad",
  3: "Ok",
  4: "Good",
  5: "Very Good",
  6: "Get out there",
};

export const analyzeData = (report, spotData) => {
  let analysis = 0;

  // TIDE ANAYSIS
  const reportTide = report.forecast.tide;
  const spotDataTide = spotData.tide;

  if (
    reportTide.current.height >= spotDataTide.min &&
    reportTide.current.height <= spotDataTide.max
  ) {
    analysis++;
  }

  // WIND ANALYSIS
  const reportWind = report.forecast.wind;
  const spotDataWind = spotData.wind;

  if (
    reportWind.speed >= spotDataWind.speed.min &&
    reportWind.speed <= spotDataWind.speed.max
  ) {
    analysis++;
  }

  if (
    reportWind.direction >= spotDataWind.direction.min &&
    reportWind.direction <= spotDataWind.direction.max
  ) {
    analysis++;
  }

  // SWELL ANALYSIS
  const reportSwells = report.forecast.swells;
  const spotDataSwellHeight = spotData.swell.height;
  const spotDataSwellDirection = spotData.swell.direction;
  const spotDataSwellPeriod = spotData.swell.period;

  const swellCount = reportSwells.forEach((swell) => {
    let count = 0;
    if (
      swell.height >= spotDataSwellHeight.min &&
      swell.height <= spotDataSwellHeight.max &&
      swell.period >= spotDataSwellPeriod.min &&
      swell.period <= spotDataSwellPeriod.max &&
      swell.direction >= spotDataSwellDirection.min &&
      swell.direction <= spotDataSwellDirection.max
    ) {
      count++;
    }
    return count;
  });

  if (swellCount > 0) {
    analysis++;
  }

  return humanScale[analysis];
};
