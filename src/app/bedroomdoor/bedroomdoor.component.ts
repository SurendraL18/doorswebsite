import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-bedroomdoor',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './bedroomdoor.component.html',
  styleUrl: './bedroomdoor.component.css'
})
export class BedroomdoorComponent    {
  items = [
    { name: 'Classic', categories: ['All Category', 'single'], image: '../../assets/Classic.png', alt:'Classic',Id:'344D15B01',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'WPC wood, Laminate, Brass strip', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'35mm, 40mm , 45mm',weight:'17kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B01%20and%20Name%3A%20Classic'},
    { name: 'Stella', categories: ['All Category', 'single'], image: '../../assets/Stella.png', alt:'Ebony Door',Id:'344D15B02',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'UPVC frame and base', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'19kgs (+-3kgs)',polish:'Plain Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B02%20and%20Name%3A%20Stella'},
    { name: 'Flex', categories: ['All Category', 'single'], image: '../../assets/Flex.png', alt:'Flex',Id:'344D15B03',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'UPVC frame and base', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Aluminum knobe',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B03%20and%20Name%3A%20Flex'},
    { name: 'Black Royalty', categories: ['All Category', 'single'], image: '../../assets/Black Royalty.png', alt:'Black Royalty',Id:'344D15B04',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'WPC wood, Laminate, Brass strip', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B04%20and%20Name%3A%20Black%20Royalty'},
    { name: 'Linea Premium 3', categories: ['All Category', 'single'], image: '../../assets/Linea Premium 3.png', alt:'Linea Premium 3',Id:'344D15B05',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B05%20and%20Name%3A%20Linea%20Premium%203'},
    { name: 'Linea Premium 4', categories: ['All Category', 'single'], image: '../../assets/Linea Premium 4.png', alt:'Linea Premium 4',Id:'344D15B06',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B06%20and%20Name%3A%20Linea%20Premium%204'},
    { name: 'Dark Walnut 3', categories: ['All Category', 'single'], image: '../../assets/Dark Walnut 3.png', alt:'Dark Walnut 3',Id:'344D15B07',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate, Stainless steel strips', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel handle',thickness:'30mm, 35mm, 40mm',weight:'22kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B07%20and%20Name%3A%20Dark%20Walnut%203'},

    { name: 'Union', categories: ['All Category', 'single'], image: '../../assets/Union.png', alt:'Union',Id:'344D15B08',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'UPVC frame and base, Stainless steel strips', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel handle (metalic)',thickness:'30mm, 35mm, 40mm',weight:'23kgs (+-3kgs)',polish:'UPVC Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B08%20and%20Name%3A%20Union'},
  
    { name: 'Matte Grey', categories: ['All Category', 'single'], image: '../../assets/Matte Grey.png', alt:'Matte Grey',Id:'344D15B09',image2:'dsad', size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'Steel frame and base', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'25kgs (+-3kgs)',polish:'plain Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B09%20and%20Name%3A%20Matte%20Grey'},

    { name: 'Strand', categories: ['All Category', 'single'], image: '../../assets/Strand.png', alt:'Strand',Id:'344D15B10',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'23kgs (+-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B10%20and%20Name%3A%20Strand'},

    { name: 'Domino Walnut', categories: ['All Category', 'single'], image: '../../assets/Domino Walnut.png', alt:'Domino Walnut',Id:'344D15B11',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 7 feet',material:'UPVC frame and base', type:'Bedroom Door' ,accessories:'Heavey duty steel butt hinges, door lock, Stainless steel knobe',thickness:'30mm, 35mm, 40mm',weight:'23kgs (+-3kgs)',polish:'Plain Finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B11%20and%20Name%3A%20Domino%20Walnut'},

    { name: 'Brown Grains', categories: ['All Category', 'sliding_door'], image: '../../assets/Brown Grains.png', alt:'Brown Grains',Id:'344D15B12',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Aluminum soft door slider, Stainless steel knobe and door lock',thickness:'30mm, 35mm, 40mm',weight:'16kgs (+-3kgs)',polish:'Laminate finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B12%20and%20Name%3A%20Brown%20Grains'},

    { name: 'Ethereal Elegance', categories: ['All Category', 'sliding_door'], image: '../../assets/Ethereal Elegance.png', alt:'Ethereal Elegance',Id:'344D15B13',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Aluminum soft door slider, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'18kgs (+-3kgs)',polish:'Laminate finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B13%20and%20Name%3A%20Ethereal%20Elegance'},

    { name: 'Modern Elegance Door', categories: ['All Category', 'sliding_door'], image: '../../assets/Modern Elegance Door.png', alt:'Modern Elegance Door',Id:'344D15B14',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Aluminum hanger,  stop, track , guide, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'18kgs (+-3kgs)',polish:'Laminate finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B14%20and%20Name%3A%20Modern%20Elegance%20Door'},

    { name: 'Ginger Ash Barn Doors', categories: ['All Category', 'sliding_door'], image: '../../assets/Ginger Ash Barn Doors.png', alt:'Ginger Ash Barn Doors',Id:'344D15B15',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Aluminum hanger,  stop, track , guide, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'18kgs (+-3kgs)',polish:'Laminate finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B15%20and%20Name%3A%20Ginger%20Ash%20Barn%20Doors'},

    { name: 'Charm Sliding Door', categories: ['All Category', 'sliding_door'], image: '../../assets/Charm Sliding Door.png', alt:'Charm Sliding Door',Id:'344D15B16',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'WPC wood frame and base, Laminate', type:'Bedroom Door' ,accessories:'Aluminum hanger,  stop, track , guide, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'18kgs (+-3kgs)',polish:'Laminate finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B16%20and%20Name%3A%20Charm%20Sliding%20Door'},

    { name: 'Urbanite Barn Door', categories: ['All Category', 'sliding_door'], image: '../../assets/Urbanite Barn Door.png', alt:'Urbanite Barn Door',Id:'344D15B17',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'UPVC', type:'Bedroom Door' ,accessories:'Aluminum hanger,  stop, track , guide, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Plain finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B17%20and%20Name%3A%20Urbanite%20Barn%20Door'},
    
    { name: 'Opulence Barn Door', categories: ['All Category', 'sliding_door'], image: '../../assets/Opulence Barn Door.png', alt:'Opulence Barn Door',Id:'344D15B18',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'UPVC', type:'Bedroom Door' ,accessories:'Aluminum hanger,  stop, track , guide, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Plain finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B18%20and%20Name%3A%20Opulence%20Barn%20Door'},

    { name: 'Royal Glide Entrance', categories: ['All Category', 'sliding_door'], image: '../../assets/Royal Glide Entrance.png', alt:'Royal Glide Entrance ',Id:'344D15B19',image2:'dsad' , size:'2.6 feet x 7 feet and 3 feet x 8 feet and 3 feet x 7 feet',material:'UPVC', type:'Bedroom Door' ,accessories:'Aluminum hanger,  stop, track , guide, Stainless steel handle and door lock',thickness:'30mm, 35mm, 40mm',weight:'20kgs (+-3kgs)',polish:'Plain finish', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15B19%20and%20Name%3A%20Royal%20Glide%20Entrance'},
    
  ];

  selectedCategory = 'All Category';

  setCurrentCategory(category: string) {
    this.selectedCategory = category;
  }
}
