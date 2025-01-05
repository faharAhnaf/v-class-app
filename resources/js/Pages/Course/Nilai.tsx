import CardMatkul from '@/Components/cards/CardMatkul';
import { TableNilai } from '@/Components/tables/TableNilai';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Nilai() {
    return (
        <SidebarLayout header="Forum">
            <Head title="Forum"></Head>
            <main className="container">
                <CardMatkul>Interaksi Manusia & Komputer</CardMatkul>
                <TableNilai></TableNilai>
            </main>
        </SidebarLayout>
    );
}
