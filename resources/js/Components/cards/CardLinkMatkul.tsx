import ListPertemuan from '../ListPertemuan';

export default function CardLinkMatkul() {
    return (
        <div className="h-full w-full rounded-lg">
            <div className="grid h-full w-full items-center space-y-5">
                <div className="grid space-y-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ListPertemuan index={index} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
