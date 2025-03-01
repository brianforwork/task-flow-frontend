import axios from 'axios'
import { API_ROOT } from '~/utils/contanst'

export const fetchBoardDetailsAPI = async (boardId) => {
  const respone = await axios.get(`${API_ROOT}/v1/board/${boardId}`)
  return respone.data
}

export const createNewColumnAPI = async (newColumnData) => {
  const respone = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)
  return respone.data
}

export const createNewCardAPI = async (newCardData) => {
  const respone = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return respone.data
}