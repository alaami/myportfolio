import { Component, OnInit } from '@angular/core';
import {ArticleResponse} from '../../interfaces/articleresponse';
import {ArticleService} from '../../services/article/article.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  //@Input() article: ArticleResponse;
  article: ArticleResponse;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  getArticle(){
    const link = this.route.snapshot.paramMap.get('link');
    this.articleService.getArticle(link)
      .subscribe((data:ArticleResponse) => {
        this.article = data;
        console.log(this.article);
      });
      
  }
  ngOnInit(): void {
    this.getArticle();
    
  }
 

}