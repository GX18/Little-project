var explore = [
    {"~700 BCE" : "The oldest written records documenting Saturn are attributed to the Assyrians. They described the ringed planet as a sparkle in the night and named it 'Star of Ninib'."},
    {"~400 BCE" : "Ancient Greek astronomers name what they think is a wandering star in honor of Kronos, the god of agriculture. The Romans later change the name to Saturn, their god of agriculture."},
    {"July 1610" : "Galileo Galilei spots Saturn's rings through a telescope, but mistakes them for a 'triple planet'."},
    {1655: "Christiaan Huygens discovers Saturn's rings and its largest moon, Titan."},
    {"Sept. 1, 1979": "Pioneer 11 is the first spacecraft to reach Saturn. Among Pioneer 11's many discoveries are Saturn's F ring and a new moon."},
    {"1980 and 1981": "In its 1980 flyby of Saturn, Voyager 1 reveals the intricate structure of the ring system, consisting of thousands of ringlets. Flying even closer to Saturn in 1981, Voyager 2 provides more detailed images and documents the thinness of some of the rings."},
    {"July 1, 2004": "NASA's Cassini spacecraft becomes the first to orbit Saturn, beginning a decade-long mission that revealed many secrets and surprises about Saturn and its system of rings and moons."},
    {"Jan. 14, 2005": "The European Space Agency's Huygens probe is the first spacecraft to make a soft landing on the surface of another planet's moon — Saturn's giant moon Titan. The probe provides the first direct study of Titan's atmosphere and the first-and-only direct images of Titan's surface, which is shrouded by thick"},
    {"Sept. 17, 2006": "Scientists discover a new ring. The ring coincides with the orbits of Saturn's moons Janus and Epimetheus. Images taken during a solar occultation that backlit the planet revealed the new ring."},
    {2009: "NASA’s Spitzer Space Telescope reveals the presence of a gigantic, low density ring associated with Saturn’s distant moon Phoebe."},
    {"Sep. 15, 2017": "Cassini ends a 13-year orbital mission with a spectacular, planned plunge into Saturn’s atmosphere — sending science data back to the last second. Cassini’s final five orbits enable scientists to directly sample Saturn’s atmosphere for the first time."},

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

