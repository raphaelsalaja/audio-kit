import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopePhone({
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
          d="M14.25 2.75H3.75C2.6454 2.75 1.75 3.6454 1.75 4.75V5.25L8.517 8.983C8.8176 9.1488 9.1824 9.1488 9.483 8.983L16.25 5.25V4.75C16.25 3.6454 15.3546 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 5.25L8.517 8.983C8.818 9.149 9.182 9.149 9.483 8.983L16.25 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 11.8086V4.75C16.25 3.645 15.3546 2.75 14.25 2.75H3.75C2.6454 2.75 1.75 3.645 1.75 4.75V12.25C1.75 13.355 2.6454 14.25 3.75 14.25H8.2641"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4164 13.905L13.0201 12.523C13.1976 12.381 13.257 12.137 13.1648 11.929L12.806 11.047C12.7067 10.823 12.4603 10.704 12.2235 10.766L11.1127 11.131C10.8986 11.201 10.748 11.408 10.7622 11.633C10.9518 14.642 13.3586 17.048 16.3671 17.238C16.592 17.252 16.7989 17.101 16.8693 16.887L17.2342 15.777C17.2956 15.54 17.1767 15.293 16.9531 15.194L16.0707 14.835C15.863 14.743 15.6193 14.802 15.4773 14.98L14.0951 16.584"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.4164 13.905L13.0201 12.523C13.1976 12.381 13.257 12.137 13.1648 11.929L12.806 11.047C12.7067 10.823 12.4603 10.704 12.2235 10.766L11.1127 11.131C10.8986 11.201 10.748 11.408 10.7622 11.633C10.9518 14.642 13.3586 17.048 16.3671 17.238C16.592 17.252 16.7989 17.101 16.8693 16.887L17.2342 15.777C17.2956 15.54 17.1767 15.293 16.9531 15.194L16.0707 14.835C15.863 14.743 15.6193 14.802 15.4773 14.98L14.0951 16.584"
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

export default EnvelopePhone;
