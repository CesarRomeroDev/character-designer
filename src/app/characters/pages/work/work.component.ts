import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CharactersListComponent } from "../../components/characters-list/characters-list.component";
import { Character } from '../../interfaces/character.interface';
import { FlowbiteService } from '../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';

let imageUrls: Character[] = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1706392898729-O958QXHMJFE9FRQQ429F/GrimSonicColors+copy.jpeg?format=500w',
    width: '',
    height: '64',
    unit: 'rem'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1595476318908-IOLVMRWFTKUBMKI9BA7A/IMG_2968.jpg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1607726831459-ROTCX4YU9N6FB45AQPXJ/webcover2.jpg?format=1000w',
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
    height: '64',
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
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1595476318908-IOLVMRWFTKUBMKI9BA7A/IMG_2968.jpg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://cdna.artstation.com/p/assets/images/images/016/765/220/20190323183650/smaller_square/nicholas-kole-img-9532.jpg?1553384211',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/984e5be4-24c5-4b54-b8e8-0feb058f4d6c/IMG_6377.JPG',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1681736664928-L7OR2QGY5FR2AWNR09OW/IMG_0722.jpg?format=1500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1509334818346-84RUQBSH8RPO1OATMQTU/MalT.jpg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1509381762842-5GSBBXT8ZVBBKUCZVIF8/74e0f147129741.58713853b9983.jpg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1527046183209-RF138CX04P0PJGCRGB8P/image-asset.jpeg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1509301795146-5YL92BMB470GCBW9KPQL/WFS.PNG?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1545246154020-X6MPZ5RU9CP3VK5SDFJX/Adventure.jpg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1607729345587-VTJAIHOC6ZNPZWOUEBG1/aliens.jpg?format=500w',
    width: '',
    height: '64',
    unit: ''
  },
];

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CharactersListComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  /* host: {ngSkipHydration: 'true'}, */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WorkComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);

  workCharacter = signal<Character[]>(imageUrls)

  constructor(
    private flowbiteService: FlowbiteService
  ){}

  ngOnInit(): void {

    this.flowbiteService.loadFlowbite(flowbite => {
      this.title.setTitle('Project');
      this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
      this.meta.updateTag( { name: 'og:title', content: 'Project' } );
      this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );

      flowbite = initFlowbite();
    });

  }

}
