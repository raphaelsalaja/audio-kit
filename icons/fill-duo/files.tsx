import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Files({
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
          d="M7.25 3.5C5.73079 3.5 4.5 4.73079 4.5 6.25V14.25C4.5 15.7692 5.73079 17 7.25 17H13.25C14.7692 17 16 15.7692 16 14.25V8.164C16 7.70014 15.816 7.25536 15.4873 6.92667L12.5747 4.01409L12.574 4.0133C12.2449 3.68293 11.7983 3.5 11.336 3.5H7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.5 3.25C1.5 1.73079 2.73079 0.5 4.25 0.5H9.25C10.7692 0.5 12 1.73079 12 3.25V3.63072C11.7908 3.54502 11.5654 3.5 11.336 3.5H7.25C5.73079 3.5 4.5 4.73079 4.5 6.25V14H4.25C2.73079 14 1.5 12.7692 1.5 11.25V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M11.5 3.50769V7C11.5 7.552 11.948 8 12.5 8H15.9923C15.9543 7.59632 15.7771 7.2164 15.4873 6.92667L12.574 4.0133C12.284 3.7222 11.9028 3.54556 11.5 3.50769Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Files;
