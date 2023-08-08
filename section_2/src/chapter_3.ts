// Object
let user: {
  id?: number; // optional property
  name: string;
}= {
  id: 1,
  name: "chris",
};

let dog: {
  name: string;
  color: string;
} = {
    name: "kkomangee",
    color: "white",
};

user = {
  name: "diego",

}

let config : {
  readonly apiKey: string;
}= {
  apiKey: "apiKey",
};

// config.apiKey = "hacked";
