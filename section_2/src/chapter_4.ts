// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string,
  bio: string,
  location: string
};

let user: User = {
    id: 1,
    name: "micky",
    nickname: "hey",
    birth : "1990.01.01",
    bio: "bio",
    location: "Busan",
};

// 인덱스 시그니처
type CountryCodes = {
  [key : string] : string
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: "uk",
  Japan: "jp"
};

type CountryNumberCodes = {
  [key : string] : number; 
  Korea: number; // need!
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}

//let countryNumberAndStringCodes: CountryNumberCodes = {
//  Korea: "ko",
//  UnitedState: 840,
//  UnitedKingdom: 826,
//}
