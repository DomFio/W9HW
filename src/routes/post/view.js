const axios = require('axios')

module.exports = async (req, res) => {
    const id = req.params.id
    let postData = {}

    const query = `
        query postByid($id: String!) { 
            postByid( id: $id ) {
                id,
                twatPost,
                user
                }
            }
        }`

    try {
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT, 
            { 
                query,
                variables: {
                    id
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });   
            
        postData = data.data.postById

        console.log(postData)

        postData = postData.data.data.postid.sort((a,b) => a-b)

        console.log(postData)
        res.render('post', { user: req.verifiedUser.user, post: postData });
    } catch(e) {
        console.log(e)
        res.redirect('/')
    }   

}