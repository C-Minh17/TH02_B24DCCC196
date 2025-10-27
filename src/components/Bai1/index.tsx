import { useEffect, useState } from "react"
import { getThoiTiet } from "../../utils/axios"

const Bai1 = () => {
  const [data, setData] = useState<any>()
  const [dataInput, setDataInput] = useState<string>("")
  const [isXem, setIsXem] = useState<boolean>(false)
  const [isLoading, setloading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const xemThoiTiet = async () => {
    if (dataInput.trim()) {
      setIsXem(false)
      setIsError(false)
      setloading(true)
      try {
        const res = await getThoiTiet(dataInput)
        setData(res.data)
        setIsXem(true)
      } catch (error) {
        console.error("Lỗi khi gọi API thời tiết:", error)
        setIsError(true)
      } finally {
        setloading(false)
      }
    }
  }

  return (
    <div style={{
      background: '#fff',
      borderRadius: '8px',
      boxShadow: ' 0 2px 6px #0000000f',
      margin: '20px auto',
      maxWidth: '980px',
      padding: '20px',
    }}>
      <h1>Thời tiết</h1>
      <div>
        <input
          style={{
            marginRight: "5px",
            padding: "5px"
          }}
          onChange={(e: any) => setDataInput(e.target.value)}
          placeholder="Nhập tên thành phố ....."
        />
        <button style={{ padding: "5px 10px" }} onClick={xemThoiTiet}>xem</button>
      </div>
      <div>
        {isXem ?
          <>
            <h2>Nhiệt độ : {data?.current_condition[0]?.temp_C}°C.</h2>
            <p>{data?.current_condition[0]?.weatherDesc[0]?.value}</p>
          </> :
          <></>
        }
      </div>
      <div>
        {isLoading ? <div> Đang tải ....</div>
          : <></>}
      </div>
      <div>
        {isError ? <div> Vui lòng nhập lại khu vực hợp lệ</div>
          : <></>}
      </div>
    </div>
  )
}

export default Bai1