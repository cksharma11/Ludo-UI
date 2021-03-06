const safeCells = {
  blue: [5, 6, 8, 11, 14, 17],
  red: [22, 23, 26, 29, 32, 35],
  yellow: [38, 41, 44, 47, 50, 51],
  green: [56, 59, 62, 65, 67, 68],
  universal: [22, 27, 7, 46, 51, 66, 22, 6, 51, 67]
};

const startingCells = {
  blue: 1,
  red: 19,
  yellow: 37,
  green: 55
};

const routes = {
  red: [
    22,
    25,
    28,
    31,
    34,
    16,
    13,
    10,
    7,
    4,
    1,
    2,
    3,
    6,
    9,
    12,
    15,
    18,
    37,
    40,
    43,
    46,
    49,
    52,
    53,
    54,
    51,
    48,
    45,
    42,
    39,
    57,
    60,
    63,
    66,
    69,
    72,
    71,
    70,
    67,
    64,
    61,
    58,
    55,
    36,
    33,
    30,
    27,
    24,
    21,
    20,
    23,
    26,
    29,
    32,
    35,
    100
  ],
  blue: [
    6,
    9,
    12,
    15,
    18,
    37,
    40,
    43,
    46,
    49,
    52,
    53,
    54,
    51,
    48,
    45,
    42,
    39,
    57,
    60,
    63,
    66,
    69,
    72,
    71,
    70,
    67,
    64,
    61,
    58,
    55,
    36,
    33,
    30,
    27,
    24,
    21,
    20,
    19,
    22,
    25,
    28,
    31,
    34,
    16,
    13,
    10,
    7,
    4,
    1,
    2,
    5,
    8,
    11,
    14,
    17,
    100
  ],
  yellow: [
    51,
    48,
    45,
    42,
    39,
    57,
    60,
    63,
    66,
    69,
    72,
    71,
    70,
    67,
    64,
    61,
    58,
    55,
    36,
    33,
    30,
    27,
    24,
    21,
    20,
    19,
    22,
    25,
    28,
    31,
    34,
    16,
    13,
    10,
    7,
    4,
    1,
    2,
    3,
    6,
    9,
    12,
    15,
    18,
    37,
    40,
    43,
    46,
    49,
    52,
    53,
    50,
    47,
    44,
    41,
    38,
    100
  ],
  green: [
    67,
    64,
    61,
    58,
    55,
    36,
    33,
    30,
    27,
    24,
    21,
    20,
    19,
    22,
    25,
    28,
    31,
    34,
    16,
    13,
    10,
    7,
    4,
    1,
    2,
    3,
    6,
    9,
    12,
    15,
    18,
    37,
    40,
    43,
    46,
    49,
    52,
    53,
    54,
    51,
    48,
    45,
    42,
    39,
    57,
    60,
    63,
    66,
    69,
    72,
    71,
    68,
    65,
    62,
    59,
    56,
    100
  ],
  safe: [22, 27, 7, 46, 51, 66]
};

module.exports = { safeCells, startingCells, routes };
