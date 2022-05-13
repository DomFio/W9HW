const axios = require('axios')
const e = require('express')

module.exports = async (req, res) => {
    const postInputs = req.body
    
    const postData = {
        userId: req.verifiedUser.user._id,
        title: postInputs['postTitle'],
        description: postInputs['postDescription'],
    }

    

    const mutation = `
        mutation createPost($userId: String!, $title: String!) { 
            createPost( userId: $userId, title: $title, description: $description )
        }`

    try {
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT, 
            { 
                query: mutation,
                variables: postData
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });   
        console.log(data)
    } catch(e) {
        console.log(e)
    }   

    res.redirect(`/posts/success/${post}`)
}