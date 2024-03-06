import { useState, useEffect, useRef } from "react";

interface PropsComponent {
    src: string;
    isPlaying: boolean;
}

function VideoPlayer({ src, isPlaying }: PropsComponent) {
    const ref = useRef<HTMLVideoElement>(null); // Chỉ định kiểu cho useRef

    useEffect(() => {
        if (ref.current) {
            if (isPlaying) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        }
    }, [isPlaying]); 

    return <video ref={ref} src={src} loop playsInline />;
}

function RunVideo() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <>
          <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying? 'Pause' : 'Play'}
          </button>
          <VideoPlayer isPlaying={isPlaying} 
                       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
        </>
    )
}

export default RunVideo