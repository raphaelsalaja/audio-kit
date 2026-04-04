import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HistogramAxisX({
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
          d="M6.25482 4.39078C6.86668 3.58335 7.72881 3 9 3C10.2712 3 11.1333 3.58335 11.7452 4.39078C12.3152 5.14294 12.6942 6.12981 13.0393 6.96299C13.4067 7.8501 13.7502 8.60754 14.2423 9.15474C14.6965 9.65975 15.2913 10 16.25 10C16.6642 10 17 10.3358 17 10.75C17 11.1642 16.6642 11.5 16.25 11.5C14.8477 11.5 13.8532 10.9653 13.127 10.1578C12.4387 9.39246 12.0109 8.3999 11.6535 7.53701C11.2737 6.62019 10.9743 5.85706 10.5497 5.29672C10.1669 4.79165 9.71831 4.5 9 4.5C8.28169 4.5 7.83307 4.79165 7.45034 5.29672C7.02572 5.85706 6.7263 6.62019 6.34653 7.53701C5.98911 8.3999 5.56126 9.39246 4.87302 10.1578C4.14683 10.9653 3.15235 11.5 1.75 11.5C1.33579 11.5 1 11.1642 1 10.75C1 10.3358 1.33579 10 1.75 10C2.70865 10 3.30354 9.65975 3.7577 9.15474C4.2498 8.60754 4.59326 7.8501 4.96072 6.96299C5.30583 6.12981 5.68484 5.14294 6.25482 4.39078Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 14.25C1 13.8358 1.33579 13.5 1.75 13.5H16.25C16.6642 13.5 17 13.8358 17 14.25C17 14.6642 16.6642 15 16.25 15H1.75C1.33579 15 1 14.6642 1 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HistogramAxisX;
