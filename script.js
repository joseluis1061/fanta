gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    toggleActions: "restart pause reverse pause",
  }
})

tl.to("#fanta",{
  top: "120%",
  left: "0%"
}, 'orange')
tl.to("#orange-cut",{
  top: "160%",
  left: "23%"
}, 'orange')
tl.to("#orange",{
  top: "170%",
  right: "10%",
  width: "15%"
}, 'orange')
tl.to("#leaf",{
  top: "110%",
  left: "80%",
  rotate: "130deg"
}, 'orange')
tl.to("#leaf2",{
  top: "150%",
  left: "0%",
  rotate: "130deg"
}, 'orange')

// Second Animation
let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".three",
    start: "25% 95%",
    end: "50% 50%",
    scrub: true, 
    toggleActions: "restart pause reverse pause"
  }
})

tl2.to("#fanta",{
  top: "215%",
  left: "32%",
  width: "35%"
}, 'orange2')
tl2.to("#orange-cut",{
  top: "210%",
  left: "40%",
  width:"20%"
}, 'orange2')

tl2.to("#orange",{
  top: "250%",
  right: "30%",
  width: "15%"
}, 'orange2')
tl2.to("#leaf",{
  top: "225%",
  left: "0%",
  rotate: "160deg", 
  zIndex: "10"
}, 'orange2')
tl2.to("#leaf2",{
  top: "230%",
  left: "90%",
  rotate: "160deg",
  zIndex: "10"
}, 'orange2')

tl2.from("#cocacola",{
  left: "-30%",
  rotate:"-90deg"
}, 'orange2')
tl2.from(".lemon1",{
  left: "-30%",
}, 'orange2')
tl2.from("#pepsi",{
  left: "130%",
  rotate:"90deg"
}, 'orange2')
tl2.from(".lemon2",{
  left: "130%",
}, 'orange2')