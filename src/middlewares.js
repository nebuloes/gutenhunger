import { save } from './services'

export const saveToLocalStorage = store => next => action => {
  let result = next(action)
  save('app', store.getState())
  return result
}
