import React from 'react'
import { getFileSizeInMB } from 'utils/fileSize';
import { IFile } from 'utils/interfaces';


const FileDetails: React.FC<{ file: IFile }> = ({ file: { format, size, name } }) => {
    return (
        <div className="flex items-center w-full px-4 ">
            <img src={`../images/${format}.png`} alt="thumbnail" className="w-14 h-14" />
            <div>
                <span className="mx-2">{name}</span> <br />
                <span className="mx-2">{getFileSizeInMB(size)}</span>
            </div>
        </div>
    )
}

export default FileDetails;