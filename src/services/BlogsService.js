import { Blog } from "@/models/Blogs.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { AppState } from "@/AppState.js"

class BlogsService {
  async getAllBlogs() {
    const response = await api.get('api/blogs')
    logger.log('Got blogs - blogsService', response.data)
    const newBlogs = response.data.map(blogPOJO => new Blog(blogPOJO))
    AppState.blogs = newBlogs
  }

}

export const blogsService = new BlogsService