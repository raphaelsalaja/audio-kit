import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExpandObj({
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
          d="M7.00009 2.25C7.00009 1.8359 6.66419 1.5 6.25009 1.5H3.25009C2.28529 1.5 1.50009 2.2852 1.50009 3.25V6.25C1.50009 6.6641 1.83599 7 2.25009 7C2.66419 7 3.00009 6.6641 3.00009 6.25V3.25C3.00009 3.1123 3.11239 3 3.25009 3H6.25009C6.66419 3 7.00009 2.6641 7.00009 2.25Z"
          fill={fill}
        />
        <path
          d="M15.7501 11C15.336 11 15.0001 11.3359 15.0001 11.75V14.75C15.0001 14.8877 14.8878 15 14.7501 15H11.7501C11.336 15 11.0001 15.3359 11.0001 15.75C11.0001 16.1641 11.336 16.5 11.7501 16.5H14.7501C15.7149 16.5 16.5001 15.7148 16.5001 14.75V11.75C16.5001 11.3359 16.1642 11 15.7501 11Z"
          fill={fill}
        />
        <path
          d="M10.7501 5H7.25009C6.00745 5 5.00009 6.00736 5.00009 7.25V10.75C5.00009 11.9926 6.00745 13 7.25009 13H10.7501C11.9927 13 13.0001 11.9926 13.0001 10.75V7.25C13.0001 6.00736 11.9927 5 10.7501 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ExpandObj;
