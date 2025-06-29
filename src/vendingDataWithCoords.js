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
  }
];

export default vendingDataWithCoords;
