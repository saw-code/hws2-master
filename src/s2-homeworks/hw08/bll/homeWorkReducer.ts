import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      let sortUp = [...state].sort((a, b) => a.name.localeCompare(b.name))
      let sortDown = [...state].sort((a, b) => b.name.localeCompare(a.name))

      return action.payload === "up"
        ? sortUp : action.payload === 'down'
          ? sortDown : state
    }
    case 'check': {
      let copyState = [...state]
      return copyState.filter(el => el.age > action.payload) // need to fix
    }
    default:
      return state
  }
}
