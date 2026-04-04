import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FireFlame({
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
          d="M6.96664 16.2474C3.68969 14.9144 2.97824 11.9419 3.52309 9.49911C3.87624 8.16418 4.89752 7.1516 5.92327 6.1346C7.19176 4.87693 8.46706 3.6125 8.49401 1.72331C9.36927 2.26548 10.1264 3.54882 10.3269 4.22267C10.4504 4.30272 10.5853 4.38469 10.7285 4.47175C11.9741 5.22908 13.8549 6.37249 14.4925 9.99898C15.1986 14.0151 12.5112 15.8065 11.0508 16.2115C11.0566 14.7913 10.3049 12.4137 8.84162 11.7438C8.82759 12.7277 8.33508 13.2492 7.85157 13.7611C7.28541 14.3605 6.73159 14.9469 6.97275 16.2474L6.96664 16.2474Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.96197 16.25C6.68197 13.5 8.76497 14.153 8.83697 11.749C10.418 12.6 11.076 14.736 11.037 16.214"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.037 16.214C14.938 14.698 15.762 10.381 13.001 6.364"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.533 7.37C10.533 7.37 11.229 3.604 8.48901 1.75C8.12501 6.125 3.38 6.281 3.38 10.987C3.38 13.104 4.476 15.389 6.962 16.25"
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

export default FireFlame;
