const vendingDataWithCoords = [
  {
    "retailer": "Safeway",
    "machineId": "Q01036",
    "address": "2227 S Shore Center, Alameda, CA",
    "lat": 37.7574333,
    "lng": -122.2507884
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01268",
    "address": "2600 5th St, Alameda, CA",
    "lat": 37.78553,
    "lng": -122.2805734
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01528",
    "address": "103 American Canyon Rd, American Canyon, CA",
    "lat": 38.1655896,
    "lng": -122.2520303
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00330",
    "address": "1616 W Katella Ave, Anaheim, CA",
    "lat": 33.8032575,
    "lng": -117.9390166
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00491",
    "address": "810 S State College Blvd, Anaheim, CA",
    "lat": 33.8313152,
    "lng": -117.8886498
  },
  {
    "retailer": "Vons",
    "machineId": "Q00695",
    "address": "5600 E Santa Ana Canyon Rd, Anaheim, CA",
    "lat": 33.8422781,
    "lng": -117.8312654
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01333",
    "address": "16 Rancho del Mar, Aptos, CA",
    "lat": 36.9785814,
    "lng": -121.9086088
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00467",
    "address": "298 Live Oak Ave, Arcadia, CA",
    "lat": 34.108323,
    "lng": -118.0232
  },
  {
    "retailer": "Vons",
    "machineId": "Q00715",
    "address": "745 W Naomi Ave, Arcadia, CA",
    "lat": 34.1250289,
    "lng": -118.0576669
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00918",
    "address": "2550 Bell Rd, Auburn, CA",
    "lat": 38.942046,
    "lng": -121.099408
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00573",
    "address": "3000 Baldwin Park Blvd, Baldwin Park, CA",
    "lat": 34.068815,
    "lng": -117.9790983
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00711",
    "address": "6901 Eastern Ave, Bell Gardens, CA",
    "lat": 33.9706719,
    "lng": -118.1641552
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01083",
    "address": "1100 El Camino Real, Belmont, CA",
    "lat": 37.5215148,
    "lng": -122.2773611
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01274",
    "address": "50 Solano Square, Benicia, CA",
    "lat": 38.0548474,
    "lng": -122.1561313
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01020",
    "address": "1444 Shattuck Pl, Berkeley, CA",
    "lat": 37.8809073,
    "lng": -122.2696792
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00597",
    "address": "6700 Lone Tree Wy, Brentwood, CA",
    "lat": 37.961704,
    "lng": -121.727697
  },
  {
    "retailer": "Vons",
    "machineId": "Q00314",
    "address": "301 N Pass Ave, Burbank, CA",
    "lat": 34.1547997,
    "lng": -118.3465694
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00523",
    "address": "26521 Agoura Rd, Calabasas, CA",
    "lat": 34.1450584,
    "lng": -118.6997665
  },
  {
    "retailer": "Vons",
    "machineId": "Q01242",
    "address": "940 Arneill Rd, Camarillo, CA",
    "lat": 34.2359242,
    "lng": -119.0390941
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00974",
    "address": "3380 Coach Ln, Cameron Park, CA",
    "lat": 38.6566414,
    "lng": -120.9711073
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00971",
    "address": "2341 S Winchester Blvd, Campbell, CA",
    "lat": 37.2800214,
    "lng": -121.9510952
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01539",
    "address": "950 W Hamilton Ave, Campbell, CA",
    "lat": 37.2929666,
    "lng": -121.9665351
  },
  {
    "retailer": "Vons",
    "machineId": "Q00875",
    "address": "2560 El Camino Real, Carlsbad, CA",
    "lat": 33.17949,
    "lng": -117.326674
  },
  {
    "retailer": "Vons",
    "machineId": "Q01024",
    "address": "6951 El Camino Real, Carlsbad, CA",
    "lat": 33.1036934,
    "lng": -117.266833
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00989",
    "address": "4040 Manzanita Ave, Carmichael, CA",
    "lat": 38.6381512,
    "lng": -121.3262171
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00722",
    "address": "200 E Sepulveda Blvd, Carson, CA",
    "lat": 33.8062515,
    "lng": -118.2726926
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01102",
    "address": "4015 E Castro Valley Blvd, Castro Valley, CA",
    "lat": 37.6947469,
    "lng": -122.0503706
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00509",
    "address": "12013 Central Ave, Chino, CA",
    "lat": 34.035002,
    "lng": -117.6878451
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00519",
    "address": "15970 Los Serranos Country Club Dr, Chino Hills, CA",
    "lat": 33.9614979,
    "lng": -117.6955185
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01243",
    "address": "3255 Grand Ave, Chino Hills, CA",
    "lat": 34.0010634,
    "lng": -117.734328
  },
  {
    "retailer": "Vons",
    "machineId": "Q00331",
    "address": "1745 Eastlake Pkwy, Chula Vista, CA",
    "lat": 32.6196154,
    "lng": -116.9609572
  },
  {
    "retailer": "Vons",
    "machineId": "Q01032",
    "address": "2250 Otay Lakes Rd, Chula Vista, CA",
    "lat": 32.6458007,
    "lng": -116.9664562
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01670",
    "address": "720 3rd Ave, Chula Vista, CA",
    "lat": 32.6264844,
    "lng": -117.075597
  },
  {
    "retailer": "Ralphs",
    "machineId": "Q01791",
    "address": "659 E Palomar St, Chula Vista, CA",
    "lat": 32.6158853,
    "lng": -117.0251243
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00941",
    "address": "7301 Greenback Ln, Citrus Heights, CA",
    "lat": 38.6799345,
    "lng": -121.294236
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00409",
    "address": "1900 W Rosecrans Ave, Compton, CA",
    "lat": 33.9027113,
    "lng": -118.2526114
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00970",
    "address": "2600 Willow Pass Rd, Concord, CA",
    "lat": 37.9783253,
    "lng": -122.028257
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01279",
    "address": "4309 Clayton Rd, Concord, CA",
    "lat": 37.9661609,
    "lng": -121.9907237
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00388",
    "address": "260 W Foothill Pkwy, Corona, CA",
    "lat": 33.8435355,
    "lng": -117.574217
  },
  {
    "retailer": "Vons",
    "machineId": "Q00508",
    "address": "535 N McKinley St, Corona, CA",
    "lat": 33.8914216,
    "lng": -117.5201632
  },
  {
    "retailer": "Vons",
    "machineId": "Q00511",
    "address": "11800 De Palma Rd, Corona, CA",
    "lat": 33.747422,
    "lng": -117.45538
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01512",
    "address": "137 Corte Madera Town Center, Corte Madera, CA",
    "lat": 37.9279905,
    "lng": -122.5177187
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00517",
    "address": "11030 Jefferson Blvd, Culver City, CA",
    "lat": 33.9968452,
    "lng": -118.3938653
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01486",
    "address": "20620 W Homestead Rd, Cupertino, CA",
    "lat": 37.336179,
    "lng": -122.0347351
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01516",
    "address": "601 Westlake Center, Daly City, CA",
    "lat": 37.6995929,
    "lng": -122.4816576
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01151",
    "address": "3496 Camino Tassajara, Danville, CA",
    "lat": 37.7980683,
    "lng": -121.9177916
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01320",
    "address": "1235 Stratford Ave, Dixon, CA",
    "lat": 38.4570077,
    "lng": -121.8389754
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00311",
    "address": "13525 Lakewood Blvd, Downey, CA",
    "lat": 33.9049537,
    "lng": -118.1427255
  },
  {
    "retailer": "Ralphs",
    "machineId": "Q00739",
    "address": "8626 Firestone Blvd, Downey, CA",
    "lat": 33.9360482,
    "lng": -118.127147
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00928",
    "address": "7499 Dublin Blvd, Dublin, CA",
    "lat": 37.7055,
    "lng": -121.926441
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00930",
    "address": "4440 Tassajara Rd, Dublin, CA",
    "lat": 37.7066732,
    "lng": -121.8740663
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00655",
    "address": "7070 Archibald Ave, Eastvale, CA",
    "lat": 33.9595666,
    "lng": -117.5929319
  },
  {
    "retailer": "Vons",
    "machineId": "Q01167",
    "address": "6170 Hamner Ave, Eastvale, CA",
    "lat": 33.9765041,
    "lng": -117.5577031
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00474",
    "address": "1608 Broadway, El Cajon, CA",
    "lat": 32.8089693,
    "lng": -116.920103
  },
  {
    "retailer": "Vons",
    "machineId": "Q00886",
    "address": "1201 Avocado Ave, El Cajon, CA",
    "lat": 32.7938006,
    "lng": -116.9576055
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01247",
    "address": "2899 Jamacha Rd, El Cajon, CA",
    "lat": 32.739612,
    "lng": -116.937938
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01018",
    "address": "11450 San Pablo Ave, El Cerrito, CA",
    "lat": 37.9223638,
    "lng": -122.3154597
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00938",
    "address": "2207 Francisco Dr, El Dorado Hills, CA",
    "lat": 38.711388,
    "lng": -121.0841069
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00977",
    "address": "3383 Bass Lake Rd, El Dorado Hills, CA",
    "lat": 38.6751471,
    "lng": -121.028389
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00931",
    "address": "5021 Laguna Blvd, Elk Grove, CA",
    "lat": 38.4242769,
    "lng": -121.4466039
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01530",
    "address": "8124 Sheldon Rd, Elk Grove, CA",
    "lat": 38.437952,
    "lng": -121.4060674
  },
  {
    "retailer": "Pak N Save",
    "machineId": "Q01060",
    "address": "3889 San Pablo Ave, Emeryville, CA",
    "lat": 37.8294901,
    "lng": -122.2802443
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00890",
    "address": "1570 W Valley Pkwy, Escondido, CA",
    "lat": 33.1178962,
    "lng": -117.0915186
  },
  {
    "retailer": "Vons",
    "machineId": "Q00892",
    "address": "1000 W El Norte Pkwy, Escondido, CA",
    "lat": 33.1487808,
    "lng": -117.1063891
  },
  {
    "retailer": "Vons",
    "machineId": "Q01030",
    "address": "351 W Felicita Ave, Escondido, CA",
    "lat": 33.1030054,
    "lng": -117.0731432
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01250",
    "address": "644 N Broadway, Escondido, CA",
    "lat": 33.128647,
    "lng": -117.0829884
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00943",
    "address": "5450 Dewey Dr, Fair Oaks, CA",
    "lat": 38.6651642,
    "lng": -121.3071329
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01334",
    "address": "2401 Waterman Blvd, Fairfield, CA",
    "lat": 38.2716195,
    "lng": -122.0529967
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00476",
    "address": "1133 S Mission Rd, Fallbrook, CA",
    "lat": 33.3717377,
    "lng": -117.255877
  },
  {
    "retailer": "Vons",
    "machineId": "Q00481",
    "address": "636 Ventura St, Fillmore, CA",
    "lat": 34.3949927,
    "lng": -118.916297
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00690",
    "address": "200 Blue Ravine Rd, Folsom, CA",
    "lat": 38.655746,
    "lng": -121.173057
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00981",
    "address": "1850 Prairie City Rd, Folsom, CA",
    "lat": 38.649877,
    "lng": -121.165815
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00493",
    "address": "14338 Foothill Blvd, Fontana, CA",
    "lat": 34.1073815,
    "lng": -117.4920566
  },
  {
    "retailer": "Vons",
    "machineId": "Q00563",
    "address": "7390 Cherry Ave, Fontana, CA",
    "lat": 34.119886,
    "lng": -117.4904384
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01239",
    "address": "921 E Hillsdale Blvd, Foster City, CA",
    "lat": 37.5569254,
    "lng": -122.2760333
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00328",
    "address": "16061 Brookhurst St, Fountain Valley, CA",
    "lat": 33.7294124,
    "lng": -117.9544625
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01337",
    "address": "2010 Freedom Blvd, Freedom, CA",
    "lat": 36.9401035,
    "lng": -121.7754448
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00973",
    "address": "39100 Argonaut Way, Fremont, CA",
    "lat": 37.5452818,
    "lng": -121.9893946
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01026",
    "address": "3902 Washington Blvd, Fremont, CA",
    "lat": 37.5315784,
    "lng": -121.9571543
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01529",
    "address": "6150 Bollinger Rd, San Jose, CA",
    "lat": 37.3098269,
    "lng": -122.0117328
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01160",
    "address": "699 Lewelling Blvd, San Leandro, CA",
    "lat": 37.68938,
    "lng": -122.1382224
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00479",
    "address": "555 Grand Ave, San Marcos, CA",
    "lat": 33.135105,
    "lng": -117.1763246
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00502",
    "address": "151 Woodland Pkwy, San Marcos, CA",
    "lat": 33.140206,
    "lng": -117.138871
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00877",
    "address": "1929 W San Marcos Blvd, San Marcos, CA",
    "lat": 33.1319118,
    "lng": -117.2109589
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01022",
    "address": "1571 San Elijo Rd, San Marcos, CA",
    "lat": 33.096924,
    "lng": -117.199651
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01134",
    "address": "100 De Anza Blvd, San Mateo, CA",
    "lat": 37.5207748,
    "lng": -122.3378724
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01260",
    "address": "1655 S El Camino Real, San Mateo, CA",
    "lat": 37.5533511,
    "lng": -122.3136649
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01039",
    "address": "11060 Bollinger Canyon Rd, San Ramon, CA",
    "lat": 37.7749163,
    "lng": -121.92208
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00320",
    "address": "2140 S Bristol St, Santa Ana, CA",
    "lat": 33.7179374,
    "lng": -117.8866273
  },
  {
    "retailer": "Vons",
    "machineId": "Q00414",
    "address": "3650 S Bristol St, Santa Ana, CA",
    "lat": 33.7267812,
    "lng": -117.8852475
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00478",
    "address": "23850 Copper Hill Dr, Santa Clarita, CA",
    "lat": 34.4630025,
    "lng": -118.5577675
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00487",
    "address": "27631 Bouquet Canyon Rd, Santa Clarita, CA",
    "lat": 34.4431732,
    "lng": -118.5108014
  },
  {
    "retailer": "Vons",
    "machineId": "Q01184",
    "address": "24160 Lyons Ave, Santa Clarita, CA",
    "lat": 34.3774985,
    "lng": -118.5570883
  },
  {
    "retailer": "Vons",
    "machineId": "Q01223",
    "address": "26518 Bouquet Canyon Rd, Santa Clarita, CA",
    "lat": 34.4270145,
    "lng": -118.5352336
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01656",
    "address": "19200 Soledad Canyon Rd, Santa Clarita, CA",
    "lat": 34.4157984,
    "lng": -118.4695931
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01338",
    "address": "2203 Mission St, Santa Cruz, CA",
    "lat": 36.9616709,
    "lng": -122.0450987
  },
  {
    "retailer": "Vons",
    "machineId": "Q00513",
    "address": "576 W Main St, Santa Paula, CA",
    "lat": 34.3446754,
    "lng": -119.0814549
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01514",
    "address": "406 N Main St, Sebastopol, CA",
    "lat": 38.4044911,
    "lng": -122.8271465
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00465",
    "address": "1268 Madera Rd, Simi Valley, CA",
    "lat": 34.2616862,
    "lng": -118.7945952
  },
  {
    "retailer": "Vons",
    "machineId": "Q00486",
    "address": "1855 Cochran St, Simi Valley, CA",
    "lat": 34.2802593,
    "lng": -118.7627413
  },
  {
    "retailer": "Vons",
    "machineId": "Q00504",
    "address": "2938 Tapo Canyon Rd, Simi Valley, CA",
    "lat": 34.288418,
    "lng": -118.7159986
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01536",
    "address": "477 W Napa St, Sonoma, CA",
    "lat": 38.2915744,
    "lng": -122.4675787
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01351",
    "address": "30 Chestnut Ave, South San Francisco, CA",
    "lat": 37.6556626,
    "lng": -122.4316791
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01532",
    "address": "2255 Gellert Blvd, South San Francisco, CA",
    "lat": 37.6465908,
    "lng": -122.45197
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01218",
    "address": "543 Sweetwater Rd, Spring Valley, CA",
    "lat": 32.708019,
    "lng": -117.008632
  },
  {
    "retailer": "Vons",
    "machineId": "Q01216",
    "address": "25850 The Old Rd, Stevenson Ranch, CA",
    "lat": 34.3908963,
    "lng": -118.5720597
  },
  {
    "retailer": "Ralphs",
    "machineId": "Q01690",
    "address": "24975 Pico Canyon Rd, Stevenson Ranch, CA",
    "lat": 34.3824922,
    "lng": -118.5743291
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00975",
    "address": "6445 Pacific Ave, Stockton, CA",
    "lat": 38.0085726,
    "lng": -121.3212546
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01057",
    "address": "2808 Country Club Blvd, Stockton, CA",
    "lat": 37.9623169,
    "lng": -121.3375412
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00611",
    "address": "639 S Bernardo Ave, Sunnyvale, CA",
    "lat": 37.3728682,
    "lng": -122.0580703
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01503",
    "address": "150 E El Camino Real, Sunnyvale, CA",
    "lat": 37.3644505,
    "lng": -122.0307183
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01185",
    "address": "40435 Winchester Rd, Temecula, CA",
    "lat": 33.511104,
    "lng": -117.1748147
  },
  {
    "retailer": "Vons",
    "machineId": "Q00507",
    "address": "2048 E Avenida de Los Arboles, Thousand Oaks, CA",
    "lat": 34.2098989,
    "lng": -118.8409332
  },
  {
    "retailer": "Vons",
    "machineId": "Q00423",
    "address": "4705 Torrance Blvd, Torrance, CA",
    "lat": 33.8383808,
    "lng": -118.3634924
  },
  {
    "retailer": "Vons",
    "machineId": "Q00706",
    "address": "24325 Crenshaw Blvd, Torrance, CA",
    "lat": 33.8051596,
    "lng": -118.3305412
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00972",
    "address": "1801 W 11th St, Tracy, CA",
    "lat": 37.7397724,
    "lng": -121.4523797
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00936",
    "address": "2800 Ygnacio Valley Rd, Walnut Creek, CA",
    "lat": 37.9272435,
    "lng": -122.0184678
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00248",
    "address": "615 N Azusa Ave, West Covina, CA",
    "lat": 34.081706,
    "lng": -117.90786
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00415",
    "address": "8969 Santa Monica Blvd, West Hollywood, CA",
    "lat": 34.0835953,
    "lng": -118.3869083
  },
  {
    "retailer": "Vons",
    "machineId": "Q00501",
    "address": "Westchester area, Los Angeles, CA",
    "lat": 34.054435,
    "lng": -118.315447
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00662",
    "address": "6755 Westminster Blvd, Westminster, CA",
    "lat": 33.7613614,
    "lng": -118.0091758
  },
  {
    "retailer": "Vons",
    "machineId": "Q00327",
    "address": "15740 La Forge St, Whittier, CA",
    "lat": 33.9584014,
    "lng": -118.0341868
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01524",
    "address": "9080 Brooks Rd, Windsor, CA",
    "lat": 38.5517658,
    "lng": -122.8062641
  },
  {
    "retailer": "Vons",
    "machineId": "Q01240",
    "address": "20445 Yorba Linda Blvd, Yorba Linda, CA",
    "lat": 33.8932761,
    "lng": -117.7756635
  },
  {
    "retailer": "Vons",
    "machineId": "Q00503",
    "address": "33644 Yucaipa Blvd, Yucaipa, CA",
    "lat": 34.035458,
    "lng": -117.0700924
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00332",
    "address": "1930 N Placentia Ave, Fullerton, CA",
    "lat": 33.8901073,
    "lng": -117.8722955
  },
  {
    "retailer": "Vons",
    "machineId": "Q00717",
    "address": "11861 Valley View St, Garden Grove, CA",
    "lat": 33.790065,
    "lng": -118.0292095
  },
  {
    "retailer": "Vons",
    "machineId": "Q00658",
    "address": "1260 W Redondo Beach Blvd, Gardena, CA",
    "lat": 33.8909612,
    "lng": -118.2980135
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00732",
    "address": "1735 Artesia Blvd, Gardena, CA",
    "lat": 33.8744377,
    "lng": -118.30826
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01249",
    "address": "1299 Artesia Blvd, Gardena, CA",
    "lat": 33.8726787,
    "lng": -118.296416
  },
  {
    "retailer": "Vons",
    "machineId": "Q00417",
    "address": "561 N Glendale Ave, Glendale, CA",
    "lat": 34.149686,
    "lng": -118.2460902
  },
  {
    "retailer": "Vons",
    "machineId": "Q00699",
    "address": "311 W Los Feliz Rd, Glendale, CA",
    "lat": 34.128741,
    "lng": -118.257988
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00427",
    "address": "133 W Rte 66, Glendora, CA",
    "lat": 34.1301933,
    "lng": -117.8649827
  },
  {
    "retailer": "Vons",
    "machineId": "Q01245",
    "address": "163 S Turnpike Rd, Goleta, CA",
    "lat": 34.437675,
    "lng": -119.7905544
  },
  {
    "retailer": "Vons",
    "machineId": "Q00707",
    "address": "2122 S Hacienda Blvd, Hacienda Heights, CA",
    "lat": 33.9950276,
    "lng": -117.967317
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01277",
    "address": "70 Cabrillo Hwy, Half Moon Bay, CA",
    "lat": 37.5006688,
    "lng": -122.4697579
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00315",
    "address": "14500 Ocean Gate Ave, Hawthorne, CA",
    "lat": 33.9023459,
    "lng": -118.3670768
  },
  {
    "retailer": "FoodMaxx",
    "machineId": "Q00626",
    "address": "27300 Hesperian Blvd, Hayward, CA",
    "lat": 37.6316648,
    "lng": -122.0973788
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01051",
    "address": "22280 Foothill Blvd, Hayward, CA",
    "lat": 37.6797282,
    "lng": -122.0833654
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01278",
    "address": "231 W Jackson St, Hayward, CA",
    "lat": 37.652683,
    "lng": -122.0914983
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01502",
    "address": "1115 Vine St, Healdsburg, CA",
    "lat": 38.6091801,
    "lng": -122.8734384
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00453",
    "address": "4602 W Florida Ave, Hemet, CA",
    "lat": 33.7440685,
    "lng": -117.020284
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00939",
    "address": "4080 San Pablo Ave, Hercules, CA",
    "lat": 38.0147921,
    "lng": -122.2716522
  },
  {
    "retailer": "Vons",
    "machineId": "Q00721",
    "address": "715 Pier Ave, Hermosa Beach, CA",
    "lat": 33.8659356,
    "lng": -118.3944844
  },
  {
    "retailer": "Vons",
    "machineId": "Q00322",
    "address": "5922 Edinger Ave, Huntington Beach, CA",
    "lat": 33.7285737,
    "lng": -118.0249531
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00325",
    "address": "7201 Yorktown Ave, Huntington Beach, CA",
    "lat": 33.6810114,
    "lng": -118.0026956
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00483",
    "address": "19640 Beach Blvd, Huntington Beach, CA",
    "lat": 33.6771299,
    "lng": -117.986945
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00418",
    "address": "6920 Santa Fe Ave, Huntington Park, CA",
    "lat": 33.9766583,
    "lng": -118.2301517
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00380",
    "address": "3200 W Century Blvd, Inglewood, CA",
    "lat": 33.944268,
    "lng": -118.32817
  },
  {
    "retailer": "Vons",
    "machineId": "Q00422",
    "address": "500 E Manchester Blvd, Inglewood, CA",
    "lat": 33.9602536,
    "lng": -118.3491685
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00416",
    "address": "14201 Jeffrey Rd, Irvine, CA",
    "lat": 33.6952442,
    "lng": -117.7654033
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00590",
    "address": "4541 Campus Dr, Irvine, CA",
    "lat": 33.6501866,
    "lng": -117.8313721
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01285",
    "address": "6601 Quail Hill Pkwy, Irvine, CA",
    "lat": 33.6559289,
    "lng": -117.7782885
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00922",
    "address": "12110 Industry Blvd, Jackson, CA",
    "lat": 38.3682067,
    "lng": -120.8000357
  },
  {
    "retailer": "Vons",
    "machineId": "Q01241",
    "address": "3233 Foothill Blvd, La Crescenta-Montrose, CA",
    "lat": 34.2191648,
    "lng": -118.2316989
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00583",
    "address": "1800 W Whittier Blvd, La Habra, CA",
    "lat": 33.9385624,
    "lng": -117.9661918
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00878",
    "address": "8920 Fletcher Pkwy, La Mesa, CA",
    "lat": 32.7876454,
    "lng": -117.0025564
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01777",
    "address": "15200 Rosecrans Ave, La Mirada, CA",
    "lat": 33.8969389,
    "lng": -118.0075959
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00338",
    "address": "1821 N Hacienda Blvd, La Puente, CA",
    "lat": 34.0522054,
    "lng": -117.944354
  },
  {
    "retailer": "Vons",
    "machineId": "Q00515",
    "address": "1600 Foothill Blvd, La Verne, CA",
    "lat": 34.114542,
    "lng": -117.7731607
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00498",
    "address": "27702 Crown Valley Pkwy B, Ladera Ranch, CA",
    "lat": 33.5625309,
    "lng": -117.6462368
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01007",
    "address": "30241 Golden Lantern, Laguna Niguel, CA",
    "lat": 33.5239976,
    "lng": -117.6877593
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00518",
    "address": "30901 Riverside Dr, Lake Elsinore, CA",
    "lat": 33.686074,
    "lng": -117.3670048
  },
  {
    "retailer": "Vons",
    "machineId": "Q00317",
    "address": "4226 Woodruff Ave, Lakewood, CA",
    "lat": 33.8350158,
    "lng": -118.115227
  },
  {
    "retailer": "Vons",
    "machineId": "Q00740",
    "address": "5500 Woodruff Ave, Lakewood, CA",
    "lat": 33.8566919,
    "lng": -118.1154313
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01286",
    "address": "3400 E South St, Lakewood, CA",
    "lat": 33.8602312,
    "lng": -118.1483832
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00987",
    "address": "1554 First St, Livermore, CA",
    "lat": 37.6804668,
    "lng": -121.777351
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01049",
    "address": "4495 First St, Livermore, CA",
    "lat": 37.6952764,
    "lng": -121.742953
  },
  {
    "retailer": "Vons",
    "machineId": "Q00654",
    "address": "1800-2000 Ximeno Ave, Long Beach, CA",
    "lat": 33.7837684,
    "lng": -118.1415104
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00720",
    "address": "3210 E Anaheim St, Long Beach, CA",
    "lat": 33.782506,
    "lng": -118.1543469
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01019",
    "address": "101 E Willow St, Long Beach, CA",
    "lat": 33.8054885,
    "lng": -118.19234
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01517",
    "address": "160 1st St, Los Altos, CA",
    "lat": 37.3790099,
    "lng": -122.1190225
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00177",
    "address": "28090 S Western Ave, Los Angeles, CA",
    "lat": 33.7647801,
    "lng": -118.3099129
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00319",
    "address": "9635 Laurel Canyon Blvd, Los Angeles, CA",
    "lat": 34.2445596,
    "lng": -118.417212
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00324",
    "address": "5100 N Figueroa St, Los Angeles, CA",
    "lat": 34.1054621,
    "lng": -118.2009727
  },
  {
    "retailer": "Vons",
    "machineId": "Q00336",
    "address": "3461 W 3rd St, Los Angeles, CA",
    "lat": 34.0697992,
    "lng": -118.290693
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00370",
    "address": "16530 Sherman Way, Los Angeles, CA",
    "lat": 34.2006469,
    "lng": -118.4940777
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00386",
    "address": "11507 S Western Ave, Los Angeles, CA",
    "lat": 33.9298129,
    "lng": -118.3090519
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00391",
    "address": "11840 Wilmington Ave, Los Angeles, CA",
    "lat": 33.9254011,
    "lng": -118.238858
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00410",
    "address": "336 W Anaheim St, Los Angeles, CA",
    "lat": 33.7787314,
    "lng": -118.2655659
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00411",
    "address": "18318 Vanowen St, Los Angeles, CA",
    "lat": 34.1937756,
    "lng": -118.532099
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00412",
    "address": "8035 Webb Ave, Los Angeles, CA",
    "lat": 34.2163535,
    "lng": -118.3884722
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00413",
    "address": "1820 W Slauson Ave, Los Angeles, CA",
    "lat": 33.9892099,
    "lng": -118.310332
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00419",
    "address": "16208 Parthenia St, Los Angeles, CA",
    "lat": 34.2273902,
    "lng": -118.4862419
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00420",
    "address": "2750 1st St, Los Angeles, CA",
    "lat": 34.0960706,
    "lng": -117.759779
  },
  {
    "retailer": "Vons",
    "machineId": "Q00425",
    "address": "4520 W Sunset Blvd, Los Angeles, CA",
    "lat": 34.0970683,
    "lng": -118.2879931
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00469",
    "address": "14845 Ventura Blvd, Los Angeles, CA",
    "lat": 34.1523342,
    "lng": -118.4567529
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00514",
    "address": "6534 Platt Ave, Los Angeles, CA",
    "lat": 34.1892898,
    "lng": -118.6414135
  },
  {
    "retailer": "Vons",
    "machineId": "Q00577",
    "address": "7789 Foothill Blvd, Los Angeles, CA",
    "lat": 34.2591937,
    "lng": -118.3011841
  },
  {
    "retailer": "Vons",
    "machineId": "Q00702",
    "address": "16830 San Fernando Mission Blvd, Los Angeles, CA",
    "lat": 34.2709502,
    "lng": -118.4989341
  },
  {
    "retailer": "Vons",
    "machineId": "Q00719",
    "address": "7311 N Figueroa St, Los Angeles, CA",
    "lat": 34.1362211,
    "lng": -118.1895122
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01694",
    "address": "12689 Glenoaks Blvd, Los Angeles, CA",
    "lat": 34.300871,
    "lng": -118.441173
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00978",
    "address": "470 N Santa Cruz Ave, Los Gatos, CA",
    "lat": 37.231425,
    "lng": -121.9790836
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00983",
    "address": "15549 Union Ave, Los Gatos, CA",
    "lat": 37.2422274,
    "lng": -121.931288
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00980",
    "address": "1187 S Main St, Manteca, CA",
    "lat": 37.7866677,
    "lng": -121.2187639
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00512",
    "address": "4365 Glencoe Ave, Marina del Rey, CA",
    "lat": 33.985944,
    "lng": -118.438395
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01109",
    "address": "6688 Alhambra Ave, Martinez, CA",
    "lat": 37.9579697,
    "lng": -122.0939203
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01330",
    "address": "525 El Camino Real, Menlo Park, CA",
    "lat": 37.4505561,
    "lng": -122.1792211
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01510",
    "address": "525 El Camino Real, Millbrae, CA",
    "lat": 37.603347,
    "lng": -122.3941351
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00982",
    "address": "555 E Calaveras Blvd, Milpitas, CA",
    "lat": 37.4350065,
    "lng": -121.8980289
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00575",
    "address": "23072 Alicia Pkwy, Mission Viejo, CA",
    "lat": 33.6275644,
    "lng": -117.6361381
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q01270",
    "address": "26022 Marguerite Pkwy, Mission Viejo, CA",
    "lat": 33.585968,
    "lng": -117.6575
  },
  {
    "retailer": "Vons",
    "machineId": "Q00335",
    "address": "130 W Foothill Blvd, Monrovia, CA",
    "lat": 34.1500872,
    "lng": -118.0020215
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00704",
    "address": "2469 Via Campo, Montebello, CA",
    "lat": 34.0327006,
    "lng": -118.1231238
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01233",
    "address": "1355 Moraga Way, Moraga, CA",
    "lat": 37.8363111,
    "lng": -122.1284438
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00497",
    "address": "12880 Day St, Moreno Valley, CA",
    "lat": 33.9328068,
    "lng": -117.2787181
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01796",
    "address": "24440 Alessandro Blvd, Moreno Valley, CA",
    "lat": 33.917663,
    "lng": -117.2364131
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00932",
    "address": "235 Tennant Station, Morgan Hill, CA",
    "lat": 37.1130037,
    "lng": -121.6398591
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00985",
    "address": "840 E Dunne Ave, Morgan Hill, CA",
    "lat": 37.1287525,
    "lng": -121.6364085
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01271",
    "address": "645 San Antonio Rd, Mountain View, CA",
    "lat": 37.4017803,
    "lng": -122.1118102
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01513",
    "address": "1750 Miramonte Ave, Mountain View, CA",
    "lat": 37.3723596,
    "lng": -122.0884332
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01538",
    "address": "570 N Shoreline Blvd, Mountain View, CA",
    "lat": 37.4031206,
    "lng": -122.079306
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00485",
    "address": "39140 Winchester Rd, Murrieta, CA",
    "lat": 33.5510746,
    "lng": -117.1386363
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00495",
    "address": "41000 California Oaks Rd, Murrieta, CA",
    "lat": 33.5669149,
    "lng": -117.2037013
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00995",
    "address": "21181 Newport Coast Dr, Newport Beach, CA",
    "lat": 33.6067259,
    "lng": -117.8277769
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01519",
    "address": "5720 Nave Dr, Novato, CA",
    "lat": 38.0622832,
    "lng": -122.5321241
  },
  {
    "retailer": "FoodMaxx",
    "machineId": "Q00984",
    "address": "3000 E 9th St, Oakland, CA",
    "lat": 37.775348,
    "lng": -122.232657
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01126",
    "address": "5100 Broadway, Oakland, CA",
    "lat": 37.8349098,
    "lng": -122.2486398
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01164",
    "address": "4100 Redwood Rd, Oakland, CA",
    "lat": 37.7983444,
    "lng": -122.1824303
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01267",
    "address": "6310 College Ave, Oakland, CA",
    "lat": 37.8506699,
    "lng": -122.2518853
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00668",
    "address": "3450 Marron Rd, Oceanside, CA",
    "lat": 33.1796149,
    "lng": -117.296568
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00751",
    "address": "4150 Oceanside Blvd, Oceanside, CA",
    "lat": 33.2077688,
    "lng": -117.2873378
  },
  {
    "retailer": "Vons",
    "machineId": "Q01005",
    "address": "845 College Blvd, Oceanside, CA",
    "lat": 33.240759,
    "lng": -117.2947536
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01300",
    "address": "2245 S El Camino Real, Oceanside, CA",
    "lat": 33.1854438,
    "lng": -117.3303745
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01176",
    "address": "2246 S Euclid Ave, Ontario, CA",
    "lat": 34.0325371,
    "lng": -117.651154
  },
  {
    "retailer": "Vons",
    "machineId": "Q00591",
    "address": "2684 N Tustin St, Orange, CA",
    "lat": 33.833415,
    "lng": -117.8375236
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01251",
    "address": "8701 Greenback Ln, Orangevale, CA",
    "lat": 38.6798644,
    "lng": -121.2338152
  },
  {
    "retailer": "Vons",
    "machineId": "Q00494",
    "address": "2101 N Rose Ave, Oxnard, CA",
    "lat": 34.2221039,
    "lng": -119.161801
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01344",
    "address": "1380 Linda Mar Shopping Center, Pacifica, CA",
    "lat": 37.5938961,
    "lng": -122.5035973
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01387",
    "address": "709 Hickey Blvd, Pacifica, CA",
    "lat": 37.6609627,
    "lng": -122.4778321
  },
  {
    "retailer": "Vons",
    "machineId": "Q00372",
    "address": "2355 E Colorado Blvd, Pasadena, CA",
    "lat": 34.1476223,
    "lng": -118.1021041
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01492",
    "address": "701 Sonoma Mountain Pkwy, Petaluma, CA",
    "lat": 38.2697049,
    "lng": -122.6389113
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01525",
    "address": "389 S McDowell Blvd, Petaluma, CA",
    "lat": 38.2489174,
    "lng": -122.6219218
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00969",
    "address": "3955 Missouri Flat Rd, Placerville, CA",
    "lat": 38.7143176,
    "lng": -120.8397041
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00967",
    "address": "600 Patterson Blvd, Pleasant Hill, CA",
    "lat": 37.9341793,
    "lng": -122.0722507
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01031",
    "address": "1978 Contra Costa Blvd, Pleasant Hill, CA",
    "lat": 37.9489693,
    "lng": -122.0579725
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01148",
    "address": "707 Contra Costa Blvd, Pleasant Hill, CA",
    "lat": 37.9711448,
    "lng": -122.0616534
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00944",
    "address": "1701 Santa Rita Rd, Pleasanton, CA",
    "lat": 37.6748083,
    "lng": -121.8744273
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01236",
    "address": "90 Rio Rancho Rd, Pomona, CA",
    "lat": 34.02703,
    "lng": -117.7622
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00935",
    "address": "10635 Folsom Blvd, Rancho Cordova, CA",
    "lat": 38.5955284,
    "lng": -121.2933482
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00468",
    "address": "11358 Kenyon Way, Rancho Cucamonga, CA",
    "lat": 34.1354126,
    "lng": -117.5574085
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00475",
    "address": "450 E Cypress Ave, Redlands, CA",
    "lat": 34.0484968,
    "lng": -117.1713565
  },
  {
    "retailer": "Vons",
    "machineId": "Q00741",
    "address": "4001 Inglewood Ave, Redondo Beach, CA",
    "lat": 33.8929468,
    "lng": -118.362459
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00500",
    "address": "2975 Van Buren Boulevard, Riverside, CA",
    "lat": 33.9098993,
    "lng": -117.436339
  },
  {
    "retailer": "Vons",
    "machineId": "Q01097",
    "address": "3520 Riverside Plaza Dr, Riverside, CA",
    "lat": 33.9546904,
    "lng": -117.3895185
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01129",
    "address": "4250 Van Buren Boulevard, Riverside, CA",
    "lat": 33.9275443,
    "lng": -117.4533573
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00631",
    "address": "2220 Sunset Blvd, Rocklin, CA",
    "lat": 38.8028836,
    "lng": -121.2742712
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00603",
    "address": "6340 Commerce Blvd, Rohnert Park, CA",
    "lat": 38.347619,
    "lng": -122.708387
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q00714",
    "address": "7 Peninsula Center, Rolling Hills Estates, CA",
    "lat": 33.7745314,
    "lng": -118.3763054
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00923",
    "address": "8640 Sierra College Blvd, Roseville, CA",
    "lat": 38.7419805,
    "lng": -121.2284967
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00927",
    "address": "1080 Pleasant Grove Blvd, Roseville, CA",
    "lat": 38.7774034,
    "lng": -121.2916016
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00929",
    "address": "989 Sunrise Ave, Roseville, CA",
    "lat": 38.7309769,
    "lng": -121.2713358
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00988",
    "address": "9045 Woodcreek Oaks Blvd, Roseville, CA",
    "lat": 38.794003,
    "lng": -121.3306334
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00924",
    "address": "1814 19th St, Sacramento, CA",
    "lat": 38.567937,
    "lng": -121.4862182
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00926",
    "address": "1025 Alhambra Blvd, Sacramento, CA",
    "lat": 38.571612,
    "lng": -121.464612
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00933",
    "address": "3320 Arden Wy, Sacramento, CA",
    "lat": 38.5945686,
    "lng": -121.3866436
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00968",
    "address": "8377 Elk Grove Florin Rd, Sacramento, CA",
    "lat": 38.4534044,
    "lng": -121.3700104
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01522",
    "address": "5345 Elkhorn Blvd, Sacramento, CA",
    "lat": 38.6864834,
    "lng": -121.3394386
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01534",
    "address": "2300 Watt Ave, Sacramento, CA",
    "lat": 38.6072589,
    "lng": -121.381167
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01537",
    "address": "2851 Del Paso Rd, Sacramento, CA",
    "lat": 38.6576986,
    "lng": -121.5247511
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01500",
    "address": "838 Sir Francis Drake Blvd, San Anselmo, CA",
    "lat": 37.9807253,
    "lng": -122.5640939
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00521",
    "address": "804 Avenida Pico, San Clemente, CA",
    "lat": 33.4428242,
    "lng": -117.6139483
  },
  {
    "retailer": "Pavilions",
    "machineId": "Q01291",
    "address": "989 Avenida Pico, San Clemente, CA",
    "lat": 33.4567197,
    "lng": -117.6033615
  },
  {
    "retailer": "Vons",
    "machineId": "Q00489",
    "address": "620 Dennery Rd, San Diego, CA",
    "lat": 32.5831392,
    "lng": -117.0346611
  },
  {
    "retailer": "Vons",
    "machineId": "Q00492",
    "address": "11986 Bernardo Plaza Dr, San Diego, CA",
    "lat": 33.0209308,
    "lng": -117.0722018
  },
  {
    "retailer": "Vons",
    "machineId": "Q00499",
    "address": "6155 El Cajon Blvd, San Diego, CA",
    "lat": 32.7609208,
    "lng": -117.0649087
  },
  {
    "retailer": "Vons",
    "machineId": "Q00505",
    "address": "8310 Mira Mesa Blvd, San Diego, CA",
    "lat": 32.9152435,
    "lng": -117.1447578
  },
  {
    "retailer": "Vons",
    "machineId": "Q00506",
    "address": "515 Washington St, San Diego, CA",
    "lat": 32.7498654,
    "lng": -117.1601532
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00572",
    "address": "12475 Rancho Bernardo Rd, San Diego, CA",
    "lat": 33.0177351,
    "lng": -117.061323
  },
  {
    "retailer": "Vons",
    "machineId": "Q00576",
    "address": "7544 Girard Ave, San Diego, CA",
    "lat": 32.8417228,
    "lng": -117.2735782
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00581",
    "address": "8650 Lake Murray Blvd, San Diego, CA",
    "lat": 32.8016326,
    "lng": -117.0132403
  },
  {
    "retailer": "Vons",
    "machineId": "Q00592",
    "address": "4145 30th St, San Diego, CA",
    "lat": 32.7531926,
    "lng": -117.129518
  },
  {
    "retailer": "Vons",
    "machineId": "Q00615",
    "address": "4725 Clairemont Dr, San Diego, CA",
    "lat": 32.8296026,
    "lng": -117.204776
  },
  {
    "retailer": "Vons",
    "machineId": "Q00888",
    "address": "3550 Murphy Canyon Rd, San Diego, CA",
    "lat": 32.8086337,
    "lng": -117.1159837
  },
  {
    "retailer": "Vons",
    "machineId": "Q00889",
    "address": "10675 Scripps Poway Pkwy, San Diego, CA",
    "lat": 32.9353238,
    "lng": -117.0984971
  },
  {
    "retailer": "Vons",
    "machineId": "Q01266",
    "address": "7895 Highlands Village Pl, San Diego, CA",
    "lat": 32.9610169,
    "lng": -117.1536689
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00496",
    "address": "220 E Bonita Ave, San Dimas, CA",
    "lat": 34.1059633,
    "lng": -117.8034836
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00920",
    "address": "735 7th Ave, San Francisco, CA",
    "lat": 37.7744934,
    "lng": -122.465464
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01335",
    "address": "850 La Playa St, San Francisco, CA",
    "lat": 37.7724985,
    "lng": -122.5093676
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01345",
    "address": "5290 Diamond Heights Blvd, San Francisco, CA",
    "lat": 37.7435713,
    "lng": -122.4389441
  },
  {
    "retailer": "Lucky",
    "machineId": "Q00921",
    "address": "3457 McKee Rd, San Jose, CA",
    "lat": 37.3809384,
    "lng": -121.8293241
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00925",
    "address": "5760 Cottle Rd, San Jose, CA",
    "lat": 37.2463125,
    "lng": -121.80287
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00934",
    "address": "1663 Branham Ln, San Jose, CA",
    "lat": 37.2530689,
    "lng": -121.908345
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00937",
    "address": "4950 Almaden Expy, San Jose, CA",
    "lat": 37.2601283,
    "lng": -121.8744879
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00986",
    "address": "179 Branham Ln, San Jose, CA",
    "lat": 37.2672677,
    "lng": -121.8331876
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00991",
    "address": "1530 Hamilton Ave, San Jose, CA",
    "lat": 37.2932068,
    "lng": -121.9109793
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01526",
    "address": "5146 Stevens Creek Blvd, San Jose, CA",
    "lat": 37.3204638,
    "lng": -121.9927684
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00623",
    "address": "1799 Marlow Rd, Santa Rosa, CA",
    "lat": 38.4520178,
    "lng": -122.7528343
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00632",
    "address": "100 Calistoga Rd, Santa Rosa, CA",
    "lat": 38.4656347,
    "lng": -122.6516221
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00672",
    "address": "2300 Mendocino Ave, Santa Rosa, CA",
    "lat": 38.4635534,
    "lng": -122.7173537
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00976",
    "address": "2751 4th St, Santa Rosa, CA",
    "lat": 38.4509453,
    "lng": -122.6910553
  },
  {
    "retailer": "FoodMaxx",
    "machineId": "Q01256",
    "address": "2055 Sebastopol Rd, Santa Rosa, CA",
    "lat": 38.4271787,
    "lng": -122.7435841
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01339",
    "address": "1211 W College Ave, Santa Rosa, CA",
    "lat": 38.4463291,
    "lng": -122.7413217
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01484",
    "address": "2785 Yulupa Ave, Santa Rosa, CA",
    "lat": 38.4257611,
    "lng": -122.6684837
  },
  {
    "retailer": "Vons",
    "machineId": "Q01655",
    "address": "9643 Mission Gorge Rd, Santee, CA",
    "lat": 32.8372097,
    "lng": -116.9869854
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01521",
    "address": "12876 Saratoga Sunnyvale Rd, Saratoga, CA",
    "lat": 37.2812174,
    "lng": -122.0311207
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01331",
    "address": "253 Mt Hermon Rd, Scotts Valley, CA",
    "lat": 37.0462051,
    "lng": -122.0310533
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01325",
    "address": "2850 Pavilion Pkwy, Tracy, CA",
    "lat": 37.506367,
    "lng": -120.866244
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00348",
    "address": "13270 Newport Ave, Tustin, CA",
    "lat": 33.745182,
    "lng": -117.8128455
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00979",
    "address": "1790 Decoto Rd, Union City, CA",
    "lat": 37.5877404,
    "lng": -122.019424
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00661",
    "address": "1910 N Campus Ave, Upland, CA",
    "lat": 34.1311778,
    "lng": -117.6376319
  },
  {
    "retailer": "Vons",
    "machineId": "Q00731",
    "address": "101 W Foothill Blvd, Upland, CA",
    "lat": 34.1068115,
    "lng": -117.651567
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01346",
    "address": "2090 Harbison Dr, Vacaville, CA",
    "lat": 38.3620558,
    "lng": -121.9616859
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01523",
    "address": "122 Robles Way, Vallejo, CA",
    "lat": 38.0844973,
    "lng": -122.2102302
  },
  {
    "retailer": "Vons",
    "machineId": "Q01123",
    "address": "115 W Main St, Ventura, CA",
    "lat": 34.2824495,
    "lng": -119.3023392
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00488",
    "address": "1301 E Vista Way, Vista, CA",
    "lat": 33.2185202,
    "lng": -117.224407
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00516",
    "address": "1601 S Melrose Dr, Vista, CA",
    "lat": 33.1666728,
    "lng": -117.248145
  },
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
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00912",
    "address": "14280 Marsh Ln, Addison, TX",
    "lat": 32.9383871,
    "lng": -96.8536294
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00950",
    "address": "3770 Belt Line Rd, Addison, TX",
    "lat": 32.9504773,
    "lng": -96.8528546
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00454",
    "address": "1320 W McDermott Dr, Allen, TX",
    "lat": 33.1025302,
    "lng": -96.7004774
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00903",
    "address": "1212 E Bethany Dr, Allen, TX",
    "lat": 33.0825529,
    "lng": -96.6444872
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00911",
    "address": "1210 N Greenville Ave, Allen, TX",
    "lat": 33.1158588,
    "lng": -96.649704
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00297",
    "address": "3100 S Gordon St, Alvin, TX",
    "lat": 29.4044997,
    "lng": -95.2446754
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00906",
    "address": "2755 N Collins St, Arlington, TX",
    "lat": 32.7832279,
    "lng": -97.0934464
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01648",
    "address": "4620 S Cooper St, Arlington, TX",
    "lat": 32.6736227,
    "lng": -97.1394016
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01660",
    "address": "301 S Bowen Rd, Arlington, TX",
    "lat": 32.7331879,
    "lng": -97.1485975
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01676",
    "address": "945 W Lamar Blvd, Arlington, TX",
    "lat": 32.7627623,
    "lng": -97.117787
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01679",
    "address": "2350 SE Green Oaks Blvd, Arlington, TX",
    "lat": 32.6592573,
    "lng": -97.0660912
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00778",
    "address": "7901 US-290, Austin, TX",
    "lat": 30.1987759,
    "lng": -97.6324856
  },
  {
    "retailer": "Randalls",
    "machineId": "Q01499",
    "address": "9911 Brodie Ln, Austin, TX",
    "lat": 30.1840996,
    "lng": -97.8476548
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01594",
    "address": "12407 MoPac Expy N, Austin, TX",
    "lat": 30.450078,
    "lng": -97.6947417
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01634",
    "address": "2508 E Riverside Dr, Austin, TX",
    "lat": 30.2365912,
    "lng": -97.7221483
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01635",
    "address": "7301 N FM 620, Austin, TX",
    "lat": 30.4321059,
    "lng": -97.8415413
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01644",
    "address": "11521 N FM 620, Austin, TX",
    "lat": 30.4321059,
    "lng": -97.8415413
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00908",
    "address": "480 NW Pkwy St, Azle, TX",
    "lat": 32.8993216,
    "lng": -97.5452546
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00771",
    "address": "1700 N Alexander Dr, Baytown, TX",
    "lat": 29.7402016,
    "lng": -94.9520568
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01592",
    "address": "6315 Garth Rd, Baytown, TX",
    "lat": 29.7923441,
    "lng": -94.9829718
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01649",
    "address": "12400 State Hwy 71 W, Bee Cave, TX",
    "lat": 30.303589,
    "lng": -97.933367
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00541",
    "address": "5106 Bissonnet St, Bellaire, TX",
    "lat": 29.7073672,
    "lng": -95.4697763
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00960",
    "address": "833 NE Alsbury Blvd, Burleson, TX",
    "lat": 32.5650368,
    "lng": -97.3222267
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00477",
    "address": "2620 N Josey Ln, Carrollton, TX",
    "lat": 32.9867344,
    "lng": -96.8889746
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00914",
    "address": "2150 N Josey Ln, Carrollton, TX",
    "lat": 32.9752204,
    "lng": -96.8879547
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01642",
    "address": "2800 E Whitestone Blvd, Cedar Park, TX",
    "lat": 30.5320744,
    "lng": -97.7852575
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01659",
    "address": "1617 W Henderson St, Cleburne, TX",
    "lat": 32.3370891,
    "lng": -97.4130238
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00376",
    "address": "2222 Interstate 45 N, Conroe, TX",
    "lat": 30.3361865,
    "lng": -95.4770186
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00408",
    "address": "341 S Loop 336 W, Conroe, TX",
    "lat": 30.2763123,
    "lng": -95.4649526
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01590",
    "address": "10200 TX-242, Conroe, TX",
    "lat": 30.206272,
    "lng": -95.4252943
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01638",
    "address": "3601 FM 1488, Conroe, TX",
    "lat": 30.2301209,
    "lng": -95.5062788
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00915",
    "address": "106 N Denton Tap Rd, Coppell, TX",
    "lat": 32.9708202,
    "lng": -96.9918493
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00953",
    "address": "4351 FM2181, Corinth, TX",
    "lat": 33.062621,
    "lng": -99.662236
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00522",
    "address": "14100 Spring Cypress Rd, Cypress, TX",
    "lat": 30.0029976,
    "lng": -95.6391062
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00524",
    "address": "9722 Fry Rd, Cypress, TX",
    "lat": 29.9514474,
    "lng": -95.7039641
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00530",
    "address": "24224 Northwest Fwy, Cypress, TX",
    "lat": 29.9576583,
    "lng": -95.6733408
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00557",
    "address": "9703 Barker Cypress Rd, Cypress, TX",
    "lat": 29.9189946,
    "lng": -95.6896328
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00558",
    "address": "17455 Spring Cypress Rd, Cypress, TX",
    "lat": 29.970999,
    "lng": -95.6901034
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00777",
    "address": "20355 Cypresswood Dr, Cypress, TX",
    "lat": 29.9901901,
    "lng": -95.7365269
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00531",
    "address": "4625 Frankford Rd, Dallas, TX",
    "lat": 32.9993162,
    "lng": -96.8274576
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00901",
    "address": "3757 Forest Ln, Dallas, TX",
    "lat": 32.910871,
    "lng": -96.8530227
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00902",
    "address": "5809 E Lovers Ln, Dallas, TX",
    "lat": 32.8522474,
    "lng": -96.7670596
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00964",
    "address": "17194 Preston Rd, Dallas, TX",
    "lat": 32.9833545,
    "lng": -96.8007249
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00881",
    "address": "1001 N Beckley Ave, DeSoto, TX",
    "lat": 32.611131,
    "lng": -96.82349
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00965",
    "address": "1592 S Loop 288, Denton, TX",
    "lat": 33.1952454,
    "lng": -97.0957465
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00896",
    "address": "633 W Wheatland Rd, Duncanville, TX",
    "lat": 32.6482413,
    "lng": -96.922814
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01667",
    "address": "200 W Camp Wisdom Rd, Duncanville, TX",
    "lat": 32.660558,
    "lng": -96.9092426
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00484",
    "address": "745 Cross Timbers Rd, Flower Mound, TX",
    "lat": 33.0410007,
    "lng": -97.0381776
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00910",
    "address": "1101 Flower Mound Rd, Flower Mound, TX",
    "lat": 33.009627,
    "lng": -97.0469176
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00956",
    "address": "2709 Cross Timbers Rd, Flower Mound, TX",
    "lat": 33.034829,
    "lng": -97.0722204
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01640",
    "address": "500 Marketplace Blvd, Forney, TX",
    "lat": 32.7488444,
    "lng": -96.450027
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00452",
    "address": "9300 Clifford St, Fort Worth, TX",
    "lat": 32.7663675,
    "lng": -97.4779043
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00461",
    "address": "8000 Crowley Rd, Fort Worth, TX",
    "lat": 32.6329136,
    "lng": -97.3496041
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00895",
    "address": "3100 S Hulen St, Fort Worth, TX",
    "lat": 32.7059691,
    "lng": -97.3901219
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00907",
    "address": "850 E Loop 820, Fort Worth, TX",
    "lat": 32.7673623,
    "lng": -97.2151148
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00948",
    "address": "5241 N Tarrant Pkwy, Fort Worth, TX",
    "lat": 32.8960259,
    "lng": -97.2703604
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00958",
    "address": "1653 Basswood Blvd, Fort Worth, TX",
    "lat": 32.872523,
    "lng": -97.3401579
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00546",
    "address": "151 N Friendswood Dr, Friendswood, TX",
    "lat": 29.5343618,
    "lng": -95.2067864
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01646",
    "address": "3205 Main St, Frisco, TX",
    "lat": 33.1509841,
    "lng": -96.8618951
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00554",
    "address": "5730 Seawall Blvd, Galveston, TX",
    "lat": 29.269045,
    "lng": -94.8241543
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00528",
    "address": "1122 W Centerville Rd, Garland, TX",
    "lat": 32.8550625,
    "lng": -96.64388
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00917",
    "address": "532 W Interstate 30, Garland, TX",
    "lat": 32.8376568,
    "lng": -96.59681
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01653",
    "address": "6850 N Shiloh Rd, Garland, TX",
    "lat": 32.9772048,
    "lng": -96.6638413
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00897",
    "address": "4215 S Carrier Pkwy, Grand Prairie, TX",
    "lat": 32.6712413,
    "lng": -97.0033323
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01680",
    "address": "313 E Pioneer Pkwy, Grand Prairie, TX",
    "lat": 32.7082744,
    "lng": -97.0011015
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00288",
    "address": "12222 Jones Rd, Houston, TX",
    "lat": 29.9517978,
    "lng": -95.5823595
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00294",
    "address": "10306 S Post Oak Rd, Houston, TX",
    "lat": 29.6692873,
    "lng": -95.4639635
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00298",
    "address": "12434 TX-249, Houston, TX",
    "lat": 29.912261,
    "lng": -95.4778844
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00299",
    "address": "9919 Westheimer Rd, Houston, TX",
    "lat": 29.7364463,
    "lng": -95.5453618
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00300",
    "address": "16400 El Camino Real, Houston, TX",
    "lat": 29.558593,
    "lng": -95.1247749
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00302",
    "address": "11701 East Sam Houston Pkwy S, Houston, TX",
    "lat": 29.6191285,
    "lng": -95.1859588
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00308",
    "address": "13133 Veterans Memorial Dr, Houston, TX",
    "lat": 29.9768174,
    "lng": -95.4915026
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00309",
    "address": "1801 S Voss Rd, Houston, TX",
    "lat": 29.7482313,
    "lng": -95.5001039
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00312",
    "address": "1440 Studemont St, Houston, TX",
    "lat": 29.7732921,
    "lng": -95.3898464
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00389",
    "address": "360 Cypress Creek Pkwy, Houston, TX",
    "lat": 30.0218444,
    "lng": -95.4340646
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00390",
    "address": "1505 Wirt Rd, Houston, TX",
    "lat": 29.7968241,
    "lng": -95.4864439
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00394",
    "address": "10010 Cypresswood Dr, Houston, TX",
    "lat": 29.9833087,
    "lng": -95.5659242
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00395",
    "address": "1520 Eldridge Pkwy, Houston, TX",
    "lat": 29.7574967,
    "lng": -95.6274609
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00396",
    "address": "1035 N Shepherd Dr, Houston, TX",
    "lat": 29.7896319,
    "lng": -95.4112065
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00402",
    "address": "12400 Farm to Market 1960 Rd W, Houston, TX",
    "lat": 29.922788,
    "lng": -95.602501
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00405",
    "address": "2300 Gessner Rd, Houston, TX",
    "lat": 29.8140044,
    "lng": -95.5440308
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00406",
    "address": "6322 Telephone Rd, Houston, TX",
    "lat": 29.6748622,
    "lng": -95.2910328
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00451",
    "address": "4955 Beechnut St, Houston, TX",
    "lat": 29.6885871,
    "lng": -95.4640853
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00456",
    "address": "9303 S Texas 6, Houston, TX",
    "lat": 29.6782695,
    "lng": -95.6410218
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00457",
    "address": "12680 W Lake Houston Pkwy, Houston, TX",
    "lat": 29.9228665,
    "lng": -95.1969807
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00462",
    "address": "19529 Northpark Dr, Houston, TX",
    "lat": 30.0686028,
    "lng": -95.2516844
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00520",
    "address": "10919 Louetta Rd, Houston, TX",
    "lat": 29.9953233,
    "lng": -95.57623
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00526",
    "address": "9503 Jones Rd, Houston, TX",
    "lat": 29.9109634,
    "lng": -95.586036
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00538",
    "address": "5895 San Felipe St, Houston, TX",
    "lat": 29.7480615,
    "lng": -95.4851633
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00542",
    "address": "2300 N Shepherd Dr, Houston, TX",
    "lat": 29.8074095,
    "lng": -95.4089229
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00543",
    "address": "1550 Fry Rd, Houston, TX",
    "lat": 29.7896748,
    "lng": -95.7169503
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00553",
    "address": "3131 W Holcombe Blvd, Houston, TX",
    "lat": 29.7048518,
    "lng": -95.425826
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00555",
    "address": "14221 East Sam Houston Pkwy N, Houston, TX",
    "lat": 29.924657,
    "lng": -95.2038247
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00560",
    "address": "3410 Northpark Dr, Houston, TX",
    "lat": 30.0666789,
    "lng": -95.1871315
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00562",
    "address": "2225 Louisiana St, Houston, TX",
    "lat": 29.7489591,
    "lng": -95.3744314
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00565",
    "address": "9330 Jones Rd, Houston, TX",
    "lat": 29.9079165,
    "lng": -95.5835716
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00768",
    "address": "9325 Katy Fwy, Houston, TX",
    "lat": 29.7823174,
    "lng": -95.5221864
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00773",
    "address": "12850 Memorial Dr, Houston, TX",
    "lat": 29.7738464,
    "lng": -95.5593498
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01639",
    "address": "12620 Woodforest Blvd, Houston, TX",
    "lat": 29.7896701,
    "lng": -95.2003478
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00387",
    "address": "19300 W Lake Houston Pkwy, Humble, TX",
    "lat": 30.0010805,
    "lng": -95.1609227
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00566",
    "address": "9475 Farm to Market 1960 Bypass Rd W, Humble, TX",
    "lat": 29.998631,
    "lng": -95.16209
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00464",
    "address": "1702 11th St, Huntsville, TX",
    "lat": 30.7226916,
    "lng": -95.560487
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01663",
    "address": "7505 N MacArthur Blvd, Irving, TX",
    "lat": 32.9085961,
    "lng": -96.960643
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00296",
    "address": "22150 Westheimer Pkwy, Katy, TX",
    "lat": 29.7355865,
    "lng": -95.7537786
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00313",
    "address": "1712 Spring Green Blvd, Katy, TX",
    "lat": 29.7628096,
    "lng": -95.8439025
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00378",
    "address": "9806 Gaston Rd, Katy, TX",
    "lat": 29.7366647,
    "lng": -95.8100139
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00397",
    "address": "2700 W Grand Pkwy N, Katy, TX",
    "lat": 29.8129933,
    "lng": -95.7703462
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00532",
    "address": "25675 Nelson Way, Katy, TX",
    "lat": 29.773357,
    "lng": -95.8224297
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00535",
    "address": "6711 S Fry Rd, Katy, TX",
    "lat": 29.7127645,
    "lng": -95.7758771
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00757",
    "address": "6055 N Fry Rd, Katy, TX",
    "lat": 29.860078,
    "lng": -95.7217055
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00905",
    "address": "2061 Rufe Snow Dr, Keller, TX",
    "lat": 32.8969675,
    "lng": -97.2367987
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01643",
    "address": "976 Keller Pkwy, Keller, TX",
    "lat": 32.932224,
    "lng": -97.2302768
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00381",
    "address": "1300 W Fairmont Pkwy, La Porte, TX",
    "lat": 29.6535678,
    "lng": -95.0321936
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00400",
    "address": "1920 W League City Pkwy, League City, TX",
    "lat": 29.488508,
    "lng": -95.113496
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00551",
    "address": "2750 E League City Pkwy, League City, TX",
    "lat": 29.50898,
    "lng": -95.036433
  },
  {
    "retailer": "Randalls",
    "machineId": "Q00763",
    "address": "2951 Marina Bay Dr Suite B, League City, TX",
    "lat": 29.5386368,
    "lng": -95.0631659
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01542",
    "address": "4620 State Hwy 121, Lewisville, TX",
    "lat": 33.081054,
    "lng": -96.855703
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01641",
    "address": "1288 W Main St, Lewisville, TX",
    "lat": 33.0399824,
    "lng": -97.0258503
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01657",
    "address": "3001 Matlock Rd, Mansfield, TX",
    "lat": 32.6073364,
    "lng": -97.1181167
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00490",
    "address": "3001 S Central Expy, McKinney, TX",
    "lat": 33.1698571,
    "lng": -96.6381381
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00534",
    "address": "1801 N Lake Forest Dr, McKinney, TX",
    "lat": 33.2158991,
    "lng": -96.6813118
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00904",
    "address": "6800 Virginia Pkwy, McKinney, TX",
    "lat": 33.1987254,
    "lng": -96.7070342
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00459",
    "address": "3001 Hardin Blvd, Mckinney, TX",
    "lat": 33.1669816,
    "lng": -96.6632003
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00482",
    "address": "1500 S Beltline Rd, Mesquite, TX",
    "lat": 32.746468,
    "lng": -96.596781
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00898",
    "address": "2828 Motley Dr, Mesquite, TX",
    "lat": 32.8036884,
    "lng": -96.6456381
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00899",
    "address": "1501 Pioneer Rd, Mesquite, TX",
    "lat": 32.7462144,
    "lng": -96.5862675
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01666",
    "address": "2200 FM 663, Midlothian, TX",
    "lat": 32.4586175,
    "lng": -96.9927082
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00403",
    "address": "6200 Hwy 6, Missouri City, TX",
    "lat": 29.564667,
    "lng": -95.56369
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00407",
    "address": "10250 Hwy 6, Missouri City, TX",
    "lat": 29.5401714,
    "lng": -95.5434154
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00547",
    "address": "20168 Eva St, Montgomery, TX",
    "lat": 30.3901667,
    "lng": -95.6779737
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00303",
    "address": "22030 Market Pl Dr, New Caney, TX",
    "lat": 30.1333782,
    "lng": -95.2365348
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q00458",
    "address": "5152 Rufe Snow Dr, North Richland Hills, TX",
    "lat": 32.8297138,
    "lng": -97.2388521
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01645",
    "address": "9150 N Tarrant Pkwy, North Richland Hills, TX",
    "lat": 32.901916,
    "lng": -97.1889234
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00290",
    "address": "2619 Red Bluff Rd, Pasadena, TX",
    "lat": 29.6966036,
    "lng": -95.1737224
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00291",
    "address": "3550 Spencer Hwy, Pasadena, TX",
    "lat": 29.6634041,
    "lng": -95.1895964
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00552",
    "address": "6767 Spencer Hwy, Pasadena, TX",
    "lat": 29.6654233,
    "lng": -95.1352796
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00295",
    "address": "3245 Broadway St, Pearland, TX",
    "lat": 29.5463012,
    "lng": -95.2295727
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00301",
    "address": "8323 Broadway St, Pearland, TX",
    "lat": 29.5463012,
    "lng": -95.2295727
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00307",
    "address": "11003 Shadow Creek Pkwy, Pearland, TX",
    "lat": 29.5831373,
    "lng": -95.3897916
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00466",
    "address": "2805 Business Center Dr, Pearland, TX",
    "lat": 29.559269,
    "lng": -95.3903868
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00525",
    "address": "2710 Pearland Pkwy, Pearland, TX",
    "lat": 29.5582043,
    "lng": -95.2649776
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00243",
    "address": "7100 Independence Pkwy, Plano, TX",
    "lat": 33.0733533,
    "lng": -96.7485835
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00539",
    "address": "2200 14th St, Plano, TX",
    "lat": 33.0179551,
    "lng": -96.6836631
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01673",
    "address": "3305 Dallas Pkwy, Plano, TX",
    "lat": 33.0476231,
    "lng": -96.832014
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00916",
    "address": "1380 W Campbell Rd, Richardson, TX",
    "lat": 32.9800888,
    "lng": -96.7669227
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00919",
    "address": "3411 Custer Pkwy, Richardson, TX",
    "lat": 32.9988099,
    "lng": -96.730628
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01633",
    "address": "536 Centennial Blvd, Richardson, TX",
    "lat": 32.9364387,
    "lng": -96.7206721
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00304",
    "address": "6425 Fm 1464, Richmond, TX",
    "lat": 29.7086386,
    "lng": -95.6858697
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00441",
    "address": "10161 W Grand Pkwy S, Richmond, TX",
    "lat": 29.575194,
    "lng": -95.681156
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01593",
    "address": "9211 Farm to Market Rd 723, Richmond, TX",
    "lat": 29.557468,
    "lng": -95.762478
  },
  {
    "retailer": "Tom Thumb",
    "machineId": "Q00463",
    "address": "3070 N Goliad St, Rockwall, TX",
    "lat": 32.964364,
    "lng": -96.462509
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01651",
    "address": "1950 N Goliad St, Rockwall, TX",
    "lat": 32.9496506,
    "lng": -96.4602769
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00567",
    "address": "24401 Brazos Town Crossing, Rosenberg, TX",
    "lat": 29.5415183,
    "lng": -95.7507419
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q00963",
    "address": "1201 N Saginaw Blvd, Saginaw, TX",
    "lat": 32.8794885,
    "lng": -97.3823252
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00393",
    "address": "1905 El Mar Ln, Seabrook, TX",
    "lat": 29.5688896,
    "lng": -95.0255201
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00900",
    "address": "2110 E Southlake Blvd, Southlake, TX",
    "lat": 32.9428665,
    "lng": -97.1217656
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00306",
    "address": "6060 Farm To Market 2920, Spring, TX",
    "lat": 30.07417,
    "lng": -95.514112
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00383",
    "address": "3731 Riley Fuzzel Rd, Spring, TX",
    "lat": 30.1185241,
    "lng": -95.3816679
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00404",
    "address": "5671 Treaschwig Rd, Spring, TX",
    "lat": 30.0457619,
    "lng": -95.34811
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00533",
    "address": "20311 Champion Forest Dr, Spring, TX",
    "lat": 30.0537775,
    "lng": -95.5769399
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00544",
    "address": "3540 Rayford Rd, Spring, TX",
    "lat": 30.1077833,
    "lng": -95.3874381
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00545",
    "address": "15802 Champion Forest Dr, Spring, TX",
    "lat": 30.0029408,
    "lng": -95.5316099
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00549",
    "address": "8745 Spring Cypress Rd, Spring, TX",
    "lat": 30.0327158,
    "lng": -95.5527255
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00561",
    "address": "2150 Spring Stuebner Rd, Spring, TX",
    "lat": 30.0856181,
    "lng": -95.448433
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00564",
    "address": "18518 Kuykendahl Rd, Spring, TX",
    "lat": 30.0403464,
    "lng": -95.4861324
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00568",
    "address": "2301 Rayford Rd, Spring, TX",
    "lat": 30.1233789,
    "lng": -95.4067162
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00292",
    "address": "18861 University Blvd, Sugar Land, TX",
    "lat": 29.5516316,
    "lng": -95.584335
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00305",
    "address": "11565 S Texas 6, Sugar Land, TX",
    "lat": 29.6479558,
    "lng": -95.6493973
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00470",
    "address": "530 Hwy 6, Sugar Land, TX",
    "lat": 29.5968352,
    "lng": -95.618472
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00556",
    "address": "4825 Sweetwater Blvd, Sugar Land, TX",
    "lat": 29.5853135,
    "lng": -95.633233
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01636",
    "address": "19900 Southwest Fwy, Sugar Land, TX",
    "lat": 29.5815348,
    "lng": -95.646729
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00569",
    "address": "3541 Palmer Hwy, Texas City, TX",
    "lat": 29.3936093,
    "lng": -94.9494118
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00434",
    "address": "9595 Six Pines Dr, The Woodlands, TX",
    "lat": 30.1634905,
    "lng": -95.4667754
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q00536",
    "address": "10777 Kuykendahl Rd, The Woodlands, TX",
    "lat": 30.1790727,
    "lng": -95.5383631
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00559",
    "address": "8000 Research Forest Dr, The Woodlands, TX",
    "lat": 30.210692,
    "lng": -95.528015
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00392",
    "address": "24350 Kuykendahl Rd, Tomball, TX",
    "lat": 30.1145981,
    "lng": -95.55271
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00399",
    "address": "14060 Farm to Market 2920, Tomball, TX",
    "lat": 30.1256928,
    "lng": -95.592998
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00550",
    "address": "3135 FM 528 Rd, Webster, TX",
    "lat": 29.522286,
    "lng": -95.161745
  },
  {
    "retailer": "H-E-B",
    "machineId": "Q01637",
    "address": "701 S Capital of Texas Hwy, West Lake Hills, TX",
    "lat": 30.2915254,
    "lng": -97.8274392
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00548",
    "address": "12605 Interstate 45 N, Willis, TX",
    "lat": 30.422306,
    "lng": -95.494508
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00812",
    "address": "156 S Main St, Brigham City, UT",
    "lat": 41.5066084,
    "lng": -112.0166046
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00787",
    "address": "212 E 12300 S, Draper, UT",
    "lat": 40.526837,
    "lng": -111.886471
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01457",
    "address": "11969 Carlsbad Way, Herriman, UT",
    "lat": 40.5334815,
    "lng": -112.014137
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00793",
    "address": "1550 E 3500 N, Lehi, UT",
    "lat": 41.111146,
    "lng": -111.923069
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01449",
    "address": "7020 S 700 W, Midvale, UT",
    "lat": 40.628774,
    "lng": -111.910216
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00798",
    "address": "4275 Harrison Blvd, Ogden, UT",
    "lat": 41.1860323,
    "lng": -111.95002
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00783",
    "address": "632 S 100 W, Payson, UT",
    "lat": 40.0425682,
    "lng": -111.7445135
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00792",
    "address": "210 E 700 S, Pleasant Grove, UT",
    "lat": 40.3536773,
    "lng": -111.7372018
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00791",
    "address": "4065 S Redwood Rd, Salt Lake City, UT",
    "lat": 40.7769637,
    "lng": -111.9377817
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00794",
    "address": "876 E 800 S, Salt Lake City, UT",
    "lat": 40.751889,
    "lng": -111.866063
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00781",
    "address": "2039 E 9400 S, Sandy, UT",
    "lat": 40.580532,
    "lng": -111.83283
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01451",
    "address": "2193 S Main St, South Salt Lake, UT",
    "lat": 40.72437,
    "lng": -111.8909
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00795",
    "address": "4080 W 9000 S, West Jordan, UT",
    "lat": 40.5870461,
    "lng": -111.960098
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00784",
    "address": "4643 S 4000 W, West Valley City, UT",
    "lat": 40.6841835,
    "lng": -111.9893324
  },
  {
    "retailer": "Smith's",
    "machineId": "Q00802",
    "address": "5620 W 4100 S, West Valley City, UT",
    "lat": 40.6814509,
    "lng": -111.9794279
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01466",
    "address": "2572 S 5600 W, West Valley City, UT",
    "lat": 40.711078,
    "lng": -112.024922
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00265",
    "address": "12350 W 64th Ave, Arvada, CO",
    "lat": 39.811255,
    "lng": -105.1364762
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00438",
    "address": "8031 Wadsworth Blvd, Arvada, CO",
    "lat": 39.8424866,
    "lng": -105.083721
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00642",
    "address": "15200 W 64th Ave, Arvada, CO",
    "lat": 39.8106911,
    "lng": -105.1719059
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00744",
    "address": "6350 Sheridan Boulevard, Arvada, CO",
    "lat": 39.8118397,
    "lng": -105.0531413
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00746",
    "address": "9731 W 58th Ave, Arvada, CO",
    "lat": 39.8031376,
    "lng": -105.1065995
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00752",
    "address": "8055 Sheridan Boulevard, Arvada, CO",
    "lat": 39.8042588,
    "lng": -105.0529438
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00107",
    "address": "3050 S Peoria St, Aurora, CO",
    "lat": 39.6610759,
    "lng": -104.844405
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00273",
    "address": "15250 E Mississippi Ave, Aurora, CO",
    "lat": 39.6951418,
    "lng": -104.8109383
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00284",
    "address": "655 Peoria St, Aurora, CO",
    "lat": 39.7264622,
    "lng": -104.849623
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00433",
    "address": "25701 E Smoky Hill Rd, Aurora, CO",
    "lat": 39.5875593,
    "lng": -104.6870912
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00621",
    "address": "1677 S Havana St, Aurora, CO",
    "lat": 39.6865736,
    "lng": -104.868091
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00636",
    "address": "12200 E Mississippi Ave, Aurora, CO",
    "lat": 39.6959726,
    "lng": -104.8453782
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00660",
    "address": "6100 S Gun Club Rd, Aurora, CO",
    "lat": 39.6047004,
    "lng": -104.7147302
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00663",
    "address": "18730 E Hampden Ave, Aurora, CO",
    "lat": 39.6512816,
    "lng": -104.769609
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00689",
    "address": "1200 S Buckley Rd, Aurora, CO",
    "lat": 39.6948224,
    "lng": -104.7888401
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00735",
    "address": "18211 E Hampden Ave, Aurora, CO",
    "lat": 39.6547773,
    "lng": -104.775931
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00737",
    "address": "17000 E Iliff Ave, Aurora, CO",
    "lat": 39.6735751,
    "lng": -104.7884261
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00738",
    "address": "4271 S Buckley Rd, Aurora, CO",
    "lat": 39.6392874,
    "lng": -104.7934535
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00743",
    "address": "1155 S Havana St, Aurora, CO",
    "lat": 39.6952852,
    "lng": -104.8678177
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01146",
    "address": "6412 S Parker Rd, Aurora, CO",
    "lat": 39.6000611,
    "lng": -104.8030503
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00435",
    "address": "3325 28th St, Boulder, CO",
    "lat": 40.0354402,
    "lng": -105.259885
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00629",
    "address": "1650 30th St, Boulder, CO",
    "lat": 40.0158301,
    "lng": -105.2518232
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00665",
    "address": "4800 E Baseline Rd, Boulder, CO",
    "lat": 40.0002783,
    "lng": -105.0717505
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01180",
    "address": "2798 Arapahoe Ave, Boulder, CO",
    "lat": 40.0133279,
    "lng": -105.2596019
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00114",
    "address": "100 N 50th Ave, Brighton, CO",
    "lat": 39.9886945,
    "lng": -104.749886
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00275",
    "address": "1150 US-287, Broomfield, CO",
    "lat": 39.9318308,
    "lng": -105.090519
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00724",
    "address": "12167 Sheridan Boulevard, Broomfield, CO",
    "lat": 39.9171019,
    "lng": -105.0552854
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00753",
    "address": "2355 W 136th Ave, Broomfield, CO",
    "lat": 39.9446325,
    "lng": -105.0143578
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01147",
    "address": "3602 W 144th Ave, Broomfield, CO",
    "lat": 39.956513,
    "lng": -105.0354969
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00283",
    "address": "750 N Ridge Rd, Castle Rock, CO",
    "lat": 39.3758932,
    "lng": -104.8273898
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00745",
    "address": "7284 Lagae Rd, Castle Rock, CO",
    "lat": 39.254944,
    "lng": -104.922066
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01096",
    "address": "880 S Perry St, Castle Rock, CO",
    "lat": 39.3621639,
    "lng": -104.8608009
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00272",
    "address": "8200 S Holly St, Centennial, CO",
    "lat": 39.5676085,
    "lng": -104.9208442
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00280",
    "address": "5050 E Arapahoe Rd, Centennial, CO",
    "lat": 39.5943915,
    "lng": -104.928758
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00285",
    "address": "7575 S University Blvd, Centennial, CO",
    "lat": 39.5787109,
    "lng": -104.9608938
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01150",
    "address": "7375 E Arapahoe Rd, Centennial, CO",
    "lat": 39.5964101,
    "lng": -104.903506
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00362",
    "address": "6930 N Academy Blvd, Colorado Springs, CO",
    "lat": 38.9310719,
    "lng": -104.796929
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01110",
    "address": "3275 W Colorado Ave, Colorado Springs, CO",
    "lat": 38.8549409,
    "lng": -104.8769426
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01157",
    "address": "7055 Austin Bluffs Pkwy, Colorado Springs, CO",
    "lat": 38.9325927,
    "lng": -104.738798
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01161",
    "address": "1920 S Nevada Ave, Colorado Springs, CO",
    "lat": 38.8062405,
    "lng": -104.823391
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01163",
    "address": "5060 N Academy Blvd, Colorado Springs, CO",
    "lat": 38.9035697,
    "lng": -104.7773959
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01165",
    "address": "2210 N Wahsatch Ave, Colorado Springs, CO",
    "lat": 38.8645564,
    "lng": -104.8173455
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01178",
    "address": "6520 S Academy Blvd, Colorado Springs, CO",
    "lat": 38.7672818,
    "lng": -104.8150169
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01179",
    "address": "2890 N Powers Blvd, Colorado Springs, CO",
    "lat": 38.8738464,
    "lng": -104.7224326
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01269",
    "address": "1121 N Circle Dr, Colorado Springs, CO",
    "lat": 38.8483495,
    "lng": -104.7725322
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01313",
    "address": "840 Village Center Dr, Colorado Springs, CO",
    "lat": 38.922825,
    "lng": -104.844449
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01476",
    "address": "1425 S Murray Blvd, Colorado Springs, CO",
    "lat": 38.8125877,
    "lng": -104.7463136
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01506",
    "address": "3620 Austin Bluffs Pkwy, Colorado Springs, CO",
    "lat": 38.8921064,
    "lng": -104.7609853
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00426",
    "address": "4850 E 62nd Ave, Commerce City, CO",
    "lat": 39.8087836,
    "lng": -104.9305572
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00437",
    "address": "15051 E 104th Ave, Commerce City, CO",
    "lat": 39.8876549,
    "lng": -104.811921
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01647",
    "address": "27152 Main St, Conifer, CO",
    "lat": 39.5273031,
    "lng": -105.303389
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00100",
    "address": "3100 S Sheridan Blvd, Denver, CO",
    "lat": 39.6560123,
    "lng": -105.0508736
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00268",
    "address": "5125 W Florida Ave, Denver, CO",
    "lat": 39.6894633,
    "lng": -105.0523651
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00287",
    "address": "825 S Colorado Blvd, Denver, CO",
    "lat": 39.7024979,
    "lng": -104.9415851
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00398",
    "address": "2727 W Evans Ave, Denver, CO",
    "lat": 39.6787366,
    "lng": -105.0209112
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00430",
    "address": "890 S Monaco St Pkwy, Denver, CO",
    "lat": 39.7007955,
    "lng": -104.9112017
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00439",
    "address": "2750 S Colorado Blvd, Denver, CO",
    "lat": 39.6667011,
    "lng": -104.9368996
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00442",
    "address": "1355 Krameria St, Denver, CO",
    "lat": 39.7376187,
    "lng": -104.9176862
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00443",
    "address": "10406 E M.L.K. Jr Blvd, Denver, CO",
    "lat": 39.761792,
    "lng": -104.904623
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00622",
    "address": "1653 S Colorado Blvd, Denver, CO",
    "lat": 39.6871812,
    "lng": -104.9424685
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00635",
    "address": "2150 S Downing St, Denver, CO",
    "lat": 39.6774118,
    "lng": -104.9720669
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00641",
    "address": "200 Quebec St, Denver, CO",
    "lat": 39.7201389,
    "lng": -104.9031473
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00649",
    "address": "6460 E Yale Ave, Denver, CO",
    "lat": 39.6660315,
    "lng": -104.914087
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00650",
    "address": "6220 E 14th Ave, Denver, CO",
    "lat": 39.7372175,
    "lng": -104.9156097
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00652",
    "address": "2660 N Federal Blvd, Denver, CO",
    "lat": 39.668912,
    "lng": -105.024999
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00653",
    "address": "3800 W 44th Ave, Denver, CO",
    "lat": 39.7761835,
    "lng": -105.0369483
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00667",
    "address": "757 E 20th Ave, Denver, CO",
    "lat": 39.7477417,
    "lng": -104.9772198
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00749",
    "address": "1331 Speer Blvd, Denver, CO",
    "lat": 39.737394,
    "lng": -104.9979702
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00780",
    "address": "323 S Broadway, Denver, CO",
    "lat": 39.7105657,
    "lng": -104.9887394
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00282",
    "address": "1725 Sheridan Boulevard, Edgewater, CO",
    "lat": 39.7449278,
    "lng": -105.0561088
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01166",
    "address": "220 S Elizabeth St, Elizabeth, CO",
    "lat": 39.356822,
    "lng": -104.608246
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00432",
    "address": "101 Englewood Pkwy, Englewood, CO",
    "lat": 39.655051,
    "lng": -104.988971
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00754",
    "address": "3495 S University Blvd, Englewood, CO",
    "lat": 39.6537393,
    "lng": -104.9606358
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00277",
    "address": "3851 S Hwy 74, Evergreen, CO",
    "lat": 39.651401,
    "lng": -105.344316
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01172",
    "address": "7655 McLaughlin Rd, Falcon, CO",
    "lat": 38.9415779,
    "lng": -104.6015545
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00270",
    "address": "1575 W 84th Ave, Federal Heights, CO",
    "lat": 39.849074,
    "lng": -105.024961
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01098",
    "address": "8134 Colorado Blvd, Firestone, CO",
    "lat": 40.1592736,
    "lng": -104.94192
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00627",
    "address": "2535 S College Ave, Fort Collins, CO",
    "lat": 40.5541187,
    "lng": -105.0789865
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01104",
    "address": "2160 W Drake Rd, Fort Collins, CO",
    "lat": 40.554382,
    "lng": -105.116658
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01107",
    "address": "3657 S College Ave, Fort Collins, CO",
    "lat": 40.5365232,
    "lng": -105.0780319
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01100",
    "address": "1300 Dexter St, Fort Lupton, CO",
    "lat": 40.0787686,
    "lng": -104.8024075
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01477",
    "address": "6925 Mesa Ridge Pkwy, Fountain, CO",
    "lat": 38.7161696,
    "lng": -104.6989789
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01704",
    "address": "5801 Silverstone Dr, Frederick, CO",
    "lat": 40.525767,
    "lng": -105.035313
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00446",
    "address": "4600 Leetsdale Dr, Glendale, CO",
    "lat": 39.7079614,
    "lng": -104.9325912
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00755",
    "address": "17171 S Golden Rd, Golden, CO",
    "lat": 39.7393792,
    "lng": -105.1928794
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01326",
    "address": "1701 Jackson St, Golden, CO",
    "lat": 39.7521141,
    "lng": -105.2155418
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00648",
    "address": "2100 35th Ave, Greeley, CO",
    "lat": 40.4047974,
    "lng": -104.7333591
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01079",
    "address": "4548 Centerplace Dr, Greeley, CO",
    "lat": 40.3943201,
    "lng": -104.7527637
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01092",
    "address": "3526 W 10th St, Greeley, CO",
    "lat": 40.4213524,
    "lng": -104.7362628
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00445",
    "address": "4910 S Yosemite St, Greenwood Village, CO",
    "lat": 39.6266082,
    "lng": -104.884064
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00742",
    "address": "6000 S Holly St, Greenwood Village, CO",
    "lat": 39.6076729,
    "lng": -104.9207489
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00108",
    "address": "2205 W Wildcat Reserve Pkwy, Highlands Ranch, CO",
    "lat": 39.55388,
    "lng": -104.96943
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00274",
    "address": "8673 S Quebec St, Highlands Ranch, CO",
    "lat": 39.55388,
    "lng": -104.96943
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00431",
    "address": "4000 Red Cedar Dr, Highlands Ranch, CO",
    "lat": 39.55388,
    "lng": -104.96943
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00449",
    "address": "9551 S University Blvd, Highlands Ranch, CO",
    "lat": 39.5423024,
    "lng": -104.9443021
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01191",
    "address": "9255 S Broadway, Highlands Ranch, CO",
    "lat": 39.5478246,
    "lng": -104.9943275
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00436",
    "address": "2900 Arapahoe Rd, Lafayette, CO",
    "lat": 40.0149989,
    "lng": -105.1026257
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00110",
    "address": "7984 W Alameda Ave, Lakewood, CO",
    "lat": 39.7094825,
    "lng": -105.0850476
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00266",
    "address": "1927 S Wadsworth Blvd, Lakewood, CO",
    "lat": 39.681606,
    "lng": -105.0815338
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00278",
    "address": "1555 Quail St, Lakewood, CO",
    "lat": 39.7420445,
    "lng": -105.1252846
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00429",
    "address": "12043 W Alameda Pkwy, Lakewood, CO",
    "lat": 39.7085994,
    "lng": -105.1372581
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00471",
    "address": "11088 W Jewell Ave, Lakewood, CO",
    "lat": 39.681122,
    "lng": -105.1224003
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00748",
    "address": "1545 S Kipling Pkwy, Lakewood, CO",
    "lat": 39.6905264,
    "lng": -105.1194557
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01173",
    "address": "13111 W Alameda Pkwy, Lakewood, CO",
    "lat": 39.6983736,
    "lng": -105.1458638
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00101",
    "address": "11747 W Ken Caryl Ave, Littleton, CO",
    "lat": 39.5806784,
    "lng": -105.0531179
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00102",
    "address": "8126 S Wadsworth Blvd, Littleton, CO",
    "lat": 39.575726,
    "lng": -105.084195
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00279",
    "address": "100 W Littleton Blvd, Littleton, CO",
    "lat": 39.6121539,
    "lng": -104.989793
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00286",
    "address": "6760 S Pierce St, Littleton, CO",
    "lat": 39.5937115,
    "lng": -105.0722397
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00447",
    "address": "7901 S Broadway, Littleton, CO",
    "lat": 39.57335,
    "lng": -104.988592
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01081",
    "address": "181 W Mineral Ave, Littleton, CO",
    "lat": 39.5748722,
    "lng": -104.9918813
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01174",
    "address": "8434 S Kipling Pkwy, Littleton, CO",
    "lat": 39.5635109,
    "lng": -105.1076746
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01142",
    "address": "9229 Lincoln Ave, Lone Tree, CO",
    "lat": 39.5378276,
    "lng": -104.883304
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00448",
    "address": "1050 Ken Pratt Blvd, Longmont, CO",
    "lat": 40.1529908,
    "lng": -105.1105637
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00450",
    "address": "1632 Hover St, Longmont, CO",
    "lat": 40.1879023,
    "lng": -105.1294135
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00428",
    "address": "1375 E South Boulder Rd, Louisville, CO",
    "lat": 39.9884917,
    "lng": -105.1242538
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00644",
    "address": "1601 Coalton Rd, Louisville, CO",
    "lat": 39.928816,
    "lng": -105.147129
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01170",
    "address": "624 W Hwy 105, Monument, CO",
    "lat": 39.093361,
    "lng": -104.81365
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00747",
    "address": "750 E 104th Ave, Northglenn, CO",
    "lat": 39.8853174,
    "lng": -104.9769375
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01158",
    "address": "500 E 120th Ave, Northglenn, CO",
    "lat": 39.9124089,
    "lng": -104.980938
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00105",
    "address": "17761 Cottonwood Dr, Parker, CO",
    "lat": 39.5600371,
    "lng": -104.7828405
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00109",
    "address": "17031 Lincoln Ave, Parker, CO",
    "lat": 39.5341,
    "lng": -104.791559
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01105",
    "address": "11051 S Parker Rd, Parker, CO",
    "lat": 39.5160623,
    "lng": -104.7664944
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01171",
    "address": "12959 S Parker Rd, Parker, CO",
    "lat": 39.4795541,
    "lng": -104.7586472
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00440",
    "address": "3801 E 120th Ave, Thornton, CO",
    "lat": 39.9149664,
    "lng": -104.9433918
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00647",
    "address": "771 Thornton Pkwy, Thornton, CO",
    "lat": 39.87244,
    "lng": -104.9759653
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00664",
    "address": "3840 E 104th Ave, Thornton, CO",
    "lat": 39.8832509,
    "lng": -104.9425407
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00271",
    "address": "10351 Federal Blvd, Westminster, CO",
    "lat": 39.8831796,
    "lng": -105.0276214
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00281",
    "address": "9983 Wadsworth Pkwy, Westminster, CO",
    "lat": 39.8775565,
    "lng": -105.0957756
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00289",
    "address": "3400 Youngfield St, Wheat Ridge, CO",
    "lat": 39.764687,
    "lng": -105.14242
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00444",
    "address": "5301 W 38th Ave, Wheat Ridge, CO",
    "lat": 39.7694164,
    "lng": -105.0559477
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00638",
    "address": "3900 Wadsworth Blvd, Wheat Ridge, CO",
    "lat": 39.7712576,
    "lng": -105.0797032
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01483",
    "address": "1101 E US-24, Woodland Park, CO",
    "lat": 39.019995,
    "lng": -105.113586
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00265",
    "address": "12350 W 64th Ave, Arvada, CO",
    "lat": 39.811255,
    "lng": -105.1364762
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00438",
    "address": "8031 Wadsworth Blvd, Arvada, CO",
    "lat": 39.8424866,
    "lng": -105.083721
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00642",
    "address": "15200 W 64th Ave, Arvada, CO",
    "lat": 39.8106911,
    "lng": -105.1719059
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00744",
    "address": "6350 Sheridan Boulevard, Arvada, CO",
    "lat": 39.8118397,
    "lng": -105.0531413
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00746",
    "address": "9731 W 58th Ave, Arvada, CO",
    "lat": 39.8031376,
    "lng": -105.1065995
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00752",
    "address": "8055 Sheridan Boulevard, Arvada, CO",
    "lat": 39.8042588,
    "lng": -105.0529438
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00107",
    "address": "3050 S Peoria St, Aurora, CO",
    "lat": 39.6610759,
    "lng": -104.844405
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00273",
    "address": "15250 E Mississippi Ave, Aurora, CO",
    "lat": 39.6951418,
    "lng": -104.8109383
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00284",
    "address": "655 Peoria St, Aurora, CO",
    "lat": 39.7264622,
    "lng": -104.849623
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00433",
    "address": "25701 E Smoky Hill Rd, Aurora, CO",
    "lat": 39.5875593,
    "lng": -104.6870912
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00621",
    "address": "1677 S Havana St, Aurora, CO",
    "lat": 39.6865736,
    "lng": -104.868091
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00636",
    "address": "12200 E Mississippi Ave, Aurora, CO",
    "lat": 39.6959726,
    "lng": -104.8453782
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00660",
    "address": "6100 S Gun Club Rd, Aurora, CO",
    "lat": 39.6047004,
    "lng": -104.7147302
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00663",
    "address": "18730 E Hampden Ave, Aurora, CO",
    "lat": 39.6512816,
    "lng": -104.769609
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00689",
    "address": "1200 S Buckley Rd, Aurora, CO",
    "lat": 39.6948224,
    "lng": -104.7888401
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00735",
    "address": "18211 E Hampden Ave, Aurora, CO",
    "lat": 39.6547773,
    "lng": -104.775931
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00737",
    "address": "17000 E Iliff Ave, Aurora, CO",
    "lat": 39.6735751,
    "lng": -104.7884261
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00738",
    "address": "4271 S Buckley Rd, Aurora, CO",
    "lat": 39.6392874,
    "lng": -104.7934535
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00743",
    "address": "1155 S Havana St, Aurora, CO",
    "lat": 39.6952852,
    "lng": -104.8678177
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01146",
    "address": "6412 S Parker Rd, Aurora, CO",
    "lat": 39.6000611,
    "lng": -104.8030503
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00435",
    "address": "3325 28th St, Boulder, CO",
    "lat": 40.0354402,
    "lng": -105.259885
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00629",
    "address": "1650 30th St, Boulder, CO",
    "lat": 40.0158301,
    "lng": -105.2518232
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00665",
    "address": "4800 E Baseline Rd, Boulder, CO",
    "lat": 40.0002783,
    "lng": -105.0717505
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01180",
    "address": "2798 Arapahoe Ave, Boulder, CO",
    "lat": 40.0133279,
    "lng": -105.2596019
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00114",
    "address": "100 N 50th Ave, Brighton, CO",
    "lat": 39.9886945,
    "lng": -104.749886
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00275",
    "address": "1150 US-287, Broomfield, CO",
    "lat": 39.9318308,
    "lng": -105.090519
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00724",
    "address": "12167 Sheridan Boulevard, Broomfield, CO",
    "lat": 39.9171019,
    "lng": -105.0552854
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00753",
    "address": "2355 W 136th Ave, Broomfield, CO",
    "lat": 39.9446325,
    "lng": -105.0143578
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01147",
    "address": "3602 W 144th Ave, Broomfield, CO",
    "lat": 39.956513,
    "lng": -105.0354969
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00283",
    "address": "750 N Ridge Rd, Castle Rock, CO",
    "lat": 39.3758932,
    "lng": -104.8273898
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00745",
    "address": "7284 Lagae Rd, Castle Rock, CO",
    "lat": 39.254944,
    "lng": -104.922066
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01096",
    "address": "880 S Perry St, Castle Rock, CO",
    "lat": 39.3621639,
    "lng": -104.8608009
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00272",
    "address": "8200 S Holly St, Centennial, CO",
    "lat": 39.5676085,
    "lng": -104.9208442
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00280",
    "address": "5050 E Arapahoe Rd, Centennial, CO",
    "lat": 39.5943915,
    "lng": -104.928758
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00285",
    "address": "7575 S University Blvd, Centennial, CO",
    "lat": 39.5787109,
    "lng": -104.9608938
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01150",
    "address": "7375 E Arapahoe Rd, Centennial, CO",
    "lat": 39.5964101,
    "lng": -104.903506
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00362",
    "address": "6930 N Academy Blvd, Colorado Springs, CO",
    "lat": 38.9310719,
    "lng": -104.796929
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01110",
    "address": "3275 W Colorado Ave, Colorado Springs, CO",
    "lat": 38.8549409,
    "lng": -104.8769426
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01157",
    "address": "7055 Austin Bluffs Pkwy, Colorado Springs, CO",
    "lat": 38.9325927,
    "lng": -104.738798
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01161",
    "address": "1920 S Nevada Ave, Colorado Springs, CO",
    "lat": 38.8062405,
    "lng": -104.823391
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01163",
    "address": "5060 N Academy Blvd, Colorado Springs, CO",
    "lat": 38.9035697,
    "lng": -104.7773959
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01165",
    "address": "2210 N Wahsatch Ave, Colorado Springs, CO",
    "lat": 38.8645564,
    "lng": -104.8173455
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01178",
    "address": "6520 S Academy Blvd, Colorado Springs, CO",
    "lat": 38.7672818,
    "lng": -104.8150169
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01179",
    "address": "2890 N Powers Blvd, Colorado Springs, CO",
    "lat": 38.8738464,
    "lng": -104.7224326
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01269",
    "address": "1121 N Circle Dr, Colorado Springs, CO",
    "lat": 38.8483495,
    "lng": -104.7725322
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01313",
    "address": "840 Village Center Dr, Colorado Springs, CO",
    "lat": 38.922825,
    "lng": -104.844449
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01476",
    "address": "1425 S Murray Blvd, Colorado Springs, CO",
    "lat": 38.8125877,
    "lng": -104.7463136
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01506",
    "address": "3620 Austin Bluffs Pkwy, Colorado Springs, CO",
    "lat": 38.8921064,
    "lng": -104.7609853
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00426",
    "address": "4850 E 62nd Ave, Commerce City, CO",
    "lat": 39.8087836,
    "lng": -104.9305572
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00437",
    "address": "15051 E 104th Ave, Commerce City, CO",
    "lat": 39.8876549,
    "lng": -104.811921
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01647",
    "address": "27152 Main St, Conifer, CO",
    "lat": 39.5273031,
    "lng": -105.303389
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00100",
    "address": "3100 S Sheridan Blvd, Denver, CO",
    "lat": 39.6560123,
    "lng": -105.0508736
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00268",
    "address": "5125 W Florida Ave, Denver, CO",
    "lat": 39.6894633,
    "lng": -105.0523651
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00287",
    "address": "825 S Colorado Blvd, Denver, CO",
    "lat": 39.7024979,
    "lng": -104.9415851
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00398",
    "address": "2727 W Evans Ave, Denver, CO",
    "lat": 39.6787366,
    "lng": -105.0209112
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00430",
    "address": "890 S Monaco St Pkwy, Denver, CO",
    "lat": 39.7007955,
    "lng": -104.9112017
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00439",
    "address": "2750 S Colorado Blvd, Denver, CO",
    "lat": 39.6667011,
    "lng": -104.9368996
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00442",
    "address": "1355 Krameria St, Denver, CO",
    "lat": 39.7376187,
    "lng": -104.9176862
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00443",
    "address": "10406 E M.L.K. Jr Blvd, Denver, CO",
    "lat": 39.761792,
    "lng": -104.904623
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00622",
    "address": "1653 S Colorado Blvd, Denver, CO",
    "lat": 39.6871812,
    "lng": -104.9424685
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00635",
    "address": "2150 S Downing St, Denver, CO",
    "lat": 39.6774118,
    "lng": -104.9720669
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00641",
    "address": "200 Quebec St, Denver, CO",
    "lat": 39.7201389,
    "lng": -104.9031473
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00649",
    "address": "6460 E Yale Ave, Denver, CO",
    "lat": 39.6660315,
    "lng": -104.914087
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00650",
    "address": "6220 E 14th Ave, Denver, CO",
    "lat": 39.7372175,
    "lng": -104.9156097
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00652",
    "address": "2660 N Federal Blvd, Denver, CO",
    "lat": 39.668912,
    "lng": -105.024999
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00653",
    "address": "3800 W 44th Ave, Denver, CO",
    "lat": 39.7761835,
    "lng": -105.0369483
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00667",
    "address": "757 E 20th Ave, Denver, CO",
    "lat": 39.7477417,
    "lng": -104.9772198
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00749",
    "address": "1331 Speer Blvd, Denver, CO",
    "lat": 39.737394,
    "lng": -104.9979702
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00780",
    "address": "323 S Broadway, Denver, CO",
    "lat": 39.7105657,
    "lng": -104.9887394
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00282",
    "address": "1725 Sheridan Boulevard, Edgewater, CO",
    "lat": 39.7449278,
    "lng": -105.0561088
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01166",
    "address": "220 S Elizabeth St, Elizabeth, CO",
    "lat": 39.356822,
    "lng": -104.608246
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00432",
    "address": "101 Englewood Pkwy, Englewood, CO",
    "lat": 39.655051,
    "lng": -104.988971
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00754",
    "address": "3495 S University Blvd, Englewood, CO",
    "lat": 39.6537393,
    "lng": -104.9606358
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00277",
    "address": "3851 S Hwy 74, Evergreen, CO",
    "lat": 39.651401,
    "lng": -105.344316
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01172",
    "address": "7655 McLaughlin Rd, Falcon, CO",
    "lat": 38.9415779,
    "lng": -104.6015545
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00270",
    "address": "1575 W 84th Ave, Federal Heights, CO",
    "lat": 39.849074,
    "lng": -105.024961
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01098",
    "address": "8134 Colorado Blvd, Firestone, CO",
    "lat": 40.1592736,
    "lng": -104.94192
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00627",
    "address": "2535 S College Ave, Fort Collins, CO",
    "lat": 40.5541187,
    "lng": -105.0789865
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01104",
    "address": "2160 W Drake Rd, Fort Collins, CO",
    "lat": 40.554382,
    "lng": -105.116658
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01107",
    "address": "3657 S College Ave, Fort Collins, CO",
    "lat": 40.5365232,
    "lng": -105.0780319
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01100",
    "address": "1300 Dexter St, Fort Lupton, CO",
    "lat": 40.0787686,
    "lng": -104.8024075
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01477",
    "address": "6925 Mesa Ridge Pkwy, Fountain, CO",
    "lat": 38.7161696,
    "lng": -104.6989789
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01704",
    "address": "5801 Silverstone Dr, Frederick, CO",
    "lat": 40.525767,
    "lng": -105.035313
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00446",
    "address": "4600 Leetsdale Dr, Glendale, CO",
    "lat": 39.7079614,
    "lng": -104.9325912
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00755",
    "address": "17171 S Golden Rd, Golden, CO",
    "lat": 39.7393792,
    "lng": -105.1928794
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01326",
    "address": "1701 Jackson St, Golden, CO",
    "lat": 39.7521141,
    "lng": -105.2155418
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00648",
    "address": "2100 35th Ave, Greeley, CO",
    "lat": 40.4047974,
    "lng": -104.7333591
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01079",
    "address": "4548 Centerplace Dr, Greeley, CO",
    "lat": 40.3943201,
    "lng": -104.7527637
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01092",
    "address": "3526 W 10th St, Greeley, CO",
    "lat": 40.4213524,
    "lng": -104.7362628
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00445",
    "address": "4910 S Yosemite St, Greenwood Village, CO",
    "lat": 39.6266082,
    "lng": -104.884064
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00742",
    "address": "6000 S Holly St, Greenwood Village, CO",
    "lat": 39.6076729,
    "lng": -104.9207489
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00108",
    "address": "2205 W Wildcat Reserve Pkwy, Highlands Ranch, CO",
    "lat": 39.55388,
    "lng": -104.96943
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00274",
    "address": "8673 S Quebec St, Highlands Ranch, CO",
    "lat": 39.55388,
    "lng": -104.96943
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00431",
    "address": "4000 Red Cedar Dr, Highlands Ranch, CO",
    "lat": 39.55388,
    "lng": -104.96943
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00449",
    "address": "9551 S University Blvd, Highlands Ranch, CO",
    "lat": 39.5423024,
    "lng": -104.9443021
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01191",
    "address": "9255 S Broadway, Highlands Ranch, CO",
    "lat": 39.5478246,
    "lng": -104.9943275
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00436",
    "address": "2900 Arapahoe Rd, Lafayette, CO",
    "lat": 40.0149989,
    "lng": -105.1026257
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00110",
    "address": "7984 W Alameda Ave, Lakewood, CO",
    "lat": 39.7094825,
    "lng": -105.0850476
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00266",
    "address": "1927 S Wadsworth Blvd, Lakewood, CO",
    "lat": 39.681606,
    "lng": -105.0815338
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00278",
    "address": "1555 Quail St, Lakewood, CO",
    "lat": 39.7420445,
    "lng": -105.1252846
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00429",
    "address": "12043 W Alameda Pkwy, Lakewood, CO",
    "lat": 39.7085994,
    "lng": -105.1372581
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00471",
    "address": "11088 W Jewell Ave, Lakewood, CO",
    "lat": 39.681122,
    "lng": -105.1224003
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00748",
    "address": "1545 S Kipling Pkwy, Lakewood, CO",
    "lat": 39.6905264,
    "lng": -105.1194557
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01173",
    "address": "13111 W Alameda Pkwy, Lakewood, CO",
    "lat": 39.6983736,
    "lng": -105.1458638
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00101",
    "address": "11747 W Ken Caryl Ave, Littleton, CO",
    "lat": 39.5806784,
    "lng": -105.0531179
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00102",
    "address": "8126 S Wadsworth Blvd, Littleton, CO",
    "lat": 39.575726,
    "lng": -105.084195
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00279",
    "address": "100 W Littleton Blvd, Littleton, CO",
    "lat": 39.6121539,
    "lng": -104.989793
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00286",
    "address": "6760 S Pierce St, Littleton, CO",
    "lat": 39.5937115,
    "lng": -105.0722397
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00447",
    "address": "7901 S Broadway, Littleton, CO",
    "lat": 39.57335,
    "lng": -104.988592
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01081",
    "address": "181 W Mineral Ave, Littleton, CO",
    "lat": 39.5748722,
    "lng": -104.9918813
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01174",
    "address": "8434 S Kipling Pkwy, Littleton, CO",
    "lat": 39.5635109,
    "lng": -105.1076746
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01142",
    "address": "9229 Lincoln Ave, Lone Tree, CO",
    "lat": 39.5378276,
    "lng": -104.883304
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00448",
    "address": "1050 Ken Pratt Blvd, Longmont, CO",
    "lat": 40.1529908,
    "lng": -105.1105637
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00450",
    "address": "1632 Hover St, Longmont, CO",
    "lat": 40.1879023,
    "lng": -105.1294135
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00428",
    "address": "1375 E South Boulder Rd, Louisville, CO",
    "lat": 39.9884917,
    "lng": -105.1242538
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00644",
    "address": "1601 Coalton Rd, Louisville, CO",
    "lat": 39.928816,
    "lng": -105.147129
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01170",
    "address": "624 W Hwy 105, Monument, CO",
    "lat": 39.093361,
    "lng": -104.81365
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00747",
    "address": "750 E 104th Ave, Northglenn, CO",
    "lat": 39.8853174,
    "lng": -104.9769375
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01158",
    "address": "500 E 120th Ave, Northglenn, CO",
    "lat": 39.9124089,
    "lng": -104.980938
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00105",
    "address": "17761 Cottonwood Dr, Parker, CO",
    "lat": 39.5600371,
    "lng": -104.7828405
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00109",
    "address": "17031 Lincoln Ave, Parker, CO",
    "lat": 39.5341,
    "lng": -104.791559
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01105",
    "address": "11051 S Parker Rd, Parker, CO",
    "lat": 39.5160623,
    "lng": -104.7664944
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q01171",
    "address": "12959 S Parker Rd, Parker, CO",
    "lat": 39.4795541,
    "lng": -104.7586472
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00440",
    "address": "3801 E 120th Ave, Thornton, CO",
    "lat": 39.9149664,
    "lng": -104.9433918
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00647",
    "address": "771 Thornton Pkwy, Thornton, CO",
    "lat": 39.87244,
    "lng": -104.9759653
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00664",
    "address": "3840 E 104th Ave, Thornton, CO",
    "lat": 39.8832509,
    "lng": -104.9425407
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00271",
    "address": "10351 Federal Blvd, Westminster, CO",
    "lat": 39.8831796,
    "lng": -105.0276214
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00281",
    "address": "9983 Wadsworth Pkwy, Westminster, CO",
    "lat": 39.8775565,
    "lng": -105.0957756
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00289",
    "address": "3400 Youngfield St, Wheat Ridge, CO",
    "lat": 39.764687,
    "lng": -105.14242
  },
  {
    "retailer": "King Soopers",
    "machineId": "Q00444",
    "address": "5301 W 38th Ave, Wheat Ridge, CO",
    "lat": 39.7694164,
    "lng": -105.0559477
  },
  {
    "retailer": "Safeway",
    "machineId": "Q00638",
    "address": "3900 Wadsworth Blvd, Wheat Ridge, CO",
    "lat": 39.7712576,
    "lng": -105.0797032
  },
  {
    "retailer": "Safeway",
    "machineId": "Q01483",
    "address": "1101 E US-24, Woodland Park, CO",
    "lat": 39.019995,
    "lng": -105.113586
  },
  {
    "retailer": "Tanger Outlets Nashville",
    "machineId": "Q01787",
    "address": "4060 Cane Ridge Pkwy, Antioch, TN",
    "lat": 36.0345824,
    "lng": -86.6462793
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01112",
    "address": "210 Franklin Rd, Brentwood, TN",
    "lat": 36.0317088,
    "lng": -86.787643
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01125",
    "address": "6690 Nolensville Rd, Brentwood, TN",
    "lat": 36.0004587,
    "lng": -86.6912013
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01033",
    "address": "1203 Murfreesboro Rd, Franklin, TN",
    "lat": 35.9177331,
    "lng": -86.8315507
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01224",
    "address": "2020 Mallory Ln, Franklin, TN",
    "lat": 35.9508016,
    "lng": -86.816765
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01037",
    "address": "123 Northcreek Blvd, Goodlettsville, TN",
    "lat": 36.3264379,
    "lng": -86.6987823
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00992",
    "address": "4432 Veterans Pkwy, Murfreesboro, TN",
    "lat": 35.8448016,
    "lng": -86.4914254
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01027",
    "address": "2946 S Church St, Murfreesboro, TN",
    "lat": 35.7905856,
    "lng": -86.4022332
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01029",
    "address": "143 McGavock Pk, Nashville, TN",
    "lat": 36.1706942,
    "lng": -86.6787276
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01034",
    "address": "61 E Thompson Ln, Nashville, TN",
    "lat": 36.110604,
    "lng": -86.726175
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01017",
    "address": "463 Sam Ridley Pkwy W, Smyrna, TN",
    "lat": 35.995446,
    "lng": -86.493284
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01108",
    "address": "2600 Memorial Blvd, Springfield, TN",
    "lat": 36.4884931,
    "lng": -86.8633422
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01023",
    "address": "1751 Patrick Dr, Burlington, KY",
    "lat": 39.0180249,
    "lng": -84.6924557
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00692",
    "address": "70 Martha Layne Collins Blvd, Cold Spring, KY",
    "lat": 39.0256769,
    "lng": -84.4535557
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00612",
    "address": "4303 Winston Ave, Covington, KY",
    "lat": 39.0414529,
    "lng": -84.5091105
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00608",
    "address": "2150 Dixie Hwy, Fort Mitchell, KY",
    "lat": 39.048742,
    "lng": -84.5530904
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00678",
    "address": "9001 US-42, Union, KY",
    "lat": 38.96305,
    "lng": -84.6815292
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00703",
    "address": "635 Chestnut Dr, Walton, KY",
    "lat": 38.8561729,
    "lng": -84.6169108
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01196",
    "address": "103 S Randall Rd, Algonquin, IL",
    "lat": 42.1747528,
    "lng": -88.3331864
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01790",
    "address": "12150 S Pulaski Rd, Alsip, IL",
    "lat": 41.672499,
    "lng": -87.7213888
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01195",
    "address": "440 E Rand Rd, Arlington Heights, IL",
    "lat": 42.1114842,
    "lng": -87.9767592
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01199",
    "address": "125 E Stearns Rd, Bartlett, IL",
    "lat": 41.9713664,
    "lng": -88.1828347
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00758",
    "address": "119 S Randall Rd, Batavia, IL",
    "lat": 41.8482789,
    "lng": -88.3423968
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01181",
    "address": "1200 W Boughton Rd, Bolingbrook, IL",
    "lat": 41.704815,
    "lng": -88.1239583
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01145",
    "address": "1550 Deerfield Pkwy, Buffalo Grove, IL",
    "lat": 42.1691579,
    "lng": -87.9241369
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01198",
    "address": "79 McHenry Rd, Buffalo Grove, IL",
    "lat": 42.1551621,
    "lng": -87.9577032
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01474",
    "address": "7910 S Cicero Ave, Burbank, IL",
    "lat": 41.7468438,
    "lng": -87.7423777
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01205",
    "address": "750 Army Trail Rd, Carol Stream, IL",
    "lat": 41.940509,
    "lng": -88.147324
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01228",
    "address": "2100 Randall Rd, Carpentersville, IL",
    "lat": 42.118067,
    "lng": -88.335197
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01447",
    "address": "696 Northwest Hwy, Cary, IL",
    "lat": 42.2184348,
    "lng": -88.2557595
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00267",
    "address": "2940 N Ashland Ave, Chicago, IL",
    "lat": 41.9353779,
    "lng": -87.6702527
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00584",
    "address": "1763 W Howard St, Chicago, IL",
    "lat": 42.0175235,
    "lng": -87.6746285
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00595",
    "address": "3570 N Elston Ave, Chicago, IL",
    "lat": 41.9451009,
    "lng": -87.7084423
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01316",
    "address": "1220 S Ashland Ave, Chicago, IL",
    "lat": 41.8659038,
    "lng": -87.668459
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01374",
    "address": "1340 S Canal St, Chicago, IL",
    "lat": 41.8641269,
    "lng": -87.6398869
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01376",
    "address": "1341 N Paulina St, Chicago, IL",
    "lat": 41.9065353,
    "lng": -87.6694606
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01382",
    "address": "2520 N Narragansett Ave, Chicago, IL",
    "lat": 41.9262263,
    "lng": -87.7863782
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01384",
    "address": "4250 N Lincoln Ave, Chicago, IL",
    "lat": 41.9585325,
    "lng": -87.682441
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01388",
    "address": "3630 N Southport Ave, Chicago, IL",
    "lat": 41.9480497,
    "lng": -87.6643847
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01393",
    "address": "102 W Division St, Chicago, IL",
    "lat": 41.9041038,
    "lng": -87.6320799
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01395",
    "address": "7342 W Foster Ave, Chicago, IL",
    "lat": 41.9745087,
    "lng": -87.8115831
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01438",
    "address": "1655 E 95th St, Chicago, IL",
    "lat": 41.7203592,
    "lng": -87.5832025
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01446",
    "address": "2550 N Clybourn Ave, Chicago, IL",
    "lat": 41.927276,
    "lng": -87.674546
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01475",
    "address": "11730 S Marshfield Ave, Chicago, IL",
    "lat": 41.6802481,
    "lng": -87.664606
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01725",
    "address": "4660 W Irving Park Rd, Chicago, IL",
    "lat": 41.9556431,
    "lng": -87.7449251
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01728",
    "address": "7030 S Ashland Ave, Chicago, IL",
    "lat": 41.7654918,
    "lng": -87.6644813
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01768",
    "address": "4821 W North Ave, Chicago, IL",
    "lat": 41.908369,
    "lng": -87.7474111
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00682",
    "address": "1333 Western Ave, Chicago Heights, IL",
    "lat": 41.5066722,
    "lng": -87.6721105
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01785",
    "address": "3039 S Cicero Ave, Cicero, IL",
    "lat": 41.8378904,
    "lng": -87.7431106
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01436",
    "address": "303 Holmes Ave, Clarendon Hills, IL",
    "lat": 41.7874134,
    "lng": -87.9499308
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q00701",
    "address": "1701 N Larkin Ave, Crest Hill, IL",
    "lat": 41.5535943,
    "lng": -88.1264874
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01138",
    "address": "6140 Northwest Hwy, Crystal Lake, IL",
    "lat": 42.2287766,
    "lng": -88.3184231
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00700",
    "address": "7329 S Cass Ave, Darien, IL",
    "lat": 41.7534462,
    "lng": -87.9737554
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01795",
    "address": "1000 E Sibley Blvd, Dolton, IL",
    "lat": 41.6239074,
    "lng": -87.5932057
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01190",
    "address": "1040 Summit St, Elgin, IL",
    "lat": 42.0464145,
    "lng": -88.2511143
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01230",
    "address": "1660 Larkin Ave, Elgin, IL",
    "lat": 42.0348643,
    "lng": -88.3191991
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01309",
    "address": "153 Schiller St, Elmhurst, IL",
    "lat": 41.9015873,
    "lng": -87.9370886
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01737",
    "address": "2400 W Main St, Evanston, IL",
    "lat": 42.033702,
    "lng": -87.707098
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00579",
    "address": "21164 S LaGrange Rd, Frankfort, IL",
    "lat": 41.502663,
    "lng": -87.854687
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01310",
    "address": "10203 Grand Ave, Franklin Park, IL",
    "lat": 41.930079,
    "lng": -87.879884
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01201",
    "address": "2164 Bloomingdale Rd, Glendale Heights, IL",
    "lat": 41.9384722,
    "lng": -88.0817862
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01432",
    "address": "9528 S Roberts Rd, Hickory Hills, IL",
    "lat": 41.7175345,
    "lng": -87.8203212
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00817",
    "address": "1069 N Roselle Rd, Hoffman Estates, IL",
    "lat": 42.0477577,
    "lng": -88.0778056
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01202",
    "address": "1485 Palatine Rd, Hoffman Estates, IL",
    "lat": 42.1090736,
    "lng": -88.1161176
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00825",
    "address": "10090 IL-47, Huntley, IL",
    "lat": 42.1833069,
    "lng": -88.4223199
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01203",
    "address": "27555 W IL-120, Lakemoor, IL",
    "lat": 42.3204696,
    "lng": -88.1679804
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00589",
    "address": "1177 S Main St, Lombard, IL",
    "lat": 41.8611673,
    "lng": -88.0154218
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01189",
    "address": "4222 W Elm St, McHenry, IL",
    "lat": 42.3480493,
    "lng": -88.2798274
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01386",
    "address": "800 W North Ave, Melrose Park, IL",
    "lat": 41.908209,
    "lng": -87.843726
  },
  {
    "retailer": "Food 4 Less",
    "machineId": "Q01745",
    "address": "2525 W North Ave, Melrose Park, IL",
    "lat": 41.907907,
    "lng": -87.86874
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01152",
    "address": "333 Euclid Ave, Mount Prospect, IL",
    "lat": 42.0873627,
    "lng": -87.9309634
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01133",
    "address": "1150 W Maple Ave, Mundelein, IL",
    "lat": 42.2774318,
    "lng": -88.0207888
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01182",
    "address": "1501 S Lake St, Mundelein, IL",
    "lat": 42.243758,
    "lng": -87.9928986
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00570",
    "address": "1227 S Naper Blvd, Naperville, IL",
    "lat": 41.7288596,
    "lng": -88.1173517
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00713",
    "address": "2855 95th St, Naperville, IL",
    "lat": 41.7118504,
    "lng": -88.2033435
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q01200",
    "address": "151 Hansen Blvd, North Aurora, IL",
    "lat": 41.80295,
    "lng": -88.37025
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01429",
    "address": "17930 Wolf Rd, Orland Park, IL",
    "lat": 41.5632551,
    "lng": -87.8932836
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00582",
    "address": "2540 US-30, Oswego, IL",
    "lat": 41.7179742,
    "lng": -88.2959319
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01323",
    "address": "481 Busse Hwy, Park Ridge, IL",
    "lat": 42.0157671,
    "lng": -87.8393042
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01437",
    "address": "13460 S Rte 59, Plainfield, IL",
    "lat": 41.638436,
    "lng": -88.203173
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00806",
    "address": "3000 Kirchoff Rd, Rolling Meadows, IL",
    "lat": 42.0788759,
    "lng": -88.0176212
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01375",
    "address": "20 S Weber Rd, Romeoville, IL",
    "lat": 41.638035,
    "lng": -88.124389
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01186",
    "address": "2501 W Schaumburg Rd, Schaumburg, IL",
    "lat": 42.0230335,
    "lng": -88.1433289
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01206",
    "address": "1151 S Roselle Rd, Schaumburg, IL",
    "lat": 42.006316,
    "lng": -88.0781963
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01308",
    "address": "9449 Skokie Blvd, Skokie, IL",
    "lat": 42.0528831,
    "lng": -87.7447132
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01204",
    "address": "375 S Randall Rd, South Elgin, IL",
    "lat": 42.014446,
    "lng": -88.336355
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01194",
    "address": "217 W Irving Park Rd, Streamwood, IL",
    "lat": 42.0148652,
    "lng": -88.1881502
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00580",
    "address": "17117 S Harlem Ave, Tinley Park, IL",
    "lat": 41.598531,
    "lng": -87.794034
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01222",
    "address": "547 W Liberty St, Wauconda, IL",
    "lat": 42.2594357,
    "lng": -88.1519126
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01088",
    "address": "922 N Green Bay Rd, Waukegan, IL",
    "lat": 42.3742098,
    "lng": -87.8838367
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01212",
    "address": "3124 N Lewis Ave, Waukegan, IL",
    "lat": 42.4091063,
    "lng": -87.8571101
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00574",
    "address": "30 Danada Square W, Wheaton, IL",
    "lat": 41.8315786,
    "lng": -88.1051622
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00578",
    "address": "2031 N Main St, Wheaton, IL",
    "lat": 41.8866384,
    "lng": -88.105961
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01373",
    "address": "411 Green Bay Rd, Wilmette, IL",
    "lat": 42.0726214,
    "lng": -87.7063743
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q00571",
    "address": "2317 75th St, Woodridge, IL",
    "lat": 41.7492701,
    "lng": -88.0381918
  },
  {
    "retailer": "Jewel-Osco",
    "machineId": "Q01143",
    "address": "145 S Eastwood Dr, Woodstock, IL",
    "lat": 42.3154988,
    "lng": -88.4342381
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01073",
    "address": "2700 N Ballard Rd, Appleton, WI",
    "lat": 44.2863069,
    "lng": -88.3724434
  },
  {
    "retailer": "Metro Market",
    "machineId": "Q01664",
    "address": "17630 W Bluemound Rd, Brookfield, WI",
    "lat": 43.037814,
    "lng": -88.1321291
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01678",
    "address": "17295 W Capitol Dr, Brookfield, WI",
    "lat": 43.0906879,
    "lng": -88.1442582
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01732",
    "address": "15170 W Greenfield Ave, Brookfield, WI",
    "lat": 43.0179555,
    "lng": -88.1016882
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00730",
    "address": "9200 N Green Bay Rd, Brown Deer, WI",
    "lat": 43.1846349,
    "lng": -87.9625371
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01086",
    "address": "3010 Cahill Main, Fitchburg, WI",
    "lat": 43.0184249,
    "lng": -89.4217262
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01652",
    "address": "W16200 Mequon Rd, Germantown, WI",
    "lat": 43.220972,
    "lng": -88.110528
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01650",
    "address": "301 Falls Rd, Grafton, WI",
    "lat": 43.308742,
    "lng": -87.961676
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01093",
    "address": "3161 Village Square Dr, Hartland, WI",
    "lat": 43.1031864,
    "lng": -88.365283
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00694",
    "address": "5710 75th St, Kenosha, WI",
    "lat": 42.5671819,
    "lng": -88.2089722
  },
  {
    "retailer": "Woodman's Market",
    "machineId": "Q00709",
    "address": "7145 120th Ave, Kenosha, WI",
    "lat": 42.5701227,
    "lng": -87.948029
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01040",
    "address": "2811 18th St, Kenosha, WI",
    "lat": 42.6243913,
    "lng": -87.8432212
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00693",
    "address": "6655 McKee Rd, Madison, WI",
    "lat": 43.0156143,
    "lng": -89.4978767
  },
  {
    "retailer": "Metro Market",
    "machineId": "Q01504",
    "address": "6010 Cottage Grove Rd, Madison, WI",
    "lat": 43.0852809,
    "lng": -89.2759269
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01111",
    "address": "W14435 Appleton Ave, Menomonee Falls, WI",
    "lat": 43.15959,
    "lng": -88.090078
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00160",
    "address": "605 E Lyon St, Milwaukee, WI",
    "lat": 43.0489354,
    "lng": -87.9040182
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01043",
    "address": "3701 S 27th St, Milwaukee, WI",
    "lat": 42.9774324,
    "lng": -87.9498932
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01114",
    "address": "7401 Good Hope Rd, Milwaukee, WI",
    "lat": 43.1481518,
    "lng": -88.0661247
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01677",
    "address": "5700 W Capitol Dr, Milwaukee, WI",
    "lat": 43.091496,
    "lng": -87.9841047
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01044",
    "address": "2820 S Green Bay Rd, Mount Pleasant, WI",
    "lat": 42.7009014,
    "lng": -87.8532732
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01786",
    "address": "1010 N Rochester St, Mukwonago, WI",
    "lat": 42.8751336,
    "lng": -88.3367607
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q00696",
    "address": "2320 W Ryan Rd, Oak Creek, WI",
    "lat": 42.8745349,
    "lng": -87.9479481
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01052",
    "address": "8770 S Howell Ave, Oak Creek, WI",
    "lat": 42.8849511,
    "lng": -87.9097619
  },
  {
    "retailer": "Metro Market",
    "machineId": "Q01654",
    "address": "2160 Silvernail Rd, Pewaukee, WI",
    "lat": 43.0444182,
    "lng": -88.2609262
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01047",
    "address": "1202 N Green Bay Rd, Racine, WI",
    "lat": 42.7356435,
    "lng": -87.8407375
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01095",
    "address": "N 65th St W24838, Sussex, WI",
    "lat": 44.374725,
    "lng": -89.743881
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01799",
    "address": "405 N Wales Rd, Wales, WI",
    "lat": 43.0102586,
    "lng": -88.3851263
  },
  {
    "retailer": "Pick 'n Save",
    "machineId": "Q01053",
    "address": "2625 S 108th St, West Allis, WI",
    "lat": 42.9965871,
    "lng": -88.0499271
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01016",
    "address": "11700 Olio Rd, Fishers, IN",
    "lat": 39.9596898,
    "lng": -85.9224979
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01091",
    "address": "7450 Fishers Station Dr, Fishers, IN",
    "lat": 39.9573929,
    "lng": -86.0377789
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01076",
    "address": "2200 Independence Dr, Greenwood, IN",
    "lat": 39.5839596,
    "lng": -86.1027517
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00527",
    "address": "680 Twin Aire Dr, Indianapolis, IN",
    "lat": 39.758235,
    "lng": -86.115305
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00852",
    "address": "5718 Crawfordsville Rd, Indianapolis, IN",
    "lat": 39.7995036,
    "lng": -86.2614635
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01014",
    "address": "5911 Madison Ave, Indianapolis, IN",
    "lat": 39.6803674,
    "lng": -86.129457
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01396",
    "address": "172 Logan St, Noblesville, IN",
    "lat": 40.049898,
    "lng": -86.0197776
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01080",
    "address": "150 W 161st St, Westfield, IN",
    "lat": 40.0220489,
    "lng": -86.1614542
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01665",
    "address": "17447 Carey Rd, Westfield, IN",
    "lat": 40.0412354,
    "lng": -86.1058087
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01003",
    "address": "23849 West Rd, Brownstown, MI",
    "lat": 42.1364503,
    "lng": -83.2642454
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01090",
    "address": "20645 Gibraltar Rd, Brownstown, MI",
    "lat": 42.0934294,
    "lng": -83.2345672
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00860",
    "address": "45540 Michigan Ave, Canton, MI",
    "lat": 42.2741952,
    "lng": -83.4882296
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00865",
    "address": "1905 N Canton Center Rd, Canton, MI",
    "lat": 42.319224,
    "lng": -83.4918435
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00871",
    "address": "25780 Middlebelt Rd, Farmington Hills, MI",
    "lat": 42.483635,
    "lng": -83.337303
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01360",
    "address": "12731 S Saginaw St, Grand Blanc, MI",
    "lat": 42.9269708,
    "lng": -83.629392
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00853",
    "address": "108 W Highland Rd, Howell, MI",
    "lat": 42.6243326,
    "lng": -83.9275018
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00815",
    "address": "1821 S Cedar St, Imlay City, MI",
    "lat": 43.012129,
    "lng": -83.0695806
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00803",
    "address": "2060 DIX Hwy, Lincoln Park, MI",
    "lat": 42.2548587,
    "lng": -83.1955187
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00885",
    "address": "30935 Five Mile Rd, Livonia, MI",
    "lat": 42.397691,
    "lng": -83.34939
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01089",
    "address": "21555 21 Mile Rd, Macom, MI",
    "lat": 42.643584,
    "lng": -82.901511
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00856",
    "address": "17447 Haggerty Rd, Northville, MI",
    "lat": 42.4133064,
    "lng": -83.4355056
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01352",
    "address": "47650 Grand River Ave, Novi, MI",
    "lat": 42.4918787,
    "lng": -83.5184804
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00849",
    "address": "9700 Chilson Commons Cir, Pinckney, MI",
    "lat": 42.4622198,
    "lng": -83.8309282
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01082",
    "address": "4888 N Adams Rd, Rochester, MI",
    "lat": 42.6837583,
    "lng": -83.1941662
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01066",
    "address": "65 S Livernois Rd, Rochester Hills, MI",
    "lat": 42.6802719,
    "lng": -83.1514895
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00864",
    "address": "14945 23 Mile Rd, Shelby Township, MI",
    "lat": 42.6738284,
    "lng": -82.9770307
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00684",
    "address": "7000 Monroe Blvd, Taylor, MI",
    "lat": 42.2577024,
    "lng": -83.2514697
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00786",
    "address": "1237 Coolidge Hwy, Troy, MI",
    "lat": 42.5424491,
    "lng": -83.189836
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00801",
    "address": "28250 Dequindre Rd, Warren, MI",
    "lat": 42.4996996,
    "lng": -83.0847274
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00858",
    "address": "26233 Hoover Rd, Warren, MI",
    "lat": 42.4868668,
    "lng": -83.007804
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01353",
    "address": "64660 Van Dyke Ave, Washington, MI",
    "lat": 42.769623,
    "lng": -83.018279
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00867",
    "address": "5111 Highland Rd, Waterford, MI",
    "lat": 42.6587662,
    "lng": -83.3871338
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00683",
    "address": "36430 Ford Rd, Westland, MI",
    "lat": 42.3261998,
    "lng": -83.4001904
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00691",
    "address": "31300 Michigan Ave, Westland, MI",
    "lat": 42.2873446,
    "lng": -83.3472338
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01106",
    "address": "7350 N Middlebelt Rd, Westland, MI",
    "lat": 42.34163,
    "lng": -83.3307378
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00863",
    "address": "2010 Whittaker Rd, Ypsilanti, MI",
    "lat": 42.2120572,
    "lng": -83.6209969
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00828",
    "address": "6095 Gender Rd, Canal Winchester, OH",
    "lat": 39.8558249,
    "lng": -82.8319441
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01398",
    "address": "1095 S Main St, Centerville, OH",
    "lat": 39.607023,
    "lng": -84.1634402
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00697",
    "address": "6165 Glenway Ave, Cincinnati, OH",
    "lat": 39.1428442,
    "lng": -84.6228349
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00705",
    "address": "4500 Montgomery Rd, Cincinnati, OH",
    "lat": 39.1586985,
    "lng": -84.4554681
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00710",
    "address": "4613 Marburg Ave, Cincinnati, OH",
    "lat": 39.160204,
    "lng": -84.4272491
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00750",
    "address": "3609 Warsaw Ave, Cincinnati, OH",
    "lat": 39.109397,
    "lng": -84.5715776
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00759",
    "address": "10595 Springfield Pike, Cincinnati, OH",
    "lat": 39.2600753,
    "lng": -84.4712447
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00760",
    "address": "7132 Hamilton Ave, Cincinnati, OH",
    "lat": 39.2245276,
    "lng": -84.5477861
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00761",
    "address": "3636 Springdale Rd, Cincinnati, OH",
    "lat": 39.2490706,
    "lng": -84.5997538
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00772",
    "address": "5910 Harrison Ave, Cincinnati, OH",
    "lat": 39.1767693,
    "lng": -84.6413796
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01038",
    "address": "1 W Corry St, Cincinnati, OH",
    "lat": 39.1285273,
    "lng": -84.5091863
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01117",
    "address": "11390 Montgomery Rd, Cincinnati, OH",
    "lat": 39.2715172,
    "lng": -84.3259551
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00620",
    "address": "150 W Sycamore St, Columbus, OH",
    "lat": 39.9497142,
    "lng": -83.001981
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00645",
    "address": "7000 E Broad St, Columbus, OH",
    "lat": 39.984451,
    "lng": -82.8161623
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00671",
    "address": "1177 Polaris Pkwy, Columbus, OH",
    "lat": 40.1402616,
    "lng": -82.990646
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00681",
    "address": "1375 Chambers Rd, Columbus, OH",
    "lat": 39.9925518,
    "lng": -83.043563
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00659",
    "address": "7625 Sawmill Rd, Dublin, OH",
    "lat": 40.1212729,
    "lng": -83.0923469
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00677",
    "address": "7100 Hospital Dr, Dublin, OH",
    "lat": 40.1029665,
    "lng": -83.1642895
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00698",
    "address": "300 S Hamilton Rd, Gahanna, OH",
    "lat": 40.0117164,
    "lng": -82.8670069
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00708",
    "address": "1365 Stoneridge Dr, Gahanna, OH",
    "lat": 40.0542734,
    "lng": -82.8675521
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00687",
    "address": "5800 W Broad St, Galloway, OH",
    "lat": 39.9518037,
    "lng": -83.1563198
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00857",
    "address": "2474 Stringtown Rd, Grove City, OH",
    "lat": 39.8828146,
    "lng": -83.0686903
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00651",
    "address": "6011 Groveport Rd, Groveport, OH",
    "lat": 39.8531937,
    "lng": -82.8992631
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00688",
    "address": "6417 Columbus Pike, Lewis Center, OH",
    "lat": 40.2028739,
    "lng": -83.0266829
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00673",
    "address": "5161 Hampsted Village Center Way, New Albany, OH",
    "lat": 40.088331,
    "lng": -82.825308
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00628",
    "address": "1045 Hill Rd N, Pickerington, OH",
    "lat": 39.9066888,
    "lng": -82.7794081
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01058",
    "address": "12116 Sycamore Trace, Plain City, OH",
    "lat": 41.158978,
    "lng": -81.445456
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00639",
    "address": "6580 E Main St, Reynoldsburg, OH",
    "lat": 39.9563229,
    "lng": -82.8219131
  },
  {
    "retailer": "Kroger",
    "machineId": "Q00646",
    "address": "8460 E Main St, Reynoldsburg, OH",
    "lat": 39.9568712,
    "lng": -82.7733054
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01391",
    "address": "780 Northwoods Blvd, Vandalia, OH",
    "lat": 39.8992245,
    "lng": -84.1840918
  },
  {
    "retailer": "Kroger",
    "machineId": "Q01035",
    "address": "8000 Princeton Glendale Rd, West Chester, OH",
    "lat": 39.35916,
    "lng": -84.4582975
  },
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
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01453",
    "address": "5230 W Franklin Rd",
    "cityState": "Boise, ID",
    "lat": 43.603899,
    "lng": -116.2460016
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01454",
    "address": "110 E Myrtle St",
    "cityState": "Boise, ID",
    "lat": 39.4349483,
    "lng": -75.2255513
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01458",
    "address": "8200 W Fairview Ave",
    "cityState": "Boise, ID",
    "lat": 43.6207269,
    "lng": -116.2855789
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01459",
    "address": "10700 W Ustick Rd",
    "cityState": "Boise, ID",
    "lat": 43.6345979,
    "lng": -116.3162708
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01467",
    "address": "10751 W Overland Rd",
    "cityState": "Boise, ID",
    "lat": 43.5892272,
    "lng": -116.3163716
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01468",
    "address": "4700 N Eagle Rd",
    "cityState": "Boise, ID",
    "lat": 43.6473806,
    "lng": -116.3521025
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01518",
    "address": "1653 S Vista Ave",
    "cityState": "Boise, ID",
    "lat": 43.5890723,
    "lng": -116.2155793
  },
  {
    "retailer": "Albertsons",
    "machineId": "Q01448",
    "address": "700 E Avalon St",
    "cityState": "Kuna, ID",
    "lat": 43.4895765,
    "lng": -116.405352
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01460",
    "address": "1407 W Chinden Blvd",
    "cityState": "Meridian, ID",
    "lat": 43.6607065,
    "lng": -116.4116279
  },
  {
    "retailer": "Fred Meyer",
    "machineId": "Q01463",
    "address": "1400 W Chinden Blvd",
    "cityState": "Meridian, ID",
    "lat": 43.6659779,
    "lng": -116.4110444
  },
  {
    "retailer": "WinCo Foods",
    "machineId": "Q01456",
    "address": "1175 N Happy Valley Rd",
    "cityState": "Nampa, ID",
    "lat": 32.4337412,
    "lng": -104.293126
  }
];

export const states = ["AZ","CA","CO","DE","GA","ID","IL","IN","KY","MA","MD","MI","NV","NH","NJ","OH","OR","PA","TN","TX","UT","VA","WA","WI"];

export const stateCenters = {
  AZ: [33.729759, -111.431221],
  CA: [36.778259, -119.417931],
  DE: [38.9108, -75.5277],
  CO: [39.550051, -105.782067],
  GA: [32.165622, -82.900075],
  ID: [44.0682, -114.7420],
  IL: [40.633125, -89.398528],
  IN: [40.551217, -85.602364],
  KY: [37.839333, -84.270018],
  MD: [39.045755, -76.641271],
  MA: [42.4072, -71.3824],
  MI: [44.182205, -84.506836],
  NH: [43.1939, -71.5724],
  NV: [38.80261, -116.419389],
  NJ: [40.058324, -74.405661],
  OH: [40.417287, -82.907123],
  OR: [43.804133, -120.554201],
  PA: [41.203323, -77.194525],
  TN: [35.517491, -86.580447],
  TX: [31.968599, -99.901813],
  UT: [39.32098, -111.093731],
  VA: [37.431573, -78.656894],
  WA: [47.751074, -120.740139],
  WI: [44.268543, -89.616508]
};

export default vendingDataWithCoords;
