var explore = [
    {1610 : "Italian astronomer Galileo Galilei made the first telescopic observation of the moon,Thomas Harriot and Galileo Galilei drew the first telescopic representation of the moon."},
    {1645 : "Michael Florent van Langren made the first map of the moon."},
    {1647 : "Johannes Hevelius published the first treatise devoted to the moon."},
    {1651: "Giovanni Battista Riccioli named craters after philosophers and astronomers."},
    {1753: "Roger Joseph Boscovich proved the moon has no atmosphere."},
    {1824: "Franz von Gruithuisen thought craters were formed by meteor strikes."},
    {1920: "Robert Goddard suggested sending rockets to the moon."},
    {1959: "Soviet spacecraft Luna 2 reached the moon, impacting near the crater Autolycus."},
    {1961: "President John F. Kennedy proposed a manned lunar program."},
    {1964: " NASA's Ranger 7 produced the first close-up TV pictures of the lunar surface."},
    {1966: "Soviet spacecraft Luna 9 made the first soft landing on the moon."},
    {1967: "NASA's Lunar Orbiter missions completed photographic mapping of the moon."},
    {1968: "NASA's Apollo 8 made the first manned flight to the moon, circling it 10 times before returning to Earth."},
    {1969: "Apollo 11 mission made the first landing on the moon and returned samples,(Nov.) Apollo 12 made first precision landing on the the moon."},
    {1972: "Apollo 17 made the last manned landing of the Apollo Program."},
    {1976: "Soviet Luna 24 returned the last sample to be returned from the moon (to date)."},
    {1990: "NASA's Galileo spacecraft obtained multispectral images of the western limb and part of the far side of the moon."},
    {1994: "NASA's Clementine mission conducted multispectral mapping of the moon."},
    {1998: "NASA's Lunar Prospector mission launched"},
    {2007: "Japanese SELENE (Kaguya) spacecraft launched,Chinese Chang'e 1 lunar orbiter launched."},
    {2008: "Indian Chandrayaan 1 moon orbiter launched."},
    {2009: "NASA's Lunar Reconnaissance Orbiter launched"},
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

