goog.require('goog.array');
goog.require('goog.async.Throttle');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.style');

var ns = ns || {};

ns.ScrollView = function(config) {
  // Config values
  this.repeatAnimations = config.repeatAnimations || false;
  this.fixedBgClass = config.fixedBgClass || 'fixed-bg';
  this.slideContainerClass = config.slideContainerClass || 'slides';
  this.slideClass = config.slideClass || 'slide';
  this.slideContentClass = config.slideContentClass || 'slide-content';
  this.scrollMenuClass = config.scrollMenuClass || 'scroll-menu';
  this.viewOffset = config.viewOffset || 0;
  this.slideOffset = config.slideOffset || 0;
  this.throttle = config.throttle || 0;

  // Constants
  this.CONST = {
    CLASS_ACTIVE: 'active',
    CLASS_VISIBLE: 'visible',
    DATA_BG: 'data-bg'
  };

  // Viewport properties
  this.view = {};
  this.viewportHeight = 0;
  this.viewportWidth = 0;
  this.slidesTopOffset = 0;


  // Dom elements
  this.fixedBg = goog.dom.getElementByClass(this.fixedBgClass);
  this.slideBgs = goog.dom.getChildren(this.fixedBg);
  this.slideContainer = goog.dom.getElementByClass(this.slideContainerClass);
  this.slides = goog.dom.getElementsByClass(this.slideClass,
    this.slideContainer);
  this.numSlides = this.slides.length;
  this.slideContentEls = goog.dom.getElementsByClass(this.slideContentClass,
    this.slideContainer);
  this.scrollMenu = goog.dom.getElementByClass(this.scrollMenuClass,
    this.slideContainer);
  this.menuDots = goog.dom.getElementsByTagNameAndClass('a', null,
    this.scrollMenu);

  // Initial viewport configuration and enabling resize reconfiguration
  this.updateViewportProperties_();
  this.setActiveBackground_();
  this.checkContentInViewport_();
  goog.events.listen(window, goog.events.EventType.RESIZE,
    this.updateViewportProperties_, false, this);

  // Call scroll events every other time instead of on every single scroll
  this.throttleScroll = new goog.async.Throttle(this.scrollEvents_,
    this.throttle, this);
  goog.events.listen(window, goog.events.EventType.SCROLL,
    this.throttleScroll.fire, false, this.throttleScroll);
};

ns.ScrollView.prototype.updateViewportProperties_ = function() {
  this.viewportHeight = goog.dom.getViewportSize().height;
  this.viewportWidth = goog.dom.getViewportSize().width;
  this.slidesTopOffset = goog.style.getPageOffsetTop(this.slideContainer);
  var offset = this.viewportHeight * this.viewOffset;

  this.view = {
    l: 0 - offset,
    t: 0 - offset,
    b: this.viewportHeight + offset,
    r: this.viewportWidth + offset
  };
};

ns.ScrollView.prototype.setActiveBackground_ = function() {
  var scrollPosition = goog.dom.getDocumentScroll().y - this.slidesTopOffset;
  var offset = this.viewportHeight * this.slideOffset;
  var visibleImg = '';
  var visibleDots = true;

  // Background status
  goog.array.forEach(this.slides, function(slide, i) {
    if (scrollPosition >=
      (this.viewportHeight * i - offset) &&
      scrollPosition < (this.viewportHeight * (i + 1) - offset)) {
      visibleImg = slide.getAttribute(this.CONST.DATA_BG);
    }
  }, this);


  // Fallback to have an image even when the slides are off the viewport
  if (!visibleImg) {
    visibleDots = false;
    if (scrollPosition < 0) {
      visibleImg = this.slides[0].getAttribute(this.CONST.DATA_BG);
    } else {
      visibleImg = this.slides[this.numSlides - 1].getAttribute(
        this.CONST.DATA_BG);
    }
  }

  goog.array.forEach(this.slideBgs, function(img) {
    if (img.getAttribute('id') == visibleImg) {
      goog.dom.classlist.add(img, this.CONST.CLASS_VISIBLE);
      goog.array.forEach(this.menuDots, function(el) {
        goog.dom.classlist.remove(el, this.CONST.CLASS_ACTIVE);
        if (goog.dom.classlist.contains(el, visibleImg) && visibleDots) {
          goog.dom.classlist.add(el, this.CONST.CLASS_ACTIVE);
        }
      }, this);
    } else {
      goog.dom.classlist.remove(img, this.CONST.CLASS_VISIBLE);
    }
  }, this);
};

ns.ScrollView.prototype.checkContentInViewport_ = function() {
  var scrollPosition = goog.dom.getDocumentScroll().y - this.slidesTopOffset;

  // Scroll Menu
  if (scrollPosition + (this.viewportHeight * .5) >= 0 &&
    scrollPosition <= (this.viewportHeight * this.numSlides - this.viewportHeight * .5)) {
    goog.dom.classlist.add(this.scrollMenu, this.CONST.CLASS_VISIBLE);
  } else {
    goog.dom.classlist.remove(this.scrollMenu, this.CONST.CLASS_VISIBLE);
  }

  // Slide content
  goog.array.forEach(this.slideContentEls, function(el) {
    if (this.inViewport_(el)) {
      goog.dom.classlist.add(el, this.CONST.CLASS_VISIBLE);
    } else {
      if (this.repeatAnimations) {
        goog.dom.classlist.remove(el, this.CONST.CLASS_VISIBLE);
      }
    }
  }, this);
};

ns.ScrollView.prototype.inViewport_ = function(el) {
  var box = el.getBoundingClientRect();
  return (box.right >= this.view.l &&
    box.bottom >= this.view.t &&
    box.left <= this.view.r &&
    box.top <= this.view.b);
};

ns.ScrollView.prototype.scrollEvents_ = function() {
  this.setActiveBackground_();
  this.checkContentInViewport_();
};

$(function() {
  new ns.ScrollView({
    repeatAnimations: true,
    fixedBgClass: 'fixed-bg',
    slideContainerClass: 'slides',
    slideClass: 'slide',
    slideContentClass: 'wrapper',
    scrollMenuClass: 'menu',
    viewOffset: -0.35,
    slideOffset: 0.5,
    throttle: 250
  });
});