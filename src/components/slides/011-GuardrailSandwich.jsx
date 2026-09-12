import ProcessFlow from '../layouts/ProcessFlow'

export default function GuardrailSandwich({ slideNumber }) {
  return (
    <ProcessFlow
      eyebrow="The Guardrail Sandwich"
      title="Put the probabilistic part in the middle"
      accent="gold"
      slideNumber={slideNumber}
      steps={[
        { title: 'Gather', description: 'Deterministic: pull the ticket, the tenant, the history' },
        { title: 'Validate', description: 'Deterministic: check the inputs are complete and allowed' },
        { title: 'Draft', description: 'Probabilistic: classify, summarize, write the first version' },
        { title: 'Check', description: 'Deterministic: shape, policy, approval' },
        { title: 'Log', description: 'Deterministic: write the record, notify' },
      ]}
      closing="The AI never touches the customer or the system of record unguarded."
    />
  )
}
