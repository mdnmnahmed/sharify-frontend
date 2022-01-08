import FileDetails from '@components/FileDetails';
import axios from 'axios';
import { NextPage } from 'next';

const DownloadPage: NextPage<{ file: any }> = ({ file }) => {

    const fileDownload = (fileUrl, fileName) => {
        try {
            axios({
                url: fileUrl,
                method: 'GET',
                responseType: 'blob'
            })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', fileName);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
        } catch (error) {
            alert("Failed to Download File, Try again later.. & Report the Issue")
        }
    }

    return (
        <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
            <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96">
                {
                    !file._id
                        ? <h3>Opps! File does not exists.</h3>
                        : <>
                            <img
                                src="../images/file-download.png"
                                className="w-16 h-16"
                            />
                            <h2 className="text-xl ">File is Ready to Download</h2>
                            <FileDetails file={{
                                name: file.fileName,
                                size: file.size,
                                format: file.format
                            }} />
                            <button
                                className="button focus:outline-none"
                                onClick={() => fileDownload(file.url, file.fileName)}
                            >Download File</button>
                        </>
                }
            </div>
        </div>
    )
}

export default DownloadPage;

export async function getServerSideProps(context: any) {
    const { fileLink } = context.query;
    let file = {};
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/files/${fileLink}`);
        file = data.file;
    } catch (error) {
        console.log(error.response.data);
    }

    return {
        props: {
            file
        }
    }
}