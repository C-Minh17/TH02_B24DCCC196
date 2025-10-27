import { useEffect, useState } from "react"
import { getUser } from "../../utils/axios"
import { Link } from "react-router-dom"

const Bai2 = () => {
  const [data, setData] = useState<any[]>()

  useEffect(() => {
    getUser().then(res => setData(res.data))
  }, [])

  console.log(data)
  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <ul>
        {data?.map(item => (
          <li key={item.id}>
            <Link to={`/bai2/${item.id}`}>Name: {item.name}</Link>
            <div>Email: {item.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bai2