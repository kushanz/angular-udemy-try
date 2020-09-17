import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  posts:any[];
  

  constructor(private service: PostService) {

  }
  ngOnInit() {
    this.service.allPosts().subscribe(response => {
      this.posts =  response;
    })
  }
  createPost(input:HTMLInputElement) {
    let post = {title: input.value}
    input.value = '';
    this.service.createPost(post).subscribe((response) => {
      post['id'] = response.id
      this.posts.splice(0, 0, post);
      console.log(response)
    })
  }
  updatePost(post) {
    this.service.updatePost().subscribe(response => {
      console.log(response)
    })
  }
  deletePost(post) {
    this.service.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    })
  }
}
export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}