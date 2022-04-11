const express = require ('express');
const router = express.Router();
// problem 1
router.get('/movies',function(req, res){
    const arr = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    res.send(arr)
})
// // problems 2 and 3
router.get('/movies/:indexNumber', function (req, res){
    const arr = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    const id= req.params.indexNumber
    if (id<arr.length){
        res.send (arr[id])
     } else{
         res.send('use valid index')
     }
})

// // Problem 4

// // router.get('/files',function (req, res))
// // [ {
// //     “id”: 1,
// //     “name”: “The Shining”
// //    }, {
// //     “id”: 2,
// //     “name”: “Incendies”
// //    }, {
// //     “id”: 3,
// //     “name”: “Rang de Basanti”
// //    }, {
// //     “id”: 4,
// //     “name”: “Finding Nemo”
// //    }]
   

 

// // router.get('/missing', function(req, res){
// //     const numArr = [1,2,3,4,5,7,8];
// //     const missing = [];
// //     for ( let i in number) {
// //         let x= numArr[i] - numArr[i-1];
// //         let diff=i
// //         while (diff<x){
// //             missing.push(numArr[i-1] + diff);
// //             diff++;
// //         }
// //     }
// //         console.log(missing);
// //         console.log('i am inside the second router handler')
// //         res.send(missing)
     
// // })

// let players =
// [
//     {
//         "name": "manish",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "jalandhar",
//         "sports": [
//             "swimming"
//         ]
//     },
//     {
//         "name": "gopal",
//         "dob": "1/09/1995",
//         "gender": "male",
//         "city": "delhi",
//         "sports": [
//             "soccer"
//         ],
//     },
//     {
//         "name": "lokesh",
//         "dob": "1/1/1990",
//         "gender": "male",
//         "city": "mumbai",
//         "sports": [
//             "soccer"
//         ],
//     },
// ]

// router.post ('/players', function(req, res){
//     let data= req.body;
//     players.filter((item)=>{
//         if (item.name === data.name){
//         return res.send({msg: "player already exists"})
//     }});
//     players.push(data);
//     return res.send (players);
//     console.log(players);

// });



module.exports = router;
