export default function userProfile({params}:any){
    return (
        <div>
            <h1>Profile</h1>
            <p className="text-4xl "> profile Page
                
                <span className="text-orange-400 font-bold ml-3 bg-neutral-600 rounded p-2">{params.id}</span> </p>


        </div>
    )
}