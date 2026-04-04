import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Accessibility({
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
          d="M9 4.5C10.1046 4.5 11 3.60457 11 2.5C11 1.39543 10.1046 0.5 9 0.5C7.89543 0.5 7 1.39543 7 2.5C7 3.60457 7.89543 4.5 9 4.5Z"
          fill={fill}
        />
        <path
          d="M15.123 5.01101C11.09 5.70101 6.91001 5.70101 2.87701 5.01101C2.46801 4.94001 2.08101 5.21501 2.01101 5.62401C1.94101 6.03201 2.21501 6.42001 2.62301 6.49001C3.90301 6.70901 5.20001 6.85401 6.50001 6.94101V16.501C6.50001 16.915 6.83601 17.251 7.25001 17.251C7.66401 17.251 8.00001 16.915 8.00001 16.501V12.001H10V16.501C10 16.915 10.336 17.251 10.75 17.251C11.164 17.251 11.5 16.915 11.5 16.501V6.94001C12.8 6.85401 14.097 6.70901 15.377 6.48901C15.785 6.41901 16.06 6.03101 15.989 5.62301C15.92 5.21401 15.532 4.94001 15.123 5.01101Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Accessibility;
