import ContentFrame from '../chrome/ContentFrame'

export default function PresentersSlide({ eyebrow, title, presenters = [], accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="grid h-full grid-cols-3 gap-[28px]">
        {presenters.map((p, i) => (
          <div key={i} className="flex flex-col items-center gap-[12px] rounded-lg bg-white p-[24px] text-center shadow-sm">
            {p.headshot ? (
              <img
                src={p.headshot}
                alt={p.name}
                className="h-[120px] w-[120px] rounded-full object-cover"
              />
            ) : (
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-rff-light text-[30px] font-bold text-rff-navy">
                {p.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}
            <p className="text-[20px] font-bold text-rff-navy">{p.name}</p>
            <p className="text-[16px] font-bold text-rff-blue">{p.role}</p>
            <p className="text-[16px] text-rff-body/80">{p.bio}</p>
          </div>
        ))}
      </div>
    </ContentFrame>
  )
}
