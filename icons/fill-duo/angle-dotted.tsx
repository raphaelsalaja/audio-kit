import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AngleDotted({
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
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H4.75C3.23079 16 2 14.7692 2 13.25V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.42899 9.53302C5.84299 9.53302 6.17899 9.19722 6.17899 8.78302C6.17899 8.36882 5.84299 8.03302 5.42899 8.03302C5.01499 8.03302 4.67899 8.36882 4.67899 8.78302C4.67899 9.19722 5.01499 9.53302 5.42899 9.53302Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.70001 11.05C8.11401 11.05 8.45001 10.7142 8.45001 10.3C8.45001 9.88579 8.11401 9.54999 7.70001 9.54999C7.28601 9.54999 6.95001 9.88579 6.95001 10.3C6.95001 10.7142 7.28601 11.05 7.70001 11.05Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.21701 13.321C9.63101 13.321 9.96701 12.9852 9.96701 12.571C9.96701 12.1568 9.63101 11.821 9.21701 11.821C8.80301 11.821 8.46701 12.1568 8.46701 12.571C8.46701 12.9852 8.80301 13.321 9.21701 13.321Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default AngleDotted;
