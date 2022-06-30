// import api from './api2'

// const request = async (url, method, params) => {
//     try {
//         const { data = null, error } = await fetch[method](url, params);
//         console.log(data, error)

//         if (!data) {
//             if (error.type === '403') {
//                 // open popup
//             }
//             throw new Error('Error Message')
//         }
//         return { data, error: null }


        
//     } catch (error) {
//         return { data: null, error }
//     }
// }
let result ;

const request = async (method, params) => {

}

let x = fetch(`http://localhost:3000/data`, {
    method: "GET",
    // body: JSON.stringify({
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => result = json);

export default x