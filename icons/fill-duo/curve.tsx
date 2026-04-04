import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Curve({
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
          d="M7.88497 13.4283C6.83276 14.7133 5.24104 15.5 2.75 15.5C2.33579 15.5 2 15.1642 2 14.75C2 14.3358 2.33579 14 2.75 14C4.88396 14 6.01099 13.3492 6.72441 12.478C7.48997 11.543 7.86189 10.2694 8.27827 8.79603C8.28524 8.77137 8.29222 8.74664 8.29922 8.72186C8.69006 7.33815 9.13257 5.77154 10.115 4.57172C11.1672 3.28671 12.759 2.5 15.25 2.5C15.6642 2.5 16 2.83579 16 3.25C16 3.66421 15.6642 4 15.25 4C13.116 4 11.989 4.65079 11.2756 5.52203C10.51 6.45696 10.1381 7.73062 9.72173 9.20397C9.71476 9.22863 9.70778 9.25336 9.70078 9.27814C9.30994 10.6619 8.86744 12.2285 7.88497 13.4283Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Curve;
