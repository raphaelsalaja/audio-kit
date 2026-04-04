import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Earphones({
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
          d="M6.62292 5.3714L6.71823 4.8587"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.47798 3.69079C8.95128 2.78369 7.98098 2.07219 6.76918 1.84699C4.73298 1.46859 2.81649 2.59249 2.48859 4.35719C2.29499 5.39919 2.70879 6.42439 3.49099 7.17319L2.31909 13.4798C2.21829 14.0225 2.57689 14.5448 3.11959 14.6457L4.10279 14.8284C4.64549 14.9292 5.1678 14.5706 5.2687 14.0279L6.33359 8.29689C7.26369 8.30239 8.12639 8.00919 8.77199 7.48999L9.47798 3.69079Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.3771 12.6286L11.2818 13.1413"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.52197 14.3092C9.04867 15.2163 10.019 15.9278 11.2308 16.153C13.267 16.5314 15.1835 15.4075 15.5114 13.6428C15.705 12.6008 15.2912 11.5756 14.509 10.8268L15.6809 4.5202C15.7817 3.9775 15.4231 3.4552 14.8804 3.3543L13.8972 3.1716C13.3545 3.0708 12.8322 3.4294 12.7313 3.9721L11.6664 9.7031C10.7363 9.6976 9.87357 9.9908 9.22797 10.51L8.52197 14.3092Z"
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

export default Earphones;
