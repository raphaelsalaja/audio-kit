import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeft({
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
          d="M8.44801 3.609L1.86701 8.602C1.60301 8.802 1.60301 9.199 1.86701 9.399L8.44801 14.392C8.77701 14.642 9.25001 14.407 9.25001 13.994V11.251H15.25C15.802 11.251 16.25 10.803 16.25 10.251V7.751C16.25 7.199 15.802 6.751 15.25 6.751H9.25001V4.008C9.25001 3.595 8.77701 3.359 8.44801 3.609Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.44801 3.609L1.86701 8.602C1.60301 8.802 1.60301 9.199 1.86701 9.399L8.44801 14.392C8.77701 14.642 9.25001 14.407 9.25001 13.994V11.251H15.25C15.802 11.251 16.25 10.803 16.25 10.251V7.751C16.25 7.199 15.802 6.751 15.25 6.751H9.25001V4.008C9.25001 3.595 8.77701 3.359 8.44801 3.609Z"
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

export default ArrowBoldLeft;
