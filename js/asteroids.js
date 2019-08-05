var explore = [
    {"1991 and 1993" : "NASA's Galileo mission was the first spacecraft to fly past an asteroid. It flew past asteroid Gaspara in 1991 and Ida in 1993."},
    {"2008 and 2010" : "NASA's Near-Earth Asteroid Rendezvous (NEAR-Shoemaker) mission studied asteroids Mathilde and Eros; and the Rosetta mission encountered Steins in 2008 and Lutetia in 2010. Deep Space 1 and Stardust both had close encounters with asteroids."},
    {2005 : " the Japanese spacecraft Hayabusa landed on the near-Earth asteroid Itokawa and attempted to collect samples. "},
    {"June 3, 2010": "Hayabusa successfully returned to Earth a small amount of asteroid dust now being studied by scientists."},
    {"Jan. 24, 1986": "NASA's Voyager 2 made the first - and so far the only - visit to Uranus. The spacecraft came within 50,600 miles (81,500 kilometers) of the planet's cloud tops. Voyager discovered 10 new moons, two new rings and a magnetic field stronger than that of Saturn."},
    {"Dec. 22, 2005": "NASA announces the discovery of a new pair of rings around Uranus and two new, small moons (Mab and Cupid) orbiting the planet from photographs taken by the Hubble Space Telescope. The largest ring discovered by Hubble is twice the diameter of the planet's previously known rings."},
    {2006: "Observations made at the Keck Observatory and by the Hubble Space Telescope show that Uranus' outer ring is colored blue while the new inner ring is reddish."},
    {"Dec. 2007": "Uranus reaches equinox. Equinox is when the planet is fully illuminated as the Sun passes over its equator. Equinox also brings a ring-plane crossing, when Uranus' rings appear to get narrower as they pass through, appearing edge-on and then widen again as seen from Earth."},
    {"Mar. 18, 2011": " New Horizons passes the orbit of Uranus on its way to Pluto, becoming the first spacecraft to journey beyond Uranus' orbit since Voyager 2. However, Uranus was not near the crossing point. The spacecraft is asleep during most of its eight-year interplanetary trek from Jupiter to Pluto. Mission controllers do wake up New Horizons for 50 days each year to perform necessary checkups on its instruments.​"},
]

for (position in explore) {
    var divs = document.createElement("div");
    document.getElementById("significant-events").appendChild(divs);
    var timelineEvents = document.createAttribute("class");
    timelineEvents.value = "timeline-event";
    divs.setAttributeNode(timelineEvents);
}

for (position in explore) {
    var div = document.createElement("div");
    div.innerHTML = `<img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">`;
    document.getElementsByClassName("timeline-event").item(position).appendChild(div);
    var timelineImage = document.createAttribute("class");
    timelineImage.value = "timeline-event__image";
    div.setAttributeNode(timelineImage);
}

for (position in explore) {
    for (key in explore[position]) {
        var significantYear = document.createElement("div");
        significantYear.innerHTML = key;
        document.getElementsByClassName("timeline-event").item(position).appendChild(significantYear);
        var att = document.createAttribute("class");
        att.value = "tooltip2 timeline-event__date";
        significantYear.setAttributeNode(att);
        
    };
}

for (position in explore) {
    for (key in explore[position]) {
        var significantYearInfo = document.createElement("div");
        significantYearInfo.innerHTML = explore[position][key];
        document.getElementsByClassName("tooltip2").item(position).appendChild(significantYearInfo);
        var att = document.createAttribute("class");
        att.value = "tooltiptext2";
        significantYearInfo.setAttributeNode(att);
    }
}

function openImg(evt, spacecraftName) {
    var i,tabcontent,tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i=0; i<tabcontent.length;i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (var i=0; i<tablinks.length;i++) {
        tablinks[i].className = tablinks[i].className.replace("active", " ");
    }
    document.getElementById(spacecraftName).style.display = "block";
    evt.currentTarget.className += "active"
}

var scrollY = 0;
var distance = 40;
var speed = 24;
function autoScrollTo(sectionPicked) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(sectionPicked).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\''+sectionPicked+'\')', speed);
    if (yPos > bodyHeight) {
        clearTimeout(animator);
    } else {
        if (currentY<targetY-distance) {
            scrollY = currentY + distance;
            window.scroll(0,scrollY);
        } else {
            clearTimeout(animator);
        }
    }
}

function resetScroller(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var animator = setTimeout('resetScroller(\''+el+'\')',speed);
    if (currentY>targetY) {
        scrollY = currentY - distance;
        window.scroll(0, scrollY);
    } else {
        clearTimeout(animator)
    }
}

$(function() {
  
    // contact form animations
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });
    
  });

