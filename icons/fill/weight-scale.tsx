import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WeightScale({
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
          d="M10.0777 7.07883C10.4484 7.26367 10.5991 7.71401 10.4142 8.08469L8.69372 11.5351C8.50888 11.9057 8.05854 12.0564 7.68785 11.8716C7.31717 11.6867 7.16651 11.2364 7.35135 10.8657L9.07185 7.41533C9.25669 7.04465 9.70704 6.89399 10.0777 7.07883Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 2H13.25C14.767 2 16 3.233 16 4.75V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V4.75C2 3.233 3.233 2 4.75 2ZM9 4.5C6.51479 4.5 4.5 6.51479 4.5 9V9.25C4.5 9.66421 4.83579 10 5.25 10H12.75C13.1642 10 13.5 9.66421 13.5 9.25V9C13.5 6.51479 11.4852 4.5 9 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WeightScale;
