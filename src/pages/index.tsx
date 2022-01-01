import DropZone from "@components/DropZone";

export default function Home() {
    return (
        <div className="h-screen font-serif bg-gray-900 text-white grid place-items-center">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="my-4 text-3xl font-medium">Sharefy</h1>
                    <div className="flex flex-col items-center w-96 bg-gray-800 shadow-xl justify-center rounded-xl">
                        <DropZone />
                    </div>
                </div>
            </div>
        </div>
    );
}
