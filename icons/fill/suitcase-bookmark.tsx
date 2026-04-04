import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseBookmark({
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
          d="M16.25 9.5H13.75C12.785 9.5 12 10.285 12 11.25V16.75C12 17.053 12.183 17.327 12.463 17.443C12.743 17.559 13.066 17.495 13.28 17.28L15 15.56L16.72 17.28C16.864 17.424 17.055 17.5 17.25 17.5C17.347 17.5 17.444 17.481 17.537 17.443C17.817 17.327 18 17.053 18 16.75V11.25C18 10.285 17.215 9.5 16.25 9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M17 6.75V8.08716C16.7592 8.03016 16.5081 8 16.25 8H13.75C11.9566 8 10.5 9.45657 10.5 11.25V16H3.75C2.233 16 1 14.767 1 13.25V6.75C1 5.233 2.233 4 3.75 4H14.25C15.767 4 17 5.233 17 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseBookmark;
