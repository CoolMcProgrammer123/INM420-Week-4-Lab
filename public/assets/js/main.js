async function getData( key, city ) {
    try {
        const foobar = await fetch(
            http://api.weatherapi.com/v1/current.json?q=${city}&key=${key}
        );

        const infoFromServer = await foobar.json();
        console.log( infoFromServer );

    } catch (error) {
        console.warn(Nope: ${error});
        // console.warn( "Nope: " + error );
    }
}
getData(
    '7c7e36ef01d94161bc2222432252905', 'Toronto'
);