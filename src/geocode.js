import vendingData from "./vendingData.js" // adjust path if needed
import opencage from 'opencage-api-client';
import fs from 'fs';

const {geocode} = opencage;
const API_KEY = process.env.OPENCAGE_KEY;

async function geocodeAll() {
  const results = [];

  for (let i = 0; i < vendingData.length; i++) {
    const loc = vendingData[i];
  
    try {
      const res = await geocode({
        key: API_KEY,
        q: loc.address,
        countrycode: 'us',
        limit: 1
      });
  
      if (res?.results?.[0]) {
        const { lat, lng } = res.results[0].geometry;
        results.push({ ...loc, lat, lng });
        console.log(`✅ ${i + 1}/${vendingData.length} - ${loc.address}`);
      } else {
        console.warn(`⚠️ No result for: ${loc.address}`);
      }
    } catch (err) {
      console.error(`❌ Error on ${loc.address}:`, err.message);
    }
  
    await new Promise((r) => setTimeout(r, 1100)); // rate-limit
  }

  const jsContent =
    'const vendingDataWithCoords = ' +
    JSON.stringify(results, null, 2) +
    ';\n\nexport default vendingDataWithCoords;\n';

  fs.writeFileSync('./vendingDataWithCoords.js', jsContent);
  console.log('✅ File saved as vendingDataWithCoords.js');
}

geocodeAll();
