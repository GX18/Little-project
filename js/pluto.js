var explore = [
    {"April 6, 1929" : "Search for Planet X Begins"},
    {"February 18, 1930" : "Pluto Discovered"},
    {"March 14, 1930" : "Pluto Gets Its Name"},
    {"June 22, 1978": "June 22, 1978: Charon Discovered"},
    {"February 7, 1979": "Pluto Crosses Neptune’s Orbit"},
    {"May 15, 2005": "Nix and Hydra Discovered"},
    {"January 19, 2006":"New Horizons Launched"}, 
    {"August 24, 2006": "Pluto Demoted to Dwarf Planet"},
    {"July 14, 2015" : "New Horizons Flies by Pluto"},
    {"March 23, 2178" : "One (Plutonian) Year Since Discovery"}
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

