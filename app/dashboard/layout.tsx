import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    // return (
    //     <>
    //         <svg width="0" height="0">
    //             <filter id="grainy" x="0" y="0" width="100%" height="100%">
    //                 <feTurbulence
    //                     type="fractalNoise"
    //                     baseFrequency="0.8"
    //                     numOctaves="4"
    //                     result="noise"
    //                 />
    //                 <feColorMatrix type="saturate" values="0.5"/>
    //                 <feBlend in="SourceGraphic" in2="noise" mode="multiply"/>
    //             </filter>
    //         </svg>
    //         <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-sandstone"
    //              style={{
    //
    //                  filter: 'url(#grainy)',
    //              }}>
    //             <div className="w-full flex-none md:w-64">
    //                 <SideNav/>
    //             </div>
    //             <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    //         </div>
    //     </>
    // );

    return (


            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden "
                 >
                <div className="w-full flex-none md:w-64">
                    <SideNav/>
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>

    );
}