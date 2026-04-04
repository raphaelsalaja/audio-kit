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
          d="m9.1689,2.2521c-3.8388-.0943-6.9189,3.1969-6.9189,7.0368v4.9611c0,.8284.6688,1.5,1.4973,1.5h4.4762c4.328,0,7.619-3.0805,7.5245-6.9194-.0885-3.5936-2.9854-6.4902-6.579-6.5785Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9.1689,2.2521c-3.8388-.0943-6.9189,3.1969-6.9189,7.0368v4.9611c0,.8284.6688,1.5,1.4973,1.5h4.4762c4.328,0,7.619-3.0805,7.5245-6.9194-.0885-3.5936-2.9854-6.4902-6.579-6.5785Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Msg2;
