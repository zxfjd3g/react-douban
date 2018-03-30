## 技术栈
    react + react-router + redux + material-ui + axios

## 后台接口
    列表:
      https://api.douban.com/v2/movie/in_theaters (正在热映列表)
      https://api.douban.com/v2/movie/coming_soon (正在上映列表)
    搜索电影列表:
      https://api.douban.com/v2/movie/search?q=天    (根据关键字搜索)
      https://api.douban.com/v2/movie/search?tag=喜剧 (根据标签分类搜索)
    查看电影: 
      https://api.douban.com/v2/movie/subject/:id   (3793023)
    
    搜索音乐列表: 
      https://api.douban.com/v2/music/search?tag=民谣
    查看音乐: 
      https://api.douban.com/v2/music/:id  (2995812)
    
    搜索图书列表: 
      https://api.douban.com/v2/book/search?tag=javascript
    查看图书: 
      https://api.douban.com/v2/book/:id  (6038371)

## 2个新的库
    1. material-ui: 基于react的UI组件库
    2. redux-actions: 用于简化action定义的redux插件