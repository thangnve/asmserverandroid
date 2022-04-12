
const axios = require('axios');
exports.homeRouter = (req , res) =>{

    axios.get('https://serverthangnvph13623.herokuapp.com/Danhsach').then(function(response){
        res.render('index' ,{imagees: response.data})
    }).catch(err=>{
        res.send(err)
    })



}

exports.add_imagees = (req , res) =>{
    res.render('add_imagees', { title: 'addnew' });
}

exports.update_imagees = (req , res) =>{
    axios.get("https://serverthangnvph13623.herokuapp.com/Danhsach" , {params: {id: req.query.id}}).then(function (userdata){
        res.render('update_imagees', { imagees: userdata.data});
    }).catch(err => {
        res.send(err)
    })

}
