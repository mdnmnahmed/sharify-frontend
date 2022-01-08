import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface IDropZone {
    setFile: React.Dispatch<any>
}

const DropZone: React.FC<IDropZone> = ({ setFile }) => {

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, [])

    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        multiple: false,
        accept: "image/jpeg, image/png, audio/mpeg",
    });

    return (
        <div className="w-full p-4">
            <div {...getRootProps()} className="w-full rounded-md cursor-pointer h-80 focus:outline-none">
                <input {...getInputProps()} />
                <div className={`flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-xl ${isDragReject ? 'border-red-500' : ''} ${isDragAccept ? 'border-green-500' : ''}`}>
                    <img
                        src='../images/folder.png'
                        alt="folder sharify"
                        className="w-16 h-16"
                    />

                    {
                        isDragReject
                            ? <p>Sorry, Only supports Image and Media Files</p>
                            : <>
                                <p>Drop your file here</p>
                                <p className="mt-2 text-base text-gray-300">Only Image & Media Files</p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default DropZone;