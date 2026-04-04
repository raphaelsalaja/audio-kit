import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExpandObj2({
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
          d="M14.7501 1.5H11.7501C11.336 1.5 11.0001 1.8359 11.0001 2.25C11.0001 2.6641 11.336 3 11.7501 3H14.7501C14.8878 3 15.0001 3.1123 15.0001 3.25V6.25C15.0001 6.6641 15.336 7 15.7501 7C16.1642 7 16.5001 6.6641 16.5001 6.25V3.25C16.5001 2.2852 15.7149 1.5 14.7501 1.5Z"
          fill={fill}
        />
        <path
          d="M6.25009 15H3.25009C3.11239 15 3.00009 14.8877 3.00009 14.75V11.75C3.00009 11.3359 2.66419 11 2.25009 11C1.83599 11 1.50009 11.3359 1.50009 11.75V14.75C1.50009 15.7148 2.28529 16.5 3.25009 16.5H6.25009C6.66419 16.5 7.00009 16.1641 7.00009 15.75C7.00009 15.3359 6.66419 15 6.25009 15Z"
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

export default ExpandObj2;
