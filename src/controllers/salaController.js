exports.get=async(req,res)=>{

    let salaModel = require("../models/salaModel");
    return {"status":"ok", "controller":"Sala"};

}

const salaModel = require("../models/salaModel");

exports.get = async()=>{
    return await salaModel.listarSalas();
}