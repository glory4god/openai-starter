import { Border, RangeInput, Spacing, Text } from 'mainlib/components';

export default function MaxTokens({
  maxTokens,
  onFormChange,
}: {
  maxTokens: number;
  onFormChange: (e: any) => void;
}) {
  return (
    <div className="pr-4">
      <Spacing size={8} />
      <Text typography="T5">Max-Tokens</Text>
      <Spacing size={8} />
      {maxTokens}
      <Spacing size={4} />
      <RangeInput
        name="max_tokens"
        type="range"
        value={maxTokens}
        onChange={onFormChange}
        max={4000}
        min={0}
      />
    </div>
  );
}
