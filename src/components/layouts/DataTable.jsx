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
      <div className="absolute" style={{ left: 106, top: 288, width: 1707 }}>
        <table className="w-full border-collapse text-[33px]">
          <thead>
            <tr className="bg-rff-navy text-white">
              {columns.map((col, i) => (
                <th key={i} className="border border-rff-gray-line px-[28px] py-[20px] text-left font-bold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 6).map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rff-light'}>
                {row.map((cell, j) => (
                  <td key={j} className="border border-rff-gray-line px-[28px] py-[20px] text-rff-body">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {note && <p className="mt-[20px] text-[29px] text-rff-muted">{note}</p>}
      </div>
    </ContentFrame>
  )
}
