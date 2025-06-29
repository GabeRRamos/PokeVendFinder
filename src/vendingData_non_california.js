const vendingData = [
  {
    "retailer": "Frys",
    "machineId": "Q00351",
    "address": "1575 N Dysart Rd, Avondale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00607",
    "address": "11425 W Buckeye Rd, Avondale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00352",
    "address": "1300 S Watson Rd, Buckeye, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00373",
    "address": "19600 W Indian School Rd, Buckeye, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00339",
    "address": "1385 E Florence Blvd, Casa Grande, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00606",
    "address": "2858 N Pinal Ave, Casa Grande, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01342",
    "address": "1637 N Trekell Rd, Casa Grande, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00599",
    "address": "2010 S Alma School Rd, Chandler, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00614",
    "address": "2929 E Ocotillo Rd, Chandler, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01283",
    "address": "1159 W Chandler Blvd, Chandler, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01312",
    "address": "1060 E Ray Rd, Chandler, AZ"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01319",
    "address": "3145 S Alma School Rd, Chandler, AZ"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01562",
    "address": "222 W Willis Rd, Chandler, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01392",
    "address": "3325 N Hunt Hwy, Florence, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00321",
    "address": "855 W Warner Rd, Gilbert, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00356",
    "address": "87 E Williams Field Rd, Gilbert, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00374",
    "address": "714 S Val Vista Dr, Gilbert, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00605",
    "address": "3127 E Chandler Heights Rd, Gilbert, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q01103",
    "address": "1845 E Baseline Rd, Gilbert, AZ"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01219",
    "address": "1363 N. Arizona Ave, Gilbert, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00609",
    "address": "20220 N 59th Ave, Glendale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00775",
    "address": "5116 W Olive Ave, Glendale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00776",
    "address": "4329 W Northern Ave, Glendale, AZ"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01397",
    "address": "5850 W Bell Rd, Glendale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00616",
    "address": "16380 W Yuma Rd, Goodyear, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01289",
    "address": "440 N Estrella Pkwy, Goodyear, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01311",
    "address": "14175 W Indian School Rd, Goodyear, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01358",
    "address": "9890 Estrella Pkwy, Goodyear, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01508",
    "address": "1305 W Duval Mine Rd, Green Valley, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01563",
    "address": "260 W Continental Rd, Green Valley, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00598",
    "address": "5140 W Baseline Rd, Laveen Village, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01290",
    "address": "5035 W Baseline Rd, Laveen Village, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00367",
    "address": "13730 W Camelback Rd, Litchfield Park, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q01078",
    "address": "11350 W Tangerine Rd, Marana, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00594",
    "address": "20797 N John Wayne Pkwy, Maricopa, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00366",
    "address": "1935 N Stapley Dr, Mesa, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00385",
    "address": "435 S Ellsworth Rd, Mesa, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00600",
    "address": "2724 S Signal Butte Rd, Mesa, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00610",
    "address": "2727 E Broadway Rd, Mesa, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01287",
    "address": "1225 W Guadalupe Rd, Mesa, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01332",
    "address": "1902 W Main St, Mesa, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01341",
    "address": "3622 E Southern Ave, Mesa, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01383",
    "address": "4316 S Signal Butte Rd, Mesa, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01385",
    "address": "1855 N Power Rd, Mesa, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01544",
    "address": "12122 N Rancho Vistoso Blvd, Oro Valley, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00340",
    "address": "7455 W Cactus Rd, Peoria, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00343",
    "address": "8375 W Deer Valley Rd, Peoria, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00347",
    "address": "9043 W Olive Ave, Peoria, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00358",
    "address": "25401 N Lake Pleasant Pkwy, Peoria, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01343",
    "address": "10641 W Olive Ave, Peoria, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00318",
    "address": "3616 E Ray Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00333",
    "address": "1815 W Glendale Ave, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00337",
    "address": "520 E Baseline Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00346",
    "address": "3949 E Chandler Blvd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00349",
    "address": "4025 E Thunderbird Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00353",
    "address": "26300 Norterra Pkwy, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00357",
    "address": "1311 E Bell Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00359",
    "address": "3246 E Bell Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00361",
    "address": "4230 W McDowell Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00363",
    "address": "39508 N Daisy Mountain Dr, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00364",
    "address": "744 W Camelback Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00365",
    "address": "100 E Jefferson St, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00369",
    "address": "3036 E Thomas Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00371",
    "address": "4204 W Cactus Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00375",
    "address": "3511 W Peoria Ave, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00377",
    "address": "4724 N 20th St, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00379",
    "address": "4707 E Shea Blvd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00382",
    "address": "4505 E Thomas Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00733",
    "address": "2250 E Baseline Rd, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00756",
    "address": "2800 W Dove Valley Rd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01282",
    "address": "4005 E Chandler Blvd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01292",
    "address": "1334 E Chandler Blvd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01301",
    "address": "810 E Glendale Ave, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01303",
    "address": "4747 E Elliot Rd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01306",
    "address": "6202 S 16th St, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01314",
    "address": "3132 E Camelback Rd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01328",
    "address": "520 W Osborn Rd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01329",
    "address": "4747 E Greenway Rd, Phoenix, AZ"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01336",
    "address": "330 W Bell Rd, Phoenix, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01347",
    "address": "13440 N 7th St, Phoenix, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00596",
    "address": "22265 E Queen Creek Rd, Queen Creek, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00604",
    "address": "25105 S Ellsworth Rd, Queen Creek, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01348",
    "address": "40950 N Ironwood Dr, Queen Creek, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01389",
    "address": "18495 E Queen Creek Rd, Queen Creek, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00360",
    "address": "155 W Combs Rd, San Tan Valley, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00593",
    "address": "542 E Hunt Hwy, San Tan Valley, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00341",
    "address": "8900 E V\u00eda Linda, Scottsdale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00424",
    "address": "10450 N 90th St, Scottsdale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q01237",
    "address": "7770 E McDowell Rd, Scottsdale, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01340",
    "address": "6501 E Greenway Pkwy Bldg 4, Scottsdale, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01350",
    "address": "7920 E Chaparral Rd, Scottsdale, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00354",
    "address": "10660 Grand Ave, Sun City, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00368",
    "address": "19403 N R H Johnson Blvd, Sun City West, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00344",
    "address": "15215 N Cotton Ln, Surprise, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00345",
    "address": "13982 W Waddell Rd, Surprise, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00355",
    "address": "16400 W Pat Tillman Blvd, Surprise, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01276",
    "address": "17049 W Bell Rd, Surprise, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01296",
    "address": "13828 W Waddell Rd, Surprise, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00323",
    "address": "3232 S Mill Ave, Tempe, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00334",
    "address": "1835 E Guadalupe Rd, Tempe, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00618",
    "address": "3255 S Rural Rd, Tempe, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q00879",
    "address": "9401 E 22nd St, Tucson, AZ"
  },
  {
    "retailer": "Frys",
    "machineId": "Q01025",
    "address": "7050 E Golf Links Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01495",
    "address": "4752 E Sunrise Dr, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01507",
    "address": "1940 E Broadway Blvd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01511",
    "address": "2140 W Grant Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01548",
    "address": "9050 E Valencia Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01555",
    "address": "9125 E Tanque Verde Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01558",
    "address": "9100 N Silverbell Rd, Tucson, AZ"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01564",
    "address": "1350 N Silverbell Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01565",
    "address": "2940 W Valencia Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01566",
    "address": "6360 E Golf Links Rd, Tucson, AZ"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01556",
    "address": "13380 E Mary Ann Cleveland Way, Vail, AZ"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00832",
    "address": "2500 Santiam Hwy SE, Albany, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00826",
    "address": "6055 SW 185th Ave, Aloha, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00855",
    "address": "20535 SW Tualatin Valley Hwy, Aloha, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00138",
    "address": "11425 SW Beaverton Hillsdale Hwy, Beaverton, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00140",
    "address": "15995 SW Walker Rd, Beaverton, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00201",
    "address": "14555 SW Teal Blvd, Beaverton, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00205",
    "address": "6194 SW Murray Blvd, Beaverton, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00959",
    "address": "3025 SW Cedar Hills Blvd, Beaverton, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01009",
    "address": "15995 SW Walker Rd, Beaverton, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01011",
    "address": "11425 SW Beaverton Hillsdale Hwy, Beaverton, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00151",
    "address": "1401 SE 1st Ave, Canby, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00816",
    "address": "1051 SW 1st Ave, Canby, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00150",
    "address": "16301 SE 82nd Dr, Clackamas, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00204",
    "address": "12032 SE Sunnyside Rd, Clackamas, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00997",
    "address": "16301 SE 82nd Dr, Clackamas, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00782",
    "address": "2200 E Baseline St, Cornelius, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00736",
    "address": "2335 NW Kings Blvd, Corvallis, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00952",
    "address": "590 Ne Circle Blvd, Corvallis, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01321",
    "address": "5270 SW Philomath Blvd, Corvallis, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01318",
    "address": "1500 E Main St, Cottage Grove, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00883",
    "address": "138 W Ellendale Ave, Dallas, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00913",
    "address": "60 Division Ave, Eugene, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00946",
    "address": "3333 W 11th Ave, Eugene, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01121",
    "address": "55 Division Ave, Eugene, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01294",
    "address": "311 Coburg Rd, Eugene, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01307",
    "address": "1500 Coburg Rd, Eugene, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01366",
    "address": "4275 Barger Dr, Eugene, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01367",
    "address": "4740 Royal Ave, Eugene, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01370",
    "address": "1675 W 18th Ave, Eugene, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00779",
    "address": "2836 Pacific Ave, Forest Grove, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01124",
    "address": "95 82nd Dr, Gladstone, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00190",
    "address": "2497 SE Burnside Rd, Gresham, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00195",
    "address": "1455 NE Division St, Gresham, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00220",
    "address": "1001 SW Highland Dr, Gresham, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01322",
    "address": "2511 SE 1st St, Gresham, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00191",
    "address": "8955 SE 82nd Ave, Happy Valley, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00202",
    "address": "17005 SE Sunnyside Rd, Happy Valley, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00887",
    "address": "8955 SE 82nd Ave, Happy Valley, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00957",
    "address": "11250 SE 82nd Ave, Happy Valley, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00146",
    "address": "6495 SE Tualatin Valley Hwy, Hillsboro, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00156",
    "address": "6495 SE Tualatin Valley Hwy, Hillsboro, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00192",
    "address": "2177 NW 185th Ave, Hillsboro, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00766",
    "address": "7330 NE Butler St, Hillsboro, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00770",
    "address": "1500 SW Oak St, Hillsboro, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00847",
    "address": "22075 NW NE Imbrie Dr, Hillsboro, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00949",
    "address": "7500 W Baseline Rd, Hillsboro, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00954",
    "address": "888 NE 25th Ave, Hillsboro, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00962",
    "address": "2525 SE Tualatin Valley Hwy, Hillsboro, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01305",
    "address": "1755 Ivy St, Junction City, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00996",
    "address": "4990 River Rd N, Keizer, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00822",
    "address": "17779 Lower Boones Ferry Rd, Lake Oswego, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01067",
    "address": "16199 Boones Ferry Rd, Lake Oswego, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01362",
    "address": "1983 S Main St, Lebanon, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00716",
    "address": "2585 NE OR-99W, McMinnville, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01008",
    "address": "615 SW Keck Cir, McMinnville, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00837",
    "address": "2490 N Highway, Mcminnville, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00137",
    "address": "14840 SE Webster Rd, Milwaukie, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01122",
    "address": "4370 SE King Rd, Milwaukie, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01113",
    "address": "1524 W Main St, Molalla, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00884",
    "address": "3300 Portland Rd, Newberg, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00894",
    "address": "3300 Portland Rd, Newberg, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01115",
    "address": "1140 N Springbrook Rd, Newberg, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00843",
    "address": "14700 SE McLoughlin Blvd, Oak Grove, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00998",
    "address": "14700 SE McLoughlin Blvd, Oak Grove, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01452",
    "address": "1410 Westpark Plaza, Ontario, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00141",
    "address": "1839 Molalla Ave, Oregon City, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01116",
    "address": "13434 Colton Pl, Oregon City, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01304",
    "address": "19007 S Beavercreek Rd, Oregon City, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00113",
    "address": "1111 NE 102nd Ave, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00119",
    "address": "13485 NW Cornell Rd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00120",
    "address": "4515 SE Woodstock Blvd, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00133",
    "address": "3805 SE Hawthorne Blvd, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00145",
    "address": "14700 SE Division St, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00149",
    "address": "11565 SW Pacific Hwy, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00153",
    "address": "3030 NE Weidler St, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00154",
    "address": "6850 N Lombard St, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00162",
    "address": "7404 N Interstate Ave, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00166",
    "address": "6850 N Lombard St, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00172",
    "address": "6615 NE Glisan St, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00184",
    "address": "7404 N Interstate Ave, Portland, OR"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00187",
    "address": "7525 SW Barnes Rd, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00188",
    "address": "7555 SW Barbur Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00211",
    "address": "6901 NE Sandy Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00215",
    "address": "5920 NE Martin Luther King Jr Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00226",
    "address": "3930 SE Powell Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00258",
    "address": "3527 SE 122nd Ave, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00262",
    "address": "7555 SW Barbur Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00797",
    "address": "2800 SE Hawthorne Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00813",
    "address": "8330 N Ivanhoe St, Portland, OR"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00818",
    "address": "4756 NW Bethany Blvd, Portland, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00830",
    "address": "1100 NE Broadway, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00846",
    "address": "14700 SE Division St, Portland, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00955",
    "address": "7979 SE Powell Blvd, Portland, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00966",
    "address": "1222 NE 102nd Ave, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00990",
    "address": "11565 SW Pacific Hwy, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00999",
    "address": "6615 NE Glisan St, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01006",
    "address": "7700 SW Beaverton Hillsdale Hwy, Portland, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01010",
    "address": "100 NW 20th Pl, Portland, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01127",
    "address": "451 NE 181st Ave, Portland, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01130",
    "address": "5850 NE Prescott St, Portland, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01359",
    "address": "1950 NE 122nd Ave, Portland, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00769",
    "address": "4575 Commercial St SE, Salem, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00821",
    "address": "5660 Commercial St SE, Salem, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00833",
    "address": "3450 Commercial St SE, Salem, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00848",
    "address": "1455 Edgewater St NW, Salem, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00882",
    "address": "3740 Market St NE, Salem, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00891",
    "address": "3740 Market St NE, Salem, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01001",
    "address": "1265 Center St NE, Salem, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01002",
    "address": "3380 Lancaster Dr NE, Salem, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00179",
    "address": "37601 US-26, Sandy, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00189",
    "address": "16625 SE 362nd Dr, Sandy, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00876",
    "address": "51501 Columbia River Hwy, Scappoose, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00209",
    "address": "20685 SW Roy Rogers Rd, Sherwood, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01120",
    "address": "301 Westfield St, Silverton, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00909",
    "address": "650 Q St, Springfield, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00951",
    "address": "2000 Marcola Rd, Springfield, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01128",
    "address": "5755 S Main St, Springfield, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01349",
    "address": "1891 Pioneer Pkwy E, Springfield, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01135",
    "address": "1535 N First Ave, Stayton, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01131",
    "address": "1540 Main St, Sweet Home, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00587",
    "address": "15570 SW Pacific Hwy, Tigard, OR"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01324",
    "address": "7501 SW Dartmouth St, Tigard, OR"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00844",
    "address": "25691 SE Stark St, Troutdale, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00123",
    "address": "19200 SW Martinazzi Ave, Tualatin, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00246",
    "address": "22000 Salamo Rd, West Linn, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00163",
    "address": "30300 SW Boones Ferry Rd, Wilsonville, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00182",
    "address": "8255 SW Wilsonville Rd, Wilsonville, OR"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00183",
    "address": "22855 NE Park Ln, Wood Village, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01132",
    "address": "1550 N Pacific Hwy, Woodburn, OR"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01298",
    "address": "911 11th St, Anacortes, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00164",
    "address": "801 Auburn Wy N, Auburn, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00249",
    "address": "101 Auburn Way S, Auburn, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00804",
    "address": "4010 A St SE, Auburn, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01253",
    "address": "253 High School Rd NE, Bainbridge Island, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00185",
    "address": "401 NW 12th Ave, Battle Ground, WA"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00942",
    "address": "2108 W Main St, Battle Ground, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00788",
    "address": "201 NE WA-300, Belfair, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00171",
    "address": "3550 Factoria Blvd SE, Bellevue, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00194",
    "address": "10116 NE 8th St, Bellevue, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00216",
    "address": "15100 SE 38th St, Bellevue, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00255",
    "address": "2041 148th Ave NE, Bellevue, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00861",
    "address": "1645 140th Ave NE, Bellevue, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01169",
    "address": "1510 145th Pl SE, Bellevue, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01183",
    "address": "300 Bellevue Way NE, Bellevue, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00233",
    "address": "800 Lakeway Dr, Bellingham, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00260",
    "address": "1225 W Bakerview Rd, Bellingham, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01220",
    "address": "300 E Bellis Fair Pkwy, Bellingham, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01265",
    "address": "1275 E Sunset Dr, Bellingham, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00143",
    "address": "20901 WA-410 E, Bonney Lake, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00874",
    "address": "21301 WA-410, Bonney Lake, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00016",
    "address": "21045 Bothell Everett Hwy, Bothell, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00026",
    "address": "24040 Bothell Everett Hwy, Bothell, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01149",
    "address": "20711 Bothell Everett Hwy, Bothell, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00196",
    "address": "5050 WA-303, Bremerton, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01491",
    "address": "1401 NE McWilliams Rd, Bremerton, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00124",
    "address": "14300 1st Ave S, Burien, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00827",
    "address": "12725 1st Ave S, Burien, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01403",
    "address": "138 SW 148th St, Burien, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00224",
    "address": "920 S Burlington Blvd, Burlington, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00173",
    "address": "16735 SE 272nd St, Covington, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01401",
    "address": "17023 SE 272nd St, Covington, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01141",
    "address": "27035 Pacific Hwy S, Des Moines, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01118",
    "address": "14020 Main St NE, Duvall, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01187",
    "address": "23632 Hwy 99, Edmonds, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01297",
    "address": "21900 Hwy 99, Edmonds, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00239",
    "address": "152 Roosevelt Ave E, Enumclaw, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00035",
    "address": "8530 Evergreen Wy, Everett, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00129",
    "address": "12906 Bothell Everett Hwy, Everett, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00198",
    "address": "2615 Broadway, Everett, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00234",
    "address": "7601 Evergreen Wy, Everett, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00244",
    "address": "5802 134th Pl SE, Everett, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00263",
    "address": "11031 19th Ave SE, Everett, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00823",
    "address": "8530 Evergreen Wy, Everett, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01085",
    "address": "4919 Evergreen Wy, Everett, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01284",
    "address": "1715 Broadway, Everett, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01413",
    "address": "4128 Rucker Ave, Everett, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00037",
    "address": "33702 21st Ave SW, Federal Way, WA"
  },
  {
    "retailer": "H Mart",
    "machineId": "Q00117",
    "address": "31217 Pacific Hwy S, Federal Way, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00213",
    "address": "33702 21st Ave SW, Federal Way, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00851",
    "address": "1207 S 320th St, Federal Way, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01490",
    "address": "28810 Military Rd S, Federal Way, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00228",
    "address": "5502 Point Fosdick Dr, Gig Harbor, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01327",
    "address": "4831 Point Fosdick Dr, Gig Harbor, WA"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01497",
    "address": "11330 51st Ave NW, Gig Harbor, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00039",
    "address": "6100 E Lake Sammamish Pkwy SE, Issaquah, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00125",
    "address": "735 NW Gilman Blvd, Issaquah, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01070",
    "address": "1540 NW Gilman Blvd, Issaquah, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01139",
    "address": "1451 Highlands Dr NE, Issaquah, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01479",
    "address": "4570 Klahanie Dr. SE, Issaquah, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00836",
    "address": "6850 NE Bothell Way, Kenmore, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00158",
    "address": "25250 Pacific Hwy S, Kent, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00175",
    "address": "10201 SE 240th St, Kent, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00219",
    "address": "13304 SE 240th St, Kent, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00241",
    "address": "210 Washington Ave S, Kent, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00940",
    "address": "21100 91st Pl S, Kent, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01094",
    "address": "13101 SE Kent-Kangley Rd, Kent, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01137",
    "address": "20830 108th Ave SE, Kent, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00014",
    "address": "12221 120th Ave NE, Kirkland, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00229",
    "address": "14444 124th Ave NE, Kirkland, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00238",
    "address": "12221 120th Ave NE, Kirkland, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00613",
    "address": "10020 NE 137th St, Kirkland, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01412",
    "address": "12519 NE 85th St, Kirkland, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01177",
    "address": "4775 Whitman Ln SE, Lacey, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01259",
    "address": "4700 Yelm Hwy SE, Lacey, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01455",
    "address": "6200 Pacific Ave SE, Lacey, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00384",
    "address": "717 WA-9 NE, Lake Stevens, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00859",
    "address": "10223 Gravelly Lake Dr SW, Lakewood, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00115",
    "address": "2930 Ocean Beach Hwy, Longview, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00945",
    "address": "1227 15th Ave, Longview, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00994",
    "address": "3184 Ocean Beach Hwy, Longview, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01246",
    "address": "8071 Guide Meridian Rd, Lynden, WA"
  },
  {
    "retailer": "H Mart",
    "machineId": "Q00130",
    "address": "3301 184th St SW, Lynnwood, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00165",
    "address": "4615 196th St SW, Lynnwood, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00174",
    "address": "2902 164th St SW, Lynnwood, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00203",
    "address": "14826 Hwy 99, Lynnwood, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01302",
    "address": "19500 Hwy 99, Lynnwood, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01399",
    "address": "12811 Beverly Park Rd, Lynnwood, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00111",
    "address": "26520 Maple Valley Black Diamond Rd SE, Maple Valley, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00869",
    "address": "26916 Maple Vly Hwy, Maple Valley, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00142",
    "address": "9925 State Ave, Marysville, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00247",
    "address": "9925 State Ave, Marysville, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01136",
    "address": "1258 State Ave, Marysville, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01273",
    "address": "3947 116th St NE, Marysville, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00250",
    "address": "16304 Bothell Everett Hwy, Mill Creek, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01154",
    "address": "926 164th St SE, Mill Creek, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00148",
    "address": "18805 US-2, Monroe, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00221",
    "address": "18805 US-2, Monroe, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01295",
    "address": "19651 US-2, Monroe, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01188",
    "address": "315 E College Way, Mount Vernon, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00259",
    "address": "4301 212th St SW, Mountlake Terrace, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00808",
    "address": "22803 44th Ave W, Mountlake Terrace, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01087",
    "address": "11700 Mukilteo Speedway, Mukilteo, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00240",
    "address": "6911 Coal Creek Pkwy Se, Newcastle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00805",
    "address": "6940 Coal Creek Pkwy SE, Newcastle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00811",
    "address": "460 E North Bend Way, North Bend, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01488",
    "address": "460 SW Mt Si Blvd, North Bend, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00947",
    "address": "7540 Martin Way E, Olympia, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01288",
    "address": "1243 Marvin Rd NE, Olympia, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01293",
    "address": "3215 Harrison Ave NW, Olympia, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01315",
    "address": "4280 Martin Way E, Olympia, WA"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01487",
    "address": "3520 Pacific Ave SE, Olympia, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01419",
    "address": "215 Whitesell St NW, Orting, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00237",
    "address": "1900 SE Sedgwick Rd, Port Orchard, WA"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01254",
    "address": "1434 Olney Ave SE, Port Orchard, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01280",
    "address": "370 SW Sedgwick Rd, Port Orchard, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01494",
    "address": "3355 Bethel Rd SE, Port Orchard, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01478",
    "address": "19245 10th Ave NE, Poulsbo, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00131",
    "address": "17404 Meridian E, Puyallup, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00147",
    "address": "1100 N Meridian, Puyallup, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00178",
    "address": "5616 176th St E, Puyallup, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00868",
    "address": "13308 Meridian E, Puyallup, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00993",
    "address": "17404 Meridian E, Puyallup, WA"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01402",
    "address": "11012 Canyon Rd E, Puyallup, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01405",
    "address": "11501 Canyon Rd E, Puyallup, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01493",
    "address": "708 Shaw Rd E, Puyallup, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00022",
    "address": "17667 NE 76th St, Redmond, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00106",
    "address": "8867 161st Avenue Northeast, Redmond, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00401",
    "address": "15000 NE 24th St, Redmond, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01153",
    "address": "15800 Redmond Way, Redmond, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01317",
    "address": "23475 NE Novelty Hill Rd, Redmond, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01414",
    "address": "17246 Redmond Way, Redmond, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00025",
    "address": "4300 NE 4th St, Renton, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00034",
    "address": "365 Renton Center Way SW, Renton, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00176",
    "address": "17801 108th Ave SE, Renton, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00223",
    "address": "17230 140th Ave SE, Renton, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01197",
    "address": "200 S 3rd St, Renton, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00326",
    "address": "630 228th Ave NE, Sammamish, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00814",
    "address": "2902 228th Ave SE, Sammamish, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00254",
    "address": "4011 S 164th St, SeaTac, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00116",
    "address": "915 NW 45th St, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00132",
    "address": "12318 15th Ave NE, Seattle, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00135",
    "address": "13000 Lake City Way NE, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00159",
    "address": "1410 E John St, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00180",
    "address": "8340 15th Ave NW, Seattle, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00230",
    "address": "100 NW 85th St, Seattle, WA"
  },
  {
    "retailer": "WestField",
    "machineId": "Q00235",
    "address": "2800 Southcenter Mall, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00245",
    "address": "1401 Broadway, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00256",
    "address": "3820 Rainier Ave S, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00264",
    "address": "11100 Roosevelt Way NE, Seattle, WA"
  },
  {
    "retailer": "WestField",
    "machineId": "Q00329",
    "address": "2800 Southcenter Mall, Seattle, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00789",
    "address": "915 NW 45th St, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00810",
    "address": "5700 24th Ave NW, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00873",
    "address": "9999 Holman Rd NW, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01012",
    "address": "1600 W Dravus St, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01144",
    "address": "2622 California Ave SW, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01156",
    "address": "2746 NE 45th St, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01159",
    "address": "9262 Rainier Ave S, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01168",
    "address": "2500 SW Barton St, Seattle, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q01175",
    "address": "417 Broadway E #2, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01192",
    "address": "9620 28th Ave SW, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01418",
    "address": "7300 Roosevelt Way NE, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01420",
    "address": "3900 S Othello St, Seattle, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01281",
    "address": "600 W Franklin St, Shelton, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00038",
    "address": "18325 Aurora Ave N, Shoreline, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00257",
    "address": "15332 Aurora Ave N, Shoreline, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00845",
    "address": "17202 15th Ave NE, Shoreline, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01489",
    "address": "2890 NW Bucklin Hill Rd, Silverdale, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00186",
    "address": "2801 Bickford Ave, Snohomish, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00197",
    "address": "2801 Bickford Ave, Snohomish, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00807",
    "address": "34828 SE Douglas St, Snoqualmie, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00866",
    "address": "22303 Mountain Hwy E, Spanaway, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00136",
    "address": "1201 Valley Ave, Sumner, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00727",
    "address": "6621 166th Ave E, Sumner, WA"
  },
  {
    "retailer": "Simon Tacoma Mall",
    "machineId": "Q00031",
    "address": "S Steele St, Tacoma, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00152",
    "address": "7250 Pacific Ave, Tacoma, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00161",
    "address": "4505 S 19th St, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00181",
    "address": "1302 S 38th St, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00222",
    "address": "3842 Bridgeport Way W, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00227",
    "address": "15805 Pacific Ave S, Tacoma, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00820",
    "address": "7250 Pacific Ave, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00839",
    "address": "2637 N Pearl St, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00854",
    "address": "8611 Steilacoom Blvd SW, Tacoma, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00961",
    "address": "1913 S 72nd St, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01119",
    "address": "707 S 56th St, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01400",
    "address": "1624 E 72nd St, Tacoma, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01805",
    "address": "6201 6th Ave, Tacoma, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01000",
    "address": "500 Cleveland Ave SE, Tumwater, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00225",
    "address": "6305 Bridgeport Way W, University Place, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00121",
    "address": "6700 NE 162nd Ave, Vancouver, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00127",
    "address": "11310 NE 119th St, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00139",
    "address": "16600 SE McGillivray Blvd, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00144",
    "address": "6711 NE 63rd St, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00155",
    "address": "800 NE Tenney Rd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00157",
    "address": "16600 SE McGillivray Blvd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00199",
    "address": "800 NE Tenney Rd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00206",
    "address": "2500 Columbia House Blvd, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00207",
    "address": "2615 NE 112th Ave, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00208",
    "address": "11325 SE Mill Plain Blvd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00210",
    "address": "2500 Columbia House Blvd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00212",
    "address": "7700 NE Hwy 99, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00214",
    "address": "408 NE 81st St, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00217",
    "address": "6701 E Mill Plain Blvd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00218",
    "address": "11325 SE Mill Plain Blvd, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00236",
    "address": "7411 NE 117th Ave, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00242",
    "address": "7700 NE Hwy 99, Vancouver, WA"
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00261",
    "address": "7411 NE 117th Ave, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00734",
    "address": "3707 Main St, Vancouver, WA"
  },
  {
    "retailer": "QFC",
    "machineId": "Q00800",
    "address": "3505 SE 192nd Ave, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00850",
    "address": "13023 NE Hwy 99, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01004",
    "address": "14300 NE 20th Ave, Vancouver, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01357",
    "address": "905 NE 136th Ave, Vancouver, WA"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01371",
    "address": "9700 NE Hwy 99, Vancouver, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01485",
    "address": "3307 Evergreen Way, Washougal, WA"
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00232",
    "address": "19150 NE Woodinville Duvall Rd, Woodinville, WA"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01248",
    "address": "1008 Nevada Way, Boulder City, NV"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00656",
    "address": "10616 S Eastern Ave, Henderson, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01162",
    "address": "201 S Stephanie St, Henderson, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01232",
    "address": "575 College Dr, Henderson, NV"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01244",
    "address": "80 N Stephanie St, Henderson, NV"
  },
  {
    "retailer": "Vons",
    "machineId": "Q01252",
    "address": "45 E Horizon Ridge Pkwy, Henderson, NV"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00657",
    "address": "4965 E Sahara Ave, Las Vegas, NV"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00728",
    "address": "450 N Nellis Blvd, Las Vegas, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01207",
    "address": "7151 W Craig Rd, Las Vegas, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01217",
    "address": "8410 Farm Rd, Las Vegas, NV"
  },
  {
    "retailer": "Vons",
    "machineId": "Q01225",
    "address": "7405 S Durango Dr, Las Vegas, NV"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01227",
    "address": "6101 N Decatur Blvd, Las Vegas, NV"
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01229",
    "address": "7501 W Washington Ave, Las Vegas, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01235",
    "address": "7075 W Ann Rd, Las Vegas, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01299",
    "address": "6730 N Hualapai Way, Las Vegas, NV"
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01543",
    "address": "1940 Village Center Cir, Las Vegas, NV"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00342",
    "address": "4700 W Ann Rd, North Las Vegas, NV"
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00421",
    "address": "5564 Camino Al Norte, North Las Vegas, NV"
  }
]

export default vendingData;