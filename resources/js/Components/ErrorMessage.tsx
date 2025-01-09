export default function ErrorMessage({ message }: { message: string }) {
    return (
        <div className="rounded-lg bg-gray-200">
            <div className="flex h-full w-full cursor-pointer gap-5 p-4">
                <p className="text-3xl font-black">{message.toUpperCase()}</p>
            </div>
        </div>
    );
}
