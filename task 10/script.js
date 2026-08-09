const container = document.getElementById("cardsContainer");

const healthCards = `
<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>How Did van Gogh's Turbulent Mind Depict One of the Most</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 2.jpeg">
        <div class="news-content">
            <h5>How Did van Gogh's Turbulent Mind Depict One of the Most</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 3.jpeg">
        <div class="news-content">
            <h5>How Did van Gogh's Turbulent Mind Depict One of the Most</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 4.jpeg">
        <div class="news-content">
            <h5>How Did van Gogh's Turbulent Mind Depict One of the Most</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>
`;

const vogueCards = `
<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>Vogue Fashion Collection 2025</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>Modern Fashion Style</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>
`;

const travelCards = `
<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>Best Places To Visit This Summer</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>Explore Beautiful Nature</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>
`;

const gadgetsCards = `
<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>Latest Smart Gadgets</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="news-card">
        <img src="images/img 1.jpeg">
        <div class="news-content">
            <h5>Top Technology In 2025</h5>
            <p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
        </div>
    </div>
</div>
`;

const allCards =
healthCards +
vogueCards;

function showCards(category){

    document.querySelectorAll(".nav-link").forEach(btn=>{
        btn.classList.remove("active");
    });

    event.target.classList.add("active");

    if(category=="health"){

        container.innerHTML=healthCards;

    }

    else if(category=="vogue"){

        container.innerHTML=vogueCards;

    }

    else if(category=="travel"){

        container.innerHTML=travelCards;

    }

    else if(category=="gadgets"){

        container.innerHTML=gadgetsCards;

    }

    else{

        container.innerHTML=allCards;

    }

}

showCards("health");

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}