import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-draw-lots',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './draw-lots.component.html',
  styleUrl: './draw-lots.component.scss'
})
export class DrawLotsComponent implements OnInit {

  showResult: boolean = false;

  foodList = [
    '義大利麵',
    '炒飯',
    '燴飯',
    '河粉',
    '酸辣粉',
    '螺獅粉',
    '烏龍麵',
    '肉羹麵',
    '滷味',
    '火鍋',
    '麵線',
    '炒麵',
    '拉麵',
    '粥',
    '鍋貼',
    '水餃',
    '泡麵',
    '麥當勞',
    '牛肉麵',
    '咖哩飯',
    '蔥抓餅',
    '臭豆腐',
    '蛋煎',
    '披薩',
    // '粄條',
    '潤餅',
    '炒米粉',
    '鹽酥雞',
    '鹽水雞',
    '雞肉飯',
    '壽司'
  ]

  foodName: string = ''

  ngOnInit(): void {
    setTimeout(() => {
      this.showResult = true;
    }, 3500);

    const random = Math.floor(Math.random() * this.foodList.length);
    this.foodName = this.foodList[random];
  }

  reDraw(): void {
    location.reload();
  }

}
