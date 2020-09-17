import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  posts:any[];
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get<Post[]>(this.url).subscribe(response => {
      this.posts =  response;
    })
  }
  createPost(input:HTMLInputElement) {
    let post = {title: input.value}
    input.value = '';
    this.http.post(this.url,JSON.stringify(post)).subscribe((response:Post) => {
      post['id'] = response.id
      this.posts.splice(0, 0, post);
      console.log(response)
    })
  }
  updatePost(post) {
    this.http.patch(this.url + '/' + post.id,JSON.stringify(post))
    .subscribe(response => {
      console.log(response)
    })
  }
  deletePost(post) {
    this.http.delete(this.url+ '/' +post.id).subscribe(response => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    })
  }
}

export class Post {
    id:         number;
    userId:     number;
    title:      string;
    body:       string;
}