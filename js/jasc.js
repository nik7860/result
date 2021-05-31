
new PanelSnap({
    // parent container
    container: document.body,
    // panel selector
    panelSelector:'> section',
    // threshol
    directionThreshold: 50,
    // scroll delay
    delay: 0,
    // duration in milliseconds
    duration: 300,
    // easing function
    easing:function(t) {return t }
});
