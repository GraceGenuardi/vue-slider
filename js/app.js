const app = Vue.createApp({
    data() {
      return {
        currentSlide: 0,
        images: [
          {
            title: "First Image",
            text: "This is the first image",
            image: "./img/image1.jpg"
          },
          {
            title: "Second Image",
            text: "This is the second image",
            image: "./img/image2.jpg"
          },
          {
            title: "Third Image",
            text: "This is the third image",
            image: "./img/image3.jpg"
          },
          {
            title: "Third Image",
            text: "This is the third image",
            image: "./img/image4.jpg"
          },
          {
            title: "Third Image",
            text: "This is the third image",
            image: "./img/image5.jpg"
          }

        ]
      }
    },
   
  });

  app.mount('#slides-container');