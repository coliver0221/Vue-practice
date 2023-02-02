<template>
  <div class="home">
    <p>P5 Testing</p>
    <div ref="p5Container"></div>
  </div>
</template>

<script>
import P5 from "p5";
import { onMounted, ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    let p5Container = ref(null);

    // script of p5
    const script = function (p5) {
      // init
      class Ball {
        constructor() {
          this.r = 50;
          this.p = p5.createVector(50, 50);
          this.v = p5.createVector(1, 0);
          this.a = p5.createVector(0, 1);
          this.color = "white";
        }
        drawBall() {
          p5.push();
          p5.fill(this.color);
          p5.translate(this.p.x, this.p.y);
          p5.circle(ball.p.x, ball.p.y, 50);
          p5.pop();
        }
        updateBall() {
          this.p.add(this.v);
          this.v.add(this.a);
          // rebound
          if (this.p.y >= p5.height) {
            this.v.y = -p5.abs(this.v.y) * 0.95;
          }
          if (this.p.x >= p5.width || this.p.x < 0) {
            this.v.x = -p5.abs(this.v.x);
          }
        }
      }

      let ball;

      // NOTE: Set up is here
      p5.setup = () => {
        p5.createCanvas(500, 500);
        ball = new Ball();
      };
      // NOTE: Draw is here
      p5.draw = () => {
        p5.background(0);
        // draw ball
        ball.drawBall();
        // update ball
        ball.updateBall();
      };
    };

    onMounted(() => {
      new P5(script, p5Container.value);
    });

    return { p5Container };
  },
};
</script>
