import { RangeInput, Spacing, Text } from 'mainlib/components';

export default function FrequencyPenalty({
  frequencyPenalty,
  onFormChange,
}: {
  frequencyPenalty: number;
  onFormChange: (e: any) => void;
}) {
  return (
    <div className="pr-4">
      <Spacing size={8} />
      <Text typography="T5">Frequency Penalty</Text>
      <Spacing size={8} />
      {frequencyPenalty}
      <Spacing size={4} />
      <RangeInput
        name="frequency_penalty"
        type="range"
        value={frequencyPenalty}
        onChange={onFormChange}
        max={2}
        min={0}
        step={0.01}
      />
    </div>
  );
}
