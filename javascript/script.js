$.ajax({
    url: "/api/getWeather",
    data: {
        zipcode: 97201
    },
    success: function (result) {
        $("#weather-temp").html("<strong>" + result + "</strong> degrees");
    }
});

api.openweathermap.org/data/2.5/forecast?q=Harper Ferry,US&appid=9a53d50290abc4a394e976ac7ee518f7