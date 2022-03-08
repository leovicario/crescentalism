import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: "t8emmum8",
    dataset: "production",
    apiVersion: '2022-03-08',
    useCdn: true
})