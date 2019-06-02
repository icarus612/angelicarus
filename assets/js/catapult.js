

        let catapult = () =>{
          let start = document.querySelector(".pulse8").getBoundingClientRect()
          let middle = document.querySelector(".pulse7").getBoundingClientRect()
          let end = document.querySelector(".pulse1").getBoundingClientRect()
          let wall = document.querySelector(".step4").getBoundingClientRect()
          let path = document.querySelector("#pathWidth").getBoundingClientRect()
          let firstX = () => middle.left - start.left
          let firstY = () => middle.top - start.top
          let secondX = () => start.left - end.left
          let secondY = () => end.top - start.top
          let aroundSideX = (e=0) => path.right - start.left + e
          let aroundSideY = (e=0) => path.bottom - start.top + e
          let overWallX = (e=0) => wall.left - start.left + e
          let overWallY = (e=0) => wall.top - start.top + e
          console.log(aroundSideX())
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
              targets: ".mv-5",
              translateX: [
                {
                  value: [0, overWallX(-5)],
                  easing: "linear"
                },
                {
                  value: [overWallX(-5), firstX()],
                  easing: "easeOutCubic",
                },
              ],
              translateY: [
                {
                  value: [0, overWallY(-10)],
                  easing: "easeInOutCubic"
                },
                {
                  value: [overWallY(-10), firstY()],
                  easing: "linear",
                },
              ],

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
                  duration: 400,

                },
                {
                  value: [aroundSideX(30), secondX()],
                  delay: 800,
                  duration: 1500,
                }

              ],
              translateY: [
                {
                  value: [firstY(), aroundSideY(50)],
                  delay: 400,
                  duration: 800,
                },
                {
                  value: [aroundSideY(50), secondY()],
                  delay: 1500,
                  duration: 600,
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
            })
            return animation
        }


catapult()
