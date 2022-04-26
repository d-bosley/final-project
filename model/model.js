export var myName="Mine";

export function pageViewName(pgView) {
    $("#app").html(eval(pgView))
    console.log(pgView);
}

export function showContent()
{
    $("#app").html(homePage);
}


export function showURL(thisURL)
{
    if (thisURL != ""){
        let thisPage = (thisURL.replace("#", "")) + "Page";
        console.log(thisPage)
        $("#app").html(eval(thisPage));
        }
    
        else {
            console.log("There is No Page")
            $("#app").html(homePage);
        }
}


/*
export function showContent()
{
    let lastLink = window.location;
    let lastPage = lastLink.hash;
    console.log("The URL of this page is: " + thisPage);

    if (lastPage != ""){
    let thisPage = (lastPage.replace("#", "")) + "Page";
    $("#app").html(thisPage);
    }

    else {
        $("#app").html(homePage);
    }
}
*/


/*
function showContent()
{
    let lastLink = window.location;
    let lastPage = lastLink.hash;
    //console.log("The URL of this page is: " + thisPage);

    if (lastPage != ""){
    let thisPage = (lastPage.replace("#", "")) + "Page";
    $("#app").html(thisPage);
    }

    else {
        $("#app").html(homePage);
    }
}
*/


/* export function pageViewReset() {
    if(pgView == ""){
        pageContent = "homeContent"
    }
} */

var homePage = `
<div id="home_hero">
<div class="hero_h1"><h1>Header goes here</h1></div>
<div class="hero_h2"><h2>Less important text goes here</h2></div>
<div class="hero_p"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequatur dolore dolorum provident.</p></div>
<div class="hero_a"><a href="">Read More</a></div>
</div>

<div id="home_quote">
<p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”</p>

<h1>John Smith</h1>
<h2>Cooperation CEO, books author</h2>
</div>

<div id="home_events">
<h1>UPCOMING EVENTS:</h1>
<div id="events_line"></div>
<div id="events_box">
        <div class="events_date">
            <a href="#b1_"><div><h1>06</h1><p>JUN</p></div></a>
            <h1>Sed et persipiatis unde omnis iste</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos</p>
        </div>
        <div class="events_date">
            <a href="#b2_"><div><h1>30</h1><p>JUL</p></div></a>
            <h1>Sed et persipiatis unde omnis iste</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos</p>
        </div>
        <div class="events_date">
            <a href="#b3_"><div><h1>30</h1><p>AUG</p></div></a>
            <h1>Sed et persipiatis unde omnis iste</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos</p>
        </div>
        <div class="events_date">
            <a href="#b4_"><div><h1>23</h1><p>NOV</p></div></a>
            <h1>Sed et persipiatis unde omnis iste</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos</p>
        </div>
        <div class="events_date">
            <a href="#b5_"><div><h1>23</h1><p>DEC</p></div></a>
            <h1>Sed et persipiatis unde omnis iste</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos</p>
        </div>
      </div>
</div>
`;

var aboutPage = `
<div id="divider"></div>
    <div id="about_hero">
        <h1>
            OUR HISTORY:
        </h1>
    </div>
    <div id="area">
    <div id="about_line"></div>
    </div>

    <p id="about_p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
    </p>
`;

var galleryPage = `
<div id="divider"></div>
<div id="gallery">

    <h1>GALLERY:</h1>
    <div class="gallery_line"></div>
<div id="gallery_box_top">

    <a href="#g1_"><div style="background: linear-gradient(to right, #ffd240c4, #ffd240c4), url(../assets/gallery/1.png); background-position: center;" id="food">
    </div></a>

    <a href="#g2_"><div style="background: linear-gradient(to right, #ee4367c4, #ee4367c4), url(../assets/gallery/2.jpeg); background-position: center;" id="deej">
    </div></a>

    <a href="#g3_"><div style="background: linear-gradient(to right, #08AD69c4, #08AD69c4), url(../assets/gallery/3.jpg); background-position: center;" id="talk">
    </div></a>
</div>

<div id="gallery_box_bottom">
    <a href="#g4_"><div style="background: linear-gradient(to right, #540D6Ec4, #540D6Ec4), url(../assets/gallery/4.jpg); background-position: center;" id="open">
    </div></a>

    <a href="#g5_"><div style="background: linear-gradient(to right, #3BCEABc4, #3BCEABc4), url(../assets/gallery/5.png); background-position: center;" id="tour">
    </div></a>
</div>

</div>
`;

var g1_Page = `
<div id="divider"></div>
    <div style="background: linear-gradient(to right, #ffd240c4, #ffd240c4), url(../assets/gallery/1.png); background-position: center;" id="gallery_hero">
        <h1 style="color: #FFD140;">1</h1>
        <h2 style="color: #FFD140;">.food festival</h2>
    </div>

    <p id="gallery_p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
    </p>
`;

var g2_Page = `
<div id="divider"></div>
    <div style="background: linear-gradient(to right, #ee4367c4, #ee4367c4), url(../assets/gallery/2.jpeg); background-position: center;" id="gallery_hero">
        <h1 style="color: #ee4367;">2</h1>
        <h2 style="color: #ee4367;">.dee-jay</h2>
    </div>

    <p id="gallery_p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
    </p>
`;

var g3_Page = `
<div id="divider"></div>
    <div style="background: linear-gradient(to right, #08AD69c4, #08AD69c4), url(../assets/gallery/3.jpg); background-position: center;" id="gallery_hero">
        <h1 style="color: #08AD69;">3</h1>
        <h2 style="color: #08AD69;">.speech</h2>
    </div>

    <p id="gallery_p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
    </p>
`;

var g4_Page = `
<div id="divider"></div>
    <div style="background: linear-gradient(to right, #540D6Ec4, #540D6Ec4), url(../assets/gallery/4.jpg); background-position: center;" id="gallery_hero">
        <h1 style="color: #540D6E;">4</h1>
        <h2 style="color: #540D6E;">.open food test</h2>
    </div>

    <p id="gallery_p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
    </p>
`;

var g5_Page = `
<div id="divider"></div>
    <div style="background: linear-gradient(to right, #3BCEABc4, #3BCEABc4), url(../assets/gallery/5.png); background-position: center;" id="gallery_hero">
        <h1 style="color: #3BCEAB;">5</h1>
        <h2 style="color: #3BCEAB;">.international</h2>
    </div>

    <p id="gallery_p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
    </p>
`;

var blogPage = `
<div id="divider"></div>
<div id="blog">
    <h1>BLOG:</h1>
    <div class="blog_line"></div>
    <div id="blog_grid">
    <div class="blog_box">
    <a href="#b1_"><div class="date_box"><h1>06</h1><p>JUN</p></div></a>
    <img src="assets/blog.jpg" alt="">
          <div class="blog_info">
          <p class="blog_first">Sed et persipiatis unde omnis iste</p>
          <p class="blog_second">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br>
          accusantium doloremque laudantium, totam rem aperiam, eaque<br>
          ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
          </div>
    </div>

    <div class="blog_box">
    <a href="#b2_"><div class="date_box"><h1>30</h1><p>JUL</p></div></a>
        <img src="assets/blog.jpg" alt="">
            <div class="blog_info">
            <p class="blog_first">Sed et persipiatis unde omnis iste</p>
            <p class="blog_second">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br>
            accusantium doloremque laudantium, totam rem aperiam, eaque<br>
            ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
            </div>
      </div>

      <div class="blog_box">
      <a href="#b3_"><div class="date_box"><h1>30</h1><p>AUG</p></div></a>
        <img src="assets/blog.jpg" alt="">
            <div class="blog_info">
            <p class="blog_first">Sed et persipiatis unde omnis iste</p>
            <p class="blog_second">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br>
            accusantium doloremque laudantium, totam rem aperiam, eaque<br>
            ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
            </div>
      </div>

      <div class="blog_box">
      <a href="#b4_"><div class="date_box"><h1>23</h1><p>NOV</p></div></a>
        <img src="assets/blog.jpg" alt="">
            <div class="blog_info">
            <p class="blog_first">Sed et persipiatis unde omnis iste</p>
            <p class="blog_second">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br>
            accusantium doloremque laudantium, totam rem aperiam, eaque<br>
            ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
            </div>
      </div>

      <div class="blog_box">
      <a href="#b5_"><div class="date_box"><h1>23</h1><p>DEC</p></div></a>
        <img src="assets/blog.jpg" alt="">
            <div class="blog_info">
            <p class="blog_first">Sed et persipiatis unde omnis iste</p>
            <p class="blog_second">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br>
            accusantium doloremque laudantium, totam rem aperiam, eaque<br>
            ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
            </div>
      </div>

    </div>
  </div>
  `;

var b1_Page = `
<div id="divider"></div>
<div id="blog_hero">
    <div><h1>06</h1><p>JUN</p></div>
</div>

<div id="blog_p">

    <h1>
        Header #1:<br></br>
    </h1>

    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur<br></br>

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem<br></br><br></br>
    </p>

    <h1>
        Header #2:<br></br>
    </h1>

    <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
    </p>

</div>
`;

var b2_Page = `
<div id="divider"></div>
<div id="blog_hero">
    <div><h1>30</h1><p>JUL</p></div>
</div>

<div id="blog_p">

    <h1>
        Header #1:<br></br>
    </h1>

    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur<br></br>

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem<br></br><br></br>
    </p>

    <h1>
        Header #2:<br></br>
    </h1>

    <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
    </p>

</div>
`;

var b3_Page = `
<div id="divider"></div>
<div id="blog_hero">
    <div><h1>30</h1><p>AUG</p></div>
</div>

<div id="blog_p">

    <h1>
        Header #1:<br></br>
    </h1>

    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur<br></br>

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem<br></br><br></br>
    </p>

    <h1>
        Header #2:<br></br>
    </h1>

    <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
    </p>

</div>
`;

var b4_Page = `
<div id="divider"></div>
<div id="blog_hero">
    <div><h1>23</h1><p>NOV</p></div>
</div>

<div id="blog_p">

    <h1>
        Header #1:<br></br>
    </h1>

    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur<br></br>

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem<br></br><br></br>
    </p>

    <h1>
        Header #2:<br></br>
    </h1>

    <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
    </p>

</div>
`;

var b5_Page = `
<div id="divider"></div>
<div id="blog_hero">
    <div><h1>23</h1><p>DEC</p></div>
</div>

<div id="blog_p">

    <h1>
        Header #1:<br></br>
    </h1>

    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur<br></br>

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem<br></br><br></br>
    </p>

    <h1>
        Header #2:<br></br>
    </h1>

    <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
    </p>

</div>
`;

var contactPage = `
<div id="divider"></div>
    <div id="contact">
      <h1>CONTACT US:</h1>
      <div class="contact_line"></div>
    </div>
    <div id="contact_div">
      <div>
        <img src="assets/map.jpg" alt="">

        <div class="form_div">
        <form id="contact_form">
          <label for="fname"></label>
          <input type="text" id="first" name="firstname" placeholder="Your Name..."><br><br>
      
          <label for="lname"></label>
          <input type="text" id="second" name="lastname" placeholder="Email Address..."><br><br>
          
          <label for="fname"></label>
          <input type="text" id="first" name="firstname" placeholder="Company..."><br><br>

          <textarea name="message" placeholder="Message..."></textarea>
          <br><br>

          <input type="submit" value="SEND MESSAGE">
        </form>

        </div>
      </div>
    </div>
`;