export interface Props extends React.SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: string | number;
  className?: string;
}

const SvgIcon = ({ icon: Icon, size, className, ...restProps }: Props) => {
  return <Icon style={{ width: size, height: 'auto' }} className={className} {...restProps} />;
};

export default SvgIcon;
