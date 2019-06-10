import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article/article.service'
import {ArticleResponse} from '../../interfaces/articleresponse';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  articles: any;
  strapiurl;
  constructor(private articleService: ArticleService) {
    this.strapiurl=environment.strapiServerUrl;
   }
 
  showConfig() {
    this.articleService.getArticles()
      .subscribe(
        (data:ArticleResponse) =>
        {
          this.articles=data;
        },
        err => {
          console.log("Error occured.")
        }
        );
  }
  
  ngOnInit() {
    this.showConfig();
  }
 
}
