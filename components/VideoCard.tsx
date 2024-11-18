
interface VideoCardProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function VideoCard({ videoSrc, posterSrc, title, isPlaying, onPlay }: VideoCardProps) {
  return (
    <div className="relative w-full aspect-video">
      {isPlaying ? (
        <iframe 
          className="w-full h-full" 
          src={videoSrc} 
          title={title} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
      ) : (
        <div 
          className="relative w-full h-full cursor-pointer group"
          onClick={onPlay}
        >
          <img 
            src={posterSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/youtubePlay.svg" 
              alt="Play video"
              width={60}
              height={60}
              className="opacity-90"
            />
          </div>
        </div>
      )}
    </div>
  );
} 