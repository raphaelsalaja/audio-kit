import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vibrance({
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
          d="M14.8302 2.75C15.585 2.75017 16.0678 3.5558 15.7111 4.22168L9.88102 15.1055C9.50387 15.8091 8.49624 15.8074 8.1193 15.1035L2.28922 4.22168C1.93238 3.55571 2.41414 2.75 3.17008 2.75H14.8302ZM9.00016 5.75C8.03416 5.75 7.25016 6.534 7.25016 7.5C7.25016 8.466 8.03416 9.25 9.00016 9.25C9.96609 9.24992 10.7502 8.46595 10.7502 7.5C10.7502 6.53405 9.96609 5.75008 9.00016 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.881 15.105L15.711 4.222C16.068 3.556 15.585 2.75 14.83 2.75H3.17C2.414 2.75 1.932 3.556 2.289 4.222L8.119 15.104C8.496 15.808 9.504 15.809 9.881 15.105Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.25C9.966 9.25 10.75 8.466 10.75 7.5C10.75 6.534 9.966 5.75 9 5.75C8.034 5.75 7.25 6.534 7.25 7.5C7.25 8.466 8.034 9.25 9 9.25Z"
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

export default Vibrance;
