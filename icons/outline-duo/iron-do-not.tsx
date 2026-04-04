import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IronDoNot({
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
          d="M11.0805 6.91953C10.8439 6.86616 10.6026 6.82685 10.3579 6.80232L2.44052 6.00897L1.75467 12.2503H5.74972L11.0805 6.91953Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.2263 12.2503H9.87145L9.45624 11.7258L13.2879 7.9071C14.0491 8.45696 14.6677 9.18779 15.107 10.051L16.2263 12.2503Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 12.25H1.75C1.75 12.25 2.337 6.66999 2.537 4.77099C2.654 3.65999 3.658 2.86099 4.767 2.99499C6.376 3.18999 7.985 3.38499 9.594 3.57999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 6.25L10.519 6.881C10.694 6.901 10.866 6.928 11.037 6.963"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10C7.16421 10 7.5 9.66421 7.5 9.25C7.5 8.83579 7.16421 8.5 6.75 8.5C6.33579 8.5 6 8.83579 6 9.25C6 9.66421 6.33579 10 6.75 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.8558 8.38641C14.4041 8.88071 14.8642 9.47941 15.204 10.159L16.25 12.25H9.99219"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.99219 15.25H16.25"
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

export default IronDoNot;
