import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'About Edgar';
  onChangeText(){
    this.text = 'Edgar was a stray cat and adopted by my family. When I once spotted him in our garage, he was still a newly weaned kitten. He consistently visits me and my pet Eggnog. Since Edgar is so nice, I decided to adopt him.';
  }

  onOriginalText(){
    this.text = 'Edgars cutest characteristic is being clingy and affectionate. He likes long pet time on his neck and cheeks. He loves to cuddle, play and even share food with my other cat Eggnog. His favorite time of the day is morning because he likes the feeling of being warmth by sunlight.';
  }



}
