import Link from 'next/link';

export default function Contact(){
    return(
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h1>Contact Us</h1>
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to My Website</h1>
                <p className="text-xl text-gray-600 mb-8">A place where I share my thoughts, learnings, and projects</p>

                <div className="space-x-4">
                    <Link
                    href="mailto:example@abc.org"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                    Send us Email
                    </Link>
                    <Link
                    href="tel:+91-8989xxxx"
                    className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                    Conatct Us
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
}