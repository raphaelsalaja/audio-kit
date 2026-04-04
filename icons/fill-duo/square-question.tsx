import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareQuestion({
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
          d="M13.25 2H4.75C3.231 2 2 3.23 2 4.75V13.25C2 14.77 3.231 16 4.75 16H13.25C14.769 16 16 14.77 16 13.25V4.75C16 3.23 14.769 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.852 10.5C8.7861 10.5 8.71919 10.4917 8.65279 10.4731C8.25339 10.3632 8.01849 9.95055 8.12839 9.55115C8.35939 8.71135 8.9404 8.31725 9.4072 8.00085C9.9043 7.66345 10.126 7.49264 10.1762 6.97754C10.2006 6.73094 10.1386 6.53015 9.98769 6.36365C9.78749 6.14245 9.44079 5.99988 9.10489 5.99988C8.69029 5.99988 7.94721 6.12982 7.62881 6.99792C7.48571 7.38662 7.05311 7.58681 6.66691 7.44421C6.27771 7.30211 6.078 6.871 6.2206 6.4823C6.6752 5.2411 7.75329 4.49988 9.10489 4.49988C9.86709 4.49988 10.6127 4.81976 11.099 5.35596C11.5375 5.83986 11.7347 6.45065 11.6693 7.12305C11.5482 8.36085 10.7972 8.87007 10.2489 9.24207C9.86119 9.50477 9.65511 9.65571 9.57461 9.94861C9.48331 10.2816 9.1811 10.5 8.852 10.5Z"
          fill={fill}
        />
        <path
          d="M8.79102 13.5C8.24002 13.5 7.79102 13.05 7.79102 12.5C7.79102 11.95 8.24002 11.5 8.79102 11.5C9.34202 11.5 9.79102 11.9501 9.79102 12.5C9.79102 13.0499 9.34202 13.5 8.79102 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareQuestion;
