import { Border, Select, Spacing, Text } from 'mainlib/components';

export default function Models({
  model,
  models,
  onFormChange,
}: {
  model: ChatModelKeys | CompleteModelsKeys;
  models: ChatModelKeys[] | CompleteModelsKeys[];
  onFormChange: (e: any) => void;
}) {
  return (
    <div className="pr-4">
      <Spacing size={8} />
      <Text typography="T5">Model</Text>
      <Spacing size={8} />
      <Select name="model" onChange={onFormChange} value={model}>
        {models.map((m, i) => (
          <option value={m} key={`MODEL-${i}`}>
            {m}
          </option>
        ))}
      </Select>
    </div>
  );
}
