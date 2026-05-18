import React from 'react';

const CurrentFocus = () => {
    return (
        <section className="py-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">My current focus</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base leading-relaxed pl-2">
                <li>
                    Blockchain research and development across multiple chains — including L2 rollup testnets,
                    Arbitrum Orbit chains, and Solana&apos;s high-performance architecture. Some of my research:{' '}
                    <a href="https://hackmd.io/@Jethrolopwus/S1mKsYW61g" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">L2 Rollup Testnet</a>
                    {' · '}
                    <a href="https://hackmd.io/@Jethrolopwus/SyrhQ-0Gee" className="text-blue-700 underline hover:text-blue-900">Arbitrum Orbit Chain</a>
                    {' · '}
                    <a href="https://hackmd.io/@Jethrolopwus/SJqTnkGIbg" className="text-blue-700 underline hover:text-blue-900">How Solana Processes Faster at Low Fees</a>
                    {' · '}
                    <a href="https://hackmd.io/@Jethrolopwus/rkhtrK3qJx" className="text-blue-700 underline hover:text-blue-900">Uniswapv2 FE</a>
                    {' · '}
                    <a href="https://hackmd.io/@Jethrolopwus/SJNUcVxYke" className="text-blue-700 underline hover:text-blue-900">Data Ingestion Layer in a Blockchain Indexer</a>
                </li>
                <li>Mentoring aspiring software engineers across Africa</li>
                <li>Learning and experimenting with AI-powered product features</li>
                <li>Growing my entrepreneurial ventures in the tech ecosystem</li>
                <li>Deep collaboration with fellow developers and sharing knowledge within the community</li>
            </ul>
        </section>
    );
};

export default CurrentFocus;
