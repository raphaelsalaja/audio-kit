import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pyramid({
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
          d="M7.5977 1.7021L1.73981 9.5405C1.16851 10.3061 1.32431 11.3984 2.08701 11.9746L7.94341 16.3965C8.25491 16.6314 8.6275 16.749 9 16.749V1C8.4424 1 7.9312 1.2559 7.5977 1.7021Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.9131 11.9746C16.6758 11.3984 16.8316 10.3061 16.2598 9.54001L10.4024 1.70211C10.4024 1.70211 10.4039 1.70161 10.4034 1.70111C10.0699 1.25531 9.55871 0.999908 9.00061 0.999908L9.00012 16.7489C9.37272 16.7489 9.74572 16.6312 10.0563 16.3964L15.9131 11.9746Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pyramid;
