var box = document.querySelector("#box")
var tl = gsap.timeline()

tl.to("#box",{
    x:1130,
    y:450,
    delay:1,
    duration:2,
    rotate:360,
    borderRadius:10
})

tl.from("#ch",{
    y:-10,
    opacity:0,
})

tl.from("#box h3",{
    opacity:0,
    delay:0.2,
    duration:1.5
})
