import { RangeInput, Spacing, Text } from 'mainlib/components';

export default function PresencePenalty({
  presencePenalty,
  onFormChange,
}: {
  presencePenalty: number;
  onFormChange: (e: any) => void;
}) {
  return (
    <div className="pr-4">
      <Spacing size={8} />
      <Text typography="T5">Presence Penalty</Text>
      <Spacing size={8} />
      {presencePenalty}
      <Spacing size={4} />
      <RangeInput
        name="presence_penalty"
        type="range"
        value={presencePenalty}
        onChange={onFormChange}
        max={2}
        min={0}
        step={0.01}
      />
    </div>
  );
}
