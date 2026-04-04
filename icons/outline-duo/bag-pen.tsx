import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagPen({
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
          d="M13.5459 16.4542L16.7071 13.293C17.0976 12.9025 17.0976 12.2693 16.7071 11.8788L16.1213 11.293C15.7308 10.9025 15.0976 10.9025 14.7071 11.293L11.5459 14.4542L10.7501 17.2501L13.5459 16.4542Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.6671 4.75C13.704 4.75004 14.5703 5.54318 14.6593 6.57715L14.8517 8.80078C14.2045 8.9173 13.5934 9.22511 13.1163 9.70215L9.95517 12.8633C9.67232 13.1462 9.48068 13.4959 9.38193 13.8379L8.66087 16.25H4.68076C3.50793 16.2499 2.58669 15.245 2.68857 14.0771L3.34091 6.57715C3.43091 5.54315 4.29708 4.75 5.33408 4.75H12.6671Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.7874 8.04939L14.659 6.57599C14.569 5.54299 13.704 4.74899 12.667 4.74899H5.33401C4.29701 4.74899 3.43101 5.54199 3.34201 6.57599L2.69 14.076C2.588 15.244 3.51 16.249 4.682 16.249H7.9154"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5459 16.4542L16.7071 13.293C17.0976 12.9025 17.0976 12.2693 16.7071 11.8788L16.1213 11.293C15.7308 10.9025 15.0976 10.9025 14.7071 11.293L11.5459 14.4542L10.7501 17.2501L13.5459 16.4542Z"
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

export default BagPen;
