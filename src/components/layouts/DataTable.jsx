import ContentFrame from '../chrome/ContentFrame'

export default function DataTable({
  eyebrow,
  title,
  columns = [],
  rows = [],
  note,
  accent = 'blue',
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center gap-[16px]">
        <table className="w-full border-collapse overflow-hidden rounded-lg text-[18px]">
          <thead>
            <tr className="bg-rff-navy text-white">
              {columns.map((col, i) => (
                <th key={i} className="px-[20px] py-[12px] text-left font-bold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 6).map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rff-light'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-[20px] py-[12px] text-rff-body/90">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {note && <p className="text-[16px] text-rff-body/60">{note}</p>}
      </div>
    </ContentFrame>
  )
}
