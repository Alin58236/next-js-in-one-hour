export default function layout({children}: {children: React.ReactNode}) {

    return (

        
        <div>
            {children}
            <h2>featured products section {"<-"} this works only by defining a layout.tsx file</h2>
        </div>

    )

    
};
