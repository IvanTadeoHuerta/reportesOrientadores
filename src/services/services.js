import config from './config'

const { url } = config
const peticionesHttp = {}


peticionesHttp.login = function (user, password) {
    
    return user == 'ivantec5sem' && password == '123'
    
    
    /*
    fetch('src/store/usuariosDB.json')
        .then(response => response.json())
        .then(data => {
            data
        })
    */


   

}


export default peticionesHttp