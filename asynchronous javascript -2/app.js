// understanding the asynchronus code in a simple manner
console.log(1);
console.log(2);
// // here the code doesn't get blocked  for 2 seconds instead it executes the code after that function;
setTimeout(() => {
    console.log("asynchronous code is fired");
}, 2000);
console.log(3);
console.log(4);
// // 
// // 
// // asynchronus http requests:-
// // we are using only one json file:-
// // this is this object which is used to send the requests to the server
const request = new XMLHttpRequest();
// to check the state of the data we receive;
request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    //  check for the staus also
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    }
});
// // here we are passing the properties of the request object ,we are passing two arguments to ask what type of request and where to get from.
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// // by using open we gonna actully set the request but to send we have to use send request method.
request.send();

// // we are creating function for receving one json file
// // we are using only one json file:-
const gettodo = (callback) => {
    const request = new XMLHttpRequest();
    //     // to check the state of the data we receive;
    request.addEventListener('readystatechange', () => {
        console.log(request, request.readyState);
        //         // check for the staus also
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            console.log(data);
            callback(undefined, data);
        } else if (request.readyState === 4) { callback("error:cannot fetch the data", request.responseText); }
    });
    //     // here we are passing the properties of the request object ,we are passing two arguments to ask what type of request and where to get from.
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    //     // by using open we gonna actully set the request but to send we have to use send request method.
    request.send();
};
// // here we are passing function as an agrument
gettodo((error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});
// // this block of code is executed first and then the gettodo callback function
console.log(55);
console.log(56);
console.log(57);

// suppose we have to receive the data from 3 or more files one after the other then use the below method
const someone = (resource, callback) => {
    const request = new XMLHttpRequest();
    // to check the state of the data we receive;
    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState);
        // check for the staus also
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            // console.log(data);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("error:cannot fetch the data", request.responseText);
        }
    });
    // here we are passing the properties of the request object ,we are passing two arguments to ask what type of request and where to get from.
    request.open('GET', resource);
    // by using open we gonna actully set the request but to send we have to use send request method.
    request.send();
};
// here we are passing function as an agrument
someone('sai.json', (error, data) => {
    console.log(data);
    someone('sai1.json', (error, data) => {
        console.log(data);
    });
    console.log(92)
    someone('sonu.json', (error, data) => {
        console.log(data);

    });
    console.log(95);
});

// basic promise syntax
// using promises
const getsomething = () => {
    return new Promise((resolve, reject) => {
        // calling the resolve function
        resolve("some data");
        // calling the reject function
        reject("some error");
    });
}
// when resolve function is called the arrow function inside then is triggered and the parameter inside resolve is assigned to data
getsomething.then((data1) => {
    console.log(data1);
    //  when reject function is called the arrow function inside then is triggered and the parameter inside reject is assigned to error1.
}).catch((error1) => {
    console.log(error1);
});

// promises with returning files
const gettodo1 = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        // to check the state of the data we receive;
        request.addEventListener('readystatechange', () => {
            // console.log(request,request.readyState);
            // check for the staus also
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                // console.log(data);
                resolve(data);
            } else if (request.readyState === 4) {
                reject(error);
            }
        });
        // here we are passing the properties of the request object ,we are passing two arguments to ask what type of request and where to get from.
        request.open('GET', resource);
        // by using open we gonna actully set the request but to send we have to use send request method.
        request.send();
    })
};
gettodo1('sai.json').then((data) => {
    console.log('here is the resolved promise1 ', data);
    console.log('sai');
    return gettodo1('sai1.json');
}).then((data) => {
    console.log('here is the resolved promise 2', data);
    return gettodo1('sonu.json');
}).then((data) => {
    console.log('here is the resolved promise 3', data);
}).catch((error) => {
    console.log("the defined error", error);
});
