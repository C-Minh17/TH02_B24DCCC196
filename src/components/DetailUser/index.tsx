import { useEffect, useState } from "react"
import { getUserId } from "../../utils/axios"
import { Link, useNavigate, useParams } from "react-router-dom"

const DetailUser = () => {
  const [data, setData] = useState<any>()
  const param = useParams().id
  const navigate = useNavigate()


  useEffect(() => {
    getUserId(param).then(res => setData(res.data))
  }, [])

  console.log(data)
  return (
    <div>
      <h1>Chi tiết sinh viên</h1>
      <p>Name:{data?.name}</p>
      <p>Email:{data?.email}</p>
      <p>Phone:{data?.phone}</p>
      <p>Web:{data?.website}</p>
      <Link to={""} onClick={() => navigate(-1)}>quan lại</Link>
    </div>
  )
}

export default DetailUser