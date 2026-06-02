import './Initiatives.css'
import { ClickablePhoto } from '@/components/PhotoLightbox/PhotoLightbox'
import { initiatives } from '@/data/initiativesData'

function InitiativeMediaItem({ item }) {
  if (item.type === 'video') {
    return (
      <div className="initiative-media__item initiative-media__item--video">
        <video
          src={item.src}
          controls
          preload="metadata"
          className="initiative-media__video"
          aria-label={item.alt}
        />
      </div>
    )
  }

  return (
    <ClickablePhoto
      src={item.src}
      alt={item.alt}
      className="initiative-media__item"
      imageClassName="initiative-media__image"
    />
  )
}

export default function Initiatives() {
  return (
    <div className="initiatives-page">
      <div className="initiatives-page__container">
        <h1 className="initiatives-page__heading">Initiatives &amp; Activities</h1>

        <p className="initiatives-page__lead">
          I like making initiatives to expand my students&apos; learning capacity. Here are some
          of the programmes I have organised to take science beyond the classroom and connect
          it to the world students see every day.
        </p>

        <div className="initiatives-list">
          {initiatives.map((initiative) => (
            <article
              key={initiative.id}
              className="initiative"
              aria-labelledby={`${initiative.id}-heading`}
            >
              <h2 id={`${initiative.id}-heading`} className="initiative__title">
                {initiative.title}
              </h2>

              {initiative.body.map((paragraph, index) => (
                <p key={index} className="initiative__body">
                  {paragraph}
                </p>
              ))}

              {initiative.poster ? (
                <div className="initiative-gallery initiative-gallery--poster">
                  <figure className="initiative-poster">
                    <img
                      src={initiative.poster.src}
                      alt={initiative.poster.alt}
                      className="initiative-poster__image"
                      loading="lazy"
                    />
                  </figure>

                  <div className="initiative-gallery__side">
                    {initiative.media
                      .filter((item) => item.type !== 'video')
                      .map((item) => (
                        <InitiativeMediaItem key={item.src} item={item} />
                      ))}
                  </div>

                  {initiative.media
                    .filter((item) => item.type === 'video')
                    .map((item) => (
                      <InitiativeMediaItem key={item.src} item={item} />
                    ))}
                </div>
              ) : (
                <div className="initiative-media">
                  {initiative.media.map((item) => (
                    <InitiativeMediaItem key={item.src} item={item} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
