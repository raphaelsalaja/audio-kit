import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Radar({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9 1ZM9 4.5C6.51475 4.5 4.5 6.51475 4.5 9C4.5 11.4852 6.51475 13.5 9 13.5C11.4852 13.5 13.5 11.4852 13.5 9C13.5 6.51475 11.4852 4.5 9 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V2C9.75 2.41421 9.41421 2.75 9 2.75C8.58579 2.75 8.25 2.41421 8.25 2V1C8.25 0.585786 8.58579 0.25 9 0.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.25 9C15.25 8.58579 15.5858 8.25 16 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H16C15.5858 9.75 15.25 9.41421 15.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 15.25C9.41421 15.25 9.75 15.5858 9.75 16V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V16C8.25 15.5858 8.58579 15.25 9 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2C2.41421 8.25 2.75 8.58579 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.5 9C4.5 6.51475 6.51475 4.5 9 4.5C11.4852 4.5 13.5 6.51475 13.5 9C13.5 11.4852 11.4852 13.5 9 13.5C6.51475 13.5 4.5 11.4852 4.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M15.3993 3.66134C15.6922 3.36845 15.6922 2.89358 15.3993 2.60068C15.1064 2.30779 14.6316 2.30779 14.3387 2.60068L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82323 9.23744 9.82323 9.53033 9.53033L15.3993 3.66134Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Radar;
