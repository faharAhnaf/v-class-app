import CardLinkMatkul from '@/Components/cards/CardLinkMatkul';
import CardMatkul from '@/Components/cards/CardMatkul';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Tugas() {
    return (
        <SidebarLayout header="Tugas">
            <Head title="Tugas"></Head>
            <main className="container">
                <CardMatkul>Interaksi Manusia & Komputer</CardMatkul>
                <CardLinkMatkul></CardLinkMatkul>
            </main>
        </SidebarLayout>
    );
}
