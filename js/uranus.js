var explore = [
    {"Mar. 13, 1781" : "British astronomer William Herschel discovers Uranus—the first new planet discovered since ancient times - while searching for faint stars."},
    {"1787-1851" : "Four Uranian moons are discovered and named Titania, Oberon, Ariel and Umbriel."},
    {1948 : "Another moon, Miranda, is discovered."},
    {"Mar. 10, 1977": "While observing Uranus' passing in front of a distant star (SAO 158687), scientists at the Kuiper Airborne Observatory and the Perth Observatory in Australia were eager for a rare chance to observe the distant planet. Observations before and after the main event led to a major discovery: Uranus, like Saturn, is encircled with rings."},
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

