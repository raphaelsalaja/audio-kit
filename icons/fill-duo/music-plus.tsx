import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicPlus({
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
          d="M4.5 1.25C4.5 0.835786 4.16421 0.5 3.75 0.5C3.33579 0.5 3 0.835786 3 1.25V3H1.25C0.835786 3 0.5 3.33579 0.5 3.75C0.5 4.16421 0.835786 4.5 1.25 4.5H3V6.25C3 6.66421 3.33579 7 3.75 7C4.16421 7 4.5 6.66421 4.5 6.25V4.5H6.25C6.66421 4.5 7 4.16421 7 3.75C7 3.33579 6.66421 3 6.25 3H4.5V1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 8.12111V11.314C4.623 11.12 4.202 11 3.75 11C2.233 11 1 12.233 1 13.75C1 15.267 2.233 16.5 3.75 16.5C5.267 16.5 6.5 15.267 6.5 13.75V7.38498L14 6.13498V9.81398C13.623 9.61998 13.202 9.49998 12.75 9.49998C11.233 9.49998 10 10.733 10 12.25C10 13.767 11.233 15 12.75 15C14.267 15 15.5 13.767 15.5 12.25V3.18098C15.5 2.66498 15.274 2.17898 14.881 1.84598C14.487 1.51298 13.973 1.37098 13.462 1.45498V1.45398L8.02034 2.36118C8.32081 2.74365 8.5 3.2259 8.5 3.75C8.5 4.99264 7.49264 6 6.25 6H6V6.25C6 7.0301 5.60299 7.71748 5 8.12111Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MusicPlus;
