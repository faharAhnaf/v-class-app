export default function Card({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8">
            <section className={className}>{children}</section>
        </div>
    );
}
