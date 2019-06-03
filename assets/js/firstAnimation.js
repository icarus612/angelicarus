

        let firstAnimation = () =>{
          let locate = document.querySelector("#whereAmI"),
              stage = document.querySelector("#top"),
              container = document.querySelector("#top-container"),
              catapult = document.querySelector(".catapult-throbber").getBoundingClientRect(),
              h1 = document.querySelector("#dot-start"),
              h2 = document.querySelector("#stage"),
              fullHeight = (e=1) => stage.offsetHeight*e,
              fullWidth = (e=1) => stage.offsetWidth*e,
              startX = (e=0) => fullWidth() - container.offsetWidth + e
              startY = (e=0) => container.offsetHeight/2 + e,
              howFarX = (e=1) => locate.clientWidth*e,
              howFarY = (e=6) => (h1.clientHeight - h2.clientHeight) + e + h2.clientHeight/2;
console.log(startX())
            let animation =	anime.timeline({
    					easing: "linear",
              complete: function(anim) {
                  firstAnimation()
              },
    				}).add({
    					targets: ".mv-6",
    					translateX: [0, howFarX(6)],
              translateY: [0, 0],
    					duration: 1100,
              delay: 3830,
    				}).add({
    					targets: ".pulse6",
    					opacity: [1, 0],
    					scale: [
    						{value: [1, 2]},
    					],
    					easing: "easeOutCubic",
    					duration: 1000,
    				}).add({
    					targets: ".mv-6",
    					translateY: [0, startY(20)],
    					duration: 1300,
    				}).add({
    					targets: ".spring",
    					borderRadius: [
    						{value: [0, "50%"]},
    						{value: ["50%", 0]},
    					],
    					duration: 200,
    					direction: "alternate"
    				}).add({
    					targets: ".mv-6",
    					translateX:
    						{
    							value: [howFarX(6), howFarX(1)],
    							duration: 910,
    							easing: "linear"
    						},
    					translateY: [
    						{
    							value: [startY(20), startY(-70)],
    							duration: 450,
    							easing: "easeOutCirc"
    						},
    						{
    							value: [startY(-70), startY(170)],
    							duration: 450,
    							easing: "easeInCirc"
    						},

    					],

    				}).add({
              targets: ".mv-6",
              height: [
                {
                    value: ["10px", "1px"],
                    duration: 30
                },
                {
                    value: ["1px", "10px"],
                    duration: 30
                },
              ],
              backgroundColor: {
                  value: [" rgba(175, 70, 211, 1)", " rgba(0, 0, 0, 0)"],
                  duration: 30
              },
              border: {
                value: [0, "2px solid  rgba(175, 70, 211, 1)"],
                duration: 30

              },
              borderRadius: {
                  value: ["50%", "0px"],
                  duration: 30
              },
              translateX:
                {
                  value: [howFarX(1), -catapult.right-startX(5)],
                  duration: 910,
                  easing: "linear",
                  delay: 50,
                },
              translateY: [

                {
                  value: [startY(170), startY(10)],
                  duration: 450,
                  easing: "easeOutCirc",
                  delay: 50,

                },
                {
                  value: [startY(10), startY(170)+howFarY()],
                  duration: 450,
                  easing: "easeInCirc"
                },
              ],
              rotateZ: {
                  value: [0, -720],
                  delay: 50,
                  duration: 800,
                  easing: "easeInOutCirc"
              },
            })
            return animation
        }
        firstAnimation();
        anime({
          targets: ".first-throbber .throbber-inner",
          scale: 1.6,
          border: "0px",
          easing: "easeInCubic",
          direction: "alternate",
          loop: true,
          duration: 1500,
        })
