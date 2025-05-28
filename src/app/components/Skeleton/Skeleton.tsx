import './Skeleton.css'


export default function Skeleton() {
    return (
        <section className="w-full flex justify-center">
            <div className="skeleton-wrapper w-full max-w-[1440px]">

                {

                   [...Array(25).keys()].map(key => 
                        <div className="skeleton-row">
                            <div className="skeleton-cell"><div className="skeleton-data"></div></div>
                            <div className="skeleton-cell"><div className="skeleton-data"></div></div>
                            <div className="skeleton-cell"><div className="skeleton-data"></div></div>
                            <div className="skeleton-cell"><div className="skeleton-data"></div></div>
                            <div className="skeleton-cell"><div className="skeleton-data"></div></div>
                            <div className="skeleton-cell"><div className="skeleton-data"></div></div>
                        </div>

                   )
                    
                }

            </div>

        </section>
    )
}