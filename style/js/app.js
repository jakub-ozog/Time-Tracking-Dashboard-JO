fetch('/data.json')
/* .then(results => results.json())
.then(console.log); */





.then(function (response) {
    return response.json();
}).then(function(obj) {
    console.log(obj);
}).catch(function (error){
    console.log('something went wrong');
    console.error(error);
});
