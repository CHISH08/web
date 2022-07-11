class PostsController {
    async createPosts(req, res) {
        const {title, tag, body, name, password, likeArray, likeCounter} = req.body
        console.log(title, tag, body, name, password, likeArray, likeCounter)
        res.json("ok")
    }
    async getPosts(req, res) {

    }
    async getOnePost(req, res) {

    }
    async updateOnePost(req, res) {

    }
    async deleteOnePost(req, res) {

    }
}

module.exports = new PostsController()