import DropZone from "@components/DropZone";
import FileDetails from "@components/FileDetails";
import { useState } from "react";
import axios from "axios";
import DownloadFile from "@components/DownloadFile";

export default function Home() {

    const [file, setFile] = useState(null);
    const [id, setId] = useState(null);
    const [downloadPageLink, setDownloadPageLink] = useState(null);
    const [isFileUploading, setIsFileUploading] = useState(false);

    const fileUploadHandler = async () => {
        const formData = new FormData();
        formData.append("fileData", file);
        try {
            setIsFileUploading(true);

            const { data } = await axios({
                method: 'post',
                data: formData,
                url: `${process.env.NEXT_PUBLIC_BASE_URL}api/files/upload`,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });

            console.log('data: ', data);

            setDownloadPageLink(data.fileUploadedData.downloadPageLink);
            setId(data.fileUploadedData.id);
        } catch (error) {
            console.log(error.response.data);
            alert('Failed to upload File, please try again..');
        } finally {
            setIsFileUploading(false);
        }
    }

    const newUploadReadyHandler = () => {
        setFile(null);
        setDownloadPageLink(null);
        setId(null);
    }

    return (
        <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="my-4 text-3xl font-medium">Sharify</h1>
                    <div className="flex flex-col items-center justify-center px-3 py-10 bg-gray-800 shadow-xl w-96 rounded-xl">

                        {!downloadPageLink && <DropZone setFile={setFile} />}

                        {
                            file && (
                                <FileDetails file={{
                                    name: file.name,
                                    size: file.size,
                                    format: file.type.split('/')[1]
                                }} />
                            )
                        }

                        {!downloadPageLink && file && <div className="pt-4">
                            <button
                                className="w-full p-2 mx-3 mt-6 bg-pink-800 rounded-md focus:outline-none"
                                onClick={fileUploadHandler}
                            >
                                {isFileUploading ? "Uploading.." : "Upload"}
                            </button>
                        </div>}

                        {downloadPageLink && (
                            <div>
                                <DownloadFile downloadPageLink={downloadPageLink} />

                                <div className="flex justify-around">
                                    <button
                                        onClick={newUploadReadyHandler}
                                        className="p-2 mx-3 mt-6 bg-gray-900 rounded-md focus:outline-none"
                                    >New Upload</button>
                                </div>

                                {/* Email Form Here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
