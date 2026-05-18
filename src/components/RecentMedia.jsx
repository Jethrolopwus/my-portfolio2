import React from 'react';

const mediaItems = [
    { title: 'Spotlight Interview at Web3 Bootcamp — Blockfuse Labs', date: '2024', href: '#' },
    { title: 'Jos Prodfest — Website Team', date: '2025', href: '#' },
    { title: 'Bluehouse Technologies — Training Manager', date: '2023', href: '#' },
    { title: 'JosTechFest 2024 — Organizers Section', date: '2024', href: '#' },
];

const RecentMedia = () => {
    return (
        <section className="py-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Some recent media:</h2>
            <div className="space-y-3">
                {mediaItems.map((item, index) => (
                    <div key={index}>
                        <a href={item.href} className="text-blue-700 underline hover:text-blue-900 text-base">
                            {item.title}
                        </a>
                        <span className="text-gray-600 text-sm ml-2">— {item.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentMedia;
