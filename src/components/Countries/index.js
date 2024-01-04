import {Component} from 'react'

import CountryFlag from '../CountryFlag'

import './index.css'

const allCountriesList = [
  {
    name: 'Afghanistan',
    flag:
      'https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg',
    population: 37172386,
  },
  {
    name: 'Albania',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
    population: 2866376,
  },
  {
    name: 'Algeria',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
    population: 42228429,
  },
  {
    name: 'Andorra',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
    population: 77006,
  },
  {
    name: 'Angola',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
    population: 30809762,
  },
  {
    name: 'Anguilla',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg',
    population: 84123,
  },
  {
    name: 'Antigua and Barbuda',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
    population: 96286,
  },
  {
    name: 'Argentina',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    population: 44494502,
  },
  {
    name: 'Armenia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
    population: 2951776,
  },
  {
    name: 'Aruba',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg',
    population: 105845,
  },
  {
    name: 'Australia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    population: 24982688,
  },
  {
    name: 'Austria',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
    population: 8840521,
  },
  {
    name: 'Azerbaijan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
    population: 9939800,
  },
  {
    name: 'Bahamas',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
    population: 84123,
  },
  {
    name: 'Bahrain',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
    population: 1569439,
  },
  {
    name: 'Bangladesh',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
    population: 161356039,
  },
  {
    name: 'Barbados',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
    population: 286641,
  },
  {
    name: 'Belarus',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
    population: 9483499,
  },
  {
    name: 'Belgium',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
    population: 11433256,
  },
  {
    name: 'Belize',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
    population: 383071,
  },
  {
    name: 'Benin',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
    population: 11485048,
  },
  {
    name: 'Bermuda',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg',
    population: 63973,
  },
  {
    name: 'Bhutan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
    population: 754394,
  },
  {
    name: 'Bosnia and Herzegovina',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
    population: 3323929,
  },
  {
    name: 'Botswana',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
    population: 2254126,
  },
  {
    name: 'Bouvet Island',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    population: 84123,
  },
  {
    name: 'Brazil',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    population: 209469333,
  },
  {
    name: 'British Indian Ocean Territory',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg',
    population: 84123,
  },
  {
    name: 'Brunei',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
    population: 84123,
  },
  {
    name: 'Bulgaria',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
    population: 7025037,
  },
  {
    name: 'Burkina Faso',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
    population: 19751535,
  },
  {
    name: 'Burundi',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
    population: 11175378,
  },
  {
    name: 'Cambodia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
    population: 16249798,
  },
  {
    name: 'Cameroon',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
    population: 25216237,
  },
  {
    name: 'Canada',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
    population: 37057765,
  },
  {
    name: 'Cape Verde',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
    population: 84123,
  },
  {
    name: 'Cayman Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg',
    population: 64174,
  },
  {
    name: 'Central African Republic',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
    population: 4666377,
  },
  {
    name: 'Chad',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
    population: 15477751,
  },
  {
    name: 'Chile',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
    population: 18729160,
  },
  {
    name: 'China',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    population: 1392730000,
  },
  {
    name: 'Christmas Island',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg',
    population: 84123,
  },
  {
    name: 'Cocos (Keeling) Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg',
    population: 84123,
  },
  {
    name: 'Colombia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    population: 49648685,
  },
  {
    name: 'Comoros',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
    population: 832322,
  },
  {
    name: 'Congo',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
    population: 84123,
  },
  {
    name: 'Cook Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg',
    population: 84123,
  },
  {
    name: 'Costa Rica',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
    population: 4999441,
  },
  {
    name: 'Croatia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
    population: 4087843,
  },
  {
    name: 'Cuba',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
    population: 11338138,
  },
  {
    name: 'Cyprus',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
    population: 1189265,
  },
  {
    name: 'Czech Republic',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    population: 10629928,
  },
  {
    name: 'Denmark',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    population: 5793636,
  },
  {
    name: 'Djibouti',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
    population: 958920,
  },
  {
    name: 'Dominica',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
    population: 71625,
  },
  {
    name: 'Dominican Republic',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
    population: 10627165,
  },
  {
    name: 'Ecuador',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
    population: 17084357,
  },
  {
    name: 'Egypt',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
    population: 84123,
  },
  {
    name: 'El Salvador',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
    population: 6420744,
  },
  {
    name: 'Equatorial Guinea',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
    population: 1308974,
  },
  {
    name: 'Eritrea',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
    population: 3213972,
  },
  {
    name: 'Estonia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
    population: 1321977,
  },
  {
    name: 'Ethiopia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
    population: 109224559,
  },
  {
    name: 'Falkland Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg',
    population: 84123,
  },
  {
    name: 'Faroe Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg',
    population: 48497,
  },
  {
    name: 'Fiji',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
    population: 883483,
  },
  {
    name: 'Finland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    population: 5515525,
  },
  {
    name: 'France',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    population: 66977107,
  },
  {
    name: 'French Polynesia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg',
    population: 277679,
  },
  {
    name: 'Gabon',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
    population: 2119275,
  },
  {
    name: 'Gambia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
    population: 84123,
  },
  {
    name: 'Georgia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    population: 3726549,
  },
  {
    name: 'Germany',
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    population: 82905782,
  },
  {
    name: 'Ghana',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
    population: 29767108,
  },
  {
    name: 'Gibraltar',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg',
    population: 33718,
  },
  {
    name: 'Greece',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
    population: 10731726,
  },
  {
    name: 'Greenland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
    population: 56025,
  },
  {
    name: 'Grenada',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
    population: 111454,
  },
  {
    name: 'Guadeloupe',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Guadeloupe_%28local%29_variant.svg',
    population: 84123,
  },
  {
    name: 'Guam',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg',
    population: 165768,
  },
  {
    name: 'Guatemala',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
    population: 17247807,
  },
  {
    name: 'Guernsey',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg',
    population: 84123,
  },
  {
    name: 'Guinea',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
    population: 12414318,
  },
  {
    name: 'Guinea-Bissau',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
    population: 1874309,
  },
  {
    name: 'Guyana',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
    population: 779004,
  },
  {
    name: 'Haiti',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
    population: 11123176,
  },
  {
    name: 'Heard Island and McDonald Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    population: 84123,
  },
  {
    name: 'Vatican City State (Holy See)',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    population: 84123,
  },
  {
    name: 'Honduras',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/ca/Naval_Ensign_of_Honduras.svg',
    population: 9587522,
  },
  {
    name: 'Hong Kong',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
    population: 84123,
  },
  {
    name: 'Hungary',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    population: 9775564,
  },
  {
    name: 'Iceland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
    population: 352721,
  },
  {
    name: 'India',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    population: 1352617328,
  },
  {
    name: 'Indonesia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
    population: 267663435,
  },
  {
    name: 'Iran',
    flag:
      ' https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
    population: 84123,
  },
  {
    name: 'Iraq',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
    population: 38433600,
  },
  {
    name: 'Ireland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
    population: 4867309,
  },
  {
    name: 'Isle of Man',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg',
    population: 84077,
  },
  {
    name: 'Israel',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
    population: 8882800,
  },
  {
    name: 'Italy',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    population: 60421760,
  },
  {
    name: 'Jamaica',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
    population: 2934855,
  },
  {
    name: 'Japan',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    population: 126529100,
  },
  {
    name: 'Jersey',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg',
    population: 84123,
  },
  {
    name: 'Jordan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
    population: 9956011,
  },
  {
    name: 'Kazakhstan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
    population: 18272430,
  },
  {
    name: 'Kenya',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
    population: 51393010,
  },
  {
    name: 'Kiribati',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
    population: 115847,
  },
  {
    name: 'Kuwait',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
    population: 4137309,
  },
  {
    name: 'Kyrgyzstan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
    population: 84123,
  },
  {
    name: 'Laos',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
    population: 84123,
  },
  {
    name: 'Latvia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
    population: 1927174,
  },
  {
    name: 'Lebanon',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
    population: 6848925,
  },
  {
    name: 'Lesotho',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
    population: 2108132,
  },
  {
    name: 'Liberia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
    population: 4818977,
  },
  {
    name: 'Liechtenstein',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
    population: 37910,
  },
  {
    name: 'Lithuania',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
    population: 2801543,
  },
  {
    name: 'Luxembourg',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
    population: 607950,
  },
  {
    name: 'Macau',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg',
    population: 84123,
  },
  {
    name: 'Madagascar',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
    population: 26262368,
  },
  {
    name: 'Malawi',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
    population: 18143315,
  },
  {
    name: 'Malaysia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
    population: 31528585,
  },
  {
    name: 'Maldives',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
    population: 515696,
  },
  {
    name: 'Mali',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
    population: 19077690,
  },
  {
    name: 'Malta',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
    population: 484630,
  },
  {
    name: 'Marshall Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
    population: 58413,
  },
  {
    name: 'Martinique',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Snake_Flag_of_Martinique.svg',
    population: 84123,
  },
  {
    name: 'Mauritania',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
    population: 4403319,
  },
  {
    name: 'Mauritius',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
    population: 1265303,
  },
  {
    name: 'Mayotte',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    population: 84123,
  },
  {
    name: 'Mexico',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
    population: 126190788,
  },
  {
    name: 'Monaco',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
    population: 38682,
  },
  {
    name: 'Mongolia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
    population: 3170208,
  },
  {
    name: 'Montenegro',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
    population: 622227,
  },
  {
    name: 'Montserrat',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg',
    population: 84123,
  },
  {
    name: 'Morocco',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
    population: 36029138,
  },
  {
    name: 'Mozambique',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
    population: 29495962,
  },
  {
    name: 'Myanmar',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
    population: 53708395,
  },
  {
    name: 'Namibia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
    population: 2448255,
  },
  {
    name: 'Nauru',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
    population: 12704,
  },
  {
    name: 'Nepal',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
    population: 28087871,
  },
  {
    name: 'Netherlands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    population: 17231624,
  },
  {
    name: 'New Caledonia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/26/Flags_of_New_Caledonia.svg',
    population: 284060,
  },
  {
    name: 'New Zealand',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
    population: 4841000,
  },
  {
    name: 'Nicaragua',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
    population: 6465513,
  },
  {
    name: 'Niger',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
    population: 22442948,
  },
  {
    name: 'Nigeria',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
    population: 195874740,
  },
  {
    name: 'Niue',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg',
    population: 84123,
  },
  {
    name: 'Norfolk Island',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg',
    population: 84123,
  },
  {
    name: 'Northern Mariana Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg',
    population: 56882,
  },
  {
    name: 'Norway',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    population: 5311916,
  },
  {
    name: 'Oman',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
    population: 4829483,
  },
  {
    name: 'Pakistan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
    population: 212215030,
  },
  {
    name: 'Palau',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
    population: 17907,
  },
  {
    name: 'Panama',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
    population: 4176873,
  },
  {
    name: 'Papua New Guinea',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
    population: 8606316,
  },
  {
    name: 'Paraguay',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
    population: 6956071,
  },
  {
    name: 'Peru',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
    population: 31989256,
  },
  {
    name: 'Philippines',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
    population: 106651922,
  },
  {
    name: 'Pitcairn',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg',
    population: 84123,
  },
  {
    name: 'Poland',
    flag: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
    population: 37974750,
  },
  {
    name: 'Portugal',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    population: 10283822,
  },
  {
    name: 'Puerto Rico',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
    population: 3195153,
  },
  {
    name: 'Qatar',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
    population: 2781677,
  },
  {
    name: 'Réunion',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    population: 84123,
  },
  {
    name: 'Romania',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
    population: 19466145,
  },
  {
    name: 'Rwanda',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
    population: 12301939,
  },
  {
    name: 'Saint Kitts and Nevis',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
    population: 84123,
  },
  {
    name: 'Saint Lucia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
    population: 84123,
  },
  {
    name: 'Saint Pierre and Miquelon',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg',
    population: 84123,
  },
  {
    name: 'Saint Vincent and the Grenadines',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
    population: 84123,
  },
  {
    name: 'Samoa',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
    population: 196130,
  },
  {
    name: 'San Marino',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
    population: 33785,
  },
  {
    name: 'Sao Tome and Principe',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg',
    population: 211028,
  },
  {
    name: 'Saudi Arabia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
    population: 33699947,
  },
  {
    name: 'Senegal',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
    population: 15854360,
  },
  {
    name: 'Serbia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
    population: 6982604,
  },
  {
    name: 'Seychelles',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    population: 96762,
  },
  {
    name: 'Sierra Leone',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
    population: 7650154,
  },
  {
    name: 'Singapore',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
    population: 5638676,
  },
  {
    name: 'Slovakia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
    population: 84123,
  },
  {
    name: 'Slovenia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
    population: 2073894,
  },
  {
    name: 'Solomon Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
    population: 652858,
  },
  {
    name: 'Somalia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
    population: 15008154,
  },
  {
    name: 'South Africa',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
    population: 57779622,
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg',
    population: 84123,
  },
  {
    name: 'Spain',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    population: 46796540,
  },
  {
    name: 'Sri Lanka',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
    population: 21670000,
  },
  {
    name: 'Sudan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
    population: 41801533,
  },
  {
    name: 'Suriname',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
    population: 575991,
  },
  {
    name: 'Swaziland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg',
    population: 84123,
  },
  {
    name: 'Sweden',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
    population: 10175214,
  },
  {
    name: 'Switzerland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
    population: 8513227,
  },
  {
    name: 'Syria',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
    population: 84123,
  },
  {
    name: 'Taiwan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
    population: 84123,
  },
  {
    name: 'Tajikistan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
    population: 9100837,
  },
  {
    name: 'Thailand',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
    population: 69428524,
  },
  {
    name: 'Timor-Leste',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
    population: 1267972,
  },
  {
    name: 'Togo',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
    population: 7889094,
  },
  {
    name: 'Tokelau',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg',
    population: 84123,
  },
  {
    name: 'Tonga',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
    population: 103197,
  },
  {
    name: 'Trinidad and Tobago',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
    population: 1389858,
  },
  {
    name: 'Tunisia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
    population: 11565204,
  },
  {
    name: 'Turkey',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
    population: 82319724,
  },
  {
    name: 'Turkmenistan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
    population: 5850908,
  },
  {
    name: 'Turks and Caicos Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg',
    population: 37665,
  },
  {
    name: 'Tuvalu',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
    population: 11508,
  },
  {
    name: 'Uganda',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
    population: 42723139,
  },
  {
    name: 'Ukraine',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
    population: 44622516,
  },
  {
    name: 'United Arab Emirates',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    population: 9630959,
  },
  {
    name: 'United Kingdom',
    flag:
      'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    population: 66460344,
  },
  {
    name: 'United States',
    flag:
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    population: 326687501,
  },
  {
    name: 'United States Minor Outlying Islands',
    flag:
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    population: 84123,
  },
  {
    name: 'Uruguay',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    population: 3449299,
  },
  {
    name: 'Uzbekistan',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
    population: 32955400,
  },
  {
    name: 'Vanuatu',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
    population: 292680,
  },
  {
    name: 'Vietnam',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
    population: 95540395,
  },
  {
    name: 'Wallis and Futuna',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg',
    population: 84123,
  },
  {
    name: 'Yemen',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
    population: 84123,
  },
  {
    name: 'Zambia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
    population: 17351822,
  },
  {
    name: 'Zimbabwe',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
    population: 14439018,
  },
]

class Countries extends Component {
  state = {countriesList: allCountriesList, input: ''}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {countriesList, input} = this.state

    const filteredList = countriesList.filter(eachCountry =>
      eachCountry.name.toLowerCase().includes(input.toLowerCase()),
    )
    console.log(input)
    return (
      <div className="bg-container">
        <div className="input-container">
          <input
            onChange={this.onChangeInput}
            value={input}
            type="search"
            className="input-element"
            placeholder="Enter country name"
          />
          <button className="button" type="button">
            Search
          </button>
        </div>
        <ul className="list-container">
          {filteredList.map(eachCountry => (
            <CountryFlag countryDetails={eachCountry} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Countries
