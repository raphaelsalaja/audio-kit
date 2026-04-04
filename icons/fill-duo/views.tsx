import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Views({
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
          d="M13.7501 2H4.25009C2.73349 2 1.50009 3.2334 1.50009 4.75V11.25C1.50009 12.7666 2.73349 14 4.25009 14H13.7501C15.2667 14 16.5001 12.7666 16.5001 11.25V4.75C16.5001 3.2334 15.2667 2 13.7501 2ZM9.00009 10C7.89549 10 7.00009 9.1045 7.00009 8C7.00009 6.8955 7.89549 6 9.00009 6C10.1047 6 11.0001 6.8955 11.0001 8C11.0001 9.1045 10.1047 10 9.00009 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 17H4.75009C4.33599 17 4.00009 16.6641 4.00009 16.25C4.00009 15.8359 4.33599 15.5 4.75009 15.5H13.2501C13.6642 15.5 14.0001 15.8359 14.0001 16.25C14.0001 16.6641 13.6642 17 13.2501 17Z"
          fill={fill}
        />
        <path
          d="M12.6911 7.10803C12.1511 6.41403 10.9551 5.25 9.00008 5.25C7.04508 5.25 5.84908 6.41401 5.30908 7.10901C4.89608 7.64201 4.89608 8.35799 5.30908 8.89099C5.84908 9.58499 7.04508 10.749 9.00008 10.749C10.9551 10.749 12.1511 9.58501 12.6911 8.89001C13.1041 8.35701 13.1041 7.64203 12.6911 7.10803ZM9.00008 9.5C8.17208 9.5 7.50008 8.828 7.50008 8C7.50008 7.172 8.17208 6.5 9.00008 6.5C9.82808 6.5 10.5001 7.172 10.5001 8C10.5001 8.828 9.82808 9.5 9.00008 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Views;
