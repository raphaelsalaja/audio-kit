import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOld2({
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
          d="M4.75101 9.21624C7.64993 11.6468 10.3486 11.5809 13.249 9.2104C13.2497 9.1391 13.25 9.06896 13.25 9C13.25 6.473 12.838 4.349 12.404 2.783C12.312 2.45 12.048 2.183 11.713 2.096C10.629 1.815 9.684 1.75 9 1.75C7.935 1.75 7.023 1.907 6.313 2.089C5.965 2.179 5.689 2.447 5.593 2.793C4.907 5.273 4.75 7.44 4.75 9C4.75 9.07241 4.75034 9.14449 4.75101 9.21624Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.407 15.207C12.311 15.553 12.035 15.821 11.687 15.911C10.977 16.093 10.065 16.25 9 16.25C8.316 16.25 7.371 16.185 6.287 15.904C5.952 15.817 5.68799 15.55 5.59599 15.217C5.16199 13.651 4.75 11.527 4.75 9C4.75 7.44 4.907 5.273 5.593 2.793C5.689 2.447 5.965 2.179 6.313 2.089C7.023 1.907 7.935 1.75 9 1.75C9.684 1.75 10.629 1.81499 11.713 2.09599C12.048 2.18299 12.312 2.45 12.404 2.783C12.838 4.349 13.25 6.473 13.25 9C13.25 10.56 13.093 12.727 12.407 15.207Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 14C8.164 14 8.5 13.664 8.5 13.25C8.5 12.836 8.164 12.5 7.75 12.5C7.336 12.5 7 12.836 7 13.25C7 13.664 7.336 14 7.75 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.25 14C10.664 14 11 13.664 11 13.25C11 12.836 10.664 12.5 10.25 12.5C9.836 12.5 9.5 12.836 9.5 13.25C9.5 13.664 9.836 14 10.25 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.25 5.75H7.75V7.25H10.25V5.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 9C4.949 9.24 6.456 11 9 11C9.312 11 11.629 10.96 13.25 9"
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

export default PhoneOld2;
