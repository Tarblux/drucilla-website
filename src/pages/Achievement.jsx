import './Achievement.css'
import { ClickablePhoto } from '@/components/PhotoLightbox/PhotoLightbox'
import { achievementMedia } from '@/data/achievementMedia'

function AchievementMediaItem({ item }) {
  if (item.type === 'video') {
    return (
      <div className="achievement-media__item achievement-media__item--video">
        <video
          src={item.src}
          controls
          preload="metadata"
          className="achievement-media__video"
          aria-label={item.alt}
        />
      </div>
    )
  }

  return (
    <ClickablePhoto
      src={item.src}
      alt={item.alt}
      className="achievement-media__item"
      imageClassName="achievement-media__image"
    />
  )
}

export default function Achievement() {
  return (
    <div className="achievement-page">
      <div className="achievement-page__container">
        <h1 className="achievement-page__heading">Student Achievement</h1>

        <p className="achievement-page__lead">
          My students consistently impress me with their curiosity, creativity, and commitment
          to learning. Whether they are building original STEM projects, working through complex
          lab investigations, or earning recognition for their house and their school, they show
          that science is something they can own, not just study. Their growth is the real
          measure of what happens in my classroom.
        </p>

        <p className="achievement-page__segue">
          The photos and videos below capture some of their projects, awards, and classroom
          highlights.
        </p>

        <div className="achievement-media">
          {achievementMedia.map((item) => (
            <AchievementMediaItem key={item.src} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
