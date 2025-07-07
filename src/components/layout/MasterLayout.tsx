interface Props {
    children?: React.ReactNode;
}

export default async function MasterLayout({ children }: Props) {
    return (
        <>
            <div className="w-full h-full bg-primary ">
                {children}
            </div>
            {/* <div className="w-full h-[100dvh] is-rotate landscape items-center justify-center flex-col">
                <div className="mt-12 md:mt-14 lg:mt-16 w-full h-full overflow-auto font-moul">
                    ដដដ
                </div>
            </div> */}
        </>
    );
}