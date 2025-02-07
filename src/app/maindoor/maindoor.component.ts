import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Meta, Title } from '@angular/platform-browser';
import { HostListener } from '@angular/core';
import { ScrollbuttonComponent } from "../scrollbutton/scrollbutton.component";





@Component({
    selector: 'app-maindoor',
    standalone: true,
    templateUrl: './maindoor.component.html',
    styleUrl: './maindoor.component.css',
    imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule, RouterLink, ScrollbuttonComponent]
})



export class MaindoorComponent implements OnInit {

  

 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }
  items = [
    { name: 'Ebony', categories: ['All Category', 'double_door'], image: '../../assets/Ebony Door.png', alt:'Ebony Door',Id:'344D15A01',image2:'../../assets/Ebony Doors.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:' WPC wood frame, Laminate', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe and door lock',thickness:'50mm, 70mm, 90mm',weight:'38 kgs (+/-3kgs)',polish:'Laminate finish', walink:'https://api.whatsapp.com/send?phone=919833515241&text=Hello%2C%20%20%20%0A%0AI%20want%20the%20prices%20for%20Product%20no.%20344D15A01%0A%C2%A0and%C2%A0Name%3A%20Ebony%20Door%0A'},
   
    { name: 'Johnson Cherry', categories: ['All Category', 'double_door', 'designer_door'], image: '../../assets/Johnson cherry Door.png' ,alt:'Johnson cherry Door',Id:'344D15A02',image2:'../../assets/Johnson cherry Doors.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:' WPC wood frame, Laminate', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe and door lock',thickness:'50mm, 70mm, 90mm',weight:'38 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A02%20and%20Name%3A%20Johnson%20Cherry%20Door'},
   
    { name: 'Colonial Maple', categories: ['All Category', 'double_door'], image: '../../assets/Colonial Maple Door.png', alt:'Colonial Maple Door',Id:'344D15A03',image2:'../../assets/Colonial Maple Doors.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:' WPC wood frame, Laminate', type:'Main Door' ,accessories:'Concealed hinges, Stainless steel knobe with door lock and peephole',thickness:'50mm, 70mm, 90mm',weight:'40 kgs (+/-3kgs)',polish:'Laminate finish' ,walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A03%20and%20Name%3A%20Colonial%20Maple%20Door'},
  
    { name: 'Special Walnut fiberglass', categories: ['All Category', 'double_door','designer_door','glass_door'], image: '../../assets/Special Walnut fiberglass Door.png', alt:'Special Walnut fiberglass Door',Id:'344D15A04',image2:'../../assets/Special Walnut fiberglass Doors.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'  WPC wood frame, Nagpur teak , PVC fluted panel, black fiber glass', type:'Main Door' ,accessories:' Concealed hinges, door lock and peephole',thickness:'50mm, 70mm, 90mm',weight:'42 kgs (+/-3kgs)',polish:'PU Polish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A04%20and%20Name%3A%20Special%20Walnut%20fiberglass%20Door'},
   
    { name: 'Dark Walnut', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Dark Walnut Door.png',alt:'Dark Walnut Door' ,Id:'344D15A05',image2:'../../assets/Dark Walnut Doors.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC wood frame, WPC wood base, Laminate', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe and door lock',thickness:'50mm, 70mm, 90mm',weight:'40 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A05%20and%20Name%3A%20Dark%20Walnut%20Door'},
   
    { name: 'Red Oak', categories: ['All Category', 'double_door', 'designer_door'], image: '../../assets/Red Oak Door.png', alt:'Red Oak Door' ,Id:'344D15A06',image2:'../../assets/Red Oak Doors.png',size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'Red Oak wood', type:'Main Door',accessories:'Concealed hinges',thickness:'50mm, 70mm, 90mm',weight:'40 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A06%20and%20Name%3A%20Red%20Oak%20Door'},

    { name: 'Ebony fiberglass', categories: ['All Category', 'double_door','designer_door','glass_door'], image: '../../assets/Ebony fiberglass Door.png', alt:'Ebony fiberglass Door' ,Id:'344D15A07',image2:'../../assets/Ebony fiberglass Doors.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'Nagpur teak wood, toughned glass', type:'Main Door' ,accessories:'Concealed hinges, door lock and peephole',thickness:'50mm, 70mm, 90mm',weight:'45 kgs (+/-3kgs)',polish:'PU Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A07%20and%20Name%3A%20Dark%20Walnut%20Twin%20Door'},

    { name: 'Dark Walnut', categories: ['All Category', 'twin_door'], image: '../../assets/Dark Walnut Twin Door.png', alt:'Dark Walnut Twin Door' ,Id:'344D15A08',image2:'../../assets/Dark Walnut Twin Doors.png' ,size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood, MS Grill, Laminate', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, door lock',thickness:'50mm, 70mm, 90mm',weight:'20 kgs (+/-3kgs)',polish:'Laminate Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A08%20and%20Name%3A%20Dark%20Walnut%20Twin%20Door'},

    { name: 'Soft Peach', categories: ['All Category', 'twin_door'], image: '../../assets/Soft peach Twin Door.png', alt:'Soft peach Twin Door' ,Id:'344D15A09',image2:'../../assets/Soft peach Twin Doors.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood, MS Grill, Laminate', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, door lock',thickness:'50mm, 70mm, 90mm',weight:'20 kgs (+/-3kgs)',polish:'Laminate Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A09%20and%20Name%3A%20Soft%20peach%20Twin%20Door'},

    { name: 'Natural Wood PVC', categories: ['All Category', 'twin_door'], image: '../../assets/Natural wood PVC Twin Door.png', alt:'Natural wood PVC Twin Door',Id:'344D15A10',image2:'../../assets/Natural wood PVC Twin Doors.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood, MS Grill, Laminate, PVC fluted panel', type:'Main Door' ,accessories:' Heavey duty steel butt hinges, door lock',thickness:'50mm, 70mm, 90mm',weight:'22 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A10%20and%20Name%3A%20Natural%20wood%20PVC%20Twin%20Door'},

    { name: 'Serenity Swirl', categories: ['All Category', 'twin_door'], image: '../../assets/Serenity Swirl Twin Door.png', alt:'Serenity Swirl Twin Door' ,Id:'344D15A11',image2:'../../assets/Serenitys.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood, MS Grill, Laminate', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, door lock and knobe',thickness:'50mm, 70mm, 90mm',weight:'21 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A11%20and%20Name%3A%20Dark%20Walnut%20Twin%20Door'},

    { name: 'Harmony Hinge', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Harmony Hinge.png', alt:'Harmony Hinge' ,Id:'344D15A12',image2:'../../assets/Harmony Hinges.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood, PVC Fluted panel, Laminate', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, door lock, steel handle',thickness:'50mm, 70mm, 90mm',weight:'21 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A12%20and%20Name%3A%20Harmony%20Hinge'},

    { name: 'Tranquil Gateway', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Tranquil Gateway.png', alt:'Tranquil Gateway' ,Id:'344D15A13',image2:'../../assets/Tranquil Gateways.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, Laminate', type:'Main Door' ,accessories:'Heavy duty steel butt hinges, door lock, Stainless steel handle (gold)',thickness:'50mm, 70mm, 90mm',weight:'20 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A14%20and%20Name%3A%20Trendy%20Threshold'},

    { name: 'Trendy Threshold', categories: ['All Category','single_door','designer_door'], image: '../../assets/Trendy Threshold.png', alt:'Trendy Threshold' ,Id:'344D15A14',image2:'../../assets/Trendy Thresholds.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame, pine wood base, Laminate, MS bar black coated', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, door lock',thickness:'50mm, 70mm, 90mm',weight:'24 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A15%20and%20Name%3A%20Stellar'},

    { name: 'Stellar', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Stellar.png', alt:'Stellar' ,Id:'344D15A15',image2:'../../assets/Stellars.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'UPVC frame,Steel base', type:'Main Door' ,accessories:'Heavy duty steel butt hinges, Smart door lock',thickness:'50mm, 70mm, 90mm',weight:'25 kgs (+/-3kgs)',polish:'Copper Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A16%20and%20Name%3A%20Grandeur%20Hatch'},

    { name: 'Grandeur Hatch', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Grandeur Hatch.png', alt:'Grandeur Hatch' ,Id:'344D15A16',image2:'../../assets/Grandeur Hatchs.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, PVC Fluted panel' ,accessories:'Heavey duty steel butt hinges, WPC handle',thickness:'50mm, 70mm, 90mm',weight:'23 kgs (+/-3kgs)',polish:'Fluted Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A17%20and%20Name%3A%20Dynemo'},

    { name: 'Dynemo', categories: ['All Category', 'single_door','designer_door','glass_door'], image: '../../assets/Dynemo.png', alt:'Dynemo' ,Id:'344D15A17',image2:'../../assets/Dynemos.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, Toughned glass, Laminate', type:'Main Door' ,accessories:'Heavy duty steel butt hinges, Door lock',thickness:'50mm, 70mm, 90mm',weight:'23 kgs (+/-3kgs)',polish:'Laminate Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A18%20and%20Name%3A%20Solstice%20Sway'},

    { name: 'Solstice Sway', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Solstice Sway.png', alt:'Solstice Sway' ,Id:'344D15A18',image2:'../../assets/Solstice Sways.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:' UPVC wood frame and base', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, Door lock, Stainless steel knobe',thickness:'50mm, 70mm, 90mm',weight:'24 kgs (+/-3kgs)',polish:'Paint Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A19%20and%20Name%3A%20Twilight%20Access'},

    { name: 'Twilight Access', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Twilight Access.png', alt:'Twilight Access' ,Id:'344D15A19',image2:'../../assets/Twilight Accesss.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, Laminate', type:'Main Door' ,accessories:'Heavey duty steel butt hinges, Door lock, Stainless steel handle grey coated',thickness:'50mm, 70mm, 90mm',weight:'22 kgs (+/-3kgs)',polish:'Laminate Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A19%20and%20Name%3A%20Twilight%20Access'},
    
    { name: 'Cascade Crest', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Cascade Crest.png', alt:'Cascade Crest' ,Id:'344D15A20',image2:'../../assets/Cascade Crests.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, Laminate, PVC Fluted panel', type:'Main Door' ,accessories:' Heavey duty steel butt hinges, Door lock, Stainless steel handle',thickness:'50mm, 70mm, 90mm',weight:'23 kgs (+/-3kgs)',polish:'Fluted Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A20%20and%20Name%3A%20Cascade%20Crest'},

    { name: 'Oasis Overture', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Oasis Overture.png', alt:'Oasis Overture' ,Id:'344D15A21',image2:'../../assets/Oasis Overtures.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:' WPC wood frame, UPVC base', type:'Main Door' ,accessories:' Heavy duty steel butt hinges, Door lock, Stainless steel knobe (gold)',thickness:'50mm, 70mm, 90mm',weight:'23 kgs (+/-3kgs)',polish:'Wooden Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A21%20and%20Name%3A%20Oasis%20Overture'},

    { name: 'Mirage Marvel', categories: ['All Category', 'single_door','designer_door'], image: '../../assets/Mirage Mrvel.png', alt:'Mirage Mrvel' ,Id:'344D15A22',image2:'../../assets/Mirage Mrvels.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, Laminate', type:'Main Door' ,accessories:' Heavy duty steel butt hinges, Door lock, Stainless steel handle (gold), peephole',thickness:'50mm, 70mm, 90mm',weight:'24 kgs (+/-3kgs)',polish:'Laminate Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A22%20and%20Name%3A%20Mirage%20Marvel'},

    { name: 'Celestial Charm ', categories: ['All Category','single_door','designer_door'], image: '../../assets/Celestial Charm.png', alt:'Celestial Charm' ,Id:'344D15A23',image2:'../../assets/Celestial Charms.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:'WPC wood frame and base, Laminate', type:'Main Door' ,accessories:'Heavy duty steel butt hinges, Door lock, Stainless steel handle (gold), peephole',thickness:'50mm, 70mm, 90mm',weight:'24 kgs (+/-3kgs)',polish:'Laminate Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A23%20and%20Name%3A%20Celestial%20Charm'},

    { name: 'Majestic', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Majestic.png', alt:'Majestic' ,Id:'344D15A24',image2:'../../assets/Majestics.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC wood frame and base, Laminate, Brass strips', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe and door lock',thickness:'50mm, 70mm, 90mm',weight:'38 kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A24%20and%20Name%3A%20Majestic'},

    { name: 'Gilded Gateway', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Gilded Gateway.png', alt:'Gilded Gateway' ,Id:'344D15A25',image2:'../../assets/Gilded Gateways.png' , size:'3 Feet x 7 feet and 3 feet x 8 feet',material:' WPC wood frame and base, Laminate', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Brass knobe, door lock',thickness:'50mm, 70mm, 90mm',weight:'40 kgs (+/-3kgs)',polish:'Paint Finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A25%20and%20Name%3A%20Gilded%20Gateway'},

    { name: 'Renaissance Portal', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Renaissance Portal.png', alt:'Renaissance Portal' ,Id:'344D15A26',image2:'../../assets/Renaissance Portals.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC wood frame, steel door', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Brass handle, door lock',thickness:'50mm, 70mm, 90mm',weight:'42 kgs (+/-3kgs)',polish:'Brass finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A26%20and%20Name%3A%20Renaissance%20Portal'},

    { name: 'Pinnacle Portal', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Pinnacle Portal.png', alt:'Pinnacle Portal' ,Id:'344D15A27',image2:'../../assets/Pinnacle Portals.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'UPVC black frame, steel door', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Brass handle, door lock',thickness:'50mm, 70mm, 90mm',weight:'45 kgs (+/-3kgs)',polish:'Brass finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A27%20and%20Name%3A%20Pinnacle%20Portal'},
    
    { name: 'Frontier Finesses', categories: ['All Category', 'double_door','designer_door','glass_door'], image: '../../assets/Frontier Finesses.png', alt:'Frontier Finesses' ,Id:'344D15A28',image2:'../../assets/Frontier Finessess.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC frame and base, Laminate, Frosted Glass', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Steel handle, door lock',thickness:'50mm, 70mm, 90mm',weight:'45kgs (+/-3kgs)',polish:'Laminate finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A29%20and%20Name%3A%20Opulent%20Ingress'},

    { name: 'Opulent Ingress', categories: ['All Category', 'motherson_door','glass_door'], image: '../../assets/Opulent Ingress.png', alt:'Opulent Ingress' ,Id:'344D15A29',image2:'../../assets/Opulent Ingresss.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet and 4 feet x 7',material:'Steel frame and base, Clear Glass', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe, door lock',thickness:'50mm, 70mm, 90mm',weight:'36 kgs (+/-3kgs)',polish:'Hot paint finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A30%20and%20Name%3A%20Modest%20Egress'},

    { name: 'Modest Egress', categories: ['All Category', 'motherson_door'], image: '../../assets/Modest Egress.png', alt:'Modest Egress' ,Id:'344D15A30',image2:'../../assets/Modest Egresss.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet and 4 feet x 7',material:'Steel frame and base', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe(gold), door lock',thickness:'50mm, 70mm, 90mm',weight:'36 kgs (+/-3kgs)',polish:'Hot paint finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A31%20and%20Name%3A%20Elysian%20Entrance'},

    { name: 'Elysian Entrance', categories: ['All Category', 'motherson_door'], image: '../../assets/Elysian Entrance.png', alt:'Elysian Entrance' ,Id:'344D15A31',image2:'../../assets/Elysian Entrances.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC wood frame, steel door', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Brass handle, door lock',thickness:'50mm, 70mm, 90mm',weight:'36 kgs (+/-3kgs)',polish:'Copper finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A31%20and%20Name%3A%20Elysian%20Entrance'},

    { name: 'Harmonic Haven', categories: ['All Category', 'motherson_door'], image: '../../assets/Harmonic Haven.png', alt:'Harmonic Haven' ,Id:'344D15A32',image2:'../../assets/Harmonic Havens.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC frame and Steel base', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe(silver), door lock',thickness:'50mm, 70mm, 90mm',weight:'35 kgs (+/-3kgs)',polish:'Hot paint finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A32%20and%20Name%3A%20Harmonic%20Haven'},

    { name: 'Minimalist Marvel', categories: ['All Category', 'motherson_door'], image: '../../assets/Minimalist Marvel.png', alt:'Minimalist Marvel' ,Id:'344D15A33',image2:'../../assets/Minimalist Marvels.png' , size:'5 Feet x 7 feet and 5 feet x 8 feet',material:'WPC frame and Nagpur Teak base', type:'Main Door' ,accessories:'Steel heavy duty butt hinges, Stainless steel knobe(silver), door lock',thickness:'50mm, 70mm, 90mm',weight:'38 kgs (+/-3kgs)',polish:'PU finish',walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15A33%20and%20Name%3A%20Minimalist%20Marvel'},
  ]

  

  selectedCategory = 'All Category';

  setCurrentCategory(category: string) {
    this.selectedCategory = category;
  }
  


  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  }

  ngOnInit(): void {
    // Initialize meta tags
    this.meta.addTags([
      { name: 'description', content:'Find the perfect main door for your home or project with our streamlined search engine. Discover trusted suppliers and manufacturers offering a variety of designs, materials, and finishes to suit your needs and style preferences. Simplify your search and enhance your entryway effortlessly' },
      { name: 'keywords', content:'fire retardant doors,buy fire retardant Door online india,fire retardant doors manufacturers,fire retardant wooden doors,fire retardant doors price in india,wooden doors,door manufacturers,luxury doors,decorative doors price in india,leading door producer in india,decorative door manufacturers,readymade doors,flush doors,luxury flush doors in india,buy flush doors online india,routed door panels,door panels price,hmr routed panel doors,hmf panel doors manufacturers,hdf doors,decorative hdf doors price,laminated doors,laminated flush doors price in india,laminated doors manufacturers,decorative moulded panel doors,veneer flush doors,veneer flush doors price,buy moulded panel doors online,moulded veneer panel manufacturers,luxury interior products,door frames,door frame manufacturers,luxury laminates,blockboard price in india,natural wood veneer,blockboards,masonite door skins,calibrated plywoods,decorative veneer sheets,door-frame manufacturers,luxury laminates manufacturers,complete door solution,laminated flush doors,flush door manufacturers,hdf door manufacturers,designer laminated doors,residential decorative moulded panel doors,readymade moulded panel doors,moulded panel doors,moulded veneer panel doors,veneer moulded panel door manufacturers,designer calibrated plywoods,laminates sheets manufacturers,abrasion resistant laminates,readymade door manufacturers in india,blockboard manufacturers in india,decorative venner in india,high pressure decorative laminates india,buy blockboards at best price india,luxury doors manufacturers india,buy luxury doors online india,decorative doors at best price india,top quality hdf doors in india,buy decorative hdf door online india,laminated door manufacturers in india,laminated door price in india,blockboards in india,veneer flush door manufacturers india,buy moulded panel doors online india,veneer moulded panel door at best price india,calibrated plywoods price in india,best quality plywood in india,ecofriendly blockboards in india,buy ecofriendly blockboards online india,buy decorative laminates online india,quality laminates at best price india,natural veneer manufacturers in india,wood veneer at best price in india,wooden door frame price in india,calibrated plywood in india,luxury doors in india,masonite door skin in india,laminated flush doors in india,flush door manufacturers in india,designer laminated doors in india,readymade moulded panel doors in india,veneer flush doors in india,moulded panel doors in india,moulded veneer panel doors in india,veneer moulded panel door manufacturers in india,designer calibrated plywood in india'}
      // Add more meta tags as needed
    ]);
    this.setTitle('Samurai Doors : Door Manufacturer and Supplier in India');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  }


