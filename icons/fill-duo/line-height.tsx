import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LineHeight({
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
          d="M8.72703 4C8.41748 4 8.13973 4.19018 8.02779 4.47878L4.73077 12.9788C4.58098 13.365 4.77261 13.7994 5.15879 13.9492C5.54497 14.099 5.97946 13.9074 6.12925 13.5212L6.91325 11.5L11.0868 11.5L11.8708 13.5212C12.0206 13.9074 12.4551 14.099 12.8412 13.9492C13.2274 13.7994 13.4191 13.365 13.2693 12.9788L9.97225 4.47878C9.86031 4.19018 9.58256 4 9.27301 4H8.72703ZM10.505 10L9.00002 6.12014L7.49508 10L10.505 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 2.25C2 1.83579 2.33579 1.5 2.75 1.5H15.25C15.6642 1.5 16 1.83579 16 2.25C16 2.66421 15.6642 3 15.25 3H2.75C2.33579 3 2 2.66421 2 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 15.75C2 15.3358 2.33579 15 2.75 15H15.25C15.6642 15 16 15.3358 16 15.75C16 16.1642 15.6642 16.5 15.25 16.5H2.75C2.33579 16.5 2 16.1642 2 15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LineHeight;
