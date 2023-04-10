import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./VideoUploadPage.css";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

interface VideoFormData {
  title: string;
  description: string;
  videoFile: File | null;
  posterFile: File | null;
}

const notify = () =>
  toast.success("Uploaded Successfully..", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
const notifyError = () =>
  toast.error("Choose A Unique Name..", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const VideoUploadPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<VideoFormData>({
    title: "",
    description: "",
    videoFile: null,
    posterFile: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFormData((prevFormData) => ({ ...prevFormData, videoFile: files[0] }));
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        posterFile: files[0],
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData();
    if (formData.videoFile && formData.posterFile) {
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("videoFile", formData.videoFile);
      data.append("posterFile", formData.posterFile);
    }
    await axios.post("http://localhost:3000/upload", data).then((res) => {
      if (res.data == "200") {
        navigate("/");
      }
    });
  };

  return (
    <div className="page-container">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-header">Upload a Video</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="video-file">Video File</label>
          <input
            type="file"
            accept="video/*"
            className="video-file"
            id="video-file"
            name="video"
            onChange={handleVideoChange}
            required
          />

          <label htmlFor="video-file">Poster File</label>
          <input
            type="file"
            accept="image/*"
            className="video-file"
            id="video-file"
            name="posterFile"
            onChange={handleImageChange}
            required
          />
        </div>
        {/* {videoUrl && <video height={200} controls src={videoUrl} />} */}
        {/* <img src={posterUrl} height={50}></img> */}
        <button type="submit" className="submit-button">
          Upload
        </button>
      </form>
    </div>
  );
};

export default VideoUploadPage;
