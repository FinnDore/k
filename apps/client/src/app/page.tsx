'use client';

import type { NextPage } from 'next';

import { MacTrafficLights } from '~/components/traffic-lights';

// import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR =

// export default () => <DynamicComponentWithNoSSR />
const Home: NextPage = () => {
    return (
        <div className="flex h-screen w-screen rounded-lg border border-white/25 bg-black">
            <div className="w-screen ps-2 pt-2" data-tauri-drag-region>
                <MacTrafficLights />
            </div>
        </div>
    );
};

export default Home;
