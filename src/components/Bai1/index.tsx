import { useEffect, useState } from "react"
import { getThoiTiet } from "../../utils/axios"

const Bai1 = () => {
  const [data, setData] = useState<any>()
  const [dataInput, setDataInput] = useState<string>("")
  const [isXem, setIsXem] = useState<boolean>(false)

  const xemThoiTiet = async () => {
    await getThoiTiet(dataInput).then(res => setData(res.data))
    setIsXem(true)
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
          onChange={(e: any) => setDataInput(e.target.value)}
          placeholder="Nhập tên thành phố ....."
        />
        <button onClick={xemThoiTiet}>xem</button>
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
    </div>
  )
}

export default Bai1