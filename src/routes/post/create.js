const axios = require('axios')
const e = require('express')

module.exports = async (req, res) => {
    const postInputs = req.body
    
    const postData = {
        userId: req.verifiedUser.user._id,
        twatPost: postInputs['posttwatPost'],
        // description: postInputs['postDescription'],
    }

    const mutation = `
        mutation createPost($userId: String!, $twatPost: String!) { 
            createPost( userId: $userId, twatPost: $twatPost )
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
        console.log(postData)
    } catch(e) {
        console.log(e)
    }   

    res.redirect(`/`)
}