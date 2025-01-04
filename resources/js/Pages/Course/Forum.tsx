import CardLinkMatkul from '@/Components/cards/CardLinkMatkul';
import CardMatkul from '@/Components/cards/CardMatkul';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Forum() {
    return (
        <SidebarLayout header="Forum">
            <Head title="Forum"></Head>
            <main className="container">
                <CardMatkul>Interaksi Manusia & Komputer</CardMatkul>
                <CardLinkMatkul></CardLinkMatkul>
            </main>
        </SidebarLayout>
    );
}
