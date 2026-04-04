import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Msg2({
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
          d="m9.1875,1.502c-1.9824-.0537-3.8535.7026-5.3003,2.1143-1.5171,1.4805-2.3872,3.5483-2.3872,5.6729v4.9609c0,1.2407,1.0078,2.25,2.2471,2.25h4.4766c2.4365,0,4.6426-.8862,6.2129-2.4951,1.377-1.4111,2.1089-3.2554,2.0615-5.1929-.0991-4.0005-3.3101-7.2114-7.3105-7.3101Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Msg2;
