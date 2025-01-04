import CardMatkul from '@/Components/cards/CardMatkul';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Show({ pertemuan }: { pertemuan: number }) {
    return (
        <SidebarLayout header="Tugas">
            <Head title="Tugas"></Head>
            <main className="container">
                <CardMatkul>{`Pertemuan ${pertemuan}`}</CardMatkul>
            </main>
        </SidebarLayout>
    );
}
