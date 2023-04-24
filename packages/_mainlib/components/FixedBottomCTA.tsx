import { ComponentProps, ComponentType } from 'react';
import Button from '../components/Button';

type TypeAProps = ComponentProps<typeof Button>;
function TypeA(props: TypeAProps) {
  return (
    <>
      <div className="h-[74px]" />
      <div className="fixed left-0 bottom-0 w-full">
        <div className="pt-0 pb-[18px] px-5 bg-white">
          <Button {...props} />
        </div>
      </div>
    </>
  );
}

type TypeBProps = {
  leftButton: React.ReactNode;
  rightButton: React.ReactNode;
};
function TypeB({ leftButton, rightButton }: TypeBProps) {
  return (
    <>
      <div className="fixed left-0 bottom-0 w-full">
        <div className="flex pt-0 pb-[18px] px-5 space-x-3">
          {leftButton}
          {rightButton}
        </div>
      </div>
    </>
  );
}

const FixedBottomCTA = TypeA as ComponentType<TypeAProps> & {
  TypeB: ComponentType<TypeBProps>;
};
FixedBottomCTA.TypeB = TypeB;

export default FixedBottomCTA;
