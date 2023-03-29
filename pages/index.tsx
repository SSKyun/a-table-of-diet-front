import { useState } from "react"
import axios from "axios";

const SERVER_URL = "http://localhost:8000";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event : any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      console.log("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileUpload}></input>
      <button onClick={handleUpload}>업로드</button>
    </>
  )
}