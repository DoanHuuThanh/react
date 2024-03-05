interface ButtonProps  {
  onClick : ()=>void;
  children: React.ReactNode
}

interface ToolbarProps {
    onPlayMovie: ()=>void;
    onUploadImage: ()=>void
}

function Button({onClick, children}: ButtonProps) {
    return (
         <>
            <button onClick={onClick}>
                 {children}
            </button>
         </>
    )
} 


function ToolBar({onPlayMovie, onUploadImage}: ToolbarProps) {
   return (
    <>
    <Button onClick={onPlayMovie}>
         play movie
     </Button>
     <Button onClick={onUploadImage}>
         upload image
     </Button>
    </>
   )

}

export default function Run() {
    return (
        <ToolBar onPlayMovie={()=> {alert("Play football")}}
                 onUploadImage={()=> {alert("Upload image")}} />
    )
}