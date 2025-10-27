import { useEffect, useState } from "react"
import { getNew } from "../../utils/axios"
import { Link } from "react-router-dom"

const Bai3 = () => {
  const [data, setData] = useState<any[]>()

  const convertDate = (data: string, timeZone = 'Asia/Ho_Chi_Minh') => {
    const date = new Date(data);
    return date.toLocaleDateString('vi-VN', { timeZone });
  }

  useEffect(() => {
    getNew().then(res => setData(res.data.results))
  }, [])

  return (
    <div>
      <h1>Tin tức</h1>
      {data?.map(item => (
        <div style={{ margin: '30px 0' }} key={item.id}>
          <div style={{
            width: "400px"
          }}>
            < img width={"100%"} src={item.image_url} /></div>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <Link to={item.url}>Đọc thêm tại đây</Link>
          <p>Ngày đăng: {convertDate(item.published_at)}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default Bai3