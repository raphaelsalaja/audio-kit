import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserSparkle({
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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.8242 10.0405C10.2466 9.85929 9.63769 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.46299 15.9014 7.08389 16.2495 8.99999 16.2495C9.03409 16.2495 9.06449 16.2456 9.09819 16.2451"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.9873 13.0386L15.0928 12.4077L14.4615 10.5132C14.3594 10.2075 14.0728 10.0005 13.7501 10.0005C13.4274 10.0005 13.1407 10.2075 13.0387 10.5132L12.4074 12.4077L10.5129 13.0386C10.2067 13.1411 10.0002 13.4273 10.0002 13.7505C10.0002 14.0737 10.2067 14.3599 10.5129 14.4624L12.4074 15.0933L13.0387 16.9878C13.1408 17.2935 13.4274 17.5005 13.7501 17.5005C14.0728 17.5005 14.3595 17.2935 14.4615 16.9878L15.0928 15.0933L16.9873 14.4624C17.2935 14.3599 17.5 14.0737 17.5 13.7505C17.5 13.4273 17.2935 13.1411 16.9873 13.0386Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default UserSparkle;
