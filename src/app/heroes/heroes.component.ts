// AngularコアライブラリからComponentシンボルをインポートし、コンポーネントクラスに@Componentで注釈を付ける
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// @Componentは、コンポーネントのAngularメタデータを指定するデコレータ関数
@Component({
  selector: 'app-heroes', // コンポーネントのCSS要素セレクター, 親コンポーネントのテンプレート内でこのコンポーネントを識別するHTML要素の名前と一致
  templateUrl: './heroes.component.html', // コンポーネントのテンプレートファイルの場所
  styleUrls: ['./heroes.component.css'] // コンポーネントのプライベートCSSスタイルの場所
})
export class HeroesComponent implements OnInit {
  // Hero型のheroプロパティ
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  // Angularは、コンポーネントの作成直後にngOnInit()を呼び出す。ライフサイクルフック。初期化ロジックを置くのに適している
  ngOnInit(): void {
  }

}
