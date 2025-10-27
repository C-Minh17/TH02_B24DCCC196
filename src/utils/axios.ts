// const url_bai1 = 

import axios from "axios"

export const getThoiTiet = async (data: string) => {
  const res = await axios.get(`https://wttr.in/${data}?format=j1`)
  return res
}

export const getUser = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  return res
}

export const getUserId = async (id: any) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return res
}


export const getNew = async () => {
  const res = await axios.get(" https://api.spaceflightnewsapi.net/v4/articles?limit=10")
  return res
}