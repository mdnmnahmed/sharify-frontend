import React from 'react'

const DownloadFile = ({ downloadPageLink }) => {
    return (
        <div className="p-1 pt-5">
            <h2 className="my-2 text-lg font-medium">File Uploaded Successfully</h2>
            <div className="flex space-x-3">
                <span className="break-all">{downloadPageLink}</span>
                <img src="../images/copy.png"
                    className="w-8 h-8 object-contain cursor-pointer"
                    onClick={() => navigator.clipboard.writeText(downloadPageLink)}
                />
            </div>
        </div>
    )
}

export default DownloadFile;