let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//  1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for 
//      any given district id and for any given date

     let getsession =async function (req, res){
      try {
          let district_id= req.query.district_id
          let date=req.query.date
      console.log(`query params are:${id}, ${date}`)
      var options={
          method: "get",
          url :`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`,
      }
      let result =await axios(options)
      console.log(result.data)
      res.status(200).send({msg:result.data})
     }
     catch(err){
         res.status(500).send({msg:err.massage})
     }
    }


    let  getcitiesdata= async function(req,res){
        try{
            let cities= ["Mumbai","Dehli","Kolkata","Channai","Bengluru","Landon","Mascow"];
            let cityObjArray=[]
            for (i=0; i<cities.length; i++){
                let obj= {city:cities[i]}
                let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=bb5ac5b238bed6dfdfabf29bac5ca2e6`)
                console.log(resp.data.main.temp)

            obj.temp=resp.data.main.temp
            cityObjArray.push(obj)
            }
         let sorted =cityObjArray.sort( function(a,b){return a.temp-b.temp});
         console.log(sorted)
        return res.status(200).send({status:true, data:sorted})

        }
        catch(err){
            console.log(err)
            res.status(500).send({status:false, msg:"server error"})
        }
    }


    let loginUser= async function (req,res){
     try  {
            let template_id= req.query.template_id
            let text0=req.query.text0
            let text1= req.query.text1
            let username= req.query.username
            let password= req.query.password
        
        console.log(`query param are:${template_id},${text0},${text1},${username},${password},`)
        var options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        }
            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({msg:result.data})
        }
        catch (err){
            console.log(err)
            res.status(500).send({msg:err.massage})
        }
    }


    











module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getsession=getsession
module.exports.getcitiesdata=getcitiesdata
module.exports.loginUser=loginUser