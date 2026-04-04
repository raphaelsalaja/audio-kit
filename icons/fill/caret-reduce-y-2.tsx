import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceY2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m9.047,10.398l-2.248-2.983c-.375-.5-1.223-.5-1.598,0l-2.248,2.983c-.23.305-.267.707-.097,1.048s.513.554.895.554h4.498c.382,0,.725-.212.895-.554s.134-.743-.097-1.048Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.144.554c-.17-.342-.513-.554-.895-.554H3.751c-.382,0-.725.212-.895.554s-.134.743.097,1.048l2.248,2.983c.188.25.486.399.799.399s.611-.149.798-.398l2.249-2.984c.23-.305.267-.707.097-1.048Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CaretReduceY2;
