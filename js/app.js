const app = Vue.createApp({
    data() {
      return {
        currentSlide: 0,
        images: [
          {
            title: "Daenerys Targaryen",
            text: "Io sono Daenerys, Nata dalla Tempesta, della Casa Targaryen, dello antico sangue di Valyria e vi dico che sono io la figlia del Drago. Vi do la mia parola che coloro che vi faranno del male moriranno tra urla di tormento",
            image: "./img/image1.jpg"
          },
          {
            title: "Jon Snow",
            text: "Tu appartieni al nord...il vero nord.",
            image: "./img/image2.jpg"
          },
          {
            title: "Cersei Lannister",
            text: "Al gioco del trono o si vince o si muore. Non c'è una terza possibilità.",
            image: "./img/image3.jpg"
          },
          {
            title: "Tyrion Lannister",
            text: "Sono colpevole di un crimine più mostruoso: essere un nano. La mia colpa è questa.",
            image: "./img/image4.jpg"
          },
          {
            title: "The Night King",
            text: "Il vero nemico non aspetterà la fine delle bufere. Lui porta le bufere.",
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