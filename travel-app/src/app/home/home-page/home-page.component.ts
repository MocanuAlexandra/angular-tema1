import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/models/city-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  // The selected city that will be displayed on the header
  displayedCityOnHeader: CityModel = {
    name: 'NEW ADVENTURE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.',
    image: '',
  };

  // Array of cities
  arrayOfCities: CityModel[] = [
    {
      image:
        'https://imgs.search.brave.com/mDt2s4ZV2iDC65R6SricZQ7rADC19M1cjdPveI2f5x0/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/RE1yX241TXJNVGpU/ZEZqWEl5M25BSGFF/byZwaWQ9QXBp',
      name: 'LONDON',
      description:
        'LONDON Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/AbFLII_P5CN6wBmFA7kf7sHZ99qsCEeQI27yv3YBiw0/rs:fit:708:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/Nng1OFNZUHlOZGNG/bkNfQm1lMFNRSGFF/OSZwaWQ9QXBp',
      name: 'PARIS',
      description:
        'PARIS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/tlKWXlnN2SlbIprK4J3s3-0eiXEW8Tz7GEzN-x560U4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/QmdUTzVyX2ZvMGU4/ZWdibkdRbkdBSGFF/SyZwaWQ9QXBp  ',
      name: 'NEW YORK',
      description:
        'NEW YORK Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/Pu1JEiVTOBg4RmlnZNZ7u_csLSdyc3kIoqt_0AFb-rE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iLzZSMVdt/Mm9Wd0duSUMyREJj/NEJ3Uzgwc3ZlWT0v/Mzg2M3gyNTc4L2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L21vc2Nvdy1rcmVt/bGluLWFuZC1zdC1i/YXNpbC1jYXRoZWRy/YWwtYXQtZHVzay0x/NTgyMDA0MjMtNWE2/NGY0NTk0ZTQ2YmEw/MDM3NzMzMWZiLmpw/Zw',
      name: 'MOSCOW',
      description:
        'MOSCOW Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/hdv4uD7SEQLohMMjrQvg5caJsoQYovBG2W5TUZFj-NY/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/bVZvenJzazdEQ3Z6/aEFUYWNkSjVRSGFF/byZwaWQ9QXBp',
      name: 'BERLIN',
      description:
        'BERLIN Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/zQoWxfk97UwLPk0a8UnP7Copw5Gch74b0WSwPc6vrHU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/QVc2c25Tc3VBc2Fp/cE9KMk1qdUhRSGFF/OCZwaWQ9QXBp',
      name: 'ROME',
      description:
        'ROME Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/VdmFqQdiJWLf3gJUsk8Sor2yGT-PzPk_83PIoAj3snw/rs:fit:796:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/ZFduUjh2NGxKSDBZ/X3lITkxnNmdnSGFF/YSZwaWQ9QXBp',
      name: 'MADRID',
      description:
        'MADRID Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/bYxZoNpDlxYzi71pKIRc9wdG0JIzHpNRBVcnOUhZ614/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/WG9mcUVwU3I4TzFS/SGtONFlsYWJRSGFF/OCZwaWQ9QXBp',
      name: 'LISBON',
      description:
        'LISBON Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/nb1-TweG0vj-a76qZBrVn0pCG-91tJtVrS2pt7I9M94/rs:fit:722:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/NHdCbVJYbTVnSU8z/TmtDcVZrUUdRSGFF/MyZwaWQ9QXBp',
      name: 'PRAGUE',
      description:
        'PRAGUE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/lD8HTVbwG_SMSN9WBGFQRtthxcle9yHodcggkw6Ktvw/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/TzhyVmxNMHdQSFpD/cTVBT0F1eWZnSGFF/NiZwaWQ9QXBp',
      name: 'BUCHAREST',
      description:
        'BUCHAREST Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/cnHrcmwykiwI-zEkQdYLyEjWmfBBnC4rVRZis3uoBxc/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/dG1VQmpud1ctcTJY/MnFNYXhGaW1nSGFF/NiZwaWQ9QXBp',
      name: 'TOKYO',
      description:
        'TOKYO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      image:
        'https://imgs.search.brave.com/7rs-HUyWZrCKwUvHRagr24pDEGEfespCEGOinGPm5No/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/N1plckUtUEpzdU9I/MUt2V01EaVhBSGFF/OCZwaWQ9QXBp',
      name: 'BEIJING',
      description:
        'BEIJING Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // This method is called when a city is selected
  onSelectedCity(visitedCity: CityModel) {
    this.displayedCityOnHeader = visitedCity;
  }
}
