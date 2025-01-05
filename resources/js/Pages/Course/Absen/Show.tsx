import AbsenGuruSection from '@/Components/absen/AbsenGuruSection';
import CardMatkul from '@/Components/cards/CardMatkul';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Show({ pertemuan }: { pertemuan: number }) {
    const role = 'guru';
    return (
        <SidebarLayout header="Absensi">
            <Head title="Absensi"></Head>
            <main className="container">
                <CardMatkul>{`Pertemuan ${pertemuan}`}</CardMatkul>
                {role === 'guru' && <AbsenGuruSection />}
                {/* {role === 'siswa' && <AbsenSiswaSection />} */}
            </main>
        </SidebarLayout>
    );
}
