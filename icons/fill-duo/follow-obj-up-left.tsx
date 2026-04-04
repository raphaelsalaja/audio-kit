import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjUpLeft({
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
          d="M7.25 2H3.75C2.7835 2 2 2.7835 2 3.75V7.25C2 8.2165 2.7835 9 3.75 9H7.25C8.2165 9 9 8.2165 9 7.25V3.75C9 2.7835 8.2165 2 7.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.061 11H14.761C15.175 11 15.511 10.664 15.511 10.25C15.511 9.836 15.175 9.5 14.761 9.5H10.25C9.836 9.5 9.5 9.836 9.5 10.25V14.76C9.5 15.174 9.836 15.51 10.25 15.51C10.664 15.51 11 15.174 11 14.76V12.06L14.72 15.78C14.866 15.926 15.058 16 15.25 16C15.442 16 15.634 15.927 15.78 15.78C16.073 15.487 16.073 15.012 15.78 14.719L12.06 10.999L12.061 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjUpLeft;
