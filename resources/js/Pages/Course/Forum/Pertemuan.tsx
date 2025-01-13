import CardHeaderMatkul from '@/Components/cards/CardHeaderMatkul';
import CardLinkMatkul from '@/Components/cards/CardLinkMatkul';
import ErrorMessage from '@/Components/ErrorMessage';
import ListPertemuan from '@/Components/ListPertemuan';
import { Button } from '@/components/ui/button';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Matkul } from '@/model/Matkul';
import { PertemuanModel } from '@/model/Pertemuan';
import { Inertia } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/react';

export default function Pertemuan({
    pertemuan,
    matkul,
}: {
    pertemuan: PertemuanModel[];
    matkul: Matkul;
}) {
    const user = usePage().props.auth.user;
    console.log(pertemuan);
    return (
        <SidebarLayout title="Pertemuan">
            <Head title="Pertemuan"></Head>
            <main className="container">
                <CardHeaderMatkul data={matkul} />
                <CardLinkMatkul>
                    {pertemuan.length > 0 ? (
                        pertemuan.map((data, index) => (
                            <ListPertemuan data={data} key={index} />
                        ))
                    ) : (
                        <ErrorMessage message="Tidak ada pertemuan" />
                    )}
                </CardLinkMatkul>
                {user.role === 'guru' && (
                    <Button
                        onClick={() => {
                            Inertia.visit(
                                route('pertemuan.index', {
                                    matkulId: matkul.id,
                                }),
                                {
                                    replace: true,
                                },
                            );
                        }}
                    >
                        buat pertemuan
                    </Button>
                )}
            </main>
        </SidebarLayout>
    );
}
