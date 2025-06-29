const vendingDataWithCoords = [
  {
    "retailer": "Frys",
    "machineId": "Q00351",
    "address": "1575 N Dysart Rd, Avondale, AZ",
    "lat": 33.4630799,
    "lng": -112.3389783
  },
  {
    "retailer": "Frys",
    "machineId": "Q00607",
    "address": "11425 W Buckeye Rd, Avondale, AZ",
    "lat": 33.4338294,
    "lng": -112.3044141
  },
  {
    "retailer": "Frys",
    "machineId": "Q00352",
    "address": "1300 S Watson Rd, Buckeye, AZ",
    "lat": 33.434154,
    "lng": -112.5586424
  },
  {
    "retailer": "Frys",
    "machineId": "Q00373",
    "address": "19600 W Indian School Rd, Buckeye, AZ",
    "lat": 33.4955805,
    "lng": -112.4814409
  },
  {
    "retailer": "Frys",
    "machineId": "Q00339",
    "address": "1385 E Florence Blvd, Casa Grande, AZ",
    "lat": 32.8796388,
    "lng": -111.7285415
  },
  {
    "retailer": "Frys",
    "machineId": "Q00606",
    "address": "2858 N Pinal Ave, Casa Grande, AZ",
    "lat": 32.9404674,
    "lng": -111.7543895
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01342",
    "address": "1637 N Trekell Rd, Casa Grande, AZ",
    "lat": 32.8953136,
    "lng": -111.7415564
  },
  {
    "retailer": "Frys",
    "machineId": "Q00599",
    "address": "2010 S Alma School Rd, Chandler, AZ",
    "lat": 33.2756105,
    "lng": -111.860831
  },
  {
    "retailer": "Frys",
    "machineId": "Q00614",
    "address": "2929 E Ocotillo Rd, Chandler, AZ",
    "lat": 33.2457653,
    "lng": -111.7916228
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01283",
    "address": "1159 W Chandler Blvd, Chandler, AZ",
    "lat": 33.3039271,
    "lng": -111.863269
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01312",
    "address": "1060 E Ray Rd, Chandler, AZ",
    "lat": 33.3221204,
    "lng": -111.8222053
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01319",
    "address": "3145 S Alma School Rd, Chandler, AZ",
    "lat": 33.2606422,
    "lng": -111.8569182
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01562",
    "address": "222 W Willis Rd, Chandler, AZ",
    "lat": 33.2857976,
    "lng": -111.8451642
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01392",
    "address": "3325 N Hunt Hwy, Florence, AZ",
    "lat": 33.0625701,
    "lng": -111.4838157
  },
  {
    "retailer": "Frys",
    "machineId": "Q00321",
    "address": "855 W Warner Rd, Gilbert, AZ",
    "lat": 33.3339405,
    "lng": -111.808482
  },
  {
    "retailer": "Frys",
    "machineId": "Q00356",
    "address": "87 E Williams Field Rd, Gilbert, AZ",
    "lat": 33.3047766,
    "lng": -111.7879511
  },
  {
    "retailer": "Frys",
    "machineId": "Q00374",
    "address": "714 S Val Vista Dr, Gilbert, AZ",
    "lat": 33.3373021,
    "lng": -111.7571716
  },
  {
    "retailer": "Frys",
    "machineId": "Q00605",
    "address": "3127 E Chandler Heights Rd, Gilbert, AZ",
    "lat": 33.2331679,
    "lng": -111.721964
  },
  {
    "retailer": "Frys",
    "machineId": "Q01103",
    "address": "1845 E Baseline Rd, Gilbert, AZ",
    "lat": 33.3770124,
    "lng": -111.7911543
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01219",
    "address": "1363 N. Arizona Ave, Gilbert, AZ",
    "lat": 33.374163,
    "lng": -111.8402337
  },
  {
    "retailer": "Frys",
    "machineId": "Q00609",
    "address": "20220 N 59th Ave, Glendale, AZ",
    "lat": 33.6696825,
    "lng": -112.1888838
  },
  {
    "retailer": "Frys",
    "machineId": "Q00775",
    "address": "5116 W Olive Ave, Glendale, AZ",
    "lat": 33.5687784,
    "lng": -112.1699132
  },
  {
    "retailer": "Frys",
    "machineId": "Q00776",
    "address": "4329 W Northern Ave, Glendale, AZ",
    "lat": 33.5523126,
    "lng": -112.1530588
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01397",
    "address": "5850 W Bell Rd, Glendale, AZ",
    "lat": 33.6415255,
    "lng": -112.1831607
  },
  {
    "retailer": "Frys",
    "machineId": "Q00616",
    "address": "16380 W Yuma Rd, Goodyear, AZ",
    "lat": 33.4377011,
    "lng": -112.4112244
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01289",
    "address": "440 N Estrella Pkwy, Goodyear, AZ",
    "lat": 33.4514896,
    "lng": -112.3945641
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01311",
    "address": "14175 W Indian School Rd, Goodyear, AZ",
    "lat": 33.4838904,
    "lng": -112.3640715
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01358",
    "address": "9890 Estrella Pkwy, Goodyear, AZ",
    "lat": 33.357737,
    "lng": -112.4284122
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01508",
    "address": "1305 W Duval Mine Rd, Green Valley, AZ",
    "lat": 31.9009503,
    "lng": -110.9925533
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01563",
    "address": "260 W Continental Rd, Green Valley, AZ",
    "lat": 31.8527781,
    "lng": -110.9966394
  },
  {
    "retailer": "Frys",
    "machineId": "Q00598",
    "address": "5140 W Baseline Rd, Laveen Village, AZ",
    "lat": 33.377602,
    "lng": -112.170926
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01290",
    "address": "5035 W Baseline Rd, Laveen Village, AZ",
    "lat": 33.377483,
    "lng": -112.166395
  },
  {
    "retailer": "Frys",
    "machineId": "Q00367",
    "address": "13730 W Camelback Rd, Litchfield Park, AZ",
    "lat": 33.5101035,
    "lng": -112.3556482
  },
  {
    "retailer": "Frys",
    "machineId": "Q01078",
    "address": "11350 W Tangerine Rd, Marana, AZ",
    "lat": 32.4260348,
    "lng": -111.2057677
  },
  {
    "retailer": "Frys",
    "machineId": "Q00594",
    "address": "20797 N John Wayne Pkwy, Maricopa, AZ",
    "lat": 33.0676988,
    "lng": -112.0443732
  },
  {
    "retailer": "Frys",
    "machineId": "Q00366",
    "address": "1935 N Stapley Dr, Mesa, AZ",
    "lat": 33.4504089,
    "lng": -111.8029938
  },
  {
    "retailer": "Frys",
    "machineId": "Q00385",
    "address": "435 S Ellsworth Rd, Mesa, AZ",
    "lat": 33.4067644,
    "lng": -111.6307488
  },
  {
    "retailer": "Frys",
    "machineId": "Q00600",
    "address": "2724 S Signal Butte Rd, Mesa, AZ",
    "lat": 33.365831,
    "lng": -111.6039545
  },
  {
    "retailer": "Frys",
    "machineId": "Q00610",
    "address": "2727 E Broadway Rd, Mesa, AZ",
    "lat": 33.4063588,
    "lng": -111.7723425
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01287",
    "address": "1225 W Guadalupe Rd, Mesa, AZ",
    "lat": 33.3630318,
    "lng": -111.8598118
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01332",
    "address": "1902 W Main St, Mesa, AZ",
    "lat": 33.4149386,
    "lng": -111.8722979
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01341",
    "address": "3622 E Southern Ave, Mesa, AZ",
    "lat": 33.3953442,
    "lng": -111.7522348
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01383",
    "address": "4316 S Signal Butte Rd, Mesa, AZ",
    "lat": 33.3370634,
    "lng": -111.6028901
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01385",
    "address": "1855 N Power Rd, Mesa, AZ",
    "lat": 33.4498926,
    "lng": -111.682164
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01544",
    "address": "12122 N Rancho Vistoso Blvd, Oro Valley, AZ",
    "lat": 32.426801,
    "lng": -110.9595436
  },
  {
    "retailer": "Frys",
    "machineId": "Q00340",
    "address": "7455 W Cactus Rd, Peoria, AZ",
    "lat": 33.5943985,
    "lng": -112.2189256
  },
  {
    "retailer": "Frys",
    "machineId": "Q00343",
    "address": "8375 W Deer Valley Rd, Peoria, AZ",
    "lat": 33.6802168,
    "lng": -112.2399583
  },
  {
    "retailer": "Frys",
    "machineId": "Q00347",
    "address": "9043 W Olive Ave, Peoria, AZ",
    "lat": 33.5645575,
    "lng": -112.2536989
  },
  {
    "retailer": "Frys",
    "machineId": "Q00358",
    "address": "25401 N Lake Pleasant Pkwy, Peoria, AZ",
    "lat": 33.7144751,
    "lng": -112.26779
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01343",
    "address": "10641 W Olive Ave, Peoria, AZ",
    "lat": 33.5637579,
    "lng": -112.2885375
  },
  {
    "retailer": "Frys",
    "machineId": "Q00318",
    "address": "3616 E Ray Rd, Phoenix, AZ",
    "lat": 33.3168045,
    "lng": -112.005465
  },
  {
    "retailer": "Frys",
    "machineId": "Q00333",
    "address": "1815 W Glendale Ave, Phoenix, AZ",
    "lat": 33.5382595,
    "lng": -112.0977023
  },
  {
    "retailer": "Frys",
    "machineId": "Q00337",
    "address": "520 E Baseline Rd, Phoenix, AZ",
    "lat": 33.3792453,
    "lng": -112.0661338
  },
  {
    "retailer": "Frys",
    "machineId": "Q00346",
    "address": "3949 E Chandler Blvd, Phoenix, AZ",
    "lat": 33.3035229,
    "lng": -111.9987537
  },
  {
    "retailer": "Frys",
    "machineId": "Q00349",
    "address": "4025 E Thunderbird Rd, Phoenix, AZ",
    "lat": 33.6110893,
    "lng": -111.9941246
  },
  {
    "retailer": "Frys",
    "machineId": "Q00353",
    "address": "26300 Norterra Pkwy, Phoenix, AZ",
    "lat": 33.7240615,
    "lng": -112.1159744
  },
  {
    "retailer": "Frys",
    "machineId": "Q00357",
    "address": "1311 E Bell Rd, Phoenix, AZ",
    "lat": 33.6404412,
    "lng": -112.0547382
  },
  {
    "retailer": "Frys",
    "machineId": "Q00359",
    "address": "3246 E Bell Rd, Phoenix, AZ",
    "lat": 33.6418104,
    "lng": -112.01108
  },
  {
    "retailer": "Frys",
    "machineId": "Q00361",
    "address": "4230 W McDowell Rd, Phoenix, AZ",
    "lat": 33.4678512,
    "lng": -112.1506687
  },
  {
    "retailer": "Frys",
    "machineId": "Q00363",
    "address": "39508 N Daisy Mountain Dr, Phoenix, AZ",
    "lat": 33.8444334,
    "lng": -112.133788
  },
  {
    "retailer": "Frys",
    "machineId": "Q00364",
    "address": "744 W Camelback Rd, Phoenix, AZ",
    "lat": 33.51129,
    "lng": -112.0854782
  },
  {
    "retailer": "Frys",
    "machineId": "Q00365",
    "address": "100 E Jefferson St, Phoenix, AZ",
    "lat": 33.4479269,
    "lng": -112.0746914
  },
  {
    "retailer": "Frys",
    "machineId": "Q00369",
    "address": "3036 E Thomas Rd, Phoenix, AZ",
    "lat": 33.4817765,
    "lng": -112.0165589
  },
  {
    "retailer": "Frys",
    "machineId": "Q00371",
    "address": "4204 W Cactus Rd, Phoenix, AZ",
    "lat": 33.5977701,
    "lng": -112.1498629
  },
  {
    "retailer": "Frys",
    "machineId": "Q00375",
    "address": "3511 W Peoria Ave, Phoenix, AZ",
    "lat": 33.5806722,
    "lng": -112.1353636
  },
  {
    "retailer": "Frys",
    "machineId": "Q00377",
    "address": "4724 N 20th St, Phoenix, AZ",
    "lat": 33.5069046,
    "lng": -112.041189
  },
  {
    "retailer": "Frys",
    "machineId": "Q00379",
    "address": "4707 E Shea Blvd, Phoenix, AZ",
    "lat": 33.580947,
    "lng": -111.9789963
  },
  {
    "retailer": "Frys",
    "machineId": "Q00382",
    "address": "4505 E Thomas Rd, Phoenix, AZ",
    "lat": 33.4791949,
    "lng": -111.984154
  },
  {
    "retailer": "Frys",
    "machineId": "Q00733",
    "address": "2250 E Baseline Rd, Phoenix, AZ",
    "lat": 33.3796385,
    "lng": -112.0318155
  },
  {
    "retailer": "Frys",
    "machineId": "Q00756",
    "address": "2800 W Dove Valley Rd, Phoenix, AZ",
    "lat": 33.7842498,
    "lng": -112.1189596
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01282",
    "address": "4005 E Chandler Blvd, Phoenix, AZ",
    "lat": 33.3030755,
    "lng": -111.9962883
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01292",
    "address": "1334 E Chandler Blvd, Phoenix, AZ",
    "lat": 33.3068519,
    "lng": -112.0538309
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01301",
    "address": "810 E Glendale Ave, Phoenix, AZ",
    "lat": 33.5394839,
    "lng": -112.0623349
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01303",
    "address": "4747 E Elliot Rd, Phoenix, AZ",
    "lat": 33.3478451,
    "lng": -111.9818991
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01306",
    "address": "6202 S 16th St, Phoenix, AZ",
    "lat": 33.3904371,
    "lng": -112.0494171
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01314",
    "address": "3132 E Camelback Rd, Phoenix, AZ",
    "lat": 33.51122,
    "lng": -112.0147691
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01328",
    "address": "520 W Osborn Rd, Phoenix, AZ",
    "lat": 33.4886663,
    "lng": -112.081809
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01329",
    "address": "4747 E Greenway Rd, Phoenix, AZ",
    "lat": 33.6244104,
    "lng": -111.9789918
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01336",
    "address": "330 W Bell Rd, Phoenix, AZ",
    "lat": 33.6415228,
    "lng": -112.0793539
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01347",
    "address": "13440 N 7th St, Phoenix, AZ",
    "lat": 33.6088995,
    "lng": -112.0669533
  },
  {
    "retailer": "Frys",
    "machineId": "Q00596",
    "address": "22265 E Queen Creek Rd, Queen Creek, AZ",
    "lat": 33.2611273,
    "lng": -111.6029918
  },
  {
    "retailer": "Frys",
    "machineId": "Q00604",
    "address": "25105 S Ellsworth Rd, Queen Creek, AZ",
    "lat": 33.2206007,
    "lng": -111.631915
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01348",
    "address": "40950 N Ironwood Dr, Queen Creek, AZ",
    "lat": 33.263494,
    "lng": -111.563255
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01389",
    "address": "18495 E Queen Creek Rd, Queen Creek, AZ",
    "lat": 33.2648478,
    "lng": -111.6839569
  },
  {
    "retailer": "Frys",
    "machineId": "Q00360",
    "address": "155 W Combs Rd, San Tan Valley, AZ",
    "lat": 33.2181122,
    "lng": -111.5657115
  },
  {
    "retailer": "Frys",
    "machineId": "Q00593",
    "address": "542 E Hunt Hwy, San Tan Valley, AZ",
    "lat": 33.1609413,
    "lng": -111.5604193
  },
  {
    "retailer": "Frys",
    "machineId": "Q00341",
    "address": "8900 E Vía Linda, Scottsdale, AZ",
    "lat": 33.5704748,
    "lng": -111.8891252
  },
  {
    "retailer": "Frys",
    "machineId": "Q00424",
    "address": "10450 N 90th St, Scottsdale, AZ",
    "lat": 33.5808344,
    "lng": -111.8896533
  },
  {
    "retailer": "Frys",
    "machineId": "Q01237",
    "address": "7770 E McDowell Rd, Scottsdale, AZ",
    "lat": 33.467478,
    "lng": -111.9125387
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01340",
    "address": "6501 E Greenway Pkwy Bldg 4, Scottsdale, AZ",
    "lat": 33.6228239,
    "lng": -111.925689
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01350",
    "address": "7920 E Chaparral Rd, Scottsdale, AZ",
    "lat": 33.5107158,
    "lng": -111.9103837
  },
  {
    "retailer": "Frys",
    "machineId": "Q00354",
    "address": "10660 Grand Ave, Sun City, AZ",
    "lat": 33.6005886,
    "lng": -112.2888446
  },
  {
    "retailer": "Frys",
    "machineId": "Q00368",
    "address": "19403 N R H Johnson Blvd, Sun City West, AZ",
    "lat": 33.6612449,
    "lng": -112.3532915
  },
  {
    "retailer": "Frys",
    "machineId": "Q00344",
    "address": "15215 N Cotton Ln, Surprise, AZ",
    "lat": 33.6225282,
    "lng": -112.4246819
  },
  {
    "retailer": "Frys",
    "machineId": "Q00345",
    "address": "13982 W Waddell Rd, Surprise, AZ",
    "lat": 33.6113093,
    "lng": -112.3614735
  },
  {
    "retailer": "Frys",
    "machineId": "Q00355",
    "address": "16400 W Pat Tillman Blvd, Surprise, AZ",
    "lat": 33.6985844,
    "lng": -112.4114614
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01276",
    "address": "17049 W Bell Rd, Surprise, AZ",
    "lat": 33.6372239,
    "lng": -112.4252967
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01296",
    "address": "13828 W Waddell Rd, Surprise, AZ",
    "lat": 33.6107007,
    "lng": -112.3575308
  },
  {
    "retailer": "Frys",
    "machineId": "Q00323",
    "address": "3232 S Mill Ave, Tempe, AZ",
    "lat": 33.3938604,
    "lng": -111.9413613
  },
  {
    "retailer": "Frys",
    "machineId": "Q00334",
    "address": "1835 E Guadalupe Rd, Tempe, AZ",
    "lat": 33.3623274,
    "lng": -111.9090802
  },
  {
    "retailer": "Frys",
    "machineId": "Q00618",
    "address": "3255 S Rural Rd, Tempe, AZ",
    "lat": 33.3940228,
    "lng": -111.9244501
  },
  {
    "retailer": "Frys",
    "machineId": "Q00879",
    "address": "9401 E 22nd St, Tucson, AZ",
    "lat": 32.2078367,
    "lng": -110.7918156
  },
  {
    "retailer": "Frys",
    "machineId": "Q01025",
    "address": "7050 E Golf Links Rd, Tucson, AZ",
    "lat": 32.1903014,
    "lng": -110.8425935
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01495",
    "address": "4752 E Sunrise Dr, Tucson, AZ",
    "lat": 32.3072811,
    "lng": -110.891277
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01507",
    "address": "1940 E Broadway Blvd, Tucson, AZ",
    "lat": 32.2199926,
    "lng": -110.94298
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01511",
    "address": "2140 W Grant Rd, Tucson, AZ",
    "lat": 32.2522791,
    "lng": -111.0127428
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01548",
    "address": "9050 E Valencia Rd, Tucson, AZ",
    "lat": 32.1179091,
    "lng": -110.7989225
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01555",
    "address": "9125 E Tanque Verde Rd, Tucson, AZ",
    "lat": 32.2577288,
    "lng": -110.7974213
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01558",
    "address": "9100 N Silverbell Rd, Tucson, AZ",
    "lat": 32.3724178,
    "lng": -111.136735
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01564",
    "address": "1350 N Silverbell Rd, Tucson, AZ",
    "lat": 32.2387581,
    "lng": -111.0041378
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01565",
    "address": "2940 W Valencia Rd, Tucson, AZ",
    "lat": 32.1351633,
    "lng": -111.029874
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01566",
    "address": "6360 E Golf Links Rd, Tucson, AZ",
    "lat": 32.1902283,
    "lng": -110.8560379
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01556",
    "address": "13380 E Mary Ann Cleveland Way, Vail, AZ",
    "lat": 32.0500318,
    "lng": -110.708594
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00832",
    "address": "2500 Santiam Hwy SE, Albany, OR",
    "lat": 44.6307376,
    "lng": -123.0755386
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00826",
    "address": "6055 SW 185th Ave, Aloha, OR",
    "lat": 45.4755956,
    "lng": -122.8687486
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00855",
    "address": "20535 SW Tualatin Valley Hwy, Aloha, OR",
    "lat": 45.4967965,
    "lng": -122.8883761
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00138",
    "address": "11425 SW Beaverton Hillsdale Hwy, Beaverton, OR",
    "lat": 45.4880972,
    "lng": -122.7944989
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00140",
    "address": "15995 SW Walker Rd, Beaverton, OR",
    "lat": 45.5189107,
    "lng": -122.84174
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00201",
    "address": "14555 SW Teal Blvd, Beaverton, OR",
    "lat": 45.4423814,
    "lng": -122.826856
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00205",
    "address": "6194 SW Murray Blvd, Beaverton, OR",
    "lat": 45.4752048,
    "lng": -122.8254174
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00959",
    "address": "3025 SW Cedar Hills Blvd, Beaverton, OR",
    "lat": 45.4980751,
    "lng": -122.8101363
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01009",
    "address": "15995 SW Walker Rd, Beaverton, OR",
    "lat": 45.5189107,
    "lng": -122.84174
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01011",
    "address": "11425 SW Beaverton Hillsdale Hwy, Beaverton, OR",
    "lat": 45.4880972,
    "lng": -122.7944989
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00151",
    "address": "1401 SE 1st Ave, Canby, OR",
    "lat": 45.2668793,
    "lng": -122.6762683
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00816",
    "address": "1051 SW 1st Ave, Canby, OR",
    "lat": 45.2554512,
    "lng": -122.7025632
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00150",
    "address": "16301 SE 82nd Dr, Clackamas, OR",
    "lat": 45.404757,
    "lng": -122.5689997
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00204",
    "address": "12032 SE Sunnyside Rd, Clackamas, OR",
    "lat": 45.4282142,
    "lng": -122.5403246
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00997",
    "address": "16301 SE 82nd Dr, Clackamas, OR",
    "lat": 45.404757,
    "lng": -122.5689997
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00782",
    "address": "2200 E Baseline St, Cornelius, OR",
    "lat": 45.519998,
    "lng": -123.04452
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00736",
    "address": "2335 NW Kings Blvd, Corvallis, OR",
    "lat": 44.590548,
    "lng": -123.2759215
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00952",
    "address": "590 Ne Circle Blvd, Corvallis, OR",
    "lat": 44.5870061,
    "lng": -123.2508837
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01321",
    "address": "5270 SW Philomath Blvd, Corvallis, OR",
    "lat": 44.5504252,
    "lng": -123.3087431
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01318",
    "address": "1500 E Main St, Cottage Grove, OR",
    "lat": 43.7985817,
    "lng": -123.0521857
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00883",
    "address": "138 W Ellendale Ave, Dallas, OR",
    "lat": 44.930701,
    "lng": -123.3125634
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00913",
    "address": "60 Division Ave, Eugene, OR",
    "lat": 44.0980297,
    "lng": -123.1263771
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00946",
    "address": "3333 W 11th Ave, Eugene, OR",
    "lat": 44.049655,
    "lng": -123.1429418
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01121",
    "address": "55 Division Ave, Eugene, OR",
    "lat": 44.1004956,
    "lng": -123.128396
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01294",
    "address": "311 Coburg Rd, Eugene, OR",
    "lat": 44.0646115,
    "lng": -123.0738716
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01307",
    "address": "1500 Coburg Rd, Eugene, OR",
    "lat": 44.0781568,
    "lng": -123.0702992
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01366",
    "address": "4275 Barger Dr, Eugene, OR",
    "lat": 44.0863415,
    "lng": -123.1693095
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01367",
    "address": "4740 Royal Ave, Eugene, OR",
    "lat": 44.0686921,
    "lng": -123.1793732
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01370",
    "address": "1675 W 18th Ave, Eugene, OR",
    "lat": 44.0414621,
    "lng": -123.116834
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00779",
    "address": "2836 Pacific Ave, Forest Grove, OR",
    "lat": 45.5196274,
    "lng": -123.0954281
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01124",
    "address": "95 82nd Dr, Gladstone, OR",
    "lat": 45.381661,
    "lng": -122.5818888
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00190",
    "address": "2497 SE Burnside Rd, Gresham, OR",
    "lat": 45.4959611,
    "lng": -122.4053845
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00195",
    "address": "1455 NE Division St, Gresham, OR",
    "lat": 45.5058669,
    "lng": -122.416981
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00220",
    "address": "1001 SW Highland Dr, Gresham, OR",
    "lat": 45.4890481,
    "lng": -122.4768357
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01322",
    "address": "2511 SE 1st St, Gresham, OR",
    "lat": 45.4988484,
    "lng": -122.4076108
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00191",
    "address": "8955 SE 82nd Ave, Happy Valley, OR",
    "lat": 45.458402,
    "lng": -122.5811103
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00202",
    "address": "17005 SE Sunnyside Rd, Happy Valley, OR",
    "lat": 45.4283857,
    "lng": -122.4877345
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00887",
    "address": "8955 SE 82nd Ave, Happy Valley, OR",
    "lat": 45.458402,
    "lng": -122.5811103
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00957",
    "address": "11250 SE 82nd Ave, Happy Valley, OR",
    "lat": 45.4437154,
    "lng": -122.5777463
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00146",
    "address": "6495 SE Tualatin Valley Hwy, Hillsboro, OR",
    "lat": 45.5001422,
    "lng": -122.914697
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00156",
    "address": "6495 SE Tualatin Valley Hwy, Hillsboro, OR",
    "lat": 45.5001422,
    "lng": -122.914697
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00192",
    "address": "2177 NW 185th Ave, Hillsboro, OR",
    "lat": 45.5360423,
    "lng": -122.8698787
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00766",
    "address": "7330 NE Butler St, Hillsboro, OR",
    "lat": 45.5354188,
    "lng": -122.9030182
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00770",
    "address": "1500 SW Oak St, Hillsboro, OR",
    "lat": 45.5184074,
    "lng": -123.0063133
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00847",
    "address": "22075 NW NE Imbrie Dr, Hillsboro, OR",
    "lat": 45.550257,
    "lng": -122.9003858
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00949",
    "address": "7500 W Baseline Rd, Hillsboro, OR",
    "lat": 45.5146742,
    "lng": -122.9040706
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00954",
    "address": "888 NE 25th Ave, Hillsboro, OR",
    "lat": 45.5300904,
    "lng": -122.9549023
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00962",
    "address": "2525 SE Tualatin Valley Hwy, Hillsboro, OR",
    "lat": 45.5059536,
    "lng": -122.9543609
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01305",
    "address": "1755 Ivy St, Junction City, OR",
    "lat": 44.2292899,
    "lng": -123.206773
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00996",
    "address": "4990 River Rd N, Keizer, OR",
    "lat": 44.9962507,
    "lng": -123.0239091
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00822",
    "address": "17779 Lower Boones Ferry Rd, Lake Oswego, OR",
    "lat": 45.3985746,
    "lng": -122.7418261
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01067",
    "address": "16199 Boones Ferry Rd, Lake Oswego, OR",
    "lat": 45.4094843,
    "lng": -122.722923
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01362",
    "address": "1983 S Main St, Lebanon, OR",
    "lat": 44.5393654,
    "lng": -122.9070428
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00716",
    "address": "2585 NE OR-99W, McMinnville, OR",
    "lat": 45.2271704,
    "lng": -123.197087
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01008",
    "address": "615 SW Keck Cir, McMinnville, OR",
    "lat": 45.1937768,
    "lng": -123.1995028
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00837",
    "address": "2490 N Highway, Mcminnville, OR",
    "lat": 46.018378,
    "lng": -123.916904
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00137",
    "address": "14840 SE Webster Rd, Milwaukie, OR",
    "lat": 45.4157132,
    "lng": -122.5907804
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01122",
    "address": "4370 SE King Rd, Milwaukie, OR",
    "lat": 45.4477436,
    "lng": -122.6174393
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01113",
    "address": "1524 W Main St, Molalla, OR",
    "lat": 45.1482375,
    "lng": -122.5836908
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00884",
    "address": "3300 Portland Rd, Newberg, OR",
    "lat": 45.305789,
    "lng": -122.9445631
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00894",
    "address": "3300 Portland Rd, Newberg, OR",
    "lat": 45.305789,
    "lng": -122.9445631
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01115",
    "address": "1140 N Springbrook Rd, Newberg, OR",
    "lat": 45.3085957,
    "lng": -122.9453677
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00843",
    "address": "14700 SE McLoughlin Blvd, Oak Grove, OR",
    "lat": 45.41713,
    "lng": -122.629541
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00998",
    "address": "14700 SE McLoughlin Blvd, Oak Grove, OR",
    "lat": 45.41713,
    "lng": -122.629541
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01452",
    "address": "1410 Westpark Plaza, Ontario, OR",
    "lat": 44.0246557,
    "lng": -116.9854709
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00141",
    "address": "1839 Molalla Ave, Oregon City, OR",
    "lat": 45.3313528,
    "lng": -122.5837071
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01116",
    "address": "13434 Colton Pl, Oregon City, OR",
    "lat": 45.3343277,
    "lng": -122.5909944
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01304",
    "address": "19007 S Beavercreek Rd, Oregon City, OR",
    "lat": 45.3328415,
    "lng": -122.5813633
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00113",
    "address": "1111 NE 102nd Ave, Portland, OR",
    "lat": 45.5304951,
    "lng": -122.5602559
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00119",
    "address": "13485 NW Cornell Rd, Portland, OR",
    "lat": 45.5279868,
    "lng": -122.8144184
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00120",
    "address": "4515 SE Woodstock Blvd, Portland, OR",
    "lat": 45.4799479,
    "lng": -122.6159604
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00133",
    "address": "3805 SE Hawthorne Blvd, Portland, OR",
    "lat": 45.5121715,
    "lng": -122.6233288
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00145",
    "address": "14700 SE Division St, Portland, OR",
    "lat": 45.5027581,
    "lng": -122.51209
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00149",
    "address": "11565 SW Pacific Hwy, Portland, OR",
    "lat": 45.443049,
    "lng": -122.7430326
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00153",
    "address": "3030 NE Weidler St, Portland, OR",
    "lat": 45.5328969,
    "lng": -122.6348475
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00154",
    "address": "6850 N Lombard St, Portland, OR",
    "lat": 45.5859593,
    "lng": -122.7378531
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00162",
    "address": "7404 N Interstate Ave, Portland, OR",
    "lat": 45.5758811,
    "lng": -122.6809329
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00166",
    "address": "6850 N Lombard St, Portland, OR",
    "lat": 45.5859593,
    "lng": -122.7378531
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00172",
    "address": "6615 NE Glisan St, Portland, OR",
    "lat": 45.5275785,
    "lng": -122.5959108
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00184",
    "address": "7404 N Interstate Ave, Portland, OR",
    "lat": 45.5758811,
    "lng": -122.6809329
  },
  {
    "retailer": "QFC",
    "machineId": "Q00187",
    "address": "7525 SW Barnes Rd, Portland, OR",
    "lat": 45.5157387,
    "lng": -122.7549753
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00188",
    "address": "7555 SW Barbur Blvd, Portland, OR",
    "lat": 45.4705706,
    "lng": -122.6906645
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00211",
    "address": "6901 NE Sandy Blvd, Portland, OR",
    "lat": 45.5475881,
    "lng": -122.5927066
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00215",
    "address": "5920 NE Martin Luther King Jr Blvd, Portland, OR",
    "lat": 45.5659307,
    "lng": -122.6601305
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00226",
    "address": "3930 SE Powell Blvd, Portland, OR",
    "lat": 45.4972902,
    "lng": -122.6219603
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00258",
    "address": "3527 SE 122nd Ave, Portland, OR",
    "lat": 45.4961784,
    "lng": -122.5392348
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00262",
    "address": "7555 SW Barbur Blvd, Portland, OR",
    "lat": 45.4705706,
    "lng": -122.6906645
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00797",
    "address": "2800 SE Hawthorne Blvd, Portland, OR",
    "lat": 45.5116358,
    "lng": -122.6374495
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00813",
    "address": "8330 N Ivanhoe St, Portland, OR",
    "lat": 45.5877542,
    "lng": -122.753275
  },
  {
    "retailer": "QFC",
    "machineId": "Q00818",
    "address": "4756 NW Bethany Blvd, Portland, OR",
    "lat": 45.5535026,
    "lng": -122.8351092
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00830",
    "address": "1100 NE Broadway, Portland, OR",
    "lat": 45.5347254,
    "lng": -122.6541471
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00846",
    "address": "14700 SE Division St, Portland, OR",
    "lat": 45.5027581,
    "lng": -122.51209
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00955",
    "address": "7979 SE Powell Blvd, Portland, OR",
    "lat": 45.4984174,
    "lng": -122.581281
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00966",
    "address": "1222 NE 102nd Ave, Portland, OR",
    "lat": 45.5311403,
    "lng": -122.5563894
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00990",
    "address": "11565 SW Pacific Hwy, Portland, OR",
    "lat": 45.443049,
    "lng": -122.7430326
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00999",
    "address": "6615 NE Glisan St, Portland, OR",
    "lat": 45.5275785,
    "lng": -122.5959108
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01006",
    "address": "7700 SW Beaverton Hillsdale Hwy, Portland, OR",
    "lat": 45.4858586,
    "lng": -122.7557791
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01010",
    "address": "100 NW 20th Pl, Portland, OR",
    "lat": 45.5241958,
    "lng": -122.6928325
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01127",
    "address": "451 NE 181st Ave, Portland, OR",
    "lat": 45.5254933,
    "lng": -122.479011
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01130",
    "address": "5850 NE Prescott St, Portland, OR",
    "lat": 45.5543276,
    "lng": -122.6027448
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01359",
    "address": "1950 NE 122nd Ave, Portland, OR",
    "lat": 45.5366095,
    "lng": -122.5360131
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00769",
    "address": "4575 Commercial St SE, Salem, OR",
    "lat": 44.8878713,
    "lng": -123.0347141
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00821",
    "address": "5660 Commercial St SE, Salem, OR",
    "lat": 44.8729748,
    "lng": -123.0221002
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00833",
    "address": "3450 Commercial St SE, Salem, OR",
    "lat": 44.906181,
    "lng": -123.0409659
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00848",
    "address": "1455 Edgewater St NW, Salem, OR",
    "lat": 44.9392309,
    "lng": -123.0633924
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00882",
    "address": "3740 Market St NE, Salem, OR",
    "lat": 44.948392,
    "lng": -122.9861254
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00891",
    "address": "3740 Market St NE, Salem, OR",
    "lat": 44.948392,
    "lng": -122.9861254
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01001",
    "address": "1265 Center St NE, Salem, OR",
    "lat": 44.940798,
    "lng": -123.0242637
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01002",
    "address": "3380 Lancaster Dr NE, Salem, OR",
    "lat": 44.9686316,
    "lng": -122.9819389
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00179",
    "address": "37601 US-26, Sandy, OR",
    "lat": 45.4000157,
    "lng": -122.2768203
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00189",
    "address": "16625 SE 362nd Dr, Sandy, OR",
    "lat": 45.4028167,
    "lng": -122.2944166
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00876",
    "address": "51501 Columbia River Hwy, Scappoose, OR",
    "lat": 45.7419142,
    "lng": -122.8783276
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00209",
    "address": "20685 SW Roy Rogers Rd, Sherwood, OR",
    "lat": 45.3698244,
    "lng": -122.8451005
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01120",
    "address": "301 Westfield St, Silverton, OR",
    "lat": 45.0032624,
    "lng": -122.793922
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00909",
    "address": "650 Q St, Springfield, OR",
    "lat": 44.0633599,
    "lng": -123.017697
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00951",
    "address": "2000 Marcola Rd, Springfield, OR",
    "lat": 44.0656619,
    "lng": -122.9949334
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01128",
    "address": "5755 S Main St, Springfield, OR",
    "lat": 45.296889,
    "lng": -122.979152
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01349",
    "address": "1891 Pioneer Pkwy E, Springfield, OR",
    "lat": 44.0646853,
    "lng": -123.0265087
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01135",
    "address": "1535 N First Ave, Stayton, OR",
    "lat": 44.8057506,
    "lng": -122.7960251
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01131",
    "address": "1540 Main St, Sweet Home, OR",
    "lat": 44.399438,
    "lng": -122.7257048
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00587",
    "address": "15570 SW Pacific Hwy, Tigard, OR",
    "lat": 45.4070137,
    "lng": -122.7930082
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01324",
    "address": "7501 SW Dartmouth St, Tigard, OR",
    "lat": 45.4351766,
    "lng": -122.7536303
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00844",
    "address": "25691 SE Stark St, Troutdale, OR",
    "lat": 45.5201358,
    "lng": -122.4006092
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00123",
    "address": "19200 SW Martinazzi Ave, Tualatin, OR",
    "lat": 45.380871,
    "lng": -122.7575005
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00246",
    "address": "22000 Salamo Rd, West Linn, OR",
    "lat": 45.3645643,
    "lng": -122.647542
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00163",
    "address": "30300 SW Boones Ferry Rd, Wilsonville, OR",
    "lat": 45.3007455,
    "lng": -122.7712008
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00182",
    "address": "8255 SW Wilsonville Rd, Wilsonville, OR",
    "lat": 45.3044127,
    "lng": -122.7625186
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00183",
    "address": "22855 NE Park Ln, Wood Village, OR",
    "lat": 45.5302734,
    "lng": -122.4287042
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01132",
    "address": "1550 N Pacific Hwy, Woodburn, OR",
    "lat": 45.1501533,
    "lng": -122.8296205
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01298",
    "address": "911 11th St, Anacortes, WA",
    "lat": 48.5122603,
    "lng": -122.6117173
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00164",
    "address": "801 Auburn Wy N, Auburn, WA",
    "lat": 47.3152515,
    "lng": -122.2262817
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00249",
    "address": "101 Auburn Way S, Auburn, WA",
    "lat": 47.3062886,
    "lng": -122.2275157
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00804",
    "address": "4010 A St SE, Auburn, WA",
    "lat": 47.2725758,
    "lng": -122.2272979
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01253",
    "address": "253 High School Rd NE, Bainbridge Island, WA",
    "lat": 47.6350661,
    "lng": -122.5196869
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00185",
    "address": "401 NW 12th Ave, Battle Ground, WA",
    "lat": 45.7841204,
    "lng": -122.5489729
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00942",
    "address": "2108 W Main St, Battle Ground, WA",
    "lat": 45.7817643,
    "lng": -122.5601576
  },
  {
    "retailer": "QFC",
    "machineId": "Q00788",
    "address": "201 NE WA-300, Belfair, WA",
    "lat": 47.453111,
    "lng": -122.8287154
  },
  {
    "retailer": "QFC",
    "machineId": "Q00171",
    "address": "3550 Factoria Blvd SE, Bellevue, WA",
    "lat": 47.5786649,
    "lng": -122.1671848
  },
  {
    "retailer": "QFC",
    "machineId": "Q00194",
    "address": "10116 NE 8th St, Bellevue, WA",
    "lat": 47.6186347,
    "lng": -122.2053667
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00216",
    "address": "15100 SE 38th St, Bellevue, WA",
    "lat": 47.5766768,
    "lng": -122.1373462
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00255",
    "address": "2041 148th Ave NE, Bellevue, WA",
    "lat": 47.6289306,
    "lng": -122.1447173
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00861",
    "address": "1645 140th Ave NE, Bellevue, WA",
    "lat": 47.6257713,
    "lng": -122.1550311
  },
  {
    "retailer": "QFC",
    "machineId": "Q01169",
    "address": "1510 145th Pl SE, Bellevue, WA",
    "lat": 47.596884,
    "lng": -122.1485043
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01183",
    "address": "300 Bellevue Way NE, Bellevue, WA",
    "lat": 47.6130141,
    "lng": -122.200834
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00233",
    "address": "800 Lakeway Dr, Bellingham, WA",
    "lat": 48.7435379,
    "lng": -122.4644657
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00260",
    "address": "1225 W Bakerview Rd, Bellingham, WA",
    "lat": 48.7885061,
    "lng": -122.5115463
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01220",
    "address": "300 E Bellis Fair Pkwy, Bellingham, WA",
    "lat": 48.7869615,
    "lng": -122.4813635
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01265",
    "address": "1275 E Sunset Dr, Bellingham, WA",
    "lat": 48.774665,
    "lng": -122.4585351
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00143",
    "address": "20901 WA-410 E, Bonney Lake, WA",
    "lat": 47.1865639,
    "lng": -122.1996711
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00874",
    "address": "21301 WA-410, Bonney Lake, WA",
    "lat": 47.1676063,
    "lng": -122.1450292
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00016",
    "address": "21045 Bothell Everett Hwy, Bothell, WA",
    "lat": 47.8072492,
    "lng": -122.2059484
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00026",
    "address": "24040 Bothell Everett Hwy, Bothell, WA",
    "lat": 47.7787962,
    "lng": -122.2207592
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01149",
    "address": "20711 Bothell Everett Hwy, Bothell, WA",
    "lat": 47.7978405,
    "lng": -122.2123088
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00196",
    "address": "5050 WA-303, Bremerton, WA",
    "lat": 47.6095723,
    "lng": -122.6275232
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01491",
    "address": "1401 NE McWilliams Rd, Bremerton, WA",
    "lat": 47.6205825,
    "lng": -122.6308563
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00124",
    "address": "14300 1st Ave S, Burien, WA",
    "lat": 47.4753397,
    "lng": -122.3316225
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00827",
    "address": "12725 1st Ave S, Burien, WA",
    "lat": 47.489127,
    "lng": -122.335791
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01403",
    "address": "138 SW 148th St, Burien, WA",
    "lat": 47.4716697,
    "lng": -122.3367662
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00224",
    "address": "920 S Burlington Blvd, Burlington, WA",
    "lat": 48.4670404,
    "lng": -122.3334491
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00173",
    "address": "16735 SE 272nd St, Covington, WA",
    "lat": 47.3568184,
    "lng": -122.1182456
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01401",
    "address": "17023 SE 272nd St, Covington, WA",
    "lat": 47.3564068,
    "lng": -122.115029
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01141",
    "address": "27035 Pacific Hwy S, Des Moines, WA",
    "lat": 47.3594385,
    "lng": -122.310585
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01118",
    "address": "14020 Main St NE, Duvall, WA",
    "lat": 47.7263039,
    "lng": -121.984962
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01187",
    "address": "23632 Hwy 99, Edmonds, WA",
    "lat": 47.7835853,
    "lng": -122.344921
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01297",
    "address": "21900 Hwy 99, Edmonds, WA",
    "lat": 47.8007178,
    "lng": -122.3333696
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00239",
    "address": "152 Roosevelt Ave E, Enumclaw, WA",
    "lat": 47.1983823,
    "lng": -121.9801541
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00035",
    "address": "8530 Evergreen Wy, Everett, WA",
    "lat": 47.9213228,
    "lng": -122.2276936
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00129",
    "address": "12906 Bothell Everett Hwy, Everett, WA",
    "lat": 47.8798658,
    "lng": -122.2093258
  },
  {
    "retailer": "QFC",
    "machineId": "Q00198",
    "address": "2615 Broadway, Everett, WA",
    "lat": 47.9827674,
    "lng": -122.200646
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00234",
    "address": "7601 Evergreen Wy, Everett, WA",
    "lat": 47.9294528,
    "lng": -122.218835
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00244",
    "address": "5802 134th Pl SE, Everett, WA",
    "lat": 47.8753937,
    "lng": -122.1536075
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00263",
    "address": "11031 19th Ave SE, Everett, WA",
    "lat": 47.8973184,
    "lng": -122.2050679
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00823",
    "address": "8530 Evergreen Wy, Everett, WA",
    "lat": 47.9213228,
    "lng": -122.2276936
  },
  {
    "retailer": "QFC",
    "machineId": "Q01085",
    "address": "4919 Evergreen Wy, Everett, WA",
    "lat": 47.9527375,
    "lng": -122.2136073
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01284",
    "address": "1715 Broadway, Everett, WA",
    "lat": 47.9947444,
    "lng": -122.2010513
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01413",
    "address": "4128 Rucker Ave, Everett, WA",
    "lat": 47.9624395,
    "lng": -122.2123457
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00037",
    "address": "33702 21st Ave SW, Federal Way, WA",
    "lat": 47.2979565,
    "lng": -122.3589037
  },
  {
    "retailer": "H Mart",
    "machineId": "Q00117",
    "address": "31217 Pacific Hwy S, Federal Way, WA",
    "lat": 47.3218451,
    "lng": -122.3153309
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00213",
    "address": "33702 21st Ave SW, Federal Way, WA",
    "lat": 47.2979565,
    "lng": -122.3589037
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00851",
    "address": "1207 S 320th St, Federal Way, WA",
    "lat": 47.3136359,
    "lng": -122.3179509
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01490",
    "address": "28810 Military Rd S, Federal Way, WA",
    "lat": 47.3425756,
    "lng": -122.3000143
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00228",
    "address": "5502 Point Fosdick Dr, Gig Harbor, WA",
    "lat": 47.307812,
    "lng": -122.579843
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01327",
    "address": "4831 Point Fosdick Dr, Gig Harbor, WA",
    "lat": 47.2951691,
    "lng": -122.5793093
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01497",
    "address": "11330 51st Ave NW, Gig Harbor, WA",
    "lat": 47.32926,
    "lng": -122.58013
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00039",
    "address": "6100 E Lake Sammamish Pkwy SE, Issaquah, WA",
    "lat": 47.54803,
    "lng": -122.04003
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00125",
    "address": "735 NW Gilman Blvd, Issaquah, WA",
    "lat": 47.541492,
    "lng": -122.0484692
  },
  {
    "retailer": "QFC",
    "machineId": "Q01070",
    "address": "1540 NW Gilman Blvd, Issaquah, WA",
    "lat": 47.5465572,
    "lng": -122.060388
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01139",
    "address": "1451 Highlands Dr NE, Issaquah, WA",
    "lat": 47.5413495,
    "lng": -122.0196304
  },
  {
    "retailer": "QFC",
    "machineId": "Q01479",
    "address": "4570 Klahanie Dr. SE, Issaquah, WA",
    "lat": 47.565668,
    "lng": -122.0033598
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00836",
    "address": "6850 NE Bothell Way, Kenmore, WA",
    "lat": 47.7583642,
    "lng": -122.2471602
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00158",
    "address": "25250 Pacific Hwy S, Kent, WA",
    "lat": 47.3742327,
    "lng": -122.2980913
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00175",
    "address": "10201 SE 240th St, Kent, WA",
    "lat": 47.3858614,
    "lng": -122.2053074
  },
  {
    "retailer": "QFC",
    "machineId": "Q00219",
    "address": "13304 SE 240th St, Kent, WA",
    "lat": 47.3876223,
    "lng": -122.1635929
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00241",
    "address": "210 Washington Ave S, Kent, WA",
    "lat": 47.3803887,
    "lng": -122.2466416
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00940",
    "address": "21100 91st Pl S, Kent, WA",
    "lat": 47.4145827,
    "lng": -122.2189923
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01094",
    "address": "13101 SE Kent-Kangley Rd, Kent, WA",
    "lat": 47.3595105,
    "lng": -122.1703924
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01137",
    "address": "20830 108th Ave SE, Kent, WA",
    "lat": 47.4152812,
    "lng": -122.195846
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00014",
    "address": "12221 120th Ave NE, Kirkland, WA",
    "lat": 47.7077168,
    "lng": -122.1842004
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00229",
    "address": "14444 124th Ave NE, Kirkland, WA",
    "lat": 47.7326513,
    "lng": -122.1741044
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00238",
    "address": "12221 120th Ave NE, Kirkland, WA",
    "lat": 47.7077168,
    "lng": -122.1842004
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00613",
    "address": "10020 NE 137th St, Kirkland, WA",
    "lat": 47.7236367,
    "lng": -122.2063788
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01412",
    "address": "12519 NE 85th St, Kirkland, WA",
    "lat": 47.6788462,
    "lng": -122.17341
  },
  {
    "retailer": "QFC",
    "machineId": "Q01177",
    "address": "4775 Whitman Ln SE, Lacey, WA",
    "lat": 46.9947819,
    "lng": -122.8239595
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01259",
    "address": "4700 Yelm Hwy SE, Lacey, WA",
    "lat": 46.9979928,
    "lng": -122.8222101
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01455",
    "address": "6200 Pacific Ave SE, Lacey, WA",
    "lat": 47.0392115,
    "lng": -122.7998455
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00384",
    "address": "717 WA-9 NE, Lake Stevens, WA",
    "lat": 48.008537,
    "lng": -122.416738
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00859",
    "address": "10223 Gravelly Lake Dr SW, Lakewood, WA",
    "lat": 47.1640818,
    "lng": -122.5183652
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00115",
    "address": "2930 Ocean Beach Hwy, Longview, WA",
    "lat": 46.1474072,
    "lng": -122.9590452
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00945",
    "address": "1227 15th Ave, Longview, WA",
    "lat": 46.1366796,
    "lng": -122.9390576
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00994",
    "address": "3184 Ocean Beach Hwy, Longview, WA",
    "lat": 46.1490116,
    "lng": -122.9645733
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01246",
    "address": "8071 Guide Meridian Rd, Lynden, WA",
    "lat": 48.934444,
    "lng": -122.4876655
  },
  {
    "retailer": "H Mart",
    "machineId": "Q00130",
    "address": "3301 184th St SW, Lynnwood, WA",
    "lat": 47.832031,
    "lng": -122.277903
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00165",
    "address": "4615 196th St SW, Lynnwood, WA",
    "lat": 47.8218386,
    "lng": -122.2958667
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00174",
    "address": "2902 164th St SW, Lynnwood, WA",
    "lat": 47.84671,
    "lng": -122.27139
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00203",
    "address": "14826 Hwy 99, Lynnwood, WA",
    "lat": 47.8118578,
    "lng": -122.3230219
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01302",
    "address": "19500 Hwy 99, Lynnwood, WA",
    "lat": 47.8222949,
    "lng": -122.3165966
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01399",
    "address": "12811 Beverly Park Rd, Lynnwood, WA",
    "lat": 47.881038,
    "lng": -122.280755
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00111",
    "address": "26520 Maple Valley Black Diamond Rd SE, Maple Valley, WA",
    "lat": 47.3634034,
    "lng": -122.0192857
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00869",
    "address": "26916 Maple Vly Hwy, Maple Valley, WA",
    "lat": 48.922076,
    "lng": -122.072942
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00142",
    "address": "9925 State Ave, Marysville, WA",
    "lat": 48.0852402,
    "lng": -122.1697529
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00247",
    "address": "9925 State Ave, Marysville, WA",
    "lat": 48.0852402,
    "lng": -122.1697529
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01136",
    "address": "1258 State Ave, Marysville, WA",
    "lat": 48.0625452,
    "lng": -122.1744299
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01273",
    "address": "3947 116th St NE, Marysville, WA",
    "lat": 48.1000652,
    "lng": -122.1784395
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00250",
    "address": "16304 Bothell Everett Hwy, Mill Creek, WA",
    "lat": 47.8509781,
    "lng": -122.2201051
  },
  {
    "retailer": "QFC",
    "machineId": "Q01154",
    "address": "926 164th St SE, Mill Creek, WA",
    "lat": 47.8486403,
    "lng": -122.2194106
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00148",
    "address": "18805 US-2, Monroe, WA",
    "lat": 47.8631525,
    "lng": -121.9786434
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00221",
    "address": "18805 US-2, Monroe, WA",
    "lat": 47.8631525,
    "lng": -121.9786434
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01295",
    "address": "19651 US-2, Monroe, WA",
    "lat": 47.8600344,
    "lng": -121.9673564
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01188",
    "address": "315 E College Way, Mount Vernon, WA",
    "lat": 48.4376187,
    "lng": -122.3371998
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00259",
    "address": "4301 212th St SW, Mountlake Terrace, WA",
    "lat": 47.8078198,
    "lng": -122.291403
  },
  {
    "retailer": "QFC",
    "machineId": "Q00808",
    "address": "22803 44th Ave W, Mountlake Terrace, WA",
    "lat": 47.790903,
    "lng": -122.2901533
  },
  {
    "retailer": "QFC",
    "machineId": "Q01087",
    "address": "11700 Mukilteo Speedway, Mukilteo, WA",
    "lat": 47.8916417,
    "lng": -122.287795
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00240",
    "address": "6911 Coal Creek Pkwy Se, Newcastle, WA",
    "lat": 47.5394931,
    "lng": -122.1677599
  },
  {
    "retailer": "QFC",
    "machineId": "Q00805",
    "address": "6940 Coal Creek Pkwy SE, Newcastle, WA",
    "lat": 47.5388922,
    "lng": -122.1645129
  },
  {
    "retailer": "QFC",
    "machineId": "Q00811",
    "address": "460 E North Bend Way, North Bend, WA",
    "lat": 47.4932874,
    "lng": -121.780527
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01488",
    "address": "460 SW Mt Si Blvd, North Bend, WA",
    "lat": 47.4875269,
    "lng": -121.7913755
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00947",
    "address": "7540 Martin Way E, Olympia, WA",
    "lat": 47.0548716,
    "lng": -122.7799053
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01288",
    "address": "1243 Marvin Rd NE, Olympia, WA",
    "lat": 47.0582537,
    "lng": -122.7666029
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01293",
    "address": "3215 Harrison Ave NW, Olympia, WA",
    "lat": 47.0454134,
    "lng": -122.9420724
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01315",
    "address": "4280 Martin Way E, Olympia, WA",
    "lat": 47.0500372,
    "lng": -122.8292041
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01487",
    "address": "3520 Pacific Ave SE, Olympia, WA",
    "lat": 47.0427111,
    "lng": -122.8457519
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01419",
    "address": "215 Whitesell St NW, Orting, WA",
    "lat": 47.1000423,
    "lng": -122.2092243
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00237",
    "address": "1900 SE Sedgwick Rd, Port Orchard, WA",
    "lat": 47.5032784,
    "lng": -122.6292776
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01254",
    "address": "1434 Olney Ave SE, Port Orchard, WA",
    "lat": 47.5356339,
    "lng": -122.6104442
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01280",
    "address": "370 SW Sedgwick Rd, Port Orchard, WA",
    "lat": 47.4961275,
    "lng": -122.6520462
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01494",
    "address": "3355 Bethel Rd SE, Port Orchard, WA",
    "lat": 47.5180276,
    "lng": -122.6301982
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01478",
    "address": "19245 10th Ave NE, Poulsbo, WA",
    "lat": 47.7382166,
    "lng": -122.6369327
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00131",
    "address": "17404 Meridian E, Puyallup, WA",
    "lat": 47.0987517,
    "lng": -122.2961074
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00147",
    "address": "1100 N Meridian, Puyallup, WA",
    "lat": 47.2012548,
    "lng": -122.2963093
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00178",
    "address": "5616 176th St E, Puyallup, WA",
    "lat": 47.0950201,
    "lng": -122.3529172
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00868",
    "address": "13308 Meridian E, Puyallup, WA",
    "lat": 47.1351734,
    "lng": -122.2950259
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00993",
    "address": "17404 Meridian E, Puyallup, WA",
    "lat": 47.0987517,
    "lng": -122.2961074
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01402",
    "address": "11012 Canyon Rd E, Puyallup, WA",
    "lat": 47.1558357,
    "lng": -122.3591881
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01405",
    "address": "11501 Canyon Rd E, Puyallup, WA",
    "lat": 47.1519531,
    "lng": -122.3552398
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01493",
    "address": "708 Shaw Rd E, Puyallup, WA",
    "lat": 47.1507148,
    "lng": -122.2585257
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00022",
    "address": "17667 NE 76th St, Redmond, WA",
    "lat": 47.670516,
    "lng": -122.1046115
  },
  {
    "retailer": "QFC",
    "machineId": "Q00106",
    "address": "8867 161st Avenue Northeast, Redmond, WA",
    "lat": 47.6810007,
    "lng": -122.1271572
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00401",
    "address": "15000 NE 24th St, Redmond, WA",
    "lat": 47.6324859,
    "lng": -122.140084
  },
  {
    "retailer": "QFC",
    "machineId": "Q01153",
    "address": "15800 Redmond Way, Redmond, WA",
    "lat": 47.6756369,
    "lng": -122.1284427
  },
  {
    "retailer": "QFC",
    "machineId": "Q01317",
    "address": "23475 NE Novelty Hill Rd, Redmond, WA",
    "lat": 47.6985688,
    "lng": -122.0259917
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01414",
    "address": "17246 Redmond Way, Redmond, WA",
    "lat": 47.6708853,
    "lng": -122.1109357
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00025",
    "address": "4300 NE 4th St, Renton, WA",
    "lat": 47.4900235,
    "lng": -122.1614531
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00034",
    "address": "365 Renton Center Way SW, Renton, WA",
    "lat": 47.477574,
    "lng": -122.218428
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00176",
    "address": "17801 108th Ave SE, Renton, WA",
    "lat": 47.4429303,
    "lng": -122.199362
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00223",
    "address": "17230 140th Ave SE, Renton, WA",
    "lat": 47.4475404,
    "lng": -122.1524063
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01197",
    "address": "200 S 3rd St, Renton, WA",
    "lat": 47.4800957,
    "lng": -122.2144561
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00326",
    "address": "630 228th Ave NE, Sammamish, WA",
    "lat": 47.6153623,
    "lng": -122.033514
  },
  {
    "retailer": "QFC",
    "machineId": "Q00814",
    "address": "2902 228th Ave SE, Sammamish, WA",
    "lat": 47.5833265,
    "lng": -122.0328443
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00254",
    "address": "4011 S 164th St, SeaTac, WA",
    "lat": 47.4556403,
    "lng": -122.2824553
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00116",
    "address": "915 NW 45th St, Seattle, WA",
    "lat": 47.6604597,
    "lng": -122.3693171
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00132",
    "address": "12318 15th Ave NE, Seattle, WA",
    "lat": 47.7180447,
    "lng": -122.3119641
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00135",
    "address": "13000 Lake City Way NE, Seattle, WA",
    "lat": 47.7239456,
    "lng": -122.2917869
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00159",
    "address": "1410 E John St, Seattle, WA",
    "lat": 47.620432,
    "lng": -122.3131575
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00180",
    "address": "8340 15th Ave NW, Seattle, WA",
    "lat": 47.6901912,
    "lng": -122.3761218
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00230",
    "address": "100 NW 85th St, Seattle, WA",
    "lat": 47.6920247,
    "lng": -122.3590104
  },
  {
    "retailer": "WestField",
    "machineId": "Q00235",
    "address": "2800 Southcenter Mall, Seattle, WA",
    "lat": 47.465223,
    "lng": -122.296982
  },
  {
    "retailer": "QFC",
    "machineId": "Q00245",
    "address": "1401 Broadway, Seattle, WA",
    "lat": 47.6135416,
    "lng": -122.3214654
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00256",
    "address": "3820 Rainier Ave S, Seattle, WA",
    "lat": 47.5692285,
    "lng": -122.287909
  },
  {
    "retailer": "QFC",
    "machineId": "Q00264",
    "address": "11100 Roosevelt Way NE, Seattle, WA",
    "lat": 47.7093493,
    "lng": -122.3172664
  },
  {
    "retailer": "WestField",
    "machineId": "Q00329",
    "address": "2800 Southcenter Mall, Seattle, WA",
    "lat": 47.465223,
    "lng": -122.296982
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00789",
    "address": "915 NW 45th St, Seattle, WA",
    "lat": 47.6604597,
    "lng": -122.3693171
  },
  {
    "retailer": "QFC",
    "machineId": "Q00810",
    "address": "5700 24th Ave NW, Seattle, WA",
    "lat": 47.6705565,
    "lng": -122.3872019
  },
  {
    "retailer": "QFC",
    "machineId": "Q00873",
    "address": "9999 Holman Rd NW, Seattle, WA",
    "lat": 47.7016382,
    "lng": -122.3638321
  },
  {
    "retailer": "QFC",
    "machineId": "Q01012",
    "address": "1600 W Dravus St, Seattle, WA",
    "lat": 47.6494158,
    "lng": -122.3778668
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01144",
    "address": "2622 California Ave SW, Seattle, WA",
    "lat": 47.5799847,
    "lng": -122.3860269
  },
  {
    "retailer": "QFC",
    "machineId": "Q01156",
    "address": "2746 NE 45th St, Seattle, WA",
    "lat": 47.6621552,
    "lng": -122.2964032
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01159",
    "address": "9262 Rainier Ave S, Seattle, WA",
    "lat": 47.5208461,
    "lng": -122.2694222
  },
  {
    "retailer": "QFC",
    "machineId": "Q01168",
    "address": "2500 SW Barton St, Seattle, WA",
    "lat": 47.5221001,
    "lng": -122.3659704
  },
  {
    "retailer": "QFC",
    "machineId": "Q01175",
    "address": "417 Broadway E #2, Seattle, WA",
    "lat": 47.6224273,
    "lng": -122.3214738
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01192",
    "address": "9620 28th Ave SW, Seattle, WA",
    "lat": 47.5166201,
    "lng": -122.366715
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01418",
    "address": "7300 Roosevelt Way NE, Seattle, WA",
    "lat": 47.6818472,
    "lng": -122.3169373
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01420",
    "address": "3900 S Othello St, Seattle, WA",
    "lat": 47.5374501,
    "lng": -122.2830268
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01281",
    "address": "600 W Franklin St, Shelton, WA",
    "lat": 47.214271,
    "lng": -123.106185
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00038",
    "address": "18325 Aurora Ave N, Shoreline, WA",
    "lat": 47.7622039,
    "lng": -122.3474936
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00257",
    "address": "15332 Aurora Ave N, Shoreline, WA",
    "lat": 47.7408454,
    "lng": -122.343637
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00845",
    "address": "17202 15th Ave NE, Shoreline, WA",
    "lat": 47.7543852,
    "lng": -122.3127912
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01489",
    "address": "2890 NW Bucklin Hill Rd, Silverdale, WA",
    "lat": 47.6526626,
    "lng": -122.6880913
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00186",
    "address": "2801 Bickford Ave, Snohomish, WA",
    "lat": 47.9439524,
    "lng": -122.1052063
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00197",
    "address": "2801 Bickford Ave, Snohomish, WA",
    "lat": 47.9439524,
    "lng": -122.1052063
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00807",
    "address": "34828 SE Douglas St, Snoqualmie, WA",
    "lat": 47.5275711,
    "lng": -121.8737466
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00866",
    "address": "22303 Mountain Hwy E, Spanaway, WA",
    "lat": 47.0552394,
    "lng": -122.3973202
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00136",
    "address": "1201 Valley Ave, Sumner, WA",
    "lat": 47.204593,
    "lng": -122.2279007
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00727",
    "address": "6621 166th Ave E, Sumner, WA",
    "lat": 47.1955569,
    "lng": -122.2051115
  },
  {
    "retailer": "Simon Tacoma Mall",
    "machineId": "Q00031",
    "address": "S Steele St, Tacoma, WA",
    "lat": 47.2272362,
    "lng": -122.4695866
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00152",
    "address": "7250 Pacific Ave, Tacoma, WA",
    "lat": 47.210894,
    "lng": -122.4339921
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00161",
    "address": "4505 S 19th St, Tacoma, WA",
    "lat": 47.2440577,
    "lng": -122.4972082
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00181",
    "address": "1302 S 38th St, Tacoma, WA",
    "lat": 47.2222242,
    "lng": -122.4514662
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00222",
    "address": "3842 Bridgeport Way W, Tacoma, WA",
    "lat": 47.222606,
    "lng": -122.537161
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00227",
    "address": "15805 Pacific Ave S, Tacoma, WA",
    "lat": 47.1130214,
    "lng": -122.4323248
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00820",
    "address": "7250 Pacific Ave, Tacoma, WA",
    "lat": 47.210894,
    "lng": -122.4339921
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00839",
    "address": "2637 N Pearl St, Tacoma, WA",
    "lat": 47.2726985,
    "lng": -122.5137968
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00854",
    "address": "8611 Steilacoom Blvd SW, Tacoma, WA",
    "lat": 47.176831,
    "lng": -122.574403
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00961",
    "address": "1913 S 72nd St, Tacoma, WA",
    "lat": 47.1951933,
    "lng": -122.4599732
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01119",
    "address": "707 S 56th St, Tacoma, WA",
    "lat": 47.2070414,
    "lng": -122.4407591
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01400",
    "address": "1624 E 72nd St, Tacoma, WA",
    "lat": 47.1901651,
    "lng": -122.4070629
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01805",
    "address": "6201 6th Ave, Tacoma, WA",
    "lat": 47.2564979,
    "lng": -122.5202505
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01000",
    "address": "500 Cleveland Ave SE, Tumwater, WA",
    "lat": 47.0169077,
    "lng": -122.898542
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00225",
    "address": "6305 Bridgeport Way W, University Place, WA",
    "lat": 47.2007013,
    "lng": -122.5283671
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00121",
    "address": "6700 NE 162nd Ave, Vancouver, WA",
    "lat": 45.6710348,
    "lng": -122.5078604
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00127",
    "address": "11310 NE 119th St, Vancouver, WA",
    "lat": 45.7090737,
    "lng": -122.5570704
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00139",
    "address": "16600 SE McGillivray Blvd, Vancouver, WA",
    "lat": 45.6059114,
    "lng": -122.5014772
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00144",
    "address": "6711 NE 63rd St, Vancouver, WA",
    "lat": 45.6665239,
    "lng": -122.6035617
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00155",
    "address": "800 NE Tenney Rd, Vancouver, WA",
    "lat": 45.7209777,
    "lng": -122.6647473
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00157",
    "address": "16600 SE McGillivray Blvd, Vancouver, WA",
    "lat": 45.6059114,
    "lng": -122.5014772
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00199",
    "address": "800 NE Tenney Rd, Vancouver, WA",
    "lat": 45.7209777,
    "lng": -122.6647473
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00206",
    "address": "2500 Columbia House Blvd, Vancouver, WA",
    "lat": 45.6204504,
    "lng": -122.6455602
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00207",
    "address": "2615 NE 112th Ave, Vancouver, WA",
    "lat": 45.6412921,
    "lng": -122.5571153
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00208",
    "address": "11325 SE Mill Plain Blvd, Vancouver, WA",
    "lat": 45.6200483,
    "lng": -122.5562721
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00210",
    "address": "2500 Columbia House Blvd, Vancouver, WA",
    "lat": 45.6204504,
    "lng": -122.6455602
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00212",
    "address": "7700 NE Hwy 99, Vancouver, WA",
    "lat": 45.6769575,
    "lng": -122.6634121
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00214",
    "address": "408 NE 81st St, Vancouver, WA",
    "lat": 45.6817145,
    "lng": -122.6682731
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00217",
    "address": "6701 E Mill Plain Blvd, Vancouver, WA",
    "lat": 45.6260782,
    "lng": -122.6028691
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00218",
    "address": "11325 SE Mill Plain Blvd, Vancouver, WA",
    "lat": 45.6200483,
    "lng": -122.5562721
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00236",
    "address": "7411 NE 117th Ave, Vancouver, WA",
    "lat": 45.6761051,
    "lng": -122.5510382
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00242",
    "address": "7700 NE Hwy 99, Vancouver, WA",
    "lat": 45.6769575,
    "lng": -122.6634121
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q00261",
    "address": "7411 NE 117th Ave, Vancouver, WA",
    "lat": 45.6761051,
    "lng": -122.5510382
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00734",
    "address": "3707 Main St, Vancouver, WA",
    "lat": 45.6485133,
    "lng": -122.6666692
  },
  {
    "retailer": "QFC",
    "machineId": "Q00800",
    "address": "3505 SE 192nd Ave, Vancouver, WA",
    "lat": 45.5947163,
    "lng": -122.4762999
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00850",
    "address": "13023 NE Hwy 99, Vancouver, WA",
    "lat": 45.7151516,
    "lng": -122.6493817
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01004",
    "address": "14300 NE 20th Ave, Vancouver, WA",
    "lat": 45.7245209,
    "lng": -122.6532526
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01357",
    "address": "905 NE 136th Ave, Vancouver, WA",
    "lat": 45.6293263,
    "lng": -122.5318449
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01371",
    "address": "9700 NE Hwy 99, Vancouver, WA",
    "lat": 45.6918213,
    "lng": -122.6601635
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01485",
    "address": "3307 Evergreen Way, Washougal, WA",
    "lat": 45.5790234,
    "lng": -122.3345963
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00232",
    "address": "19150 NE Woodinville Duvall Rd, Woodinville, WA",
    "lat": 47.7563353,
    "lng": -122.0817651
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01248",
    "address": "1008 Nevada Way, Boulder City, NV",
    "lat": 35.977419,
    "lng": -114.8379968
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00656",
    "address": "10616 S Eastern Ave, Henderson, NV",
    "lat": 35.9988837,
    "lng": -115.1042222
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01162",
    "address": "201 S Stephanie St, Henderson, NV",
    "lat": 36.020286,
    "lng": -115.0492974
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01232",
    "address": "575 College Dr, Henderson, NV",
    "lat": 36.0137241,
    "lng": -114.9649512
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01244",
    "address": "80 N Stephanie St, Henderson, NV",
    "lat": 36.0336302,
    "lng": -115.0468554
  },
  {
    "retailer": "Vons",
    "machineId": "Q01252",
    "address": "45 E Horizon Ridge Pkwy, Henderson, NV",
    "lat": 36.0091455,
    "lng": -114.9934341
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00657",
    "address": "4965 E Sahara Ave, Las Vegas, NV",
    "lat": 36.1429271,
    "lng": -115.0670735
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00728",
    "address": "450 N Nellis Blvd, Las Vegas, NV",
    "lat": 36.1708334,
    "lng": -115.0623036
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01207",
    "address": "7151 W Craig Rd, Las Vegas, NV",
    "lat": 36.2382395,
    "lng": -115.250244
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01217",
    "address": "8410 Farm Rd, Las Vegas, NV",
    "lat": 36.3005335,
    "lng": -115.279318
  },
  {
    "retailer": "Vons",
    "machineId": "Q01225",
    "address": "7405 S Durango Dr, Las Vegas, NV",
    "lat": 36.0538345,
    "lng": -115.281277
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01227",
    "address": "6101 N Decatur Blvd, Las Vegas, NV",
    "lat": 36.270794,
    "lng": -115.206962
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01229",
    "address": "7501 W Washington Ave, Las Vegas, NV",
    "lat": 36.181265,
    "lng": -115.255511
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01235",
    "address": "7075 W Ann Rd, Las Vegas, NV",
    "lat": 36.2630272,
    "lng": -115.2490437
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01299",
    "address": "6730 N Hualapai Way, Las Vegas, NV",
    "lat": 36.283644,
    "lng": -115.3130293
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01543",
    "address": "1940 Village Center Cir, Las Vegas, NV",
    "lat": 36.1936211,
    "lng": -115.3059104
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00342",
    "address": "4700 W Ann Rd, North Las Vegas, NV",
    "lat": 36.2628182,
    "lng": -115.2057714
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00421",
    "address": "5564 Camino Al Norte, North Las Vegas, NV",
    "lat": 36.2611251,
    "lng": -115.1537223
  }
];

export default vendingDataWithCoords;
