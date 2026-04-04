import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewMinusSign({
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
          d="M9.49996 14.251C9.49996 13.0103 10.5093 12.001 11.75 12.001H15.535C15.9829 11.4824 16.3389 10.958 16.6079 10.4829C17.1343 9.5547 17.1343 8.4458 16.6084 7.5171C15.5469 5.6436 13.1475 3 8.99996 3C4.85246 3 2.45305 5.6436 1.39205 7.5171C0.865653 8.4458 0.865657 9.5542 1.39156 10.4829C2.45306 12.3564 4.85246 15 8.99996 15C9.21566 15 9.42375 14.9888 9.63005 14.9749C9.55175 14.7466 9.49996 14.5057 9.49996 14.251ZM5.99996 9C5.99996 7.3433 7.34316 6 8.99996 6C10.6568 6 12 7.3433 12 9C12 10.6567 10.6569 12 8.99996 12C7.34306 12 5.99996 10.6567 5.99996 9Z"
          fill={fill}
        />
        <path
          d="M16.75 13.501H11.75C11.336 13.501 11 13.837 11 14.251C11 14.665 11.336 15.001 11.75 15.001H16.75C17.164 15.001 17.5 14.665 17.5 14.251C17.5 13.837 17.164 13.501 16.75 13.501Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ViewMinusSign;
