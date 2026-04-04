import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScissorsCoupon2({
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
          d="M16.25 8.10449C16.25 6.99992 15.3546 5.89648 14.25 5.89648H11.8055V6.60822L12.5967 8.18784C12.7875 8.6977 12.8042 9.28713 12.5967 9.81738L12.5088 10.0146C12.0156 10.9907 10.9103 11.4508 9.89648 11.168C9.03801 10.8804 8.26815 10.3908 7.46289 9.98633C7.23946 11.8269 5.7669 13.2836 3.91797 13.4785L3.46191 13.9971C3.7901 14.653 4.46665 15.1045 5.25 15.1045H14.25C15.3545 15.1045 16.2498 14.2089 16.25 13.1045V8.10449Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.49402 5.25C4.46002 5.25 5.24402 4.466 5.24402 3.5C5.24402 2.534 4.46002 1.75 3.49402 1.75C2.52702 1.75 1.74402 2.534 1.74402 3.5C1.74402 4.466 2.52702 5.25 3.49402 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.70099 5.06L10.5 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.49402 11.25C4.46002 11.25 5.24402 10.466 5.24402 9.5C5.24402 8.534 4.46002 7.75 3.49402 7.75C2.52702 7.75 1.74402 8.534 1.74402 9.5C1.74402 10.466 2.52702 11.25 3.49402 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.70099 7.94L10.5 4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.00488 14.209C4.34508 14.8267 4.99448 15.25 5.74998 15.25H14.25C15.355 15.25 16.25 14.355 16.25 13.25V8.25C16.25 7.145 15.355 6.25 14.25 6.25H12.4467"
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

export default ScissorsCoupon2;
