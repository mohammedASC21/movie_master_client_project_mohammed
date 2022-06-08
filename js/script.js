
$(".search-button").click(function() {
    
    let userValue = $(".search-movie").val();
    console.log(userValue)
    let url =  `https://api.themoviedb.org/3/search/movie?api_key=fa374b919a7e75ddcdd8a2ce9bbe7004&language=en-US&query=${userValue}&page=1&include_adult=false`
    // `https://api.giphy.com/v1/gifs/search?q=${userValue}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`
   
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(MovieData) {
            console.log(MovieData);
            let data_array = MovieData.results;
            console.log(data_array)

            let lenData = data_array.length
            console.log(lenData)
            var xy = Math.floor(Math.random() * lenData);
            console.log(xy)


            for (let x = 0; x < data_array.length; x++) {
                let data_array = MovieData.results;
                let div = document.querySelector(".containter")
                newdiv = document.createElement('div');
                newdiv.className = "Movie_info"
                div.appendChild(newdiv)
                
                
                //Images
                let paster_image_url = "https://image.tmdb.org/t/p/w500"
                let poster_image = data_array[x].poster_path;
                paster_image_url = paster_image_url + poster_image
                console.log(paster_image_url)
                let img = document.createElement('img');
                img.src = paster_image_url;
                newdiv.appendChild(img)

            
                 
            }
            for (let x = 0; x < data_array.length; x++) {
                let data_array = MovieData.results;
                let div = document.querySelector(".containter2")
                
                //title
                let movie_title1 = data_array[x].title;
                console.log(movie_title1)
                let title = document.createElement("p");
                title.className = "M_title"
                let text = document.createTextNode(movie_title1); 

                newdiv2 = document.createElement('div');
                newdiv2.className = "Movie_info2"
                div.appendChild(newdiv2)
                title.appendChild(text); 
                newdiv2.appendChild(title);

                 //overview
                 let movie_overview = data_array[x].overview;
                 console.log(movie_overview)
                 let overview = document.createElement("p");
                 overview.className = "M_overview"
                 let text2 = document.createTextNode(movie_overview); 
 
                 overview.appendChild(text2); 
                 newdiv2.appendChild(overview);
                 
                 
                 //release_date
                 let movie_release_date = data_array[x].release_date;
                 console.log(movie_release_date)
                 let release_date = document.createElement("p");
                 release_date.className = "M_release"
                 let text3 = document.createTextNode("Release Date: " + movie_release_date); 
 
                 release_date.appendChild(text3); 
                 newdiv2.appendChild(release_date);


                   //rating 
                   let movie_rating = data_array[x].vote_average;
                   console.log(movie_rating)
                   let rating = document.createElement("p");
                   rating.className = "M_overview"
                   let text4 = document.createTextNode("IMDB Rating: " + movie_rating); 
   
                   rating.appendChild(text4); 
                   newdiv2.appendChild(rating);




            }
     
        
          

            

        });
});

// for (let i = 0; i < 5; i++) {
//     console.log(1)
//   }


