import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  //Dumkopf data
  products: Product[] = [
    {
      pageLink:
        'https://www.takealot.com/black-decker-18v-system-drill-driver-200ma-charger-1-5ah-battery/PLID50118391',
      title:
        'BLACK+DECKER 18V System Drill Driver + 200mA charger + 1.5Ah battery',
      rating: 5,
      price: 1199,
      stockCount: 4,
      description:
        'The range of BLACK+DECKER 18 V Power Tool System products is powered with Lithium-Ion technology, where the same battery is interchangeable across all BLACK+DECKER 18 V products. ',
      imageUrls:
        'https://media.takealot.com/covers_tsins/53047584/5035048645444-1NS-zoom.jpg',
    },
    {
      pageLink: 'https://www.takealot.com/ryobi-impact-drill-500w/PLID38159974',
      title: 'Ryobi - Impact Drill - 500W',
      rating: 4.5,
      price: 399,
      stockCount: 4,
      description:
        'Ryobi has a large variety of impact drills to choose from when trying to find the right tool for the job. Keyless chuck for quick and easy bit changes',
      imageUrls:
        'https://media.takealot.com/covers_tsins/40886183/40886183_1-pdpxl.jpg',
    },
    {
      pageLink:
        'https://www.takealot.com/casals-variable-speed-impact-drill-500w/PLID46639933',
      title: 'Casals - Variable Speed Impact Drill - 500W',
      rating: 4.5,
      price: 453,
      stockCount: 4,
      description:
        'The Casals 500W impact Drill is fitted with a 13mm Keyed chuck with a powerful 500W motor, perfect for both domestic and semi-industrial use. Variable speed control, reverse and hammer/drill functions make the Casals 500W Impact Drill, your versatile partner. Auxiliary handle and depth gauge are included',
      imageUrls: '/assets/img/pr-bosch-toolkit.png',
    },
    {
      pageLink:
        'https://www.takealot.com/black-decker-18v-system-drill-driver-200ma-charger-1-5ah-battery/PLID50118391',
      title:
        'BLACK+DECKER 18V System Drill Driver + 200mA charger + 1.5Ah battery',
      rating: 5,
      price: 1199,
      stockCount: 4,
      description:
        'The range of BLACK+DECKER 18 V Power Tool System products is powered with Lithium-Ion technology, where the same battery is interchangeable across all BLACK+DECKER 18 V products. ',
      imageUrls: '/assets/img/pr-bosch-toolkit.png',
    },
    {
      pageLink: 'https://www.takealot.com/ryobi-impact-drill-500w/PLID38159974',
      title: 'Ryobi - Impact Drill - 500W',
      rating: 4.5,
      price: 399,
      stockCount: 4,
      description:
        'Ryobi has a large variety of impact drills to choose from when trying to find the right tool for the job. Keyless chuck for quick and easy bit changes',
      imageUrls: '/assets/img/pr-bosch-toolkit.png',
    },
    {
      pageLink:
        'https://www.takealot.com/casals-variable-speed-impact-drill-500w/PLID46639933',
      title: 'Casals - Variable Speed Impact Drill - 500W',
      rating: 4.5,
      price: 453,
      stockCount: 4,
      description:
        'The Casals 500W impact Drill is fitted with a 13mm Keyed chuck with a powerful 500W motor, perfect for both domestic and semi-industrial use. Variable speed control, reverse and hammer/drill functions make the Casals 500W Impact Drill, your versatile partner. Auxiliary handle and depth gauge are included',
      imageUrls: '/assets/img/pr-bosch-toolkit.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
