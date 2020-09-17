import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

allPosts() {
  return this.http.get<Post[]>(this.url)
}
createPost(post:Post) {
  return this.http.post(this.url,JSON.stringify(post))
}
updatePost(post:Post) {
  this.http.patch(this.url + '/' + post.id,JSON.stringify(post))
}
deletePost(post: Post) {
  this.http.delete(this.url+ '/' +post.id)
}

}

export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}