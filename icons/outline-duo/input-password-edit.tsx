import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordEdit({
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
          d="M9.63182 12.8379C9.73822 12.4668 9.93651 12.1299 10.208 11.8604L13.3662 8.70221C13.9785 8.08891 14.7949 7.75098 15.6641 7.75098C15.7782 7.75098 16.0469 7.76499 16.1589 7.77649L16.0001 7C16.0001 5.895 15.1051 5 14.0001 5H4.00012C2.89512 5 2.00012 5.895 2.00012 7V11C2.00012 12.105 2.89512 13 4.00012 13L9.47072 13.2941L9.63182 12.8379Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.5 10C6.052 10 6.5 9.552 6.5 9C6.5 8.448 6.052 8 5.5 8C4.948 8 4.5 8.448 4.5 9C4.5 9.552 4.948 10 5.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 7.05713V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H8.73441"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 15.4543L16.9571 12.2931C17.3476 11.9026 17.3476 11.2693 16.9571 10.8788L16.3713 10.2931C15.9808 9.90256 15.3476 9.90256 14.9571 10.2931L11.7959 13.4543L11.0001 16.2502L13.7959 15.4543Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7959 15.4543L16.9571 12.2931C17.3476 11.9026 17.3476 11.2693 16.9571 10.8788L16.3713 10.2931C15.9808 9.90256 15.3476 9.90256 14.9571 10.2931L11.7959 13.4543L11.0001 16.2502L13.7959 15.4543Z"
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

export default InputPasswordEdit;
