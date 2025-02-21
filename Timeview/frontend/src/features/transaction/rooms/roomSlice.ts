export const ROOMS = [
  {
    id: 'small',
    rooms: [
      {
        id: 'room1',
        title: 'room1',
        capacity: 'static 25 for now',
        image: 'assets/assets/chas-academy-logo.png',
      },
      {
        id: 'room2',
        title: 'room2',
        capacity: 'static 25 for now',
        image: 'assets/assets/chas-academy-logo.png',
      },
      {
        id: 'room3',
        title: 'room3',
        capacity: 'static 25 for now',
        image: 'assets/assets/chas-academy-logo.png',
      },
    ],
  },
  {
    id: 'big',
    rooms: [
      {
        id: 'room4',
        title: 'room4',
        capacity: 'static 25 for now',
        image: 'assets/assets/chas-academy-logo.png',
      },
      {
        id: 'room5',
        title: 'room5',
        capacity: 'static 25 for now',
        image: 'assets/assets/chas-academy-logo.png',
      },
      {
        id: 'room6',
        title: 'room6',
        capacity: 'static 25 for now',
        image: 'assets/assets/chas-academy-logo.png',
      },
    ],
  },
]

export type RoomType = {
  id: string
  title: string
  capacity: string
  image: string
}

export type GroupedRooms = { id: string; rooms: RoomType[] }[]

export type GroupedRoomResponse = { contextWithStaticData: GroupedRooms }
