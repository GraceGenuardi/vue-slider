const app = Vue.createApp({
    data() {
      return {
        currentSlide: 0,
        images: [
          {
            title: "Daenerys Targaryen",
            text: "blabla",
            image: "./img/image1.jpg"
          },
          {
            title: "Jon Snow",
            text: "blabla",
            image: "./img/image2.jpg"
          },
          {
            title: "Cersei Lannister",
            text: "blabla",
            image: "./img/image3.jpg"
          },
          {
            title: "Tyrion Lannister",
            text: "blabla",
            image: "./img/image4.jpg"
          },
          {
            title: "The Night King",
            text: "blabla",
            image: "./img/image5.jpg"
          }

        ]
      }
    },
    methods: {
        prevSlide() {
          this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
        },
        nextSlide() {
          this.currentSlide = (this.currentSlide + 1) % this.images.length;
        }
      }
  });

  app.mount('#slides-container');