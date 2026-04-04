import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LetterSpacing({
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
          d="M8.72701 4C8.41746 4 8.13971 4.19018 8.02777 4.47878L4.73077 12.9788C4.58098 13.365 4.77261 13.7994 5.15879 13.9492C5.54497 14.099 5.97946 13.9074 6.12925 13.5212L6.91325 11.5H11.0868L11.8708 13.5212C12.0206 13.9074 12.4551 14.099 12.8412 13.9492C13.2274 13.7994 13.4191 13.365 13.2693 12.9788L9.97225 4.47878C9.86031 4.19018 9.58256 4 9.27301 4H8.72701ZM10.505 10L9.00001 6.12011L7.49507 10H10.505Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.75 2C16.1642 2 16.5 2.33579 16.5 2.75V15.25C16.5 15.6642 16.1642 16 15.75 16C15.3358 16 15 15.6642 15 15.25V2.75C15 2.33579 15.3358 2 15.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 2C2.66421 2 3 2.33579 3 2.75V15.25C3 15.6642 2.66421 16 2.25 16C1.83579 16 1.5 15.6642 1.5 15.25V2.75C1.5 2.33579 1.83579 2 2.25 2Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LetterSpacing;
