import { gsap } from "gsap";

let RedBoxTL = gsap.timeline();

RedBoxTL
// Move to the right and shake
    .to("#red-box", {x: 0, y: 10})
    .to("#red-box", {duration: .2, x: 1150})
    .to("#red-box", {duration: .2, scaleX: .5, scaleY: 2})
    .to("#red-box", {duration: .1, scaleX: 1, scaleY: 1})
    .to("#red-box", {duration: .05, rotate: -15})
    .to("#red-box", {duration: .05, rotate: 15})
    .to("#red-box", {duration: .05, rotate: 0})

// Fall down, bounce, turn blue and then yellow
    .to("#red-box", {duration: .2, y: 560, scaleY: 2})
    .to("#red-box", {duration: .05, scaleY: 1})
    .to("#red-box", {duration: .05, y: 600, scaleX: 2, scaleY: .5})
    .to("#red-box", {duration: .05, backgroundColor: "#0e90db"})
    .to("#red-box", {duration: .2, y: 280, scaleX: 1, scaleY: 1.2})
    .to("#red-box", {duration: .2, y:580, scaleX: 1.5, scaleY: .75})
    .to("#red-box", {duration: .1, x: 1000, y: 350, scaleX: 1, scaleY: 1.2, rotate: -45})
    .to("#red-box", {duration: .1, x: 850, scaleX: 1, scaleY: 1.2, rotate: -90})
    .to("#red-box", {duration: .05, y: 580, scaleX: 1.5, scaleY: .75, rotate: 0})
    .to("#red-box", {duration: .05, backgroundColor: "#fcb51e"})
    .to("#red-box", {duration: .2, y: 400, scaleX: .75, scaleY: 1.5})
    .to("#red-box", {duration: .05, y: 580, scaleX: 1.5, scaleY: .75})
    .to("#red-box", {duration: .05, y: 560, scaleX: 1, scaleY: 1})

// Shake, squeeze, turn green
    .to("#red-box", {duartion: .05, rotate: -5, delay: .5})
    .to("#red-box", {duartion: .05, rotate: 5})
    .to("#red-box", {duartion: .05, rotate: -5})
    .to("#red-box", {duartion: .05, rotate: 5})
    .to("#red-box", {duartion: .05, rotate: 0})
    .to("#red-box", {duration: .05, y: 600, scaleX: 1.5, scaleY: .5})
    .to("#red-box", {duration: .05, backgroundColor: "#80e08d"})
    .to("#red-box", {duration: .2, y: 100, scaleX: .75, scale: 2})
    .to("#red-box", {duration: .2, y: 200, scaleX: 1.2, scaleY: .75})
    .to("#red-box", {duration: .05, y: 150, scaleX: 1, scaleY: 1})
    .to("#red-box", {duration: .1, y: 170})