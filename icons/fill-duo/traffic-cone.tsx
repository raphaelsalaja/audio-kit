import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TrafficCone({
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
          d="M6.8228 3.27772C7.03469 2.52123 7.72437 2 8.50801 2H9.49101C10.2754 2 10.9643 2.52294 11.1761 3.27728L14.4712 15.0478C14.5345 15.2738 14.4884 15.5163 14.3466 15.7032C14.2048 15.8902 13.9836 16 13.749 16H4.25001C4.01537 16 3.79425 15.8902 3.65245 15.7032C3.51065 15.5163 3.46452 15.2738 3.52777 15.0478L6.8228 3.27772Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.66095 11L5.78075 7H12.2183L13.3381 11H4.66095Z"
          fill={fill}
        />
        <path
          d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TrafficCone;
