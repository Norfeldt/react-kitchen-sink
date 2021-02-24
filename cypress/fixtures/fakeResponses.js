import faker from 'faker'

const photosResponse = (numberOfPhotos = 10) => ({
  photos: {
    photo: [...new Array(numberOfPhotos)].map(() => ({
      id: 1,
      secret: faker.random.uuid(),
      server: faker.random.number(999),
      farm: faker.random.number(999),
      title: faker.company.catchPhrase(),
    })),
  },
})

export { photosResponse }
