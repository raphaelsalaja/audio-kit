import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pointer({
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
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M15.154,6.253L3.731,2.079h0c-.477-.175-.994-.058-1.353,.3-.357,.358-.473,.876-.298,1.352L6.254,15.154c.188,.517,.66,.846,1.208,.846,.009,0,.019,0,.027,0,.559-.011,1.03-.362,1.2-.895l1.556-4.86,4.859-1.555c.532-.17,.884-.642,.896-1.201,.011-.559-.321-1.044-.846-1.236Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pointer;
