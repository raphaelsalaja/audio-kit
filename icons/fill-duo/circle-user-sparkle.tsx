import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserSparkle({
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
          d="M1 9.0005C1 4.58229 4.58179 1.0005 9 1.0005C13.4182 1.0005 17 4.58229 17 9.0005C17 13.4187 13.4182 17.0005 9 17.0005C4.58179 17.0005 1 13.4187 1 9.0005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.59 7.16051L10.075 6.6545L9.57004 5.1395C9.40604 4.6495 8.59503 4.6495 8.43103 5.1395L7.92602 6.6545L6.41104 7.16051C6.16604 7.24151 6.00104 7.47151 6.00104 7.72951C6.00104 7.98751 6.16604 8.2175 6.41104 8.2985L7.92602 8.80451L8.43103 10.3195C8.51303 10.5645 8.74304 10.7295 9.00104 10.7295C9.25904 10.7295 9.48804 10.5645 9.57104 10.3195L10.076 8.80451L11.591 8.2985C11.836 8.2175 12.001 7.98751 12.001 7.72951C12.001 7.47151 11.835 7.24251 11.59 7.16051Z"
          fill={fill}
        />
        <path
          d="M13.5966 15.5489C12.2961 16.4635 10.7107 17.0005 9.00001 17.0005C7.28925 17.0005 5.70389 16.4635 4.40332 15.5488C4.93545 13.5078 6.79053 12 8.99996 12C11.2094 12 13.0645 13.5078 13.5966 15.5489Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleUserSparkle;
