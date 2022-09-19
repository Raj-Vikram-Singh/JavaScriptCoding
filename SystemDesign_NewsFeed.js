1) Component Architecture: {
  Feed component => Parent
  individual components
  header => author => avatar,
  name,
  time
  Content => media / text
  like => [likedUser]
  comment
  share

}

====================

2) Data Model {
  feed {
    id: number,
    date: number,
    author: Author {},
    comment: Comment[],
    content: String,
    media: Media[]

  }
  Author {
    authorId,
    name
  }
  Media {
    type: img | video,
    url
  }
  Comment {
    id: number,
    text: 'string',
    author: Author {},
    time: number,
    content: string,
    media: Media[]
  }
}

====================

3) APIs: {
  GET feed data(userId, ): {
    getFeedData: {
      pageNo.,
      totalPages,
      data: []
    }
    get Comment Data(feedId) {
      comment: Commnet[]
      id: number
    }
  }

  POST: {
    addComment: {
      content: string,
      media: Media[],
      parentId: number,
    }

    like / dislike: {
      like: boolean,
      feedId: number,
      userId: number,
    },
  }
}

====================

4) Pagination {
  Virtual Scroll,
  infinite scroll
}

====================

5) Data refresh: {
  long polling,
  web sockets,
  Server Sent Events: Preferred in this
  case.
}

====================

6) Optimization: {
  infiniteScroll,
  SSE,
  Img type and size,
  PWA,
  caching,
}

