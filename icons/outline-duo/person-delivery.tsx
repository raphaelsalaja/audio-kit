import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDelivery({
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
          d="M2.26202 4.24103L7.68173 3.88838C7.40365 2.66397 6.30856 1.75 4.99999 1.75C3.56854 1.75 2.39254 2.84369 2.26202 4.24103Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.473 11.75H15.527C15.792 11.75 16.012 11.957 16.026 12.222L16.22 15.722C16.236 16.009 16.008 16.25 15.721 16.25H11.278C10.991 16.25 10.763 16.009 10.779 15.722L10.973 12.222C10.988 11.957 11.208 11.75 11.473 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 11.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 16.25V11.626C1.75 10.571 2.569 9.698 3.622 9.63L10 9.22"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 7.25C6.51878 7.25 7.75 6.01878 7.75 4.5C7.75 2.98122 6.51878 1.75 5 1.75C3.48122 1.75 2.25 2.98122 2.25 4.5C2.25 6.01878 3.48122 7.25 5 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 10C12.25 9.31 12.81 8.75 13.5 8.75C14.19 8.75 14.75 9.31 14.75 10V11.75H12.25V10Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.473 11.75H15.527C15.792 11.75 16.012 11.957 16.026 12.222L16.22 15.722C16.236 16.009 16.008 16.25 15.721 16.25H11.278C10.991 16.25 10.763 16.009 10.779 15.722L10.973 12.222C10.988 11.957 11.208 11.75 11.473 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.29999 4.25L9.49999 3.75"
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

export default PersonDelivery;
