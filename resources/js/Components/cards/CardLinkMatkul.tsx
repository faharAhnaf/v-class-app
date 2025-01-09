import ErrorMessage from '../ErrorMessage';
import ListPertemuan from '../ListPertemuan';
import Card from './Card';

export default function CardLinkMatkul() {
    const data = Array.from({ length: 5 });
    return (
        <Card>
            <div className="grid space-y-5">
                {data.length > 0 ? (
                    data.map((_, index) => (
                        <ListPertemuan index={index} key={index} />
                    ))
                ) : (
                    <ErrorMessage message="Tidak ada pertemuan" />
                )}
            </div>
        </Card>
    );
}
