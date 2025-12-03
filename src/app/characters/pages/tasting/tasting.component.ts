import { Component, computed, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CharactersListComponent } from "../../components/characters-list/characters-list.component";
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';
import { Character } from '../../interfaces/character.interface';

let imageUrls: Character[] = [
  {
    url: 'https://cdna.artstation.com/p/assets/images/images/016/765/220/20190323183650/smaller_square/nicholas-kole-img-9532.jpg?1553384211',
    width: '',
    height: '80',
    unit: 'rem'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/984e5be4-24c5-4b54-b8e8-0feb058f4d6c/IMG_6377.JPG',
    width: '',
    height: '80',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1681736664928-L7OR2QGY5FR2AWNR09OW/IMG_0722.jpg?format=1500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://mir-s3-cdn-cf.behance.net/projects/404/e235ea97063669.Y3JvcCwzMDM5LDIzNzcsMCwxMTU4.jpg',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://i.pinimg.com/736x/1f/08/94/1f089413a4fdc74ad8c6a50e5d9cddc1.jpg',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://cdnb.artstation.com/p/assets/images/images/026/645/833/large/nicholas-kole-img-2442.jpg?1589329394',
    width: '',
    height: '96',
    unit: ''
  },
    {
    url: 'https://mir-s3-cdn-cf.behance.net/projects/404/a945c071285377.Y3JvcCwzNjAwLDI4MTUsMCw4NjQ.jpg',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1509336898917-QCOLMDEM2HKWBSEJRDX4/Sheriff.jpg?format=750w',
    width: '',
    height: '80',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1595476318908-IOLVMRWFTKUBMKI9BA7A/IMG_2968.jpg?format=500w',
    width: '',
    height: '80',
    unit: ''
  },
  {
    url: 'https://cdna.artstation.com/p/assets/images/images/016/765/220/20190323183650/smaller_square/nicholas-kole-img-9532.jpg?1553384211',
    width: '',
    height: '80',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/984e5be4-24c5-4b54-b8e8-0feb058f4d6c/IMG_6377.JPG',
    width: '',
    height: '80',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1681736664928-L7OR2QGY5FR2AWNR09OW/IMG_0722.jpg?format=1500w',
    width: '',
    height: '64',
    unit: ''
  },
];

@Component({
  selector: 'app-tasting',
  standalone: true,
  imports: [SkeletonLoaderComponent],
  templateUrl: './tasting.component.html',
  styleUrl: './tasting.component.css',
  host: {ngSkipHydration: 'true'},
})
export default class TastingComponent implements OnInit{


  public isLoading = signal(true);
  public tastingImgs = signal<Character[]>(imageUrls);
  public scrollDivRef = viewChild<ElementRef<HTMLDListElement>>('groupDiv')
  public startSlice = signal(0);
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {

    this.tastingImgsOrder();
    this.title.setTitle('tasting-menu');
    this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
    this.meta.updateTag( { name: 'og:title', content: 'tasting-menu' } );
    this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );

    setTimeout(() => {
      this.isLoading.set(false);
    },1000);

  }

  tastingImgsOrder = computed<Character [][]>( () => {
    const order = [];
    for (let i = 0; i < this.tastingImgs().length; i += 3) {
      order.push(this.tastingImgs().slice(i, i + 3))
    }
    return order;
  })

  onScroll( event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv ) return;

    const scrollTop = scrollDiv.scrollTop; //scroll de inicio en pantalla.
    const clientHeight = scrollDiv.clientHeight; //Tamaño del height.
    const scrollHeight = scrollDiv.scrollHeight; //maximo total del scroll
    /* console.log( scrollTop + clientHeight, scrollHeight); */

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    console.log(isAtBottom);


  }

}
