import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="bg-auth-bg-pattern flex min-h-screen flex-col items-center bg-gray-100 bg-cover pt-6 dark:bg-gray-900 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-gray-800 sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
