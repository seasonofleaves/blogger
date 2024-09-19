import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"

class BlogsService {
  async getAllBlogs() {
    const response = await api.get('api/blogs')
    logger.log('Got blogs - blogsService', response.data)
  }

}

export const blogsService = new BlogsService