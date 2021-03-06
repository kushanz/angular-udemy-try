import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PostService {
private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

allPosts() {
  return this.http.get<Post[]>(this.url)
}
createPost(post:any) {
  return this.http.post(this.url,JSON.stringify(post))
}
updatePost(post:Post) {
  return this.http.patch(this.url + '/' + post.id,JSON.stringify(post))
}
deletePost(postId) {
  return this.http.delete(this.url+ '/' + postId)
}

}

export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}