import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder4({
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
          d="M1.18898 9.01985C1.02278 7.95847 1.84411 7 2.91799 7H15.082C16.156 7 16.9773 7.95867 16.8109 9.02017L15.873 15.0196C15.7401 15.8715 15.0068 16.5 14.144 16.5H3.85599C2.99321 16.5 2.26 15.8716 2.12698 15.0198M2.12698 15.0198L1.18898 9.01985L2.12698 15.0198Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 1.5C3.03379 1.5 2.25 2.28379 2.25 3.25V7.13159C2.45498 7.04696 2.6803 7 2.91799 7H15.082C15.3197 7 15.545 7.04696 15.75 7.1316V5.25C15.75 4.28379 14.9662 3.5 14 3.5H8.66575L7.92952 2.32172C7.61 1.81188 7.05045 1.5 6.44601 1.5H4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Folder4;
