import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DietApple({
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
          d="M12 0.25C12.276 0.25 12.5 0.474 12.5 0.75C12.5 2.13 11.38 3.25 10 3.25C9.724 3.25 9.5 3.026 9.5 2.75C9.5 1.37 10.62 0.25 12 0.25Z"
          fill={fill}
        />
        <path
          d="M2.75 7.5C1.78393 7.5 1 8.28334 1 9.25V11.25C1 12.2167 1.78393 13 2.75 13H10.25C11.2161 13 12 12.2167 12 11.25V9.25C12 8.28334 11.2161 7.5 10.25 7.5V9.25C10.25 9.66421 9.91421 10 9.5 10C9.08579 10 8.75 9.66421 8.75 9.25V7.5H7.25V9.25C7.25 9.66421 6.91421 10 6.5 10C6.08579 10 5.75 9.66421 5.75 9.25V7.5H4.25V9.25C4.25 9.66421 3.91421 10 3.5 10C3.08579 10 2.75 9.66421 2.75 9.25V7.5Z"
          fill={fill}
        />
        <path
          d="M14.927 4.81798C13.5447 3.71953 12.0497 4.01504 10.851 4.25198C9.91796 4.43698 9.19753 4.43888 8.29153 4.24088C7.1356 3.9889 5.70077 3.67612 4.19196 4.80498C3.35726 5.42909 2.83135 6.37951 2.61707 7.5H2.75H9.75H10.25C11.2165 7.5 12 8.2835 12 9.25V11.25C12 12.2165 11.2165 13 10.25 13H9.75185C9.75123 13 9.75062 13 9.75 13H3.67534C3.78658 13.204 3.90578 13.4065 4.03296 13.607C5.82503 16.4339 7.78475 16.0728 8.95718 15.8567C9.41818 15.7707 9.68396 15.771 10.144 15.856C10.4979 15.9218 10.9292 16.002 11.4 16.002C12.49 16.002 13.822 15.581 15.073 13.607C17.229 10.203 16.727 6.24398 14.927 4.81798Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DietApple;
