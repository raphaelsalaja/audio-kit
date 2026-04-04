import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dna({
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
          d="M6.72535 6.57433C5.50068 7.63925 5.82016 9.1568 6.40586 11.6327C7.68378 12.0853 10.639 12.4847 11.3844 11.4198C12.1299 10.3548 12.5292 8.35811 11.5441 6.38798C9.81363 5.93539 7.95002 5.50942 6.72535 6.57433Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.411 11.589C5.505 11.33 4.598 11.071 3.304 11.071C2.742 11.071 2.195 11.258 1.75 11.602"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.603 1.75C11.259 2.195 11.072 2.741 11.072 3.304C11.072 5.893 12.108 6.929 12.108 9.518C12.108 10.233 11.818 10.88 11.35 11.349C10.881 11.818 10.234 12.107 9.51899 12.107C9.38599 12.107 9.25699 12.104 9.13199 12.099"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.86901 5.90101C8.74401 5.89601 8.61501 5.89301 8.48201 5.89301C7.76701 5.89301 7.12001 6.18301 6.65101 6.65101C6.18201 7.12001 5.89301 7.76701 5.89301 8.48201C5.89301 11.071 6.92901 12.107 6.92901 14.696C6.92901 15.258 6.74201 15.805 6.39801 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.39697C15.805 6.74097 15.259 6.92797 14.696 6.92797C13.401 6.92797 12.495 6.66897 11.589 6.40997"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.46901 9.46901L9.00001 9.00001L8.53101 8.53101"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.388 4.549L13.919 4.081L13.451 3.612"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.541 14.396L4.072 13.928L3.604 13.459"
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

export default Dna;
