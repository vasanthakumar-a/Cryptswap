import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'daeqv237',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skc8mcf146DNyOWDf4e42fNd0mwqubrQIhTiSarSuqikzMimH1nwIN1YhXRYDWdtB7kumHCO3teoyZmRZUSuWOFyu4va7XznQFeBcUiAX8VdY7bXNrIe0oHcVlflTvrEAGx6ccSDwgai8myRperwi1gWhDss6gSYb13FV0W6XEEIjHHmm09f',
  useCdn: false,
})
