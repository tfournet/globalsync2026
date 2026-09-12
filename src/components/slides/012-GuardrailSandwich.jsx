import ProcessFlow from '../layouts/ProcessFlow'

export default function GuardrailSandwich({ slideNumber }) {
  return (
    <ProcessFlow
      eyebrow="The Guardrail Sandwich"
      title="Put the probabilistic part in the middle"
      accent="gold"
      slideNumber={slideNumber}
      steps={[
        { title: 'Gather', description: 'Ticket, tenant, history' },
        { title: 'Validate', description: 'Complete and allowed' },
        { title: 'Draft', description: 'Classify, summarize, write' },
        { title: 'Check', description: 'Shape, policy, approval' },
        { title: 'Log', description: 'Record and notify' },
      ]}
      closing="The AI never touches the customer or the record unguarded."
    />
  )
}
