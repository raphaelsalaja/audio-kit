import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartPlus({
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
          d="M9.25 12.75C9.25 11.5093 10.2598 10.5 11.5 10.5H11.75V10.25C11.75 9.0093 12.7598 8 14 8C15.0101 8 15.8572 8.6738 16.1406 9.5925C16.5143 8.6872 16.7491 7.6963 16.7491 6.6118C16.7589 4.0845 14.7081 2.0156 12.1632 2C10.9679 2.0151 9.84001 2.4902 9.00011 3.3057C8.15931 2.4903 7.02841 2.0152 5.82241 2C3.29211 2.0156 1.2413 4.0845 1.2511 6.6089C1.2511 11.8604 6.5568 15.0381 8.1827 15.8872C8.4386 16.0205 8.7188 16.0874 8.9991 16.0874C9.2803 16.0874 9.5606 16.0205 9.8165 15.8872C10.1749 15.7002 10.7169 15.3935 11.3363 14.9834C10.1736 14.898 9.25 13.9346 9.25 12.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.5 12H14.75V10.25C14.75 9.8359 14.4141 9.5 14 9.5C13.5859 9.5 13.25 9.8359 13.25 10.25V12H11.5C11.0859 12 10.75 12.3359 10.75 12.75C10.75 13.1641 11.0859 13.5 11.5 13.5H13.25V15.25C13.25 15.6641 13.5859 16 14 16C14.4141 16 14.75 15.6641 14.75 15.25V13.5H16.5C16.9141 13.5 17.25 13.1641 17.25 12.75C17.25 12.3359 16.9141 12 16.5 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartPlus;
