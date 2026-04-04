import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Train({
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
          d="M2.83769 3.50098C2.96653 2.0845 4.15409 1 5.5764 1H12.4235C13.8458 1 15.0334 2.08462 15.1622 3.50097L15.7986 10.501C15.9451 12.1114 14.677 13.5 13.0599 13.5H4.94001C3.3229 13.5 2.05484 12.1115 2.20128 10.501L2.83769 3.50098Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 11C6.552 11 7 10.552 7 10C7 9.448 6.552 9 6 9C5.448 9 5 9.448 5 10C5 10.552 5.448 11 6 11Z"
          fill={fill}
        />
        <path
          d="M12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11Z"
          fill={fill}
        />
        <path
          d="M13.2627 7.49999L12.9673 3H5.03271L4.7373 7.49999H13.2627Z"
          fill={fill}
        />
        <path
          d="M4.65912 13.4859L3.30101 16.9781C3.15088 17.3642 3.34213 17.7989 3.72818 17.949C4.11423 18.0991 4.54889 17.9079 4.69902 17.5218L5.0964 16.5H12.9036L13.301 17.5218C13.4511 17.9079 13.8858 18.0991 14.2719 17.949C14.6579 17.7989 14.8492 17.3642 14.699 16.9781L13.3409 13.4859C13.2486 13.4952 13.1548 13.5 13.0599 13.5H11.737L12.3203 15H5.67973L6.26306 13.5H4.94001C4.84511 13.5 4.7514 13.4952 4.65912 13.4859Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Train;
