export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petAllowed: boolean
  organizer: string
}

export interface Student {
  id: number
  name: string
  surname: string
  gpa: number
}

export interface MessageState {
  message: String
}

export interface EventState {
  event: Event | null
}

export interface StudentState {
  student: Student | null
}
