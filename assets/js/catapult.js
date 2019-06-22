

        let catapult = () => {
          let start = document.querySelector(".pulse8").getBoundingClientRect()
          let middle = document.querySelector(".pulse7").getBoundingClientRect()
          let end = document.querySelector(".pulse1").getBoundingClientRect()
          let wall = document.querySelector(".step4").getBoundingClientRect()
          let path = document.querySelector("#pathWidth").getBoundingClientRect()
          let firstX = (e=0) => middle.left - start.left + e;
          let firstY = (e=0) => middle.top - start.top + e;
          let secondX = (e=0) => (end.right + end.left)/2 - (start.right + start.left)/2 + e;
          let secondY = (e=0) => end.top - start.top + e;
          let aroundSideX = (e=0) => path.right + path.left - start.left + e;
          let aroundSideY = (e=0) => path.bottom - start.top + e;
          let overWallX = (e=0) => wall.left - start.left + e;
          let overWallY = (e=0) => wall.top - start.top + e;
            let animation = anime.timeline({
                easing: "easeInOutCubic",
                complete: function(anim) {
                    catapult()
                }
            }).add({
              targets: ".pulse8",
              opacity: [1, 0],
              scale: [
                {value: [1, 2]},
              ],
              easing: "easeOutCubic",
              duration: 1000,
            }).add({
              targets: ".mv-5",
              backgroundColor: {
                  value: ["rgba(175, 70, 211, 1)", "rgba(0, 0, 0, 0)"],
                  duration: 1
              },
              border: {
                value: [0, "2px solid  rgba(175, 70, 211, 1)"],
                duration: 1

              },
              borderRadius: {
                value:["50%", 0],
                duration: 1
              }
            }).add({
              targets: ".catapult",
              width: [0, "40px"],
              easing: 'linear',
              duration: 1000,
            }, 1000).add({
              targets: ".mv-5",
              translateX: [0, 40],
              translateY: [0,0],
              easing: 'linear',
              duration: 1000,
            }, 1000).add({
              targets: ".catapult-throbber",
              rotateZ: [0, -360],
              easing: 'linear',
              duration: 500,
            }).add({
              targets: ".mv-5",
              translateX: [
                {
                  value: [40, overWallX(-10)],
                  easing: "linear",
                },
                {
                  value: [overWallX(-10), firstX()],
                  easing: "easeOutCubic",
                },
              ],
              translateY: [
                {
                  value: [0, overWallY(-50)],
                  easing: "easeInOutCubic",
                },
                {
                  value: [overWallY(-50), firstY()],
                  easing: "linear",
                },
              ],
              rotateZ: [0, 1440],
              easing: "linear",
              duration: 1000,
            }).add({
              targets: ".pulse7",
              opacity: [1, 0],
              scale: [
                {value: [1, 2]},
              ],
              easing: "easeOutCubic",
              duration: 1000,
            }).add({
              targets: ".mv-5",
              translateX: [
                {
                  value: [firstX(), aroundSideX(30)],
                  duration: 550,

                },
                {
                  value: [aroundSideX(30), secondX()],
                  delay: 1000,
                  duration: 1550,
                }

              ],
              translateY: [
                {
                  value: [firstY(), aroundSideY(50)],
                  delay: 550,
                  duration: 1000,
                },
                {
                  value: [aroundSideY(50), secondY()],
                  delay: 1550,
                  duration: 700,
                }
              ],
              easing: "linear",
            }).add({
              targets: ".pulse1",
              opacity: [1, 0],
              scale: [
                {value: [1, 2]},
              ],
              easing: "easeOutCubic",
              duration: 1000,
            }).add({
              targets: ".catapult",
              width: ["40px", 0],
              easing: 'linear',
              duration: 1000,
            }, 3500)
            return animation
        }

        catapult()
