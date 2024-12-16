"use strict";
const input_1 = [
    39687,
    86219,
    48536,
    19932,
    87646,
    18305,
    60437,
    35451,
    93478,
    19754,
    85455,
    82836,
    55217,
    11698,
    93753,
    93422,
    57366,
    97937,
    49478,
    14644,
    19399,
    74271,
    30811,
    39084,
    50012,
    26833,
    85916,
    48783,
    60349,
    48397,
    12784,
    26511,
    25828,
    41783,
    86788,
    52646,
    47960,
    33628,
    60975,
    18734,
    97411,
    98587,
    13899,
    83942,
    27222,
    92406,
    58334,
    57066,
    39164,
    41041,
    53063,
    41396,
    95245,
    83977,
    23525,
    28481,
    57089,
    95507,
    14606,
    83403,
    20870,
    52065,
    10688,
    14754,
    58940,
    34160,
    40229,
    19557,
    76326,
    18064,
    50829,
    24524,
    45230,
    89022,
    66250,
    90805,
    56019,
    67451,
    76068,
    77238,
    93710,
    79065,
    24363,
    29740,
    87834,
    30513,
    15378,
    13130,
    66810,
    98441,
    83594,
    43148,
    25005,
    98638,
    78319,
    90823,
    16089,
    14911,
    60443,
    94516,
    91753,
    15992,
    79270,
    67191,
    32268,
    41819,
    41351,
    44832,
    72750,
    34941,
    65976,
    56038,
    28753,
    63264,
    26145,
    71576,
    97331,
    22775,
    85844,
    25823,
    34176,
    45060,
    31332,
    32455,
    87120,
    73733,
    37954,
    28922,
    39972,
    30973,
    86546,
    80526,
    86070,
    55954,
    37437,
    63111,
    96362,
    75508,
    69428,
    28796,
    57288,
    73193,
    25130,
    38097,
    98834,
    32103,
    68331,
    22986,
    28918,
    27607,
    98022,
    39035,
    62361,
    78321,
    62399,
    84309,
    42350,
    51744,
    58919,
    37337,
    47722,
    29319,
    69603,
    56191,
    62286,
    28227,
    36024,
    60918,
    23022,
    38410,
    29383,
    18625,
    25141,
    69831,
    56740,
    26869,
    60352,
    45390,
    45676,
    69684,
    20234,
    58742,
    99779,
    61992,
    52853,
    46535,
    81327,
    75451,
    25891,
    78175,
    33500,
    78157,
    51091,
    73117,
    66382,
    59120,
    48683,
    21096,
    81257,
    30677,
    70554,
    12626,
    13513,
    71553,
    53798,
    48705,
    46863,
    90815,
    15964,
    68964,
    76668,
    64426,
    29505,
    33746,
    10038,
    48123,
    77274,
    29578,
    55816,
    18618,
    62734,
    12764,
    61615,
    44776,
    69008,
    69615,
    21562,
    41425,
    21356,
    28712,
    56355,
    11748,
    19994,
    10033,
    11253,
    14845,
    78797,
    66173,
    70836,
    59179,
    53947,
    84118,
    87855,
    62508,
    99196,
    93172,
    99062,
    77322,
    16386,
    95019,
    67124,
    23658,
    22040,
    20095,
    86545,
    94185,
    65351,
    43248,
    30440,
    74737,
    46947,
    80582,
    49951,
    67305,
    85943,
    26645,
    94034,
    69322,
    81573,
    85036,
    32378,
    72709,
    66311,
    14984,
    42649,
    91802,
    75402,
    39996,
    18325,
    61602,
    74612,
    15431,
    82611,
    30159,
    68269,
    64640,
    24359,
    66906,
    12361,
    72942,
    98451,
    59149,
    44917,
    22929,
    60258,
    63980,
    32828,
    51001,
    10733,
    20720,
    79366,
    61465,
    49575,
    78447,
    12815,
    12157,
    27474,
    95075,
    96642,
    29226,
    96829,
    84841,
    49793,
    13351,
    50977,
    50215,
    87295,
    98087,
    43530,
    29741,
    24141,
    67314,
    57310,
    20572,
    75549,
    33083,
    49934,
    16255,
    22048,
    67521,
    22178,
    40137,
    93021,
    90141,
    20161,
    31200,
    49277,
    15343,
    69746,
    94592,
    93759,
    42111,
    45727,
    71307,
    24277,
    10940,
    87027,
    77454,
    73569,
    32144,
    83494,
    86165,
    21035,
    51419,
    62394,
    20590,
    16178,
    32526,
    66974,
    24041,
    50807,
    36530,
    34288,
    25885,
    39957,
    36622,
    43748,
    22540,
    47812,
    60778,
    37116,
    74490,
    23646,
    10244,
    93378,
    92192,
    49671,
    40968,
    30997,
    44903,
    97415,
    42061,
    67473,
    71346,
    35117,
    68817,
    55081,
    63660,
    27470,
    85409,
    79664,
    59103,
    89854,
    34937,
    62589,
    31126,
    59987,
    41702,
    53158,
    47155,
    15410,
    33512,
    17682,
    85010,
    42326,
    74438,
    90691,
    24647,
    75856,
    10008,
    59249,
    61498,
    92390,
    98660,
    64740,
    42786,
    95159,
    88981,
    10814,
    82896,
    59582,
    36481,
    64320,
    78275,
    12031,
    55466,
    78361,
    27572,
    65372,
    25862,
    45103,
    46928,
    85030,
    88276,
    18649,
    35681,
    29111,
    94218,
    86252,
    93823,
    77315,
    29554,
    69304,
    67449,
    59720,
    97180,
    42054,
    84226,
    77336,
    95184,
    74680,
    44559,
    42923,
    23122,
    68282,
    18348,
    43175,
    47771,
    71875,
    51767,
    15666,
    47306,
    67340,
    39560,
    27302,
    22715,
    19262,
    30522,
    41704,
    69346,
    69691,
    39771,
    67926,
    33936,
    27443,
    71926,
    89325,
    95998,
    49871,
    18672,
    60268,
    95709,
    58557,
    86330,
    66612,
    63979,
    45966,
    30432,
    88832,
    16475,
    43091,
    91285,
    74407,
    74337,
    44472,
    51748,
    66315,
    70339,
    32919,
    34170,
    29144,
    68669,
    79046,
    68797,
    61355,
    66045,
    65345,
    34776,
    62024,
    22080,
    41658,
    40489,
    77414,
    87328,
    39847,
    62166,
    14946,
    46608,
    61626,
    68038,
    74304,
    33687,
    89997,
    71497,
    70649,
    75076,
    39550,
    42772,
    27314,
    52382,
    10501,
    60075,
    67162,
    18539,
    98602,
    86708,
    18832,
    34806,
    57052,
    26225,
    86466,
    22149,
    72545,
    61056,
    42425,
    18465,
    96275,
    93622,
    24920,
    76211,
    42390,
    22748,
    23429,
    28323,
    69320,
    39102,
    27448,
    60718,
    38364,
    65294,
    78308,
    71470,
    18756,
    21876,
    23964,
    63538,
    27576,
    11707,
    84686,
    26018,
    49866,
    76498,
    18202,
    32295,
    13631,
    82697,
    93416,
    33240,
    50664,
    24764,
    89632,
    30109,
    91551,
    61710,
    94996,
    58869,
    32931,
    83906,
    63729,
    92094,
    57957,
    14369,
    87984,
    73328,
    85008,
    57450,
    65808,
    20553,
    80030,
    24598,
    14926,
    63774,
    56586,
    42048,
    29688,
    81927,
    37463,
    44318,
    38022,
    40289,
    36192,
    34815,
    30912,
    29375,
    10954,
    20827,
    71373,
    55907,
    66557,
    20370,
    42450,
    47937,
    35114,
    50280,
    53360,
    52625,
    74506,
    78581,
    50670,
    67067,
    53047,
    28877,
    42353,
    71840,
    62376,
    53738,
    24879,
    69261,
    57133,
    33644,
    73635,
    12036,
    27599,
    41620,
    31518,
    43210,
    29331,
    80103,
    58324,
    72535,
    50973,
    19898,
    95111,
    62134,
    22738,
    85240,
    41403,
    10562,
    66230,
    66002,
    29925,
    86609,
    16196,
    26610,
    28817,
    64124,
    81667,
    49763,
    64284,
    62185,
    99896,
    46020,
    17194,
    74962,
    13420,
    16973,
    89651,
    67742,
    54231,
    41902,
    93241,
    53267,
    75234,
    89219,
    99065,
    23411,
    41648,
    78473,
    46849,
    96778,
    36339,
    66106,
    83602,
    60191,
    39157,
    75269,
    54146,
    64769,
    32005,
    95839,
    80529,
    30527,
    83243,
    58199,
    78364,
    15803,
    19540,
    24332,
    69804,
    89498,
    32922,
    51186,
    64371,
    67761,
    14931,
    33983,
    23532,
    60995,
    46968,
    71489,
    15532,
    60734,
    80923,
    55415,
    33838,
    38933,
    28270,
    64729,
    82909,
    21322,
    20606,
    20323,
    65612,
    42742,
    60541,
    69361,
    83643,
    33413,
    80131,
    60963,
    31622,
    76264,
    78435,
    64808,
    28784,
    84514,
    99920,
    64277,
    32066,
    61170,
    53590,
    75500,
    21399,
    57159,
    95725,
    47434,
    14728,
    86794,
    52400,
    64448,
    27278,
    54885,
    79570,
    85379,
    19497,
    10131,
    82510,
    37690,
    19278,
    28841,
    27287,
    32480,
    56252,
    77005,
    38978,
    12387,
    17737,
    55292,
    95579,
    60386,
    83024,
    43990,
    14130,
    97781,
    25377,
    10359,
    44237,
    30104,
    93883,
    28533,
    52211,
    28015,
    54979,
    59145,
    88731,
    92214,
    60194,
    96948,
    83445,
    44724,
    99575,
    59780,
    88198,
    67804,
    15309,
    63776,
    39191,
    88847,
    51336,
    67934,
    61623,
    30153,
    13866,
    13232,
    18107,
    24272,
    37532,
    74619,
    18266,
    69298,
    74422,
    83542,
    93767,
    70226,
    83460,
    30637,
    17147,
    47019,
    61400,
    99313,
    24905,
    64661,
    80464,
    59801,
    26787,
    30009,
    46714,
    85549,
    80405,
    90469,
    47988,
    54532,
    49943,
    77697,
    11487,
    41097,
    96136,
    65608,
    55729,
    64859,
    51213,
    95044,
    26875,
    20266,
    54279,
    49123,
    25659,
    71503,
    25042,
    85683,
    75203,
    15024,
    48884,
    20362,
    29757,
    69591,
    52463,
    96531,
    18691,
    38982,
    46845,
    43757,
    59287,
    53671,
    71592,
    15612,
    31062,
    27714,
    81451,
    83692,
    17667,
    38165,
    31407,
    54602,
    16418,
    24549,
    68171,
    45107,
    85000,
    52279,
    39804,
    54930,
    33435,
    35192,
    28963,
    62401,
    62057,
    66086,
    68558,
    64279,
    53866,
    53322,
    57423,
    84187,
    36345,
    14838,
    66499,
    12383,
    49461,
    63604,
    70558,
    25392,
    76916,
    92341,
    35379,
    76956,
    95342,
    70320,
    69676,
    61564,
    87659,
    76459,
    58765,
    60496,
    95443,
    23163,
    42578,
    35408,
    73211,
    19253,
    81387,
    60736,
    93733,
    35524,
    10497,
    82104,
    63189,
    69699,
    64848,
    79082,
    25166,
    67709,
    89006,
    31258,
    78044,
    28810,
    85541,
    25783,
    84160,
    60869,
    15908,
    21392,
    91823,
    68112,
    68487,
    79369,
    33236,
    53085,
    25758,
    95806,
    79198,
    87996,
    11943,
    98740,
    63599,
    30758,
    78768,
    29026,
    62476,
    19193,
    47322,
    30951,
    42954,
    32520,
    31248,
    58121,
    30540,
    35353,
    72450,
    69146,
    87152,
    31122,
    58215,
    92645,
    12395,
    88681,
    37459,
    36993,
    48597,
    94499,
    68261,
    35126,
    95513,
    73472,
    28325,
    83597,
    12914,
    39621,
    10029,
    85400,
];
const input_2 = [
    54930,
    31559,
    73145,
    82178,
    97411,
    78515,
    30432,
    49981,
    61402,
    38933,
    20590,
    14896,
    89552,
    99229,
    84187,
    97415,
    97415,
    74337,
    74337,
    38161,
    13589,
    80973,
    43748,
    14139,
    35681,
    68646,
    94351,
    65976,
    37405,
    24524,
    96876,
    32005,
    50973,
    18470,
    84403,
    85455,
    55292,
    88834,
    32865,
    34272,
    13386,
    32005,
    55558,
    39621,
    72250,
    40726,
    43748,
    38522,
    54930,
    87903,
    31354,
    72724,
    79046,
    29994,
    23626,
    78774,
    88281,
    89601,
    37413,
    69108,
    65520,
    31711,
    43748,
    74862,
    92984,
    79046,
    15374,
    39621,
    14606,
    99891,
    29383,
    85455,
    19089,
    79046,
    51691,
    65372,
    50673,
    12866,
    65372,
    83243,
    65976,
    73391,
    74337,
    32931,
    79002,
    20720,
    30432,
    97438,
    70609,
    68294,
    50359,
    83382,
    37240,
    65372,
    50811,
    58614,
    93976,
    13087,
    12156,
    50973,
    26787,
    37046,
    50973,
    65372,
    35681,
    54930,
    69285,
    11020,
    91217,
    23646,
    65070,
    47570,
    81142,
    23646,
    88981,
    17123,
    79046,
    79740,
    94770,
    10501,
    91199,
    20266,
    25957,
    16146,
    19937,
    97415,
    51285,
    96517,
    32931,
    99605,
    62291,
    69673,
    73161,
    30432,
    34788,
    97415,
    88981,
    30398,
    81796,
    20675,
    32931,
    42247,
    51213,
    15664,
    26533,
    60744,
    13196,
    65372,
    65976,
    43147,
    83243,
    20720,
    42612,
    83243,
    15803,
    20526,
    39621,
    22556,
    92305,
    88981,
    83460,
    91248,
    85455,
    19231,
    73859,
    18100,
    83100,
    32611,
    88981,
    13292,
    92881,
    84889,
    26391,
    15803,
    18537,
    48559,
    24016,
    32931,
    55292,
    51183,
    15201,
    39621,
    17566,
    70009,
    15896,
    20590,
    20620,
    65976,
    91886,
    46303,
    61400,
    29280,
    31645,
    43748,
    70259,
    20590,
    38424,
    58463,
    48491,
    65122,
    61053,
    43309,
    74337,
    39621,
    20720,
    20590,
    35681,
    71503,
    69448,
    19189,
    55292,
    98722,
    73351,
    29460,
    84187,
    58056,
    43748,
    68732,
    65976,
    43748,
    31263,
    71426,
    18256,
    55292,
    44200,
    29383,
    80490,
    32594,
    55560,
    99731,
    55292,
    39388,
    41606,
    82834,
    97411,
    74337,
    23324,
    43748,
    75361,
    10501,
    35681,
    92551,
    85455,
    58746,
    43088,
    44793,
    76397,
    55292,
    74377,
    50973,
    32931,
    92851,
    24243,
    18432,
    53685,
    84851,
    50443,
    97411,
    89706,
    79046,
    71503,
    10501,
    40689,
    65372,
    39673,
    53881,
    35681,
    74264,
    74337,
    82011,
    89449,
    38642,
    30432,
    25526,
    24834,
    79129,
    23646,
    41604,
    29105,
    47315,
    54077,
    87294,
    37415,
    25725,
    50973,
    32005,
    73902,
    70478,
    96235,
    90254,
    20590,
    55292,
    85455,
    31273,
    50973,
    57267,
    71587,
    98441,
    55292,
    55900,
    88638,
    21535,
    23016,
    74337,
    89570,
    29383,
    83243,
    55673,
    20590,
    22801,
    87851,
    35759,
    65372,
    80850,
    23646,
    99614,
    35681,
    92194,
    98441,
    45244,
    55292,
    39621,
    87645,
    56180,
    65310,
    79046,
    50973,
    85455,
    74337,
    30432,
    32931,
    54930,
    33176,
    64438,
    30432,
    83204,
    71955,
    35290,
    97411,
    82043,
    97411,
    43395,
    50234,
    31990,
    79046,
    23668,
    65372,
    29383,
    20590,
    86307,
    35248,
    25280,
    33870,
    38933,
    65976,
    38491,
    16522,
    99622,
    94518,
    96291,
    97415,
    77854,
    98477,
    32931,
    39146,
    65372,
    56856,
    64266,
    25636,
    20520,
    73874,
    49028,
    57999,
    97415,
    69485,
    82321,
    47880,
    14606,
    75730,
    96764,
    35945,
    18761,
    32005,
    62789,
    38933,
    30432,
    30581,
    20730,
    41097,
    76643,
    57942,
    19889,
    85455,
    23469,
    71503,
    79046,
    17936,
    15768,
    89572,
    50973,
    66375,
    96295,
    24524,
    42666,
    71503,
    54930,
    88981,
    11015,
    26787,
    29383,
    95463,
    99412,
    58161,
    13452,
    97415,
    78023,
    44617,
    22058,
    89818,
    55292,
    74337,
    63656,
    84187,
    20590,
    97411,
    97411,
    32931,
    43748,
    53800,
    45484,
    24524,
    79046,
    55720,
    23748,
    19319,
    17984,
    20651,
    97415,
    38933,
    61400,
    74483,
    36566,
    32005,
    63281,
    30968,
    10501,
    96975,
    73716,
    97415,
    50973,
    79227,
    20266,
    89529,
    80745,
    79046,
    96777,
    77218,
    50919,
    31700,
    10501,
    77315,
    50973,
    24524,
    97411,
    71081,
    10711,
    35428,
    32931,
    85455,
    71001,
    20866,
    41097,
    78162,
    65976,
    41097,
    20590,
    87688,
    20724,
    36142,
    62700,
    10501,
    49926,
    70587,
    24463,
    55292,
    35681,
    26787,
    26787,
    43748,
    24524,
    50973,
    35681,
    71503,
    49897,
    42771,
    32931,
    42856,
    28495,
    97411,
    46975,
    84300,
    97411,
    96815,
    81914,
    48612,
    26787,
    61624,
    88918,
    45208,
    92268,
    29383,
    90276,
    91031,
    42581,
    29383,
    56210,
    97415,
    32931,
    97411,
    26110,
    24524,
    65027,
    29383,
    48576,
    20720,
    43748,
    57870,
    33596,
    43930,
    16823,
    32931,
    65372,
    62251,
    10501,
    39621,
    24677,
    39692,
    62896,
    88981,
    90413,
    77315,
    79085,
    38933,
    79046,
    79046,
    97415,
    26478,
    62612,
    61828,
    92315,
    25904,
    32005,
    11388,
    71503,
    61063,
    97714,
    32005,
    84165,
    82518,
    65372,
    27739,
    41212,
    33498,
    38933,
    17950,
    82294,
    19320,
    43748,
    20831,
    61400,
    33433,
    38933,
    35681,
    24256,
    32931,
    51213,
    51322,
    39621,
    24609,
    77315,
    68872,
    29018,
    83438,
    97411,
    54930,
    86341,
    79847,
    51213,
    89532,
    59179,
    15741,
    44761,
    43748,
    42459,
    58525,
    70925,
    43556,
    11393,
    43748,
    84187,
    86503,
    36452,
    29383,
    54930,
    83243,
    33315,
    73028,
    70491,
    64772,
    43748,
    95264,
    63383,
    49204,
    60846,
    67406,
    44437,
    82013,
    39621,
    97415,
    84187,
    29383,
    54930,
    76258,
    46068,
    87478,
    46035,
    23646,
    65372,
    41097,
    43748,
    91346,
    84369,
    97411,
    54233,
    27440,
    86424,
    52760,
    35681,
    64491,
    97411,
    32005,
    20590,
    31074,
    37578,
    39621,
    93438,
    39621,
    46896,
    86405,
    32976,
    39621,
    39789,
    74741,
    58215,
    92185,
    38472,
    44573,
    32005,
    19396,
    30432,
    18981,
    30432,
    20590,
    94216,
    24524,
    85455,
    67238,
    26547,
    29383,
    50068,
    16882,
    90218,
    35268,
    97415,
    33099,
    51937,
    43043,
    88988,
    39621,
    55292,
    82277,
    13313,
    75622,
    23646,
    93661,
    67647,
    75186,
    93028,
    26787,
    23661,
    84643,
    32005,
    19530,
    26202,
    38933,
    24524,
    77716,
    50973,
    65976,
    41098,
    20838,
    36612,
    65976,
    55292,
    93097,
    33060,
    81520,
    55715,
    14018,
    26787,
    55158,
    50973,
    59179,
    36282,
    65372,
    30208,
    99746,
    32005,
    33271,
    76548,
    56451,
    39621,
    84616,
    95600,
    97411,
    92991,
    15952,
    43748,
    41097,
    20447,
    32931,
    10923,
    72747,
    85455,
    15141,
    28920,
    78124,
    26942,
    64910,
    84167,
    20590,
    85208,
    48325,
    22279,
    75805,
    46617,
    39621,
    79046,
    65976,
    83000,
    24445,
    44994,
    74337,
    53312,
    45088,
    32005,
    20279,
    41097,
    97415,
    84187,
    10285,
    10894,
    20720,
    82557,
    60054,
    28282,
    72112,
    74278,
    55292,
    30432,
    99050,
    82634,
    20590,
    27163,
    77315,
    43748,
    29495,
    85455,
    20590,
    54930,
    43060,
    54930,
    10610,
    65608,
    27025,
    44055,
    75566,
    32005,
    46062,
    43292,
    50973,
    35681,
    23646,
    59518,
    93289,
    28192,
    65976,
    71503,
    85455,
    58215,
    77315,
    74337,
    69047,
    17472,
    77315,
    32005,
    93784,
    12410,
    18547,
    97415,
    75270,
    52371,
    84187,
    19867,
    32931,
    65976,
    57552,
    11064,
    66168,
    55431,
    24753,
    61400,
    78919,
    33845,
    67750,
    52438,
    51213,
    60841,
    96946,
    50492,
    49729,
    32931,
    42915,
    65976,
    88398,
    59179,
    50760,
    97411,
    14606,
    57491,
    57093,
    10501,
    20590,
    71503,
    99685,
    61400,
    98696,
    94443,
    71785,
    13167,
    97415,
    45340,
    41284,
    68008,
    10125,
    27746,
    97411,
    77315,
    15803,
    34351,
    87921,
    83243,
    23732,
    88981,
    33017,
    83341,
    20266,
    50973,
    82070,
    10738,
    53716,
    97415,
    30432,
    87058,
    73972,
    13840,
    83351,
    30432,
    91637,
    24524,
    19315,
    99318,
    50973,
    32944,
    62441,
    83243,
    97415,
    66287,
    77293,
    50973,
    88981,
    89838,
    55541,
    24621,
    61285,
    47165,
    35923,
    20060,
    43071,
    11503,
    28743,
    43781,
    30491,
    62562,
    20720,
    82939,
    32457,
    43748,
    57729,
    83243,
    87459,
    69359,
    65373,
    76150,
    65372,
    26702,
    21946,
    20266,
    49315,
    54930,
    27359,
    14606,
    35234,
    10501,
    56583,
    54736,
    96214,
    28339,
    38245,
    45584,
    77205,
    94989,
    39621,
    20266,
    11300,
    39339,
    79046,
    13319,
    21528,
    32931,
    97415,
    72646,
    61400,
    20322,
    39621,
    14074,
    99495,
    78712,
    85455,
    68898,
    91740,
    98478,
    94915,
    93339,
    50503,
    77802,
    96238,
    59514,
    50973,
    71503,
    78066,
    54816,
    39621,
    65372,
    54930,
    61133,
    47891,
    30432,
    91148,
    10501,
    14810,
    43985,
    61631,
    95242,
    55278,
    97415,
    55292,
    29383,
    97411,
    74337,
    76785,
    93490,
    43748,
    55292,
    71311,
    18719,
    27744,
    84187,
    39621,
    50619,
    90287,
    73663,
    97411,
    38933,
    29796,
    72689,
    79531,
    90125,
    95431,
    15291,
];
const array_1 = input_1.sort();
const array_2 = input_2.sort();
let distance = 0;
let similarity_score = 0;
array_1.forEach((item, index) => {
    const R1 = item;
    const R2 = array_2[index];
    const new_distance = R1 > R2 ? R1 - R2 : R2 - R1;
    let new_similarity = 0;
    distance += new_distance;
    array_2.forEach((item2) => {
        if (R1 === item2) {
            new_similarity += 1;
        }
    });
    similarity_score += R1 * new_similarity;
});
console.log("Distance:", distance);
console.log("Similarity Score:", similarity_score);