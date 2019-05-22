
let start = document.querySelector(".pulse8").getBoundingClientRect()
let middle = document.querySelector(".pulse7").getBoundingClientRect()
let end = document.querySelector(".pulse1").getBoundingClientRect()
        let catapult = () =>{
          let firstX = () => middle.left - start.left
          let firstY = () => middle.top - start.top
          let secondX = () => start.left - end.left
          let secondY = () => end.top - start.top
          console.log(secondX(), end.left)
            let animation = anime.timeline({
                easing: "easeInOutCubic",
                complete: function(anim) {
                    animateLI()
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
              translateX: [0, firstX()],
              translateY: [0, firstY()],
              easing: "easeOutCubic",
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
              translateX: [firstX(), secondX()],
              translateY: [firstY(), secondY()],
              easing: "easeOutCubic",
              duration: 1000,
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
