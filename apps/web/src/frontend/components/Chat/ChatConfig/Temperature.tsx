import { RangeInput, Spacing, Text } from 'mainlib/components';

export default function Temperature({
  temperature,
  onFormChange,
}: {
  temperature: number;
  onFormChange: (e: any) => void;
}) {
  return (
    <div className="pr-4">
      <Spacing size={8} />
      <Text typography="T5">Temperature</Text>
      <Spacing size={8} />
      {temperature}
      <Spacing size={4} />
      <RangeInput
        name="temperature"
        type="range"
        value={temperature}
        onChange={onFormChange}
        max={1}
        min={0}
        step={0.01}
      />
    </div>
  );
}
