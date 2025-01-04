import HeaderOne from '../headers/HeaderOne';

export default function CardMatkul({ children }: { children: string }) {
    return (
        <div className="bg-matkul-bg-pattern h-36 w-full rounded-lg bg-gray-400 bg-cover">
            <div className="mx-5 flex h-full w-full items-center">
                <HeaderOne>{children}</HeaderOne>
            </div>
        </div>
    );
}
