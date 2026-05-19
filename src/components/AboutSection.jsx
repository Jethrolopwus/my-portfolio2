import React from 'react';
import Image from 'next/image';
import finejay from '@/images/finejay.jpeg';
import { FaLinkedin } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const AboutSection = () => {
  return (
    <section id="about" className="py-6">

      {/* About me */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-blue-700 mb-4">About me:</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="space-y-3 text-gray-800 text-base leading-relaxed flex-1">
            <p>
              It gives me joy to go deep into a protocol, a codebase, or a conversation with
              another builder on the same journey of growth and discovery.
            </p>
            <p>
              I am a software engineer and multichain blockchain researcher. My work spans Ethereum
              Layer 2 solutions like Optimism rollups and Arbitrum Orbit chains, to understanding
              high-performance chains like Solana at a cryptographic and architectural level. I care
              about how blockchains actually work under the hood; consensus mechanisms, data
              availability, sequencing, and the design tradeoffs that shape entire ecosystems.
            </p>
            <p>
              Living with curiosity and intentionality, I ask the &quot;why&quot; behind every line of code
              and every protocol design decision I encounter.
            </p>
            <p>
              Compassion for the human experience within tech because behind every product and
              every protocol is a team of real people trying to build something better.
            </p>
            <p>Some observations about my core values:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                Deep curiosity is my greatest asset. Assumptions are starting points, not
                conclusions; I let data, research, and feedback shape my thinking.
              </li>
              <li>
                Code is a communication tool. Writing readable, maintainable code is as important
                as writing code that works.
              </li>
              <li>
                Multichain is the future. I believe the next generation of the internet will not be
                built on one chain; and I am actively researching and building across that frontier.
              </li>
              <li>
                Growth happens at the edges of comfort. I actively seek challenges that stretch my
                understanding of blockchain infrastructure, software engineering, and people.
              </li>
              <li>
                Community amplifies everything. Mentorship, open knowledge-sharing, and collaboration
                across Africa&apos;s developer ecosystem are engines of progress I believe in deeply.
              </li>
              <li>
                Purpose-driven work is sustainable. I build and research things I believe will
                genuinely move people forward; not simply to ship or to impress.
              </li>
            </ul>
          </div>
          {/* Photo beside About me text */}
          <div className="flex-shrink-0 sm:w-52 md:w-1/2">
            <Image
              src={finejay}
              alt="Jethro Lopwus"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/* Quick snapshot */}
      <div>
        <h2 className="text-xl font-bold text-blue-700 mb-6">A quick snapshot</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800 text-base leading-relaxed pl-2">
          <li>
            Software engineer and multichain blockchain researcher — currently exploring L2
            rollups, Arbitrum Orbit chains, and Solana&apos;s Proof of History architecture.
          </li>
          <li>
            Frontend engineering background in React and Next.js; now building deeper into
            blockchain infrastructure and decentralised systems.
          </li>
          <li>
            Graduate of Code Plateau and Bluehouse Technologies and Blockfuse Labs, two of Nigeria&apos;s leading
            developer training programmes.
          </li>
          <li>
            Speaker and community builder: JosTechFest 2024, Cyfrin bootcamp cohorts, and
            local developer meet-ups in Jos, Nigeria.
          </li>
          <li>
            Holds a BSc. in Chemistry from Plateau State University; proof that great engineers
            come from unexpected backgrounds.
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="mt-10 space-y-2">
        <p className="text-base font-bold text-blue-700">Contact me:</p>
        <div className="flex items-center gap-2 text-base">
          <MdEmail className="text-blue-700 text-xl flex-shrink-0" />
          <a href="mailto:lopwusjethro92@gmail.com" className="text-blue-700 underline hover:text-blue-900">
            lopwusjethro92@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-base">
          <FaXTwitter className="text-gray-900 text-lg flex-shrink-0" />
          <a href="https://x.com/Jethrosmitt" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            x.com/Jethrosmitt
          </a>
        </div>
        <div className="flex items-center gap-2 text-base">
          <FaLinkedin className="text-blue-600 text-xl flex-shrink-0" />
          <a href="https://www.linkedin.com/in/jethro-lopwus-4b3285197/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            linkedin.com/in/jethro-lopwus
          </a>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;