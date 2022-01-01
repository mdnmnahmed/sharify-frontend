import DropZone from "@components/DropZone";
import { useState } from "react";

export default function Home() {

    const [file, setFile] = useState(null);

    return (
        <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="my-4 text-3xl font-medium">Sharify</h1>
                    <div className="flex flex-col items-center justify-center pb-10 bg-gray-800 shadow-xl w-96 rounded-xl">
                        <DropZone setFile={setFile} />

                        {file?.name}
                    </div>
                </div>
            </div>
        </div>
    );
}
