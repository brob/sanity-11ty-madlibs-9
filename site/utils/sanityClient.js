const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'hc696mcn',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

