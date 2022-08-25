const keep = require('./keepData.json')
module.exports = async function (context, req) {
    let specs = `&w=${Math.round(Math.random()*500)+400}&h=${Math.round(Math.random()*500)+400}&q=60`
    const response = {
        name: random(keep.names),
        description: random(keep.descriptions),
        img: random(keep.images) + specs
    }
    context.log('Keep data generated', response)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}