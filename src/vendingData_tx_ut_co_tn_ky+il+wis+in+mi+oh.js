const vendingData = [
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00912",
    "address": "14280 Marsh Ln, Addison, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00950",
    "address": "3770 Belt Line Rd, Addison, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00454",
    "address": "1320 W McDermott Dr, Allen, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00903",
    "address": "1212 E Bethany Dr, Allen, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00911",
    "address": "1210 N Greenville Ave, Allen, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00297",
    "address": "3100 S Gordon St, Alvin, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00906",
    "address": "2755 N Collins St, Arlington, TX"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01648",
    "address": "4620 S Cooper St, Arlington, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01660",
    "address": "301 S Bowen Rd, Arlington, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01676",
    "address": "945 W Lamar Blvd, Arlington, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01679",
    "address": "2350 SE Green Oaks Blvd, Arlington, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00778",
    "address": "7901 US-290, Austin, TX"
  },
  {
    "retailer": "Randalls",
    "machineId": "Q01499",
    "address": "9911 Brodie Ln, Austin, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01594",
    "address": "12407 MoPac Expy N, Austin, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01634",
    "address": "2508 E Riverside Dr, Austin, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01635",
    "address": "7301 N FM 620, Austin, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01644",
    "address": "11521 N FM 620, Austin, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00908",
    "address": "480 NW Pkwy St, Azle, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00771",
    "address": "1700 N Alexander Dr, Baytown, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01592",
    "address": "6315 Garth Rd, Baytown, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01649",
    "address": "12400 State Hwy 71 W, Bee Cave, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00541",
    "address": "5106 Bissonnet St, Bellaire, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00960",
    "address": "833 NE Alsbury Blvd, Burleson, TX"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00477",
    "address": "2620 N Josey Ln, Carrollton, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00914",
    "address": "2150 N Josey Ln, Carrollton, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01642",
    "address": "2800 E Whitestone Blvd, Cedar Park, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01659",
    "address": "1617 W Henderson St, Cleburne, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00376",
    "address": "2222 Interstate 45 N, Conroe, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00408",
    "address": "341 S Loop 336 W, Conroe, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01590",
    "address": "10200 TX-242, Conroe, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01638",
    "address": "3601 FM 1488, Conroe, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00915",
    "address": "106 N Denton Tap Rd, Coppell, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00953",
    "address": "4351 FM2181, Corinth, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00522",
    "address": "14100 Spring Cypress Rd, Cypress, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00524",
    "address": "9722 Fry Rd, Cypress, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00530",
    "address": "24224 Northwest Fwy, Cypress, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00557",
    "address": "9703 Barker Cypress Rd, Cypress, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00558",
    "address": "17455 Spring Cypress Rd, Cypress, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00777",
    "address": "20355 Cypresswood Dr, Cypress, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00531",
    "address": "4625 Frankford Rd, Dallas, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00901",
    "address": "3757 Forest Ln, Dallas, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00902",
    "address": "5809 E Lovers Ln, Dallas, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00964",
    "address": "17194 Preston Rd, Dallas, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00881",
    "address": "1001 N Beckley Ave, DeSoto, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00965",
    "address": "1592 S Loop 288, Denton, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00896",
    "address": "633 W Wheatland Rd, Duncanville, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01667",
    "address": "200 W Camp Wisdom Rd, Duncanville, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00484",
    "address": "745 Cross Timbers Rd, Flower Mound, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00910",
    "address": "1101 Flower Mound Rd, Flower Mound, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00956",
    "address": "2709 Cross Timbers Rd, Flower Mound, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01640",
    "address": "500 Marketplace Blvd, Forney, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00452",
    "address": "9300 Clifford St, Fort Worth, TX"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00461",
    "address": "8000 Crowley Rd, Fort Worth, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00895",
    "address": "3100 S Hulen St, Fort Worth, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00907",
    "address": "850 E Loop 820, Fort Worth, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00948",
    "address": "5241 N Tarrant Pkwy, Fort Worth, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00958",
    "address": "1653 Basswood Blvd, Fort Worth, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00546",
    "address": "151 N Friendswood Dr, Friendswood, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01646",
    "address": "3205 Main St, Frisco, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00554",
    "address": "5730 Seawall Blvd, Galveston, TX"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00528",
    "address": "1122 W Centerville Rd, Garland, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00917",
    "address": "532 W Interstate 30, Garland, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01653",
    "address": "6850 N Shiloh Rd, Garland, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00897",
    "address": "4215 S Carrier Pkwy, Grand Prairie, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01680",
    "address": "313 E Pioneer Pkwy, Grand Prairie, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00288",
    "address": "12222 Jones Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00294",
    "address": "10306 S Post Oak Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00298",
    "address": "12434 TX-249, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00299",
    "address": "9919 Westheimer Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00300",
    "address": "16400 El Camino Real, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00302",
    "address": "11701 East Sam Houston Pkwy S, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00308",
    "address": "13133 Veterans Memorial Dr, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00309",
    "address": "1801 S Voss Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00312",
    "address": "1440 Studemont St, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00389",
    "address": "360 Cypress Creek Pkwy, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00390",
    "address": "1505 Wirt Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00394",
    "address": "10010 Cypresswood Dr, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00395",
    "address": "1520 Eldridge Pkwy, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00396",
    "address": "1035 N Shepherd Dr, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00402",
    "address": "12400 Farm to Market 1960 Rd W, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00405",
    "address": "2300 Gessner Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00406",
    "address": "6322 Telephone Rd, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00451",
    "address": "4955 Beechnut St, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00456",
    "address": "9303 S Texas 6, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00457",
    "address": "12680 W Lake Houston Pkwy, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00462",
    "address": "19529 Northpark Dr, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00520",
    "address": "10919 Louetta Rd, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00526",
    "address": "9503 Jones Rd, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00538",
    "address": "5895 San Felipe St, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00542",
    "address": "2300 N Shepherd Dr, Houston, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00543",
    "address": "1550 Fry Rd, Houston, TX"
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00553",
    "address": "3131 W Holcombe Blvd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00555",
    "address": "14221 East Sam Houston Pkwy N, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00560",
    "address": "3410 Northpark Dr, Houston, TX"
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00562",
    "address": "2225 Louisiana St, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00565",
    "address": "9330 Jones Rd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00768",
    "address": "9325 Katy Fwy, Houston, TX"
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00773",
    "address": "12850 Memorial Dr, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01639",
    "address": "12620 Woodforest Blvd, Houston, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00387",
    "address": "19300 W Lake Houston Pkwy, Humble, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00566",
    "address": "9475 Farm to Market 1960 Bypass Rd W, Humble, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00464",
    "address": "1702 11th St, Huntsville, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01663",
    "address": "7505 N MacArthur Blvd, Irving, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00296",
    "address": "22150 Westheimer Pkwy, Katy, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00313",
    "address": "1712 Spring Green Blvd, Katy, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00378",
    "address": "9806 Gaston Rd, Katy, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00397",
    "address": "2700 W Grand Pkwy N, Katy, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00532",
    "address": "25675 Nelson Way, Katy, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00535",
    "address": "6711 S Fry Rd, Katy, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00757",
    "address": "6055 N Fry Rd, Katy, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00905",
    "address": "2061 Rufe Snow Dr, Keller, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01643",
    "address": "976 Keller Pkwy, Keller, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00381",
    "address": "1300 W Fairmont Pkwy, La Porte, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00400",
    "address": "1920 W League City Pkwy, League City, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00551",
    "address": "2750 E League City Pkwy, League City, TX"
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00763",
    "address": "2951 Marina Bay Dr Suite B, League City, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01542",
    "address": "4620 State Hwy 121, Lewisville, TX"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01641",
    "address": "1288 W Main St, Lewisville, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01657",
    "address": "3001 Matlock Rd, Mansfield, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00490",
    "address": "3001 S Central Expy, McKinney, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00534",
    "address": "1801 N Lake Forest Dr, McKinney, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00904",
    "address": "6800 Virginia Pkwy, McKinney, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00459",
    "address": "3001 Hardin Blvd, Mckinney, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00482",
    "address": "1500 S Beltline Rd, Mesquite, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00898",
    "address": "2828 Motley Dr, Mesquite, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00899",
    "address": "1501 Pioneer Rd, Mesquite, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01666",
    "address": "2200 FM 663, Midlothian, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00403",
    "address": "6200 Hwy 6, Missouri City, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00407",
    "address": "10250 Hwy 6, Missouri City, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00547",
    "address": "20168 Eva St, Montgomery, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00303",
    "address": "22030 Market Pl Dr, New Caney, TX"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00458",
    "address": "5152 Rufe Snow Dr, North Richland Hills, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01645",
    "address": "9150 N Tarrant Pkwy, North Richland Hills, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00290",
    "address": "2619 Red Bluff Rd, Pasadena, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00291",
    "address": "3550 Spencer Hwy, Pasadena, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00552",
    "address": "6767 Spencer Hwy, Pasadena, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00295",
    "address": "3245 Broadway St, Pearland, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00301",
    "address": "8323 Broadway St, Pearland, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00307",
    "address": "11003 Shadow Creek Pkwy, Pearland, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00466",
    "address": "2805 Business Center Dr, Pearland, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00525",
    "address": "2710 Pearland Pkwy, Pearland, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00243",
    "address": "7100 Independence Pkwy, Plano, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00539",
    "address": "2200 14th St, Plano, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01673",
    "address": "3305 Dallas Pkwy, Plano, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00916",
    "address": "1380 W Campbell Rd, Richardson, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00919",
    "address": "3411 Custer Pkwy, Richardson, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01633",
    "address": "536 Centennial Blvd, Richardson, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00304",
    "address": "6425 Fm 1464, Richmond, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00441",
    "address": "10161 W Grand Pkwy S, Richmond, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01593",
    "address": "9211 Farm to Market Rd 723, Richmond, TX"
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00463",
    "address": "3070 N Goliad St, Rockwall, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01651",
    "address": "1950 N Goliad St, Rockwall, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00567",
    "address": "24401 Brazos Town Crossing, Rosenberg, TX"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00963",
    "address": "1201 N Saginaw Blvd, Saginaw, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00393",
    "address": "1905 El Mar Ln, Seabrook, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00900",
    "address": "2110 E Southlake Blvd, Southlake, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00306",
    "address": "6060 Farm To Market 2920, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00383",
    "address": "3731 Riley Fuzzel Rd, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00404",
    "address": "5671 Treaschwig Rd, Spring, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00533",
    "address": "20311 Champion Forest Dr, Spring, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00544",
    "address": "3540 Rayford Rd, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00545",
    "address": "15802 Champion Forest Dr, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00549",
    "address": "8745 Spring Cypress Rd, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00561",
    "address": "2150 Spring Stuebner Rd, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00564",
    "address": "18518 Kuykendahl Rd, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00568",
    "address": "2301 Rayford Rd, Spring, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00292",
    "address": "18861 University Blvd, Sugar Land, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00305",
    "address": "11565 S Texas 6, Sugar Land, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00470",
    "address": "530 Hwy 6, Sugar Land, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00556",
    "address": "4825 Sweetwater Blvd, Sugar Land, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01636",
    "address": "19900 Southwest Fwy, Sugar Land, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00569",
    "address": "3541 Palmer Hwy, Texas City, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00434",
    "address": "9595 Six Pines Dr, The Woodlands, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00536",
    "address": "10777 Kuykendahl Rd, The Woodlands, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00559",
    "address": "8000 Research Forest Dr, The Woodlands, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00392",
    "address": "24350 Kuykendahl Rd, Tomball, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00399",
    "address": "14060 Farm to Market 2920, Tomball, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00550",
    "address": "3135 FM 528 Rd, Webster, TX"
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01637",
    "address": "701 S Capital of Texas Hwy, West Lake Hills, TX"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00548",
    "address": "12605 Interstate 45 N, Willis, TX"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00812",
    "address": "156 S Main St, Brigham City, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00787",
    "address": "212 E 12300 S, Draper, UT"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01457",
    "address": "11969 Carlsbad Way, Herriman, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00793",
    "address": "1550 E 3500 N, Lehi, UT"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01449",
    "address": "7020 S 700 W, Midvale, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00798",
    "address": "4275 Harrison Blvd, Ogden, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00783",
    "address": "632 S 100 W, Payson, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00792",
    "address": "210 E 700 S, Pleasant Grove, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00791",
    "address": "4065 S Redwood Rd, Salt Lake City, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00794",
    "address": "876 E 800 S, Salt Lake City, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00781",
    "address": "2039 E 9400 S, Sandy, UT"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01451",
    "address": "2193 S Main St, South Salt Lake, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00795",
    "address": "4080 W 9000 S, West Jordan, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00784",
    "address": "4643 S 4000 W, West Valley City, UT"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00802",
    "address": "5620 W 4100 S, West Valley City, UT"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01466",
    "address": "2572 S 5600 W, West Valley City, UT"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00265",
    "address": "12350 W 64th Ave, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00438",
    "address": "8031 Wadsworth Blvd, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00642",
    "address": "15200 W 64th Ave, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00744",
    "address": "6350 Sheridan Boulevard, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00746",
    "address": "9731 W 58th Ave, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00752",
    "address": "8055 Sheridan Boulevard, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00107",
    "address": "3050 S Peoria St, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00273",
    "address": "15250 E Mississippi Ave, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00284",
    "address": "655 Peoria St, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00433",
    "address": "25701 E Smoky Hill Rd, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00621",
    "address": "1677 S Havana St, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00636",
    "address": "12200 E Mississippi Ave, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00660",
    "address": "6100 S Gun Club Rd, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00663",
    "address": "18730 E Hampden Ave, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00689",
    "address": "1200 S Buckley Rd, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00735",
    "address": "18211 E Hampden Ave, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00737",
    "address": "17000 E Iliff Ave, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00738",
    "address": "4271 S Buckley Rd, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00743",
    "address": "1155 S Havana St, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01146",
    "address": "6412 S Parker Rd, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00435",
    "address": "3325 28th St, Boulder, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00629",
    "address": "1650 30th St, Boulder, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00665",
    "address": "4800 E Baseline Rd, Boulder, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01180",
    "address": "2798 Arapahoe Ave, Boulder, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00114",
    "address": "100 N 50th Ave, Brighton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00275",
    "address": "1150 US-287, Broomfield, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00724",
    "address": "12167 Sheridan Boulevard, Broomfield, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00753",
    "address": "2355 W 136th Ave, Broomfield, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01147",
    "address": "3602 W 144th Ave, Broomfield, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00283",
    "address": "750 N Ridge Rd, Castle Rock, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00745",
    "address": "7284 Lagae Rd, Castle Rock, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01096",
    "address": "880 S Perry St, Castle Rock, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00272",
    "address": "8200 S Holly St, Centennial, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00280",
    "address": "5050 E Arapahoe Rd, Centennial, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00285",
    "address": "7575 S University Blvd, Centennial, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01150",
    "address": "7375 E Arapahoe Rd, Centennial, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00362",
    "address": "6930 N Academy Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01110",
    "address": "3275 W Colorado Ave, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01157",
    "address": "7055 Austin Bluffs Pkwy, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01161",
    "address": "1920 S Nevada Ave, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01163",
    "address": "5060 N Academy Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01165",
    "address": "2210 N Wahsatch Ave, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01178",
    "address": "6520 S Academy Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01179",
    "address": "2890 N Powers Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01269",
    "address": "1121 N Circle Dr, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01313",
    "address": "840 Village Center Dr, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01476",
    "address": "1425 S Murray Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01506",
    "address": "3620 Austin Bluffs Pkwy, Colorado Springs, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00426",
    "address": "4850 E 62nd Ave, Commerce City, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00437",
    "address": "15051 E 104th Ave, Commerce City, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01647",
    "address": "27152 Main St, Conifer, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00100",
    "address": "3100 S Sheridan Blvd, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00268",
    "address": "5125 W Florida Ave, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00287",
    "address": "825 S Colorado Blvd, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00398",
    "address": "2727 W Evans Ave, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00430",
    "address": "890 S Monaco St Pkwy, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00439",
    "address": "2750 S Colorado Blvd, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00442",
    "address": "1355 Krameria St, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00443",
    "address": "10406 E M.L.K. Jr Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00622",
    "address": "1653 S Colorado Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00635",
    "address": "2150 S Downing St, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00641",
    "address": "200 Quebec St, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00649",
    "address": "6460 E Yale Ave, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00650",
    "address": "6220 E 14th Ave, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00652",
    "address": "2660 N Federal Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00653",
    "address": "3800 W 44th Ave, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00667",
    "address": "757 E 20th Ave, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00749",
    "address": "1331 Speer Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00780",
    "address": "323 S Broadway, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00282",
    "address": "1725 Sheridan Boulevard, Edgewater, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01166",
    "address": "220 S Elizabeth St, Elizabeth, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00432",
    "address": "101 Englewood Pkwy, Englewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00754",
    "address": "3495 S University Blvd, Englewood, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00277",
    "address": "3851 S Hwy 74, Evergreen, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01172",
    "address": "7655 McLaughlin Rd, Falcon, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00270",
    "address": "1575 W 84th Ave, Federal Heights, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01098",
    "address": "8134 Colorado Blvd, Firestone, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00627",
    "address": "2535 S College Ave, Fort Collins, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01104",
    "address": "2160 W Drake Rd, Fort Collins, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01107",
    "address": "3657 S College Ave, Fort Collins, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01100",
    "address": "1300 Dexter St, Fort Lupton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01477",
    "address": "6925 Mesa Ridge Pkwy, Fountain, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01704",
    "address": "5801 Silverstone Dr, Frederick, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00446",
    "address": "4600 Leetsdale Dr, Glendale, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00755",
    "address": "17171 S Golden Rd, Golden, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01326",
    "address": "1701 Jackson St, Golden, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00648",
    "address": "2100 35th Ave, Greeley, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01079",
    "address": "4548 Centerplace Dr, Greeley, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01092",
    "address": "3526 W 10th St, Greeley, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00445",
    "address": "4910 S Yosemite St, Greenwood Village, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00742",
    "address": "6000 S Holly St, Greenwood Village, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00108",
    "address": "2205 W Wildcat Reserve Pkwy, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00274",
    "address": "8673 S Quebec St, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00431",
    "address": "4000 Red Cedar Dr, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00449",
    "address": "9551 S University Blvd, Highlands Ranch, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01191",
    "address": "9255 S Broadway, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00436",
    "address": "2900 Arapahoe Rd, Lafayette, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00110",
    "address": "7984 W Alameda Ave, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00266",
    "address": "1927 S Wadsworth Blvd, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00278",
    "address": "1555 Quail St, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00429",
    "address": "12043 W Alameda Pkwy, Lakewood, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00471",
    "address": "11088 W Jewell Ave, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00748",
    "address": "1545 S Kipling Pkwy, Lakewood, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01173",
    "address": "13111 W Alameda Pkwy, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00101",
    "address": "11747 W Ken Caryl Ave, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00102",
    "address": "8126 S Wadsworth Blvd, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00279",
    "address": "100 W Littleton Blvd, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00286",
    "address": "6760 S Pierce St, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00447",
    "address": "7901 S Broadway, Littleton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01081",
    "address": "181 W Mineral Ave, Littleton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01174",
    "address": "8434 S Kipling Pkwy, Littleton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01142",
    "address": "9229 Lincoln Ave, Lone Tree, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00448",
    "address": "1050 Ken Pratt Blvd, Longmont, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00450",
    "address": "1632 Hover St, Longmont, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00428",
    "address": "1375 E South Boulder Rd, Louisville, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00644",
    "address": "1601 Coalton Rd, Louisville, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01170",
    "address": "624 W Hwy 105, Monument, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00747",
    "address": "750 E 104th Ave, Northglenn, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01158",
    "address": "500 E 120th Ave, Northglenn, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00105",
    "address": "17761 Cottonwood Dr, Parker, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00109",
    "address": "17031 Lincoln Ave, Parker, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01105",
    "address": "11051 S Parker Rd, Parker, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01171",
    "address": "12959 S Parker Rd, Parker, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00440",
    "address": "3801 E 120th Ave, Thornton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00647",
    "address": "771 Thornton Pkwy, Thornton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00664",
    "address": "3840 E 104th Ave, Thornton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00271",
    "address": "10351 Federal Blvd, Westminster, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00281",
    "address": "9983 Wadsworth Pkwy, Westminster, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00289",
    "address": "3400 Youngfield St, Wheat Ridge, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00444",
    "address": "5301 W 38th Ave, Wheat Ridge, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00638",
    "address": "3900 Wadsworth Blvd, Wheat Ridge, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01483",
    "address": "1101 E US-24, Woodland Park, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00265",
    "address": "12350 W 64th Ave, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00438",
    "address": "8031 Wadsworth Blvd, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00642",
    "address": "15200 W 64th Ave, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00744",
    "address": "6350 Sheridan Boulevard, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00746",
    "address": "9731 W 58th Ave, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00752",
    "address": "8055 Sheridan Boulevard, Arvada, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00107",
    "address": "3050 S Peoria St, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00273",
    "address": "15250 E Mississippi Ave, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00284",
    "address": "655 Peoria St, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00433",
    "address": "25701 E Smoky Hill Rd, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00621",
    "address": "1677 S Havana St, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00636",
    "address": "12200 E Mississippi Ave, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00660",
    "address": "6100 S Gun Club Rd, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00663",
    "address": "18730 E Hampden Ave, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00689",
    "address": "1200 S Buckley Rd, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00735",
    "address": "18211 E Hampden Ave, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00737",
    "address": "17000 E Iliff Ave, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00738",
    "address": "4271 S Buckley Rd, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00743",
    "address": "1155 S Havana St, Aurora, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01146",
    "address": "6412 S Parker Rd, Aurora, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00435",
    "address": "3325 28th St, Boulder, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00629",
    "address": "1650 30th St, Boulder, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00665",
    "address": "4800 E Baseline Rd, Boulder, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01180",
    "address": "2798 Arapahoe Ave, Boulder, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00114",
    "address": "100 N 50th Ave, Brighton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00275",
    "address": "1150 US-287, Broomfield, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00724",
    "address": "12167 Sheridan Boulevard, Broomfield, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00753",
    "address": "2355 W 136th Ave, Broomfield, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01147",
    "address": "3602 W 144th Ave, Broomfield, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00283",
    "address": "750 N Ridge Rd, Castle Rock, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00745",
    "address": "7284 Lagae Rd, Castle Rock, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01096",
    "address": "880 S Perry St, Castle Rock, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00272",
    "address": "8200 S Holly St, Centennial, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00280",
    "address": "5050 E Arapahoe Rd, Centennial, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00285",
    "address": "7575 S University Blvd, Centennial, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01150",
    "address": "7375 E Arapahoe Rd, Centennial, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00362",
    "address": "6930 N Academy Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01110",
    "address": "3275 W Colorado Ave, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01157",
    "address": "7055 Austin Bluffs Pkwy, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01161",
    "address": "1920 S Nevada Ave, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01163",
    "address": "5060 N Academy Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01165",
    "address": "2210 N Wahsatch Ave, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01178",
    "address": "6520 S Academy Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01179",
    "address": "2890 N Powers Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01269",
    "address": "1121 N Circle Dr, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01313",
    "address": "840 Village Center Dr, Colorado Springs, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01476",
    "address": "1425 S Murray Blvd, Colorado Springs, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01506",
    "address": "3620 Austin Bluffs Pkwy, Colorado Springs, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00426",
    "address": "4850 E 62nd Ave, Commerce City, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00437",
    "address": "15051 E 104th Ave, Commerce City, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01647",
    "address": "27152 Main St, Conifer, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00100",
    "address": "3100 S Sheridan Blvd, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00268",
    "address": "5125 W Florida Ave, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00287",
    "address": "825 S Colorado Blvd, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00398",
    "address": "2727 W Evans Ave, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00430",
    "address": "890 S Monaco St Pkwy, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00439",
    "address": "2750 S Colorado Blvd, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00442",
    "address": "1355 Krameria St, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00443",
    "address": "10406 E M.L.K. Jr Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00622",
    "address": "1653 S Colorado Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00635",
    "address": "2150 S Downing St, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00641",
    "address": "200 Quebec St, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00649",
    "address": "6460 E Yale Ave, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00650",
    "address": "6220 E 14th Ave, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00652",
    "address": "2660 N Federal Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00653",
    "address": "3800 W 44th Ave, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00667",
    "address": "757 E 20th Ave, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00749",
    "address": "1331 Speer Blvd, Denver, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00780",
    "address": "323 S Broadway, Denver, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00282",
    "address": "1725 Sheridan Boulevard, Edgewater, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01166",
    "address": "220 S Elizabeth St, Elizabeth, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00432",
    "address": "101 Englewood Pkwy, Englewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00754",
    "address": "3495 S University Blvd, Englewood, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00277",
    "address": "3851 S Hwy 74, Evergreen, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01172",
    "address": "7655 McLaughlin Rd, Falcon, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00270",
    "address": "1575 W 84th Ave, Federal Heights, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01098",
    "address": "8134 Colorado Blvd, Firestone, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00627",
    "address": "2535 S College Ave, Fort Collins, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01104",
    "address": "2160 W Drake Rd, Fort Collins, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01107",
    "address": "3657 S College Ave, Fort Collins, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01100",
    "address": "1300 Dexter St, Fort Lupton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01477",
    "address": "6925 Mesa Ridge Pkwy, Fountain, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01704",
    "address": "5801 Silverstone Dr, Frederick, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00446",
    "address": "4600 Leetsdale Dr, Glendale, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00755",
    "address": "17171 S Golden Rd, Golden, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01326",
    "address": "1701 Jackson St, Golden, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00648",
    "address": "2100 35th Ave, Greeley, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01079",
    "address": "4548 Centerplace Dr, Greeley, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01092",
    "address": "3526 W 10th St, Greeley, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00445",
    "address": "4910 S Yosemite St, Greenwood Village, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00742",
    "address": "6000 S Holly St, Greenwood Village, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00108",
    "address": "2205 W Wildcat Reserve Pkwy, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00274",
    "address": "8673 S Quebec St, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00431",
    "address": "4000 Red Cedar Dr, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00449",
    "address": "9551 S University Blvd, Highlands Ranch, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01191",
    "address": "9255 S Broadway, Highlands Ranch, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00436",
    "address": "2900 Arapahoe Rd, Lafayette, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00110",
    "address": "7984 W Alameda Ave, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00266",
    "address": "1927 S Wadsworth Blvd, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00278",
    "address": "1555 Quail St, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00429",
    "address": "12043 W Alameda Pkwy, Lakewood, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00471",
    "address": "11088 W Jewell Ave, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00748",
    "address": "1545 S Kipling Pkwy, Lakewood, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01173",
    "address": "13111 W Alameda Pkwy, Lakewood, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00101",
    "address": "11747 W Ken Caryl Ave, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00102",
    "address": "8126 S Wadsworth Blvd, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00279",
    "address": "100 W Littleton Blvd, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00286",
    "address": "6760 S Pierce St, Littleton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00447",
    "address": "7901 S Broadway, Littleton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01081",
    "address": "181 W Mineral Ave, Littleton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01174",
    "address": "8434 S Kipling Pkwy, Littleton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01142",
    "address": "9229 Lincoln Ave, Lone Tree, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00448",
    "address": "1050 Ken Pratt Blvd, Longmont, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00450",
    "address": "1632 Hover St, Longmont, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00428",
    "address": "1375 E South Boulder Rd, Louisville, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00644",
    "address": "1601 Coalton Rd, Louisville, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01170",
    "address": "624 W Hwy 105, Monument, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00747",
    "address": "750 E 104th Ave, Northglenn, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01158",
    "address": "500 E 120th Ave, Northglenn, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00105",
    "address": "17761 Cottonwood Dr, Parker, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00109",
    "address": "17031 Lincoln Ave, Parker, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01105",
    "address": "11051 S Parker Rd, Parker, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01171",
    "address": "12959 S Parker Rd, Parker, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00440",
    "address": "3801 E 120th Ave, Thornton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00647",
    "address": "771 Thornton Pkwy, Thornton, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00664",
    "address": "3840 E 104th Ave, Thornton, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00271",
    "address": "10351 Federal Blvd, Westminster, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00281",
    "address": "9983 Wadsworth Pkwy, Westminster, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00289",
    "address": "3400 Youngfield St, Wheat Ridge, CO"
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00444",
    "address": "5301 W 38th Ave, Wheat Ridge, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00638",
    "address": "3900 Wadsworth Blvd, Wheat Ridge, CO"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01483",
    "address": "1101 E US-24, Woodland Park, CO"
  },
  {
    "retailer": "Tanger Outlets Nashville",
    "machineId": "Q01787",
    "address": "4060 Cane Ridge Pkwy, Antioch, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01112",
    "address": "210 Franklin Rd, Brentwood, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01125",
    "address": "6690 Nolensville Rd, Brentwood, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01033",
    "address": "1203 Murfreesboro Rd, Franklin, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01224",
    "address": "2020 Mallory Ln, Franklin, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01037",
    "address": "123 Northcreek Blvd, Goodlettsville, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00992",
    "address": "4432 Veterans Pkwy, Murfreesboro, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01027",
    "address": "2946 S Church St, Murfreesboro, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01029",
    "address": "143 McGavock Pk, Nashville, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01034",
    "address": "61 E Thompson Ln, Nashville, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01017",
    "address": "463 Sam Ridley Pkwy W, Smyrna, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01108",
    "address": "2600 Memorial Blvd, Springfield, TN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01023",
    "address": "1751 Patrick Dr, Burlington, KY"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00692",
    "address": "70 Martha Layne Collins Blvd, Cold Spring, KY"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00612",
    "address": "4303 Winston Ave, Covington, KY"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00608",
    "address": "2150 Dixie Hwy, Fort Mitchell, KY"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00678",
    "address": "9001 US-42, Union, KY"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00703",
    "address": "635 Chestnut Dr, Walton, KY"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01196",
    "address": "103 S Randall Rd, Algonquin, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01790",
    "address": "12150 S Pulaski Rd, Alsip, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01195",
    "address": "440 E Rand Rd, Arlington Heights, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01199",
    "address": "125 E Stearns Rd, Bartlett, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00758",
    "address": "119 S Randall Rd, Batavia, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01181",
    "address": "1200 W Boughton Rd, Bolingbrook, IL"
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01145",
    "address": "1550 Deerfield Pkwy, Buffalo Grove, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01198",
    "address": "79 McHenry Rd, Buffalo Grove, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01474",
    "address": "7910 S Cicero Ave, Burbank, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01205",
    "address": "750 Army Trail Rd, Carol Stream, IL"
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01228",
    "address": "2100 Randall Rd, Carpentersville, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01447",
    "address": "696 Northwest Hwy, Cary, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00267",
    "address": "2940 N Ashland Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00584",
    "address": "1763 W Howard St, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00595",
    "address": "3570 N Elston Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01316",
    "address": "1220 S Ashland Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01374",
    "address": "1340 S Canal St, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01376",
    "address": "1341 N Paulina St, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01382",
    "address": "2520 N Narragansett Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01384",
    "address": "4250 N Lincoln Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01388",
    "address": "3630 N Southport Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01393",
    "address": "102 W Division St, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01395",
    "address": "7342 W Foster Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01438",
    "address": "1655 E 95th St, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01446",
    "address": "2550 N Clybourn Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01475",
    "address": "11730 S Marshfield Ave, Chicago, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01725",
    "address": "4660 W Irving Park Rd, Chicago, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01728",
    "address": "7030 S Ashland Ave, Chicago, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01768",
    "address": "4821 W North Ave, Chicago, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00682",
    "address": "1333 Western Ave, Chicago Heights, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01785",
    "address": "3039 S Cicero Ave, Cicero, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01436",
    "address": "303 Holmes Ave, Clarendon Hills, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00701",
    "address": "1701 N Larkin Ave, Crest Hill, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01138",
    "address": "6140 Northwest Hwy, Crystal Lake, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00700",
    "address": "7329 S Cass Ave, Darien, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01795",
    "address": "1000 E Sibley Blvd, Dolton, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01190",
    "address": "1040 Summit St, Elgin, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01230",
    "address": "1660 Larkin Ave, Elgin, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01309",
    "address": "153 Schiller St, Elmhurst, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01737",
    "address": "2400 W Main St, Evanston, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00579",
    "address": "21164 S LaGrange Rd, Frankfort, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01310",
    "address": "10203 Grand Ave, Franklin Park, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01201",
    "address": "2164 Bloomingdale Rd, Glendale Heights, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01432",
    "address": "9528 S Roberts Rd, Hickory Hills, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00817",
    "address": "1069 N Roselle Rd, Hoffman Estates, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01202",
    "address": "1485 Palatine Rd, Hoffman Estates, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00825",
    "address": "10090 IL-47, Huntley, IL"
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01203",
    "address": "27555 W IL-120, Lakemoor, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00589",
    "address": "1177 S Main St, Lombard, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01189",
    "address": "4222 W Elm St, McHenry, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01386",
    "address": "800 W North Ave, Melrose Park, IL"
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01745",
    "address": "2525 W North Ave, Melrose Park, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01152",
    "address": "333 Euclid Ave, Mount Prospect, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01133",
    "address": "1150 W Maple Ave, Mundelein, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01182",
    "address": "1501 S Lake St, Mundelein, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00570",
    "address": "1227 S Naper Blvd, Naperville, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00713",
    "address": "2855 95th St, Naperville, IL"
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01200",
    "address": "151 Hansen Blvd, North Aurora, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01429",
    "address": "17930 Wolf Rd, Orland Park, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00582",
    "address": "2540 US-30, Oswego, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01323",
    "address": "481 Busse Hwy, Park Ridge, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01437",
    "address": "13460 S Rte 59, Plainfield, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00806",
    "address": "3000 Kirchoff Rd, Rolling Meadows, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01375",
    "address": "20 S Weber Rd, Romeoville, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01186",
    "address": "2501 W Schaumburg Rd, Schaumburg, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01206",
    "address": "1151 S Roselle Rd, Schaumburg, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01308",
    "address": "9449 Skokie Blvd, Skokie, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01204",
    "address": "375 S Randall Rd, South Elgin, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01194",
    "address": "217 W Irving Park Rd, Streamwood, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00580",
    "address": "17117 S Harlem Ave, Tinley Park, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01222",
    "address": "547 W Liberty St, Wauconda, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01088",
    "address": "922 N Green Bay Rd, Waukegan, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01212",
    "address": "3124 N Lewis Ave, Waukegan, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00574",
    "address": "30 Danada Square W, Wheaton, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00578",
    "address": "2031 N Main St, Wheaton, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01373",
    "address": "411 Green Bay Rd, Wilmette, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00571",
    "address": "2317 75th St, Woodridge, IL"
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01143",
    "address": "145 S Eastwood Dr, Woodstock, IL"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01073",
    "address": "2700 N Ballard Rd, Appleton, WI"
  },
  {
    "retailer": "Metro Market",
    "machineId": "Q01664",
    "address": "17630 W Bluemound Rd, Brookfield, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01678",
    "address": "17295 W Capitol Dr, Brookfield, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01732",
    "address": "15170 W Greenfield Ave, Brookfield, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00730",
    "address": "9200 N Green Bay Rd, Brown Deer, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01086",
    "address": "3010 Cahill Main, Fitchburg, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01652",
    "address": "W16200 Mequon Rd, Germantown, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01650",
    "address": "301 Falls Rd, Grafton, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01093",
    "address": "3161 Village Square Dr, Hartland, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00694",
    "address": "5710 75th St, Kenosha, WI"
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q00709",
    "address": "7145 120th Ave, Kenosha, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01040",
    "address": "2811 18th St, Kenosha, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00693",
    "address": "6655 McKee Rd, Madison, WI"
  },
  {
    "retailer": "Metro Market",
    "machineId": "Q01504",
    "address": "6010 Cottage Grove Rd, Madison, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01111",
    "address": "W14435 Appleton Ave, Menomonee Falls, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00160",
    "address": "605 E Lyon St, Milwaukee, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01043",
    "address": "3701 S 27th St, Milwaukee, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01114",
    "address": "7401 Good Hope Rd, Milwaukee, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01677",
    "address": "5700 W Capitol Dr, Milwaukee, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01044",
    "address": "2820 S Green Bay Rd, Mount Pleasant, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01786",
    "address": "1010 N Rochester St, Mukwonago, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00696",
    "address": "2320 W Ryan Rd, Oak Creek, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01052",
    "address": "8770 S Howell Ave, Oak Creek, WI"
  },
  {
    "retailer": "Metro Market",
    "machineId": "Q01654",
    "address": "2160 Silvernail Rd, Pewaukee, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01047",
    "address": "1202 N Green Bay Rd, Racine, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01095",
    "address": "N 65th St W24838, Sussex, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01799",
    "address": "405 N Wales Rd, Wales, WI"
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01053",
    "address": "2625 S 108th St, West Allis, WI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01016",
    "address": "11700 Olio Rd, Fishers, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01091",
    "address": "7450 Fishers Station Dr, Fishers, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01076",
    "address": "2200 Independence Dr, Greenwood, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00527",
    "address": "680 Twin Aire Dr, Indianapolis, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00852",
    "address": "5718 Crawfordsville Rd, Indianapolis, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01014",
    "address": "5911 Madison Ave, Indianapolis, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01396",
    "address": "172 Logan St, Noblesville, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01080",
    "address": "150 W 161st St, Westfield, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01665",
    "address": "17447 Carey Rd, Westfield, IN"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01003",
    "address": "23849 West Rd, Brownstown, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01090",
    "address": "20645 Gibraltar Rd, Brownstown, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00860",
    "address": "45540 Michigan Ave, Canton, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00865",
    "address": "1905 N Canton Center Rd, Canton, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00871",
    "address": "25780 Middlebelt Rd, Farmington Hills, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01360",
    "address": "12731 S Saginaw St, Grand Blanc, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00853",
    "address": "108 W Highland Rd, Howell, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00815",
    "address": "1821 S Cedar St, Imlay City, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00803",
    "address": "2060 DIX Hwy, Lincoln Park, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00885",
    "address": "30935 Five Mile Rd, Livonia, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01089",
    "address": "21555 21 Mile Rd, Macom, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00856",
    "address": "17447 Haggerty Rd, Northville, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01352",
    "address": "47650 Grand River Ave, Novi, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00849",
    "address": "9700 Chilson Commons Cir, Pinckney, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01082",
    "address": "4888 N Adams Rd, Rochester, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01066",
    "address": "65 S Livernois Rd, Rochester Hills, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00864",
    "address": "14945 23 Mile Rd, Shelby Township, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00684",
    "address": "7000 Monroe Blvd, Taylor, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00786",
    "address": "1237 Coolidge Hwy, Troy, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00801",
    "address": "28250 Dequindre Rd, Warren, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00858",
    "address": "26233 Hoover Rd, Warren, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01353",
    "address": "64660 Van Dyke Ave, Washington, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00867",
    "address": "5111 Highland Rd, Waterford, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00683",
    "address": "36430 Ford Rd, Westland, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00691",
    "address": "31300 Michigan Ave, Westland, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01106",
    "address": "7350 N Middlebelt Rd, Westland, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00863",
    "address": "2010 Whittaker Rd, Ypsilanti, MI"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00828",
    "address": "6095 Gender Rd, Canal Winchester, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01398",
    "address": "1095 S Main St, Centerville, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00697",
    "address": "6165 Glenway Ave, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00705",
    "address": "4500 Montgomery Rd, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00710",
    "address": "4613 Marburg Ave, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00750",
    "address": "3609 Warsaw Ave, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00759",
    "address": "10595 Springfield Pike, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00760",
    "address": "7132 Hamilton Ave, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00761",
    "address": "3636 Springdale Rd, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00772",
    "address": "5910 Harrison Ave, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01038",
    "address": "1 W Corry St, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01117",
    "address": "11390 Montgomery Rd, Cincinnati, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00620",
    "address": "150 W Sycamore St, Columbus, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00645",
    "address": "7000 E Broad St, Columbus, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00671",
    "address": "1177 Polaris Pkwy, Columbus, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00681",
    "address": "1375 Chambers Rd, Columbus, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00659",
    "address": "7625 Sawmill Rd, Dublin, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00677",
    "address": "7100 Hospital Dr, Dublin, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00698",
    "address": "300 S Hamilton Rd, Gahanna, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00708",
    "address": "1365 Stoneridge Dr, Gahanna, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00687",
    "address": "5800 W Broad St, Galloway, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00857",
    "address": "2474 Stringtown Rd, Grove City, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00651",
    "address": "6011 Groveport Rd, Groveport, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00688",
    "address": "6417 Columbus Pike, Lewis Center, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00673",
    "address": "5161 Hampsted Village Center Way, New Albany, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00628",
    "address": "1045 Hill Rd N, Pickerington, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01058",
    "address": "12116 Sycamore Trace, Plain City, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00639",
    "address": "6580 E Main St, Reynoldsburg, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00646",
    "address": "8460 E Main St, Reynoldsburg, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01391",
    "address": "780 Northwoods Blvd, Vandalia, OH"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01035",
    "address": "8000 Princeton Glendale Rd, West Chester, OH"
  }
]

export default vendingData;