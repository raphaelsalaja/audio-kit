import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUpToLine({
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
          d="M13.426 10.457L9.40501 4.90201C9.20501 4.62601 8.79501 4.62601 8.59501 4.90201L4.57401 10.457C4.33501 10.788 4.57101 11.25 4.97901 11.25H7.25001V15.25C7.25001 15.802 7.69801 16.25 8.25001 16.25H9.75001C10.302 16.25 10.75 15.802 10.75 15.25V11.25H13.021C13.429 11.25 13.665 10.787 13.426 10.457Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.426 10.457L9.40501 4.90201C9.20501 4.62601 8.79501 4.62601 8.59501 4.90201L4.57401 10.457C4.33501 10.788 4.57101 11.25 4.97901 11.25H7.25001V15.25C7.25001 15.802 7.69801 16.25 8.25001 16.25H9.75001C10.302 16.25 10.75 15.802 10.75 15.25V11.25H13.021C13.429 11.25 13.665 10.787 13.426 10.457Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 1.75H3.75"
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

export default ArrowBoldUpToLine;
