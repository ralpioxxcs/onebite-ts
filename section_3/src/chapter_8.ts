/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

import { table } from "console";

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name} {kickCount} people have been kicked out so far.
// Member -> {name}, you have earned {point} points
// Guest -> {name}, you have visited us {visitCount} times
function login(user: User) {
  /*
  if('kickCount' in user) {
    console.log(`${user.name} ${user.kickCount} people have benn kicked out so far`)
  } else if('point' in user) {
    console.log(`${user.name}, you have earned ${user.point} points`)
  } else {
    console.log(`${user.name}, you have visited us ${user.visitCount} times`)
  }
  */

  /*
  if(user.tag === 'ADMIN') {
    console.log(`${user.name} ${user.kickCount} people have benn kicked out so far`)
  } else if(user.tag === 'MEMBER') {
    console.log(`${user.name}, you have earned ${user.point} points`)
  } else {
    console.log(`${user.name}, you have visited us ${user.visitCount} times`)
  }
  */

  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}, ${user.kickCount} people have benn kicked out so far`)
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}, you have earned ${user.point} points`)
      break;
    }
    case "GUEST": {
      console.log(`${user.name}, you have visited us ${user.visitCount} times`)
      break;
    }
  }
}

login({
  name: "Admin",
  kickCount: 10,
  tag: "ADMIN"
});

/**
 * Recap
 * 
 */

type LoadingTask = {
  state: "LOADING",
}

type FailedTask = {
  state: "FAILED",
  error: {
    message: string;
  }
}

type SuccessTask = {
  state: "SUCCESS",
  response: {
    data: string;
  }
}

// object that process result of async task
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

/*
type AsyncTask = {
  state: 'LOADING' | 'FAILED' | 'SUCCESS';
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};
*/

// Loading -> console
// Failed -> error message
// Success -> response data
function processResult(task:AsyncTask) {
  switch(task.state) {
    case 'LOADING': {
      console.log("loading...");
      break;
    }
    case "FAILED" : {
      console.log(`error occured: ${task.error.message}`)
      break;
    }
    case "SUCCESS" : {
      console.log(`success : ${task.response.data}`)
      break;
    }
  }
}

const loading : AsyncTask = {
  state: "LOADING",
};

const failed : AsyncTask = {
  state: "FAILED",
  error: {
    message: "cause of error ..."
  },
};

const success : AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data"
  },
}

