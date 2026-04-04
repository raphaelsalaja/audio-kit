import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseSearch({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M13.5 10C11.8433 10 10.5 11.3427 10.5 13C10.5 14.6573 11.8433 16 13.5 16C14.0564 16 14.5774 15.8486 15.024 15.5847L16.2197 16.7803C16.5126 17.0732 16.9874 17.0732 17.2803 16.7803C17.5732 16.4874 17.5732 16.0126 17.2803 15.7197L16.0847 14.524C16.3486 14.0774 16.5 13.5564 16.5 13C16.5 11.3427 15.1567 10 13.5 10ZM12 13C12 12.1713 12.6715 11.5 13.5 11.5C14.3285 11.5 15 12.1713 15 13C15 13.8287 14.3285 14.5 13.5 14.5C12.6715 14.5 12 13.8287 12 13Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M10.1457 16C9.43326 15.204 9 14.1527 9 13C9 10.5141 11.015 8.5 13.5 8.5C14.9135 8.5 16.175 9.15168 17 10.1712V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H10.1457Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseSearch;
