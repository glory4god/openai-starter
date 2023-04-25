import { Border, RangeInput, Spacing, Text } from 'mainlib/components';

export default function TopP({
  topP,
  onFormChange,
}: {
  topP: number;
  onFormChange: (e: any) => void;
}) {
  return (
    <div className="pr-4">
      <Spacing size={8} />
      <Text typography="T5">Top P</Text>
      <Spacing size={8} />
      {topP}
      <Spacing size={4} />
      <RangeInput
        name="top-p"
        type="range"
        value={topP}
        onChange={onFormChange}
        max={1}
        min={0}
        step={0.01}
      />
    </div>
  );
}
