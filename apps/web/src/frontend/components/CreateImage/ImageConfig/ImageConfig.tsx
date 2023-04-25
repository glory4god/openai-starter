import { RangeInput, Select, Spacing, Text } from 'mainlib/components';

import { OpenAiImageSize } from '@/frontend/constants/openai';

export default function ImageConfig({
  imageInit,
  onFormChange,
}: {
  imageInit: CreateImageInit;
  onFormChange: (e: any) => void;
}) {
  return (
    <>
      <div className="pr-4">
        <Spacing size={8} />
        <Text typography="T5">Size</Text>
        <Spacing size={8} />
        <Select name="size" onChange={onFormChange} value={imageInit.size}>
          {OpenAiImageSize.map((m, i) => (
            <option value={m} key={`Size-${i}`}>
              {m}
            </option>
          ))}
        </Select>
      </div>
      <div className="pr-4">
        <Spacing size={8} />
        <Text typography="T5">N</Text>
        <Spacing size={8} />
        {imageInit.n}
        <Spacing size={4} />
        <RangeInput
          name="n"
          type="range"
          value={imageInit.n}
          onChange={onFormChange}
          max={10}
          min={1}
        />
      </div>
    </>
  );
}
