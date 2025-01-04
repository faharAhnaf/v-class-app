import { Link as LinkIcon } from 'lucide-react';

// import { useKategori } from '@/stores/kategori-store';
import { Link } from '@inertiajs/react';

export default function ListPertemuan({ index }: { index: number }) {
    const kategori = window.location.pathname.split('/')[1];

    return (
        <div className="w-1/2 rounded-lg bg-gray-200 hover:bg-gray-300">
            <Link
                href={route(`${kategori}.show`, {
                    pertemuan: index + 1,
                })}
                className="flex h-full w-full cursor-pointer gap-5 p-4"
            >
                <LinkIcon></LinkIcon>
                <p className="text-lg font-semibold">Pertemuan {index + 1}</p>
            </Link>
        </div>
    );
}
