import { AppSidebar } from '@/Components/AppSidebar';
import HeaderText from '@/Components/HeaderText';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/Components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/Components/ui/sidebar';

interface Props {
    header: string;
    children: React.ReactNode;
}

export default function SidebarLayout({ header, children }: Props) {
    const location = window.location.href;
    const pathname = location
        .replace('http://127.0.0.1:8000', '')
        .split('/')
        .filter(Boolean);
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="relative">
                <header className="fixed flex h-16 w-full shrink-0 items-center gap-2 border-b bg-white px-4">
                    <SidebarTrigger className="-ml-1" />
                    <HeaderText text={header}></HeaderText>
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    {pathname.length > 0 && (
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                {pathname.map((path, index) => (
                                    <BreadcrumbItem key={index}>
                                        <BreadcrumbLink href={`/${path}`}>
                                            {path.slice(0, 1).toUpperCase() +
                                                path.slice(1)}
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator className="hidden md:block" />
                                    </BreadcrumbItem>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    )}
                </header>
                <div className="mt-16 flex flex-1 flex-col gap-4 p-4">
                    <div className="h-full rounded-lg bg-gray-100 dark:bg-gray-900">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
