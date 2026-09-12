import Cover from '../components/slides/001-Cover.jsx'
import Agenda from '../components/slides/002-Agenda.jsx'
import SectionDividerPeople from '../components/slides/003-SectionDividerPeople.jsx'
import TwoColumn from '../components/slides/004-TwoColumn.jsx'
import ThreeUpGrid from '../components/slides/005-ThreeUpGrid.jsx'
import LabeledRows from '../components/slides/006-LabeledRows.jsx'
import StatCallout from '../components/slides/007-StatCallout.jsx'
import Break from '../components/slides/008-Break.jsx'
import SectionDividerMargin from '../components/slides/009-SectionDividerMargin.jsx'
import Comparison from '../components/slides/010-Comparison.jsx'
import ProcessFlow from '../components/slides/011-ProcessFlow.jsx'
import DataTable from '../components/slides/012-DataTable.jsx'
import Chart from '../components/slides/013-Chart.jsx'
import PullStatement from '../components/slides/014-PullStatement.jsx'
import PillarGrid from '../components/slides/015-PillarGrid.jsx'
import Presenters from '../components/slides/016-Presenters.jsx'
import Closing from '../components/slides/017-Closing.jsx'

// Ordered slide registry. Each slide component owns its own content
// (see AGENTS.md); this file only wires order, identity, and notes.
export const slides = [
  { id: 'cover', component: Cover, notesKey: 'cover' },
  { id: 'agenda', component: Agenda, notesKey: 'agenda' },
  { id: 'section-people', component: SectionDividerPeople, notesKey: 'section-people' },
  { id: 'two-column', component: TwoColumn, notesKey: 'two-column' },
  { id: 'three-up', component: ThreeUpGrid, notesKey: 'three-up' },
  { id: 'labeled-rows', component: LabeledRows, notesKey: 'labeled-rows' },
  { id: 'stat-callout', component: StatCallout, notesKey: 'stat-callout' },
  { id: 'break', component: Break, notesKey: 'break' },
  { id: 'section-margin', component: SectionDividerMargin, notesKey: 'section-margin' },
  { id: 'comparison', component: Comparison, notesKey: 'comparison' },
  { id: 'process-flow', component: ProcessFlow, notesKey: 'process-flow' },
  { id: 'data-table', component: DataTable, notesKey: 'data-table' },
  { id: 'chart', component: Chart, notesKey: 'chart' },
  { id: 'pull-statement', component: PullStatement, notesKey: 'pull-statement' },
  { id: 'pillar-grid', component: PillarGrid, notesKey: 'pillar-grid' },
  { id: 'presenters', component: Presenters, notesKey: 'presenters' },
  { id: 'closing', component: Closing, notesKey: 'closing' },
]
