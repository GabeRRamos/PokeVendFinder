const vendingDataWithCoords = [
  {
    "retailer": "Kroger",
    "machineId": "Q00602",
    "address": "3330 Cobb Pkwy NW, Acworth, GA",
    "lat": 34.035223,
    "lng": -84.679743
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00601",
    "address": "10945 State Bridge Rd, Alpharetta, GA",
    "lat": 34.0496366,
    "lng": -84.2228244
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00718",
    "address": "3000 Old Alabama Rd, Alpharetta, GA",
    "lat": 34.0231142,
    "lng": -84.2716215
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00726",
    "address": "12460 Crabapple Rd, Alpharetta, GA",
    "lat": 34.0855824,
    "lng": -84.3568489
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00809",
    "address": "12870 GA-9 N, Alpharetta, GA",
    "lat": 34.0854016,
    "lng": -84.2950808
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01258",
    "address": "5665 Atlanta Hwy, Alpharetta, GA",
    "lat": 34.1441483,
    "lng": -84.2512595
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00633",
    "address": "1715 Howell Mill Rd NW, Atlanta, GA",
    "lat": 33.8011087,
    "lng": -84.4143409
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00723",
    "address": "4920 Roswell Rd, Atlanta, GA",
    "lat": 33.8885719,
    "lng": -84.3823756
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00725",
    "address": "3030 Headland Dr SW, Atlanta, GA",
    "lat": 33.6883112,
    "lng": -84.4877399
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00819",
    "address": "3425 Cascade Rd, Atlanta, GA",
    "lat": 33.7229403,
    "lng": -84.5012007
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01045",
    "address": "2090 Dunwoody Club Dr, Atlanta, GA",
    "lat": 33.9605553,
    "lng": -84.3011685
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01048",
    "address": "1225 Caroline St NE, Atlanta, GA",
    "lat": 33.758332,
    "lng": -84.3473191
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01063",
    "address": "3855 Buford Hwy NE, Atlanta, GA",
    "lat": 33.858043,
    "lng": -84.311888
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01064",
    "address": "3871 Peachtree Rd NE, Atlanta, GA",
    "lat": 33.8421846,
    "lng": -84.3737539
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01084",
    "address": "2205 Lavista Rd NE, Atlanta, GA",
    "lat": 33.8173282,
    "lng": -84.3485433
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01099",
    "address": "590 Cascade Ave SW, Atlanta, GA",
    "lat": 33.7376429,
    "lng": -84.4330045
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01155",
    "address": "2685 Metropolitan Pkwy SW, Atlanta, GA",
    "lat": 33.6820536,
    "lng": -84.4081196
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01213",
    "address": "3559 Chamblee Tucker Rd, Atlanta, GA",
    "lat": 33.8836069,
    "lng": -84.2484495
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01257",
    "address": "800 Glenwood Ave SE, Atlanta, GA",
    "lat": 33.7424024,
    "lng": -84.3601166
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01261",
    "address": "227 Sandy Springs Pl NE, Atlanta, GA",
    "lat": 33.920474,
    "lng": -84.380412
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01071",
    "address": "3300 Hamilton Mill Rd, Buford, GA",
    "lat": 34.0932345,
    "lng": -83.9376013
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01021",
    "address": "136 W Belmont Dr, Calhoun, GA",
    "lat": 34.478283,
    "lng": -84.9373691
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00588",
    "address": "8020 Cumming Hwy, Canton, GA",
    "lat": 34.252524,
    "lng": -84.3581277
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01065",
    "address": "6055 Old National Hwy, College Park, GA",
    "lat": 33.5901055,
    "lng": -84.4704273
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01255",
    "address": "1745 Hwy 138 SE STE A, Conyers, GA",
    "lat": 33.703305,
    "lng": -83.941315
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00617",
    "address": "3139 Hwy 278 NE, Covington, GA",
    "lat": 33.6045271,
    "lng": -83.8588924
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00666",
    "address": "5341 Hwy 20 S, Covington, GA",
    "lat": 33.5492222,
    "lng": -84.015417
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00675",
    "address": "3700 Salem Rd, Covington, GA",
    "lat": 33.5941221,
    "lng": -83.968384
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01061",
    "address": "2325 Bethelview Rd, Cumming, GA",
    "lat": 34.2384319,
    "lng": -84.193193
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01221",
    "address": "2655 Freedom Pkwy, Cumming, GA",
    "lat": 34.250786,
    "lng": -84.0913219
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01263",
    "address": "5550 Bethelview Rd, Cumming, GA",
    "lat": 34.1695979,
    "lng": -84.1853864
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00862",
    "address": "457 Nathan Dean Blvd, Dallas, GA",
    "lat": 33.9102798,
    "lng": -84.8217756
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01054",
    "address": "8876 Dallas Acworth Hwy, Dallas, GA",
    "lat": 34.0107699,
    "lng": -84.7521239
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00767",
    "address": "2875 N Decatur Rd, Decatur, GA",
    "lat": 33.7918894,
    "lng": -84.2734511
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01015",
    "address": "2385 Wesley Chapel Rd, Decatur, GA",
    "lat": 33.718288,
    "lng": -84.2174447
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01069",
    "address": "3479 Memorial Dr, Decatur, GA",
    "lat": 33.7521271,
    "lng": -84.2695837
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00669",
    "address": "3875 Chapel Hill Rd, Douglasville, GA",
    "lat": 33.6997242,
    "lng": -84.7187966
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01072",
    "address": "8501 Hospital Dr, Douglasville, GA",
    "lat": 33.749269,
    "lng": -84.7323434
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00634",
    "address": "6555 Sugarloaf Pkwy, Duluth, GA",
    "lat": 33.9979627,
    "lng": -84.0898303
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01226",
    "address": "3455 Peachtree Industrial Blvd, Duluth, GA",
    "lat": 34.005503,
    "lng": -84.1732337
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01275",
    "address": "4498 Chamblee Dunwoody Rd, Dunwoody, GA",
    "lat": 33.9226317,
    "lng": -84.3158085
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00472",
    "address": "101 Fairview Rd, Ellenwood, GA",
    "lat": 33.6193593,
    "lng": -84.2389871
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00473",
    "address": "805 Glynn St S, Fayetteville, GA",
    "lat": 33.4319412,
    "lng": -84.4588746
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01056",
    "address": "7380 Spout Springs Rd, Flowery Branch, GA",
    "lat": 34.1074591,
    "lng": -83.8756259
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00637",
    "address": "1931 Jesse Jewell Pkwy SE, Gainesville, GA",
    "lat": 34.3131165,
    "lng": -83.7961804
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00872",
    "address": "3630 Thompson Bridge Rd, Gainesville, GA",
    "lat": 34.3735783,
    "lng": -83.8698763
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01272",
    "address": "1911 Grayson Hwy, Grayson, GA",
    "lat": 33.8977876,
    "lng": -83.9609317
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00676",
    "address": "8059 Tara Blvd, Jonesboro, GA",
    "lat": 33.5315402,
    "lng": -84.3639699
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00619",
    "address": "5664 Jonesboro Rd, Lake City, GA",
    "lat": 33.6002589,
    "lng": -84.3370693
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00624",
    "address": "1475 Buford Dr, Lawrenceville, GA",
    "lat": 33.9840304,
    "lng": -83.9848375
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01545",
    "address": "2100 Riverside Pkwy, Lawrenceville, GA",
    "lat": 33.967872,
    "lng": -84.0332848
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00643",
    "address": "4155 Lawrenceville Hwy NW, Lilburn, GA",
    "lat": 33.903498,
    "lng": -84.119311
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01046",
    "address": "4753 Atlanta Hwy, Loganville, GA",
    "lat": 33.8313461,
    "lng": -83.8842393
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01262",
    "address": "910 Athens Hwy, Loganville, GA",
    "lat": 33.8593501,
    "lng": -83.9545908
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00640",
    "address": "2100 Roswell Rd, Marietta, GA",
    "lat": 33.9676555,
    "lng": -84.4878822
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00712",
    "address": "2960 Shallowford Rd, Marietta, GA",
    "lat": 34.0349556,
    "lng": -84.4665121
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00790",
    "address": "3600 Dallas Hwy SW, Marietta, GA",
    "lat": 33.947496,
    "lng": -84.673105
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00796",
    "address": "4880 Lower Roswell Rd, Marietta, GA",
    "lat": 33.9638231,
    "lng": -84.4091196
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00834",
    "address": "3595 Canton Rd, Marietta, GA",
    "lat": 34.038781,
    "lng": -84.5289739
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01013",
    "address": "3162 Johnson Ferry Rd, Marietta, GA",
    "lat": 34.0261044,
    "lng": -84.4222814
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01059",
    "address": "1690 Powder Springs Rd SW, Marietta, GA",
    "lat": 33.9084559,
    "lng": -84.6031124
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01068",
    "address": "1000 Whitlock Ave NW, Marietta, GA",
    "lat": 33.9530721,
    "lng": -84.5818732
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00480",
    "address": "1751 Newnan Xing Blvd E, Newnan, GA",
    "lat": 33.364941,
    "lng": -84.754572
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01074",
    "address": "3150 GA-34 E, Newnan, GA",
    "lat": 33.3490577,
    "lng": -84.7699487
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01062",
    "address": "564 Crosstown Drive, Peachtree City, GA",
    "lat": 33.3768046,
    "lng": -84.5646659
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01042",
    "address": "4400 Brownsville Rd, Powder Springs, GA",
    "lat": 33.8465879,
    "lng": -84.6993045
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01077",
    "address": "4150 Macland Rd, Powder Springs, GA",
    "lat": 33.9039306,
    "lng": -84.6744413
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00729",
    "address": "2300 Holcomb Bridge Rd, Roswell, GA",
    "lat": 34.0052991,
    "lng": -84.294753
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00762",
    "address": "570 E Crossville Rd, Roswell, GA",
    "lat": 34.0400846,
    "lng": -84.3454877
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01264",
    "address": "900 Marietta Hwy, Roswell, GA",
    "lat": 34.0040611,
    "lng": -84.3896219
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00680",
    "address": "3035 Scenic Hwy S, Snellville, GA",
    "lat": 33.8422793,
    "lng": -84.0313123
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01234",
    "address": "1670 Scenic Hwy N, Snellville, GA",
    "lat": 33.879574,
    "lng": -84.011901
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00455",
    "address": "1750 Hudson Bridge Rd, Stockbridge, GA",
    "lat": 33.5031643,
    "lng": -84.2441819
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01075",
    "address": "3618 Hwy 138 SE, Stockbridge, GA",
    "lat": 33.54428,
    "lng": -84.23381
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01211",
    "address": "1232 S Hairston Rd, Stone Mountain, GA",
    "lat": 33.7593555,
    "lng": -84.1950316
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00870",
    "address": "400 Peachtree Industrial Blvd, Suwanee, GA",
    "lat": 34.0641507,
    "lng": -84.0721645
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01210",
    "address": "3651 Peachtree Pkwy, Suwanee, GA",
    "lat": 34.0695281,
    "lng": -84.1655633
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01214",
    "address": "2121 Lawrenceville-Suwanee Rd, Suwanee, GA",
    "lat": 34.0037152,
    "lng": -84.0384174
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01055",
    "address": "4357 Lawrenceville Hwy, Tucker, GA",
    "lat": 33.8551204,
    "lng": -84.2069888
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01215",
    "address": "3959 Lavista Rd A, Tucker, GA",
    "lat": 33.8434032,
    "lng": -84.2558397
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00799",
    "address": "4550 Jonesboro Rd, Union City, GA",
    "lat": 33.5664775,
    "lng": -84.5375638
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01028",
    "address": "12050 GA-92, Woodstock, GA",
    "lat": 34.0866384,
    "lng": -84.4854042
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01050",
    "address": "2295 Towne Lake Pkwy, Woodstock, GA",
    "lat": 34.1141079,
    "lng": -84.5534908
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01380",
    "address": "2635 Housley Rd, Annapolis, MD",
    "lat": 38.9873003,
    "lng": -76.5553226
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01361",
    "address": "1451 Ritchie Hwy, Arnold, MD",
    "lat": 39.0302056,
    "lng": -76.5038576
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01355",
    "address": "4401 Harford Rd, Baltimore, MD",
    "lat": 39.3393874,
    "lng": -76.5713093
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01364",
    "address": "2610 Boston St, Baltimore, MD",
    "lat": 39.2806431,
    "lng": -76.5788186
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01369",
    "address": "5660 Baltimore National Pike, Baltimore, MD",
    "lat": 39.2897667,
    "lng": -76.7306482
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01356",
    "address": "12410 Fairwood Pkwy, Bowie, MD",
    "lat": 38.9651947,
    "lng": -76.7894104
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01554",
    "address": "15916 S Crain Hwy, Brandywine, MD",
    "lat": 38.672423,
    "lng": -76.8759869
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01501",
    "address": "8785 Branch Ave, Clinton, MD",
    "lat": 38.7689258,
    "lng": -76.8894671
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01354",
    "address": "5485 Harpers Farm Rd A, Columbia, MD",
    "lat": 39.221537,
    "lng": -76.888452
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01425",
    "address": "9807 Main St, Damascus, MD",
    "lat": 39.2902034,
    "lng": -77.2021899
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01379",
    "address": "1313 Londontown Blvd, Eldersburg, MD",
    "lat": 39.4070427,
    "lng": -76.9492467
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01559",
    "address": "990 Swan Creek Rd E, Fort Washington, MD",
    "lat": 38.7269765,
    "lng": -76.9919476
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01443",
    "address": "19718 Germantown Rd, Germantown, MD",
    "lat": 39.180691,
    "lng": -77.2663319
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01365",
    "address": "7595 Greenbelt Rd, Greenbelt, MD",
    "lat": 38.9929823,
    "lng": -76.8766108
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01378",
    "address": "7643 Arundel Mills Blvd, Hanover, MD",
    "lat": 39.1519282,
    "lng": -76.7222495
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01372",
    "address": "3702 East-West Hwy, Hyattsville, MD",
    "lat": 38.9670494,
    "lng": -76.9515119
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01550",
    "address": "40 Shining Willow Way, La Plata, MD",
    "lat": 38.5422636,
    "lng": -76.9820493
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01368",
    "address": "337 E Ridgeville Blvd, Mount Airy, MD",
    "lat": 39.3660186,
    "lng": -77.1605458
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01423",
    "address": "3333 Spartan Rd, Olney, MD",
    "lat": 39.1504049,
    "lng": -77.0647002
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01363",
    "address": "10335 Reisterstown Rd, Owings Mills, MD",
    "lat": 39.4182483,
    "lng": -76.7763368
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01439",
    "address": "6235 Oxon Hill Rd, Oxon Hill, MD",
    "lat": 38.8045385,
    "lng": -76.9856752
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01390",
    "address": "8858 Waltham Woods Rd, Parkville, MD",
    "lat": 39.4003136,
    "lng": -76.5441026
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01431",
    "address": "14939 Shady Grove Rd, Rockville, MD",
    "lat": 39.0977217,
    "lng": -77.1922562
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01471",
    "address": "403 Redland Blvd, Rockville, MD",
    "lat": 39.1132338,
    "lng": -77.1716167
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01428",
    "address": "10101 New Hampshire Ave, Silver Spring, MD",
    "lat": 39.0208174,
    "lng": -76.9760134
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01430",
    "address": "15411 New Hampshire Ave, Silver Spring, MD",
    "lat": 39.1083552,
    "lng": -76.99613
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01381",
    "address": "1017 York Rd, Towson, MD",
    "lat": 39.411693,
    "lng": -76.608841
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01505",
    "address": "10 King St, Waldorf, MD",
    "lat": 38.6024972,
    "lng": -76.903319
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01377",
    "address": "444 WMC Dr, Westminster, MD",
    "lat": 39.5859836,
    "lng": -77.0131085
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01380",
    "address": "2635 Housley Rd, Annapolis, MD",
    "lat": 38.9873003,
    "lng": -76.5553226
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01361",
    "address": "1451 Ritchie Hwy, Arnold, MD",
    "lat": 39.0302056,
    "lng": -76.5038576
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01355",
    "address": "4401 Harford Rd, Baltimore, MD",
    "lat": 39.3393874,
    "lng": -76.5713093
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01364",
    "address": "2610 Boston St, Baltimore, MD",
    "lat": 39.2806431,
    "lng": -76.5788186
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01369",
    "address": "5660 Baltimore National Pike, Baltimore, MD",
    "lat": 39.2897667,
    "lng": -76.7306482
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01356",
    "address": "12410 Fairwood Pkwy, Bowie, MD",
    "lat": 38.9651947,
    "lng": -76.7894104
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01554",
    "address": "15916 S Crain Hwy, Brandywine, MD",
    "lat": 38.672423,
    "lng": -76.8759869
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01501",
    "address": "8785 Branch Ave, Clinton, MD",
    "lat": 38.7689258,
    "lng": -76.8894671
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01354",
    "address": "5485 Harpers Farm Rd A, Columbia, MD",
    "lat": 39.221537,
    "lng": -76.888452
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01425",
    "address": "9807 Main St, Damascus, MD",
    "lat": 39.2902034,
    "lng": -77.2021899
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01379",
    "address": "1313 Londontown Blvd, Eldersburg, MD",
    "lat": 39.4070427,
    "lng": -76.9492467
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01559",
    "address": "990 Swan Creek Rd E, Fort Washington, MD",
    "lat": 38.7269765,
    "lng": -76.9919476
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01443",
    "address": "19718 Germantown Rd, Germantown, MD",
    "lat": 39.180691,
    "lng": -77.2663319
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01365",
    "address": "7595 Greenbelt Rd, Greenbelt, MD",
    "lat": 38.9929823,
    "lng": -76.8766108
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01378",
    "address": "7643 Arundel Mills Blvd, Hanover, MD",
    "lat": 39.1519282,
    "lng": -76.7222495
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01372",
    "address": "3702 East-West Hwy, Hyattsville, MD",
    "lat": 38.9670494,
    "lng": -76.9515119
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01550",
    "address": "40 Shining Willow Way, La Plata, MD",
    "lat": 38.5422636,
    "lng": -76.9820493
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01368",
    "address": "337 E Ridgeville Blvd, Mount Airy, MD",
    "lat": 39.3660186,
    "lng": -77.1605458
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01423",
    "address": "3333 Spartan Rd, Olney, MD",
    "lat": 39.1504049,
    "lng": -77.0647002
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01363",
    "address": "10335 Reisterstown Rd, Owings Mills, MD",
    "lat": 39.4182483,
    "lng": -76.7763368
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01439",
    "address": "6235 Oxon Hill Rd, Oxon Hill, MD",
    "lat": 38.8045385,
    "lng": -76.9856752
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01390",
    "address": "8858 Waltham Woods Rd, Parkville, MD",
    "lat": 39.4003136,
    "lng": -76.5441026
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01431",
    "address": "14939 Shady Grove Rd, Rockville, MD",
    "lat": 39.0977217,
    "lng": -77.1922562
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01471",
    "address": "403 Redland Blvd, Rockville, MD",
    "lat": 39.1132338,
    "lng": -77.1716167
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01428",
    "address": "10101 New Hampshire Ave, Silver Spring, MD",
    "lat": 39.0208174,
    "lng": -76.9760134
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01430",
    "address": "15411 New Hampshire Ave, Silver Spring, MD",
    "lat": 39.1083552,
    "lng": -76.99613
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01381",
    "address": "1017 York Rd, Towson, MD",
    "lat": 39.411693,
    "lng": -76.608841
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01505",
    "address": "10 King St, Waldorf, MD",
    "lat": 38.6024972,
    "lng": -76.903319
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01377",
    "address": "444 WMC Dr, Westminster, MD",
    "lat": 39.5859836,
    "lng": -77.0131085
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01551",
    "address": "2400 Peoples Plaza, Newark, DE",
    "lat": 39.6003701,
    "lng": -75.7490359
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01585",
    "address": "260 Dunns Mill Rd, Bordentown, NJ",
    "lat": 40.1295261,
    "lng": -74.7104152
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01576",
    "address": "531 High St, Mount Holly, NJ",
    "lat": 40.0072537,
    "lng": -74.7945618
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01560",
    "address": "4400 S Broad St, Trenton, NJ",
    "lat": 40.1818585,
    "lng": -74.6730213
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01569",
    "address": "23 Levitt Pkwy, Willingboro, NJ",
    "lat": 40.0515603,
    "lng": -74.8912403
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01568",
    "address": "575 Taunton Ave, East Providence, RI",
    "lat": 41.8216508,
    "lng": -71.3570889
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01462",
    "address": "71 E Main Rd, Middletown, RI",
    "lat": 41.5169596,
    "lng": -71.2964604
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01574",
    "address": "1050 Willett Ave, Riverside, RI",
    "lat": 41.759064,
    "lng": -71.343077
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01427",
    "address": "160 Old Tower Hill Rd, South Kingstown, RI",
    "lat": 41.4439547,
    "lng": -71.4826681
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01575",
    "address": "125 Robert F Toner Blvd, Attleborough Falls, MA",
    "lat": 41.9691472,
    "lng": -71.2976692
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01869",
    "address": "368 Southbridge St, Auburn, MA",
    "lat": 42.205997,
    "lng": -71.8378964
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01581",
    "address": "71 Dodge St, Beverly, MA",
    "lat": 42.5770556,
    "lng": -70.8883873
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01587",
    "address": "246 Border St, Boston, MA",
    "lat": 42.3766147,
    "lng": -71.0403919
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q00460",
    "address": "105 Pearl St, Braintree, MA",
    "lat": 42.2023748,
    "lng": -71.0019487
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01582",
    "address": "641 Belmont St, Brockton, MA",
    "lat": 42.072142,
    "lng": -71.0459398
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01533",
    "address": "180A Cambridge St, Burlington, MA",
    "lat": 42.511461,
    "lng": -71.1983425
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01583",
    "address": "95 Washington St, Canton, MA",
    "lat": 42.1389076,
    "lng": -71.1447706
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01527",
    "address": "739 Chief Justice Cushing Hwy, Cohasset, MA",
    "lat": 42.2220036,
    "lng": -70.8052289
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01469",
    "address": "15 State Rd, Dartmouth, MA",
    "lat": 41.6361933,
    "lng": -70.9615073
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01441",
    "address": "4171 N Main St, Fall River, MA",
    "lat": 41.7511297,
    "lng": -71.1207636
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01442",
    "address": "760 Boston Rd, Groton, MA",
    "lat": 42.5799127,
    "lng": -71.5239638
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01578",
    "address": "390 West St, Mansfield, MA",
    "lat": 42.022947,
    "lng": -71.2336886
  },
  {
    "retailer": "Star Market",
    "machineId": "Q01540",
    "address": "1 Snow Rd, Marshfield, MA",
    "lat": 42.0913508,
    "lng": -70.7081812
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q00540",
    "address": "65 Main St, Medway, MA",
    "lat": 42.1520722,
    "lng": -71.403266
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01531",
    "address": "34 Essex St, Melrose, MA",
    "lat": 42.4562583,
    "lng": -71.0660474
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01461",
    "address": "93 Prospect St, Milford, MA",
    "lat": 42.1387407,
    "lng": -71.5334484
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01567",
    "address": "690 Depot St, North Easton, MA",
    "lat": 42.026171,
    "lng": -71.117551
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01584",
    "address": "134 Nahatan St, Norwood, MA",
    "lat": 42.1925391,
    "lng": -71.1967118
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01535",
    "address": "9 West Rd, Orleans, MA",
    "lat": 41.7797379,
    "lng": -70.002542
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01541",
    "address": "128 Essex Center Dr, Peabody, MA",
    "lat": 42.5385823,
    "lng": -70.9488226
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01473",
    "address": "2260 State Rd, Plymouth, MA",
    "lat": 41.8209621,
    "lng": -70.550478
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01464",
    "address": "127 Marion Rd, Wareham, MA",
    "lat": 41.7595791,
    "lng": -70.7288514
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01520",
    "address": "610 Middle St, Weymouth, MA",
    "lat": 42.2024224,
    "lng": -70.9434577
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01852",
    "address": "1177 Providence Rd, Whitinsville, MA",
    "lat": 42.1255516,
    "lng": -71.6478357
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01465",
    "address": "14 W Boylston St, Worcester, MA",
    "lat": 42.2886014,
    "lng": -71.8065322
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01472",
    "address": "68 Stafford St, Worcester, MA",
    "lat": 42.1761584,
    "lng": -71.9331179
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01496",
    "address": "20 D'Amante Dr, Concord, NH",
    "lat": 43.2221582,
    "lng": -71.4898165
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01481",
    "address": "276 W Main St, Hillsborough, NH",
    "lat": 43.1114871,
    "lng": -71.915672
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01498",
    "address": "586 Nashua St, Milford, NH",
    "lat": 42.825097,
    "lng": -71.6250643
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01450",
    "address": "213 Daniel Webster Hwy, Nashua, NH",
    "lat": 42.7107924,
    "lng": -71.4457589
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01480",
    "address": "300 Main St, Nashua, NH",
    "lat": 42.7538574,
    "lng": -71.4592311
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01571",
    "address": "121 E City Ave, Bala Cynwyd, PA",
    "lat": 40.001255,
    "lng": -75.226401
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01586",
    "address": "5300 Baltimore Pike, Clifton Heights, PA",
    "lat": 39.9251141,
    "lng": -75.3084208
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01589",
    "address": "105 E Street Rd, Feasterville, PA",
    "lat": 40.1467051,
    "lng": -74.9989273
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01547",
    "address": "124 Morton Ave, Folsom, PA",
    "lat": 39.8852278,
    "lng": -75.3304946
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01570",
    "address": "1305 West Chester Pike, Havertown, PA",
    "lat": 39.9742311,
    "lng": -75.3234407
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01577",
    "address": "323 Old York Rd, Jenkintown, PA",
    "lat": 40.0956645,
    "lng": -75.1256904
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01572",
    "address": "6800 New Falls Rd, Levittown, PA",
    "lat": 40.1518216,
    "lng": -74.8573986
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01591",
    "address": "527 E Baltimore Ave, Media, PA",
    "lat": 39.9163786,
    "lng": -75.3863152
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01573",
    "address": "48 W Rd, Newtown, PA",
    "lat": 40.2346336,
    "lng": -74.9452817
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01580",
    "address": "39 Leopard Rd, Paoli, PA",
    "lat": 40.0395763,
    "lng": -75.4769804
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01552",
    "address": "1400 E Passyunk Ave, Philadelphia, PA",
    "lat": 39.9322799,
    "lng": -75.1623613
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01588",
    "address": "3200-09 Red Lion Rd, Philadelphia, PA",
    "lat": 40.112766,
    "lng": -75.048469
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q00529",
    "address": "800 Second Street Pike, Richboro, PA",
    "lat": 40.208625,
    "lng": -75.014691
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01579",
    "address": "700 W Lancaster Ave, Wayne, PA",
    "lat": 40.0455182,
    "lng": -75.4076175
  }
];

export default vendingDataWithCoords;
