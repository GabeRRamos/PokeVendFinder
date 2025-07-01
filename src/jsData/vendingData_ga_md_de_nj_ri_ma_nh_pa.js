const vendingData = [
  {
    "retailer": "Kroger",
    "machineId": "Q00602",
    "address": "3330 Cobb Pkwy NW, Acworth, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00601",
    "address": "10945 State Bridge Rd, Alpharetta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00718",
    "address": "3000 Old Alabama Rd, Alpharetta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00726",
    "address": "12460 Crabapple Rd, Alpharetta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00809",
    "address": "12870 GA-9 N, Alpharetta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01258",
    "address": "5665 Atlanta Hwy, Alpharetta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00633",
    "address": "1715 Howell Mill Rd NW, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00723",
    "address": "4920 Roswell Rd, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00725",
    "address": "3030 Headland Dr SW, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00819",
    "address": "3425 Cascade Rd, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01045",
    "address": "2090 Dunwoody Club Dr, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01048",
    "address": "1225 Caroline St NE, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01063",
    "address": "3855 Buford Hwy NE, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01064",
    "address": "3871 Peachtree Rd NE, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01084",
    "address": "2205 Lavista Rd NE, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01099",
    "address": "590 Cascade Ave SW, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01155",
    "address": "2685 Metropolitan Pkwy SW, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01213",
    "address": "3559 Chamblee Tucker Rd, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01257",
    "address": "800 Glenwood Ave SE, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01261",
    "address": "227 Sandy Springs Pl NE, Atlanta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01071",
    "address": "3300 Hamilton Mill Rd, Buford, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01021",
    "address": "136 W Belmont Dr, Calhoun, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00588",
    "address": "8020 Cumming Hwy, Canton, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01065",
    "address": "6055 Old National Hwy, College Park, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01255",
    "address": "1745 Hwy 138 SE STE A, Conyers, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00617",
    "address": "3139 Hwy 278 NE, Covington, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00666",
    "address": "5341 Hwy 20 S, Covington, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00675",
    "address": "3700 Salem Rd, Covington, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01061",
    "address": "2325 Bethelview Rd, Cumming, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01221",
    "address": "2655 Freedom Pkwy, Cumming, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01263",
    "address": "5550 Bethelview Rd, Cumming, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00862",
    "address": "457 Nathan Dean Blvd, Dallas, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01054",
    "address": "8876 Dallas Acworth Hwy, Dallas, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00767",
    "address": "2875 N Decatur Rd, Decatur, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01015",
    "address": "2385 Wesley Chapel Rd, Decatur, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01069",
    "address": "3479 Memorial Dr, Decatur, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00669",
    "address": "3875 Chapel Hill Rd, Douglasville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01072",
    "address": "8501 Hospital Dr, Douglasville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00634",
    "address": "6555 Sugarloaf Pkwy, Duluth, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01226",
    "address": "3455 Peachtree Industrial Blvd, Duluth, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01275",
    "address": "4498 Chamblee Dunwoody Rd, Dunwoody, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00472",
    "address": "101 Fairview Rd, Ellenwood, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00473",
    "address": "805 Glynn St S, Fayetteville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01056",
    "address": "7380 Spout Springs Rd, Flowery Branch, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00637",
    "address": "1931 Jesse Jewell Pkwy SE, Gainesville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00872",
    "address": "3630 Thompson Bridge Rd, Gainesville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01272",
    "address": "1911 Grayson Hwy, Grayson, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00676",
    "address": "8059 Tara Blvd, Jonesboro, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00619",
    "address": "5664 Jonesboro Rd, Lake City, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00624",
    "address": "1475 Buford Dr, Lawrenceville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01545",
    "address": "2100 Riverside Pkwy, Lawrenceville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00643",
    "address": "4155 Lawrenceville Hwy NW, Lilburn, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01046",
    "address": "4753 Atlanta Hwy, Loganville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01262",
    "address": "910 Athens Hwy, Loganville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00640",
    "address": "2100 Roswell Rd, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00712",
    "address": "2960 Shallowford Rd, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00790",
    "address": "3600 Dallas Hwy SW, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00796",
    "address": "4880 Lower Roswell Rd, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00834",
    "address": "3595 Canton Rd, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01013",
    "address": "3162 Johnson Ferry Rd, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01059",
    "address": "1690 Powder Springs Rd SW, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01068",
    "address": "1000 Whitlock Ave NW, Marietta, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00480",
    "address": "1751 Newnan Xing Blvd E, Newnan, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01074",
    "address": "3150 GA-34 E, Newnan, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01062",
    "address": "564 Crosstown Drive, Peachtree City, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01042",
    "address": "4400 Brownsville Rd, Powder Springs, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01077",
    "address": "4150 Macland Rd, Powder Springs, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00729",
    "address": "2300 Holcomb Bridge Rd, Roswell, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00762",
    "address": "570 E Crossville Rd, Roswell, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01264",
    "address": "900 Marietta Hwy, Roswell, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00680",
    "address": "3035 Scenic Hwy S, Snellville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01234",
    "address": "1670 Scenic Hwy N, Snellville, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00455",
    "address": "1750 Hudson Bridge Rd, Stockbridge, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01075",
    "address": "3618 Hwy 138 SE, Stockbridge, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01211",
    "address": "1232 S Hairston Rd, Stone Mountain, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00870",
    "address": "400 Peachtree Industrial Blvd, Suwanee, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01210",
    "address": "3651 Peachtree Pkwy, Suwanee, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01214",
    "address": "2121 Lawrenceville-Suwanee Rd, Suwanee, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01055",
    "address": "4357 Lawrenceville Hwy, Tucker, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01215",
    "address": "3959 Lavista Rd A, Tucker, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00799",
    "address": "4550 Jonesboro Rd, Union City, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01028",
    "address": "12050 GA-92, Woodstock, GA"
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01050",
    "address": "2295 Towne Lake Pkwy, Woodstock, GA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01380",
    "address": "2635 Housley Rd, Annapolis, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01361",
    "address": "1451 Ritchie Hwy, Arnold, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01355",
    "address": "4401 Harford Rd, Baltimore, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01364",
    "address": "2610 Boston St, Baltimore, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01369",
    "address": "5660 Baltimore National Pike, Baltimore, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01356",
    "address": "12410 Fairwood Pkwy, Bowie, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01554",
    "address": "15916 S Crain Hwy, Brandywine, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01501",
    "address": "8785 Branch Ave, Clinton, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01354",
    "address": "5485 Harpers Farm Rd A, Columbia, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01425",
    "address": "9807 Main St, Damascus, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01379",
    "address": "1313 Londontown Blvd, Eldersburg, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01559",
    "address": "990 Swan Creek Rd E, Fort Washington, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01443",
    "address": "19718 Germantown Rd, Germantown, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01365",
    "address": "7595 Greenbelt Rd, Greenbelt, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01378",
    "address": "7643 Arundel Mills Blvd, Hanover, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01372",
    "address": "3702 East-West Hwy, Hyattsville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01550",
    "address": "40 Shining Willow Way, La Plata, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01368",
    "address": "337 E Ridgeville Blvd, Mount Airy, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01423",
    "address": "3333 Spartan Rd, Olney, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01363",
    "address": "10335 Reisterstown Rd, Owings Mills, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01439",
    "address": "6235 Oxon Hill Rd, Oxon Hill, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01390",
    "address": "8858 Waltham Woods Rd, Parkville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01431",
    "address": "14939 Shady Grove Rd, Rockville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01471",
    "address": "403 Redland Blvd, Rockville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01428",
    "address": "10101 New Hampshire Ave, Silver Spring, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01430",
    "address": "15411 New Hampshire Ave, Silver Spring, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01381",
    "address": "1017 York Rd, Towson, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01505",
    "address": "10 King St, Waldorf, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01377",
    "address": "444 WMC Dr, Westminster, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01380",
    "address": "2635 Housley Rd, Annapolis, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01361",
    "address": "1451 Ritchie Hwy, Arnold, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01355",
    "address": "4401 Harford Rd, Baltimore, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01364",
    "address": "2610 Boston St, Baltimore, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01369",
    "address": "5660 Baltimore National Pike, Baltimore, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01356",
    "address": "12410 Fairwood Pkwy, Bowie, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01554",
    "address": "15916 S Crain Hwy, Brandywine, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01501",
    "address": "8785 Branch Ave, Clinton, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01354",
    "address": "5485 Harpers Farm Rd A, Columbia, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01425",
    "address": "9807 Main St, Damascus, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01379",
    "address": "1313 Londontown Blvd, Eldersburg, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01559",
    "address": "990 Swan Creek Rd E, Fort Washington, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01443",
    "address": "19718 Germantown Rd, Germantown, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01365",
    "address": "7595 Greenbelt Rd, Greenbelt, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01378",
    "address": "7643 Arundel Mills Blvd, Hanover, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01372",
    "address": "3702 East-West Hwy, Hyattsville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01550",
    "address": "40 Shining Willow Way, La Plata, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01368",
    "address": "337 E Ridgeville Blvd, Mount Airy, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01423",
    "address": "3333 Spartan Rd, Olney, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01363",
    "address": "10335 Reisterstown Rd, Owings Mills, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01439",
    "address": "6235 Oxon Hill Rd, Oxon Hill, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01390",
    "address": "8858 Waltham Woods Rd, Parkville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01431",
    "address": "14939 Shady Grove Rd, Rockville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01471",
    "address": "403 Redland Blvd, Rockville, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01428",
    "address": "10101 New Hampshire Ave, Silver Spring, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01430",
    "address": "15411 New Hampshire Ave, Silver Spring, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01381",
    "address": "1017 York Rd, Towson, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01505",
    "address": "10 King St, Waldorf, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01377",
    "address": "444 WMC Dr, Westminster, MD"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01551",
    "address": "2400 Peoples Plaza, Newark, DE"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01585",
    "address": "260 Dunns Mill Rd, Bordentown, NJ"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01576",
    "address": "531 High St, Mount Holly, NJ"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01560",
    "address": "4400 S Broad St, Trenton, NJ"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01569",
    "address": "23 Levitt Pkwy, Willingboro, NJ"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01568",
    "address": "575 Taunton Ave, East Providence, RI"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01462",
    "address": "71 E Main Rd, Middletown, RI"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01574",
    "address": "1050 Willett Ave, Riverside, RI"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01427",
    "address": "160 Old Tower Hill Rd, South Kingstown, RI"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01575",
    "address": "125 Robert F Toner Blvd, Attleborough Falls, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01869",
    "address": "368 Southbridge St, Auburn, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01581",
    "address": "71 Dodge St, Beverly, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01587",
    "address": "246 Border St, Boston, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q00460",
    "address": "105 Pearl St, Braintree, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01582",
    "address": "641 Belmont St, Brockton, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01533",
    "address": "180A Cambridge St, Burlington, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01583",
    "address": "95 Washington St, Canton, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01527",
    "address": "739 Chief Justice Cushing Hwy, Cohasset, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01469",
    "address": "15 State Rd, Dartmouth, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01441",
    "address": "4171 N Main St, Fall River, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01442",
    "address": "760 Boston Rd, Groton, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01578",
    "address": "390 West St, Mansfield, MA"
  },
  {
    "retailer": "Star Market",
    "machineId": "Q01540",
    "address": "1 Snow Rd, Marshfield, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q00540",
    "address": "65 Main St, Medway, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01531",
    "address": "34 Essex St, Melrose, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01461",
    "address": "93 Prospect St, Milford, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01567",
    "address": "690 Depot St, North Easton, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01584",
    "address": "134 Nahatan St, Norwood, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01535",
    "address": "9 West Rd, Orleans, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01541",
    "address": "128 Essex Center Dr, Peabody, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01473",
    "address": "2260 State Rd, Plymouth, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01464",
    "address": "127 Marion Rd, Wareham, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01520",
    "address": "610 Middle St, Weymouth, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01852",
    "address": "1177 Providence Rd, Whitinsville, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01465",
    "address": "14 W Boylston St, Worcester, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01472",
    "address": "68 Stafford St, Worcester, MA"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01496",
    "address": "20 D'Amante Dr, Concord, NH"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01481",
    "address": "276 W Main St, Hillsborough, NH"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01498",
    "address": "586 Nashua St, Milford, NH"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01450",
    "address": "213 Daniel Webster Hwy, Nashua, NH"
  },
  {
    "retailer": "Shaw's",
    "machineId": "Q01480",
    "address": "300 Main St, Nashua, NH"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01571",
    "address": "121 E City Ave, Bala Cynwyd, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01586",
    "address": "5300 Baltimore Pike, Clifton Heights, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01589",
    "address": "105 E Street Rd, Feasterville, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01547",
    "address": "124 Morton Ave, Folsom, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01570",
    "address": "1305 West Chester Pike, Havertown, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01577",
    "address": "323 Old York Rd, Jenkintown, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01572",
    "address": "6800 New Falls Rd, Levittown, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01591",
    "address": "527 E Baltimore Ave, Media, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01573",
    "address": "48 W Rd, Newtown, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01580",
    "address": "39 Leopard Rd, Paoli, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01552",
    "address": "1400 E Passyunk Ave, Philadelphia, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01588",
    "address": "3200-09 Red Lion Rd, Philadelphia, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q00529",
    "address": "800 Second Street Pike, Richboro, PA"
  },
  {
    "retailer": "Acme Markets",
    "machineId": "Q01579",
    "address": "700 W Lancaster Ave, Wayne, PA"
  }
]

export default vendingData;