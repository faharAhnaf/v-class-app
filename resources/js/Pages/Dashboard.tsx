import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <SidebarLayout header="Dashboard">
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <Head title="Dashboard" />
                <main>
                    <div className="py-12">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                                <div className="p-6 text-gray-900 dark:text-gray-100">
                                    You're logged in!
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </SidebarLayout>
    );
}
